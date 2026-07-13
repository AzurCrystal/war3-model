import {FilterMode} from '../model';
import type {Geoset, Material, Model} from '../model';

const DISCARD_MODULATE_LEVEL = 0.01;

export function getLayerDiscardAlphaLevel(filterMode = FilterMode.None): number {
    if (filterMode === FilterMode.Transparent) {
        return 0.75;
    }
    if (filterMode === FilterMode.Modulate || filterMode === FilterMode.Modulate2x) {
        return DISCARD_MODULATE_LEVEL;
    }
    return 0;
}

export function comparePriorityPlane(
    leftPriority: number | undefined,
    leftIndex: number,
    rightPriority: number | undefined,
    rightIndex: number
): number {
    return (leftPriority ?? 0) - (rightPriority ?? 0) || leftIndex - rightIndex;
}

export function buildGeosetRenderOrder(
    geosets: readonly Geoset[],
    materials: readonly Material[]
): number[] {
    return geosets.map((_, index) => index).sort((left, right) => comparePriorityPlane(
        materials[geosets[left].MaterialID]?.PriorityPlane,
        left,
        materials[geosets[right].MaterialID]?.PriorityPlane,
        right
    ));
}

export type ModelRenderGroupKind = 'geoset' | 'particle' | 'ribbon';

export interface ModelRenderGroup {
    kind: ModelRenderGroupKind;
    indices: number[];
    layerIndices?: number[];
}

interface ModelRenderItem {
    kind: ModelRenderGroupKind;
    index: number;
    layerIndex: number;
    priorityPlane: number;
    filterMode: number;
}

const KIND_ORDER: Record<ModelRenderGroupKind, number> = {
    geoset: 0,
    particle: 1,
    ribbon: 2
};

function appendRenderGroup(
    groups: ModelRenderGroup[],
    kind: ModelRenderGroupKind,
    index: number,
    layerIndex = -1
): void {
    const previous = groups[groups.length - 1];
    if (previous?.kind === kind) {
        previous.indices.push(index);
        previous.layerIndices?.push(layerIndex);
    } else {
        groups.push({
            kind,
            indices: [index],
            ...(kind === 'geoset' ? {layerIndices: [layerIndex]} : {})
        });
    }
}

export function buildModelRenderGroups(model: Pick<
    Model,
    'Geosets' | 'Materials' | 'ParticleEmitters2' | 'RibbonEmitters'
>, isHD = false): ModelRenderGroup[] {
    const groups: ModelRenderGroup[] = [];
    const translucentItems: ModelRenderItem[] = [];

    model.Geosets.forEach((geoset, index) => {
        const material = model.Materials[geoset.MaterialID];
        const layers = isHD ? material?.Layers.slice(0, 1) : material?.Layers;
        layers?.forEach((layer, layerIndex) => {
            const filterMode = layer.FilterMode ?? FilterMode.None;
            if (filterMode < FilterMode.Blend) {
                appendRenderGroup(groups, 'geoset', index, isHD ? -1 : layerIndex);
                return;
            }
            translucentItems.push({
                kind: 'geoset',
                index,
                layerIndex: isHD ? -1 : layerIndex,
                priorityPlane: material?.PriorityPlane ?? 0,
                filterMode
            });
        });
    });

    model.ParticleEmitters2.forEach((emitter, index) => translucentItems.push({
        kind: 'particle',
        index,
        layerIndex: -1,
        priorityPlane: emitter.PriorityPlane ?? 0,
        filterMode: Number.POSITIVE_INFINITY
    }));

    model.RibbonEmitters.forEach((emitter, index) => {
        const material = model.Materials[emitter.MaterialID];
        translucentItems.push({
            kind: 'ribbon',
            index,
            layerIndex: -1,
            priorityPlane: material?.PriorityPlane ?? 0,
            filterMode: Number.POSITIVE_INFINITY
        });
    });

    translucentItems.sort((left, right) =>
        left.priorityPlane - right.priorityPlane ||
        KIND_ORDER[left.kind] - KIND_ORDER[right.kind] ||
        left.filterMode - right.filterMode ||
        left.index - right.index ||
        left.layerIndex - right.layerIndex
    );
    for (const item of translucentItems) {
        appendRenderGroup(groups, item.kind, item.index, item.layerIndex);
    }
    return groups;
}

export function getBlockCompressedBytesPerRow(format: GPUTextureFormat, width: number): number {
    const bytesPerBlock = format === 'bc1-rgba-unorm' ||
        format === 'bc1-rgba-unorm-srgb' ||
        format === 'bc4-r-unorm' ||
        format === 'bc4-r-snorm' ? 8 : 16;
    return Math.ceil(width / 4) * bytesPerBlock;
}
