import {describe, expect, it} from 'vitest';
import {BLPContent} from './blpimage';
import {
    BLP1_FIXED_HEADER_BYTES,
    BLP1_PALETTE_BYTES,
    decode,
    getImageData,
    reconstructJPEGMipmap
} from './decode';

function setMagic (view: DataView, magic = 'BLP1'): void {
    for (let i = 0; i < magic.length; ++i) {
        view.setUint8(i, magic.charCodeAt(i));
    }
}

function setUint32 (view: DataView, word: number, value: number): void {
    view.setUint32(word * 4, value, true);
}

function createPaletteBLP (alphaBits: number, alpha: number[] = []): ArrayBuffer {
    const width = 4;
    const pixelBytes = width;
    const alphaBytes = Math.ceil(width * alphaBits / 8);
    const mipOffset = BLP1_FIXED_HEADER_BYTES + BLP1_PALETTE_BYTES;
    const data = new ArrayBuffer(mipOffset + pixelBytes + alphaBytes);
    const view = new DataView(data);
    const bytes = new Uint8Array(data);

    setMagic(view);
    setUint32(view, 1, BLPContent.Direct);
    setUint32(view, 2, alphaBits);
    setUint32(view, 3, width);
    setUint32(view, 4, 1);
    setUint32(view, 7, mipOffset);
    setUint32(view, 23, pixelBytes + alphaBytes);

    // Palette entry zero is BGRA.
    bytes.set([3, 2, 1, 99], BLP1_FIXED_HEADER_BYTES);
    bytes.fill(0, mipOffset, mipOffset + pixelBytes);
    bytes.set(alpha, mipOffset + pixelBytes);
    return data;
}

function createJPEGBLP (sharedHeader: number[], payload: number[]): ArrayBuffer {
    const sharedOffset = BLP1_FIXED_HEADER_BYTES + 4;
    const mipOffset = sharedOffset + sharedHeader.length;
    const data = new ArrayBuffer(mipOffset + payload.length);
    const view = new DataView(data);
    const bytes = new Uint8Array(data);

    setMagic(view);
    setUint32(view, 1, BLPContent.JPEG);
    setUint32(view, 2, 8);
    setUint32(view, 3, 1);
    setUint32(view, 4, 1);
    setUint32(view, 7, mipOffset);
    setUint32(view, 23, payload.length);
    view.setUint32(BLP1_FIXED_HEADER_BYTES, sharedHeader.length, true);
    bytes.set(sharedHeader, sharedOffset);
    bytes.set(payload, mipOffset);
    return data;
}

describe('BLP1 container validation', () => {
    it.each([0, 4, 10, 624])('reconstructs a JPEG with a %s-byte shared header', sharedSize => {
        const shared = Array.from({length: sharedSize}, (_, index) => index & 0xff);
        const payload = [0xaa, 0xbb, 0xcc];
        const blp = decode(createJPEGBLP(shared, payload));

        expect(Array.from(reconstructJPEGMipmap(blp, 0).data)).toEqual([...shared, ...payload]);
    });

    it.each([
        ['a truncated magic', (() => {
            const data = new Uint8Array(3);
            data.set([0x42, 0x4c, 0x50]);
            return data.buffer;
        })(), /truncated BLP header/i],
        ['a truncated fixed header', (() => {
            const data = new ArrayBuffer(BLP1_FIXED_HEADER_BYTES - 1);
            setMagic(new DataView(data));
            return data;
        })(), /truncated BLP1 header/i],
        ['zero width', (() => {
            const data = createPaletteBLP(0);
            setUint32(new DataView(data), 3, 0);
            return data;
        })(), /width and height must be positive/i],
        ['an oversized output', (() => {
            const data = createPaletteBLP(0);
            setUint32(new DataView(data), 3, 0xffffffff);
            return data;
        })(), /128 MiB/i],
        ['an unsupported palette alpha depth', createPaletteBLP(2), /alpha depth/i],
        ['an out-of-bounds mip', (() => {
            const data = createPaletteBLP(0);
            setUint32(new DataView(data), 7, data.byteLength - 1);
            return data;
        })(), /mip 0.*outside/i]
    ])('rejects %s', (_name, data, message) => {
        expect(() => decode(data)).toThrow(message);
    });

    it('rejects an out-of-range mip level before decoding', () => {
        const blp = decode(createPaletteBLP(0));

        expect(() => getImageData(blp, 1)).toThrow(/mip level 1/i);
        expect(() => getImageData(blp, -1)).toThrow(/mip level -1/i);
    });

    it('rejects oversized JPEG SOF dimensions before invoking a decoder', () => {
        const oversizedJpeg = [
            0xff, 0xd8,
            0xff, 0xc0, 0x00, 0x0b, 0x08,
            0x40, 0x00, 0x40, 0x00,
            0x01, 0x01, 0x11, 0x00,
            0xff, 0xd9
        ];
        const blp = decode(createJPEGBLP([], oversizedJpeg));

        expect(() => getImageData(blp, 0)).toThrow(/128 MiB/i);
    });

    it('accepts palette pixels that overlap the unused tail of the palette', () => {
        const data = createPaletteBLP(0);
        setUint32(new DataView(data), 7, BLP1_FIXED_HEADER_BYTES + 900);

        expect(decode(data).mipmaps[0].offset).toBe(BLP1_FIXED_HEADER_BYTES + 900);
    });

    it('ignores stale offsets in trailing empty mip slots', () => {
        const data = createPaletteBLP(0);
        setUint32(new DataView(data), 8, 1234);

        expect(decode(data).mipmaps).toHaveLength(1);
    });

    it('stops at exporter-filled duplicate trailing mip entries', () => {
        const data = createJPEGBLP([1, 2, 3, 4], [5, 6, 7, 8]);
        const view = new DataView(data);
        setUint32(view, 8, view.getUint32(28, true));
        setUint32(view, 24, view.getUint32(92, true));

        expect(decode(data).mipmaps).toHaveLength(1);
    });

    it('ignores table garbage after the chain reaches 1x1', () => {
        const data = createJPEGBLP([1, 2, 3, 4], [5, 6, 7, 8]);
        const view = new DataView(data);
        setUint32(view, 8, data.byteLength + 100);
        setUint32(view, 24, 20);

        expect(decode(data).mipmaps).toHaveLength(1);
    });
});

describe('BLP1 palette alpha', () => {
    it.each([
        [0, [], [255, 255, 255, 255]],
        [1, [0b00000101], [255, 0, 255, 0]],
        [4, [0xf1, 0x80], [17, 255, 0, 136]],
        [8, [1, 64, 128, 255], [1, 64, 128, 255]]
    ])('decodes %s-bit alpha in BLP byte order', (alphaBits, alpha, expected) => {
        const image = getImageData(decode(createPaletteBLP(alphaBits, alpha)), 0);

        expect(image.width).toBe(4);
        expect(image.height).toBe(1);
        expect(Array.from(image.data.filter((_value, index) => index % 4 === 3))).toEqual(expected);
        expect(Array.from(image.data.slice(0, 3))).toEqual([1, 2, 3]);
    });
});
