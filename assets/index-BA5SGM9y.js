import{a_ as rt,r,I as me,m as ye,aQ as re,bX as it,K as lt,G as st,z as ie,ap as at,aI as ct,b3 as dt,C as $e,bh as _e,al as be,w as Le,b6 as J,ai as ut,y as De,aR as Oe,b8 as pt}from"./index-DlYMrpPW.js";import{u as ft}from"./useLocale-AUr8qwmz.js";import{T as gt,R as mt}from"./TextArea-BL_qZjFp.js";import{R as yt}from"./compact-item-DVIPdewI.js";const Me=e=>({color:e.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:focus, &:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}});var Pe=function(t){if(rt()&&window.document.documentElement){var o=Array.isArray(t)?t:[t],n=window.document.documentElement;return o.some(function(i){return i in n.style})}return!1},bt=function(t,o){if(!Pe(t))return!1;var n=document.createElement("div"),i=n.style[t];return n.style[t]=o,n.style[t]!==i};function we(e,t){return!Array.isArray(e)&&t!==void 0?bt(e,t):Pe(e)}var vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},ht=function(t,o){return r.createElement(me,ye({},t,{ref:o,icon:vt}))},Et=r.forwardRef(ht),xt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},St=function(t,o){return r.createElement(me,ye({},t,{ref:o,icon:xt}))},Ct=r.forwardRef(St),Ot={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},wt=function(t,o){return r.createElement(me,ye({},t,{ref:o,icon:Ot}))},Rt=r.forwardRef(wt),jt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const Tt={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-flex"},ge=r.forwardRef((e,t)=>{const o=l=>{const{keyCode:u}=l;u===re.ENTER&&l.preventDefault()},n=l=>{const{keyCode:u}=l,{onClick:g}=e;u===re.ENTER&&g&&g()},{style:i,noStyle:a,disabled:f,tabIndex:c=0}=e,m=jt(e,["style","noStyle","disabled","tabIndex"]);let d={};return a||(d=Object.assign({},Tt)),f&&(d.pointerEvents="none"),d=Object.assign(Object.assign({},d),i),r.createElement("div",Object.assign({role:"button",tabIndex:c,ref:t},m,{onKeyDown:o,onKeyUp:n,style:d}))}),It=(e,t,o,n)=>{const{titleMarginBottom:i,fontWeightStrong:a}=n;return{marginBottom:i,color:o,fontWeight:a,fontSize:e,lineHeight:t}},$t=e=>{const t=[1,2,3,4,5],o={};return t.forEach(n=>{o[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `]=It(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)}),o},_t=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},Me(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},Lt=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:it[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),Dt=e=>{const{componentCls:t,paddingSM:o}=e,n=o;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(n).mul(-1).equal(),marginBottom:`calc(1em - ${lt(n)})`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},Mt=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),Pt=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-ellipsis-single-line":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),kt=e=>{const{componentCls:t,titleMarginTop:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},$t(e)),{[`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]:{marginTop:o},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:o}}}),Lt(e)),_t(e)),{[`
        ${t}-expand,
        ${t}-collapse,
        ${t}-edit,
        ${t}-copy
      `]:Object.assign(Object.assign({},Me(e)),{marginInlineStart:e.marginXXS})}),Dt(e)),Mt(e)),Pt()),{"&-rtl":{direction:"rtl"}})}},Ht=()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}),ke=st("Typography",e=>[kt(e)],Ht),At=e=>{const{prefixCls:t,"aria-label":o,className:n,style:i,direction:a,maxLength:f,autoSize:c=!0,value:m,onSave:d,onCancel:l,onEnd:u,component:g,enterIcon:y=r.createElement(Rt,null)}=e,R=r.useRef(null),S=r.useRef(!1),j=r.useRef(),[H,L]=r.useState(m);r.useEffect(()=>{L(m)},[m]),r.useEffect(()=>{var h;if(!((h=R.current)===null||h===void 0)&&h.resizableTextArea){const{textArea:v}=R.current.resizableTextArea;v.focus();const{length:_}=v.value;v.setSelectionRange(_,_)}},[]);const E=h=>{let{target:v}=h;L(v.value.replace(/[\n\r]/g,""))},A=()=>{S.current=!0},C=()=>{S.current=!1},O=h=>{let{keyCode:v}=h;S.current||(j.current=v)},K=()=>{d(H.trim())},N=h=>{let{keyCode:v,ctrlKey:_,altKey:w,metaKey:M,shiftKey:F}=h;j.current===v&&!S.current&&!_&&!w&&!M&&!F&&(v===re.ENTER?(K(),u==null||u()):v===re.ESC&&l())},b=()=>{K()},z=g?`${t}-${g}`:"",[U,V,D]=ke(t),T=ie(t,`${t}-edit-content`,{[`${t}-rtl`]:a==="rtl"},n,z,V,D);return U(r.createElement("div",{className:T,style:i},r.createElement(gt,{ref:R,maxLength:f,value:H,onChange:E,onKeyDown:O,onKeyUp:N,onCompositionStart:A,onCompositionEnd:C,onBlur:b,"aria-label":o,rows:1,autoSize:c}),y!==null?at(y,{className:`${t}-edit-content-confirm`}):null))};var Nt=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||o.forEach(function(i){e.addRange(i)}),t&&t.focus()}},zt=Nt,Re={"text/plain":"Text","text/html":"Url",default:"Text"},Wt="Copy to clipboard: #{key}, Enter";function Bt(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Ut(e,t){var o,n,i,a,f,c,m=!1;t||(t={}),o=t.debug||!1;try{i=zt(),a=document.createRange(),f=document.getSelection(),c=document.createElement("span"),c.textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(l){if(l.stopPropagation(),t.format)if(l.preventDefault(),typeof l.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=Re[t.format]||Re.default;window.clipboardData.setData(u,e)}else l.clipboardData.clearData(),l.clipboardData.setData(t.format,e);t.onCopy&&(l.preventDefault(),t.onCopy(l.clipboardData))}),document.body.appendChild(c),a.selectNodeContents(c),f.addRange(a);var d=document.execCommand("copy");if(!d)throw new Error("copy command was unsuccessful");m=!0}catch(l){o&&console.error("unable to copy using execCommand: ",l),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),m=!0}catch(u){o&&console.error("unable to copy using clipboardData: ",u),o&&console.error("falling back to prompt"),n=Bt("message"in t?t.message:Wt),window.prompt(n,e)}}finally{f&&(typeof f.removeRange=="function"?f.removeRange(a):f.removeAllRanges()),c&&document.body.removeChild(c),i()}return m}var Kt=Ut;const Vt=ct(Kt);var Ft=function(e,t,o,n){function i(a){return a instanceof o?a:new o(function(f){f(a)})}return new(o||(o=Promise))(function(a,f){function c(l){try{d(n.next(l))}catch(u){f(u)}}function m(l){try{d(n.throw(l))}catch(u){f(u)}}function d(l){l.done?a(l.value):i(l.value).then(c,m)}d((n=n.apply(e,t||[])).next())})};const Xt=e=>{let{copyConfig:t,children:o}=e;const[n,i]=r.useState(!1),[a,f]=r.useState(!1),c=r.useRef(null),m=()=>{c.current&&clearTimeout(c.current)},d={};t.format&&(d.format=t.format),r.useEffect(()=>m,[]);const l=dt(u=>Ft(void 0,void 0,void 0,function*(){var g;u==null||u.preventDefault(),u==null||u.stopPropagation(),f(!0);try{const y=typeof t.text=="function"?yield t.text():t.text;Vt(y||String(o)||"",d),f(!1),i(!0),m(),c.current=setTimeout(()=>{i(!1)},3e3),(g=t.onCopy)===null||g===void 0||g.call(t,u)}catch(y){throw f(!1),y}}));return{copied:n,copyLoading:a,onClick:l}};function ce(e,t){return r.useMemo(()=>{const o=!!e;return[o,Object.assign(Object.assign({},t),o&&typeof e=="object"?e:null)]},[e])}const qt=e=>{const t=r.useRef();return r.useEffect(()=>{t.current=e}),t.current},Jt=(e,t)=>{const o=r.useRef(!1);r.useEffect(()=>{o.current?e():o.current=!0},t)};var Gt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const He=r.forwardRef((e,t)=>{const{prefixCls:o,component:n="article",className:i,rootClassName:a,setContentRef:f,children:c,direction:m,style:d}=e,l=Gt(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:u,direction:g,typography:y}=r.useContext($e),R=m??g;let S=t;f&&(S=_e(t,f));const j=u("typography",o),[H,L,E]=ke(j),A=ie(j,y==null?void 0:y.className,{[`${j}-rtl`]:R==="rtl"},i,a,L,E),C=Object.assign(Object.assign({},y==null?void 0:y.style),d);return H(r.createElement(n,Object.assign({className:A,style:C,ref:S},l),c))});function je(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}function te(e,t,o){return e===!0||e===void 0?t:e||o&&t}function Qt(e){const t=e.getBoundingClientRect(),{offsetWidth:o,offsetHeight:n}=e;let i=o,a=n;return Math.abs(o-t.width)<1&&Math.abs(n-t.height)<1&&(i=t.width,a=t.height),[i,a]}const Yt=e=>{const{prefixCls:t,copied:o,locale:n,iconOnly:i,tooltips:a,icon:f,loading:c,tabIndex:m,onCopy:d}=e,l=je(a),u=je(f),{copied:g,copy:y}=n??{},R=o?te(l[1],g):te(l[0],y),j=typeof R=="string"?R:o?g:y;return r.createElement(be,{key:"copy",title:R},r.createElement(ge,{className:ie(`${t}-copy`,{[`${t}-copy-success`]:o,[`${t}-copy-icon-only`]:i}),onClick:d,"aria-label":j,tabIndex:m},o?te(u[1],r.createElement(mt,null),!0):te(u[0],c?r.createElement(yt,null):r.createElement(Et,null),!0)))},ne=r.forwardRef((e,t)=>{let{style:o,children:n}=e;const i=r.useRef(null);return r.useImperativeHandle(t,()=>({isExceed:()=>{const a=i.current;return a.scrollHeight>a.clientHeight},getHeight:()=>i.current.clientHeight})),r.createElement("span",{"aria-hidden":!0,ref:i,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},o)},n)});function Ae(e){const t=typeof e;return t==="string"||t==="number"}function Zt(e){let t=0;return e.forEach(o=>{Ae(o)?t+=String(o).length:t+=1}),t}function Te(e,t){let o=0;const n=[];for(let i=0;i<e.length;i+=1){if(o===t)return n;const a=e[i],c=Ae(a)?String(a).length:1,m=o+c;if(m>t){const d=t-o;return n.push(String(a).slice(0,d)),n}n.push(a),o=m}return e}const de=0,ue=1,pe=2,fe=3,Ie=4,oe={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function en(e){const{enableMeasure:t,width:o,text:n,children:i,rows:a,expanded:f,miscDeps:c,onEllipsis:m}=e,d=r.useMemo(()=>Le(n),[n]),l=r.useMemo(()=>Zt(d),[n]),u=r.useMemo(()=>i(d,!1),[n]),[g,y]=r.useState(null),R=r.useRef(null),S=r.useRef(null),j=r.useRef(null),H=r.useRef(null),L=r.useRef(null),[E,A]=r.useState(!1),[C,O]=r.useState(de),[K,N]=r.useState(0),[b,z]=r.useState(null);J(()=>{O(t&&o&&l?ue:de)},[o,n,a,t,d]),J(()=>{var T,h,v,_;if(C===ue){O(pe);const w=S.current&&getComputedStyle(S.current).whiteSpace;z(w)}else if(C===pe){const w=!!(!((T=j.current)===null||T===void 0)&&T.isExceed());O(w?fe:Ie),y(w?[0,l]:null),A(w);const M=((h=j.current)===null||h===void 0?void 0:h.getHeight())||0,F=a===1?0:((v=H.current)===null||v===void 0?void 0:v.getHeight())||0,G=((_=L.current)===null||_===void 0?void 0:_.getHeight())||0,ae=F+G,Q=Math.max(M,ae);N(Q+1),m(w)}},[C]);const U=g?Math.ceil((g[0]+g[1])/2):0;J(()=>{var T;const[h,v]=g||[0,0];if(h!==v){const w=(((T=R.current)===null||T===void 0?void 0:T.getHeight())||0)>K;let M=U;v-h===1&&(M=w?h:v),y(w?[h,M]:[M,v])}},[g,U]);const V=r.useMemo(()=>{if(C!==fe||!g||g[0]!==g[1]){const T=i(d,!1);return C!==Ie&&C!==de?r.createElement("span",{style:Object.assign(Object.assign({},oe),{WebkitLineClamp:a})},T):T}return i(f?d:Te(d,g[0]),E)},[f,C,g,d].concat(ut(c))),D={width:o,margin:0,padding:0,whiteSpace:b==="nowrap"?"normal":"inherit"};return r.createElement(r.Fragment,null,V,C===pe&&r.createElement(r.Fragment,null,r.createElement(ne,{style:Object.assign(Object.assign(Object.assign({},D),oe),{WebkitLineClamp:a}),ref:j},u),r.createElement(ne,{style:Object.assign(Object.assign(Object.assign({},D),oe),{WebkitLineClamp:a-1}),ref:H},u),r.createElement(ne,{style:Object.assign(Object.assign(Object.assign({},D),oe),{WebkitLineClamp:1}),ref:L},i([],!0))),C===fe&&g&&g[0]!==g[1]&&r.createElement(ne,{style:Object.assign(Object.assign({},D),{top:400}),ref:R},i(Te(d,U),!0)),C===ue&&r.createElement("span",{style:{whiteSpace:"inherit"},ref:S}))}const tn=e=>{let{enableEllipsis:t,isEllipsis:o,children:n,tooltipProps:i}=e;return!(i!=null&&i.title)||!t?n:r.createElement(be,Object.assign({open:o?void 0:!1},i),n)};var nn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};function on(e,t){let{mark:o,code:n,underline:i,delete:a,strong:f,keyboard:c,italic:m}=e,d=t;function l(u,g){g&&(d=r.createElement(u,{},d))}return l("strong",f),l("u",i),l("del",a),l("code",n),l("mark",o),l("kbd",c),l("i",m),d}const rn="...",le=r.forwardRef((e,t)=>{var o,n,i;const{prefixCls:a,className:f,style:c,type:m,disabled:d,children:l,ellipsis:u,editable:g,copyable:y,component:R,title:S}=e,j=nn(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:H,direction:L}=r.useContext($e),[E]=ft("Text"),A=r.useRef(null),C=r.useRef(null),O=H("typography",a),K=De(j,["mark","code","delete","underline","strong","keyboard","italic"]),[N,b]=ce(g),[z,U]=Oe(!1,{value:b.editing}),{triggerType:V=["icon"]}=b,D=s=>{var p;s&&((p=b.onStart)===null||p===void 0||p.call(b)),U(s)},T=qt(z);Jt(()=>{var s;!z&&T&&((s=C.current)===null||s===void 0||s.focus())},[z]);const h=s=>{s==null||s.preventDefault(),D(!0)},v=s=>{var p;(p=b.onChange)===null||p===void 0||p.call(b,s),D(!1)},_=()=>{var s;(s=b.onCancel)===null||s===void 0||s.call(b),D(!1)},[w,M]=ce(y),{copied:F,copyLoading:G,onClick:ae}=Xt({copyConfig:M,children:l}),[Q,Ne]=r.useState(!1),[ve,ze]=r.useState(!1),[he,We]=r.useState(!1),[Ee,Be]=r.useState(!1),[Ue,Ke]=r.useState(!0),[W,x]=ce(u,{expandable:!1,symbol:s=>s?E==null?void 0:E.collapse:E==null?void 0:E.expand}),[P,Ve]=Oe(x.defaultExpanded||!1,{value:x.expanded}),I=W&&(!P||x.expandable==="collapsible"),{rows:q=1}=x,Y=r.useMemo(()=>I&&(x.suffix!==void 0||x.onEllipsis||x.expandable||N||w),[I,x,N,w]);J(()=>{W&&!Y&&(Ne(we("webkitLineClamp")),ze(we("textOverflow")))},[Y,W]);const[k,Fe]=r.useState(I),xe=r.useMemo(()=>Y?!1:q===1?ve:Q,[Y,ve,Q]);J(()=>{Fe(xe&&I)},[xe,I]);const Se=I&&(k?Ee:he),Xe=I&&q===1&&k,Z=I&&q>1&&k,qe=(s,p)=>{var $;Ve(p.expanded),($=x.onExpand)===null||$===void 0||$.call(x,s,p)},[Ce,Je]=r.useState(0),Ge=s=>{let{offsetWidth:p}=s;Je(p)},Qe=s=>{var p;We(s),he!==s&&((p=x.onEllipsis)===null||p===void 0||p.call(x,s))};r.useEffect(()=>{const s=A.current;if(W&&k&&s){const[p,$]=Qt(s),X=Z?$<s.scrollHeight:p<s.scrollWidth;Ee!==X&&Be(X)}},[W,k,l,Z,Ue,Ce]),r.useEffect(()=>{const s=A.current;if(typeof IntersectionObserver>"u"||!s||!k||!I)return;const p=new IntersectionObserver(()=>{Ke(!!s.offsetParent)});return p.observe(s),()=>{p.disconnect()}},[k,I]);let B={};x.tooltip===!0?B={title:(o=b.text)!==null&&o!==void 0?o:l}:r.isValidElement(x.tooltip)?B={title:x.tooltip}:typeof x.tooltip=="object"?B=Object.assign({title:(n=b.text)!==null&&n!==void 0?n:l},x.tooltip):B={title:x.tooltip};const ee=r.useMemo(()=>{const s=p=>["string","number"].includes(typeof p);if(!(!W||k)){if(s(b.text))return b.text;if(s(l))return l;if(s(S))return S;if(s(B.title))return B.title}},[W,k,S,B.title,Se]);if(z)return r.createElement(At,{value:(i=b.text)!==null&&i!==void 0?i:typeof l=="string"?l:"",onSave:v,onCancel:_,onEnd:b.onEnd,prefixCls:O,className:f,style:c,direction:L,component:R,maxLength:b.maxLength,autoSize:b.autoSize,enterIcon:b.enterIcon});const Ye=()=>{const{expandable:s,symbol:p}=x;return!s||P&&s!=="collapsible"?null:r.createElement(ge,{key:"expand",className:`${O}-${P?"collapse":"expand"}`,onClick:$=>qe($,{expanded:!P}),"aria-label":P?E.collapse:E==null?void 0:E.expand},typeof p=="function"?p(P):p)},Ze=()=>{if(!N)return;const{icon:s,tooltip:p,tabIndex:$}=b,X=Le(p)[0]||(E==null?void 0:E.edit),ot=typeof X=="string"?X:"";return V.includes("icon")?r.createElement(be,{key:"edit",title:p===!1?"":X},r.createElement(ge,{ref:C,className:`${O}-edit`,onClick:h,"aria-label":ot,tabIndex:$},s||r.createElement(Ct,{role:"button"}))):null},et=()=>w?r.createElement(Yt,Object.assign({key:"copy"},M,{prefixCls:O,copied:F,locale:E,onCopy:ae,loading:G,iconOnly:l==null})):null,tt=s=>[s&&Ye(),Ze(),et()],nt=s=>[s&&!P&&r.createElement("span",{"aria-hidden":!0,key:"ellipsis"},rn),x.suffix,tt(s)];return r.createElement(pt,{onResize:Ge,disabled:!I},s=>r.createElement(tn,{tooltipProps:B,enableEllipsis:I,isEllipsis:Se},r.createElement(He,Object.assign({className:ie({[`${O}-${m}`]:m,[`${O}-disabled`]:d,[`${O}-ellipsis`]:W,[`${O}-ellipsis-single-line`]:Xe,[`${O}-ellipsis-multiple-line`]:Z},f),prefixCls:a,style:Object.assign(Object.assign({},c),{WebkitLineClamp:Z?q:void 0}),component:R,ref:_e(s,A,t),direction:L,onClick:V.includes("text")?h:void 0,"aria-label":ee==null?void 0:ee.toString(),title:S},K),r.createElement(en,{enableMeasure:I&&!k,text:l,rows:q,width:Ce,onEllipsis:Qe,expanded:P,miscDeps:[F,P,G,N,w]},(p,$)=>on(e,r.createElement(r.Fragment,null,p.length>0&&$&&!P&&ee?r.createElement("span",{key:"show-content","aria-hidden":!0},p):p,nt($)))))))});var ln=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const sn=r.forwardRef((e,t)=>{var{ellipsis:o,rel:n}=e,i=ln(e,["ellipsis","rel"]);const a=Object.assign(Object.assign({},i),{rel:n===void 0&&i.target==="_blank"?"noopener noreferrer":n});return delete a.navigate,r.createElement(le,Object.assign({},a,{ref:t,ellipsis:!!o,component:"a"}))}),an=r.forwardRef((e,t)=>r.createElement(le,Object.assign({ref:t},e,{component:"div"})));var cn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const dn=(e,t)=>{var{ellipsis:o}=e,n=cn(e,["ellipsis"]);const i=r.useMemo(()=>o&&typeof o=="object"?De(o,["expandable","rows"]):o,[o]);return r.createElement(le,Object.assign({ref:t},n,{ellipsis:i,component:"span"}))},un=r.forwardRef(dn);var pn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const fn=[1,2,3,4,5],gn=r.forwardRef((e,t)=>{const{level:o=1}=e,n=pn(e,["level"]);let i;return fn.includes(o)?i=`h${o}`:i="h1",r.createElement(le,Object.assign({ref:t},n,{component:i}))}),se=He;se.Text=un;se.Link=sn;se.Title=gn;se.Paragraph=an;export{se as T,we as i,Me as o};
