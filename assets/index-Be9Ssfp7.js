import{G as K,J as Q,K as W,H as U,b0 as Y,r as a,C as _,z as T,bk as k,c4 as Z,y as ee,c5 as oe,c6 as re,c7 as te}from"./index-DlYMrpPW.js";import{u as le,p as H}from"./context-C-Rv8Q9P.js";import{W as ne}from"./compact-item-DVIPdewI.js";const ae=e=>{const{paddingXXS:t,lineWidth:l,tagPaddingHorizontal:o,componentCls:r,calc:c}=e,n=c(o).sub(l).equal(),u=c(t).sub(l).equal();return{[r]:Object.assign(Object.assign({},Q(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:n,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${W(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:u,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:n}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},I=e=>{const{lineWidth:t,fontSizeIcon:l,calc:o}=e,r=e.fontSizeSM;return U(e,{tagFontSize:r,tagLineHeight:W(o(e.lineHeightSM).mul(r).equal()),tagIconSize:o(l).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},P=e=>({defaultBg:new Y(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),M=K("Tag",e=>{const t=I(e);return ae(t)},P);var se=function(e,t){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(l[o[r]]=e[o[r]]);return l};const ce=a.forwardRef((e,t)=>{const{prefixCls:l,style:o,className:r,checked:c,onChange:n,onClick:u}=e,d=se(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:m,tag:g}=a.useContext(_),f=h=>{n==null||n(!c),u==null||u(h)},C=m("tag",l),[v,S,i]=M(C),$=T(C,`${C}-checkable`,{[`${C}-checkable-checked`]:c},g==null?void 0:g.className,r,S,i);return v(a.createElement("span",Object.assign({},d,{ref:t,style:Object.assign(Object.assign({},o),g==null?void 0:g.style),className:$,onClick:f})))}),ie=e=>Z(e,(t,l)=>{let{textColor:o,lightBorderColor:r,lightColor:c,darkColor:n}=l;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:o,background:c,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:n,borderColor:n},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),de=k(["Tag","preset"],e=>{const t=I(e);return ie(t)},P);function ge(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const y=(e,t,l)=>{const o=ge(l);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${l}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},ue=k(["Tag","status"],e=>{const t=I(e);return[y(t,"success","Success"),y(t,"processing","Info"),y(t,"error","Error"),y(t,"warning","Warning")]},P);var Ce=function(e,t){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(l[o[r]]=e[o[r]]);return l};const pe=a.forwardRef((e,t)=>{const{prefixCls:l,className:o,rootClassName:r,style:c,children:n,icon:u,color:d,onClose:m,bordered:g=!0,visible:f}=e,C=Ce(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:v,direction:S,tag:i}=a.useContext(_),[$,h]=a.useState(!0),V=ee(C,["closeIcon","closable"]);a.useEffect(()=>{f!==void 0&&h(f)},[f]);const N=oe(d),j=re(d),x=N||j,F=Object.assign(Object.assign({backgroundColor:d&&!x?d:void 0},i==null?void 0:i.style),c),s=v("tag",l),[L,R,q]=M(s),A=T(s,i==null?void 0:i.className,{[`${s}-${d}`]:x,[`${s}-has-color`]:d&&!x,[`${s}-hidden`]:!$,[`${s}-rtl`]:S==="rtl",[`${s}-borderless`]:!g},o,r,R,q),z=b=>{b.stopPropagation(),m==null||m(b),!b.defaultPrevented&&h(!1)},[,D]=le(H(e),H(i),{closable:!1,closeIconRender:b=>{const J=a.createElement("span",{className:`${s}-close-icon`,onClick:z},b);return te(b,J,p=>({onClick:B=>{var O;(O=p==null?void 0:p.onClick)===null||O===void 0||O.call(p,B),z(B)},className:T(p==null?void 0:p.className,`${s}-close-icon`)}))}}),X=typeof C.onClick=="function"||n&&n.type==="a",E=u||null,G=E?a.createElement(a.Fragment,null,E,n&&a.createElement("span",null,n)):n,w=a.createElement("span",Object.assign({},V,{ref:t,className:A,style:F}),G,D,N&&a.createElement(de,{key:"preset",prefixCls:s}),j&&a.createElement(ue,{key:"status",prefixCls:s}));return L(X?a.createElement(ne,{component:"Tag"},w):w)}),be=pe;be.CheckableTag=ce;export{be as T};
