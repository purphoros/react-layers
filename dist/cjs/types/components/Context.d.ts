import React, { FC } from 'react';
export declare const MINIMIZED_FLAG = 0;
export declare const MAXIMIZED_FLAG = 1;
export declare const uuidv4: () => string;
export interface Layer {
    layerUuid?: string;
    updatedOn?: number;
    name?: string;
    orientation?: string;
    children?: any;
    [k: string]: any;
}
interface Context {
    laer: any;
    createLayer: (values: Layer, callback?: () => void) => void;
    closeLayerByUuid: (layerUuid: string) => void;
    closeLayerByName: (name: string) => void;
    closeAllLayers: () => void;
    [k: string]: any;
}
export declare const useLayerContext: () => Context;
interface Props {
    children: React.ReactNode;
}
export declare const LayersProvider: FC<Props>;
declare const _default: {
    LayersProvider: React.FC<Props>;
    useLayerContext: () => Context;
};
export default _default;
