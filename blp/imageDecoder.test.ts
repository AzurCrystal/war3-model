import {beforeEach, describe, expect, it, vi} from 'vitest';
import {BLPContent} from './blpimage';
import {BLP1_FIXED_HEADER_BYTES, decode} from './decode';
import {createBLPImageDecoder} from './imageDecoder';

const SYNTHETIC_BASELINE_1 = '/9j/7gAOQWRvYmUAZAAAAAAA/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAFAgAAQABBEMRAE0RAFkRAEsRAP/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/aAA4EQwBNAFkASwAAPwD+wiv7WK/uor+riv/Z';
const SYNTHETIC_BASELINE_16 = '/9j/7gAOQWRvYmUAZAAAAAAA/9sAQwACAQEBAQECAQEBAgICAgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/8AAFAgAEAAQBEMRAE0RAFkRAEsRAP/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/aAA4EQwBNAFkASwAAPwD9Dv8Agpt/zEP+BV+h3/Dzb/qYP/ItfoB+1J+1J/x8/wDEx9f46/QD9sn9oD/j7/03+9/FX87/APwU2/5iH/AqP+Hm3/Uwf+Ra/N/9qT9qT/j5/wCJj6/x1+T/AO2T+0B/x9/6b/e/ir+iD/gpt/zEP+BV/O//AMPNv+pg/wDItH7Un7Un/Hz/AMTH1/jr6A/bJ/aA/wCPv/Tf738Vfzv/APBTb/mIf8Co/wCHm3/Uwf8AkWvg/wATeJvjL+1N8ZdG/Z8/Z88Hah4q8ZeKtQ+xaFoWmYMlxJgszFmISKJEV5JJpGWOKON5JGREZh+b+vaP8VP2yf2j/Cv7LfwUtvtfifxz4gh0rTN8U8kNr5jfvLu48iOSRLaCISTzSKjeXDDJIRhDX//Z';
const SYNTHETIC_PROGRESSIVE_16 = '/9j/7gAOQWRvYmUAZAAAAAAA/9sAQwACAQEBAQECAQEBAgICAgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/8IAFAgAEAAQBEMRAE0RAFkRAEsRAP/EABcAAQEBAQAAAAAAAAAAAAAAAAgJAAf/2gAOBEMATQBZAEsAAAABQ6HQCAnfjeT6ITv3QJ37g5v/AP/EABUQAQEAAAAAAAAAAAAAAAAAAAAH/9oACAFDAAEFAqapqmqa/8QAFRABAQAAAAAAAAAAAAAAAAAAABf/2gAIAU0AAQUCpqmqapr/xAAXEAEBAQEAAAAAAAAAAAAAAAAGAAQF/9oACAFZAAEFAlKmUqZSptOnsqez/8QAFxABAQEBAAAAAAAAAAAAAAAABgADBf/aAAgBSwABBQJkgmSCZILfHqskf//EABUQAQEAAAAAAAAAAAAAAAAAAAAD/9oACAFDAAY/AqKKKP/EABYQAAMAAAAAAAAAAAAAAAAAAAA0of/aAAgBTQAGPwJijFGKMU//xAAgEAABBAIBBQAAAAAAAAAAAAABAAIDBAYjERIhMUHB/9oACAFZAAY/AnbE7YnbFDj+P05LVy1J0QQR+XH4PZJ7ADkr/8QAIBAAAQMEAgMAAAAAAAAAAAAAAQACBAMREiIFBiExQf/aAAgBSwAGPwJ26dunbqL1bhW5SZ0gUqfgkNv7c6wJxAuSfgBK/8QAFRABAQAAAAAAAAAAAAAAAAAAAMH/2gAIAUMAAT8hssss/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBTQABPyESSf/EABkQAQEBAAMAAAAAAAAAAAAAAAEA8REhcf/aAAgBWQABPyHQtC0L3TOELy9ACkIIAt//xAAbEAABBAMAAAAAAAAAAAAAAAAAARFBoSExUf/aAAgBSwABPyGykspLKTMayutpQyZF4w//2gAOBEMATQBZAEsAAAAQAAD/xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAFDAAE/EAAB/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBTQABPxAEk//EABgQAQEBAQEAAAAAAAAAAAAAAAEAoREh/9oACAFZAAE/ENO6d074Xwe8ChA+gJHP/8QAGBAAAgMAAAAAAAAAAAAAAAAAAREAEGH/2gAIAUsAAT8QuyyzBnz4FHtEAI5//9k=';
const SYNTHETIC_RESTART_16 = '/9j/7gAOQWRvYmUAZAAAAAAA/9sAQwACAQEBAQECAQEBAgICAgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/8AAFAgAEAAQBEMRAE0RAFkRAEsRAP/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/dAAQAAf/aAA4EQwBNAFkASwAAPwD9Dv8Agpt/zEP+BV+h3/Dzb/qYP/ItfoB+1J+1J/x8/wDEx9f46/QD9sn9oD/j7/03+9/FX//Q/O3/AIKbf8xD/gVfod/w82/6mD/yLXP/ALUn7Un/AB8/8TH1/jrx/wDbJ/aA/wCPv/Tf738Vf//R/Q7/AIKbf8xD/gVfnb/w82/6mD/yLXP/ALUn7Un/AB8/8TH1/jroP2yf2gP+Pv8A03+9/FX/0vzt/wCCm3/MQ/4FX52/8PNv+pg/8i1+d/ibxN8Zf2pvjLo37Pn7Png7UPFXjLxVqH2LQtC0zBkuJMFmYsxCRRIivJJNIyxxRxvJIyIjMPz/ANe0f4qftk/tH+Ff2W/gpbfa/E/jnxBDpWmb4p5IbXzG/eXdx5EckiW0EQknmkVG8uGGSQjCGv/Z';

function setUint32 (view: DataView, word: number, value: number): void {
    view.setUint32(word * 4, value, true);
}

function createJPEGBLP (
    base64 = SYNTHETIC_BASELINE_1,
    width = 1,
    height = 1,
    alphaBits = 0,
    sharedHeaderSize = 0
): ReturnType<typeof decode> {
    // Generated from synthetic CMYK images. BLP treats the four JPEG
    // components as B, G, R, A rather than applying a CMYK conversion.
    const encoded = atob(base64);
    const jpeg = Uint8Array.from(encoded, character => character.charCodeAt(0));
    const sharedOffset = BLP1_FIXED_HEADER_BYTES + 4;
    const mipOffset = sharedOffset + sharedHeaderSize;
    const payload = jpeg.subarray(sharedHeaderSize);
    const data = new ArrayBuffer(sharedOffset + jpeg.length);
    const view = new DataView(data);
    const bytes = new Uint8Array(data);
    bytes.set([0x42, 0x4c, 0x50, 0x31]);
    setUint32(view, 1, BLPContent.JPEG);
    setUint32(view, 2, alphaBits);
    setUint32(view, 3, width);
    setUint32(view, 4, height);
    setUint32(view, 7, mipOffset);
    setUint32(view, 23, payload.length);
    view.setUint32(BLP1_FIXED_HEADER_BYTES, sharedHeaderSize, true);
    bytes.set(jpeg.subarray(0, sharedHeaderSize), sharedOffset);
    bytes.set(payload, mipOffset);
    return decode(data);
}

function maximumChannelDifference (left: Uint8ClampedArray, right: Uint8ClampedArray): number {
    let maximum = 0;
    for (let index = 0; index < left.length; ++index) {
        maximum = Math.max(maximum, Math.abs(left[index] - right[index]));
    }
    return maximum;
}

function createWasmExports (decodeJpeg: () => number | never = () => 0): {
    exports: WebAssembly.Exports;
    clearResult: ReturnType<typeof vi.fn>;
    deallocate: ReturnType<typeof vi.fn>;
    decodeJpeg: ReturnType<typeof vi.fn>;
} {
    const memory = new WebAssembly.Memory({initial: 1});
    const clearResult = vi.fn();
    const deallocate = vi.fn();
    const wrappedDecode = vi.fn(decodeJpeg);
    const pixels = new Uint8Array(memory.buffer);
    pixels.set([10, 20, 30, 255], 4096);

    return {
        exports: {
            memory,
            allocate: vi.fn(() => 8),
            deallocate,
            decode_jpeg: wrappedDecode,
            result_pointer: vi.fn(() => 4096),
            result_length: vi.fn(() => 4),
            result_width: vi.fn(() => 1),
            result_height: vi.fn(() => 1),
            clear_result: clearResult
        },
        clearResult,
        deallocate,
        decodeJpeg: wrappedDecode
    };
}

function mockWasm (exports: WebAssembly.Exports): void {
    vi.spyOn(WebAssembly, 'compile').mockResolvedValue({} as WebAssembly.Module);
    vi.spyOn(WebAssembly, 'instantiate').mockResolvedValue({exports} as WebAssembly.Instance);
}

describe('BLP image decoder backend selection', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it('uses the JavaScript backend without compiling WASM when requested', async () => {
        const compile = vi.spyOn(WebAssembly, 'compile');

        const decoder = await createBLPImageDecoder({backend: 'javascript'});

        expect(decoder.backend).toBe('javascript');
        expect(compile).not.toHaveBeenCalled();
    });

    it('falls back to JavaScript when automatic WASM initialization fails', async () => {
        vi.spyOn(WebAssembly, 'compile').mockRejectedValue(new Error('SIMD unavailable'));

        const decoder = await createBLPImageDecoder({
            backend: 'auto',
            wasmModule: new ArrayBuffer(8)
        });

        expect(decoder.backend).toBe('javascript');
    });

    it('reports explicit WASM initialization failures', async () => {
        vi.spyOn(WebAssembly, 'compile').mockRejectedValue(new Error('bad module'));

        await expect(createBLPImageDecoder({
            backend: 'wasm-simd',
            wasmModule: new ArrayBuffer(8)
        })).rejects.toThrow(/initialize.*WASM SIMD/i);
    });
});

describe('BLP WASM decoder lifecycle and fallback', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it('copies a decoded image and releases the WASM input and result', async () => {
        const wasm = createWasmExports();
        mockWasm(wasm.exports);
        const decoder = await createBLPImageDecoder({
            backend: 'wasm-simd',
            wasmModule: new ArrayBuffer(8)
        });

        const result = decoder.getImageData(createJPEGBLP(), 0);

        expect(decoder.backend).toBe('wasm-simd');
        expect(Array.from(result.data)).toEqual([10, 20, 30, 255]);
        expect(wasm.deallocate).toHaveBeenCalledWith(8, 354);
        expect(wasm.clearResult).toHaveBeenCalledOnce();
    });

    it('falls back per image after an ordinary decode status in auto mode', async () => {
        const wasm = createWasmExports(() => 2);
        mockWasm(wasm.exports);
        const decoder = await createBLPImageDecoder({
            backend: 'auto',
            wasmModule: new ArrayBuffer(8)
        });

        const result = decoder.getImageData(createJPEGBLP(), 0);

        expect(result).toMatchObject({width: 1, height: 1});
        expect(result.data).toHaveLength(4);
        expect(wasm.decodeJpeg).toHaveBeenCalledOnce();
    });

    it('does not hide an ordinary decode status in explicit WASM mode', async () => {
        const wasm = createWasmExports(() => 2);
        mockWasm(wasm.exports);
        const decoder = await createBLPImageDecoder({
            backend: 'wasm-simd',
            wasmModule: new ArrayBuffer(8)
        });

        expect(() => decoder.getImageData(createJPEGBLP(), 0)).toThrow(/status 2/i);
    });

    it('disables a trapped auto backend for later images', async () => {
        const wasm = createWasmExports(() => {
            throw new WebAssembly.RuntimeError('unreachable');
        });
        mockWasm(wasm.exports);
        const decoder = await createBLPImageDecoder({
            backend: 'auto',
            wasmModule: new ArrayBuffer(8)
        });
        const blp = createJPEGBLP();

        const first = decoder.getImageData(blp, 0);
        const second = decoder.getImageData(blp, 0);

        expect(Array.from(first.data)).toEqual(Array.from(second.data));
        expect(wasm.decodeJpeg).toHaveBeenCalledOnce();
        expect(wasm.clearResult).toHaveBeenCalledTimes(2);
    });

    it('disposes idempotently and rejects later decoding', async () => {
        const wasm = createWasmExports();
        mockWasm(wasm.exports);
        const decoder = await createBLPImageDecoder({
            backend: 'wasm-simd',
            wasmModule: new ArrayBuffer(8)
        });

        decoder.dispose();
        decoder.dispose();

        expect(wasm.clearResult).toHaveBeenCalledOnce();
        expect(() => decoder.getImageData(createJPEGBLP(), 0)).toThrow(/disposed/i);
    });
});

describe('embedded BLP WASM decoder', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it.each([
        ['baseline with no shared header', SYNTHETIC_BASELINE_16, 0],
        ['baseline with a 4-byte shared header', SYNTHETIC_BASELINE_16, 4],
        ['baseline with a 10-byte shared header', SYNTHETIC_BASELINE_16, 10],
        ['baseline with a 624-byte shared header', SYNTHETIC_BASELINE_16, 624],
        ['restart-marker JPEG', SYNTHETIC_RESTART_16, 0]
    ])('matches the legacy decoder for %s', async (_name, fixture, sharedHeaderSize) => {
        const blp = createJPEGBLP(fixture, 16, 16, 8, sharedHeaderSize);
        const wasm = await createBLPImageDecoder({backend: 'wasm-simd'});
        const javascript = await createBLPImageDecoder({backend: 'javascript'});

        try {
            const accelerated = wasm.getImageData(blp, 0);
            const legacy = javascript.getImageData(blp, 0);

            expect(accelerated).toMatchObject({width: 16, height: 16});
            expect(maximumChannelDifference(accelerated.data, legacy.data)).toBeLessThanOrEqual(1);
        } finally {
            wasm.dispose();
            javascript.dispose();
        }
    });

    it('decodes progressive scans to the same pixels as the equivalent baseline JPEG', async () => {
        const decoder = await createBLPImageDecoder({backend: 'wasm-simd'});

        try {
            const baseline = decoder.getImageData(
                createJPEGBLP(SYNTHETIC_BASELINE_16, 16, 16, 8),
                0
            );
            const progressive = decoder.getImageData(
                createJPEGBLP(SYNTHETIC_PROGRESSIVE_16, 16, 16, 8),
                0
            );

            expect(maximumChannelDifference(progressive.data, baseline.data)).toBe(0);
        } finally {
            decoder.dispose();
        }
    });

    it('forces the alpha channel opaque when BLP alphaBits is zero', async () => {
        const decoder = await createBLPImageDecoder({backend: 'wasm-simd'});

        try {
            const image = decoder.getImageData(createJPEGBLP(), 0);
            expect(image.data[3]).toBe(255);
        } finally {
            decoder.dispose();
        }
    });

    it('uses legal JPEG dimensions when an exporter mip table rounds differently', async () => {
        const blp = createJPEGBLP(SYNTHETIC_BASELINE_16, 32, 16, 8);
        const wasm = await createBLPImageDecoder({backend: 'wasm-simd'});
        const javascript = await createBLPImageDecoder({backend: 'javascript'});

        try {
            expect(wasm.getImageData(blp, 0)).toMatchObject({width: 16, height: 16});
            expect(javascript.getImageData(blp, 0)).toMatchObject({width: 16, height: 16});
        } finally {
            wasm.dispose();
            javascript.dispose();
        }
    });
});
