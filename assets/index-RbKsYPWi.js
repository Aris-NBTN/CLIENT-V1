import{ah as T,r as a,cb as U,C as X,w as Y,cc as Z,z as P}from"./index-DlYMrpPW.js";function h(e){return["small","middle","large"].includes(e)}function E(e){return e?typeof e=="number"&&!Number.isNaN(e):!1}const j=T.createContext({latestIndex:0}),ee=j.Provider,te=e=>{let{className:r,index:n,children:t,split:l,style:p}=e;const{latestIndex:s}=a.useContext(j);return t==null?null:a.createElement(a.Fragment,null,a.createElement("div",{className:r,style:p},t),n<s&&l&&a.createElement("span",{className:`${r}-split`},l))};var se=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(n[t[l]]=e[t[l]]);return n};const le=a.forwardRef((e,r)=>{var n,t,l;const{getPrefixCls:p,space:s,direction:I}=a.useContext(X),{size:c=(n=s==null?void 0:s.size)!==null&&n!==void 0?n:"small",align:N,className:V,rootClassName:_,children:A,direction:S="horizontal",prefixCls:k,split:G,style:H,wrap:R=!1,classNames:v,styles:f}=e,F=se(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[d,m]=Array.isArray(c)?c:[c,c],b=h(m),z=h(d),M=E(m),W=E(d),O=Y(A,{keepEmpty:!0}),$=N===void 0&&S==="horizontal"?"center":N,o=p("space",k),[q,B,D]=Z(o),J=P(o,s==null?void 0:s.className,B,`${o}-${S}`,{[`${o}-rtl`]:I==="rtl",[`${o}-align-${$}`]:$,[`${o}-gap-row-${m}`]:b,[`${o}-gap-col-${d}`]:z},V,_,D),w=P(`${o}-item`,(t=v==null?void 0:v.item)!==null&&t!==void 0?t:(l=s==null?void 0:s.classNames)===null||l===void 0?void 0:l.item);let y=0;const K=O.map((i,C)=>{var x,g;i!=null&&(y=C);const Q=(i==null?void 0:i.key)||`${w}-${C}`;return a.createElement(te,{className:w,key:Q,index:C,split:G,style:(x=f==null?void 0:f.item)!==null&&x!==void 0?x:(g=s==null?void 0:s.styles)===null||g===void 0?void 0:g.item},i)}),L=a.useMemo(()=>({latestIndex:y}),[y]);if(O.length===0)return null;const u={};return R&&(u.flexWrap="wrap"),!z&&W&&(u.columnGap=d),!b&&M&&(u.rowGap=m),q(a.createElement("div",Object.assign({ref:r,className:J,style:Object.assign(Object.assign(Object.assign({},u),s==null?void 0:s.style),H)},F),a.createElement(ee,{value:L},K)))}),ae=le;ae.Compact=U;export{ae as S};
