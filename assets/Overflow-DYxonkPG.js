import{at as E,cB as Qe,r as n,m as W,n as _,o as fe,s as b,cd as Ce,E as qe,v as g,x as Je,w as Ze,L as et,cc as tt}from"./index-CcDScCIj.js";const rt=new E("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),nt=new E("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),at=new E("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),it=new E("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),st=new E("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),ot=new E("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),ft=new E("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),lt=new E("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),ct={"slide-up":{inKeyframes:rt,outKeyframes:nt},"slide-down":{inKeyframes:at,outKeyframes:it},"slide-left":{inKeyframes:st,outKeyframes:ot},"slide-right":{inKeyframes:ft,outKeyframes:lt}},_t=(e,s)=>{const{antCls:l}=e,i=`${l}-${s}`,{inKeyframes:f,outKeyframes:a}=ct[s];return[Qe(i,f,a,e.motionDurationMid),{[`
      ${i}-enter,
      ${i}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${i}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};var ut=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],x=void 0;function dt(e,s){var l=e.prefixCls,i=e.invalidate,f=e.item,a=e.renderItem,c=e.responsive,S=e.responsiveDisabled,d=e.registerSize,C=e.itemKey,I=e.className,H=e.style,Q=e.children,q=e.display,m=e.order,U=e.component,K=U===void 0?"div":U,D=W(e,ut),v=c&&!q;function X(p){d(C,p)}n.useEffect(function(){return function(){X(null)}},[]);var J=a&&f!==x?a(f):Q,N;i||(N={opacity:v?0:1,height:v?0:x,overflowY:v?"hidden":x,order:c?m:x,pointerEvents:v?"none":x,position:v?"absolute":x});var A={};v&&(A["aria-hidden"]=!0);var R=n.createElement(K,_({className:fe(!i&&l,I),style:b(b({},N),H)},A,D,{ref:s}),J);return c&&(R=n.createElement(Ce,{onResize:function(Z){var Y=Z.offsetWidth;X(Y)},disabled:S},R)),R}var $=n.forwardRef(dt);$.displayName="Item";function mt(e){if(typeof MessageChannel>"u")qe(e);else{var s=new MessageChannel;s.port1.onmessage=function(){return e()},s.port2.postMessage(void 0)}}function vt(){var e=n.useRef(null),s=function(i){e.current||(e.current=[],mt(function(){Ze.unstable_batchedUpdates(function(){e.current.forEach(function(f){f()}),e.current=null})})),e.current.push(i)};return s}function P(e,s){var l=n.useState(s),i=g(l,2),f=i[0],a=i[1],c=Je(function(S){e(function(){a(S)})});return[f,c]}var B=et.createContext(null),yt=["component"],gt=["className"],St=["className"],pt=function(s,l){var i=n.useContext(B);if(!i){var f=s.component,a=f===void 0?"div":f,c=W(s,yt);return n.createElement(a,_({},c,{ref:l}))}var S=i.className,d=W(i,gt),C=s.className,I=W(s,St);return n.createElement(B.Provider,{value:null},n.createElement($,_({ref:l,className:fe(S,C)},d,I)))},Ie=n.forwardRef(pt);Ie.displayName="RawItem";var Et=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],Ne="responsive",Oe="invalidate";function Rt(e){return"+ ".concat(e.length," ...")}function ht(e,s){var l=e.prefixCls,i=l===void 0?"rc-overflow":l,f=e.data,a=f===void 0?[]:f,c=e.renderItem,S=e.renderRawItem,d=e.itemKey,C=e.itemWidth,I=C===void 0?10:C,H=e.ssr,Q=e.style,q=e.className,m=e.maxCount,U=e.renderRest,K=e.renderRawRest,D=e.suffix,v=e.component,X=v===void 0?"div":v,J=e.itemComponent,N=e.onVisibleChange,A=W(e,Et),R=H==="full",p=vt(),Z=P(p,null),Y=g(Z,2),L=Y[0],xe=Y[1],h=L||0,be=P(p,new Map),le=g(be,2),ce=le[0],Ke=le[1],De=P(p,0),ue=g(De,2),ze=ue[0],Me=ue[1],Pe=P(p,0),de=g(Pe,2),F=de[0],We=de[1],$e=P(p,0),me=g($e,2),T=me[0],Ue=me[1],Xe=n.useState(null),ve=g(Xe,2),ee=ve[0],ye=ve[1],Ae=n.useState(null),ge=g(Ae,2),V=ge[0],Ye=ge[1],O=n.useMemo(function(){return V===null&&R?Number.MAX_SAFE_INTEGER:V||0},[V,L]),Le=n.useState(!1),Se=g(Le,2),Fe=Se[0],Te=Se[1],te="".concat(i,"-item"),pe=Math.max(ze,F),re=m===Ne,y=a.length&&re,Ee=m===Oe,Ve=y||typeof m=="number"&&a.length>m,w=n.useMemo(function(){var t=a;return y?L===null&&R?t=a:t=a.slice(0,Math.min(a.length,h/I)):typeof m=="number"&&(t=a.slice(0,m)),t},[a,I,L,m,y]),ne=n.useMemo(function(){return y?a.slice(O+1):a.slice(w.length)},[a,w,y,O]),k=n.useCallback(function(t,r){var o;return typeof d=="function"?d(t):(o=d&&(t==null?void 0:t[d]))!==null&&o!==void 0?o:r},[d]),ke=n.useCallback(c||function(t){return t},[c]);function j(t,r,o){V===t&&(r===void 0||r===ee)||(Ye(t),o||(Te(t<a.length-1),N==null||N(t)),r!==void 0&&ye(r))}function je(t,r){xe(r.clientWidth)}function Re(t,r){Ke(function(o){var u=new Map(o);return r===null?u.delete(t):u.set(t,r),u})}function Be(t,r){We(r),Me(F)}function Ge(t,r){Ue(r)}function ae(t){return ce.get(k(w[t],t))}tt(function(){if(h&&typeof pe=="number"&&w){var t=T,r=w.length,o=r-1;if(!r){j(0,null);return}for(var u=0;u<r;u+=1){var M=ae(u);if(R&&(M=M||0),M===void 0){j(u-1,void 0,!0);break}if(t+=M,o===0&&t<=h||u===o-1&&t+ae(o)<=h){j(o,null);break}else if(t+pe>h){j(u-1,t-M-T+F);break}}D&&ae(0)+T>h&&ye(null)}},[h,ce,F,T,k,w]);var he=Fe&&!!ne.length,we={};ee!==null&&y&&(we={position:"absolute",left:ee,top:0});var z={prefixCls:te,responsive:y,component:J,invalidate:Ee},He=S?function(t,r){var o=k(t,r);return n.createElement(B.Provider,{key:o,value:b(b({},z),{},{order:r,item:t,itemKey:o,registerSize:Re,display:r<=O})},S(t,r))}:function(t,r){var o=k(t,r);return n.createElement($,_({},z,{order:r,key:o,item:t,renderItem:ke,itemKey:o,registerSize:Re,display:r<=O}))},ie,_e={order:he?O:Number.MAX_SAFE_INTEGER,className:"".concat(te,"-rest"),registerSize:Be,display:he};if(K)K&&(ie=n.createElement(B.Provider,{value:b(b({},z),_e)},K(ne)));else{var se=U||Rt;ie=n.createElement($,_({},z,_e),typeof se=="function"?se(ne):se)}var oe=n.createElement(X,_({className:fe(!Ee&&i,q),style:Q,ref:s},A),w.map(He),Ve?ie:null,D&&n.createElement($,_({},z,{responsive:re,responsiveDisabled:!y,order:O,className:"".concat(te,"-suffix"),registerSize:Ge,display:!0,style:we}),D));return re&&(oe=n.createElement(Ce,{onResize:je,disabled:!y},oe)),oe}var G=n.forwardRef(ht);G.displayName="Overflow";G.Item=Ie;G.RESPONSIVE=Ne;G.INVALIDATE=Oe;export{G as F,at as a,nt as b,it as c,_t as i,rt as s};
