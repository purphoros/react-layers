import React, { FC } from 'react';

interface Base {
    updatedOn?: number;
    name?: string;
    orientation?: string;
    component: React.ReactElement<Layer>;
    [k: string]: any;
}
interface Layer extends Base {
    layerUuid: string;
}
interface Context {
    layers: any;
    createLayer: (values: Base, callback?: () => void) => void;
    closeLayerByUuid: (layerUuid: string) => void;
    closeLayerByName: (name: string) => void;
    closeAllLayers: () => void;
    [k: string]: any;
}
declare const useLayer: () => Context;
interface Props {
    children: React.ReactNode;
}
declare const LayersProvider: FC<Props>;

export { Context, Layer, LayersProvider, useLayer };
