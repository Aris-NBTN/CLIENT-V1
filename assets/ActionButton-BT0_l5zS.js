import{r as i,bT as x}from"./index-DlI1B2Q-.js";import{B as y,o as E}from"./TextArea-DnM4TqAe.js";function a(r){return!!(r!=null&&r.then)}const T=r=>{const{type:d,children:m,prefixCls:p,buttonProps:v,close:u,autoFocus:g,emitEvent:b,isSilent:l,quitOnNullishReturnValue:h,actionFn:o}=r,n=i.useRef(!1),f=i.useRef(null),[C,c]=x(!1),s=function(){u==null||u.apply(void 0,arguments)};i.useEffect(()=>{let t=null;return g&&(t=setTimeout(()=>{var e;(e=f.current)===null||e===void 0||e.focus()})),()=>{t&&clearTimeout(t)}},[]);const R=t=>{a(t)&&(c(!0),t.then(function(){c(!1,!0),s.apply(void 0,arguments),n.current=!1},e=>{if(c(!1,!0),n.current=!1,!(l!=null&&l()))return Promise.reject(e)}))},k=t=>{if(n.current)return;if(n.current=!0,!o){s();return}let e;if(b){if(e=o(t),h&&!a(e)){n.current=!1,s(t);return}}else if(o.length)e=o(u),n.current=!1;else if(e=o(),!a(e)){s();return}R(e)};return i.createElement(y,Object.assign({},E(d),{onClick:k,loading:C,prefixCls:p},v,{ref:f}),m)};export{T as A};
