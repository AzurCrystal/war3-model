import {describe, expect, it} from 'vitest';
import {FilterMode} from '../model';
import type {Geoset, Material, Model} from '../model';
import {
    buildGeosetRenderOrder,
    buildModelRenderGroups,
    comparePriorityPlane,
    getBlockCompressedBytesPerRow,
    getLayerDiscardAlphaLevel
} from './renderSemantics';

describe('render priority', () => {
    it('sorts geosets by material priority and preserves source order for ties', () => {
        const geosets = [0, 1, 2, 99, 0].map(MaterialID => ({MaterialID})) as Geoset[];
        const materials = [
            {PriorityPlane: 5},
            {PriorityPlane: -1},
            {PriorityPlane: 5}
        ] as Material[];

        expect(buildGeosetRenderOrder(geosets, materials)).toEqual([1, 3, 0, 2, 4]);
    });

    it('treats a missing priority plane as zero', () => {
        expect(comparePriorityPlane(undefined, 4, 0, 2)).toBeGreaterThan(0);
        expect(comparePriorityPlane(-1, 4, undefined, 2)).toBeLessThan(0);
    });

    it('draws opaque geosets first and interleaves translucent objects by priority', () => {
        const materials = [
            {PriorityPlane: 9, Layers: [{FilterMode: FilterMode.None}]},
            {PriorityPlane: 0, Layers: [{FilterMode: FilterMode.Transparent}]},
            {PriorityPlane: 2, Layers: [{FilterMode: FilterMode.Blend}]},
            {PriorityPlane: 0, Layers: [{FilterMode: FilterMode.Blend}]},
            {PriorityPlane: 1, Layers: [{FilterMode: FilterMode.Additive}]},
            {
                PriorityPlane: 0,
                Layers: [
                    {FilterMode: FilterMode.None},
                    {FilterMode: FilterMode.Additive}
                ]
            }
        ] as Material[];
        const model = {
            Materials: materials,
            Geosets: [0, 1, 2, 3, 5].map(MaterialID => ({MaterialID})) as Geoset[],
            ParticleEmitters2: [{PriorityPlane: 0}, {PriorityPlane: 3}],
            RibbonEmitters: [{MaterialID: 4}]
        } as Pick<Model, 'Materials' | 'Geosets' | 'ParticleEmitters2' | 'RibbonEmitters'>;

        expect(buildModelRenderGroups(model)).toEqual([
            {kind: 'geoset', indices: [0, 1, 4, 3, 4], layerIndices: [0, 0, 0, 0, 1]},
            {kind: 'particle', indices: [0]},
            {kind: 'ribbon', indices: [0]},
            {kind: 'geoset', indices: [2], layerIndices: [0]},
            {kind: 'particle', indices: [1]}
        ]);
    });

    it('keeps an HD material as one combined render item', () => {
        const model = {
            Materials: [{
                PriorityPlane: 2,
                Layers: [
                    {FilterMode: FilterMode.Blend},
                    {FilterMode: FilterMode.Additive}
                ]
            }],
            Geosets: [{MaterialID: 0}],
            ParticleEmitters2: [],
            RibbonEmitters: []
        } as unknown as Pick<Model, 'Materials' | 'Geosets' | 'ParticleEmitters2' | 'RibbonEmitters'>;

        expect(buildModelRenderGroups(model, true)).toEqual([
            {kind: 'geoset', indices: [0], layerIndices: [-1]}
        ]);
    });
});

describe('layer alpha discard', () => {
    it.each([
        [FilterMode.None, 0],
        [FilterMode.Transparent, 0.75],
        [FilterMode.Blend, 0],
        [FilterMode.Modulate, 0.01],
        [FilterMode.Modulate2x, 0.01]
    ])('maps filter mode %s to threshold %s', (filterMode, expected) => {
        expect(getLayerDiscardAlphaLevel(filterMode)).toBe(expected);
    });
});

describe('block-compressed texture layout', () => {
    it.each([
        ['bc1-rgba-unorm', 4, 8],
        ['bc1-rgba-unorm', 5, 16],
        ['bc1-rgba-unorm', 10, 24],
        ['bc3-rgba-unorm', 4, 16],
        ['bc3-rgba-unorm', 5, 32],
        ['bc3-rgba-unorm', 10, 48],
        ['bc4-r-unorm', 5, 16],
        ['bc5-rg-unorm', 5, 32]
    ] as const)('uses complete blocks for %s width %s', (format, width, expected) => {
        expect(getBlockCompressedBytesPerRow(format, width)).toBe(expected);
    });
});
