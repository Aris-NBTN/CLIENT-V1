import{r as l,G as Ue,bD as _e,J as Te,K as Z,H as Qe,bE as be,a8 as ye,bF as Ie,ai as X,bA as Je,z as ne,bG as Ze,bH as et,bI as tt,aW as nt,C as Ce,aV as rt,bJ as ot,bK as lt,bL as at,bM as it,bN as Le,bO as re,bP as st,w as ct,aU as ue,b4 as Ee,bh as ut,bk as dt,I as mt,m as ft,al as gt,bw as pt,R as ht,O as bt,M as yt,b7 as Ct,b6 as vt,y as $t,bQ as We,bR as xt,bS as wt,bT as St,bU as It,bq as Et,ap as Ft,ab as Ot,bV as Mt,bW as Nt}from"./index-DlYMrpPW.js";import{g as Pt}from"./collapse-BbEVqHco.js";import{C as ze,R as jt}from"./row-BjQvrOOl.js";import{u as Rt}from"./useLocale-AUr8qwmz.js";import{R as Vt}from"./compact-item-DVIPdewI.js";const Fe=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Oe=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",pe=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return Oe(n.overflowY,t)||Oe(n.overflowX,t)||(r=>{const o=(a=>{if(!a.ownerDocument||!a.ownerDocument.defaultView)return null;try{return a.ownerDocument.defaultView.frameElement}catch{return null}})(r);return!!o&&(o.clientHeight<r.scrollHeight||o.clientWidth<r.scrollWidth)})(e)}return!1},ce=(e,t,n,r,o,a,i,c)=>a<e&&i>t||a>e&&i<t?0:a<=e&&c<=n||i>=t&&c>=n?a-e-r:i>t&&c<n||a<e&&c>n?i-t+o:0,_t=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},Me=(e,t)=>{var n,r,o,a;if(typeof document>"u")return[];const{scrollMode:i,block:c,inline:u,boundary:f,skipOverflowHiddenElements:y}=t,g=typeof f=="function"?f:H=>H!==f;if(!Fe(e))throw new TypeError("Invalid target");const x=document.scrollingElement||document.documentElement,$=[];let h=e;for(;Fe(h)&&g(h);){if(h=_t(h),h===x){$.push(h);break}h!=null&&h===document.body&&pe(h)&&!pe(document.documentElement)||h!=null&&pe(h,y)&&$.push(h)}const w=(r=(n=window.visualViewport)==null?void 0:n.width)!=null?r:innerWidth,N=(a=(o=window.visualViewport)==null?void 0:o.height)!=null?a:innerHeight,{scrollX:C,scrollY:S}=window,{height:s,width:p,top:b,right:I,bottom:j,left:E}=e.getBoundingClientRect(),{top:R,right:L,bottom:T,left:K}=(H=>{const d=window.getComputedStyle(H);return{top:parseFloat(d.scrollMarginTop)||0,right:parseFloat(d.scrollMarginRight)||0,bottom:parseFloat(d.scrollMarginBottom)||0,left:parseFloat(d.scrollMarginLeft)||0}})(e);let F=c==="start"||c==="nearest"?b-R:c==="end"?j+T:b+s/2-R+T,O=u==="center"?E+p/2-K+L:u==="end"?I+L:E-K;const V=[];for(let H=0;H<$.length;H++){const d=$[H],{height:W,width:z,top:Y,right:q,bottom:D,left:k}=d.getBoundingClientRect();if(i==="if-needed"&&b>=0&&E>=0&&j<=N&&I<=w&&b>=Y&&j<=D&&E>=k&&I<=q)return V;const ee=getComputedStyle(d),U=parseInt(ee.borderLeftWidth,10),A=parseInt(ee.borderTopWidth,10),m=parseInt(ee.borderRightWidth,10),M=parseInt(ee.borderBottomWidth,10);let v=0,_=0;const B="offsetWidth"in d?d.offsetWidth-d.clientWidth-U-m:0,Q="offsetHeight"in d?d.offsetHeight-d.clientHeight-A-M:0,oe="offsetWidth"in d?d.offsetWidth===0?0:z/d.offsetWidth:0,te="offsetHeight"in d?d.offsetHeight===0?0:W/d.offsetHeight:0;if(x===d)v=c==="start"?F:c==="end"?F-N:c==="nearest"?ce(S,S+N,N,A,M,S+F,S+F+s,s):F-N/2,_=u==="start"?O:u==="center"?O-w/2:u==="end"?O-w:ce(C,C+w,w,U,m,C+O,C+O+p,p),v=Math.max(0,v+S),_=Math.max(0,_+C);else{v=c==="start"?F-Y-A:c==="end"?F-D+M+Q:c==="nearest"?ce(Y,D,W,A,M+Q,F,F+s,s):F-(Y+W/2)+Q/2,_=u==="start"?O-k-U:u==="center"?O-(k+z/2)+B/2:u==="end"?O-q+m+B:ce(k,q,z,U,m+B,O,O+p,p);const{scrollLeft:P,scrollTop:J}=d;v=te===0?0:Math.max(0,Math.min(J+v/te,d.scrollHeight-W/te+Q)),_=oe===0?0:Math.max(0,Math.min(P+_/oe,d.scrollWidth-z/oe+B)),F+=J-v,O+=P-_}V.push({el:d,top:v,left:_})}return V},Tt=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function Lt(e,t){if(!e.isConnected||!(o=>{let a=o;for(;a&&a.parentNode;){if(a.parentNode===document)return!0;a=a.parentNode instanceof ShadowRoot?a.parentNode.host:a.parentNode}return!1})(e))return;const n=(o=>{const a=window.getComputedStyle(o);return{top:parseFloat(a.scrollMarginTop)||0,right:parseFloat(a.scrollMarginRight)||0,bottom:parseFloat(a.scrollMarginBottom)||0,left:parseFloat(a.scrollMarginLeft)||0}})(e);if((o=>typeof o=="object"&&typeof o.behavior=="function")(t))return t.behavior(Me(e,t));const r=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:o,top:a,left:i}of Me(e,Tt(t))){const c=a-n.top+n.bottom,u=i-n.left+n.right;o.scroll({top:c,left:u,behavior:r})}}function de(e){const[t,n]=l.useState(e);return l.useEffect(()=>{const r=setTimeout(()=>{n(e)},e.length?0:10);return()=>{clearTimeout(r)}},[e]),t}const Wt=e=>{const{componentCls:t}=e,n=`${t}-show-help`,r=`${t}-show-help-item`;return{[n]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[r]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${r}-appear, &${r}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${r}-leave-active`]:{transform:"translateY(-5px)"}}}}},zt=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${Z(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${Z(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),Ne=(e,t)=>{const{formItemCls:n}=e;return{[n]:{[`${n}-label > label`]:{height:t},[`${n}-control-input`]:{minHeight:t}}}},Ht=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},Te(e)),zt(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},Ne(e,e.controlHeightSM)),"&-large":Object.assign({},Ne(e,e.controlHeightLG))})}},qt=e=>{const{formItemCls:t,iconCls:n,componentCls:r,rootPrefixCls:o,antCls:a,labelRequiredMarkColor:i,labelColor:c,labelFontSize:u,labelHeight:f,labelColonMarginInlineStart:y,labelColonMarginInlineEnd:g,itemMarginBottom:x}=e;return{[t]:Object.assign(Object.assign({},Te(e)),{marginBottom:x,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden${a}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:f,color:c,fontSize:u,[`> ${n}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:i,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:y,marginInlineEnd:g},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:_e,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},Pe=(e,t)=>{const{formItemCls:n}=e;return{[`${t}-horizontal`]:{[`${n}-label`]:{flexGrow:0},[`${n}-control`]:{flex:"1 1 0",minWidth:0},[`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]:{[`& + ${n}-control`]:{minWidth:"unset"}}}}},Dt=e=>{const{componentCls:t,formItemCls:n,inlineItemMarginBottom:r}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[n]:{flex:"none",marginInlineEnd:e.margin,marginBottom:r,"&-row":{flexWrap:"nowrap"},[`> ${n}-label,
        > ${n}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${n}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${n}-has-feedback`]:{display:"inline-block"}}}}},G=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),He=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${n} ${n}-label`]:G(e),[`${t}:not(${t}-inline)`]:{[n]:{flexWrap:"wrap",[`${n}-label, ${n}-control`]:{[`&:not([class*=" ${r}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},At=e=>{const{componentCls:t,formItemCls:n,antCls:r}=e;return{[`${t}-vertical`]:{[`${n}:not(${n}-horizontal)`]:{[`${n}-row`]:{flexDirection:"column"},[`${n}-label > label`]:{height:"auto"},[`${n}-control`]:{width:"100%"},[`${n}-label,
        ${r}-col-24${n}-label,
        ${r}-col-xl-24${n}-label`]:G(e)}},[`@media (max-width: ${Z(e.screenXSMax)})`]:[He(e),{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-xs-24${n}-label`]:G(e)}}}],[`@media (max-width: ${Z(e.screenSMMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-sm-24${n}-label`]:G(e)}}},[`@media (max-width: ${Z(e.screenMDMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-md-24${n}-label`]:G(e)}}},[`@media (max-width: ${Z(e.screenLGMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-lg-24${n}-label`]:G(e)}}}}},Bt=e=>{const{formItemCls:t,antCls:n}=e;return{[`${t}-vertical`]:{[`${t}-row`]:{flexDirection:"column"},[`${t}-label > label`]:{height:"auto"},[`${t}-control`]:{width:"100%"}},[`${t}-vertical ${t}-label,
      ${n}-col-24${t}-label,
      ${n}-col-xl-24${t}-label`]:G(e),[`@media (max-width: ${Z(e.screenXSMax)})`]:[He(e),{[t]:{[`${n}-col-xs-24${t}-label`]:G(e)}}],[`@media (max-width: ${Z(e.screenSMMax)})`]:{[t]:{[`${n}-col-sm-24${t}-label`]:G(e)}},[`@media (max-width: ${Z(e.screenMDMax)})`]:{[t]:{[`${n}-col-md-24${t}-label`]:G(e)}},[`@media (max-width: ${Z(e.screenLGMax)})`]:{[t]:{[`${n}-col-lg-24${t}-label`]:G(e)}}}},Xt=e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0,inlineItemMarginBottom:0}),qe=(e,t)=>Qe(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),ve=Ue("Form",(e,t)=>{let{rootPrefixCls:n}=t;const r=qe(e,n);return[Ht(r),qt(r),Wt(r),Pe(r,r.componentCls),Pe(r,r.formItemCls),Dt(r),At(r),Bt(r),Pt(r),_e]},Xt,{order:-1e3}),je=[];function he(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${r}`,error:e,errorStatus:n}}const De=e=>{let{help:t,helpStatus:n,errors:r=je,warnings:o=je,className:a,fieldId:i,onVisibleChanged:c}=e;const{prefixCls:u}=l.useContext(be),f=`${u}-item-explain`,y=ye(u),[g,x,$]=ve(u,y),h=l.useMemo(()=>Ie(u),[u]),w=de(r),N=de(o),C=l.useMemo(()=>t!=null?[he(t,"help",n)]:[].concat(X(w.map((s,p)=>he(s,"error","error",p))),X(N.map((s,p)=>he(s,"warning","warning",p)))),[t,n,w,N]),S={};return i&&(S.id=`${i}_help`),g(l.createElement(Je,{motionDeadline:h.motionDeadline,motionName:`${u}-show-help`,visible:!!C.length,onVisibleChanged:c},s=>{const{className:p,style:b}=s;return l.createElement("div",Object.assign({},S,{className:ne(f,p,$,y,a,x),style:b,role:"alert"}),l.createElement(Ze,Object.assign({keys:C},Ie(u),{motionName:`${u}-show-help-item`,component:!1}),I=>{const{key:j,error:E,errorStatus:R,className:L,style:T}=I;return l.createElement("div",{key:j,className:ne(L,{[`${f}-${R}`]:R}),style:T},E)}))}))},Gt=["parentNode"],Kt="form_item";function ie(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Ae(e,t){if(!e.length)return;const n=e.join("_");return t?`${t}_${n}`:Gt.includes(n)?`${Kt}_${n}`:n}function Be(e,t,n,r,o,a){let i=r;return a!==void 0?i=a:n.validating?i="validating":e.length?i="error":t.length?i="warning":(n.touched||o&&n.validated)&&(i="success"),i}function Re(e){return ie(e).join("_")}function Yt(e,t){const n=t.getFieldInstance(e),r=tt(n);if(r)return r;const o=Ae(ie(e),t.__INTERNAL__.name);if(o)return document.getElementById(o)}function Xe(e){const[t]=et(),n=l.useRef({}),r=l.useMemo(()=>e??Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:o=>a=>{const i=Re(o);a?n.current[i]=a:delete n.current[i]}},scrollToField:function(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Yt(o,r);i&&Lt(i,Object.assign({scrollMode:"if-needed",block:"nearest"},a))},getFieldInstance:o=>{const a=Re(o);return n.current[a]}}),[e,t]);return[r]}var kt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Ut=(e,t)=>{const n=l.useContext(nt),{getPrefixCls:r,direction:o,form:a}=l.useContext(Ce),{prefixCls:i,className:c,rootClassName:u,size:f,disabled:y=n,form:g,colon:x,labelAlign:$,labelWrap:h,labelCol:w,wrapperCol:N,hideRequiredMark:C,layout:S="horizontal",scrollToFirstError:s,requiredMark:p,onFinishFailed:b,name:I,style:j,feedbackIcons:E,variant:R}=e,L=kt(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),T=rt(f),K=l.useContext(ot),F=l.useMemo(()=>p!==void 0?p:C?!1:a&&a.requiredMark!==void 0?a.requiredMark:!0,[C,p,a]),O=x??(a==null?void 0:a.colon),V=r("form",i),H=ye(V),[d,W,z]=ve(V,H),Y=ne(V,`${V}-${S}`,{[`${V}-hide-required-mark`]:F===!1,[`${V}-rtl`]:o==="rtl",[`${V}-${T}`]:T},z,H,W,a==null?void 0:a.className,c,u),[q]=Xe(g),{__INTERNAL__:D}=q;D.name=I;const k=l.useMemo(()=>({name:I,labelAlign:$,labelCol:w,labelWrap:h,wrapperCol:N,vertical:S==="vertical",colon:O,requiredMark:F,itemRef:D.itemRef,form:q,feedbackIcons:E}),[I,$,w,N,S,O,F,q,E]),ee=l.useRef(null);l.useImperativeHandle(t,()=>{var m;return Object.assign(Object.assign({},q),{nativeElement:(m=ee.current)===null||m===void 0?void 0:m.nativeElement})});const U=(m,M)=>{if(m){let v={block:"nearest"};typeof m=="object"&&(v=m),q.scrollToField(M,v)}},A=m=>{if(b==null||b(m),m.errorFields.length){const M=m.errorFields[0].name;if(s!==void 0){U(s,M);return}a&&a.scrollToFirstError!==void 0&&U(a.scrollToFirstError,M)}};return d(l.createElement(lt.Provider,{value:R},l.createElement(at,{disabled:y},l.createElement(it.Provider,{value:T},l.createElement(Le,{validateMessages:K},l.createElement(re.Provider,{value:k},l.createElement(st,Object.assign({id:I},L,{name:I,onFinishFailed:A,form:q,ref:ee,style:Object.assign(Object.assign({},a==null?void 0:a.style),j),className:Y}))))))))},Qt=l.forwardRef(Ut);function Jt(e){if(typeof e=="function")return e;const t=ct(e);return t.length<=1?t[0]:t}const Ge=()=>{const{status:e,errors:t=[],warnings:n=[]}=l.useContext(ue);return{status:e,errors:t,warnings:n}};Ge.Context=ue;function Zt(e){const[t,n]=l.useState(e),r=l.useRef(null),o=l.useRef([]),a=l.useRef(!1);l.useEffect(()=>(a.current=!1,()=>{a.current=!0,Ee.cancel(r.current),r.current=null}),[]);function i(c){a.current||(r.current===null&&(o.current=[],r.current=Ee(()=>{r.current=null,n(u=>{let f=u;return o.current.forEach(y=>{f=y(f)}),f})})),o.current.push(c))}return[t,i]}function en(){const{itemRef:e}=l.useContext(re),t=l.useRef({});function n(r,o){const a=o&&typeof o=="object"&&o.ref,i=r.join("_");return(t.current.name!==i||t.current.originRef!==a)&&(t.current.name=i,t.current.originRef=a,t.current.ref=ut(e(r),a)),t.current.ref}return n}const tn=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},nn=dt(["Form","item-item"],(e,t)=>{let{rootPrefixCls:n}=t;const r=qe(e,n);return[tn(r)]}),rn=e=>{const{prefixCls:t,status:n,wrapperCol:r,children:o,errors:a,warnings:i,_internalItemRender:c,extra:u,help:f,fieldId:y,marginBottom:g,onErrorVisibleChanged:x}=e,$=`${t}-item`,h=l.useContext(re),w=r||h.wrapperCol||{},N=ne(`${$}-control`,w.className),C=l.useMemo(()=>Object.assign({},h),[h]);delete C.labelCol,delete C.wrapperCol;const S=l.createElement("div",{className:`${$}-control-input`},l.createElement("div",{className:`${$}-control-input-content`},o)),s=l.useMemo(()=>({prefixCls:t,status:n}),[t,n]),p=g!==null||a.length||i.length?l.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},l.createElement(be.Provider,{value:s},l.createElement(De,{fieldId:y,errors:a,warnings:i,help:f,helpStatus:n,className:`${$}-explain-connected`,onVisibleChanged:x})),!!g&&l.createElement("div",{style:{width:0,height:g}})):null,b={};y&&(b.id=`${y}_extra`);const I=u?l.createElement("div",Object.assign({},b,{className:`${$}-extra`}),u):null,j=c&&c.mark==="pro_table_render"&&c.render?c.render(e,{input:S,errorList:p,extra:I}):l.createElement(l.Fragment,null,S,p,I);return l.createElement(re.Provider,{value:C},l.createElement(ze,Object.assign({},w,{className:N}),j),l.createElement(nn,{prefixCls:t}))};var on={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},ln=function(t,n){return l.createElement(mt,ft({},t,{ref:n,icon:on}))},an=l.forwardRef(ln),sn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function cn(e){return e?typeof e=="object"&&!l.isValidElement(e)?e:{title:e}:null}const un=e=>{let{prefixCls:t,label:n,htmlFor:r,labelCol:o,labelAlign:a,colon:i,required:c,requiredMark:u,tooltip:f,vertical:y}=e;var g;const[x]=Rt("Form"),{labelAlign:$,labelCol:h,labelWrap:w,colon:N}=l.useContext(re);if(!n)return null;const C=o||h||{},S=a||$,s=`${t}-item-label`,p=ne(s,S==="left"&&`${s}-left`,C.className,{[`${s}-wrap`]:!!w});let b=n;const I=i===!0||N!==!1&&i!==!1;I&&!y&&typeof n=="string"&&n.trim()&&(b=n.replace(/[:|：]\s*$/,""));const E=cn(f);if(E){const{icon:K=l.createElement(an,null)}=E,F=sn(E,["icon"]),O=l.createElement(gt,Object.assign({},F),l.cloneElement(K,{className:`${t}-item-tooltip`,title:"",onClick:V=>{V.preventDefault()},tabIndex:null}));b=l.createElement(l.Fragment,null,b,O)}const R=u==="optional",L=typeof u=="function";L?b=u(b,{required:!!c}):R&&!c&&(b=l.createElement(l.Fragment,null,b,l.createElement("span",{className:`${t}-item-optional`,title:""},(x==null?void 0:x.optional)||((g=pt.Form)===null||g===void 0?void 0:g.optional))));const T=ne({[`${t}-item-required`]:c,[`${t}-item-required-mark-optional`]:R||L,[`${t}-item-no-colon`]:!I});return l.createElement(ze,Object.assign({},C,{className:p}),l.createElement("label",{htmlFor:r,className:T,title:typeof n=="string"?n:""},b))},dn={success:ht,warning:bt,error:yt,validating:Vt};function Ke(e){let{children:t,errors:n,warnings:r,hasFeedback:o,validateStatus:a,prefixCls:i,meta:c,noStyle:u}=e;const f=`${i}-item`,{feedbackIcons:y}=l.useContext(re),g=Be(n,r,c,null,!!o,a),{isFormItemInput:x,status:$,hasFeedback:h,feedbackIcon:w}=l.useContext(ue),N=l.useMemo(()=>{var C;let S;if(o){const p=o!==!0&&o.icons||y,b=g&&((C=p==null?void 0:p({status:g,errors:n,warnings:r}))===null||C===void 0?void 0:C[g]),I=g&&dn[g];S=b!==!1&&I?l.createElement("span",{className:ne(`${f}-feedback-icon`,`${f}-feedback-icon-${g}`)},b||l.createElement(I,null)):null}const s={status:g||"",errors:n,warnings:r,hasFeedback:!!o,feedbackIcon:S,isFormItemInput:!0};return u&&(s.status=(g??$)||"",s.isFormItemInput=x,s.hasFeedback=!!(o??h),s.feedbackIcon=o!==void 0?s.feedbackIcon:w),s},[g,o,u,x,$]);return l.createElement(ue.Provider,{value:N},t)}var mn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function fn(e){const{prefixCls:t,className:n,rootClassName:r,style:o,help:a,errors:i,warnings:c,validateStatus:u,meta:f,hasFeedback:y,hidden:g,children:x,fieldId:$,required:h,isRequired:w,onSubItemMetaChange:N,layout:C}=e,S=mn(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange","layout"]),s=`${t}-item`,{requiredMark:p,vertical:b}=l.useContext(re),I=b||C==="vertical",j=l.useRef(null),E=de(i),R=de(c),L=a!=null,T=!!(L||i.length||c.length),K=!!j.current&&Ct(j.current),[F,O]=l.useState(null);vt(()=>{if(T&&j.current){const z=getComputedStyle(j.current);O(parseInt(z.marginBottom,10))}},[T,K]);const V=z=>{z||O(null)},d=function(){let z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const Y=z?E:f.errors,q=z?R:f.warnings;return Be(Y,q,f,"",!!y,u)}(),W=ne(s,n,r,{[`${s}-with-help`]:L||E.length||R.length,[`${s}-has-feedback`]:d&&y,[`${s}-has-success`]:d==="success",[`${s}-has-warning`]:d==="warning",[`${s}-has-error`]:d==="error",[`${s}-is-validating`]:d==="validating",[`${s}-hidden`]:g,[`${s}-${C}`]:C});return l.createElement("div",{className:W,style:o,ref:j},l.createElement(jt,Object.assign({className:`${s}-row`},$t(S,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),l.createElement(un,Object.assign({htmlFor:$},e,{requiredMark:p,required:h??w,prefixCls:t,vertical:I})),l.createElement(rn,Object.assign({},e,f,{errors:E,warnings:R,prefixCls:t,status:d,help:a,marginBottom:F,onErrorVisibleChanged:V}),l.createElement(We.Provider,{value:N},l.createElement(Ke,{prefixCls:t,meta:f,errors:f.errors,warnings:f.warnings,hasFeedback:y,validateStatus:d},x)))),!!F&&l.createElement("div",{className:`${s}-margin-offset`,style:{marginBottom:-F}}))}const gn="__SPLIT__";function pn(e,t){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(o=>{const a=e[o],i=t[o];return a===i||typeof a=="function"||typeof i=="function"})}const hn=l.memo(e=>{let{children:t}=e;return t},(e,t)=>pn(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((n,r)=>n===t.childProps[r]));function Ve(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function bn(e){const{name:t,noStyle:n,className:r,dependencies:o,prefixCls:a,shouldUpdate:i,rules:c,children:u,required:f,label:y,messageVariables:g,trigger:x="onChange",validateTrigger:$,hidden:h,help:w,layout:N}=e,{getPrefixCls:C}=l.useContext(Ce),{name:S}=l.useContext(re),s=Jt(u),p=typeof s=="function",b=l.useContext(We),{validateTrigger:I}=l.useContext(xt),j=$!==void 0?$:I,E=t!=null,R=C("form",a),L=ye(R),[T,K,F]=ve(R,L);Ot();const O=l.useContext(wt),V=l.useRef(),[H,d]=Zt({}),[W,z]=St(()=>Ve()),Y=m=>{const M=O==null?void 0:O.getKey(m.name);if(z(m.destroy?Ve():m,!0),n&&w!==!1&&b){let v=m.name;if(m.destroy)v=V.current||v;else if(M!==void 0){const[_,B]=M;v=[_].concat(X(B)),V.current=v}b(m,v)}},q=(m,M)=>{d(v=>{const _=Object.assign({},v),Q=[].concat(X(m.name.slice(0,-1)),X(M)).join(gn);return m.destroy?delete _[Q]:_[Q]=m,_})},[D,k]=l.useMemo(()=>{const m=X(W.errors),M=X(W.warnings);return Object.values(H).forEach(v=>{m.push.apply(m,X(v.errors||[])),M.push.apply(M,X(v.warnings||[]))}),[m,M]},[H,W.errors,W.warnings]),ee=en();function U(m,M,v){return n&&!h?l.createElement(Ke,{prefixCls:R,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:W,errors:D,warnings:k,noStyle:!0},m):l.createElement(fn,Object.assign({key:"row"},e,{className:ne(r,F,L,K),prefixCls:R,fieldId:M,isRequired:v,errors:D,warnings:k,meta:W,onSubItemMetaChange:q,layout:N}),m)}if(!E&&!p&&!o)return T(U(s));let A={};return typeof y=="string"?A.label=y:t&&(A.label=String(t)),g&&(A=Object.assign(Object.assign({},A),g)),T(l.createElement(It,Object.assign({},e,{messageVariables:A,trigger:x,validateTrigger:j,onMetaChange:Y}),(m,M,v)=>{const _=ie(t).length&&M?M.name:[],B=Ae(_,S),Q=f!==void 0?f:!!(c!=null&&c.some(P=>{if(P&&typeof P=="object"&&P.required&&!P.warningOnly)return!0;if(typeof P=="function"){const J=P(v);return(J==null?void 0:J.required)&&!(J!=null&&J.warningOnly)}return!1})),oe=Object.assign({},m);let te=null;if(Array.isArray(s)&&E)te=s;else if(!(p&&(!(i||o)||E))){if(!(o&&!p&&!E))if(l.isValidElement(s)){const P=Object.assign(Object.assign({},s.props),oe);if(P.id||(P.id=B),w||D.length>0||k.length>0||e.extra){const ae=[];(w||D.length>0)&&ae.push(`${B}_help`),e.extra&&ae.push(`${B}_extra`),P["aria-describedby"]=ae.join(" ")}D.length>0&&(P["aria-invalid"]="true"),Q&&(P["aria-required"]="true"),Et(s)&&(P.ref=ee(_,s)),new Set([].concat(X(ie(x)),X(ie(j)))).forEach(ae=>{P[ae]=function(){for(var $e,xe,me,we,fe,Se=arguments.length,ge=new Array(Se),se=0;se<Se;se++)ge[se]=arguments[se];(me=oe[ae])===null||me===void 0||($e=me).call.apply($e,[oe].concat(ge)),(fe=(we=s.props)[ae])===null||fe===void 0||(xe=fe).call.apply(xe,[we].concat(ge))}});const ke=[P["aria-required"],P["aria-invalid"],P["aria-describedby"]];te=l.createElement(hn,{control:oe,update:s,childProps:ke},Ft(s,P))}else p&&(i||o)&&!E?te=s(v):te=s}return U(te,B,Q)}))}const Ye=bn;Ye.useStatus=Ge;var yn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Cn=e=>{var{prefixCls:t,children:n}=e,r=yn(e,["prefixCls","children"]);const{getPrefixCls:o}=l.useContext(Ce),a=o("form",t),i=l.useMemo(()=>({prefixCls:a,status:"error"}),[a]);return l.createElement(Mt,Object.assign({},r),(c,u,f)=>l.createElement(be.Provider,{value:i},n(c.map(y=>Object.assign(Object.assign({},y),{fieldKey:y.key})),u,{errors:f.errors,warnings:f.warnings})))};function vn(){const{form:e}=l.useContext(re);return e}const le=Qt;le.Item=Ye;le.List=Cn;le.ErrorList=De;le.useForm=Xe;le.useFormInstance=vn;le.useWatch=Nt;le.Provider=Le;le.create=()=>{};export{le as F};
