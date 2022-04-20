import React, { FC } from 'react';

interface Layer {
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
declare const useLayerContext: () => Context;
interface Props {
    children: React.ReactNode;
}
declare const LayerContextProvider: FC<Props>;

export { LayerContextProvider, useLayerContext };
