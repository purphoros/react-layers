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
import React, { useReducer, cloneElement } from 'react';
import { useEffect } from 'react';
var getActive = function (items) { return items
    .filter(function (d) { return !!d.status; })
    .sort(function (a, b) { return a.updatedOn > b.updatedOn ? 1 : a === b ? 0 : -1; }); };
var reducer = function (existing, layers) {
    if ((layers === null || layers === void 0 ? void 0 : layers.length) !== (existing === null || existing === void 0 ? void 0 : existing.length)) {
        return layers;
    }
    return existing;
};
var ActiveLayers = function (props) {
    var layers = props.layers, closeLayerByUuid = props.closeLayerByUuid;
    var _a = useReducer(reducer, getActive(layers)), _b = _a[0], activeLayers = _b === void 0 ? [] : _b, dispatch = _a[1];
    useEffect(function () {
        dispatch(getActive(layers));
    }, [layers]);
    var alignments = {
        modal: {
            alignItems: "center", justifyContent: "center"
        },
        default: {},
        bottom: {
            justifyContent: "flex-end"
        }
    };
    return React.createElement(React.Fragment, null, activeLayers.map(function (layer) {
        var layerUuid = layer.layerUuid, children = layer.children, _a = layer.orientation, orientation = _a === void 0 ? "modal" : _a;
        console.log("layer", layer);
        var custom = (orientation && alignments[orientation]) ? alignments[orientation] : alignments.default;
        return React.createElement("div", { key: layerUuid, style: __assign(__assign({}, custom), { display: "flex", flexDirection: "column", position: "absolute", top: "0px", right: "0px", bottom: "0px", left: "0px", backgroundColor: "transparent" }) },
            React.createElement("div", { style: { position: "absolute", top: "0px", right: "0px", bottom: "0px", left: "0px", backgroundColor: "black", opacity: "0.5" }, onClick: function () { return layerUuid && closeLayerByUuid(layerUuid); } }),
            cloneElement(children, __assign(__assign(__assign({}, children.props), { style: __assign(__assign({}, children.props.style), { backgroundColor: "#FF0000", position: "relative" }) }), layer)));
    }));
};
export default ActiveLayers;
//# sourceMappingURL=ActiveLayers.js.map