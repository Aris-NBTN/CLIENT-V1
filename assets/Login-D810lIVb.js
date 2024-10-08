import{_ as fe,c as ie,b as X,d as ve,r as o,e as te,K as de,H as ne,f as m,g as ye,h as Ce,m as Ie,i as je,k as we,l as Ne,C as Te,n as ze,R as Ee,T as qe,o as Pe,a as He,q as Me,s as ae,v as Oe,j as r,w as Fe,S as _e,x as De,y as Le,z as me,A as k,B as Ae,D as We,t as le,E as ue,F as Be,G as oe}from"./index-Bd1JPvcl.js";import{L as Re}from"./Layout-CosjSAHI.js";import{I as Xe}from"./index-BASv7Qct.js";import{F as g}from"./index-Cwo-VUSW.js";import{I as E}from"./index-CWWA39Vx.js";import{B as V}from"./button-ufKoKsm6.js";import{T as _}from"./index-BoCxdkRm.js";import{D as he}from"./index-CEK7TYZA.js";import{R as Q}from"./index-DZOC5dJR.js";import{M as ge}from"./index-BT0Un0La.js";import{R as Ge}from"./CheckOutlined-BdTlGpy5.js";import{u as Ve}from"./index-DuyNhCpa.js";import{P as Ue}from"./progress-BJ18a4Vs.js";import"./EllipsisOutlined-D3RgMTin.js";import"./Overflow-DpT_j1eZ.js";import"./row-nnzDZOjk.js";import"./useLocale-BCPxCgGV.js";import"./compact-item-C1WbefM3.js";import"./TextArea-CbwmkXxT.js";import"./SearchOutlined-DaeuOrvR.js";import"./context-wqRSYxvZ.js";import"./PurePanel-Cbfo2Nq5.js";var Ke=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick","render"];function pe(e){return typeof e=="string"}function $e(e){var i,t=e.className,n=e.prefixCls,a=e.style,l=e.active,s=e.status,p=e.iconPrefix,c=e.icon;e.wrapperStyle;var d=e.stepNumber,b=e.disabled,y=e.description,N=e.title,v=e.subTitle,H=e.progressDot,j=e.stepIcon,D=e.tailContent,$=e.icons,C=e.stepIndex,I=e.onStepClick,q=e.onClick,L=e.render,A=fe(e,Ke),w=!!I&&!b,P={};w&&(P.role="button",P.tabIndex=0,P.onClick=function(S){q==null||q(S),I(C)},P.onKeyDown=function(S){var f=S.which;(f===de.ENTER||f===de.SPACE)&&I(C)});var M=function(){var f,h,W=ie("".concat(n,"-icon"),"".concat(p,"icon"),(f={},X(f,"".concat(p,"icon-").concat(c),c&&pe(c)),X(f,"".concat(p,"icon-check"),!c&&s==="finish"&&($&&!$.finish||!$)),X(f,"".concat(p,"icon-cross"),!c&&s==="error"&&($&&!$.error||!$)),f)),G=o.createElement("span",{className:"".concat(n,"-icon-dot")});return H?typeof H=="function"?h=o.createElement("span",{className:"".concat(n,"-icon")},H(G,{index:d-1,status:s,title:N,description:y})):h=o.createElement("span",{className:"".concat(n,"-icon")},G):c&&!pe(c)?h=o.createElement("span",{className:"".concat(n,"-icon")},c):$&&$.finish&&s==="finish"?h=o.createElement("span",{className:"".concat(n,"-icon")},$.finish):$&&$.error&&s==="error"?h=o.createElement("span",{className:"".concat(n,"-icon")},$.error):c||s==="finish"||s==="error"?h=o.createElement("span",{className:W}):h=o.createElement("span",{className:"".concat(n,"-icon")},d),j&&(h=j({index:d-1,status:s,title:N,description:y,node:h})),h},T=s||"wait",z=ie("".concat(n,"-item"),"".concat(n,"-item-").concat(T),t,(i={},X(i,"".concat(n,"-item-custom"),c),X(i,"".concat(n,"-item-active"),l),X(i,"".concat(n,"-item-disabled"),b===!0),i)),O=ve({},a),F=o.createElement("div",te({},A,{className:z,style:O}),o.createElement("div",te({onClick:q},P,{className:"".concat(n,"-item-container")}),o.createElement("div",{className:"".concat(n,"-item-tail")},D),o.createElement("div",{className:"".concat(n,"-item-icon")},M()),o.createElement("div",{className:"".concat(n,"-item-content")},o.createElement("div",{className:"".concat(n,"-item-title")},N,v&&o.createElement("div",{title:typeof v=="string"?v:void 0,className:"".concat(n,"-item-subtitle")},v)),y&&o.createElement("div",{className:"".concat(n,"-item-description")},y))));return L&&(F=L(F)||null),F}var Ye=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange","itemRender","items"];function se(e){var i,t=e.prefixCls,n=t===void 0?"rc-steps":t,a=e.style,l=a===void 0?{}:a,s=e.className;e.children;var p=e.direction,c=p===void 0?"horizontal":p,d=e.type,b=d===void 0?"default":d,y=e.labelPlacement,N=y===void 0?"horizontal":y,v=e.iconPrefix,H=v===void 0?"rc":v,j=e.status,D=j===void 0?"process":j,$=e.size,C=e.current,I=C===void 0?0:C,q=e.progressDot,L=q===void 0?!1:q,A=e.stepIcon,w=e.initial,P=w===void 0?0:w,M=e.icons,T=e.onChange,z=e.itemRender,O=e.items,F=O===void 0?[]:O,S=fe(e,Ye),f=b==="navigation",h=b==="inline",W=h||L,G=h?"horizontal":c,U=h?void 0:$,u=W?"vertical":N,x=ie(n,"".concat(n,"-").concat(G),s,(i={},X(i,"".concat(n,"-").concat(U),U),X(i,"".concat(n,"-label-").concat(u),G==="horizontal"),X(i,"".concat(n,"-dot"),!!W),X(i,"".concat(n,"-navigation"),f),X(i,"".concat(n,"-inline"),h),i)),B=function(Z){T&&I!==Z&&T(Z)},K=function(Z,ce){var R=ve({},Z),Y=P+ce;return D==="error"&&ce===I-1&&(R.className="".concat(n,"-next-error")),R.status||(Y===I?R.status=D:Y<I?R.status="finish":R.status="wait"),h&&(R.icon=void 0,R.subTitle=void 0),!R.render&&z&&(R.render=function(xe){return z(R,xe)}),ne.createElement($e,te({},R,{active:Y===I,stepNumber:Y+1,stepIndex:Y,key:Y,prefixCls:n,iconPrefix:H,wrapperStyle:l,progressDot:W,stepIcon:A,icons:M,onStepClick:T&&B}))};return ne.createElement("div",te({className:x,style:l},S),F.filter(function(re){return re}).map(K))}se.Step=$e;const Qe=e=>{const{componentCls:i,customIconTop:t,customIconSize:n,customIconFontSize:a}=e;return{[`${i}-item-custom`]:{[`> ${i}-item-container > ${i}-item-icon`]:{height:"auto",background:"none",border:0,[`> ${i}-icon`]:{top:t,width:n,height:n,fontSize:a,lineHeight:m(n)}}},[`&:not(${i}-vertical)`]:{[`${i}-item-custom`]:{[`${i}-item-icon`]:{width:"auto",background:"none"}}}}},Je=e=>{const{componentCls:i}=e,t=`${i}-item`;return{[`${i}-horizontal`]:{[`${t}-tail`]:{transform:"translateY(-50%)"}}}},Ze=e=>{const{componentCls:i,inlineDotSize:t,inlineTitleColor:n,inlineTailColor:a}=e,l=e.calc(e.paddingXS).add(e.lineWidth).equal(),s={[`${i}-item-container ${i}-item-content ${i}-item-title`]:{color:n}};return{[`&${i}-inline`]:{width:"auto",display:"inline-flex",[`${i}-item`]:{flex:"none","&-container":{padding:`${m(l)} ${m(e.paddingXXS)} 0`,margin:`0 ${m(e.calc(e.marginXXS).div(2).equal())}`,borderRadius:e.borderRadiusSM,cursor:"pointer",transition:`background-color ${e.motionDurationMid}`,"&:hover":{background:e.controlItemBgHover},"&[role='button']:hover":{opacity:1}},"&-icon":{width:t,height:t,marginInlineStart:`calc(50% - ${m(e.calc(t).div(2).equal())})`,[`> ${i}-icon`]:{top:0},[`${i}-icon-dot`]:{borderRadius:e.calc(e.fontSizeSM).div(4).equal(),"&::after":{display:"none"}}},"&-content":{width:"auto",marginTop:e.calc(e.marginXS).sub(e.lineWidth).equal()},"&-title":{color:n,fontSize:e.fontSizeSM,lineHeight:e.lineHeightSM,fontWeight:"normal",marginBottom:e.calc(e.marginXXS).div(2).equal()},"&-description":{display:"none"},"&-tail":{marginInlineStart:0,top:e.calc(t).div(2).add(l).equal(),transform:"translateY(-50%)","&:after":{width:"100%",height:e.lineWidth,borderRadius:0,marginInlineStart:0,background:a}},[`&:first-child ${i}-item-tail`]:{width:"50%",marginInlineStart:"50%"},[`&:last-child ${i}-item-tail`]:{display:"block",width:"50%"},"&-wait":Object.assign({[`${i}-item-icon ${i}-icon ${i}-icon-dot`]:{backgroundColor:e.colorBorderBg,border:`${m(e.lineWidth)} ${e.lineType} ${a}`}},s),"&-finish":Object.assign({[`${i}-item-tail::after`]:{backgroundColor:a},[`${i}-item-icon ${i}-icon ${i}-icon-dot`]:{backgroundColor:a,border:`${m(e.lineWidth)} ${e.lineType} ${a}`}},s),"&-error":s,"&-active, &-process":Object.assign({[`${i}-item-icon`]:{width:t,height:t,marginInlineStart:`calc(50% - ${m(e.calc(t).div(2).equal())})`,top:0}},s),[`&:not(${i}-item-active) > ${i}-item-container[role='button']:hover`]:{[`${i}-item-title`]:{color:n}}}}}},ke=e=>{const{componentCls:i,iconSize:t,lineHeight:n,iconSizeSM:a}=e;return{[`&${i}-label-vertical`]:{[`${i}-item`]:{overflow:"visible","&-tail":{marginInlineStart:e.calc(t).div(2).add(e.controlHeightLG).equal(),padding:`0 ${m(e.paddingLG)}`},"&-content":{display:"block",width:e.calc(t).div(2).add(e.controlHeightLG).mul(2).equal(),marginTop:e.marginSM,textAlign:"center"},"&-icon":{display:"inline-block",marginInlineStart:e.controlHeightLG},"&-title":{paddingInlineEnd:0,paddingInlineStart:0,"&::after":{display:"none"}},"&-subtitle":{display:"block",marginBottom:e.marginXXS,marginInlineStart:0,lineHeight:n}},[`&${i}-small:not(${i}-dot)`]:{[`${i}-item`]:{"&-icon":{marginInlineStart:e.calc(t).sub(a).div(2).add(e.controlHeightLG).equal()}}}}}},ei=e=>{const{componentCls:i,navContentMaxWidth:t,navArrowColor:n,stepsNavActiveColor:a,motionDurationSlow:l}=e;return{[`&${i}-navigation`]:{paddingTop:e.paddingSM,[`&${i}-small`]:{[`${i}-item`]:{"&-container":{marginInlineStart:e.calc(e.marginSM).mul(-1).equal()}}},[`${i}-item`]:{overflow:"visible",textAlign:"center","&-container":{display:"inline-block",height:"100%",marginInlineStart:e.calc(e.margin).mul(-1).equal(),paddingBottom:e.paddingSM,textAlign:"start",transition:`opacity ${l}`,[`${i}-item-content`]:{maxWidth:t},[`${i}-item-title`]:Object.assign(Object.assign({maxWidth:"100%",paddingInlineEnd:0},ye),{"&::after":{display:"none"}})},[`&:not(${i}-item-active)`]:{[`${i}-item-container[role='button']`]:{cursor:"pointer","&:hover":{opacity:.85}}},"&:last-child":{flex:1,"&::after":{display:"none"}},"&::after":{position:"absolute",top:`calc(50% - ${m(e.calc(e.paddingSM).div(2).equal())})`,insetInlineStart:"100%",display:"inline-block",width:e.fontSizeIcon,height:e.fontSizeIcon,borderTop:`${m(e.lineWidth)} ${e.lineType} ${n}`,borderBottom:"none",borderInlineStart:"none",borderInlineEnd:`${m(e.lineWidth)} ${e.lineType} ${n}`,transform:"translateY(-50%) translateX(-50%) rotate(45deg)",content:'""'},"&::before":{position:"absolute",bottom:0,insetInlineStart:"50%",display:"inline-block",width:0,height:e.lineWidthBold,backgroundColor:a,transition:`width ${l}, inset-inline-start ${l}`,transitionTimingFunction:"ease-out",content:'""'}},[`${i}-item${i}-item-active::before`]:{insetInlineStart:0,width:"100%"}},[`&${i}-navigation${i}-vertical`]:{[`> ${i}-item`]:{marginInlineEnd:0,"&::before":{display:"none"},[`&${i}-item-active::before`]:{top:0,insetInlineEnd:0,insetInlineStart:"unset",display:"block",width:e.calc(e.lineWidth).mul(3).equal(),height:`calc(100% - ${m(e.marginLG)})`},"&::after":{position:"relative",insetInlineStart:"50%",display:"block",width:e.calc(e.controlHeight).mul(.25).equal(),height:e.calc(e.controlHeight).mul(.25).equal(),marginBottom:e.marginXS,textAlign:"center",transform:"translateY(-50%) translateX(-50%) rotate(135deg)"},"&:last-child":{"&::after":{display:"none"}},[`> ${i}-item-container > ${i}-item-tail`]:{visibility:"hidden"}}},[`&${i}-navigation${i}-horizontal`]:{[`> ${i}-item > ${i}-item-container > ${i}-item-tail`]:{visibility:"hidden"}}}},ii=e=>{const{antCls:i,componentCls:t,iconSize:n,iconSizeSM:a,processIconColor:l,marginXXS:s,lineWidthBold:p,lineWidth:c,paddingXXS:d}=e,b=e.calc(n).add(e.calc(p).mul(4).equal()).equal(),y=e.calc(a).add(e.calc(e.lineWidth).mul(4).equal()).equal();return{[`&${t}-with-progress`]:{[`${t}-item`]:{paddingTop:d,[`&-process ${t}-item-container ${t}-item-icon ${t}-icon`]:{color:l}},[`&${t}-vertical > ${t}-item `]:{paddingInlineStart:d,[`> ${t}-item-container > ${t}-item-tail`]:{top:s,insetInlineStart:e.calc(n).div(2).sub(c).add(d).equal()}},[`&, &${t}-small`]:{[`&${t}-horizontal ${t}-item:first-child`]:{paddingBottom:d,paddingInlineStart:d}},[`&${t}-small${t}-vertical > ${t}-item > ${t}-item-container > ${t}-item-tail`]:{insetInlineStart:e.calc(a).div(2).sub(c).add(d).equal()},[`&${t}-label-vertical ${t}-item ${t}-item-tail`]:{top:e.calc(n).div(2).add(d).equal()},[`${t}-item-icon`]:{position:"relative",[`${i}-progress`]:{position:"absolute",insetInlineStart:"50%",top:"50%",transform:"translate(-50%, -50%)","&-inner":{width:`${m(b)} !important`,height:`${m(b)} !important`}}},[`&${t}-small`]:{[`&${t}-label-vertical ${t}-item ${t}-item-tail`]:{top:e.calc(a).div(2).add(d).equal()},[`${t}-item-icon ${i}-progress-inner`]:{width:`${m(y)} !important`,height:`${m(y)} !important`}}}}},ti=e=>{const{componentCls:i,descriptionMaxWidth:t,lineHeight:n,dotCurrentSize:a,dotSize:l,motionDurationSlow:s}=e;return{[`&${i}-dot, &${i}-dot${i}-small`]:{[`${i}-item`]:{"&-title":{lineHeight:n},"&-tail":{top:e.calc(e.dotSize).sub(e.calc(e.lineWidth).mul(3).equal()).div(2).equal(),width:"100%",marginTop:0,marginBottom:0,marginInline:`${m(e.calc(t).div(2).equal())} 0`,padding:0,"&::after":{width:`calc(100% - ${m(e.calc(e.marginSM).mul(2).equal())})`,height:e.calc(e.lineWidth).mul(3).equal(),marginInlineStart:e.marginSM}},"&-icon":{width:l,height:l,marginInlineStart:e.calc(e.descriptionMaxWidth).sub(l).div(2).equal(),paddingInlineEnd:0,lineHeight:m(l),background:"transparent",border:0,[`${i}-icon-dot`]:{position:"relative",float:"left",width:"100%",height:"100%",borderRadius:100,transition:`all ${s}`,"&::after":{position:"absolute",top:e.calc(e.marginSM).mul(-1).equal(),insetInlineStart:e.calc(l).sub(e.calc(e.controlHeightLG).mul(1.5).equal()).div(2).equal(),width:e.calc(e.controlHeightLG).mul(1.5).equal(),height:e.controlHeight,background:"transparent",content:'""'}}},"&-content":{width:t},[`&-process ${i}-item-icon`]:{position:"relative",top:e.calc(l).sub(a).div(2).equal(),width:a,height:a,lineHeight:m(a),background:"none",marginInlineStart:e.calc(e.descriptionMaxWidth).sub(a).div(2).equal()},[`&-process ${i}-icon`]:{[`&:first-child ${i}-icon-dot`]:{insetInlineStart:0}}}},[`&${i}-vertical${i}-dot`]:{[`${i}-item-icon`]:{marginTop:e.calc(e.controlHeight).sub(l).div(2).equal(),marginInlineStart:0,background:"none"},[`${i}-item-process ${i}-item-icon`]:{marginTop:e.calc(e.controlHeight).sub(a).div(2).equal(),top:0,insetInlineStart:e.calc(l).sub(a).div(2).equal(),marginInlineStart:0},[`${i}-item > ${i}-item-container > ${i}-item-tail`]:{top:e.calc(e.controlHeight).sub(l).div(2).equal(),insetInlineStart:0,margin:0,padding:`${m(e.calc(l).add(e.paddingXS).equal())} 0 ${m(e.paddingXS)}`,"&::after":{marginInlineStart:e.calc(l).sub(e.lineWidth).div(2).equal()}},[`&${i}-small`]:{[`${i}-item-icon`]:{marginTop:e.calc(e.controlHeightSM).sub(l).div(2).equal()},[`${i}-item-process ${i}-item-icon`]:{marginTop:e.calc(e.controlHeightSM).sub(a).div(2).equal()},[`${i}-item > ${i}-item-container > ${i}-item-tail`]:{top:e.calc(e.controlHeightSM).sub(l).div(2).equal()}},[`${i}-item:first-child ${i}-icon-dot`]:{insetInlineStart:0},[`${i}-item-content`]:{width:"inherit"}}}},ni=e=>{const{componentCls:i}=e;return{[`&${i}-rtl`]:{direction:"rtl",[`${i}-item`]:{"&-subtitle":{float:"left"}},[`&${i}-navigation`]:{[`${i}-item::after`]:{transform:"rotate(-45deg)"}},[`&${i}-vertical`]:{[`> ${i}-item`]:{"&::after":{transform:"rotate(225deg)"},[`${i}-item-icon`]:{float:"right"}}},[`&${i}-dot`]:{[`${i}-item-icon ${i}-icon-dot, &${i}-small ${i}-item-icon ${i}-icon-dot`]:{float:"right"}}}}},ri=e=>{const{componentCls:i,iconSizeSM:t,fontSizeSM:n,fontSize:a,colorTextDescription:l}=e;return{[`&${i}-small`]:{[`&${i}-horizontal:not(${i}-label-vertical) ${i}-item`]:{paddingInlineStart:e.paddingSM,"&:first-child":{paddingInlineStart:0}},[`${i}-item-icon`]:{width:t,height:t,marginTop:0,marginBottom:0,marginInline:`0 ${m(e.marginXS)}`,fontSize:n,lineHeight:m(t),textAlign:"center",borderRadius:t},[`${i}-item-title`]:{paddingInlineEnd:e.paddingSM,fontSize:a,lineHeight:m(t),"&::after":{top:e.calc(t).div(2).equal()}},[`${i}-item-description`]:{color:l,fontSize:a},[`${i}-item-tail`]:{top:e.calc(t).div(2).sub(e.paddingXXS).equal()},[`${i}-item-custom ${i}-item-icon`]:{width:"inherit",height:"inherit",lineHeight:"inherit",background:"none",border:0,borderRadius:0,[`> ${i}-icon`]:{fontSize:t,lineHeight:m(t),transform:"none"}}}}},ai=e=>{const{componentCls:i,iconSizeSM:t,iconSize:n}=e;return{[`&${i}-vertical`]:{display:"flex",flexDirection:"column",[`> ${i}-item`]:{display:"block",flex:"1 0 auto",paddingInlineStart:0,overflow:"visible",[`${i}-item-icon`]:{float:"left",marginInlineEnd:e.margin},[`${i}-item-content`]:{display:"block",minHeight:e.calc(e.controlHeight).mul(1.5).equal(),overflow:"hidden"},[`${i}-item-title`]:{lineHeight:m(n)},[`${i}-item-description`]:{paddingBottom:e.paddingSM}},[`> ${i}-item > ${i}-item-container > ${i}-item-tail`]:{position:"absolute",top:0,insetInlineStart:e.calc(n).div(2).sub(e.lineWidth).equal(),width:e.lineWidth,height:"100%",padding:`${m(e.calc(e.marginXXS).mul(1.5).add(n).equal())} 0 ${m(e.calc(e.marginXXS).mul(1.5).equal())}`,"&::after":{width:e.lineWidth,height:"100%"}},[`> ${i}-item:not(:last-child) > ${i}-item-container > ${i}-item-tail`]:{display:"block"},[` > ${i}-item > ${i}-item-container > ${i}-item-content > ${i}-item-title`]:{"&::after":{display:"none"}},[`&${i}-small ${i}-item-container`]:{[`${i}-item-tail`]:{position:"absolute",top:0,insetInlineStart:e.calc(t).div(2).sub(e.lineWidth).equal(),padding:`${m(e.calc(e.marginXXS).mul(1.5).add(t).equal())} 0 ${m(e.calc(e.marginXXS).mul(1.5).equal())}`},[`${i}-item-title`]:{lineHeight:m(t)}}}}},li="wait",oi="process",si="finish",ci="error",ee=(e,i)=>{const t=`${i.componentCls}-item`,n=`${e}IconColor`,a=`${e}TitleColor`,l=`${e}DescriptionColor`,s=`${e}TailColor`,p=`${e}IconBgColor`,c=`${e}IconBorderColor`,d=`${e}DotColor`;return{[`${t}-${e} ${t}-icon`]:{backgroundColor:i[p],borderColor:i[c],[`> ${i.componentCls}-icon`]:{color:i[n],[`${i.componentCls}-icon-dot`]:{background:i[d]}}},[`${t}-${e}${t}-custom ${t}-icon`]:{[`> ${i.componentCls}-icon`]:{color:i[d]}},[`${t}-${e} > ${t}-container > ${t}-content > ${t}-title`]:{color:i[a],"&::after":{backgroundColor:i[s]}},[`${t}-${e} > ${t}-container > ${t}-content > ${t}-description`]:{color:i[l]},[`${t}-${e} > ${t}-container > ${t}-tail::after`]:{backgroundColor:i[s]}}},di=e=>{const{componentCls:i,motionDurationSlow:t}=e,n=`${i}-item`,a=`${n}-icon`;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[n]:{position:"relative",display:"inline-block",flex:1,overflow:"hidden",verticalAlign:"top","&:last-child":{flex:"none",[`> ${n}-container > ${n}-tail, > ${n}-container >  ${n}-content > ${n}-title::after`]:{display:"none"}}},[`${n}-container`]:{outline:"none","&:focus-visible":{[a]:Object.assign({},we(e))}},[`${a}, ${n}-content`]:{display:"inline-block",verticalAlign:"top"},[a]:{width:e.iconSize,height:e.iconSize,marginTop:0,marginBottom:0,marginInlineStart:0,marginInlineEnd:e.marginXS,fontSize:e.iconFontSize,fontFamily:e.fontFamily,lineHeight:m(e.iconSize),textAlign:"center",borderRadius:e.iconSize,border:`${m(e.lineWidth)} ${e.lineType} transparent`,transition:`background-color ${t}, border-color ${t}`,[`${i}-icon`]:{position:"relative",top:e.iconTop,color:e.colorPrimary,lineHeight:1}},[`${n}-tail`]:{position:"absolute",top:e.calc(e.iconSize).div(2).equal(),insetInlineStart:0,width:"100%","&::after":{display:"inline-block",width:"100%",height:e.lineWidth,background:e.colorSplit,borderRadius:e.lineWidth,transition:`background ${t}`,content:'""'}},[`${n}-title`]:{position:"relative",display:"inline-block",paddingInlineEnd:e.padding,color:e.colorText,fontSize:e.fontSizeLG,lineHeight:m(e.titleLineHeight),"&::after":{position:"absolute",top:e.calc(e.titleLineHeight).div(2).equal(),insetInlineStart:"100%",display:"block",width:9999,height:e.lineWidth,background:e.processTailColor,content:'""'}},[`${n}-subtitle`]:{display:"inline",marginInlineStart:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize},[`${n}-description`]:{color:e.colorTextDescription,fontSize:e.fontSize}},ee(li,e)),ee(oi,e)),{[`${n}-process > ${n}-container > ${n}-title`]:{fontWeight:e.fontWeightStrong}}),ee(si,e)),ee(ci,e)),{[`${n}${i}-next-error > ${i}-item-title::after`]:{background:e.colorError},[`${n}-disabled`]:{cursor:"not-allowed"}})},mi=e=>{const{componentCls:i,motionDurationSlow:t}=e;return{[`& ${i}-item`]:{[`&:not(${i}-item-active)`]:{[`& > ${i}-item-container[role='button']`]:{cursor:"pointer",[`${i}-item`]:{[`&-title, &-subtitle, &-description, &-icon ${i}-icon`]:{transition:`color ${t}`}},"&:hover":{[`${i}-item`]:{"&-title, &-subtitle, &-description":{color:e.colorPrimary}}}},[`&:not(${i}-item-process)`]:{[`& > ${i}-item-container[role='button']:hover`]:{[`${i}-item`]:{"&-icon":{borderColor:e.colorPrimary,[`${i}-icon`]:{color:e.colorPrimary}}}}}}},[`&${i}-horizontal:not(${i}-label-vertical)`]:{[`${i}-item`]:{paddingInlineStart:e.padding,whiteSpace:"nowrap","&:first-child":{paddingInlineStart:0},[`&:last-child ${i}-item-title`]:{paddingInlineEnd:0},"&-tail":{display:"none"},"&-description":{maxWidth:e.descriptionMaxWidth,whiteSpace:"normal"}}}}},ui=e=>{const{componentCls:i}=e;return{[i]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},je(e)),{display:"flex",width:"100%",fontSize:0,textAlign:"initial"}),di(e)),mi(e)),Qe(e)),ri(e)),ai(e)),Je(e)),ke(e)),ti(e)),ei(e)),ni(e)),ii(e)),Ze(e))}},hi=e=>({titleLineHeight:e.controlHeight,customIconSize:e.controlHeight,customIconTop:0,customIconFontSize:e.controlHeightSM,iconSize:e.controlHeight,iconTop:-.5,iconFontSize:e.fontSize,iconSizeSM:e.fontSizeHeading3,dotSize:e.controlHeight/4,dotCurrentSize:e.controlHeightLG/4,navArrowColor:e.colorTextDisabled,navContentMaxWidth:"auto",descriptionMaxWidth:140,waitIconColor:e.wireframe?e.colorTextDisabled:e.colorTextLabel,waitIconBgColor:e.wireframe?e.colorBgContainer:e.colorFillContent,waitIconBorderColor:e.wireframe?e.colorTextDisabled:"transparent",finishIconBgColor:e.wireframe?e.colorBgContainer:e.controlItemBgActive,finishIconBorderColor:e.wireframe?e.colorPrimary:e.controlItemBgActive}),gi=Ce("Steps",e=>{const{colorTextDisabled:i,controlHeightLG:t,colorTextLightSolid:n,colorText:a,colorPrimary:l,colorTextDescription:s,colorTextQuaternary:p,colorError:c,colorBorderSecondary:d,colorSplit:b}=e,y=Ie(e,{processIconColor:n,processTitleColor:a,processDescriptionColor:a,processIconBgColor:l,processIconBorderColor:l,processDotColor:l,processTailColor:b,waitTitleColor:s,waitDescriptionColor:s,waitTailColor:b,waitDotColor:i,finishIconColor:l,finishTitleColor:a,finishDescriptionColor:s,finishTailColor:l,finishDotColor:l,errorIconColor:n,errorTitleColor:c,errorDescriptionColor:c,errorTailColor:b,errorIconBgColor:c,errorIconBorderColor:c,errorDotColor:c,stepsNavActiveColor:l,stepsProgressSize:t,inlineDotSize:6,inlineTitleColor:p,inlineTailColor:d});return[ui(y)]},hi);function pi(e){return e.filter(i=>i)}function fi(e,i){if(e)return e;const t=Ne(i).map(n=>{if(o.isValidElement(n)){const{props:a}=n;return Object.assign({},a)}return null});return pi(t)}var vi=function(e,i){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&i.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)i.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const be=e=>{const{percent:i,size:t,className:n,rootClassName:a,direction:l,items:s,responsive:p=!0,current:c=0,children:d,style:b}=e,y=vi(e,["percent","size","className","rootClassName","direction","items","responsive","current","children","style"]),{xs:N}=Ve(p),{getPrefixCls:v,direction:H,steps:j}=o.useContext(Te),D=o.useMemo(()=>p&&N?"vertical":l,[N,l]),$=ze(t),C=v("steps",e.prefixCls),[I,q,L]=gi(C),A=e.type==="inline",w=v("",e.iconPrefix),P=fi(s,d),M=A?void 0:i,T=Object.assign(Object.assign({},j==null?void 0:j.style),b),z=ie(j==null?void 0:j.className,{[`${C}-rtl`]:H==="rtl",[`${C}-with-progress`]:M!==void 0},n,a,q,L),O={finish:o.createElement(Ge,{className:`${C}-finish-icon`}),error:o.createElement(Ee,{className:`${C}-error-icon`})},F=f=>{let{node:h,status:W}=f;if(W==="process"&&M!==void 0){const G=$==="small"?32:40;return o.createElement("div",{className:`${C}-progress-icon`},o.createElement(Ue,{type:"circle",percent:M,size:G,strokeWidth:4,format:()=>null}),h)}return h},S=(f,h)=>f.description?o.createElement(qe,{title:f.description},h):h;return I(o.createElement(se,Object.assign({icons:O},y,{style:T,current:c,size:$,items:P,itemRender:A?S:void 0,stepIcon:F,direction:D,prefixCls:C,iconPrefix:w,className:z})))};be.Step=se.Step;class J extends Error{}J.prototype.name="InvalidTokenError";function $i(e){return decodeURIComponent(atob(e).replace(/(.)/g,(i,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}function bi(e){let i=e.replace(/-/g,"+").replace(/_/g,"/");switch(i.length%4){case 0:break;case 2:i+="==";break;case 3:i+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return $i(i)}catch{return atob(i)}}function Si(e,i){if(typeof e!="string")throw new J("Invalid token specified: must be a string");i||(i={});const t=i.header===!0?0:1,n=e.split(".")[t];if(typeof n!="string")throw new J(`Invalid token specified: missing part #${t+1}`);let a;try{a=bi(n)}catch(l){throw new J(`Invalid token specified: invalid base64 for part #${t+1} (${l.message})`)}try{return JSON.parse(a)}catch(l){throw new J(`Invalid token specified: invalid json for part #${t+1} (${l.message})`)}}function xi(e={}){const{nonce:i,onScriptLoadSuccess:t,onScriptLoadError:n}=e,[a,l]=o.useState(!1),s=o.useRef(t);s.current=t;const p=o.useRef(n);return p.current=n,o.useEffect(()=>{const c=document.createElement("script");return c.src="https://accounts.google.com/gsi/client",c.async=!0,c.defer=!0,c.nonce=i,c.onload=()=>{var d;l(!0),(d=s.current)===null||d===void 0||d.call(s)},c.onerror=()=>{var d;l(!1),(d=p.current)===null||d===void 0||d.call(p)},document.body.appendChild(c),()=>{document.body.removeChild(c)}},[i]),a}const Se=o.createContext(null);function yi({clientId:e,nonce:i,onScriptLoadSuccess:t,onScriptLoadError:n,children:a}){const l=xi({nonce:i,onScriptLoadSuccess:t,onScriptLoadError:n}),s=o.useMemo(()=>({clientId:e,scriptLoadedSuccessfully:l}),[e,l]);return ne.createElement(Se.Provider,{value:s},a)}function Ci(){const e=o.useContext(Se);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function Ii(e){var i;return(i=e==null?void 0:e.clientId)!==null&&i!==void 0?i:e==null?void 0:e.client_id}const ji={large:40,medium:32,small:20};function wi({onSuccess:e,onError:i,useOneTap:t,promptMomentNotification:n,type:a="standard",theme:l="outline",size:s="large",text:p,shape:c,logo_alignment:d,width:b,locale:y,click_listener:N,containerProps:v,...H}){const j=o.useRef(null),{clientId:D,scriptLoadedSuccessfully:$}=Ci(),C=o.useRef(e);C.current=e;const I=o.useRef(i);I.current=i;const q=o.useRef(n);return q.current=n,o.useEffect(()=>{var L,A,w,P,M,T,z,O,F;if($)return(w=(A=(L=window==null?void 0:window.google)===null||L===void 0?void 0:L.accounts)===null||A===void 0?void 0:A.id)===null||w===void 0||w.initialize({client_id:D,callback:S=>{var f;if(!(S!=null&&S.credential))return(f=I.current)===null||f===void 0?void 0:f.call(I);const{credential:h,select_by:W}=S;C.current({credential:h,clientId:Ii(S),select_by:W})},...H}),(T=(M=(P=window==null?void 0:window.google)===null||P===void 0?void 0:P.accounts)===null||M===void 0?void 0:M.id)===null||T===void 0||T.renderButton(j.current,{type:a,theme:l,size:s,text:p,shape:c,logo_alignment:d,width:b,locale:y,click_listener:N}),t&&((F=(O=(z=window==null?void 0:window.google)===null||z===void 0?void 0:z.accounts)===null||O===void 0?void 0:O.id)===null||F===void 0||F.prompt(q.current)),()=>{var S,f,h;t&&((h=(f=(S=window==null?void 0:window.google)===null||S===void 0?void 0:S.accounts)===null||f===void 0?void 0:f.id)===null||h===void 0||h.cancel())}},[D,$,t,a,l,s,p,c,d,b,y]),ne.createElement("div",{...v,ref:j,style:{height:ji[s],...v==null?void 0:v.style}})}const Yi=()=>{const e=Pe(),i=He(),t=Me(),[n]=g.useForm(),[a]=g.useForm(),[l]=g.useForm(),[s]=g.useForm(),[p,c]=o.useState(!0),[d,b]=o.useState(!0),[y,N]=o.useState(!1),[v,H]=o.useState(0),[j,D]=o.useState(!1),[$,C]=o.useState(),[I,q]=o.useState(),[L,A]=o.useState(),{info:w,loadingL:P}=ae(u=>u.info),{darkMode:M}=ae(u=>u.theme),{user:T}=ae(u=>u.auth),{token:{colorPrimary:z}}=Oe.useToken(),O=u=>{var B,K;const x=(B=e.state)==null?void 0:B.from;if(x){i(x);return}le("auth","Đăng nhập thành công!",`Chào mừng bạn đến với ${((K=w==null?void 0:w.newData)==null?void 0:K[0].name)||"Chicken War Studio!"}`),setTimeout(()=>{switch(u==null?void 0:u.userType){case"admin":i("/admin");break;case"user":i("/user");break}},500)},F=async u=>{const x=await t(Le(u)).unwrap();O(x),n.resetFields()},S=async u=>{const x=Si(u==null?void 0:u.credential);try{me("auth","Đang xác thực tài khoản...");const B=await k.checkEmail({email:x.email});if(B.exists){const{user:K}=await t(Ae({email:x.email,jtiNew:x.jti,jti:B.jti})).unwrap();O(K)}else D(!0),a.setFieldsValue({email:x.email,name:x.name,jti:x.jti,avatar:x.picture})}catch(B){console.log(B)}},f=async u=>{var x;await t(We(u)).unwrap(),l.resetFields(),le("auth","Đăng ký thành công!",`Chào mừng bạn đến với ${((x=w==null?void 0:w.newData)==null?void 0:x[0].name)||"Chicken War Studio!"}`),i("/")},h=async u=>{N(!0),(await k.checkEmail(u)).exists?(H(v+1),ue.sig({id:Be}).then(B=>{ue.sendForgot({email:u.email,title:"Mã xác nhận",content:B.content})})):oe("auth","Email không tồn tại!","Vui lòng kiểm tra lại email của bạn!")},W=()=>{k.checkCode({email:s.getFieldValue("email"),verify:$}).then(u=>{u.exists?H(v+1):oe("auth","Mã xác nhận không đúng!","Vui lòng kiểm tra lại mã xác nhận của bạn!")})},G=()=>{const u=new Date;me(u,"Đang đổi mật khẩu"),I===L?k.putUserForgot({email:s.getFieldValue("email"),password:I,verify:$}).then(x=>{x&&(le(u,"Đổi mật khẩu thành công!","Hãy đăng nhập để trải nghiệm tốt nhất!"),N(!1))}):oe(u,"Mật khẩu không trùng khớp!","Vui lòng kiểm tra lại mật khẩu của bạn!")},U=[{key:"1",title:"Xác nhận thông tin",content:r.jsx(r.Fragment,{children:r.jsx(g,{className:"mt-4",form:s,name:"formForgotPass",layout:"vertical",onFinish:h,children:r.jsx(g.Item,{label:"Email",className:"mb-4",name:"email",validateFirst:!0,rules:[{required:!0,message:"Vui lòng nhập email!"},{type:"email",message:"Email không đúng định dạng!"}],children:r.jsx(E,{size:"large",placeholder:"Nhập email để lấy lại mật khẩu"})})})})},{key:"2",title:"Điền mã xác nhận",content:r.jsx(r.Fragment,{children:r.jsxs(g,{className:"mt-4",name:"sdfsdfsdfsdfsdfsdf",layout:"vertical",onFinish:W,children:[r.jsx(g.Item,{label:"Nhập mã xác nhận gửi về email bao gồm 6 chữ số",className:"mb-4 flex flex-col justify-center items-center flex-wrap",name:"otp",rules:[{required:!0,message:"Vui lòng nhập mã xác nhận!"}],children:r.jsx(E.OTP,{onChange:u=>C(u),size:"large",placeholder:"Nhập mã xác nhận"})}),r.jsx("div",{className:"flex justify-center gap-2",children:r.jsxs("span",{children:["Không thấy mã ",r.jsx(V,{icon:r.jsx(Xe,{}),style:{color:z},type:"text",children:"Gửi lại mã"})]})})]})})},{key:"3",title:"Đặt lại mật khẩu",content:r.jsx(r.Fragment,{children:r.jsxs(g,{className:"mt-4",name:"adssdfsdfsdf",layout:"vertical",onFinish:G,children:[r.jsx(g.Item,{label:"Mật khẩu mới",className:"mb-4",name:"password",rules:[{required:!0,message:"Vui lòng nhập mật khẩu mới!"}],children:r.jsx(E.Password,{size:"large",placeholder:"Nhập mật khẩu mới",onChange:u=>q(u.target.value)})}),r.jsx(g.Item,{label:"Xác nhận mật khẩu mới",className:"mb-4",name:"confirmPassword",rules:[{required:!0,message:"Vui lòng nhập mật khẩu mới!"}],children:r.jsx(E.Password,{size:"large",placeholder:"Nhập mật khẩu mới",onChange:u=>A(u.target.value)})})]})})}];return o.useEffect(()=>{p&&t(Fe())},[]),o.useEffect(()=>{T&&Object.keys(T).length>0?T.userType==="user"?i("/user"):i("/admin"):c(!1)},[T,i]),r.jsx(r.Fragment,{children:p?r.jsx(_e,{}):r.jsxs(Re,{title:"Đăng nhập",children:[r.jsx("div",{className:"aris",style:{background:"url(https://media.istockphoto.com/id/1283852667/vi/anh/ch%E1%BA%A1m-v%C3%A0o-r%C3%AAu-t%C6%B0%C6%A1i-trong-r%E1%BB%ABng.jpg?s=612x612&w=0&k=20&c=1NAbpO5PSxYA4FzHdRrd4zODtLni9pzNUtwx3zHYfwU=)",backgroundPosition:"center",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100dvh",padding:"0 10px"},children:r.jsxs("div",{className:"form-containet",children:[r.jsxs("div",{className:"col col-login-1",style:{borderRadius:d?"0 25% 25% 0":"0 20% 35% 0"},children:[r.jsx("div",{className:"image-layer",children:r.jsx("img",{crossOrigin:"anonymous | use-credentials",src:`${De}/login/full-moon.png`,className:"form-image-main fi-2"})}),r.jsxs(_.Title,{className:"featured-words",level:5,children:[" Created By",r.jsx(_.Link,{className:"ms-1",children:"Aris"}),r.jsx("br",{})," All Rights Reserved"]})]}),r.jsxs("div",{className:"col col-login-2",children:[r.jsxs("div",{className:"login-form",style:{opacity:d?"1":"0",height:"100%"},children:[r.jsx(_.Title,{level:2,style:{color:z},children:"ĐĂNG NHẬP"}),r.jsxs("div",{className:"form-inputs",children:[r.jsxs(g,{form:n,name:"customFormLo",layout:"vertical",onFinish:F,children:[r.jsx(g.Item,{label:"Email",className:"mb-2",name:"name",validateFirst:!0,rules:[{required:!0,message:"Vui lòng nhập email!"},{type:"email",message:"Email không đúng định dạng!"}],children:r.jsx(E,{size:"large",className:"mb-2",placeholder:"Nhập tên hoặc email"})}),r.jsx(g.Item,{label:"Mật khẩu",className:"mb-2",name:"password",validateFirst:!0,rules:[{required:!0,message:"Vui lòng nhập mật khẩu!"},{min:8,message:"Mật khẩu phải có ít nhất 8 ký tự!"},{pattern:/[!@#$%^&*(),.?":{}|<>]/,message:"Mật khẩu phải có ít nhất một ký tự đặc biệt!"}],children:r.jsx(E.Password,{size:"large",className:"mb-2",placeholder:"Nhập mật khẩu"})})]}),r.jsxs("div",{className:"forget-pass my-2",children:[r.jsxs(_.Text,{children:["Chưa có tài khoản?",r.jsx("span",{onClick:()=>b(!1),children:r.jsx(_.Link,{className:"ms-2",style:{color:z},children:"Đăng ký "})})]}),r.jsx(_.Link,{onClick:()=>N(!0),className:"ms-2",children:"Quên mật khẩu ?"})]}),r.jsx(V,{size:"large",type:"primary",className:"w-full !mt-2",onClick:()=>n.submit(),style:{height:50},children:r.jsx(_.Title,{level:5,className:"!mb-0",children:"ĐĂNG NHẬP"})}),r.jsx(he,{plain:!0,children:"Hoặc"}),r.jsx("div",{className:"flex justify-center items-center",children:r.jsx(yi,{clientId:"1081420444654-nndjnesm34tv786257nhgtd5jnc4gns3.apps.googleusercontent.com",children:r.jsx(wi,{size:"large",theme:M?"filled_black":"filled_white",shape:"rectangular",width:300,onSuccess:S,onError:()=>{console.log("Login Failed")}})})})]})]}),r.jsxs("div",{className:"register-form",style:{left:d?"-50%":"50%",opacity:d?"0":"1"},children:[r.jsx(_.Title,{className:"!mb-0",level:2,style:{color:z},children:" ĐĂNG KÝ"}),r.jsxs("div",{className:"form-inputs",children:[r.jsxs(g,{form:l,name:"customFormReg",layout:"vertical",onFinish:f,children:[r.jsx(g.Item,{label:"Họ và tên",className:"my-2",name:"name",rules:[{required:!0,message:"Vui lòng nhập họ và tên!"}],children:r.jsx(E,{size:"large",placeholder:"Nhập họ và tên"})}),r.jsx(g.Item,{label:"Email",className:"my-2",name:"email",validateFirst:!0,rules:[{required:!0,message:"Vui lòng nhập email!"},{type:"email",message:"Email không đúng định dạng!"}],children:r.jsx(E,{size:"large",placeholder:"Nhập email"})}),r.jsx(g.Item,{label:"Số điện thoại",className:"my-2",name:"phone",validateFirst:!0,rules:[{required:!0,message:"Vui lòng nhập số điện thoại!"},{pattern:/^0/,message:"Số điện thoại phải bắt đầu bằng số 0!"},{len:10,message:"Số điện thoại phải có đúng 10 số!"}],children:r.jsx(E,{size:"large",placeholder:"Nhập số điện thoại"})}),r.jsx(g.Item,{label:"Mật khẩu",className:"my-2",name:"password",validateFirst:!0,rules:[{required:!0,message:"Vui lòng nhập mật khẩu!"},{min:8,message:"Mật khẩu phải có ít nhất 8 ký tự!"},{pattern:/[!@#$%^&*(),.?":{}|<>]/,message:"Mật khẩu phải có ít nhất một ký tự đặc biệt!"}],children:r.jsx(E.Password,{size:"large",placeholder:"Nhập mật khẩu"})}),r.jsx(g.Item,{layout:"horizontal",className:"mt-2 !mb-0",name:"gender",rules:[{required:!0,message:"Vui lòng chọn giới tính!"}],children:r.jsxs("div",{className:"flex justify-between",children:[r.jsx(_.Text,{children:"Giới tính:"}),r.jsxs(Q.Group,{children:[r.jsx(Q,{value:"Nam",children:"Nam"}),r.jsx(Q,{value:"Nữ",children:"Nữ"})]})]})})]}),r.jsx(V,{size:"large",type:"primary",className:"w-full mt-2",onClick:()=>l.submit(),style:{height:50},children:r.jsx(_.Title,{level:5,className:"!mb-0",children:"ĐĂNG KÝ"})}),r.jsx(he,{plain:!0,children:"Hoặc"}),r.jsx("div",{className:"my-3 flex justify-center",children:r.jsx(V,{onClick:()=>b(!0),size:"large",type:"text",children:r.jsx(_.Text,{className:"!mb-0",style:{color:z},children:" Đăng Nhập"})})})]})]})]})]})}),r.jsxs(ge,{title:"Quên mật khẩu",centered:!0,open:y,onOk:()=>N(!1),onCancel:()=>N(!1),footer:null,width:650,children:[r.jsx(be,{current:v,items:U}),r.jsx("div",{children:U[v].content}),r.jsxs("div",{className:"flex justify-end",style:{marginTop:24},children:[v>0&&r.jsx(V,{style:{margin:"0 8px"},onClick:()=>H(v-1),children:"Trở Lại"}),v==0&&r.jsx(V,{type:"primary",onClick:()=>s.submit(),children:" Gửi Email Xác Nhận"}),v==1&&r.jsx(V,{type:"primary",onClick:W,children:"Xác Nhận"}),v===U.length-1&&r.jsx(V,{type:"primary",onClick:G,children:" Đặt Lại Mật Khẩu "})]})]}),r.jsxs(ge,{title:"Tạo Tài Khoản Mới",maskClosable:!1,centered:!0,open:j,onOk:()=>a.submit(),onCancel:()=>D(!1),width:600,children:[r.jsx(_,{children:"Đây là lần đầu bạn đăng nhập nên hãy thêm mật khẩu và số điện thoại cho chúng tôi!"}),r.jsxs(g,{className:"mt-4",form:a,name:"forgotForm",layout:"vertical",onFinish:f,children:[r.jsx(g.Item,{className:"my-2 hidden",name:"jti",children:r.jsx(E,{size:"large"})}),r.jsx(g.Item,{className:"my-2 hidden",name:"avatar",children:r.jsx(E,{size:"large"})}),r.jsx(g.Item,{label:"Họ và tên",className:"mb-4",name:"name",rules:[{required:!0,message:"Vui lòng nhập tên!"}],children:r.jsx(E,{size:"large",placeholder:"Nhập tên"})}),r.jsx(g.Item,{label:"Email",className:"mb-4",name:"email",rules:[{required:!0,message:"Vui lòng email!"}],children:r.jsx(E,{size:"large",readOnly:!0,placeholder:"Nhập tên hoặc email để lấy lại mật khẩu"})}),r.jsx(g.Item,{label:"Số điện thoại",className:"my-2",name:"phone",validateFirst:!0,rules:[{required:!0,message:"Vui lòng nhập số điện thoại!"},{pattern:/^0/,message:"Số điện thoại phải bắt đầu bằng số 0!"},{len:10,message:"Số điện thoại phải có đúng 10 số!"}],children:r.jsx(E,{size:"large",placeholder:"Nhập số điện thoại"})}),r.jsx(g.Item,{label:"Mật khẩu",className:"mb-4",name:"password",validateFirst:!0,rules:[{required:!0,message:"Vui lòng nhập mật khẩu!"},{min:8,message:"Mật khẩu phải có ít nhất 8 ký tự!"},{pattern:/[!@#$%^&*(),.?":{}|<>]/,message:"Mật khẩu phải có ít nhất một ký tự đặc biệt!"}],children:r.jsx(E.Password,{size:"large",placeholder:"Nhập mật khẩu"})}),r.jsx(g.Item,{layout:"horizontal",className:"mt-2 !mb-0",name:"gender",rules:[{required:!0,message:"Vui lòng chọn giới tính!"}],children:r.jsxs("div",{className:"flex justify-between",children:[r.jsx(_.Text,{children:"Giới tính:"}),r.jsxs(Q.Group,{children:[r.jsx(Q,{value:"Nam",children:"Nam"}),r.jsx(Q,{value:"Nữ",children:"Nữ"})]})]})})]})]})]})})};export{Yi as default};
