var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useMemo, useState, useCallback, useContext, createContext, useRef, useEffect, cloneElement } from 'react';
import ActiveLayers from './components/ActiveLayers';
import { uuidv4 } from './functions';
export var MINIMIZED_FLAG = 0;
export var MAXIMIZED_FLAG = 1;
var LayerContext = createContext([]);
var useLayerContext = function () {
    var context = useContext(LayerContext);
    if (context === undefined) {
        throw new Error('useLayerContext was used outside of its Provider');
    }
    return context;
};
var LayerContextProvider = function (_a) {
    var children = _a.children;
    var callbacks = useRef([]);
    var _b = useState([]), layers = _b[0], addLayer = _b[1];
    var closeLayerByUuid = useCallback(function (layerUuid) {
        return addLayer(layers.filter(function (layer) { return layer.layerUuid !== layerUuid; }));
    }, [layers]);
    var closeLayerByName = useCallback(function (name) {
        return addLayer(layers.filter(function (layer) { return layer.name !== name; }));
    }, [layers]);
    var closeAllLayers = function () { return addLayer([]); };
    var createLayer = useCallback(function (_a, callback) {
        var children = _a.children, name = _a.name, _b = _a.orientation, orientation = _b === void 0 ? 'full' : _b;
        var layerUuid = uuidv4();
        var newLayer = {
            name: name,
            layerUuid: layerUuid,
            orientation: orientation,
            status: MAXIMIZED_FLAG,
            updatedOn: Date.now(),
            children: cloneElement(children, { layerUuid: layerUuid })
        };
        addLayer(function (existing) { return __spreadArrays(existing, [newLayer]); });
        // addLayer(layers);
        // const _layer =  
        // addLayer((existing: any) => {
        // return [ ...existing, {
        //   ...layer,
        //   layerUuid: uuidv4(),
        //   status: 1,
        //   updatedOn: Date.now()
        //  }]
        // });
        if (callback)
            callbacks.current.push(callback);
    }, [layers]);
    useEffect(function () {
        callbacks.current.forEach(function (callback) { return callback(); });
        callbacks.current = [];
    }, [layers]);
    var contextValue = useMemo(function () { return (__assign(__assign({}, layers), { createLayer: createLayer,
        closeLayerByUuid: closeLayerByUuid,
        closeLayerByName: closeLayerByName,
        closeAllLayers: closeAllLayers })); }, [layers, createLayer]);
    var activeLayers = layers
        .sort(function (a, b) { var _a, _b; return ((_a = a.updatedOn) !== null && _a !== void 0 ? _a : 0) > ((_b = b.updatedOn) !== null && _b !== void 0 ? _b : 0) ? -1 : 1; })
        .filter(function (d) { return !!d.status; });
    return React.createElement(LayerContext.Provider, { value: contextValue },
        children,
        !!(activeLayers === null || activeLayers === void 0 ? void 0 : activeLayers.length) && React.createElement(ActiveLayers, { layers: activeLayers, closeLayerByUuid: closeLayerByUuid }));
};
export { LayerContextProvider, useLayerContext };
//# sourceMappingURL=index.js.map