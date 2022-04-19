"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayerContext = exports.LayerContextProvider = exports.MAXIMIZED_FLAG = exports.MINIMIZED_FLAG = void 0;
var react_1 = require("react");
var ActiveLayers_1 = require("./components/ActiveLayers");
var functions_1 = require("./functions");
exports.MINIMIZED_FLAG = 0;
exports.MAXIMIZED_FLAG = 1;
var LayerContext = (0, react_1.createContext)([]);
var useLayerContext = function () {
    var context = (0, react_1.useContext)(LayerContext);
    if (context === undefined) {
        throw new Error('useLayerContext was used outside of its Provider');
    }
    return context;
};
exports.useLayerContext = useLayerContext;
var LayerContextProvider = function (_a) {
    var children = _a.children;
    var callbacks = (0, react_1.useRef)([]);
    var _b = (0, react_1.useState)([]), layers = _b[0], addLayer = _b[1];
    var closeLayerByUuid = (0, react_1.useCallback)(function (layerUuid) {
        return addLayer(layers.filter(function (layer) { return layer.layerUuid !== layerUuid; }));
    }, [layers]);
    var closeLayerByName = (0, react_1.useCallback)(function (name) {
        return addLayer(layers.filter(function (layer) { return layer.name !== name; }));
    }, [layers]);
    var closeAllLayers = (0, react_1.useCallback)(function () { return addLayer([]); }, []);
    var createLayer = (0, react_1.useCallback)(function (_a, callback) {
        var children = _a.children, name = _a.name, _b = _a.orientation, orientation = _b === void 0 ? 'full' : _b;
        var layerUuid = (0, functions_1.uuidv4)();
        var newLayer = {
            name: name,
            layerUuid: layerUuid,
            orientation: orientation,
            status: exports.MAXIMIZED_FLAG,
            updatedOn: Date.now(),
            children: (0, react_1.cloneElement)(children, { layerUuid: layerUuid })
        };
        addLayer(function (existing) { return __spreadArray(__spreadArray([], existing, true), [newLayer], false); });
        if (callback)
            callbacks.current.push(callback);
    }, []);
    (0, react_1.useEffect)(function () {
        callbacks.current.forEach(function (callback) { return callback(); });
        callbacks.current = [];
    }, [layers]);
    var contextValue = (0, react_1.useMemo)(function () { return (__assign(__assign({}, layers), { createLayer: createLayer, closeLayerByUuid: closeLayerByUuid, closeLayerByName: closeLayerByName, closeAllLayers: closeAllLayers })); }, [layers, createLayer, closeLayerByUuid, closeLayerByName, closeAllLayers]);
    var activeLayers = layers
        .sort(function (a, b) { return a.updatedOn < b.updatedOn ? -1 : a === b ? 0 : 1; })
        .filter(function (d) { return !!d.status; });
    return react_1.default.createElement(LayerContext.Provider, { value: contextValue },
        children,
        !!(activeLayers === null || activeLayers === void 0 ? void 0 : activeLayers.length) && react_1.default.createElement(ActiveLayers_1.default, { layers: activeLayers, closeLayerByUuid: closeLayerByUuid }));
};
exports.LayerContextProvider = LayerContextProvider;
//# sourceMappingURL=index.js.map