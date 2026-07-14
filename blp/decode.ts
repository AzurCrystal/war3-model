import decodeJPEG from '../third_party/decoder';
import {BLPImage, BLPContent, BLPType, type BLPMipMap} from './blpimage';

export const BLP1_FIXED_HEADER_BYTES = 39 * 4;
export const BLP1_JPEG_HEADER_LENGTH_BYTES = 4;
export const BLP1_PALETTE_BYTES = 256 * 4;
export const MAX_BLP_DECODE_BYTES = 128 * 1024 * 1024;

const MAX_BLP_DECODE_MIB = MAX_BLP_DECODE_BYTES / (1024 * 1024);

const BLP1_JPEG_SHARED_OFFSET = BLP1_FIXED_HEADER_BYTES + BLP1_JPEG_HEADER_LENGTH_BYTES;
const BLP1_PALETTE_OFFSET = BLP1_FIXED_HEADER_BYTES;
const BLP1_DIRECT_DATA_OFFSET = BLP1_PALETTE_OFFSET + BLP1_PALETTE_BYTES;
const BLP_MIP_COUNT = 16;

export interface ImageDataLike {
    width: number;
    height: number;
    data: Uint8ClampedArray<ArrayBuffer>;
    colorSpace: 'srgb' | 'display-p3' | undefined;
}

export interface ReconstructedJPEGMipmap {
    data: Uint8Array;
    width: number;
    height: number;
    forceOpaque: boolean;
}

function isStartOfFrameMarker (marker: number): boolean {
    return marker >= 0xc0 && marker <= 0xcf
        && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
}

function getJPEGDimensions (data: Uint8Array): {width: number; height: number} {
    if (data.length < 4 || data[0] !== 0xff || data[1] !== 0xd8) {
        throw new Error('Invalid BLP1 JPEG: missing SOI marker');
    }
    let offset = 2;
    while (offset < data.length) {
        while (offset < data.length && data[offset] !== 0xff) {
            offset += 1;
        }
        while (offset < data.length && data[offset] === 0xff) {
            offset += 1;
        }
        if (offset >= data.length) {
            break;
        }
        const marker = data[offset++];
        if (marker === 0x00 || marker === 0x01 || marker === 0xd8
            || (marker >= 0xd0 && marker <= 0xd7)) {
            continue;
        }
        if (marker === 0xd9 || marker === 0xda) {
            break;
        }
        if (offset + 2 > data.length) {
            throw new Error('Invalid BLP1 JPEG: truncated marker length');
        }
        const segmentLength = data[offset] << 8 | data[offset + 1];
        if (segmentLength < 2 || offset + segmentLength > data.length) {
            throw new Error('Invalid BLP1 JPEG: marker range is outside the mip');
        }
        if (isStartOfFrameMarker(marker)) {
            if (segmentLength < 8) {
                throw new Error('Invalid BLP1 JPEG: truncated SOF marker');
            }
            const height = data[offset + 3] << 8 | data[offset + 4];
            const width = data[offset + 5] << 8 | data[offset + 6];
            if (width === 0 || height === 0) {
                throw new Error('Invalid BLP1 JPEG: SOF dimensions must be positive');
            }
            const outputBytes = checkedProduct(
                checkedProduct(width, height, 'JPEG SOF dimensions'),
                4,
                'JPEG SOF output size'
            );
            if (outputBytes > MAX_BLP_DECODE_BYTES) {
                throw new Error(
                    `Invalid BLP1 JPEG: decoded output exceeds ${MAX_BLP_DECODE_MIB} MiB`
                );
            }
            return {width, height};
        }
        offset += segmentLength;
    }
    throw new Error('Invalid BLP1 JPEG: missing SOF marker');
}

function keyword (view: DataView, offset: number): string {
    return String.fromCharCode(
        view.getUint8(offset),
        view.getUint8(offset + 1),
        view.getUint8(offset + 2),
        view.getUint8(offset + 3)
    );
}

function uint32 (view: DataView, wordOffset: number): number {
    return view.getUint32(wordOffset * 4, true);
}

function checkedProduct (left: number, right: number, description: string): number {
    const result = left * right;
    if (!Number.isSafeInteger(result)) {
        throw new Error(`Invalid BLP1 ${description}: integer overflow`);
    }
    return result;
}

function assertRange (
    totalBytes: number,
    offset: number,
    length: number,
    description: string
): void {
    if (!Number.isSafeInteger(offset) || !Number.isSafeInteger(length)
        || offset < 0 || length < 0 || offset > totalBytes || length > totalBytes - offset) {
        throw new Error(`Invalid BLP1 ${description}: range is outside the file`);
    }
}

function getMipDimensions (width: number, height: number, level: number): {
    width: number;
    height: number;
    pixelCount: number;
    outputBytes: number;
} {
    const divisor = 2 ** level;
    const mipWidth = Math.max(1, Math.floor(width / divisor));
    const mipHeight = Math.max(1, Math.floor(height / divisor));
    const pixelCount = checkedProduct(mipWidth, mipHeight, `mip ${level} dimensions`);
    const outputBytes = checkedProduct(pixelCount, 4, `mip ${level} output size`);
    if (outputBytes > MAX_BLP_DECODE_BYTES) {
        throw new Error(
            `Invalid BLP1 mip ${level}: decoded output exceeds ${MAX_BLP_DECODE_MIB} MiB`
        );
    }
    return {width: mipWidth, height: mipHeight, pixelCount, outputBytes};
}

function validateMipmap (
    image: BLPImage,
    mipmap: BLPMipMap,
    level: number,
    minimumOffset: number,
    sharedHeaderSize = 0
): void {
    if (mipmap.offset < minimumOffset) {
        throw new Error(`Invalid BLP1 mip ${level}: data overlaps the BLP header`);
    }
    assertRange(image.data.byteLength, mipmap.offset, mipmap.size, `mip ${level}`);

    const dimensions = getMipDimensions(image.width, image.height, level);
    if (image.content === BLPContent.Direct) {
        const alphaBytes = Math.ceil(checkedProduct(
            dimensions.pixelCount,
            image.alphaBits,
            `mip ${level} alpha size`
        ) / 8);
        const requiredBytes = dimensions.pixelCount + alphaBytes;
        if (mipmap.size < requiredBytes) {
            throw new Error(
                `Invalid BLP1 mip ${level}: palette data needs ${requiredBytes} bytes, got ${mipmap.size}`
            );
        }
    } else if (sharedHeaderSize + mipmap.size > MAX_BLP_DECODE_BYTES) {
        throw new Error(
            `Invalid BLP1 mip ${level}: reconstructed JPEG exceeds ${MAX_BLP_DECODE_MIB} MiB`
        );
    }
}

function validateParsedImage (image: BLPImage): void {
    const view = new DataView(image.data);
    let minimumMipOffset: number;
    let sharedHeaderSize = 0;

    if (image.content === BLPContent.JPEG) {
        if (image.data.byteLength < BLP1_JPEG_SHARED_OFFSET) {
            throw new Error('Invalid BLP1 JPEG: truncated shared-header length');
        }
        sharedHeaderSize = view.getUint32(BLP1_FIXED_HEADER_BYTES, true);
        assertRange(
            image.data.byteLength,
            BLP1_JPEG_SHARED_OFFSET,
            sharedHeaderSize,
            'JPEG shared header'
        );
        minimumMipOffset = BLP1_JPEG_SHARED_OFFSET + sharedHeaderSize;
    } else {
        if (![0, 1, 4, 8].includes(image.alphaBits)) {
            throw new Error(`Invalid BLP1 palette alpha depth: ${image.alphaBits}`);
        }
        if (image.data.byteLength < BLP1_DIRECT_DATA_OFFSET) {
            throw new Error('Invalid BLP1 palette: truncated 256-entry palette');
        }
        // Some classic files start indices inside an unused tail of the
        // 256-entry palette. The ranges are safe as long as they stay after
        // the fixed header and inside the file.
        minimumMipOffset = BLP1_FIXED_HEADER_BYTES;
    }

    for (let level = 0; level < image.mipmaps.length; ++level) {
        validateMipmap(image, image.mipmaps[level], level, minimumMipOffset, sharedHeaderSize);
    }
}

function assertBLPImageMatchesData (blp: BLPImage): BLPImage {
    if (!blp || !(blp.data instanceof ArrayBuffer)) {
        throw new Error('Invalid BLP image object');
    }
    const parsed = decode(blp.data);
    const metadataMatches = parsed.type === blp.type
        && parsed.content === blp.content
        && parsed.alphaBits === blp.alphaBits
        && parsed.width === blp.width
        && parsed.height === blp.height
        && parsed.mipmaps.length === blp.mipmaps.length
        && parsed.mipmaps.every((mipmap, index) => {
            const supplied = blp.mipmaps[index];
            return supplied && mipmap.offset === supplied.offset && mipmap.size === supplied.size;
        });
    if (!metadataMatches) {
        throw new Error('Invalid BLP image object: metadata does not match its source data');
    }
    return parsed;
}

function getValidatedMipmap (blp: BLPImage, mipmapLevel: number): {
    image: BLPImage;
    mipmap: BLPMipMap;
    width: number;
    height: number;
    pixelCount: number;
} {
    if (!Number.isInteger(mipmapLevel) || mipmapLevel < 0) {
        throw new Error(`Invalid BLP mip level ${mipmapLevel}`);
    }
    const image = assertBLPImageMatchesData(blp);
    const mipmap = image.mipmaps[mipmapLevel];
    if (!mipmap) {
        throw new Error(`Invalid BLP mip level ${mipmapLevel}: image has ${image.mipmaps.length} mipmaps`);
    }
    const dimensions = getMipDimensions(image.width, image.height, mipmapLevel);
    return {image, mipmap, ...dimensions};
}

function bitVal (data: Uint8Array, bitCount: 1 | 4 | 8, index: number): number {
    const bitOffset = index * bitCount;
    const byte = data[Math.floor(bitOffset / 8)];
    return (byte >> (bitOffset % 8)) & ((1 << bitCount) - 1);
}

export function createImageData (
    width: number,
    height: number,
    pixels?: Uint8ClampedArray<ArrayBuffer>
): ImageDataLike {
    const data = pixels ?? new Uint8ClampedArray(checkedProduct(
        checkedProduct(width, height, 'image dimensions'),
        4,
        'image output size'
    ));
    if (data.byteLength > MAX_BLP_DECODE_BYTES) {
        throw new Error(
            `Invalid BLP image: decoded output exceeds ${MAX_BLP_DECODE_MIB} MiB`
        );
    }
    if (typeof ImageData !== 'undefined') {
        return pixels ? new ImageData(data, width, height) : new ImageData(width, height);
    }
    return {
        width,
        height,
        data,
        colorSpace: 'srgb'
    };
}

export function decode (arrayBuffer: ArrayBuffer): BLPImage {
    if (!(arrayBuffer instanceof ArrayBuffer)) {
        throw new Error('Invalid BLP input: expected an ArrayBuffer');
    }
    if (arrayBuffer.byteLength < 4) {
        throw new Error('Invalid BLP input: truncated BLP header');
    }
    const view = new DataView(arrayBuffer);
    const type = keyword(view, 0);

    if (type === 'BLP0' || type === 'BLP2') {
        throw new Error('BLP0/BLP2 not supported');
    }
    if (type !== 'BLP1') {
        throw new Error('Not a BLP image');
    }
    if (arrayBuffer.byteLength < BLP1_FIXED_HEADER_BYTES) {
        throw new Error('Invalid BLP1 input: truncated BLP1 header');
    }

    const content = uint32(view, 1);
    if (content !== BLPContent.JPEG && content !== BLPContent.Direct) {
        throw new Error(`Unknown BLP content ${content}`);
    }
    const alphaBits = uint32(view, 2);
    const width = uint32(view, 3);
    const height = uint32(view, 4);
    if (width === 0 || height === 0) {
        throw new Error('Invalid BLP1: width and height must be positive');
    }
    getMipDimensions(width, height, 0);

    const mipmaps: BLPMipMap[] = [];
    let foundEmptyMipmap = false;
    for (let i = 0; i < BLP_MIP_COUNT; ++i) {
        const offset = uint32(view, 7 + i);
        const size = uint32(view, 7 + BLP_MIP_COUNT + i);
        if (size === 0) {
            foundEmptyMipmap = true;
            continue;
        }
        if (foundEmptyMipmap) {
            throw new Error(`Invalid BLP1 mip ${i}: mip table contains a gap`);
        }
        if (offset === 0) {
            throw new Error(`Invalid BLP1 mip ${i}: nonempty mip has a zero offset`);
        }
        const previous = mipmaps[mipmaps.length - 1];
        if (previous && previous.offset === offset && previous.size === size) {
            // Several Warcraft exporters repeat the final authored JPEG in
            // every remaining table slot. Re-decoding it cannot produce the
            // dimensions of a lower mip, so treat the first duplicate as the
            // end of the authored chain.
            break;
        }
        mipmaps.push({offset, size});
        const dimensions = getMipDimensions(width, height, i);
        if (dimensions.width === 1 && dimensions.height === 1) {
            break;
        }
    }
    if (mipmaps.length === 0) {
        throw new Error('Invalid BLP1: image contains no mipmaps');
    }

    const image: BLPImage = {
        type: BLPType.BLP1,
        width,
        height,
        content,
        alphaBits,
        mipmaps,
        data: arrayBuffer
    };
    validateParsedImage(image);
    return image;
}

export function reconstructJPEGMipmap (
    blp: BLPImage,
    mipmapLevel: number
): ReconstructedJPEGMipmap {
    const {image, mipmap, width, height} = getValidatedMipmap(blp, mipmapLevel);
    if (image.content !== BLPContent.JPEG) {
        throw new Error('BLP image does not contain JPEG data');
    }
    const view = new DataView(image.data);
    const source = new Uint8Array(image.data);
    const sharedHeaderSize = view.getUint32(BLP1_FIXED_HEADER_BYTES, true);
    const data = new Uint8Array(sharedHeaderSize + mipmap.size);
    data.set(source.subarray(
        BLP1_JPEG_SHARED_OFFSET,
        BLP1_JPEG_SHARED_OFFSET + sharedHeaderSize
    ));
    data.set(source.subarray(mipmap.offset, mipmap.offset + mipmap.size), sharedHeaderSize);
    return {data, width, height, forceOpaque: image.alphaBits === 0};
}

export function validateJPEGMipmap (
    jpeg: ReconstructedJPEGMipmap
): ReconstructedJPEGMipmap {
    const dimensions = getJPEGDimensions(jpeg.data);
    return {...jpeg, ...dimensions};
}

export function decodeJPEGMipmap (jpeg: ReconstructedJPEGMipmap): ImageDataLike {
    const validated = validateJPEGMipmap(jpeg);
    const imageData = decodeJPEG(validated.data) as ImageDataLike;
    if (!Number.isInteger(imageData.width) || imageData.width <= 0
        || !Number.isInteger(imageData.height) || imageData.height <= 0) {
        throw new Error('Invalid BLP1 JPEG dimensions');
    }
    const outputBytes = checkedProduct(
        checkedProduct(imageData.width, imageData.height, 'JPEG dimensions'),
        4,
        'JPEG output size'
    );
    if (imageData.width !== validated.width || imageData.height !== validated.height
        || outputBytes > MAX_BLP_DECODE_BYTES || imageData.data.length !== outputBytes) {
        throw new Error(
            `Invalid BLP1 JPEG result: expected ${validated.width}x${validated.height}, `
            + `got ${imageData.width}x${imageData.height} (${imageData.data.length} bytes)`
        );
    }
    if (validated.forceOpaque) {
        for (let index = 3; index < imageData.data.length; index += 4) {
            imageData.data[index] = 255;
        }
    }
    return imageData;
}

function decodePaletteMipmap (blp: BLPImage, mipmapLevel: number): ImageDataLike {
    const {image, mipmap, width, height, pixelCount} = getValidatedMipmap(blp, mipmapLevel);
    if (image.content !== BLPContent.Direct) {
        throw new Error('BLP image does not contain palette data');
    }
    const view = new DataView(image.data);
    const palette = new Uint8Array(image.data, BLP1_PALETTE_OFFSET, BLP1_PALETTE_BYTES);
    const alphaBytes = Math.ceil(pixelCount * image.alphaBits / 8);
    const alphaData = new Uint8Array(image.data, mipmap.offset + pixelCount, alphaBytes);
    const imageData = createImageData(width, height);
    const alphaBits = image.alphaBits as 0 | 1 | 4 | 8;
    const alphaScale = alphaBits === 0 ? 0 : 255 / ((1 << alphaBits) - 1);

    for (let i = 0; i < pixelCount; ++i) {
        const paletteIndex = view.getUint8(mipmap.offset + i) * 4;
        imageData.data[i * 4] = palette[paletteIndex + 2];
        imageData.data[i * 4 + 1] = palette[paletteIndex + 1];
        imageData.data[i * 4 + 2] = palette[paletteIndex];
        imageData.data[i * 4 + 3] = alphaBits === 0
            ? 255
            : Math.round(bitVal(alphaData, alphaBits, i) * alphaScale);
    }
    return imageData;
}

export function getImageData (blp: BLPImage, mipmapLevel: number): ImageDataLike {
    if (blp.content === BLPContent.JPEG) {
        return decodeJPEGMipmap(reconstructJPEGMipmap(blp, mipmapLevel));
    }
    return decodePaletteMipmap(blp, mipmapLevel);
}
