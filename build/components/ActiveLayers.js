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
import React, { cloneElement } from 'react';
// const getActive = (items: any) => items
//   .filter((d: any) => !!d.status)
//   .sort((a: any, b: any) => a.updatedOn > b.updatedOn ? 1 : a === b ? 0 : -1);
// const reducer = (existing: any, layers: any) => {
//   if (layers?.length !== existing?.length) {
//     return layers;
//   }
//   return existing;
// }
var ActiveLayers = function (props) {
    var layers = props.layers, closeLayerByUuid = props.closeLayerByUuid;
    // const [ activeLayers = [], dispatch ] = useReducer(reducer, getActive(layers));
    // useEffect(() => {
    //   dispatch(getActive(layers));
    // }, [ layers ]);
    var alignments = {
        modal: {
            alignItems: "center", justifyContent: "center"
        },
        default: {},
        bottom: {
            justifyContent: "flex-end"
        }
    };
    return React.createElement(React.Fragment, null, layers.map(function (layer) {
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