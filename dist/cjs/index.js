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
***************************************************************************** */function o(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var a,u=function(t){var o=t.layers,a=t.closeLayerByUuid,u={modal:{alignItems:"center",justifyContent:"center"},default:{},bottom:{justifyContent:"flex-end"}};return r.default.createElement(r.default.Fragment,null,o.map((function(t){var o=t.layerUuid,i=t.component,l=t.orientation,c=void 0===l?"modal":l,f=c&&u[c]?u[c]:u.default;return r.default.createElement("div",{key:o,style:n(n({},f),{display:"flex",flexDirection:"column",position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",overflow:"auto",backgroundColor:"transparent"})},r.default.createElement("div",{style:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",backgroundColor:"black",opacity:"0.5"},onClick:function(){return o&&a(o)}}),e.cloneElement(i,n(n(n({},i.props),{style:n(n({},i.props.style),{backgroundColor:"#FF0000",position:"relative"})}),t)))})))},i=new Uint8Array(16);function l(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(i)}var c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function f(e){return"string"==typeof e&&c.test(e)}for(var s=[],d=0;d<256;++d)s.push((d+256).toString(16).substr(1));function p(e,t,r){var n=(e=e||{}).random||(e.rng||l)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!f(r))throw TypeError("Stringified UUID is invalid");return r}(n)}var y=e.createContext([]);exports.LayersProvider=function(t){var a=t.children,i=e.useRef([]),l=e.useState([]),c=l[0],f=l[1],s=e.useCallback((function(e){return f(c.filter((function(t){return t.layerUuid!==e})))}),[c]),d=e.useCallback((function(e){return f(c.filter((function(t){return t.name!==e})))}),[c]),m=e.useCallback((function(){return f([])}),[]),v=e.useCallback((function(t,r){var n=t.component,a=t.name,u=t.orientation,l=void 0===u?"full":u,c=p(),s={name:a,layerUuid:c,orientation:l,status:1,updatedOn:Date.now(),component:e.cloneElement(n,{layerUuid:c})};f((function(e){return o(o([],e,!0),[s],!1)})),r&&i.current.push(r)}),[]);e.useEffect((function(){i.current.forEach((function(e){return e()})),i.current=[]}),[c]);var g=e.useMemo((function(){return n(n({},c),{createLayer:v,closeLayerByUuid:s,closeLayerByName:d,closeAllLayers:m})}),[c,v,s,d,m]),b=c.sort((function(e,t){return e.updatedOn<t.updatedOn?-1:e===t?0:1})).filter((function(e){return!!e.status}));return r.default.createElement(r.default.Fragment,null,r.default.createElement(y.Provider,{value:g},a,!!(null==b?void 0:b.length)&&r.default.createElement(u,{layers:b,closeLayerByUuid:s})))},exports.useLayer=function(){var t=e.useContext(y);if(void 0===t)throw new Error("useLayer was used outside of its Provider");return t};
//# sourceMappingURL=index.js.map
