import{r as n,E as xe,K as ue,D as qt,R as Z,bJ as Gt,m as re,v as T,o as fe,bv as Yt,n as F,q as P,a_ as Wn,B as Xt,s as O,y as Me,by as Bn,A as Ye,C as Jt,bU as Hn,be as jn,bf as qn,bg as Gn,bi as Yn,$ as Zt,Y as Xn,b6 as Jn,z as Zn,w as Qn,O as er}from"./index-DlI1B2Q-.js";import{F as ke}from"./Overflow-IUDK7h4x.js";const qr=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}});var tr=ue.ESC,nr=ue.TAB;function rr(e){var a=e.visible,r=e.triggerRef,o=e.onVisibleChange,t=e.autoFocus,l=e.overlayRef,i=n.useRef(!1),u=function(){if(a){var s,f;(s=r.current)===null||s===void 0||(f=s.focus)===null||f===void 0||f.call(s),o==null||o(!1)}},v=function(){var s;return(s=l.current)!==null&&s!==void 0&&s.focus?(l.current.focus(),i.current=!0,!0):!1},c=function(s){switch(s.keyCode){case tr:u();break;case nr:{var f=!1;i.current||(f=v()),f?s.preventDefault():u();break}}};n.useEffect(function(){return a?(window.addEventListener("keydown",c),t&&xe(v,3),function(){window.removeEventListener("keydown",c),i.current=!1}):function(){i.current=!1}},[a])}var ar=n.forwardRef(function(e,a){var r=e.overlay,o=e.arrow,t=e.prefixCls,l=n.useMemo(function(){var u;return typeof r=="function"?u=r():u=r,u},[r]),i=qt(a,l==null?void 0:l.ref);return Z.createElement(Z.Fragment,null,o&&Z.createElement("div",{className:"".concat(t,"-arrow")}),Z.cloneElement(l,{ref:Gt(l)?i:void 0}))}),Ie={adjustX:1,adjustY:1},Se=[0,0],ir={topLeft:{points:["bl","tl"],overflow:Ie,offset:[0,-4],targetOffset:Se},top:{points:["bc","tc"],overflow:Ie,offset:[0,-4],targetOffset:Se},topRight:{points:["br","tr"],overflow:Ie,offset:[0,-4],targetOffset:Se},bottomLeft:{points:["tl","bl"],overflow:Ie,offset:[0,4],targetOffset:Se},bottom:{points:["tc","bc"],overflow:Ie,offset:[0,4],targetOffset:Se},bottomRight:{points:["tr","br"],overflow:Ie,offset:[0,4],targetOffset:Se}},or=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function lr(e,a){var r,o=e.arrow,t=o===void 0?!1:o,l=e.prefixCls,i=l===void 0?"rc-dropdown":l,u=e.transitionName,v=e.animation,c=e.align,d=e.placement,s=d===void 0?"bottomLeft":d,f=e.placements,C=f===void 0?ir:f,m=e.getPopupContainer,w=e.showAction,S=e.hideAction,y=e.overlayClassName,x=e.overlayStyle,g=e.visible,p=e.trigger,b=p===void 0?["hover"]:p,h=e.autoFocus,M=e.overlay,K=e.children,I=e.onVisibleChange,U=re(e,or),$=Z.useState(),_=T($,2),B=_[0],V=_[1],H="visible"in e?g:B,Y=Z.useRef(null),A=Z.useRef(null),j=Z.useRef(null);Z.useImperativeHandle(a,function(){return Y.current});var q=function(D){V(D),I==null||I(D)};rr({visible:H,triggerRef:j,onVisibleChange:q,autoFocus:h,overlayRef:A});var Q=function(D){var te=e.onOverlayClick;V(!1),te&&te(D)},ae=function(){return Z.createElement(ar,{ref:A,overlay:M,prefixCls:i,arrow:t})},ie=function(){return typeof M=="function"?ae:ae()},ce=function(){var D=e.minOverlayWidthMatchTrigger,te=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?D:!te},ve=function(){var D=e.openClassName;return D!==void 0?D:"".concat(i,"-open")},W=Z.cloneElement(K,{className:fe((r=K.props)===null||r===void 0?void 0:r.className,H&&ve()),ref:Gt(K)?qt(j,K.ref):void 0}),k=S;return!k&&b.indexOf("contextMenu")!==-1&&(k=["click"]),Z.createElement(Yt,F({builtinPlacements:C},U,{prefixCls:i,ref:Y,popupClassName:fe(y,P({},"".concat(i,"-show-arrow"),t)),popupStyle:x,action:b,showAction:w,hideAction:k,popupPlacement:s,popupAlign:c,popupTransitionName:u,popupAnimation:v,popupVisible:H,stretch:ce()?"minWidth":"",popup:ie(),onPopupVisibleChange:q,onPopupClick:Q,getPopupContainer:m}),W)}const Gr=Z.forwardRef(lr);var Qt=n.createContext(null);function en(e,a){return e===void 0?null:"".concat(e,"-").concat(a)}function tn(e){var a=n.useContext(Qt);return en(a,e)}var ur=["children","locked"],le=n.createContext(null);function sr(e,a){var r=O({},e);return Object.keys(a).forEach(function(o){var t=a[o];t!==void 0&&(r[o]=t)}),r}function De(e){var a=e.children,r=e.locked,o=re(e,ur),t=n.useContext(le),l=Wn(function(){return sr(t,o)},[t,o],function(i,u){return!r&&(i[0]!==u[0]||!Xt(i[1],u[1],!0))});return n.createElement(le.Provider,{value:l},a)}var cr=[],nn=n.createContext(null);function Qe(){return n.useContext(nn)}var rn=n.createContext(cr);function Le(e){var a=n.useContext(rn);return n.useMemo(function(){return e!==void 0?[].concat(Me(a),[e]):a},[a,e])}var an=n.createContext(null),bt=n.createContext({});function zt(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Bn(e)){var r=e.nodeName.toLowerCase(),o=["input","select","textarea","button"].includes(r)||e.isContentEditable||r==="a"&&!!e.getAttribute("href"),t=e.getAttribute("tabindex"),l=Number(t),i=null;return t&&!Number.isNaN(l)?i=l:o&&i===null&&(i=0),o&&e.disabled&&(i=null),i!==null&&(i>=0||a&&i<0)}return!1}function vr(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=Me(e.querySelectorAll("*")).filter(function(o){return zt(o,a)});return zt(e,a)&&r.unshift(e),r}var dt=ue.LEFT,mt=ue.RIGHT,pt=ue.UP,Xe=ue.DOWN,Je=ue.ENTER,on=ue.ESC,Oe=ue.HOME,$e=ue.END,Ut=[pt,Xe,dt,mt];function fr(e,a,r,o){var t,l,i,u,v="prev",c="next",d="children",s="parent";if(e==="inline"&&o===Je)return{inlineTrigger:!0};var f=(t={},P(t,pt,v),P(t,Xe,c),t),C=(l={},P(l,dt,r?c:v),P(l,mt,r?v:c),P(l,Xe,d),P(l,Je,d),l),m=(i={},P(i,pt,v),P(i,Xe,c),P(i,Je,d),P(i,on,s),P(i,dt,r?d:s),P(i,mt,r?s:d),i),w={inline:f,horizontal:C,vertical:m,inlineSub:f,horizontalSub:m,verticalSub:m},S=(u=w["".concat(e).concat(a?"":"Sub")])===null||u===void 0?void 0:u[o];switch(S){case v:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case s:return{offset:-1,sibling:!1};case d:return{offset:1,sibling:!1};default:return null}}function dr(e){for(var a=e;a;){if(a.getAttribute("data-menu-list"))return a;a=a.parentElement}return null}function mr(e,a){for(var r=e||document.activeElement;r;){if(a.has(r))return r;r=r.parentElement}return null}function yt(e,a){var r=vr(e,!0);return r.filter(function(o){return a.has(o)})}function Wt(e,a,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var t=yt(e,a),l=t.length,i=t.findIndex(function(u){return r===u});return o<0?i===-1?i=l-1:i-=1:o>0&&(i+=1),i=(i+l)%l,t[i]}var gt=function(a,r){var o=new Set,t=new Map,l=new Map;return a.forEach(function(i){var u=document.querySelector("[data-menu-id='".concat(en(r,i),"']"));u&&(o.add(u),l.set(u,i),t.set(i,u))}),{elements:o,key2element:t,element2key:l}};function pr(e,a,r,o,t,l,i,u,v,c){var d=n.useRef(),s=n.useRef();s.current=a;var f=function(){xe.cancel(d.current)};return n.useEffect(function(){return function(){f()}},[]),function(C){var m=C.which;if([].concat(Ut,[Je,on,Oe,$e]).includes(m)){var w=l(),S=gt(w,o),y=S,x=y.elements,g=y.key2element,p=y.element2key,b=g.get(a),h=mr(b,x),M=p.get(h),K=fr(e,i(M,!0).length===1,r,m);if(!K&&m!==Oe&&m!==$e)return;(Ut.includes(m)||[Oe,$e].includes(m))&&C.preventDefault();var I=function(A){if(A){var j=A,q=A.querySelector("a");q!=null&&q.getAttribute("href")&&(j=q);var Q=p.get(A);u(Q),f(),d.current=xe(function(){s.current===Q&&j.focus()})}};if([Oe,$e].includes(m)||K.sibling||!h){var U;!h||e==="inline"?U=t.current:U=dr(h);var $,_=yt(U,x);m===Oe?$=_[0]:m===$e?$=_[_.length-1]:$=Wt(U,x,h,K.offset),I($)}else if(K.inlineTrigger)v(M);else if(K.offset>0)v(M,!0),f(),d.current=xe(function(){S=gt(w,o);var Y=h.getAttribute("aria-controls"),A=document.getElementById(Y),j=Wt(A,S.elements);I(j)},5);else if(K.offset<0){var B=i(M,!0),V=B[B.length-2],H=g.get(V);v(V,!1),I(H)}}c==null||c(C)}}function gr(e){Promise.resolve().then(e)}var Mt="__RC_UTIL_PATH_SPLIT__",Bt=function(a){return a.join(Mt)},hr=function(a){return a.split(Mt)},ht="rc-menu-more";function Cr(){var e=n.useState({}),a=T(e,2),r=a[1],o=n.useRef(new Map),t=n.useRef(new Map),l=n.useState([]),i=T(l,2),u=i[0],v=i[1],c=n.useRef(0),d=n.useRef(!1),s=function(){d.current||r({})},f=n.useCallback(function(g,p){var b=Bt(p);t.current.set(b,g),o.current.set(g,b),c.current+=1;var h=c.current;gr(function(){h===c.current&&s()})},[]),C=n.useCallback(function(g,p){var b=Bt(p);t.current.delete(b),o.current.delete(g)},[]),m=n.useCallback(function(g){v(g)},[]),w=n.useCallback(function(g,p){var b=o.current.get(g)||"",h=hr(b);return p&&u.includes(h[0])&&h.unshift(ht),h},[u]),S=n.useCallback(function(g,p){return g.filter(function(b){return b!==void 0}).some(function(b){var h=w(b,!0);return h.includes(p)})},[w]),y=function(){var p=Me(o.current.keys());return u.length&&p.push(ht),p},x=n.useCallback(function(g){var p="".concat(o.current.get(g)).concat(Mt),b=new Set;return Me(t.current.keys()).forEach(function(h){h.startsWith(p)&&b.add(t.current.get(h))}),b},[]);return n.useEffect(function(){return function(){d.current=!0}},[]),{registerPath:f,unregisterPath:C,refreshOverflowKeys:m,isSubPathKey:S,getKeyPath:w,getKeys:y,getSubPathKeys:x}}function Ae(e){var a=n.useRef(e);a.current=e;var r=n.useCallback(function(){for(var o,t=arguments.length,l=new Array(t),i=0;i<t;i++)l[i]=arguments[i];return(o=a.current)===null||o===void 0?void 0:o.call.apply(o,[a].concat(l))},[]);return e?r:void 0}var br=Math.random().toFixed(5).toString().slice(2),Ht=0;function yr(e){var a=Ye(e,{value:e}),r=T(a,2),o=r[0],t=r[1];return n.useEffect(function(){Ht+=1;var l="".concat(br,"-").concat(Ht);t("rc-menu-uuid-".concat(l))},[]),o}function ln(e,a,r,o){var t=n.useContext(le),l=t.activeKey,i=t.onActive,u=t.onInactive,v={active:l===e};return a||(v.onMouseEnter=function(c){r==null||r({key:e,domEvent:c}),i(e)},v.onMouseLeave=function(c){o==null||o({key:e,domEvent:c}),u(e)}),v}function un(e){var a=n.useContext(le),r=a.mode,o=a.rtl,t=a.inlineIndent;if(r!=="inline")return null;var l=e;return o?{paddingRight:l*t}:{paddingLeft:l*t}}function sn(e){var a=e.icon,r=e.props,o=e.children,t;return a===null||a===!1?null:(typeof a=="function"?t=n.createElement(a,O({},r)):typeof a!="boolean"&&(t=a),t||o||null)}var Mr=["item"];function Ze(e){var a=e.item,r=re(e,Mr);return Object.defineProperty(r,"item",{get:function(){return Jt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),a}}),r}var Rr=["title","attribute","elementRef"],Ir=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Sr=["active"],xr=function(e){jn(r,e);var a=qn(r);function r(){return Gn(this,r),a.apply(this,arguments)}return Yn(r,[{key:"render",value:function(){var t=this.props,l=t.title,i=t.attribute,u=t.elementRef,v=re(t,Rr),c=Zt(v,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Jt(!i,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(ke.Item,F({},i,{title:typeof l=="string"?l:void 0},c,{ref:u}))}}]),r}(n.Component),Er=n.forwardRef(function(e,a){var r,o=e.style,t=e.className,l=e.eventKey;e.warnKey;var i=e.disabled,u=e.itemIcon,v=e.children,c=e.role,d=e.onMouseEnter,s=e.onMouseLeave,f=e.onClick,C=e.onKeyDown,m=e.onFocus,w=re(e,Ir),S=tn(l),y=n.useContext(le),x=y.prefixCls,g=y.onItemClick,p=y.disabled,b=y.overflowDisabled,h=y.itemIcon,M=y.selectedKeys,K=y.onActive,I=n.useContext(bt),U=I._internalRenderMenuItem,$="".concat(x,"-item"),_=n.useRef(),B=n.useRef(),V=p||i,H=Hn(a,B),Y=Le(l),A=function(G){return{key:l,keyPath:Me(Y).reverse(),item:_.current,domEvent:G}},j=u||h,q=ln(l,V,d,s),Q=q.active,ae=re(q,Sr),ie=M.includes(l),ce=un(Y.length),ve=function(G){if(!V){var oe=A(G);f==null||f(Ze(oe)),g(oe)}},W=function(G){if(C==null||C(G),G.which===ue.ENTER){var oe=A(G);f==null||f(Ze(oe)),g(oe)}},k=function(G){K(l),m==null||m(G)},ee={};e.role==="option"&&(ee["aria-selected"]=ie);var D=n.createElement(xr,F({ref:_,elementRef:H,role:c===null?"none":c||"menuitem",tabIndex:i?null:-1,"data-menu-id":b&&S?null:S},w,ae,ee,{component:"li","aria-disabled":i,style:O(O({},ce),o),className:fe($,(r={},P(r,"".concat($,"-active"),Q),P(r,"".concat($,"-selected"),ie),P(r,"".concat($,"-disabled"),V),r),t),onClick:ve,onKeyDown:W,onFocus:k}),v,n.createElement(sn,{props:O(O({},e),{},{isSelected:ie}),icon:j}));return U&&(D=U(D,e,{selected:ie})),D});function wr(e,a){var r=e.eventKey,o=Qe(),t=Le(r);return n.useEffect(function(){if(o)return o.registerPath(r,t),function(){o.unregisterPath(r,t)}},[t]),o?null:n.createElement(Er,F({},e,{ref:a}))}const Rt=n.forwardRef(wr);var Pr=["className","children"],Nr=function(a,r){var o=a.className,t=a.children,l=re(a,Pr),i=n.useContext(le),u=i.prefixCls,v=i.mode,c=i.rtl;return n.createElement("ul",F({className:fe(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(v==="inline"?"inline":"vertical"),o),role:"menu"},l,{"data-menu-list":!0,ref:r}),t)},It=n.forwardRef(Nr);It.displayName="SubMenuList";function St(e,a){return Xn(e).map(function(r,o){if(n.isValidElement(r)){var t,l,i=r.key,u=(t=(l=r.props)===null||l===void 0?void 0:l.eventKey)!==null&&t!==void 0?t:i,v=u==null;v&&(u="tmp_key-".concat([].concat(Me(a),[o]).join("-")));var c={key:u,eventKey:u};return n.cloneElement(r,c)}return r})}var z={adjustX:1,adjustY:1},_r={topLeft:{points:["bl","tl"],overflow:z},topRight:{points:["br","tr"],overflow:z},bottomLeft:{points:["tl","bl"],overflow:z},bottomRight:{points:["tr","br"],overflow:z},leftTop:{points:["tr","tl"],overflow:z},leftBottom:{points:["br","bl"],overflow:z},rightTop:{points:["tl","tr"],overflow:z},rightBottom:{points:["bl","br"],overflow:z}},Kr={topLeft:{points:["bl","tl"],overflow:z},topRight:{points:["br","tr"],overflow:z},bottomLeft:{points:["tl","bl"],overflow:z},bottomRight:{points:["tr","br"],overflow:z},rightTop:{points:["tr","tl"],overflow:z},rightBottom:{points:["br","bl"],overflow:z},leftTop:{points:["tl","tr"],overflow:z},leftBottom:{points:["bl","br"],overflow:z}};function cn(e,a,r){if(a)return a;if(r)return r[e]||r.other}var Or={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function $r(e){var a=e.prefixCls,r=e.visible,o=e.children,t=e.popup,l=e.popupStyle,i=e.popupClassName,u=e.popupOffset,v=e.disabled,c=e.mode,d=e.onVisibleChange,s=n.useContext(le),f=s.getPopupContainer,C=s.rtl,m=s.subMenuOpenDelay,w=s.subMenuCloseDelay,S=s.builtinPlacements,y=s.triggerSubMenuAction,x=s.forceSubMenuRender,g=s.rootClassName,p=s.motion,b=s.defaultMotions,h=n.useState(!1),M=T(h,2),K=M[0],I=M[1],U=C?O(O({},Kr),S):O(O({},_r),S),$=Or[c],_=cn(c,p,b),B=n.useRef(_);c!=="inline"&&(B.current=_);var V=O(O({},B.current),{},{leavedClassName:"".concat(a,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=xe(function(){I(r)}),function(){xe.cancel(H.current)}},[r]),n.createElement(Yt,{prefixCls:a,popupClassName:fe("".concat(a,"-popup"),P({},"".concat(a,"-rtl"),C),i,g),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:f,builtinPlacements:U,popupPlacement:$,popupVisible:K,popup:t,popupStyle:l,popupAlign:u&&{offset:u},action:v?[]:[y],mouseEnterDelay:m,mouseLeaveDelay:w,onPopupVisibleChange:d,forceRender:x,popupMotion:V,fresh:!0},o)}function Ar(e){var a=e.id,r=e.open,o=e.keyPath,t=e.children,l="inline",i=n.useContext(le),u=i.prefixCls,v=i.forceSubMenuRender,c=i.motion,d=i.defaultMotions,s=i.mode,f=n.useRef(!1);f.current=s===l;var C=n.useState(!f.current),m=T(C,2),w=m[0],S=m[1],y=f.current?r:!1;n.useEffect(function(){f.current&&S(!1)},[s]);var x=O({},cn(l,c,d));o.length>1&&(x.motionAppear=!1);var g=x.onVisibleChanged;return x.onVisibleChanged=function(p){return!f.current&&!p&&S(!0),g==null?void 0:g(p)},w?null:n.createElement(De,{mode:l,locked:!f.current},n.createElement(Jn,F({visible:y},x,{forceRender:v,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(p){var b=p.className,h=p.style;return n.createElement(It,{id:a,className:b,style:h},t)}))}var kr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Dr=["active"],Lr=n.forwardRef(function(e,a){var r,o=e.style,t=e.className,l=e.title,i=e.eventKey;e.warnKey;var u=e.disabled,v=e.internalPopupClose,c=e.children,d=e.itemIcon,s=e.expandIcon,f=e.popupClassName,C=e.popupOffset,m=e.popupStyle,w=e.onClick,S=e.onMouseEnter,y=e.onMouseLeave,x=e.onTitleClick,g=e.onTitleMouseEnter,p=e.onTitleMouseLeave,b=re(e,kr),h=tn(i),M=n.useContext(le),K=M.prefixCls,I=M.mode,U=M.openKeys,$=M.disabled,_=M.overflowDisabled,B=M.activeKey,V=M.selectedKeys,H=M.itemIcon,Y=M.expandIcon,A=M.onItemClick,j=M.onOpenChange,q=M.onActive,Q=n.useContext(bt),ae=Q._internalRenderSubMenuItem,ie=n.useContext(an),ce=ie.isSubPathKey,ve=Le(),W="".concat(K,"-submenu"),k=$||u,ee=n.useRef(),D=n.useRef(),te=d??H,G=s??Y,oe=U.includes(i),de=!_&&oe,Te=ce(V,i),Fe=ln(i,k,g,p),ge=Fe.active,Ee=re(Fe,Dr),tt=n.useState(!1),we=T(tt,2),Pe=we[0],Ve=we[1],ze=function(ne){k||Ve(ne)},nt=function(ne){ze(!0),S==null||S({key:i,domEvent:ne})},Ue=function(ne){ze(!1),y==null||y({key:i,domEvent:ne})},se=n.useMemo(function(){return ge||(I!=="inline"?Pe||ce([B],i):!1)},[I,ge,B,Pe,i,ce]),rt=un(ve.length),at=function(ne){k||(x==null||x({key:i,domEvent:ne}),I==="inline"&&j(i,!oe))},We=Ae(function(L){w==null||w(Ze(L)),A(L)}),Be=function(ne){I!=="inline"&&j(i,ne)},it=function(){q(i)},me=h&&"".concat(h,"-popup"),he=n.createElement("div",F({role:"menuitem",style:rt,className:"".concat(W,"-title"),tabIndex:k?null:-1,ref:ee,title:typeof l=="string"?l:null,"data-menu-id":_&&h?null:h,"aria-expanded":de,"aria-haspopup":!0,"aria-controls":me,"aria-disabled":k,onClick:at,onFocus:it},Ee),l,n.createElement(sn,{icon:I!=="horizontal"?G:void 0,props:O(O({},e),{},{isOpen:de,isSubMenu:!0})},n.createElement("i",{className:"".concat(W,"-arrow")}))),Ce=n.useRef(I);if(I!=="inline"&&ve.length>1?Ce.current="vertical":Ce.current=I,!_){var Ne=Ce.current;he=n.createElement($r,{mode:Ne,prefixCls:W,visible:!v&&de&&I!=="inline",popupClassName:f,popupOffset:C,popupStyle:m,popup:n.createElement(De,{mode:Ne==="horizontal"?"vertical":Ne},n.createElement(It,{id:me,ref:D},c)),disabled:k,onVisibleChange:Be},he)}var Re=n.createElement(ke.Item,F({ref:a,role:"none"},b,{component:"li",style:o,className:fe(W,"".concat(W,"-").concat(I),t,(r={},P(r,"".concat(W,"-open"),de),P(r,"".concat(W,"-active"),se),P(r,"".concat(W,"-selected"),Te),P(r,"".concat(W,"-disabled"),k),r)),onMouseEnter:nt,onMouseLeave:Ue}),he,!_&&n.createElement(Ar,{id:me,open:de,keyPath:ve},c));return ae&&(Re=ae(Re,e,{selected:Te,active:se,open:de,disabled:k})),n.createElement(De,{onItemClick:We,mode:I==="horizontal"?"vertical":I,itemIcon:te,expandIcon:G},Re)}),xt=n.forwardRef(function(e,a){var r=e.eventKey,o=e.children,t=Le(r),l=St(o,t),i=Qe();n.useEffect(function(){if(i)return i.registerPath(r,t),function(){i.unregisterPath(r,t)}},[t]);var u;return i?u=l:u=n.createElement(Lr,F({ref:a},e),l),n.createElement(rn.Provider,{value:t},u)});function vn(e){var a=e.className,r=e.style,o=n.useContext(le),t=o.prefixCls,l=Qe();return l?null:n.createElement("li",{role:"separator",className:fe("".concat(t,"-item-divider"),a),style:r})}var Tr=["className","title","eventKey","children"],Fr=n.forwardRef(function(e,a){var r=e.className,o=e.title;e.eventKey;var t=e.children,l=re(e,Tr),i=n.useContext(le),u=i.prefixCls,v="".concat(u,"-item-group");return n.createElement("li",F({ref:a,role:"presentation"},l,{onClick:function(d){return d.stopPropagation()},className:fe(v,r)}),n.createElement("div",{role:"presentation",className:"".concat(v,"-title"),title:typeof o=="string"?o:void 0},o),n.createElement("ul",{role:"group",className:"".concat(v,"-list")},t))}),fn=n.forwardRef(function(e,a){var r=e.eventKey,o=e.children,t=Le(r),l=St(o,t),i=Qe();return i?l:n.createElement(Fr,F({ref:a},Zt(e,["warnKey"])),l)}),Vr=["label","children","key","type"];function Ct(e,a){var r=a.item,o=a.group,t=a.submenu,l=a.divider;return(e||[]).map(function(i,u){if(i&&Zn(i)==="object"){var v=i,c=v.label,d=v.children,s=v.key,f=v.type,C=re(v,Vr),m=s??"tmp-".concat(u);return d||f==="group"?f==="group"?n.createElement(o,F({key:m},C,{title:c}),Ct(d,a)):n.createElement(t,F({key:m},C,{title:c}),Ct(d,a)):f==="divider"?n.createElement(l,F({key:m},C)):n.createElement(r,F({key:m},C),c)}return null}).filter(function(i){return i})}function jt(e,a,r,o){var t=e,l=O({divider:vn,item:Rt,group:fn,submenu:xt},o);return a&&(t=Ct(a,l)),St(t,r)}var zr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem","_internalComponents"],ye=[],Ur=n.forwardRef(function(e,a){var r,o,t=e,l=t.prefixCls,i=l===void 0?"rc-menu":l,u=t.rootClassName,v=t.style,c=t.className,d=t.tabIndex,s=d===void 0?0:d,f=t.items,C=t.children,m=t.direction,w=t.id,S=t.mode,y=S===void 0?"vertical":S,x=t.inlineCollapsed,g=t.disabled,p=t.disabledOverflow,b=t.subMenuOpenDelay,h=b===void 0?.1:b,M=t.subMenuCloseDelay,K=M===void 0?.1:M,I=t.forceSubMenuRender,U=t.defaultOpenKeys,$=t.openKeys,_=t.activeKey,B=t.defaultActiveFirst,V=t.selectable,H=V===void 0?!0:V,Y=t.multiple,A=Y===void 0?!1:Y,j=t.defaultSelectedKeys,q=t.selectedKeys,Q=t.onSelect,ae=t.onDeselect,ie=t.inlineIndent,ce=ie===void 0?24:ie,ve=t.motion,W=t.defaultMotions,k=t.triggerSubMenuAction,ee=k===void 0?"hover":k,D=t.builtinPlacements,te=t.itemIcon,G=t.expandIcon,oe=t.overflowedIndicator,de=oe===void 0?"...":oe,Te=t.overflowedIndicatorPopupClassName,Fe=t.getPopupContainer,ge=t.onClick,Ee=t.onOpenChange,tt=t.onKeyDown;t.openAnimation,t.openTransitionName;var we=t._internalRenderMenuItem,Pe=t._internalRenderSubMenuItem,Ve=t._internalComponents,ze=re(t,zr),nt=n.useMemo(function(){return[jt(C,f,ye,Ve),jt(C,f,ye,{})]},[C,f,Ve]),Ue=T(nt,2),se=Ue[0],rt=Ue[1],at=n.useState(!1),We=T(at,2),Be=We[0],it=We[1],me=n.useRef(),he=yr(w),Ce=m==="rtl",Ne=Ye(U,{value:$,postState:function(R){return R||ye}}),Re=T(Ne,2),L=Re[0],ne=Re[1],ot=function(R){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function X(){ne(R),Ee==null||Ee(R)}E?Qn.flushSync(X):X()},dn=n.useState(L),Et=T(dn,2),mn=Et[0],pn=Et[1],lt=n.useRef(!1),gn=n.useMemo(function(){return(y==="inline"||y==="vertical")&&x?["vertical",x]:[y,!1]},[y,x]),wt=T(gn,2),He=wt[0],ut=wt[1],Pt=He==="inline",hn=n.useState(He),Nt=T(hn,2),pe=Nt[0],Cn=Nt[1],bn=n.useState(ut),_t=T(bn,2),yn=_t[0],Mn=_t[1];n.useEffect(function(){Cn(He),Mn(ut),lt.current&&(Pt?ne(mn):ot(ye))},[He,ut]);var Rn=n.useState(0),Kt=T(Rn,2),je=Kt[0],In=Kt[1],st=je>=se.length-1||pe!=="horizontal"||p;n.useEffect(function(){Pt&&pn(L)},[L]),n.useEffect(function(){return lt.current=!0,function(){lt.current=!1}},[]);var be=Cr(),Ot=be.registerPath,$t=be.unregisterPath,Sn=be.refreshOverflowKeys,At=be.isSubPathKey,xn=be.getKeyPath,kt=be.getKeys,En=be.getSubPathKeys,wn=n.useMemo(function(){return{registerPath:Ot,unregisterPath:$t}},[Ot,$t]),Pn=n.useMemo(function(){return{isSubPathKey:At}},[At]);n.useEffect(function(){Sn(st?ye:se.slice(je+1).map(function(N){return N.key}))},[je,st]);var Nn=Ye(_||B&&((r=se[0])===null||r===void 0?void 0:r.key),{value:_}),Dt=T(Nn,2),_e=Dt[0],ct=Dt[1],_n=Ae(function(N){ct(N)}),Kn=Ae(function(){ct(void 0)});n.useImperativeHandle(a,function(){return{list:me.current,focus:function(R){var E,X=kt(),J=gt(X,he),Ge=J.elements,vt=J.key2element,zn=J.element2key,Ft=yt(me.current,Ge),Vt=_e??(Ft[0]?zn.get(Ft[0]):(E=se.find(function(Un){return!Un.props.disabled}))===null||E===void 0?void 0:E.key),Ke=vt.get(Vt);if(Vt&&Ke){var ft;Ke==null||(ft=Ke.focus)===null||ft===void 0||ft.call(Ke,R)}}}});var On=Ye(j||[],{value:q,postState:function(R){return Array.isArray(R)?R:R==null?ye:[R]}}),Lt=T(On,2),qe=Lt[0],$n=Lt[1],An=function(R){if(H){var E=R.key,X=qe.includes(E),J;A?X?J=qe.filter(function(vt){return vt!==E}):J=[].concat(Me(qe),[E]):J=[E],$n(J);var Ge=O(O({},R),{},{selectedKeys:J});X?ae==null||ae(Ge):Q==null||Q(Ge)}!A&&L.length&&pe!=="inline"&&ot(ye)},kn=Ae(function(N){ge==null||ge(Ze(N)),An(N)}),Tt=Ae(function(N,R){var E=L.filter(function(J){return J!==N});if(R)E.push(N);else if(pe!=="inline"){var X=En(N);E=E.filter(function(J){return!X.has(J)})}Xt(L,E,!0)||ot(E,!0)}),Dn=function(R,E){var X=E??!L.includes(R);Tt(R,X)},Ln=pr(pe,_e,Ce,he,me,kt,xn,ct,Dn,tt);n.useEffect(function(){it(!0)},[]);var Tn=n.useMemo(function(){return{_internalRenderMenuItem:we,_internalRenderSubMenuItem:Pe}},[we,Pe]),Fn=pe!=="horizontal"||p?se:se.map(function(N,R){return n.createElement(De,{key:N.key,overflowDisabled:R>je},N)}),Vn=n.createElement(ke,F({id:w,ref:me,prefixCls:"".concat(i,"-overflow"),component:"ul",itemComponent:Rt,className:fe(i,"".concat(i,"-root"),"".concat(i,"-").concat(pe),c,(o={},P(o,"".concat(i,"-inline-collapsed"),yn),P(o,"".concat(i,"-rtl"),Ce),o),u),dir:m,style:v,role:"menu",tabIndex:s,data:Fn,renderRawItem:function(R){return R},renderRawRest:function(R){var E=R.length,X=E?se.slice(-E):null;return n.createElement(xt,{eventKey:ht,title:de,disabled:st,internalPopupClose:E===0,popupClassName:Te},X)},maxCount:pe!=="horizontal"||p?ke.INVALIDATE:ke.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(R){In(R)},onKeyDown:Ln},ze));return n.createElement(bt.Provider,{value:Tn},n.createElement(Qt.Provider,{value:he},n.createElement(De,{prefixCls:i,rootClassName:u,mode:pe,openKeys:L,rtl:Ce,disabled:g,motion:Be?ve:null,defaultMotions:Be?W:null,activeKey:_e,onActive:_n,onInactive:Kn,selectedKeys:qe,inlineIndent:ce,subMenuOpenDelay:h,subMenuCloseDelay:K,forceSubMenuRender:I,builtinPlacements:D,triggerSubMenuAction:ee,getPopupContainer:Fe,itemIcon:te,expandIcon:G,onItemClick:kn,onOpenChange:Tt},n.createElement(an.Provider,{value:Pn},Vn),n.createElement("div",{style:{display:"none"},"aria-hidden":!0},n.createElement(nn.Provider,{value:wn},rt)))))}),et=Ur;et.Item=Rt;et.SubMenu=xt;et.ItemGroup=fn;et.Divider=vn;var Wr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},Br=function(a,r){return n.createElement(er,F({},a,{ref:r,icon:Wr}))},Yr=n.forwardRef(Br);export{vn as D,et as E,Rt as M,Yr as R,xt as S,fn as a,Gr as b,qr as g,Le as u};
