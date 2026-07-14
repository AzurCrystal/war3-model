import type {
    model,
    parseMDX,
    generateMDX,
    parseMDL,
    generateMDL,
    blp,
    decodeBLP,
    getBLPImageData,
    createBLPImageDecoder,
    ModelRenderer
} from './war3-model.d.ts';

declare global {
    interface Window {
        war3model: {
            model: typeof model;
            parseMDX: typeof parseMDX;
            generateMDX: typeof generateMDX;
            parseMDL: typeof parseMDL;
            generateMDL: typeof generateMDL;
            blp: typeof blp;
            decodeBLP: typeof decodeBLP;
            getBLPImageData: typeof getBLPImageData;
            createBLPImageDecoder: typeof createBLPImageDecoder;
            ModelRenderer: typeof ModelRenderer;
        };
    }
}
