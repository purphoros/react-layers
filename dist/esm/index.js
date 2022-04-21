import t,{cloneElement as r,createContext as e,useContext as n,useRef as o,useState as a,useCallback as i,useEffect as u,useMemo as l}from"react";
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
***************************************************************************** */var c=function(){return c=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},c.apply(this,arguments)};function f(t,r,e){if(e||2===arguments.length)for(var n,o=0,a=r.length;o<a;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return t.concat(n||Array.prototype.slice.call(r))}var s,p=function(e){var n=e.layers,o=e.closeLayerByUuid,a={modal:{alignItems:"center",justifyContent:"center"},default:{},bottom:{justifyContent:"flex-end"}};return t.createElement(t.Fragment,null,n.map((function(e){var n=e.layerUuid,i=e.component,u=e.orientation,l=void 0===u?"modal":u,f=l&&a[l]?a[l]:a.default;return t.createElement("div",{key:n,style:c(c({},f),{display:"flex",flexDirection:"column",position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",overflow:"auto",backgroundColor:"transparent"})},t.createElement("div",{style:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",backgroundColor:"black",opacity:"0.5"},onClick:function(){return n&&o(n)}}),r(i,c(c(c({},i.props),{style:c(c({},i.props.style),{backgroundColor:"#FF0000",position:"relative"})}),e)))})))},d=new Uint8Array(16);function y(){if(!s&&!(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(d)}var m=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function v(t){return"string"==typeof t&&m.test(t)}for(var g=[],h=0;h<256;++h)g.push((h+256).toString(16).substr(1));function b(t,r,e){var n=(t=t||{}).random||(t.rng||y)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){e=e||0;for(var o=0;o<16;++o)r[e+o]=n[o];return r}return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(g[t[r+0]]+g[t[r+1]]+g[t[r+2]]+g[t[r+3]]+"-"+g[t[r+4]]+g[t[r+5]]+"-"+g[t[r+6]]+g[t[r+7]]+"-"+g[t[r+8]]+g[t[r+9]]+"-"+g[t[r+10]]+g[t[r+11]]+g[t[r+12]]+g[t[r+13]]+g[t[r+14]]+g[t[r+15]]).toLowerCase();if(!v(e))throw TypeError("Stringified UUID is invalid");return e}(n)}var x=e([]),w=function(){var t=n(x);if(void 0===t)throw new Error("useLayer was used outside of its Provider");return t},C=function(e){var n=e.children,c=o([]),s=a([]),d=s[0],y=s[1],m=i((function(t){return y(d.filter((function(r){return r.layerUuid!==t})))}),[d]),v=i((function(t){return y(d.filter((function(r){return r.name!==t})))}),[d]),g=i((function(){return y([])}),[]),h=i((function(t,e){var n=t.component,o=t.name,a=t.orientation,i=void 0===a?"full":a,u=b(),l={name:o,layerUuid:u,orientation:i,status:1,updatedOn:Date.now(),component:r(n,{layerUuid:u})};y((function(t){return f(f([],t,!0),[l],!1)})),e&&c.current.push(e)}),[]);u((function(){c.current.forEach((function(t){return t()})),c.current=[]}),[d]);var w=l((function(){return{layers:d,createLayer:h,closeLayerByUuid:m,closeLayerByName:v,closeAllLayers:g}}),[d,h,m,v,g]),C=d.sort((function(t,r){return t.updatedOn<r.updatedOn?-1:t===r?0:1})).filter((function(t){return!!t.status}));return t.createElement(t.Fragment,null,t.createElement(x.Provider,{value:w},n,!!(null==C?void 0:C.length)&&t.createElement(p,{layers:C,closeLayerByUuid:m})))};export{C as LayersProvider,w as useLayer};
//# sourceMappingURL=index.js.map
