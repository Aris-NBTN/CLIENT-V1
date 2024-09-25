import{r as c,F as T,G as K,I as Q,L as X,o as B}from"./index-Ca-ywajW.js";import{_ as U,$ as I}from"./index-DwMj5orM.js";const D=c.createContext({}),Y=e=>{const{componentCls:n}=e;return{[n]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},Z=e=>{const{componentCls:n}=e;return{[n]:{position:"relative",maxWidth:"100%",minHeight:1}}},z=(e,n)=>{const{prefixCls:a,componentCls:t,gridColumns:r}=e,l={};for(let s=r;s>=0;s--)s===0?(l[`${t}${n}-${s}`]={display:"none"},l[`${t}-push-${s}`]={insetInlineStart:"auto"},l[`${t}-pull-${s}`]={insetInlineEnd:"auto"},l[`${t}${n}-push-${s}`]={insetInlineStart:"auto"},l[`${t}${n}-pull-${s}`]={insetInlineEnd:"auto"},l[`${t}${n}-offset-${s}`]={marginInlineStart:0},l[`${t}${n}-order-${s}`]={order:0}):(l[`${t}${n}-${s}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${s/r*100}%`,maxWidth:`${s/r*100}%`}],l[`${t}${n}-push-${s}`]={insetInlineStart:`${s/r*100}%`},l[`${t}${n}-pull-${s}`]={insetInlineEnd:`${s/r*100}%`},l[`${t}${n}-offset-${s}`]={marginInlineStart:`${s/r*100}%`},l[`${t}${n}-order-${s}`]={order:s});return l[`${t}${n}-flex`]={flex:`var(--${a}${n}-flex)`},l},W=(e,n)=>z(e,n),ee=(e,n,a)=>({[`@media (min-width: ${Q(n)})`]:Object.assign({},W(e,a))}),te=()=>({}),ne=()=>({}),re=T("Grid",Y,te),se=T("Grid",e=>{const n=K(e,{gridColumns:24}),a={"-sm":n.screenSMMin,"-md":n.screenMDMin,"-lg":n.screenLGMin,"-xl":n.screenXLMin,"-xxl":n.screenXXLMin};return[Z(n),W(n,""),W(n,"-xs"),Object.keys(a).map(t=>ee(n,a[t],t)).reduce((t,r)=>Object.assign(Object.assign({},t),r),{})]},ne);var oe=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};function H(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const le=["xs","sm","md","lg","xl","xxl"],fe=c.forwardRef((e,n)=>{const{getPrefixCls:a,direction:t}=c.useContext(X),{gutter:r,wrap:l}=c.useContext(D),{prefixCls:s,span:$,order:y,offset:g,push:b,pull:h,className:E,children:M,flex:j,style:O}=e,S=oe(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),i=a("col",s),[C,R,w]=se(i),v={};let u={};le.forEach(f=>{let o={};const m=e[f];typeof m=="number"?o.span=m:typeof m=="object"&&(o=m||{}),delete S[f],u=Object.assign(Object.assign({},u),{[`${i}-${f}-${o.span}`]:o.span!==void 0,[`${i}-${f}-order-${o.order}`]:o.order||o.order===0,[`${i}-${f}-offset-${o.offset}`]:o.offset||o.offset===0,[`${i}-${f}-push-${o.push}`]:o.push||o.push===0,[`${i}-${f}-pull-${o.pull}`]:o.pull||o.pull===0,[`${i}-rtl`]:t==="rtl"}),o.flex&&(u[`${i}-${f}-flex`]=!0,v[`--${i}-${f}-flex`]=H(o.flex))});const k=B(i,{[`${i}-${$}`]:$!==void 0,[`${i}-order-${y}`]:y,[`${i}-offset-${g}`]:g,[`${i}-push-${b}`]:b,[`${i}-pull-${h}`]:h},E,u,R,w),d={};if(r&&r[0]>0){const f=r[0]/2;d.paddingLeft=f,d.paddingRight=f}return j&&(d.flex=H(j),l===!1&&!d.minWidth&&(d.minWidth=0)),C(c.createElement("div",Object.assign({},S,{style:Object.assign(Object.assign(Object.assign({},d),O),v),className:k,ref:n}),M))});var ae=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};function J(e,n){const[a,t]=c.useState(typeof e=="string"?e:""),r=()=>{if(typeof e=="string"&&t(e),typeof e=="object")for(let l=0;l<I.length;l++){const s=I[l];if(!n[s])continue;const $=e[s];if($!==void 0){t($);return}}};return c.useEffect(()=>{r()},[JSON.stringify(e),n]),a}const ue=c.forwardRef((e,n)=>{const{prefixCls:a,justify:t,align:r,className:l,style:s,children:$,gutter:y=0,wrap:g}=e,b=ae(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:h,direction:E}=c.useContext(X),[M,j]=c.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[O,S]=c.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),i=J(r,O),C=J(t,O),R=c.useRef(y),w=U();c.useEffect(()=>{const x=w.subscribe(P=>{S(P);const p=R.current||0;(!Array.isArray(p)&&typeof p=="object"||Array.isArray(p)&&(typeof p[0]=="object"||typeof p[1]=="object"))&&j(P)});return()=>w.unsubscribe(x)},[]);const v=()=>{const x=[void 0,void 0];return(Array.isArray(y)?y:[y,void 0]).forEach((p,F)=>{if(typeof p=="object")for(let L=0;L<I.length;L++){const V=I[L];if(M[V]&&p[V]!==void 0){x[F]=p[V];break}}else x[F]=p}),x},u=h("row",a),[k,d,f]=re(u),o=v(),m=B(u,{[`${u}-no-wrap`]:g===!1,[`${u}-${C}`]:C,[`${u}-${i}`]:i,[`${u}-rtl`]:E==="rtl"},l,d,f),G={},A=o[0]!=null&&o[0]>0?o[0]/-2:void 0;A&&(G.marginLeft=A,G.marginRight=A);const[_,N]=o;G.rowGap=N;const q=c.useMemo(()=>({gutter:[_,N],wrap:g}),[_,N,g]);return k(c.createElement(D.Provider,{value:q},c.createElement("div",Object.assign({},b,{className:m,style:Object.assign(Object.assign({},G),s),ref:n}),$)))});export{fe as C,ue as R};
