import e,{cloneElement as t,createContext as r,useContext as n,useRef as o,useState as a,useCallback as i,useEffect as l,useMemo as u}from"react";
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
***************************************************************************** */var c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};function f(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var x=function(r){var n=r.layers,o=r.closeLayerByUuid,a={modal:{alignItems:"center",justifyContent:"center"},default:{},bottom:{justifyContent:"flex-end"}};return e.createElement(e.Fragment,null,n.map((function(r){var n=r.layerUuid,i=r.children,l=r.orientation,u=void 0===l?"modal":l;console.log("layer",r);var f=u&&a[u]?a[u]:a.default;return e.createElement("div",{key:n,style:c(c({},f),{display:"flex",flexDirection:"column",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",backgroundColor:"transparent"})},e.createElement("div",{style:{position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",backgroundColor:"black",opacity:"0.5"},onClick:function(){return n&&o(n)}}),t(i,c(c(c({},i.props),{style:c(c({},i.props.style),{backgroundColor:"#FF0000",position:"relative"})}),r)))})))},s=r([]),p=function(){var e=n(s);if(void 0===e)throw new Error("useLayerContext was used outside of its Provider");return e},d=function(r){var n=r.children,p=o([]),d=a([]),y=d[0],m=d[1],v=i((function(e){return m(y.filter((function(t){return t.layerUuid!==e})))}),[y]),h=i((function(e){return m(y.filter((function(t){return t.name!==e})))}),[y]),g=i((function(){return m([])}),[]),b=i((function(e,r){var n,o,a=e.children,i=e.name,l=e.orientation,u=void 0===l?"full":l,c=(n=(new Date).getTime(),o="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0,"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random();return n>0?(t=(n+t)%16|0,n=Math.floor(n/16)):(t=(o+t)%16|0,o=Math.floor(o/16)),("x"===e?t:3&t|8).toString(16)}))),x={name:i,layerUuid:c,orientation:u,status:1,updatedOn:Date.now(),children:t(a,{layerUuid:c})};m((function(e){return f(f([],e,!0),[x],!1)})),r&&p.current.push(r)}),[]);l((function(){p.current.forEach((function(e){return e()})),p.current=[]}),[y]);var w=u((function(){return c(c({},y),{createLayer:b,closeLayerByUuid:v,closeLayerByName:h,closeAllLayers:g})}),[y,b,v,h,g]),E=y.sort((function(e,t){return e.updatedOn<t.updatedOn?-1:e===t?0:1})).filter((function(e){return!!e.status}));return e.createElement(e.Fragment,null,e.createElement(s.Provider,{value:w},n,!!(null==E?void 0:E.length)&&e.createElement(x,{layers:E,closeLayerByUuid:v})))};export{d as LayerContextProvider,p as useLayerContext};
//# sourceMappingURL=index.js.map
