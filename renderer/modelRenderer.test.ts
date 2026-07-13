import {expect, it, vi} from 'vitest';
import type {Model} from '../model';
import {ModelRenderer} from './modelRenderer';

function createMinimalModel(): Model {
    const extent = new Float32Array([0, 0, 0]);
    return {
        Version: 800,
        Info: {
            Name: 'renderer-test',
            MinimumExtent: extent,
            MaximumExtent: extent,
            BoundsRadius: 1,
            BlendTime: 0
        },
        Sequences: [{
            Name: 'Stand',
            Interval: new Uint32Array([0, 1]),
            NonLooping: false,
            MinimumExtent: extent,
            MaximumExtent: extent,
            BoundsRadius: 1,
            MoveSpeed: 0,
            Rarity: 0
        }],
        Textures: [],
        Materials: [],
        Geosets: [],
        GeosetAnims: [],
        Bones: [],
        Helpers: [],
        Attachments: [],
        Nodes: [],
        PivotPoints: [],
        EventObjects: [],
        CollisionShapes: [],
        GlobalSequences: [],
        ParticleEmitters: [],
        ParticleEmitters2: [],
        Cameras: [],
        Lights: [],
        RibbonEmitters: [],
        TextureAnims: []
    };
}

it('destroys a partially initialized SD renderer repeatedly', () => {
    const renderer = new ModelRenderer(createMinimalModel());
    const deleteBuffer = vi.fn();
    Object.assign(renderer as unknown as Record<string, unknown>, {
        gl: {deleteBuffer} as unknown as WebGLRenderingContext
    });

    expect(() => renderer.destroy()).not.toThrow();
    expect(() => renderer.destroy()).not.toThrow();
    expect(deleteBuffer).not.toHaveBeenCalled();
});

it('deduplicates owned WebGL buffers and textures during cleanup', () => {
    const renderer = new ModelRenderer(createMinimalModel());
    const internal = renderer as unknown as Record<string, unknown>;
    const buffer = {} as WebGLBuffer;
    const texture = {} as WebGLTexture;
    const deleteBuffer = vi.fn();
    const deleteTexture = vi.fn();
    const rendererData = internal.rendererData as {
        textures: Record<string, WebGLTexture>;
        envTextures: Record<string, WebGLTexture>;
    };
    rendererData.textures.first = texture;
    rendererData.envTextures.second = texture;
    Object.assign(internal, {
        gl: {deleteBuffer, deleteTexture} as unknown as WebGLRenderingContext,
        vertexBuffer: [buffer],
        indexBuffer: [buffer],
        squareVertexBuffer: buffer
    });

    expect(() => renderer.destroy()).not.toThrow();
    expect(deleteBuffer).toHaveBeenCalledOnce();
    expect(deleteTexture).toHaveBeenCalledOnce();
});

it('ignores sparse GPU buffers and destroys owned textures once', () => {
    const renderer = new ModelRenderer(createMinimalModel());
    const internal = renderer as unknown as Record<string, unknown>;
    const buffer = {destroy: vi.fn()};
    const texture = {destroy: vi.fn()};
    const rendererData = internal.rendererData as {
        gpuTextures: Record<string, GPUTexture>;
        gpuEnvTextures: Record<string, GPUTexture>;
        gpuEmptyTexture: GPUTexture;
    };
    rendererData.gpuTextures.first = texture as unknown as GPUTexture;
    rendererData.gpuEnvTextures.second = texture as unknown as GPUTexture;
    rendererData.gpuEmptyTexture = texture as unknown as GPUTexture;
    Object.assign(internal, {
        device: {},
        wireframeIndexGPUBuffer: [undefined, buffer],
        gpuVertexBuffer: [undefined, buffer],
        gpuFSUniformsBuffers: [[undefined, buffer]]
    });

    expect(() => renderer.destroy()).not.toThrow();
    expect(buffer.destroy).toHaveBeenCalledTimes(3);
    expect(texture.destroy).toHaveBeenCalledOnce();
});

it('updates the active WebGPU render pass clear color through the public API', () => {
    const renderer = new ModelRenderer(createMinimalModel());
    const attachment = {clearValue: [0.15, 0.15, 0.15, 1] as GPUColor};
    Object.assign(renderer as unknown as Record<string, unknown>, {
        gpuRenderPassDescriptor: {colorAttachments: [attachment]}
    });

    renderer.setClearColor(0, 0, 0, 0);

    expect(attachment.clearValue).toEqual({r: 0, g: 0, b: 0, a: 0});
});

it('preserves a clear color selected before backend initialization', () => {
    const renderer = new ModelRenderer(createMinimalModel());

    renderer.setClearColor(0.2, 0.3, 0.4, 0.5);

    expect((renderer as unknown as {clearColor: GPUColor}).clearColor).toEqual({
        r: 0.2,
        g: 0.3,
        b: 0.4,
        a: 0.5
    });
});
