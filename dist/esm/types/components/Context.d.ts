import React, { FC } from 'react';
export declare const MINIMIZED_FLAG = 0;
export declare const MAXIMIZED_FLAG = 1;
interface Base {
    layerUuid?: string;
    updatedOn?: number;
    name?: string;
    orientation?: string;
    component: (props: Layer) => JSX.Element;
    [k: string]: any;
}
export interface Layer extends Base {
    layerUuid: string;
}
export interface Context {
    layers: any;
    createLayer: (values: Base, callback?: () => void) => void;
    closeLayerByUuid: (layerUuid: string) => void;
    closeLayerByName: (name: string) => void;
    closeAllLayers: () => void;
    [k: string]: any;
}
export declare const useLayer: () => Context;
interface Props {
    children: React.ReactNode;
}
export declare const LayersProvider: FC<Props>;
declare const _default: {
    LayersProvider: React.FC<Props>;
    useLayer: () => Context;
};
export default _default;
