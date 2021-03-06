import React, { useMemo, useState, useCallback, useContext, createContext, ReactNode, useRef, useEffect, cloneElement } from 'react';
import ActiveLayers from './components/ActiveLayers';
import { uuidv4 } from './functions';

export const MINIMIZED_FLAG = 0;
export const MAXIMIZED_FLAG = 1;

export interface Layer {
  layerUuid?: string
  updatedOn?: number
  name?: string
  orientation?: string
  children?: any
  [k: string]: any
}

interface Context {
  laer: any
  createLayer: (values: Layer, callback?: () => void) => void
  closeLayerByUuid: (layerUuid: string) => void
  closeLayerByName: (name: string) => void
  closeAllLayers: () => void
  [k: string]: any
}

const LayerContext = createContext([]);

const useLayerContext = (): Context => {
  const context = useContext(LayerContext);
  if (context === undefined) {
    throw new Error('useLayerContext was used outside of its Provider');
  }
  return context as any;
};

const LayerContextProvider = ({ children }: { children: ReactNode }) => {

  const callbacks = useRef<(() => void)[]>([]);

  const [ layers, addLayer ] = useState<Array<Layer>>([]);

  const closeLayerByUuid = useCallback((layerUuid: string) =>
    addLayer(layers.filter((layer) => layer.layerUuid !== layerUuid)), [ layers ]);

  const closeLayerByName = useCallback((name: string) =>
    addLayer(layers.filter((layer) => layer.name !== name)), [ layers ]);

  const closeAllLayers = useCallback(() => addLayer([]), []);

  const createLayer = useCallback(({
    children,
    name,
    orientation = 'full'
  }: Layer, callback?: () => void) => {
    const layerUuid = uuidv4();

    let newLayer = {
      name,
      layerUuid,
      orientation,
      status: MAXIMIZED_FLAG,
      updatedOn: Date.now(),
      children: cloneElement(children, { layerUuid })
    };

    addLayer((existing: any) => [ ...existing, newLayer ]);

    if (callback) callbacks.current.push(callback);
  }, [ ]);

  useEffect(() => {
    callbacks.current.forEach((callback) => callback());
    callbacks.current = [];
  }, [ layers ]);

  const contextValue: any = useMemo(
    () => ({
      ...layers,
      createLayer,
      closeLayerByUuid,
      closeLayerByName,
      closeAllLayers
    }),
    [ layers, createLayer, closeLayerByUuid, closeLayerByName, closeAllLayers ]
  );

  const activeLayers = layers
    .sort((a: any, b: any) => a.updatedOn < b.updatedOn ? -1 : a === b ? 0 : 1)
    .filter((d: any) => !!d.status);

  return <LayerContext.Provider value={contextValue}>
    {children}
    {!!activeLayers?.length && <ActiveLayers layers={activeLayers} closeLayerByUuid={closeLayerByUuid} />}
  </LayerContext.Provider>;
};

export { LayerContextProvider, useLayerContext };