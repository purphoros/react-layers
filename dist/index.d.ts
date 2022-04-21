import React, { FC } from 'react';

interface Layer {
    layerUuid?: string;
    updatedOn?: number;
    name?: string;
    orientation?: string;
    component?: any;
    [k: string]: any;
}
interface Context {
    layers: any;
    createLayer: (values: Layer, callback?: () => void) => void;
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

export { Layer, LayersProvider, useLayer };
