import React, { FC, ReactElement } from 'react';
export declare const MINIMIZED_FLAG = 0;
export declare const MAXIMIZED_FLAG = 1;
interface Base {
    updatedOn?: number;
    name?: string;
    orientation?: string;
    component: ReactElement<LayerProps, any>;
}
export interface LayerProps {
    layerUuid: string;
    style?: any;
}
export interface Layer extends Base {
    layerUuid: string;
}
export interface Context {
    layers: Array<Layer>;
    createLayer?: (values: Base, callback?: () => void) => void;
    closeLayerByUuid?: (layerUuid: string) => void;
    closeLayerByName?: (name: string) => void;
    closeAllLayers?: () => void;
}
export declare const useLayer: () => any;
interface Props {
    children: React.ReactNode;
}
export declare const LayersProvider: FC<Props>;
export {};
