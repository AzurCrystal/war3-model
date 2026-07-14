import {describe, expect, it} from 'vitest';
import {LineType, type AnimVector, type Geoset, type Helper, type Model} from '../model';
import {generate} from './generate';
import {parse} from './parse';

function createAnimatedModel (): Model {
    const minimumExtent = new Float32Array([-1, -2, -3]);
    const maximumExtent = new Float32Array([4, 5, 6]);
    const translation: AnimVector = {
        LineType: LineType.Bezier,
        GlobalSeqId: null,
        Keys: [
            {
                Frame: 0,
                Vector: new Float32Array([1, 2, 3]),
                InTan: new Float32Array([0.5, 1.5, 2.5]),
                OutTan: new Float32Array([1.5, 2.5, 3.5])
            },
            {
                Frame: 100,
                Vector: new Float32Array([4, 5, 6]),
                InTan: new Float32Array([3.5, 4.5, 5.5]),
                OutTan: new Float32Array([4.5, 5.5, 6.5])
            }
        ]
    };
    const helper: Helper = {
        Name: 'AnimatedHelper',
        ObjectId: 0,
        Parent: null,
        Flags: 0,
        PivotPoint: new Float32Array([0, 0, 0]),
        Translation: translation
    };
    const geoset: Geoset = {
        Vertices: new Float32Array([
            -1, 0, 0,
            1, 0, 0,
            0, 1, 0
        ]),
        Normals: new Float32Array([
            0, 0, 1,
            0, 0, 1,
            0, 0, 1
        ]),
        TVertices: [new Float32Array([0, 0, 1, 0, 0.5, 1])],
        VertexGroup: new Uint8Array([0, 0, 0]),
        Faces: new Uint16Array([0, 1, 2]),
        Groups: [[0]],
        TotalGroupsCount: 1,
        MinimumExtent: minimumExtent,
        MaximumExtent: maximumExtent,
        BoundsRadius: 6,
        Anims: [],
        MaterialID: 0,
        SelectionGroup: 0,
        Unselectable: false
    };

    return {
        Version: 800,
        Info: {
            Name: 'parse-test',
            MinimumExtent: minimumExtent,
            MaximumExtent: maximumExtent,
            BoundsRadius: 6,
            BlendTime: 0
        },
        Sequences: [],
        Textures: [],
        Materials: [],
        Geosets: [geoset],
        GeosetAnims: [],
        Bones: [],
        Helpers: [helper],
        Attachments: [],
        Nodes: [helper],
        PivotPoints: [helper.PivotPoint],
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

describe('MDX parser storage', () => {
    it('bulk-copies geometry without aliasing the source binary', () => {
        const binary = generate(createAnimatedModel());
        const parsed = parse(binary);
        const geoset = parsed.Geosets[0];

        expect(Array.from(geoset.Vertices)).toEqual([-1, 0, 0, 1, 0, 0, 0, 1, 0]);
        expect(Array.from(geoset.Normals)).toEqual([0, 0, 1, 0, 0, 1, 0, 0, 1]);
        expect(Array.from(geoset.Faces)).toEqual([0, 1, 2]);
        expect(Array.from(geoset.VertexGroup)).toEqual([0, 0, 0]);
        expect(Array.from(geoset.TVertices[0])).toEqual([0, 0, 1, 0, 0.5, 1]);
        expect(geoset.Vertices.buffer).not.toBe(binary);
    });

    it('packs one animation track into shared non-overlapping buffers', () => {
        const parsed = parse(generate(createAnimatedModel()));
        const keys = parsed.Helpers[0].Translation!.Keys;

        expect(Array.from(keys[0].Vector)).toEqual([1, 2, 3]);
        expect(Array.from(keys[1].Vector)).toEqual([4, 5, 6]);
        expect(Array.from(keys[0].InTan!)).toEqual([0.5, 1.5, 2.5]);
        expect(Array.from(keys[1].OutTan!)).toEqual([4.5, 5.5, 6.5]);
        expect(keys[0].Vector.buffer).toBe(keys[1].Vector.buffer);
        expect(keys[0].Vector.byteOffset).not.toBe(keys[1].Vector.byteOffset);
        expect(keys[0].InTan!.buffer).toBe(keys[1].OutTan!.buffer);

        keys[0].Vector[0] = 99;
        expect(keys[1].Vector[0]).toBe(4);
    });
});
