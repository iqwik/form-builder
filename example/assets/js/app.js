!function(e){function t(t){for(var r,l,i=t[0],u=t[1],c=t[2],s=0,d=[];s<i.length;s++)l=i[s],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(f&&f(t);d.length;)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={0:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=self.webpackJsonp=self.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var f=u;o.push([383,1]),n()}({32:function(e,t,n){e.exports={Config:"ConfigPage__Config__MfpUzW",innerContentTop:"ConfigPage__innerContentTop__V3-K_K",innerContentBottom:"ConfigPage__innerContentBottom__2LCJME"}},33:function(e,t,n){e.exports={ResultPage:"ResultPage__ResultPage__2DmH_K",Fields:"ResultPage__Fields__29r0Qq",Buttons:"ResultPage__Buttons__1CBL65"}},382:function(e,t,n){},383:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),l=n.n(o),i="Config",u="Result",c='{\n  "items": [\n      { "type": "number", "label": "Count", "placeholder": "choose or enter quantity...", "value": 12 },\n      { "type": "date", "label": "Date", "value": "2022-02-24" },\n      { "type": "text", "label": "InputText", "placeholder": "some text here..." },\n      { "type": "textarea", "label": "TextArea", "placeholder": "enter your message..." },\n      { "type": "checkbox", "label": "Checkbox1", "value": "checkbox 1" },\n      { "type": "checkbox", "label": "Checkbox2", "value": "checkbox 2" },\n      { "type": "radio", "name": "radio[]", "label": "Radio 1", "value": "Radio 1" },\n      { "type": "radio", "name": "radio[]", "label": "Radio 2", "value": "Radio 2", "checked": 1 },\n      { "type": "radio", "name": "radio[]", "label": "Radio 3", "value": "Radio 3" }\n  ],\n  "title": "Form Builder",\n  "buttons": [\n      { "type": "button", "label": "Cancel", "variant": "secondary" },\n      { "type": "button", "label": "Save", "variant": "success" }\n  ]\n}',f=function(e){var t=e.label,n=e.children;return a.a.createElement("label",null,a.a.createElement("span",null,t),n)},s="circle",d="triangle",p="line",y={generateParticles:function(e){for(var t=e.width,n=e.height,r=e.maxParticles,a=[s,s,d,d,p],o=[[238,96,169],[68,213,217],[245,187,152],[144,148,188],[235,234,77]],l=[[4,0,4,4],[2,2,0,4],[0,4,2,2],[0,4,4,4]],i=[],u=0;u<r;u++)i.push({x:Math.random()*t,y:Math.random()*n,r:4*Math.random()+1,d:Math.random()*r,l:Math.floor(65*Math.random()-30),a:l[Math.floor(Math.random()*l.length)],c:o[Math.floor(Math.random()*o.length)],t:a[Math.floor(Math.random()*a.length)]});return i},update:function(e){for(var t=e.width,n=void 0===t?0:t,r=e.height,a=void 0===r?0:r,o=e.particles,l=void 0===o?[]:o,i=e.maxParticles,u=void 0===i?0:i,c=0;c<u;c++){var f=l[c];f.y+=Math.cos(f.d)+1+f.r/2,f.x+=2*Math.sin(0),(f.x>n+5||f.x<-5||f.y>a)&&(l[c]={x:Math.random()*n,y:-10,r:f.r,d:f.d,l:f.l,a:f.a,c:f.c,t:f.t})}},draw:function(e){var t=e.width,n=void 0===t?0:t,r=e.height,a=void 0===r?0:r,o=e.maxParticles,l=void 0===o?0:o,i=e.particles,u=void 0===i?[]:i,c=e.canvasContext,f=void 0===c?void 0:c;f.clearRect(0,0,n,a);for(var y=0;y<l;y++){var m=u[y],b=m.r<=3?.4:.8,h="rgba(".concat(m.c,", ").concat(b,")");m.t===s?(f.fillStyle=h,f.beginPath(),f.moveTo(m.x,m.y),f.arc(m.x,m.y,m.r,0,2*Math.PI,!0),f.fill()):m.t===d?(f.fillStyle=h,f.beginPath(),f.moveTo(m.x,m.y),f.lineTo(m.x+m.r*m.a[0],m.y+m.r*m.a[1]),f.lineTo(m.x+m.r*m.a[2],m.y+m.r*m.a[3]),f.closePath(),f.fill()):m.t===p&&(f.strokeStyle=h,f.beginPath(),f.moveTo(m.x,m.y),f.lineTo(m.x+m.l,m.y+5*m.r),f.lineWidth=2,f.stroke())}this.update({width:n,height:a,particles:u,maxParticles:l})}},m=function(e){var t,n,r=e.visible,o=a.a.useRef(null),l=a.a.useMemo((function(){return y.generateParticles({width:window.innerWidth,height:window.innerHeight,maxParticles:150})}),[null===(t=window)||void 0===t?void 0:t.innerWidth,null===(n=window)||void 0===n?void 0:n.innerHeight,150]);return a.a.useEffect((function(){if(r){var e=o.current,t=e.getContext("2d"),n=window.innerWidth,a=window.innerHeight;e.width=n,e.height=a;var i=setInterval((function(){y.draw({width:n,height:a,maxParticles:150,particles:l,canvasContext:t})}),23);return function(){clearInterval(i)}}}),[r]),a.a.createElement("canvas",{ref:o,style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:-1,display:r?"block":"none"}})};function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v={currentTab:"",setCurrentTab:function(){},jsonConfig:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?'{\n  "items": [],\n  "title": "",\n  "buttons": []\n}':c}(),setJsonConfig:function(){},shouldRefresh:!1,setShouldRefresh:function(){},visibleConfetti:!1,setVisibleConfetti:function(){}},g=a.a.createContext(v),x=function(e){var t=e.children,n=b(a.a.useState(i),2),r=n[0],o=n[1],l=b(a.a.useState(v.jsonConfig),2),c=l[0],f=l[1],s=b(a.a.useState(v.shouldRefresh),2),d=s[0],p=s[1],y=b(a.a.useState(!1),2),h=y[0],x=y[1];return a.a.useEffect((function(){x(r===u)}),[r]),a.a.createElement(g.Provider,{value:{currentTab:r,setCurrentTab:o,jsonConfig:c,setJsonConfig:f,shouldRefresh:d,setShouldRefresh:p,visibleConfetti:h,setVisibleConfetti:x}},a.a.createElement(a.a.Fragment,null,t,a.a.createElement(m,{visible:h})))},S=n(396),C=n(395),O=n(23),w=n(76);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _,M,A=function(){var e=Object(r.useContext)(g),t=e.setCurrentTab,n=e.jsonConfig,a=e.setJsonConfig,o=e.setShouldRefresh,l=j(Object(r.useState)("object"===E(n)?JSON.stringify(n):n),2),i=l[0],c=l[1],f=Object(r.useMemo)((function(){return!function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(i)}),[i]);return{value:i,onChangeValue:function(e){var t=e.target;c(t.value)},handleApply:function(){f||(c(i),a(i),t(u),o(!0))},notValidJSON:f}},T=n(32),R=n.n(T),k=function(){var e=A(),t=e.value,n=e.onChangeValue,r=e.handleApply,o=e.notValidJSON;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:R.a.Config},a.a.createElement("div",{className:R.a.innerContentTop},a.a.createElement(w.a,{value:t,language:"json",placeholder:"Please enter JSON formatted code...",onChange:n,padding:15,style:{backgroundColor:"#f5f5f5",border:"1px solid ".concat(o?"red":"transparent"),fontFamily:"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",fontSize:15,height:"70%"}}),o&&a.a.createElement("small",{style:{color:"red"}},"JSON code not valid. Please check your code")),a.a.createElement("div",{className:R.a.innerContentBottom},a.a.createElement(O.a,{variant:"outline-secondary",onClick:r,disabled:o},"Apply"))))};function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N="button",J="checkbox",B="date",F="number",V="radio",D="text",H="textarea",K=(I(_={},N,!0),I(_,J,!0),I(_,B,!0),I(_,F,!0),I(_,V,!0),I(_,D,!0),I(_,H,!0),_),U=(I(M={},J,!0),I(M,B,!0),I(M,F,!0),I(M,V,!0),I(M,D,!0),I(M,H,!0),M),W=I({},N,!0);function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=n(33),L=n.n(z),G=[{title:i,component:k},{title:u,component:function(){var e=function(){var e=a.a.useContext(g),t=e.jsonConfig,n=e.shouldRefresh,r=e.setShouldRefresh,o=$(a.a.useState({items:[]}),2),l=o[0],i=o[1];a.a.useEffect((function(){n&&(i("string"==typeof t?JSON.parse(t):t),r(!1))}),[t,n]);var u=l.items,c=void 0===u?[]:u,f=l.title,s=void 0===f?null:f,d=l.buttons,p=void 0===d?[]:d,y=function(e,t){var n=[];return Array.isArray(e)&&null!=e&&e.length&&e.forEach((function(e,r){null!=e&&e.type&&null!=t&&t[null==e?void 0:e.type]&&n.push(a.a.createElement("li",{key:"".concat(r,"-").concat(null==e?void 0:e.type)},a.a.createElement(ue,e)))})),n},m=a.a.useMemo((function(){return y(c,U)}),[null==l?void 0:l.items,n]),b=a.a.useMemo((function(){return y(p,W)}),[null==l?void 0:l.buttons,n]);return{title:s,renderFields:a.a.useCallback((function(e){return a.a.createElement("ul",{className:e},m)}),[m]),renderButtons:a.a.useCallback((function(e){return a.a.createElement("ul",{className:e},b)}),[b])}}(),t=e.title,n=e.renderFields,r=e.renderButtons;return a.a.createElement("div",{className:L.a.ResultPage},a.a.createElement("h2",{style:{textAlign:"center"}},t||"Result"),n(L.a.Fields),r(L.a.Buttons))}}],Q=n(51),X=n.n(Q),Y=function(){var e=a.a.useContext(g),t=e.currentTab,n=e.setCurrentTab,r=a.a.useMemo((function(){return G.map((function(e,t){var n=e.title,r=e.component;return a.a.createElement(S.a,{className:X.a.tabContent,eventKey:n,key:"".concat(t,"-").concat(n),title:n},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.a.createElement(e,t)}(r))}))}),[G]);return a.a.createElement("div",{className:X.a.Tabs},a.a.createElement(C.a,{activeKey:t,id:"controlled-tab-example",onSelect:n},r))};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){te(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ae=["type","label"];function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ie=function(e){var t=e.type,n=e.label,r=le(e,ae),o=function(e){var t=e.type,n=e.props,r=a.a.useContext(g).shouldRefresh,o=ne(a.a.useState(""),2),l=o[0],i=o[1];return a.a.useEffect((function(){r&&i((null==n?void 0:n.value)||"")}),[r]),a.a.useEffect((function(){null!=n&&n.value?i(n.value):null!=n&&n.value||!l||i("")}),[null==n?void 0:n.value]),{innerProps:ee(ee({},n),{},{type:t,value:l,onChange:function(e){i(e.target.value)}})}}({type:t,props:r}).innerProps;if(null==K||!K[t])return a.a.createElement(a.a.Fragment,null);if(t===H)return n?a.a.createElement(f,{label:n},a.a.createElement("textarea",o)):a.a.createElement("textarea",o);if(t===N){return a.a.createElement(O.a,oe({type:t,onClick:function(e){console.log(e)}},r),n||"Button")}return n?a.a.createElement(f,{label:n},a.a.createElement("input",o)):a.a.createElement("input",o)},ue=a.a.memo(ie),ce=(n(382),function(){return a.a.createElement(x,null,a.a.createElement("div",{className:"wrapper"},a.a.createElement("p",null,"←  ",a.a.createElement("a",{href:"https://github.com/iqwik/form-builder"},"back to repo")),a.a.createElement(Y,null)))}),fe=a.a.memo(ce);l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(fe,null)),document.getElementById("root"))},51:function(e,t,n){e.exports={Tabs:"Tabs__Tabs__3dGyy3",tabContent:"Tabs__tabContent__1bH9pb"}}});