import{r as a,m as K,A,v as Q,o as j,q as G,n as U,s as W,F as Y,G as Z,H as N,I as z,bD as L,L as M,D as ee,bk as oe,aq as V,M as te,bl as re,ay as ne}from"./index-DE5XhBCr.js";import{W as ae,T as ie}from"./index-vvjVAyMb.js";const F=a.createContext(null),le=F.Provider,X=a.createContext(null),de=X.Provider;var se=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],ce=a.forwardRef(function(e,r){var n=e.prefixCls,o=n===void 0?"rc-checkbox":n,t=e.className,s=e.style,h=e.checked,p=e.disabled,d=e.defaultChecked,R=d===void 0?!1:d,f=e.type,k=f===void 0?"checkbox":f,E=e.title,v=e.onChange,B=K(e,se),m=a.useRef(null),c=a.useRef(null),$=A(R,{value:h}),b=Q($,2),x=b[0],w=b[1];a.useImperativeHandle(r,function(){return{focus:function(g){var y;(y=m.current)===null||y===void 0||y.focus(g)},blur:function(){var g;(g=m.current)===null||g===void 0||g.blur()},input:m.current,nativeElement:c.current}});var S=j(o,t,G(G({},"".concat(o,"-checked"),x),"".concat(o,"-disabled"),p)),l=function(g){p||("checked"in e||w(g.target.checked),v==null||v({target:W(W({},e),{},{type:k,checked:g.target.checked}),stopPropagation:function(){g.stopPropagation()},preventDefault:function(){g.preventDefault()},nativeEvent:g.nativeEvent}))};return a.createElement("span",{className:S,title:E,style:s,ref:c},a.createElement("input",U({},B,{className:"".concat(o,"-input"),ref:m,onChange:l,disabled:p,checked:!!x,type:k})),a.createElement("span",{className:"".concat(o,"-inner")}))});const ue=e=>{const{componentCls:r,antCls:n}=e,o=`${r}-group`;return{[o]:Object.assign(Object.assign({},N(e)),{display:"inline-block",fontSize:0,[`&${o}-rtl`]:{direction:"rtl"},[`${n}-badge ${n}-badge-count`]:{zIndex:1},[`> ${n}-badge:not(:first-child) > ${n}-button-wrapper`]:{borderInlineStart:"none"}})}},be=e=>{const{componentCls:r,wrapperMarginInlineEnd:n,colorPrimary:o,radioSize:t,motionDurationSlow:s,motionDurationMid:h,motionEaseInOutCirc:p,colorBgContainer:d,colorBorder:R,lineWidth:f,colorBgContainerDisabled:k,colorTextDisabled:E,paddingXS:v,dotColorDisabled:B,lineType:m,radioColor:c,radioBgColor:$,calc:b}=e,x=`${r}-inner`,S=b(t).sub(b(4).mul(2)),l=b(1).mul(t).equal({unit:!0});return{[`${r}-wrapper`]:Object.assign(Object.assign({},N(e)),{display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:n,cursor:"pointer",[`&${r}-wrapper-rtl`]:{direction:"rtl"},"&-disabled":{cursor:"not-allowed",color:e.colorTextDisabled},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},[`${r}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${z(f)} ${m} ${o}`,borderRadius:"50%",visibility:"hidden",opacity:0,content:'""'},[r]:Object.assign(Object.assign({},N(e)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center",borderRadius:"50%"}),[`${r}-wrapper:hover &,
        &:hover ${x}`]:{borderColor:o},[`${r}-input:focus-visible + ${x}`]:Object.assign({},L(e)),[`${r}:hover::after, ${r}-wrapper:hover &::after`]:{visibility:"visible"},[`${r}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:l,height:l,marginBlockStart:b(1).mul(t).div(-2).equal({unit:!0}),marginInlineStart:b(1).mul(t).div(-2).equal({unit:!0}),backgroundColor:c,borderBlockStart:0,borderInlineStart:0,borderRadius:l,transform:"scale(0)",opacity:0,transition:`all ${s} ${p}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:l,height:l,backgroundColor:d,borderColor:R,borderStyle:"solid",borderWidth:f,borderRadius:"50%",transition:`all ${h}`},[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0},[`${r}-checked`]:{[x]:{borderColor:o,backgroundColor:$,"&::after":{transform:`scale(${e.calc(e.dotSize).div(t).equal()})`,opacity:1,transition:`all ${s} ${p}`}}},[`${r}-disabled`]:{cursor:"not-allowed",[x]:{backgroundColor:k,borderColor:R,cursor:"not-allowed","&::after":{backgroundColor:B}},[`${r}-input`]:{cursor:"not-allowed"},[`${r}-disabled + span`]:{color:E,cursor:"not-allowed"},[`&${r}-checked`]:{[x]:{"&::after":{transform:`scale(${b(S).div(t).equal()})`}}}},[`span${r} + *`]:{paddingInlineStart:v,paddingInlineEnd:v}})}},ge=e=>{const{buttonColor:r,controlHeight:n,componentCls:o,lineWidth:t,lineType:s,colorBorder:h,motionDurationSlow:p,motionDurationMid:d,buttonPaddingInline:R,fontSize:f,buttonBg:k,fontSizeLG:E,controlHeightLG:v,controlHeightSM:B,paddingXS:m,borderRadius:c,borderRadiusSM:$,borderRadiusLG:b,buttonCheckedBg:x,buttonSolidCheckedColor:w,colorTextDisabled:S,colorBgContainerDisabled:l,buttonCheckedBgDisabled:I,buttonCheckedColorDisabled:g,colorPrimary:y,colorPrimaryHover:P,colorPrimaryActive:u,buttonSolidCheckedBg:O,buttonSolidCheckedHoverBg:D,buttonSolidCheckedActiveBg:i,calc:C}=e;return{[`${o}-button-wrapper`]:{position:"relative",display:"inline-block",height:n,margin:0,paddingInline:R,paddingBlock:0,color:r,fontSize:f,lineHeight:z(C(n).sub(C(t).mul(2)).equal()),background:k,border:`${z(t)} ${s} ${h}`,borderBlockStartWidth:C(t).add(.02).equal(),borderInlineStartWidth:0,borderInlineEndWidth:t,cursor:"pointer",transition:[`color ${d}`,`background ${d}`,`box-shadow ${d}`].join(","),a:{color:r},[`> ${o}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:C(t).mul(-1).equal(),insetInlineStart:C(t).mul(-1).equal(),display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:t,paddingInline:0,backgroundColor:h,transition:`background-color ${p}`,content:'""'}},"&:first-child":{borderInlineStart:`${z(t)} ${s} ${h}`,borderStartStartRadius:c,borderEndStartRadius:c},"&:last-child":{borderStartEndRadius:c,borderEndEndRadius:c},"&:first-child:last-child":{borderRadius:c},[`${o}-group-large &`]:{height:v,fontSize:E,lineHeight:z(C(v).sub(C(t).mul(2)).equal()),"&:first-child":{borderStartStartRadius:b,borderEndStartRadius:b},"&:last-child":{borderStartEndRadius:b,borderEndEndRadius:b}},[`${o}-group-small &`]:{height:B,paddingInline:C(m).sub(t).equal(),paddingBlock:0,lineHeight:z(C(B).sub(C(t).mul(2)).equal()),"&:first-child":{borderStartStartRadius:$,borderEndStartRadius:$},"&:last-child":{borderStartEndRadius:$,borderEndEndRadius:$}},"&:hover":{position:"relative",color:y},"&:has(:focus-visible)":Object.assign({},L(e)),[`${o}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},[`&-checked:not(${o}-button-wrapper-disabled)`]:{zIndex:1,color:y,background:x,borderColor:y,"&::before":{backgroundColor:y},"&:first-child":{borderColor:y},"&:hover":{color:P,borderColor:P,"&::before":{backgroundColor:P}},"&:active":{color:u,borderColor:u,"&::before":{backgroundColor:u}}},[`${o}-group-solid &-checked:not(${o}-button-wrapper-disabled)`]:{color:w,background:O,borderColor:O,"&:hover":{color:w,background:D,borderColor:D},"&:active":{color:w,background:i,borderColor:i}},"&-disabled":{color:S,backgroundColor:l,borderColor:h,cursor:"not-allowed","&:first-child, &:hover":{color:S,backgroundColor:l,borderColor:h}},[`&-disabled${o}-button-wrapper-checked`]:{color:g,backgroundColor:I,borderColor:h,boxShadow:"none"}}}},he=e=>{const{wireframe:r,padding:n,marginXS:o,lineWidth:t,fontSizeLG:s,colorText:h,colorBgContainer:p,colorTextDisabled:d,controlItemBgActiveDisabled:R,colorTextLightSolid:f,colorPrimary:k,colorPrimaryHover:E,colorPrimaryActive:v,colorWhite:B}=e,m=4,c=s,$=r?c-m*2:c-(m+t)*2;return{radioSize:c,dotSize:$,dotColorDisabled:d,buttonSolidCheckedColor:f,buttonSolidCheckedBg:k,buttonSolidCheckedHoverBg:E,buttonSolidCheckedActiveBg:v,buttonBg:p,buttonCheckedBg:p,buttonColor:h,buttonCheckedBgDisabled:R,buttonCheckedColorDisabled:d,buttonPaddingInline:n-t,wrapperMarginInlineEnd:o,radioColor:r?k:B,radioBgColor:r?p:k}},J=Y("Radio",e=>{const{controlOutline:r,controlOutlineWidth:n}=e,o=`0 0 0 ${z(n)} ${r}`,s=Z(e,{radioFocusShadow:o,radioButtonFocusShadow:o});return[ue(s),be(s),ge(s)]},he,{unitless:{radioSize:!0,dotSize:!0}});var pe=function(e,r){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(e);t<o.length;t++)r.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(n[o[t]]=e[o[t]]);return n};const Ce=(e,r)=>{var n,o;const t=a.useContext(F),s=a.useContext(X),{getPrefixCls:h,direction:p,radio:d}=a.useContext(M),R=a.useRef(null),f=ee(r,R),{isFormItemInput:k}=a.useContext(oe),E=i=>{var C,_;(C=e.onChange)===null||C===void 0||C.call(e,i),(_=t==null?void 0:t.onChange)===null||_===void 0||_.call(t,i)},{prefixCls:v,className:B,rootClassName:m,children:c,style:$,title:b}=e,x=pe(e,["prefixCls","className","rootClassName","children","style","title"]),w=h("radio",v),S=((t==null?void 0:t.optionType)||s)==="button",l=S?`${w}-button`:w,I=V(w),[g,y,P]=J(w,I),u=Object.assign({},x),O=a.useContext(te);t&&(u.name=t.name,u.onChange=E,u.checked=e.value===t.value,u.disabled=(n=u.disabled)!==null&&n!==void 0?n:t.disabled),u.disabled=(o=u.disabled)!==null&&o!==void 0?o:O;const D=j(`${l}-wrapper`,{[`${l}-wrapper-checked`]:u.checked,[`${l}-wrapper-disabled`]:u.disabled,[`${l}-wrapper-rtl`]:p==="rtl",[`${l}-wrapper-in-form-item`]:k},d==null?void 0:d.className,B,m,y,P,I);return g(a.createElement(ae,{component:"Radio",disabled:u.disabled},a.createElement("label",{className:D,style:Object.assign(Object.assign({},d==null?void 0:d.style),$),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,title:b},a.createElement(ce,Object.assign({},u,{className:j(u.className,{[ie]:!S}),type:"radio",prefixCls:l,ref:f})),c!==void 0?a.createElement("span",null,c):null)))},T=a.forwardRef(Ce),fe=a.forwardRef((e,r)=>{const{getPrefixCls:n,direction:o}=a.useContext(M),[t,s]=A(e.defaultValue,{value:e.value}),h=i=>{const C=t,_=i.target.value;"value"in e||s(_);const{onChange:H}=e;H&&_!==C&&H(i)},{prefixCls:p,className:d,rootClassName:R,options:f,buttonStyle:k="outline",disabled:E,children:v,size:B,style:m,id:c,onMouseEnter:$,onMouseLeave:b,onFocus:x,onBlur:w}=e,S=n("radio",p),l=`${S}-group`,I=V(S),[g,y,P]=J(S,I);let u=v;f&&f.length>0&&(u=f.map(i=>typeof i=="string"||typeof i=="number"?a.createElement(T,{key:i.toString(),prefixCls:S,disabled:E,value:i,checked:t===i},i):a.createElement(T,{key:`radio-group-value-options-${i.value}`,prefixCls:S,disabled:i.disabled||E,value:i.value,checked:t===i.value,title:i.title,style:i.style,id:i.id,required:i.required},i.label)));const O=re(B),D=j(l,`${l}-${k}`,{[`${l}-${O}`]:O,[`${l}-rtl`]:o==="rtl"},d,R,y,P,I);return g(a.createElement("div",Object.assign({},ne(e,{aria:!0,data:!0}),{className:D,style:m,onMouseEnter:$,onMouseLeave:b,onFocus:x,onBlur:w,id:c,ref:r}),a.createElement(le,{value:{onChange:h,value:t,disabled:e.disabled,name:e.name,optionType:e.optionType}},u)))}),ve=a.memo(fe);var me=function(e,r){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(e);t<o.length;t++)r.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(n[o[t]]=e[o[t]]);return n};const Se=(e,r)=>{const{getPrefixCls:n}=a.useContext(M),{prefixCls:o}=e,t=me(e,["prefixCls"]),s=n("radio",o);return a.createElement(de,{value:"button"},a.createElement(T,Object.assign({prefixCls:s},t,{type:"radio",ref:r})))},ye=a.forwardRef(Se),q=T;q.Button=ye;q.Group=ve;q.__ANT_RADIO=!0;export{ce as C,q as R};
