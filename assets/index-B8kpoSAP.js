import{r as a,y as W,R as y,bN as ot,o as N,s as R,z as de,ay as Se,n as V,v as ie,ai as Oe,bO as at,bP as ue,K as fe,aj as lt,bp as rt,bQ as Ee,bR as it,an as Pe,F as st,ak as ct,al as dt,I as O,H as ut,aY as ft,G as mt,L as te,aq as we,Z as gt,bB as vt,bS as Ct,ar as ee,h as bt,bE as yt,aB as xt,aV as Ne,a7 as pt,a6 as ht,a5 as $t,aP as St,bF as Ot,aN as Et,aT as Pt,bT as wt,aU as Nt,as as Tt}from"./index-DE5XhBCr.js";import{A as Te}from"./ActionButton-MYhLG2Zg.js";import{u as It,p as me,a as Rt}from"./context-CsfdzBwd.js";import{B as Ie,c as jt}from"./button-D_f20KL0.js";import{u as se}from"./useLocale-BqnSk2g0.js";import{w as Bt}from"./PurePanel-CXcxwk_K.js";function Mt(){const[e,t]=a.useState([]),o=a.useCallback(n=>(t(l=>[].concat(W(l),[n])),()=>{t(l=>l.filter(i=>i!==n))}),[]);return[e,o]}const Z=y.createContext({}),{Provider:Re}=Z,ge=()=>{const{autoFocusButton:e,cancelButtonProps:t,cancelTextLocale:o,isSilent:n,mergedOkCancel:l,rootPrefixCls:i,close:u,onCancel:d,onConfirm:s}=a.useContext(Z);return l?y.createElement(Te,{isSilent:n,actionFn:d,close:function(){u==null||u.apply(void 0,arguments),s==null||s(!1)},autoFocus:e==="cancel",buttonProps:t,prefixCls:`${i}-btn`},o):null},ve=()=>{const{autoFocusButton:e,close:t,isSilent:o,okButtonProps:n,rootPrefixCls:l,okTextLocale:i,okType:u,onConfirm:d,onOk:s}=a.useContext(Z);return y.createElement(Te,{isSilent:o,type:u||"primary",actionFn:s,close:function(){t==null||t.apply(void 0,arguments),d==null||d(!0)},autoFocus:e==="ok",buttonProps:n,prefixCls:`${l}-btn`},i)};var je=a.createContext({});function Ce(e,t,o){var n=t;return!n&&o&&(n="".concat(e,"-").concat(o)),n}function be(e,t){var o=e["page".concat(t?"Y":"X","Offset")],n="scroll".concat(t?"Top":"Left");if(typeof o!="number"){var l=e.document;o=l.documentElement[n],typeof o!="number"&&(o=l.body[n])}return o}function zt(e){var t=e.getBoundingClientRect(),o={left:t.left,top:t.top},n=e.ownerDocument,l=n.defaultView||n.parentWindow;return o.left+=be(l),o.top+=be(l,!0),o}const Ht=a.memo(function(e){var t=e.children;return t},function(e,t){var o=t.shouldUpdate;return!o});var ye={width:0,height:0,overflow:"hidden",outline:"none"},Lt={outline:"none"},Be=y.forwardRef(function(e,t){var o=e.prefixCls,n=e.className,l=e.style,i=e.title,u=e.ariaId,d=e.footer,s=e.closable,c=e.closeIcon,r=e.onClose,m=e.children,g=e.bodyStyle,b=e.bodyProps,h=e.modalRender,f=e.onMouseDown,x=e.onMouseUp,C=e.holderRef,v=e.visible,P=e.forceRender,p=e.width,E=e.height,$=e.classNames,S=e.styles,j=y.useContext(je),T=j.panel,A=ot(C,T),M=a.useRef(),G=a.useRef(),q=a.useRef();y.useImperativeHandle(t,function(){return{focus:function(){var I;(I=q.current)===null||I===void 0||I.focus({preventScroll:!0})},changeActive:function(I){var ne=document,J=ne.activeElement;I&&J===G.current?M.current.focus({preventScroll:!0}):!I&&J===M.current&&G.current.focus({preventScroll:!0})}}});var B={};p!==void 0&&(B.width=p),E!==void 0&&(B.height=E);var z=d?y.createElement("div",{className:N("".concat(o,"-footer"),$==null?void 0:$.footer),style:R({},S==null?void 0:S.footer)},d):null,D=i?y.createElement("div",{className:N("".concat(o,"-header"),$==null?void 0:$.header),style:R({},S==null?void 0:S.header)},y.createElement("div",{className:"".concat(o,"-title"),id:u},i)):null,F=a.useMemo(function(){return de(s)==="object"&&s!==null?s:s?{closeIcon:c??y.createElement("span",{className:"".concat(o,"-close-x")})}:{}},[s,c,o]),U=Se(F,!0),Q=de(s)==="object"&&s.disabled,K=s?y.createElement("button",V({type:"button",onClick:r,"aria-label":"Close"},U,{className:"".concat(o,"-close"),disabled:Q}),F.closeIcon):null,_=y.createElement("div",{className:N("".concat(o,"-content"),$==null?void 0:$.content),style:S==null?void 0:S.content},K,D,y.createElement("div",V({className:N("".concat(o,"-body"),$==null?void 0:$.body),style:R(R({},g),S==null?void 0:S.body)},b),m),z);return y.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":i?u:null,"aria-modal":"true",ref:A,style:R(R({},l),B),className:N(o,n),onMouseDown:f,onMouseUp:x},y.createElement("div",{tabIndex:0,ref:M,style:ye,"aria-hidden":"true"}),y.createElement("div",{ref:q,tabIndex:-1,style:Lt},y.createElement(Ht,{shouldUpdate:v||P},h?h(_):_)),y.createElement("div",{tabIndex:0,ref:G,style:ye,"aria-hidden":"true"}))}),Me=a.forwardRef(function(e,t){var o=e.prefixCls,n=e.title,l=e.style,i=e.className,u=e.visible,d=e.forceRender,s=e.destroyOnClose,c=e.motionName,r=e.ariaId,m=e.onVisibleChanged,g=e.mousePosition,b=a.useRef(),h=a.useState(),f=ie(h,2),x=f[0],C=f[1],v={};x&&(v.transformOrigin=x);function P(){var p=zt(b.current);C(g&&(g.x||g.y)?"".concat(g.x-p.left,"px ").concat(g.y-p.top,"px"):"")}return a.createElement(Oe,{visible:u,onVisibleChanged:m,onAppearPrepare:P,onEnterPrepare:P,forceRender:d,motionName:c,removeOnLeave:s,ref:b},function(p,E){var $=p.className,S=p.style;return a.createElement(Be,V({},e,{ref:t,title:n,ariaId:r,prefixCls:o,holderRef:E,style:R(R(R({},S),l),v),className:N(i,$)}))})});Me.displayName="Content";var At=function(t){var o=t.prefixCls,n=t.style,l=t.visible,i=t.maskProps,u=t.motionName,d=t.className;return a.createElement(Oe,{key:"mask",visible:l,motionName:u,leavedClassName:"".concat(o,"-mask-hidden")},function(s,c){var r=s.className,m=s.style;return a.createElement("div",V({ref:c,style:R(R({},m),n),className:N("".concat(o,"-mask"),r,d)},i))})},Ft=function(t){var o=t.prefixCls,n=o===void 0?"rc-dialog":o,l=t.zIndex,i=t.visible,u=i===void 0?!1:i,d=t.keyboard,s=d===void 0?!0:d,c=t.focusTriggerAfterClose,r=c===void 0?!0:c,m=t.wrapStyle,g=t.wrapClassName,b=t.wrapProps,h=t.onClose,f=t.afterOpenChange,x=t.afterClose,C=t.transitionName,v=t.animation,P=t.closable,p=P===void 0?!0:P,E=t.mask,$=E===void 0?!0:E,S=t.maskTransitionName,j=t.maskAnimation,T=t.maskClosable,A=T===void 0?!0:T,M=t.maskStyle,G=t.maskProps,q=t.rootClassName,B=t.classNames,z=t.styles,D=a.useRef(),F=a.useRef(),U=a.useRef(),Q=a.useState(u),K=ie(Q,2),_=K[0],H=K[1],I=at();function ne(){ue(F.current,document.activeElement)||(D.current=document.activeElement)}function J(){if(!ue(F.current,document.activeElement)){var w;(w=U.current)===null||w===void 0||w.focus()}}function Je(w){if(w)J();else{if(H(!1),$&&D.current&&r){try{D.current.focus({preventScroll:!0})}catch{}D.current=null}_&&(x==null||x())}f==null||f(w)}function oe(w){h==null||h(w)}var k=a.useRef(!1),ae=a.useRef(),ke=function(){clearTimeout(ae.current),k.current=!0},et=function(){ae.current=setTimeout(function(){k.current=!1})},ce=null;A&&(ce=function(le){k.current?k.current=!1:F.current===le.target&&oe(le)});function tt(w){if(s&&w.keyCode===fe.ESC){w.stopPropagation(),oe(w);return}u&&w.keyCode===fe.TAB&&U.current.changeActive(!w.shiftKey)}a.useEffect(function(){u&&(H(!0),ne())},[u]),a.useEffect(function(){return function(){clearTimeout(ae.current)}},[]);var nt=R(R(R({zIndex:l},m),z==null?void 0:z.wrapper),{},{display:_?null:"none"});return a.createElement("div",V({className:N("".concat(n,"-root"),q)},Se(t,{data:!0})),a.createElement(At,{prefixCls:n,visible:$&&u,motionName:Ce(n,S,j),style:R(R({zIndex:l},M),z==null?void 0:z.mask),maskProps:G,className:B==null?void 0:B.mask}),a.createElement("div",V({tabIndex:-1,onKeyDown:tt,className:N("".concat(n,"-wrap"),g,B==null?void 0:B.wrapper),ref:F,onClick:ce,style:nt},b),a.createElement(Me,V({},t,{onMouseDown:ke,onMouseUp:et,ref:U,closable:p,ariaId:I,prefixCls:n,visible:u&&_,onClose:oe,onVisibleChanged:Je,motionName:Ce(n,C,v)}))))},ze=function(t){var o=t.visible,n=t.getContainer,l=t.forceRender,i=t.destroyOnClose,u=i===void 0?!1:i,d=t.afterClose,s=t.panelRef,c=a.useState(o),r=ie(c,2),m=r[0],g=r[1],b=a.useMemo(function(){return{panel:s}},[s]);return a.useEffect(function(){o&&g(!0)},[o]),!l&&u&&!m?null:a.createElement(je.Provider,{value:b},a.createElement(lt,{open:o||l||m,autoDestroy:!1,getContainer:n,autoLock:o||m},a.createElement(Ft,V({},t,{destroyOnClose:u,afterClose:function(){d==null||d(),g(!1)}}))))};ze.displayName="Dialog";const Dt=()=>rt()&&window.document.documentElement,xe=()=>{const{cancelButtonProps:e,cancelTextLocale:t,onCancel:o}=a.useContext(Z);return y.createElement(Ie,Object.assign({onClick:o},e),t)},pe=()=>{const{confirmLoading:e,okButtonProps:t,okType:o,okTextLocale:n,onOk:l}=a.useContext(Z);return y.createElement(Ie,Object.assign({},jt(o),{loading:e,onClick:l},t),n)};function He(e,t){return y.createElement("span",{className:`${e}-close-x`},t||y.createElement(Pe,{className:`${e}-close-icon`}))}const Le=e=>{const{okText:t,okType:o="primary",cancelText:n,confirmLoading:l,onOk:i,onCancel:u,okButtonProps:d,cancelButtonProps:s,footer:c}=e,[r]=se("Modal",Ee()),m=t||(r==null?void 0:r.okText),g=n||(r==null?void 0:r.cancelText),b={confirmLoading:l,okButtonProps:d,cancelButtonProps:s,okTextLocale:m,cancelTextLocale:g,okType:o,onOk:i,onCancel:u},h=y.useMemo(()=>b,W(Object.values(b)));let f;return typeof c=="function"||typeof c>"u"?(f=y.createElement(y.Fragment,null,y.createElement(xe,null),y.createElement(pe,null)),typeof c=="function"&&(f=c(f,{OkBtn:pe,CancelBtn:xe})),f=y.createElement(Re,{value:h},f)):f=c,y.createElement(it,{disabled:!1},f)};function he(e){return{position:e,inset:0}}const _t=e=>{const{componentCls:t,antCls:o}=e;return[{[`${t}-root`]:{[`${t}${o}-zoom-enter, ${t}${o}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${t}${o}-zoom-leave ${t}-content`]:{pointerEvents:"none"},[`${t}-mask`]:Object.assign(Object.assign({},he("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${t}-hidden`]:{display:"none"}}),[`${t}-wrap`]:Object.assign(Object.assign({},he("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${t}-root`]:dt(e)}]},Wt=e=>{const{componentCls:t}=e;return[{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl"},[`${t}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[t]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{maxWidth:"calc(100vw - 16px)",margin:`${O(e.marginXS)} auto`},[`${t}-centered`]:{[t]:{flex:1}}}}},{[t]:Object.assign(Object.assign({},ut(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${O(e.calc(e.margin).mul(2).equal())})`,margin:"0 auto",paddingBottom:e.paddingLG,[`${t}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${t}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:e.contentPadding},[`${t}-close`]:Object.assign({position:"absolute",top:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),insetInlineEnd:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),zIndex:e.calc(e.zIndexPopupBase).add(10).equal(),padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:O(e.modalCloseBtnSize),justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:e.modalCloseIconHoverColor,backgroundColor:e.colorBgTextHover,textDecoration:"none"},"&:active":{backgroundColor:e.colorBgTextActive}},ft(e)),[`${t}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${O(e.borderRadiusLG)} ${O(e.borderRadiusLG)} 0 0`,marginBottom:e.headerMarginBottom,padding:e.headerPadding,borderBottom:e.headerBorderBottom},[`${t}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word",padding:e.bodyPadding,[`${t}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",margin:`${O(e.margin)} auto`}},[`${t}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.footerMarginTop,padding:e.footerPadding,borderTop:e.footerBorderTop,borderRadius:e.footerBorderRadius,[`> ${e.antCls}-btn + ${e.antCls}-btn`]:{marginInlineStart:e.marginXS}},[`${t}-open`]:{overflow:"hidden"}})},{[`${t}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${t}-confirm-body`]:{marginBottom:"auto"}}}]},Vt=e=>{const{componentCls:t}=e;return{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl",[`${t}-confirm-body`]:{direction:"rtl"}}}}},Ae=e=>{const t=e.padding,o=e.fontSizeHeading5,n=e.lineHeightHeading5;return mt(e,{modalHeaderHeight:e.calc(e.calc(n).mul(o).equal()).add(e.calc(t).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalCloseIconColor:e.colorIcon,modalCloseIconHoverColor:e.colorIconHover,modalCloseBtnSize:e.controlHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()})},Fe=e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading,contentPadding:e.wireframe?0:`${O(e.paddingMD)} ${O(e.paddingContentHorizontalLG)}`,headerPadding:e.wireframe?`${O(e.padding)} ${O(e.paddingLG)}`:0,headerBorderBottom:e.wireframe?`${O(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",headerMarginBottom:e.wireframe?0:e.marginXS,bodyPadding:e.wireframe?e.paddingLG:0,footerPadding:e.wireframe?`${O(e.paddingXS)} ${O(e.padding)}`:0,footerBorderTop:e.wireframe?`${O(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",footerBorderRadius:e.wireframe?`0 0 ${O(e.borderRadiusLG)} ${O(e.borderRadiusLG)}`:0,footerMarginTop:e.wireframe?0:e.marginSM,confirmBodyPadding:e.wireframe?`${O(e.padding*2)} ${O(e.padding*2)} ${O(e.paddingLG)}`:0,confirmIconMarginInlineEnd:e.wireframe?e.margin:e.marginSM,confirmBtnsMarginTop:e.wireframe?e.marginLG:e.marginSM}),De=st("Modal",e=>{const t=Ae(e);return[Wt(t),Vt(t),_t(t),ct(t,"zoom")]},Fe,{unitless:{titleLineHeight:!0}});var Gt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};let re;const qt=e=>{re={x:e.pageX,y:e.pageY},setTimeout(()=>{re=null},100)};Dt()&&document.documentElement.addEventListener("click",qt,!0);const _e=e=>{var t;const{getPopupContainer:o,getPrefixCls:n,direction:l,modal:i}=a.useContext(te),u=H=>{const{onCancel:I}=e;I==null||I(H)},d=H=>{const{onOk:I}=e;I==null||I(H)},{prefixCls:s,className:c,rootClassName:r,open:m,wrapClassName:g,centered:b,getContainer:h,focusTriggerAfterClose:f=!0,style:x,visible:C,width:v=520,footer:P,classNames:p,styles:E,children:$,loading:S}=e,j=Gt(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","focusTriggerAfterClose","style","visible","width","footer","classNames","styles","children","loading"]),T=n("modal",s),A=n(),M=we(T),[G,q,B]=De(T,M),z=N(g,{[`${T}-centered`]:!!b,[`${T}-wrap-rtl`]:l==="rtl"}),D=P!==null&&!S?a.createElement(Le,Object.assign({},e,{onOk:d,onCancel:u})):null,[F,U]=It(me(e),me(i),{closable:!0,closeIcon:a.createElement(Pe,{className:`${T}-close-icon`}),closeIconRender:H=>He(T,H)}),Q=Rt(`.${T}-content`),[K,_]=gt("Modal",j.zIndex);return G(a.createElement(vt,{form:!0,space:!0},a.createElement(Ct.Provider,{value:_},a.createElement(ze,Object.assign({width:v},j,{zIndex:K,getContainer:h===void 0?o:h,prefixCls:T,rootClassName:N(q,r,B,M),footer:D,visible:m??C,mousePosition:(t=j.mousePosition)!==null&&t!==void 0?t:re,onClose:u,closable:F,closeIcon:U,focusTriggerAfterClose:f,transitionName:ee(A,"zoom",e.transitionName),maskTransitionName:ee(A,"fade",e.maskTransitionName),className:N(q,c,i==null?void 0:i.className),style:Object.assign(Object.assign({},i==null?void 0:i.style),x),classNames:Object.assign(Object.assign(Object.assign({},i==null?void 0:i.classNames),p),{wrapper:N(z,p==null?void 0:p.wrapper)}),styles:Object.assign(Object.assign({},i==null?void 0:i.styles),E),panelRef:Q}),S?a.createElement(bt,{active:!0,title:!1,paragraph:{rows:4},className:`${T}-body-skeleton`}):$))))},Ut=e=>{const{componentCls:t,titleFontSize:o,titleLineHeight:n,modalConfirmIconSize:l,fontSize:i,lineHeight:u,modalTitleHeight:d,fontHeight:s,confirmBodyPadding:c}=e,r=`${t}-confirm`;return{[r]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${r}-body-wrapper`]:Object.assign({},xt()),[`&${t} ${t}-body`]:{padding:c},[`${r}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:l,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(s).sub(l).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(d).sub(l).equal()).div(2).equal()}},[`${r}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS},[`${e.iconCls} + ${r}-paragraph`]:{maxWidth:`calc(100% - ${O(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${r}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:o,lineHeight:n},[`${r}-content`]:{color:e.colorText,fontSize:i,lineHeight:u},[`${r}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${r}-error ${r}-body > ${e.iconCls}`]:{color:e.colorError},[`${r}-warning ${r}-body > ${e.iconCls},
        ${r}-confirm ${r}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${r}-info ${r}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${r}-success ${r}-body > ${e.iconCls}`]:{color:e.colorSuccess}}},Xt=yt(["Modal","confirm"],e=>{const t=Ae(e);return[Ut(t)]},Fe,{order:-1e3});var Kt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};function We(e){const{prefixCls:t,icon:o,okText:n,cancelText:l,confirmPrefixCls:i,type:u,okCancel:d,footer:s,locale:c}=e,r=Kt(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let m=o;if(!o&&o!==null)switch(u){case"info":m=a.createElement(St,null);break;case"success":m=a.createElement($t,null);break;case"error":m=a.createElement(ht,null);break;default:m=a.createElement(pt,null)}const g=d??u==="confirm",b=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[h]=se("Modal"),f=c||h,x=n||(g?f==null?void 0:f.okText:f==null?void 0:f.justOkText),C=l||(f==null?void 0:f.cancelText),v=Object.assign({autoFocusButton:b,cancelTextLocale:C,okTextLocale:x,mergedOkCancel:g},r),P=a.useMemo(()=>v,W(Object.values(v))),p=a.createElement(a.Fragment,null,a.createElement(ge,null),a.createElement(ve,null)),E=e.title!==void 0&&e.title!==null,$=`${i}-body`;return a.createElement("div",{className:`${i}-body-wrapper`},a.createElement("div",{className:N($,{[`${$}-has-title`]:E})},m,a.createElement("div",{className:`${i}-paragraph`},E&&a.createElement("span",{className:`${i}-title`},e.title),a.createElement("div",{className:`${i}-content`},e.content))),s===void 0||typeof s=="function"?a.createElement(Re,{value:P},a.createElement("div",{className:`${i}-btns`},typeof s=="function"?s(p,{OkBtn:ve,CancelBtn:ge}):p)):s,a.createElement(Xt,{prefixCls:t}))}const Qt=e=>{const{close:t,zIndex:o,afterClose:n,open:l,keyboard:i,centered:u,getContainer:d,maskStyle:s,direction:c,prefixCls:r,wrapClassName:m,rootPrefixCls:g,bodyStyle:b,closable:h=!1,closeIcon:f,modalRender:x,focusTriggerAfterClose:C,onConfirm:v,styles:P}=e,p=`${r}-confirm`,E=e.width||416,$=e.style||{},S=e.mask===void 0?!0:e.mask,j=e.maskClosable===void 0?!1:e.maskClosable,T=N(p,`${p}-${e.type}`,{[`${p}-rtl`]:c==="rtl"},e.className),[,A]=Ot(),M=a.useMemo(()=>o!==void 0?o:A.zIndexPopupBase+Et,[o,A]);return a.createElement(_e,{prefixCls:r,className:T,wrapClassName:N({[`${p}-centered`]:!!e.centered},m),onCancel:()=>{t==null||t({triggerCancel:!0}),v==null||v(!1)},open:l,title:"",footer:null,transitionName:ee(g||"","zoom",e.transitionName),maskTransitionName:ee(g||"","fade",e.maskTransitionName),mask:S,maskClosable:j,style:$,styles:Object.assign({body:b,mask:s},P),width:E,zIndex:M,afterClose:n,keyboard:i,centered:u,getContainer:d,closable:h,closeIcon:f,modalRender:x,focusTriggerAfterClose:C},a.createElement(We,Object.assign({},e,{confirmPrefixCls:p})))},Ve=e=>{const{rootPrefixCls:t,iconPrefixCls:o,direction:n,theme:l}=e;return a.createElement(Ne,{prefixCls:t,iconPrefixCls:o,direction:n,theme:l},a.createElement(Qt,Object.assign({},e)))},X=[];let Ge="";function qe(){return Ge}const Zt=e=>{var t,o;const{prefixCls:n,getContainer:l,direction:i}=e,u=Ee(),d=a.useContext(te),s=qe()||d.getPrefixCls(),c=n||`${s}-modal`;let r=l;return r===!1&&(r=void 0),y.createElement(Ve,Object.assign({},e,{rootPrefixCls:s,prefixCls:c,iconPrefixCls:d.iconPrefixCls,theme:d.theme,direction:i??d.direction,locale:(o=(t=d.locale)===null||t===void 0?void 0:t.Modal)!==null&&o!==void 0?o:u,getContainer:r}))};function Y(e){const t=Pt(),o=document.createDocumentFragment();let n=Object.assign(Object.assign({},e),{close:d,open:!0}),l;function i(){for(var c,r=arguments.length,m=new Array(r),g=0;g<r;g++)m[g]=arguments[g];if(m.some(f=>f==null?void 0:f.triggerCancel)){var h;(c=e.onCancel)===null||c===void 0||(h=c).call.apply(h,[e,()=>{}].concat(W(m.slice(1))))}for(let f=0;f<X.length;f++)if(X[f]===d){X.splice(f,1);break}wt(o)}function u(c){clearTimeout(l),l=setTimeout(()=>{const r=t.getPrefixCls(void 0,qe()),m=t.getIconPrefixCls(),g=t.getTheme(),b=y.createElement(Zt,Object.assign({},c));Nt(y.createElement(Ne,{prefixCls:r,iconPrefixCls:m,theme:g},t.holderRender?t.holderRender(b):b),o)})}function d(){for(var c=arguments.length,r=new Array(c),m=0;m<c;m++)r[m]=arguments[m];n=Object.assign(Object.assign({},n),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),i.apply(this,r)}}),n.visible&&delete n.visible,u(n)}function s(c){typeof c=="function"?n=c(n):n=Object.assign(Object.assign({},n),c),u(n)}return u(n),X.push(d),{destroy:d,update:s}}function Ue(e){return Object.assign(Object.assign({},e),{type:"warning"})}function Xe(e){return Object.assign(Object.assign({},e),{type:"info"})}function Ke(e){return Object.assign(Object.assign({},e),{type:"success"})}function Qe(e){return Object.assign(Object.assign({},e),{type:"error"})}function Ze(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function Yt(e){let{rootPrefixCls:t}=e;Ge=t}var Jt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const kt=(e,t)=>{var o,{afterClose:n,config:l}=e,i=Jt(e,["afterClose","config"]);const[u,d]=a.useState(!0),[s,c]=a.useState(l),{direction:r,getPrefixCls:m}=a.useContext(te),g=m("modal"),b=m(),h=()=>{var v;n(),(v=s.afterClose)===null||v===void 0||v.call(s)},f=function(){var v;d(!1);for(var P=arguments.length,p=new Array(P),E=0;E<P;E++)p[E]=arguments[E];if(p.some(j=>j==null?void 0:j.triggerCancel)){var S;(v=s.onCancel)===null||v===void 0||(S=v).call.apply(S,[s,()=>{}].concat(W(p.slice(1))))}};a.useImperativeHandle(t,()=>({destroy:f,update:v=>{c(P=>Object.assign(Object.assign({},P),v))}}));const x=(o=s.okCancel)!==null&&o!==void 0?o:s.type==="confirm",[C]=se("Modal",Tt.Modal);return a.createElement(Ve,Object.assign({prefixCls:g,rootPrefixCls:b},s,{close:f,open:u,afterClose:h,okText:s.okText||(x?C==null?void 0:C.okText:C==null?void 0:C.justOkText),direction:s.direction||r,cancelText:s.cancelText||(C==null?void 0:C.cancelText)},i))},en=a.forwardRef(kt);let $e=0;const tn=a.memo(a.forwardRef((e,t)=>{const[o,n]=Mt();return a.useImperativeHandle(t,()=>({patchElement:n}),[]),a.createElement(a.Fragment,null,o)}));function nn(){const e=a.useRef(null),[t,o]=a.useState([]);a.useEffect(()=>{t.length&&(W(t).forEach(u=>{u()}),o([]))},[t]);const n=a.useCallback(i=>function(d){var s;$e+=1;const c=a.createRef();let r;const m=new Promise(x=>{r=x});let g=!1,b;const h=a.createElement(en,{key:`modal-${$e}`,config:i(d),ref:c,afterClose:()=>{b==null||b()},isSilent:()=>g,onConfirm:x=>{r(x)}});return b=(s=e.current)===null||s===void 0?void 0:s.patchElement(h),b&&X.push(b),{destroy:()=>{function x(){var C;(C=c.current)===null||C===void 0||C.destroy()}c.current?x():o(C=>[].concat(W(C),[x]))},update:x=>{function C(){var v;(v=c.current)===null||v===void 0||v.update(x)}c.current?C():o(v=>[].concat(W(v),[C]))},then:x=>(g=!0,m.then(x))}},[]);return[a.useMemo(()=>({info:n(Xe),success:n(Ke),error:n(Qe),warning:n(Ue),confirm:n(Ze)}),[]),a.createElement(tn,{key:"modal-holder",ref:e})]}var on=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const an=e=>{const{prefixCls:t,className:o,closeIcon:n,closable:l,type:i,title:u,children:d,footer:s}=e,c=on(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:r}=a.useContext(te),m=r(),g=t||r("modal"),b=we(m),[h,f,x]=De(g,b),C=`${g}-confirm`;let v={};return i?v={closable:l??!1,title:"",footer:"",children:a.createElement(We,Object.assign({},e,{prefixCls:g,confirmPrefixCls:C,rootPrefixCls:m,content:d}))}:v={closable:l??!0,title:u,footer:s!==null&&a.createElement(Le,Object.assign({},e)),children:d},h(a.createElement(Be,Object.assign({prefixCls:g,className:N(f,`${g}-pure-panel`,i&&C,i&&`${C}-${i}`,o,x,b)},c,{closeIcon:He(g,n),closable:l},v)))},ln=Bt(an);function Ye(e){return Y(Ue(e))}const L=_e;L.useModal=nn;L.info=function(t){return Y(Xe(t))};L.success=function(t){return Y(Ke(t))};L.error=function(t){return Y(Qe(t))};L.warning=Ye;L.warn=Ye;L.confirm=function(t){return Y(Ze(t))};L.destroyAll=function(){for(;X.length;){const t=X.pop();t&&t()}};L.config=Yt;L._InternalPanelDoNotUseOrYouWillBeFired=ln;export{ze as D,L as M,_t as g};
