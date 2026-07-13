import {expect, it, vi} from 'vitest';
import {ParticleEmitter2FramesFlags, type Model} from '../model';
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

it('keeps the selected sequence when timeline intervals overlap', () => {
    const model = createMinimalModel();
    model.Sequences.push({
        ...model.Sequences[0],
        Name: 'Attack',
        Interval: new Uint32Array([0, 2])
    });
    const renderer = new ModelRenderer(model);

    renderer.setSequence(1);
    renderer.setFrame(1);

    expect(renderer.getSequence()).toBe(1);
    expect(renderer.getFrame()).toBe(1);
});

it('reuses SD WebGPU bind groups until a texture resource changes', () => {
    const model = createMinimalModel();
    const sourceTexture = {Image: 'texture.blp', ReplaceableId: 0, Flags: 0};
    model.Textures.push(sourceTexture);
    const renderer = new ModelRenderer(model);
    const internal = renderer as unknown as {
        device: GPUDevice;
        fsBindGroupLayout: GPUBindGroupLayout;
        rendererData: {
            gpuSamplers: GPUSampler[];
            gpuTextures: Record<string, GPUTexture>;
            gpuEmptyTexture: GPUTexture;
        };
        getGPUSDBindGroup: (
            geosetIndex: number,
            layerIndex: number,
            buffer: GPUBuffer,
            textureID: number,
            texture: typeof sourceTexture
        ) => GPUBindGroup;
    };
    const createBindGroup = vi.fn(() => ({}) as GPUBindGroup);
    const firstTexture = {createView: vi.fn(() => ({}))} as unknown as GPUTexture;
    const secondTexture = {createView: vi.fn(() => ({}))} as unknown as GPUTexture;
    const sampler = {} as GPUSampler;
    const buffer = {} as GPUBuffer;
    internal.device = {createBindGroup} as unknown as GPUDevice;
    internal.fsBindGroupLayout = {} as GPUBindGroupLayout;
    internal.rendererData.gpuSamplers[0] = sampler;
    internal.rendererData.gpuTextures[sourceTexture.Image] = firstTexture;
    internal.rendererData.gpuEmptyTexture = firstTexture;

    const first = internal.getGPUSDBindGroup(0, 0, buffer, 0, sourceTexture);
    const repeated = internal.getGPUSDBindGroup(0, 0, buffer, 0, sourceTexture);

    expect(repeated).toBe(first);
    expect(createBindGroup).toHaveBeenCalledOnce();

    internal.rendererData.gpuTextures[sourceTexture.Image] = secondTexture;
    const changed = internal.getGPUSDBindGroup(0, 0, buffer, 0, sourceTexture);

    expect(changed).not.toBe(first);
    expect(createBindGroup).toHaveBeenCalledTimes(2);
});

it('allocates ribbon buffers to their predicted steady-state capacity', () => {
    const model = createMinimalModel();
    model.RibbonEmitters.push({
        EmissionRate: 8,
        LifeSpan: 1,
        MaterialID: 0
    } as Model['RibbonEmitters'][number]);
    const renderer = new ModelRenderer(model);
    const ribbons = (renderer as unknown as {
        ribbonsController: {
            emitters: Array<{capacity: number}>;
            resizeEmitterBuffers: (emitter: {capacity: number}, size: number) => void;
        };
    }).ribbonsController;
    const emitter = ribbons.emitters[0];

    ribbons.resizeEmitterBuffers(emitter, 1);

    expect(emitter.capacity).toBe(9);
});

it('keeps the particle array and uploads only active particle data', () => {
    const model = createMinimalModel();
    model.ParticleEmitters2.push({
        EmissionRate: 0,
        LifeSpan: 1,
        FrameFlags: ParticleEmitter2FramesFlags.Head,
        PriorityPlane: 0,
        Visibility: 0
    } as Model['ParticleEmitters2'][number]);
    const renderer = new ModelRenderer(model);
    const particles = (renderer as unknown as {
        particlesController: {
            device: GPUDevice;
            emitters: Array<{particles: Array<{lifeSpan: number}>}>;
            update: (delta: number) => void;
            renderGPUEmitterType: (
                pass: GPURenderPassEncoder,
                emitter: unknown,
                type: ParticleEmitter2FramesFlags
            ) => void;
        };
    }).particlesController;
    const emitter = particles.emitters[0];
    emitter.particles.push({lifeSpan: 0.1}, {lifeSpan: 0.2});
    const originalArray = emitter.particles;

    particles.update(1000);

    expect(emitter.particles).toBe(originalArray);
    expect(emitter.particles).toHaveLength(0);

    const writeBuffer = vi.fn();
    const drawIndexed = vi.fn();
    particles.device = {queue: {writeBuffer}} as unknown as GPUDevice;
    particles.renderGPUEmitterType({
        setVertexBuffer: vi.fn(),
        drawIndexed
    } as unknown as GPURenderPassEncoder, {
        particles: [{}, {}],
        headTexCoords: new Float32Array(80),
        headTexCoordGPUBuffer: {} as GPUBuffer,
        headVertices: new Float32Array(120),
        headVertexGPUBuffer: {} as GPUBuffer
    }, ParticleEmitter2FramesFlags.Head);

    expect(writeBuffer).toHaveBeenNthCalledWith(1, expect.anything(), 0, expect.any(Float32Array), 0, 16);
    expect(writeBuffer).toHaveBeenNthCalledWith(2, expect.anything(), 0, expect.any(Float32Array), 0, 24);
    expect(drawIndexed).toHaveBeenCalledWith(12);
});
