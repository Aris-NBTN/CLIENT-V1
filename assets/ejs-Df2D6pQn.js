import{aT as l}from"./index-CcDScCIj.js";import{r as g}from"./markup-templating-BxAVv-bL.js";function p(n,a){for(var r=0;r<a.length;r++){const e=a[r];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in n)){const o=Object.getOwnPropertyDescriptor(e,t);o&&Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s,u;function c(){if(u)return s;u=1;var n=g();s=a,a.displayName="ejs",a.aliases=["eta"];function a(r){r.register(n),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",function(t){var o=/<%(?!%)[\s\S]+?%>/g;e.languages["markup-templating"].buildPlaceholders(t,"ejs",o)}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"ejs")}),e.languages.eta=e.languages.ejs}(r)}return s}var i=c();const f=l(i),k=p({__proto__:null,default:f},[i]);export{k as e};
