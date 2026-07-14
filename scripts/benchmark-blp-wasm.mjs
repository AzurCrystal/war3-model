import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {performance} from 'node:perf_hooks';
import {
    createBLPImageDecoder,
    decodeBLP
} from '../dist/es/war3-model.mjs';

function option (name, fallback) {
    const index = process.argv.indexOf(name);
    return index < 0 ? fallback : process.argv[index + 1];
}

function standaloneArrayBuffer (bytes) {
    return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function summarize (samples) {
    const sorted = [...samples].sort((left, right) => left - right);
    return {
        minimum: sorted[0],
        median: sorted[Math.floor(sorted.length / 2)],
        average: sorted.reduce((sum, value) => sum + value, 0) / sorted.length
    };
}

function maximumChannelDifference (left, right) {
    let maximum = 0;
    for (let index = 0; index < left.length; ++index) {
        maximum = Math.max(maximum, Math.abs(left[index] - right[index]));
    }
    return maximum;
}

const inputPath = process.argv[2];
if (!inputPath || inputPath.startsWith('--')) {
    console.error(
        'Usage: npm run benchmark-blp -- <texture.blp> '
        + '[--iterations 5] [--level 0] [--scalar-wasm decoder.wasm]'
    );
    process.exit(1);
}

const iterations = Number.parseInt(option('--iterations', '5'), 10);
const mipmapLevel = Number.parseInt(option('--level', '0'), 10);
if (!Number.isInteger(iterations) || iterations < 1) {
    throw new Error('--iterations must be a positive integer');
}
if (!Number.isInteger(mipmapLevel) || mipmapLevel < 0) {
    throw new Error('--level must be a non-negative integer');
}

const input = await readFile(resolve(inputPath));
const blp = decodeBLP(standaloneArrayBuffer(input));
const decoderSpecs = [
    ['javascript', {backend: 'javascript'}],
    ['wasm-simd', {backend: 'wasm-simd'}]
];
const scalarPath = option('--scalar-wasm');
if (scalarPath) {
    const scalarBytes = await readFile(resolve(scalarPath));
    decoderSpecs.splice(1, 0, [
        'wasm-scalar',
        {backend: 'wasm-simd', wasmModule: standaloneArrayBuffer(scalarBytes)}
    ]);
}

let reference;
for (const [label, options] of decoderSpecs) {
    const initializeStart = performance.now();
    const decoder = await createBLPImageDecoder(options);
    const initializeMs = performance.now() - initializeStart;
    try {
        const warmup = decoder.getImageData(blp, mipmapLevel);
        const samples = [];
        for (let iteration = 0; iteration < iterations; ++iteration) {
            const start = performance.now();
            decoder.getImageData(blp, mipmapLevel);
            samples.push(performance.now() - start);
        }
        const result = summarize(samples);
        const difference = reference
            ? maximumChannelDifference(warmup.data, reference)
            : 0;
        reference ??= warmup.data;
        console.log(JSON.stringify({
            backend: label,
            selectedBackend: decoder.backend,
            width: warmup.width,
            height: warmup.height,
            initializeMs: Number(initializeMs.toFixed(2)),
            minimumMs: Number(result.minimum.toFixed(2)),
            medianMs: Number(result.median.toFixed(2)),
            averageMs: Number(result.average.toFixed(2)),
            maximumLegacyChannelDifference: difference
        }));
    } finally {
        decoder.dispose();
    }
}
