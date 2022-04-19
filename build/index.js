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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
        addLayer(function (existing) { return __spreadArray(__spreadArray([], existing, true), [newLayer], false); });
        if (callback)
            callbacks.current.push(callback);
    }, [layers]);
    useEffect(function () {
        callbacks.current.forEach(function (callback) { return callback(); });
        callbacks.current = [];
    }, [layers]);
    var contextValue = useMemo(function () { return (__assign(__assign({}, layers), { createLayer: createLayer, closeLayerByUuid: closeLayerByUuid, closeLayerByName: closeLayerByName, closeAllLayers: closeAllLayers })); }, [layers, createLayer]);
    var activeLayers = layers
        .sort(function (a, b) { return a.updatedOn < b.updatedOn ? 1 : a === b ? 0 : -1; })
        .filter(function (d) { return !!d.status; });
    return React.createElement(LayerContext.Provider, { value: contextValue },
        children,
        !!(activeLayers === null || activeLayers === void 0 ? void 0 : activeLayers.length) && React.createElement(ActiveLayers, { layers: activeLayers, closeLayerByUuid: closeLayerByUuid }));
};
export { LayerContextProvider, useLayerContext };
//# sourceMappingURL=index.js.map