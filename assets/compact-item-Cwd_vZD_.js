import{r,a0 as m,e as u}from"./index-Cc-1vpYl.js";var l={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},$=function(t,a){return r.createElement(m,u({},t,{ref:a,icon:l}))},E=r.forwardRef($);function g(e,t,a){const{focusElCls:n,focus:o,borderElCls:s}=a,i=s?"> *":"",c=["hover",o?"focus":null,"active"].filter(Boolean).map(d=>`&:${d} ${i}`).join(",");return{[`&-item:not(${t}-last-item)`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal()},"&-item":Object.assign(Object.assign({[c]:{zIndex:2}},n?{[`&${n}`]:{zIndex:2}}:{}),{[`&[disabled] ${i}`]:{zIndex:0}})}}function f(e,t,a){const{borderElCls:n}=a,o=n?`> ${n}`:"";return{[`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]:{borderRadius:0},[`&-item:not(${t}-last-item)${t}-first-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${t}-first-item)${t}-last-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function h(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:a}=e,n=`${a}-compact`;return{[n]:Object.assign(Object.assign({},g(e,n,t)),f(a,n,t))}}export{E as R,h as g};
