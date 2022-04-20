import React from 'react';

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
declare const _default: {
    LayerContextProvider: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    useLayerContext: () => Context;
};

export { _default as LayerContextProvider, _default as useLayerContext };
