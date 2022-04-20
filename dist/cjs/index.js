"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e),n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function o(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var a=function(t){var o=t.layers,a=t.closeLayerByUuid,u={modal:{alignItems:"center",justifyContent:"center"},default:{},bottom:{justifyContent:"flex-end"}};return r.default.createElement(r.default.Fragment,null,o.map((function(t){var o=t.layerUuid,l=t.children,i=t.orientation,c=void 0===i?"modal":i;console.log("layer",t);var f=c&&u[c]?u[c]:u.default;return r.default.createElement("div",{key:o,style:n(n({},f),{display:"flex",flexDirection:"column",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",backgroundColor:"transparent"})},r.default.createElement("div",{style:{position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",backgroundColor:"black",opacity:"0.5"},onClick:function(){return o&&a(o)}}),e.cloneElement(l,n(n(n({},l.props),{style:n(n({},l.props.style),{backgroundColor:"#FF0000",position:"relative"})}),t)))})))},u=e.createContext([]),l={LayerContextProvider:function(t){var l=t.children,i=e.useRef([]),c=e.useState([]),f=c[0],s=c[1],x=e.useCallback((function(e){return s(f.filter((function(t){return t.layerUuid!==e})))}),[f]),d=e.useCallback((function(e){return s(f.filter((function(t){return t.name!==e})))}),[f]),p=e.useCallback((function(){return s([])}),[]),y=e.useCallback((function(t,r){var n,a,u=t.children,l=t.name,c=t.orientation,f=void 0===c?"full":c,x=(n=(new Date).getTime(),a="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0,"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random();return n>0?(t=(n+t)%16|0,n=Math.floor(n/16)):(t=(a+t)%16|0,a=Math.floor(a/16)),("x"===e?t:3&t|8).toString(16)}))),d={name:l,layerUuid:x,orientation:f,status:1,updatedOn:Date.now(),children:e.cloneElement(u,{layerUuid:x})};s((function(e){return o(o([],e,!0),[d],!1)})),r&&i.current.push(r)}),[]);e.useEffect((function(){i.current.forEach((function(e){return e()})),i.current=[]}),[f]);var v=e.useMemo((function(){return n(n({},f),{createLayer:y,closeLayerByUuid:x,closeLayerByName:d,closeAllLayers:p})}),[f,y,x,d,p]),m=f.sort((function(e,t){return e.updatedOn<t.updatedOn?-1:e===t?0:1})).filter((function(e){return!!e.status}));return r.default.createElement(u.Provider,{value:v},l,!!(null==m?void 0:m.length)&&r.default.createElement(a,{layers:m,closeLayerByUuid:x}))},useLayerContext:function(){var t=e.useContext(u);if(void 0===t)throw new Error("useLayerContext was used outside of its Provider");return t}};exports.LayerContextProvider=l,exports.useLayerContext=l;
//# sourceMappingURL=index.js.map
