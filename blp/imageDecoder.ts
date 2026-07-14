import {BLPContent, type BLPImage} from './blpimage';
import {
    MAX_BLP_DECODE_BYTES,
    createImageData,
    decodeJPEGMipmap,
    getImageData as getJavaScriptImageData,
    reconstructJPEGMipmap,
    validateJPEGMipmap,
    type ImageDataLike,
    type ReconstructedJPEGMipmap
} from './decode';
import {BLP_JPEG_DECODER_WASM_BASE64} from './wasm/blpJpegDecoderBytes';

export type BLPDecoderBackend = 'wasm-simd' | 'javascript';
export type BLPDecoderBackendPreference = 'auto' | BLPDecoderBackend;

export interface BLPImageDecoder {
    readonly backend: BLPDecoderBackend;
    getImageData(blp: BLPImage, mipmapLevel: number): ImageDataLike;
    dispose(): void;
}

export interface CreateBLPImageDecoderOptions {
    backend?: BLPDecoderBackendPreference;
    wasmModule?: WebAssembly.Module | ArrayBuffer;
}

type WasmNumberFunction = (...arguments_: number[]) => number;
type WasmVoidFunction = (...arguments_: number[]) => void;

interface BLPJpegWasmExports {
    memory: WebAssembly.Memory;
    allocate: WasmNumberFunction;
    deallocate: WasmVoidFunction;
    decode_jpeg: WasmNumberFunction;
    result_pointer: WasmNumberFunction;
    result_length: WasmNumberFunction;
    result_width: WasmNumberFunction;
    result_height: WasmNumberFunction;
    clear_result: WasmVoidFunction;
}

class BLPWasmTrapError extends Error {
    readonly cause: unknown;

    constructor (operation: string, cause?: unknown) {
        super(`BLP WASM decoder trapped while ${operation}`);
        this.name = 'BLPWasmTrapError';
        this.cause = cause;
    }
}

class BLPWasmDecodeError extends Error {
    constructor (message: string) {
        super(message);
        this.name = 'BLPWasmDecodeError';
    }
}

function getFunction<T extends WasmNumberFunction | WasmVoidFunction> (
    exports: WebAssembly.Exports,
    name: string
): T {
    const value = exports[name];
    if (typeof value !== 'function') {
        throw new Error(`BLP WASM module is missing the ${name} export`);
    }
    return value as T;
}

function validateExports (exports: WebAssembly.Exports): BLPJpegWasmExports {
    if (!(exports.memory instanceof WebAssembly.Memory)) {
        throw new Error('BLP WASM module is missing the memory export');
    }
    return {
        memory: exports.memory,
        allocate: getFunction(exports, 'allocate'),
        deallocate: getFunction(exports, 'deallocate'),
        decode_jpeg: getFunction(exports, 'decode_jpeg'),
        result_pointer: getFunction(exports, 'result_pointer'),
        result_length: getFunction(exports, 'result_length'),
        result_width: getFunction(exports, 'result_width'),
        result_height: getFunction(exports, 'result_height'),
        clear_result: getFunction(exports, 'clear_result')
    };
}

function callWasm<T> (operation: string, callback: () => T): T {
    try {
        return callback();
    } catch (cause) {
        throw new BLPWasmTrapError(operation, cause);
    }
}

function assertMemoryRange (
    memory: WebAssembly.Memory,
    pointer: number,
    length: number,
    description: string
): void {
    if (!Number.isInteger(pointer) || !Number.isInteger(length)
        || pointer < 0 || length < 0 || pointer > memory.buffer.byteLength
        || length > memory.buffer.byteLength - pointer) {
        throw new BLPWasmDecodeError(`Invalid BLP WASM ${description} memory range`);
    }
}

class BLPJpegWasmDecoder {
    private readonly wasm: BLPJpegWasmExports;

    constructor (instance: WebAssembly.Instance) {
        this.wasm = validateExports(instance.exports);
    }

    decode (jpeg: ReconstructedJPEGMipmap): ImageDataLike {
        const inputLength = jpeg.data.byteLength;
        const inputPointer = callWasm('allocating JPEG input', () => this.wasm.allocate(inputLength));
        if (inputPointer === 0) {
            throw new BLPWasmDecodeError(`BLP WASM decoder rejected a ${inputLength}-byte JPEG input`);
        }

        let cleanupError: unknown;
        try {
            assertMemoryRange(this.wasm.memory, inputPointer, inputLength, 'input');
            callWasm('copying JPEG input', () => {
                new Uint8Array(this.wasm.memory.buffer, inputPointer, inputLength).set(jpeg.data);
            });
            const status = callWasm('decoding JPEG data', () => this.wasm.decode_jpeg(
                inputPointer,
                inputLength,
                jpeg.forceOpaque ? 1 : 0
            ));
            if (status !== 0) {
                throw new BLPWasmDecodeError(`BLP WASM JPEG decode failed with status ${status}`);
            }

            const resultPointer = callWasm('reading the result pointer', () => this.wasm.result_pointer());
            const resultLength = callWasm('reading the result length', () => this.wasm.result_length());
            const width = callWasm('reading the result width', () => this.wasm.result_width());
            const height = callWasm('reading the result height', () => this.wasm.result_height());
            const outputLength = width * height * 4;
            if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0
                || !Number.isSafeInteger(outputLength) || outputLength > MAX_BLP_DECODE_BYTES) {
                throw new BLPWasmDecodeError('BLP WASM output exceeds 128 MiB');
            }
            if (width !== jpeg.width || height !== jpeg.height || resultLength !== outputLength) {
                throw new BLPWasmDecodeError(
                    `Invalid BLP WASM result: expected ${jpeg.width}x${jpeg.height}, `
                    + `got ${width}x${height} (${resultLength} bytes)`
                );
            }
            assertMemoryRange(this.wasm.memory, resultPointer, resultLength, 'result');
            const pixels = new Uint8ClampedArray(resultLength);
            callWasm('copying decoded pixels', () => {
                pixels.set(new Uint8Array(this.wasm.memory.buffer, resultPointer, resultLength));
            });
            return createImageData(width, height, pixels);
        } finally {
            try {
                callWasm('clearing the decoded result', () => this.wasm.clear_result());
            } catch (error) {
                cleanupError = error;
            }
            try {
                callWasm('releasing JPEG input', () => this.wasm.deallocate(inputPointer, inputLength));
            } catch (error) {
                cleanupError ??= error;
            }
            if (cleanupError) {
                throw cleanupError;
            }
        }
    }

    dispose (): void {
        callWasm('clearing the decoded result', () => this.wasm.clear_result());
    }
}

class InitializedBLPImageDecoder implements BLPImageDecoder {
    readonly backend: BLPDecoderBackend;
    private disposed = false;
    private wasmHealthy = true;

    constructor (
        backend: BLPDecoderBackend,
        private wasm: BLPJpegWasmDecoder | undefined,
        private readonly allowFallback: boolean
    ) {
        this.backend = backend;
    }

    getImageData (blp: BLPImage, mipmapLevel: number): ImageDataLike {
        if (this.disposed) {
            throw new Error('BLP image decoder has been disposed');
        }
        if (blp.content !== BLPContent.JPEG) {
            return getJavaScriptImageData(blp, mipmapLevel);
        }

        const jpeg = validateJPEGMipmap(reconstructJPEGMipmap(blp, mipmapLevel));
        if (!this.wasm || !this.wasmHealthy) {
            return decodeJPEGMipmap(jpeg);
        }
        try {
            return this.wasm.decode(jpeg);
        } catch (error) {
            if (error instanceof BLPWasmTrapError) {
                this.wasmHealthy = false;
                try {
                    this.wasm.dispose();
                } catch {
                    // A trapped instance may not be safe enough to clean up.
                }
                this.wasm = undefined;
            }
            if (!this.allowFallback) {
                throw error;
            }
            return decodeJPEGMipmap(jpeg);
        }
    }

    dispose (): void {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        try {
            this.wasm?.dispose();
        } catch {
            // A failed cleanup must not make repeated disposal unsafe.
        }
        this.wasm = undefined;
        this.wasmHealthy = false;
    }
}

function decodeEmbeddedWasm (): ArrayBuffer {
    const binary = atob(BLP_JPEG_DECODER_WASM_BASE64);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; ++index) {
        bytes[index] = binary.charCodeAt(index);
    }
    return bytes.buffer;
}

async function instantiateWasm (
    source: WebAssembly.Module | ArrayBuffer
): Promise<BLPJpegWasmDecoder> {
    const module = source instanceof WebAssembly.Module
        ? source
        : await WebAssembly.compile(source);
    const instance = await WebAssembly.instantiate(module);
    return new BLPJpegWasmDecoder(instance);
}

export async function createBLPImageDecoder (
    options: CreateBLPImageDecoderOptions = {}
): Promise<BLPImageDecoder> {
    const preference = options.backend ?? 'auto';
    if (preference !== 'auto' && preference !== 'wasm-simd' && preference !== 'javascript') {
        throw new Error(`Unknown BLP decoder backend: ${preference}`);
    }
    if (preference === 'javascript') {
        return new InitializedBLPImageDecoder('javascript', undefined, false);
    }

    try {
        if (typeof WebAssembly === 'undefined') {
            throw new Error('WebAssembly is unavailable');
        }
        const wasm = await instantiateWasm(options.wasmModule ?? decodeEmbeddedWasm());
        return new InitializedBLPImageDecoder('wasm-simd', wasm, preference === 'auto');
    } catch (cause) {
        if (preference === 'auto') {
            return new InitializedBLPImageDecoder('javascript', undefined, false);
        }
        const error = new Error('Failed to initialize the BLP WASM SIMD decoder') as Error & {
            cause?: unknown;
        };
        error.cause = cause;
        throw error;
    }
}
