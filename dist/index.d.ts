import React, { ElementType } from 'react';

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
interface Props {
    children: ElementType;
}
declare const _default: {
    LayerContextProvider: React.FC<Props>;
    useLayerContext: () => Context;
};

export { _default as LayerContextProvider, _default as useLayerContext };
