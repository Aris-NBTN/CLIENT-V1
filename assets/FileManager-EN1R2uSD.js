import{r as t,L as ke,aL as Ve,o as ve,F as Nn,G as jn,H as Fn,I as Me,aM as In,Y as Pe,aN as Ln,R as M,t as On,aO as Re,j as x,f as pe,W as _e}from"./index-BxvyH6Rr.js";import{F as le}from"./ReactContexify.min--9FIuoYS.js";import{b7 as Mn}from"./Layout-D-b6lE7j.js";import{l as Pn}from"./index-Cjwn6Pe1.js";import{R as ge,C as ee}from"./row-B3kiTypa.js";import{T as Rn}from"./index-Dp9P72GA.js";import{R as Xe}from"./index-BoYHRbe4.js";import{B as _n}from"./TextArea-DAakdzLg.js";import{D as Bn}from"./index-Bp6v9eQC.js";import{E as Dn}from"./index-DoS5Ws9L.js";import"./index-CwcGwJlG.js";import"./CheckOutlined-LGsS7MTB.js";import"./context-CrMMaZjm.js";import"./iconUtil-zxDw6b5a.js";import"./EllipsisOutlined-Cnz_QTxB.js";import"./Overflow-CRhK7xwX.js";import"./SearchOutlined-B1oW2Mb_.js";import"./index-DVtQR3wx.js";const ue=e=>{let{children:n}=e;const{getPrefixCls:i}=t.useContext(ke),a=i("breadcrumb");return t.createElement("li",{className:`${a}-separator`,"aria-hidden":"true"},n===""?n:n||"/")};ue.__ANT_BREADCRUMB_SEPARATOR=!0;var Tn=function(e,n){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(i[a[r]]=e[a[r]]);return i};function Un(e,n){if(e.title===void 0||e.title===null)return null;const i=Object.keys(n).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${i})`,"g"),(a,r)=>n[r]||a)}function We(e,n,i,a){if(i==null)return null;const{className:r,onClick:l}=n,o=Tn(n,["className","onClick"]),s=Object.assign(Object.assign({},Ve(o,{data:!0,aria:!0})),{onClick:l});return a!==void 0?t.createElement("a",Object.assign({},s,{className:ve(`${e}-link`,r),href:a}),i):t.createElement("span",Object.assign({},s,{className:ve(`${e}-link`,r)}),i)}function An(e,n){return(a,r,l,o,s)=>{if(n)return n(a,r,l,o);const u=Un(a,r);return We(e,a,u,s)}}var xe=function(e,n){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(i[a[r]]=e[a[r]]);return i};const Ze=e=>{const{prefixCls:n,separator:i="/",children:a,menu:r,overlay:l,dropdownProps:o,href:s}=e,c=(f=>{if(r||l){const p=Object.assign({},o);if(r){const g=r||{},{items:b}=g,v=xe(g,["items"]);p.menu=Object.assign(Object.assign({},v),{items:b==null?void 0:b.map((z,h)=>{var{key:B,title:j,label:F,path:I}=z,k=xe(z,["key","title","label","path"]);let y=F??j;return I&&(y=t.createElement("a",{href:`${s}${I}`},y)),Object.assign(Object.assign({},k),{key:B??h,label:y})})})}else l&&(p.overlay=l);return t.createElement(Bn,Object.assign({placement:"bottom"},p),t.createElement("span",{className:`${n}-overlay-link`},f,t.createElement(Xe,null)))}return f})(a);return c!=null?t.createElement(t.Fragment,null,t.createElement("li",null,c),i&&t.createElement(ue,null,i)):null},Ke=e=>{const{prefixCls:n,children:i,href:a}=e,r=xe(e,["prefixCls","children","href"]),{getPrefixCls:l}=t.useContext(ke),o=l("breadcrumb",n);return t.createElement(Ze,Object.assign({},r,{prefixCls:o}),We(o,r,i,a))};Ke.__ANT_BREADCRUMB_ITEM=!0;const $n=Ke,Hn=e=>{const{componentCls:n,iconCls:i,calc:a}=e;return{[n]:Object.assign(Object.assign({},Fn(e)),{color:e.itemColor,fontSize:e.fontSize,[i]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${Me(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:a(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},In(e)),"li:last-child":{color:e.lastItemColor},[`${n}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${n}-link`]:{[`
          > ${i} + span,
          > ${i} + a
        `]:{marginInlineStart:e.marginXXS}},[`${n}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${Me(e.paddingXXS)}`,marginInline:a(e.marginXXS).mul(-1).equal(),[`> ${i}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},Vn=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}),Xn=Nn("Breadcrumb",e=>{const n=jn(e,{});return Hn(n)},Vn);var Be=function(e,n){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(i[a[r]]=e[a[r]]);return i};function Wn(e){const{breadcrumbName:n,children:i}=e,a=Be(e,["breadcrumbName","children"]),r=Object.assign({title:n},a);return i&&(r.menu={items:i.map(l=>{var{breadcrumbName:o}=l,s=Be(l,["breadcrumbName"]);return Object.assign(Object.assign({},s),{title:o})})}),r}function Zn(e,n){return t.useMemo(()=>e||(n?n.map(Wn):null),[e,n])}var Kn=function(e,n){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(i[a[r]]=e[a[r]]);return i};const Gn=(e,n)=>{if(n===void 0)return n;let i=(n||"").replace(/^\//,"");return Object.keys(e).forEach(a=>{i=i.replace(`:${a}`,e[a])}),i},ze=e=>{const{prefixCls:n,separator:i="/",style:a,className:r,rootClassName:l,routes:o,items:s,children:u,itemRender:c,params:f={}}=e,p=Kn(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:g,direction:b,breadcrumb:v}=t.useContext(ke);let z;const h=g("breadcrumb",n),[B,j,F]=Xn(h),I=Zn(s,o),k=An(h,c);if(I&&I.length>0){const P=[],_=s||o;z=I.map((L,$)=>{const{path:D,key:T,type:H,menu:U,overlay:Z,onClick:V,className:d,separator:m,dropdownProps:O}=L,N=Gn(f,D);N!==void 0&&P.push(N);const R=T??$;if(H==="separator")return t.createElement(ue,{key:R},m);const E={},K=$===I.length-1;U?E.menu=U:Z&&(E.overlay=Z);let{href:A}=L;return P.length&&N!==void 0&&(A=`#/${P.join("/")}`),t.createElement(Ze,Object.assign({key:R},E,Ve(L,{data:!0,aria:!0}),{className:d,dropdownProps:O,href:A,separator:K?"":i,onClick:V,prefixCls:h}),k(L,f,_,P,A))})}else if(u){const P=Pe(u).length;z=Pe(u).map((_,L)=>{if(!_)return _;const $=L===P-1;return Ln(_,{separator:$?"":i,key:L})})}const y=ve(h,v==null?void 0:v.className,{[`${h}-rtl`]:b==="rtl"},r,l,j,F),S=Object.assign(Object.assign({},v==null?void 0:v.style),a);return B(t.createElement("nav",Object.assign({className:y,style:S},p),t.createElement("ol",null,z)))};ze.Item=$n;ze.Separator=ue;function w(e){if(!e||typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n),e}var C=function(){return C=Object.assign||function(n){for(var i,a=1,r=arguments.length;a<r;a++){i=arguments[a];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(n[l]=i[l])}return n},C.apply(this,arguments)};function Ge(e,n){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(i[a[r]]=e[a[r]]);return i}function he(e,n,i,a){function r(l){return l instanceof i?l:new i(function(o){o(l)})}return new(i||(i=Promise))(function(l,o){function s(f){try{c(a.next(f))}catch(p){o(p)}}function u(f){try{c(a.throw(f))}catch(p){o(p)}}function c(f){f.done?l(f.value):r(f.value).then(s,u)}c((a=a.apply(e,[])).next())})}function ye(e,n){var i={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},a,r,l,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(c){return function(f){return u([c,f])}}function u(c){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(i=0)),i;)try{if(a=1,r&&(l=c[0]&2?r.return:c[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,c[1])).done)return l;switch(r=0,l&&(c=[c[0]&2,l.value]),c[0]){case 0:case 1:l=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(l=i.trys,!(l=l.length>0&&l[l.length-1])&&(c[0]===6||c[0]===2)){i=0;continue}if(c[0]===3&&(!l||c[1]>l[0]&&c[1]<l[3])){i.label=c[1];break}if(c[0]===6&&i.label<l[1]){i.label=l[1],l=c;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(c);break}l[2]&&i.ops.pop(),i.trys.pop();continue}c=n.call(e,i)}catch(f){c=[6,f],r=0}finally{a=l=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function oe(e,n,i){if(i||arguments.length===2)for(var a=0,r=n.length,l;a<r;a++)(l||!(a in n))&&(l||(l=Array.prototype.slice.call(n,0,a)),l[a]=n[a]);return e.concat(l||Array.prototype.slice.call(n))}var Yn=function(e){var n="";if(e)return e<1024?n=e+" Bytes":e<1024*1024?n=(e/1024).toFixed(2)+" KB":e<1024*1024*1024?n=(e/1024/1024).toFixed(2)+" MB":e<1024*1024*1024*1024?n=(e/1024/1024/1024).toFixed(2)+" GB":n=(e/1024/1024/1024/1024).toFixed(2)+" TB",n},qn={fullInfoLayer:{name:"Nome: ",size:"Dimensione: ",type:"Tipo: "},status:{preparing:"preparazione",uploading:"In corso",success:"Successo",valid:"Valido",denied:"Non válido",error:"Errore",aborted:"Interrotto"}},Qn={fullInfoLayer:{name:"Le nom: ",size:"Le taille: ",type:"Le type: "},status:{preparing:"préparer",uploading:"En cours",success:"Succès",valid:"Valide",denied:"Refusé",error:"Erreur",aborted:"Interrompu"}},Jn={fullInfoLayer:{name:"Name: ",size:"Size: ",type:"Type: "},status:{preparing:"Preparing",uploading:"Uploading",success:"Success",valid:"Valid",denied:"Not valid",error:"Error",aborted:"Aborted"}},ei={fullInfoLayer:{name:"Nombre: ",size:"Tamaño: ",type:"Tipo: "},status:{preparing:"Preparando",uploading:"Subiendo",success:"Éxito",valid:"Válido",denied:"No válido",error:"Error",aborted:"Anulado"}},ni={fullInfoLayer:{name:"Имя: ",size:"Размер: ",type:"Tип: "},status:{preparing:"подготовка",uploading:"Загрузка",success:"успех",valid:"годный",denied:"выкинутый",error:"ошибка",aborted:"прерванный"}},ii={fullInfoLayer:{name:"Nome: ",size:"Tamanho: ",type:"Tipo: "},status:{preparing:"Preparando",uploading:"Enviando",success:"Êxito",valid:"válido",denied:"Negado",error:"Erro",aborted:"Abortado"}},ti={fullInfoLayer:{name:"文档名称: ",size:"尺寸: ",type:"文件类型: "},status:{preparing:"预加载",uploading:"上传",success:"成功",valid:"接受的文件",denied:"被拒绝的文件",error:"错误",aborted:"中止"}},ai={fullInfoLayer:{name:"文檔名稱: ",size:"文件大小: ",type:"文件類型: "},status:{preparing:"預加載",uploading:"上傳",success:"成功",valid:"有效文件",denied:"無效文件",error:"錯誤",aborted:"中止"}},Y={"ES-es":ei,"EN-en":Jn,"FR-fr":Qn,"IT-it":qn,"PT-pt":ii,"RU-ru":ni,"ZH-cn":ti,"ZH-hk":ai},Q=function(e){switch(e){case"ES-es":return Y["ES-es"];case"EN-en":return Y["EN-en"];case"FR-fr":return Y["FR-fr"];case"IT-it":return Y["IT-it"];case"PT-pt":return Y["PT-pt"];case"RU-ru":return Y["RU-ru"];case"ZH-cn":return Y["ZH-cn"];case"ZH-hk":return Y["ZH-hk"];default:return Y["EN-en"]}},Ye=function(e,n,i){return new Promise(function(a,r){try{var l=new FileReader;l.onprogress=function(){n==null||n()},l.onerror=function(){i==null||i()},l.onload=function(){a(l.result)},l.readAsDataURL(e)}catch{r(void 0)}})};function ri(e){return new Promise(function(n,i){if(!e||e.length===0){i("landscape");return}try{var a=new Image;a.src=e,a.onerror=function(r){i("landscape")},a.onload=function(){var r=a.width,l=a.height;r>l?n("landscape"):n("portrait")}}catch{i("landscape")}})}var li="https://user-images.githubusercontent.com/43678736/132086517-72a51a12-e403-4675-bfd7-22c23affa730.png",oi="https://user-images.githubusercontent.com/43678736/132086518-7026d4f1-ea16-4ed0-89fd-37c1aa8ac3ed.png",si="https://user-images.githubusercontent.com/43678736/132086519-863c63b4-917e-4471-94ff-7e15651cc14b.png",ci="https://user-images.githubusercontent.com/43678736/132086520-9bc6aa3b-51c9-4da2-9ef7-349162b86d0b.png",ui="https://user-images.githubusercontent.com/43678736/132086521-dbd6cf0d-d4d7-4b92-bb26-17e8a51a9383.png",di="https://user-images.githubusercontent.com/43678736/132086522-070f48e8-78a8-4294-8dbb-aab81525e164.png",fi="https://user-images.githubusercontent.com/43678736/132086595-90ab7f90-f87e-4900-94d9-d0b26745df48.png",mi="https://user-images.githubusercontent.com/43678736/132086597-e285ad5c-613a-4679-a270-493e5be4ffd9.png",pi="https://user-images.githubusercontent.com/43678736/132086598-623c410a-084a-4395-a448-211b2ff61cfe.png",gi="https://user-images.githubusercontent.com/43678736/132086600-8b70a007-512d-4252-9c66-eabd3ddd6573.png",bi="https://user-images.githubusercontent.com/43678736/132086601-e62e5d1a-d8a2-4475-a14f-85922cec9272.png",vi="https://user-images.githubusercontent.com/43678736/132086602-4c772934-f608-4f01-8459-c4622cee8ad5.png",xi="https://user-images.githubusercontent.com/43678736/132086604-b5b019fe-572e-477e-92c2-3769a48a1304.png",hi="https://user-images.githubusercontent.com/43678736/132086606-715ccb66-4702-4f7d-9b09-ac93ba17b643.png",yi="https://user-images.githubusercontent.com/43678736/132086608-bcae9d57-8e54-488c-90c4-4952ae530b5e.png",wi="https://user-images.githubusercontent.com/43678736/132086618-397d6bd2-9fda-43ed-a135-cb40388c35af.png",ki="https://user-images.githubusercontent.com/43678736/132086620-2586ba40-c583-4589-b1a4-8bb5b258b44d.png",zi="https://user-images.githubusercontent.com/43678736/132086621-3b95fb64-2533-4ccc-abcd-bd2beba572e9.png",Ei="https://user-images.githubusercontent.com/43678736/132086622-af705a0c-2b25-4ba7-8ab6-bd69ec97f7e2.png",Ci="https://user-images.githubusercontent.com/43678736/132086624-89141a46-64e4-4fa0-bf69-54a0eb4d48c9.png",De="https://user-images.githubusercontent.com/43678736/132086625-1b8f2652-1de0-4475-8c12-7da4a9973ffb.png",Si="https://user-images.githubusercontent.com/43678736/132086626-38699705-1e6f-4bca-984b-03167b236faa.png",Ni="https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png",ji="https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png",Fi="https://user-images.githubusercontent.com/43678736/132086652-4562942e-aaea-466c-968f-380fffabf3f9.png",Ii="https://user-images.githubusercontent.com/43678736/132086653-0487e7e2-1ee3-49e2-8cfe-3e20f1f7490a.png",Li="https://user-images.githubusercontent.com/43678736/132086656-6e96c815-e4e2-4ffd-9d71-57e9cc2450bc.png",Oi="https://user-images.githubusercontent.com/43678736/132086658-5d27d3c2-394f-43fb-b512-9b414a257875.png",Mi="https://user-images.githubusercontent.com/43678736/132086659-98f3ef6e-b9f3-4b6d-b18f-469b5334ba27.png",Pi="https://user-images.githubusercontent.com/43678736/132086661-a5484553-06c7-4ffa-a8f9-96b57b1b0344.png",Ri="https://user-images.githubusercontent.com/43678736/132086662-05ad1597-d5e5-4efa-833e-2876e966a745.png",_i="https://user-images.githubusercontent.com/43678736/132086663-90c58955-f7fb-4bdb-ac53-92667d16d4a3.png",Bi="https://user-images.githubusercontent.com/43678736/132086664-9a7530e7-6d78-4ef3-a176-20cf7f57b555.png",be="https://user-images.githubusercontent.com/43678736/132086666-ab3c505d-b2c0-4177-9a06-aed5d9c39ee4.png",Di="https://user-images.githubusercontent.com/43678736/132086667-6c7dcbcc-8d83-41a2-8e0a-85b09e2791ae.png",Ti="https://user-images.githubusercontent.com/43678736/132086668-9f246e91-cf2e-49cf-9617-e1fbb71abbbb.png",Ui="https://user-images.githubusercontent.com/43678736/132086669-46113762-84d1-4b32-9441-b0138ce17a5d.png",Ai="https://user-images.githubusercontent.com/43678736/145835364-2054509d-3448-4d34-921f-73dd6e297fc7.png",$i="https://user-images.githubusercontent.com/43678736/145835367-19172bf8-cd5a-4cbe-b512-d0de1d91f269.png",Hi="https://user-images.githubusercontent.com/43678736/145835373-a57ef0f5-3968-483b-9f55-6d67e7f1dcea.png",Vi="https://user-images.githubusercontent.com/43678736/132086670-0f96e770-cedc-4635-a5f9-cf97894c1d7a.png",Xi="https://user-images.githubusercontent.com/43678736/132086671-02ad35ef-ec3a-4a65-abd5-5bf794dfcf7b.png",Wi="https://user-images.githubusercontent.com/43678736/132086672-3a856fda-823d-4997-b802-c7c640e6ef44.png",Zi="https://user-images.githubusercontent.com/43678736/132086673-0c4409ab-754e-4619-8cfa-179d0ccf1bd9.png",Ki="https://user-images.githubusercontent.com/43678736/132086674-fdb56d02-5845-49b7-8462-6357bc963464.png",Gi="https://user-images.githubusercontent.com/43678736/132086675-c879645d-acb4-41a6-ab3c-4e6c2048badb.png",Yi="https://user-images.githubusercontent.com/43678736/132086685-4e327c4c-a409-4b83-b36a-8d88936b314b.png",qi="https://user-images.githubusercontent.com/43678736/132086688-8e82fae4-3a9b-49c0-bf99-77189525514c.png",Qi="https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png",Ji="https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png",et="https://user-images.githubusercontent.com/43678736/132086691-d472576b-ec6a-4332-acd2-dd6a00b72952.png",nt="https://user-images.githubusercontent.com/43678736/132086693-9d43571e-0c86-438f-b247-e2cb42e19e06.png",it="https://user-images.githubusercontent.com/43678736/132086694-4e661d6a-1118-441e-8bc3-c52fcb2133b6.png",tt="https://user-images.githubusercontent.com/43678736/132086697-1d82d724-35b6-4f06-847a-3c59a5deda6e.png",at="https://user-images.githubusercontent.com/43678736/132086698-19384230-dbd7-4e05-bc69-ef4537b6aae3.png",rt="https://user-images.githubusercontent.com/43678736/132086699-5993a482-04f4-4915-b105-9037f527cf61.png",lt="https://user-images.githubusercontent.com/43678736/132086700-c23461c8-6819-46e1-aecd-0a1f8d3507bb.png",ot="https://user-images.githubusercontent.com/43678736/132086701-c8044c09-8d95-4af1-9410-66761001d7da.png",st="https://user-images.githubusercontent.com/43678736/132086702-59294337-ed99-4302-badd-316b2c1ff62f.png",ct="https://user-images.githubusercontent.com/43678736/132086704-8fd51e7c-afa2-47a3-ab2f-d0bcd0ecae9f.png",ut="https://user-images.githubusercontent.com/43678736/132086705-33294da1-5c0f-49f7-b890-e4857cec0a6d.png",dt="https://user-images.githubusercontent.com/43678736/132086706-22f805d0-39d4-494b-824e-47dc75d05eb7.png",ft="https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png",mt="https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png",pt="https://user-images.githubusercontent.com/43678736/132086708-21d096dd-7148-40aa-97f1-cbb099339740.png",gt="https://user-images.githubusercontent.com/43678736/132086709-811d4e90-3cfa-4044-a956-aeda9c67fc92.png",bt="https://user-images.githubusercontent.com/43678736/132086710-c5479c6c-0249-4542-adad-48b0ef40b775.png",vt="https://user-images.githubusercontent.com/43678736/132086711-1524a3e7-3e33-4822-a34f-ff3235404045.png",xt="https://user-images.githubusercontent.com/43678736/132086712-17e2c491-f6e4-4586-aef6-06bcc5f4b0e5.png",ht="https://user-images.githubusercontent.com/43678736/132086715-204b5a8b-9c5a-4bac-8294-9237ebc16089.png",yt="https://user-images.githubusercontent.com/43678736/132086716-64511d20-58cb-45a8-85df-f4d9408b469d.png",wt="https://user-images.githubusercontent.com/43678736/132086718-a8499333-6282-4820-aa1f-4d133eb54648.png",qe=function(e){var n=/(?:\.([^.]+))?$/,i=n.exec(e);return i?i[1]:""},W="octet",kt=function(e){switch(e){case"aac":return"aac";case"midi":return"midi";case"x-midi":return"midi";case"mpeg":return"mpeg";case"ogg":return"oga";case"opus":return"opus";case"wav":return"wav";case"webm":return"webm";case"wma":return"wma";default:return W}},zt=function(e){switch(e){case"css":return"css";case"csv":return"csv";case"html":return"html";case"calendar":return"icalendar";case"javascript":return"javascript";case"x-javascript":return"javascript";case"plain":return"text";case"xml":return"xml";default:return W}},Et=function(e){switch(e){case"bmp":return"bmp";case"gif":return"gif";case"jpg":return"jpeg";case"jpeg":return"jpeg";case"png":return"png";case"tiff":return"tiff";case"webp":return"webp";default:return W}},Ct=function(e){switch(e){case"otf":return"otf";case"ttf":return"ttf";case"woff":return"woff";case"woff2":return"woff";default:return W}},St=function(e){switch(e){case"x-msvideo":return"avi";case"msvideo":return"avi";case"avi":return"avi";case"mp4":return"mp4";case"mpeg":return"mpeg";case"ogg":return"ogv";case"mp2t":return"mp2t";case"wmv":return"wmv";case"webm":return"webm";default:return W}},Nt=function(e){switch(e){case"x-abiword":return"abw";case"abiword":return"abw";case"x-freearc":return"arc";case"freearc":return"arc";case"vnd.amazon.ebook":return"azw";case"octet-stream":return"octet";case"x-bzip":return"bz";case"x-bzip2":return"bz2";case"bzip":return"bz";case"bzip2":return"bz2";case"x-cdf":return"cda";case"msaccess":return"accdb";case"csh":return"csh";case"x-csh":return"csh";case"vnd.ms-fontobject":return"eot";case"epub+zip":return"epub";case"gzip":return"gzip";case"java-archive":return"jar";case"x-javascript":return"javascript";case"json":return"json";case"ld+json":return"jsonld";case"vnd.apple.installer+xml":return"mpkg";case"ogg":return"ogx";case"vnd.rar":return"rar";case"rtf":return"rtf";case"x-sh":return"sh";case"sh":return"sh";case"x-shockwave-flash":return"swf";case"x-tar":return"tar";case"x-httpd-php":return"php";case"vnd.visio":return"vsd";case"xhtml+xml":return"xhtml";case"xml":return"xml";case"vnd.mozilla.xul+xml":return"xul";case"vnd.openxmlformats-officedocument.wordprocessingml.document":return"docx";case"msword":return"docx";case"vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"xlsx";case"vnd.openxmlformats-officedocument.presentationml.presentation":return"pptx";case"vnd.ms-powerpoint":return"pptx";case"vnd.oasis.opendocument.presentation":return"odp";case"vnd.oasis.opendocument.text":return"odt";case"vnd.oasis.opendocument.spreadsheet":return"ods";case"zip":return"zip";case"x-zip-compressed":return"zip";case"pdf":return"pdf";default:return W}},Qe=function(e){if(!e||!e.includes("/"))return W;var n=e.split("/")[0],i=e.split("/")[1];switch(n){case"application":return Nt(i);case"audio":return kt(i);case"video":return St(i);case"text":return zt(i);case"image":return Et(i);case"font":return Ct(i);default:return W}},Je=function(e){var n="octet";return e&&e!==""&&(e.includes("zip")||e.includes("rar")?n="zip":e.includes("doc")?n="docx":e.includes("xls")?n="xlsx":e.includes("drawio")?n="drawio":e.includes("psd")?n="psd":e.includes("csv")?n="csv":e==="jsx"?n="react":e==="py"?n="python":e==="vue"?n="vue":e==="java"?n="java":e==="ts"?n="typescript":(e==="sass"||e==="scss")&&(n="sass")),n},en=function(e){var n="text";return e&&e!==""&&(e==="jsx"?n="react":e==="py"?n="python":e==="vue"?n="vue":e==="java"?n="java":e==="ts"||e==="tsx"?n="typescript":e==="js"?n="javascript":e==="xml"?n="xml":e==="php"&&(n="php")),n},jt=function(e,n){var i="fallBack";if(e)i=Qe(e.type);else return i=W,n!=null&&n.fallBack?{url:n==null?void 0:n.fallBack,mimeResume:i}:{url:se[i],mimeResume:i};var a=qe(e.name);i==="text"&&(i=en(a)),i===W&&(i=Je(a));var r=n==null?void 0:n[i];return r!==void 0?{url:r,mimeResume:i}:{url:se[i],mimeResume:i}},Ft=function(e,n,i){var a="octet";if(e)a=Qe(n);else return a=W,i!=null&&i.fallBack?{url:i==null?void 0:i.fallBack,mimeResume:a}:{url:se[a],mimeResume:a};var r=qe(e);a==="text"&&(a=en(r)),a===W&&(a=Je(r));var l=i==null?void 0:i[a];return l!==void 0?{url:l,mimeResume:a}:{url:se[a],mimeResume:a}},se={aac:oi,accdb:ci,abw:si,arc:zi,avi:ui,azw:di,octet:be,bmp:fi,bz:mi,bz2:pi,cda:gi,csh:bi,css:vi,csv:xi,docx:hi,drawio:yi,eot:wi,epub:ki,gzip:Ci,gif:Ei,html:De,icalendar:Si,jar:ji,jpeg:Ii,javascript:Fi,json:Li,jsonld:Oi,midi:Mi,mp3:Pi,mp4:Ri,mpeg:_i,mpkg:Bi,mp2t:be,odp:Di,ods:Ti,odt:Ui,oga:Ai,ogv:$i,ogx:Hi,opus:Vi,otf:Xi,png:Ki,pdf:Wi,php:Zi,pptx:Gi,psd:Yi,rar:Ji,rtf:nt,sass:it,sh:tt,swf:at,tar:Qi,tiff:lt,ttf:ot,typescript:st,text:rt,vsd:ct,wav:dt,weba:mt,webm:ft,webp:pt,woff:vt,wma:gt,wmv:bt,xhtml:De,xlsx:xt,xml:ht,xul:yt,zip:wt,sevenzip:li,python:qi,java:Ni,react:et,vue:ut,fallBack:be},ce=function(e,n){return n?"".concat(e," ").concat(n):e},It=function(e,n,i,a){var r="",l=void 0,o=void 0;return e&&typeof e.name=="string"?(r=e.name,l=e.type,o=e.size):n&&typeof n=="string"&&(r=n,l=i,o=a),[r,l,o]};function Lt(e,n){return e?C(C({},n),e):n}w(`.files-ui-dropzone-children-container {
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 5px 0;
}`);function q(e){e.preventDefault(),e.stopPropagation()}w(`.filesui-disabled-root {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.38);
}`);w(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.fui-dropzone-root {
  width: 100%;
  min-width: 150px;
  min-height: 180px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0 8px;
  text-rendering: optimizeLegibility;
  font-size: 1.5em;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.02857em;
  box-sizing: border-box;
  word-break: normal;
  /*  &.fui-dropzone-border {
    box-sizing: border-box;

    border: 1px dashed #0c2358;
    border-radius: 10px;
    &.fui-hide-border {
      border: none;
    }
  } */
}
@media (max-width: 600px) {
  .fui-dropzone-root {
    font-size: 1.3em;
  }
}
.fui-dropzone-root.clickable {
  cursor: pointer;
}

.files-ui-header {
  min-height: 23px;
  /*  height: 22px;
  position: absolute; 
  top: 0;
  */
  cursor: text;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-family: inherit;
  font-size: 1rem;
}
@media (max-width: 960px) {
  .files-ui-header {
    font-size: 0.8rem;
  }
}

.files-ui-footer {
  /*   border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px; */
  box-sizing: border-box;
  cursor: text;
  /* height: 23px;
  position: absolute;
  bottom: 0;
  left: 0; */
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; */
  font-family: inherit;
  padding-left: 10px;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: left;
}
@media (max-width: 960px) {
  .files-ui-footer {
    padding-left: 1px;
    font-size: 0.9rem;
  }
}`);w(`.filesui-base-ripple-absolute {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
}
.filesui-base-ripple-absolute .filesui-base-ripple-relative {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.filesui-base-ripple-absolute .filesui-base-ripple-relative span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 500ms linear;
  background-color: rgba(255, 255, 255, 0.7);
}
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}`);var X=function(e){if(typeof e=="number")return e;switch(e){case"micro":return 8;case"small":return 15;case"semi-medium":return 18;case"medium":return 25;case"large":return 28;case"extra-large":return 32;default:return 24}},Ot=function(e){var n=e.size,i=e.color,a=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=X(n),u=l||{};return t.createElement("svg",{style:r?C({},C({cursor:"pointer"},u)):u,onClick:function(c){q(c),r==null||r(c)},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000",className:o||""},t.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",opacity:".87"}),t.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",fill:a||"none",opacity:".5"}),t.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"}))},nn=function(e){var n=e.size,i=e.color,a=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=X(n),u=l||{};return M.createElement("svg",{className:o||"",style:r?C({},C({cursor:"pointer"},u)):u,onClick:function(){return r==null?void 0:r()},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000"},M.createElement("path",{d:"M0 0h24v24H0z",fill:a||"none"}),M.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))},ae=function(e){var n=e.size,i=e.color,a=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=X(n),u=l||{};return t.createElement("svg",{className:o||"",style:r?C({cursor:"pointer"},u):u,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000",onClick:function(c){q(c),r==null||r(c)}},t.createElement("path",{d:"M0 0h24v24H0V0z",fill:a||"none"}),t.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}))},Mt=function(e){var n=e.size,i=e.color,a=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=X(n),u=l||{};return t.createElement("svg",{className:o||"",style:r?C({cursor:"pointer"},u):u,enableBackground:"new 0 0 24 24",xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000",onClick:function(c){q(c),r==null||r(c)}},t.createElement("path",{d:"M0 0h24v24H0V0z",fill:a||"none"}),t.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-9-3.82l-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z"}))},tn=function(e){var n=e.size,i=e.color,a=e.onClick,r=e.style,l=e.className,o=X(n),s=r||{};return M.createElement("svg",{className:l||"",style:a?C({},C({cursor:"pointer"},s)):s,onClick:function(){return a==null?void 0:a()},xmlns:"http://www.w3.org/2000/svg",height:o?"".concat(o,"px"):"24px",viewBox:"0 0 24 24",width:o?"".concat(o,"px"):"24px",fill:i||"#000000"},M.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),M.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z",opacity:".4"}),M.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"}))},Pt=function(e){var n=e.size,i=e.color,a=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=X(n),u=l||{};return t.createElement("svg",{className:o||"",style:r?C({cursor:"pointer"},u):u,enableBackground:"new 0 0 24 24",xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000",onClick:function(c){q(c),r==null||r(c)}},t.createElement("g",null,t.createElement("rect",{fill:a||"none",height:s,width:s})),t.createElement("g",null,t.createElement("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"})))},Rt=function(e){var n=e.size,i=e.color,a=e.onClick,r=e.style,l=e.className,o=X(n)-2,s=r||{};return t.createElement("svg",{className:l||"",style:a?C({cursor:"pointer"},s):s,"aria-hidden":"true","aria-label":"info",fill:i||"#000000",role:"img",transform:"",version:"1.1",viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",height:"".concat(o,"px"),width:"".concat(o,"px"),onClick:function(u){q(u),a==null||a(u)}},t.createElement("path",{d:"M22.378 0c2.412 0 3.618 1.642 3.618 3.523 0 2.349-2.095 4.522-4.822 4.522-2.284 0-3.616-1.35-3.553-3.582 0-1.877 1.586-4.462 4.757-4.462zM14.956 36c-1.904 0-3.299-1.174-1.967-6.343l2.185-9.166c0.38-1.465 0.443-2.054 0-2.054-0.571 0-3.040 1.012-4.504 2.011l-0.95-1.584c4.63-3.935 9.956-6.241 12.242-6.241 1.903 0 2.219 2.291 1.269 5.814l-2.504 9.634c-0.443 1.701-0.254 2.288 0.191 2.288 0.571 0 2.443-0.706 4.282-2.173l1.080 1.465c-4.504 4.585-9.423 6.349-11.324 6.349z"}))},_t=function(e){var n=e.size,i=e.color,a=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=X(n),u=l||{};return M.createElement("svg",{className:o||"",style:r?C({cursor:"pointer"},u):u,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000",onClick:function(c){q(c),r==null||r(c)}},M.createElement("path",{d:"M0 0h24v24H0V0z",opacity:".9",fill:a||"none"}),M.createElement("path",{d:"M8 5v14l11-7L8 5z"}))},Bt=function(e){var n=e.size,i=e.color,a=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=X(n),u=l||{};return M.createElement("svg",{className:o||"",style:r?C({},C({cursor:"pointer"},u)):u,onClick:function(){return r==null?void 0:r()},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000"},M.createElement("rect",{fill:a||"none",height:s,width:s}),M.createElement("path",{d:"M18,15.17V15h2v2.17L18,15.17z M15.41,12.59L17,11l-1.41-1.41L14,11.17L15.41,12.59z M13,10.17V4h-2v4.17L13,10.17z M21.19,21.19l-1.78-1.78L2.81,2.81L1.39,4.22l6.19,6.19L7,11l5,5l0.59-0.59L15.17,18H6v-3H4v3c0,1.1,0.9,2,2,2h11.17l2.61,2.61 L21.19,21.19z"}))};w(`@keyframes filesui-rotate-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.filesui-rotate {
  cursor: default;
}

@media (prefers-reduced-motion: no-preference) {
  .filesui-rotate {
    animation: filesui-rotate-spin infinite 2s linear;
  }
}`);var Dt=function(e){var n=e.size,i=e.color,a=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=X(n),u=l||{};return M.createElement("svg",{className:o||"",style:r?C({cursor:"pointer"},u):u,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000",onClick:function(c){q(c),r==null||r(c)}},M.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),M.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z",fill:a||"none"}),M.createElement("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}))},Te;(function(e){function n(o){var s="";if(typeof window>"u"||typeof o>"u"||o===null)return"";if(document.getElementById(o.id))return o.id;s=o.id;var u=document.createElement("style");u.id=s,u.setAttribute("type","text/css");var c=Ae(o.sheetRules||[])+o.raw||"";u.textContent=c;var f=document.head.appendChild(u);return f?s:""}e.insertStyleSheet=n;function i(o,s){var u="";if(typeof window>"u"||typeof o>"u"||o===null||s===null)return"";var c=document.getElementById(o);return c?(c.textContent=Ae(s),u):""}e.editStyleSheet=i;function a(o){var s="";if(!o)return"";var u=document.getElementById(o);return u&&(document.head.removeChild(u),s=o),s}e.removeStyleSheet=a;function r(o){if(typeof o>"u"||o===null)return!1;var s=document.getElementById(o);return!!s}e.existStyleSheet=r;function l(o){return typeof o>"u"||o===null?null:o}e.makeStyleSheet=l})(Te||(Te={}));function Tt(e){return e?!/[a-z]/.test(e)&&/[A-Z]/.test(e):!1}function Ue(e){for(var n="",i=" ",a=!1,r=0;r<e.length;r++){var l=e[r];if(Tt(l)){i=l,a=!0;break}}if(a){var o=e.split(i);n="".concat(o[0],"-").concat(i.toLowerCase()).concat(o[1])}else n=e;return n}function Ut(e){return e?e.includes(":"):!1}function At(e){var n="",i=e.trim().split(" ");if(i.length>1){for(var a=0;a<i.length;a++)n+=".".concat(i[a]);n+=`{
`}else n+=".".concat(e,`{
`);return n}function Ae(e){if(typeof e>"u"||e===null)return"";for(var n="",i=[],a=0;a<e.length;a++){var r=e[a],l="";l+=At(r.className);for(var o=Object.keys(r.rules),s=0;s<o.length;s++){var u=o[s],c=Ue(u);if(Ut(c)){var f=r.className+c;i.push({className:f,rules:r.rules[c]})}else{var p=r.rules[u];l+="	".concat(c," : ").concat(p,`;
`)}}l+=`}
`,n+=l}for(var g=0;g<i.length;g++){var l="",r=i[g],o=Object.keys(r.rules);l+=".".concat(r.className,`{
`);for(var s=0;s<o.length;s++){var u=o[s],c=Ue(u),p=r.rules[u];l+="	".concat(c," : ").concat(p,`;
`)}l+=`}
`,n+=l}return n}w(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.material-button-root {
  border: 0;
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  text-transform: none;
  color: white;
}

.material-button {
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  min-width: 64px;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.02857em;
}

.material-button.uppercase {
  text-transform: uppercase;
}

.material-button.lowercase {
  text-transform: lowercase;
}

.material-button.capitalize {
  text-transform: capitalize;
}

.material-button.contained {
  padding: 6px 16px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.material-button.outlined {
  padding: 5px 15px;
}

.material-button.text {
  padding: 5px 15px;
}

.material-button-root.contained:hover {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.material-button span.material-button-label {
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
}

span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 500ms linear;
  background-color: rgba(255, 255, 255, 0.7);
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
.material-button-root.disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.26);
  padding: 6px 16px;
}
.material-button-root.disabled.darkmode {
  background-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.3);
}

/* @media screen and (max-width: 600px) {
  .material-button {
    min-width: 30px;
    font-size: 0.78rem;
    line-height: 1.5;
    letter-spacing: 0.025em;
  }
  .material-button.contained {
    padding: 4px 13px;
  }
  .material-button.outlined {
    padding: 4px 12px;
  }
}
 */`);var $t=M.createContext({});w(`.files-ui-buttons-container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  gap: 10px;
}
.files-ui-buttons-container.top {
  padding-bottom: 10px;
}
.files-ui-buttons-container.bottom {
  padding-top: 10px;
}`);var Ht=function(e,n,i,a,r,l,o,s,u){var c=t.useState(!1),f=c[0],p=c[1],g=t.useState(!1),b=g[0],v=g[1],z=t.useState(""),h=z[0],B=z[1],j=t.useState(void 0),F=j[0],I=j[1],k=t.useState(void 0),y=k[0],S=k[1],P=t.useState(!1),_=P[0],L=P[1],$=function(D,T,H,U,Z,V,d,m,O,N){return he(void 0,void 0,void 0,function(){var R,E,K;return ye(this,function(A){switch(A.label){case 0:return!D&&!T&&!H?[2]:(R=(D?jt(D,m):Ft(T,H,m)).url,B(R),V&&d?(v(!0),I(V),S(d),L(!0),[2]):[3,1]);case 1:return V?(p(!0),I(V),L(!0),[2]):[3,2];case 2:return d?(v(!0),S(d),L(!0),[3,5]):[3,3];case 3:return E=Vt(D,H),p(E[0]==="image"),["mp4","ogg","webm"].includes(E[1])&&v(E[0]==="video"),Z&&(U||typeof U>"u"||U===null)&&E[0]==="image"?(K=void 0,D?[4,Ye(D)]:[3,5]):[3,5];case 4:K=A.sent(),K&&I(K),A.label=5;case 5:return L(!0),[2]}})})};return t.useEffect(function(){return $(e,n,i,a,r||!1,l,o,s),function(){I(void 0),p(!1),v(!1),L(!1)}},[e,n,i,a,r,l,o,s]),[_,f,b,h,F,y]},Vt=function(e,n){if(e)if(e.type){var i=e.type.split("/");return[i[0],i[1]]}else return["octet","octet"];else{var i=n==null?void 0:n.split("/");return i&&i.length>1?[i[0],i[1]]:["octet","octet"]}},Xt=function(e){var n=t.useState(!1),i=n[0],a=n[1],r=t.useState(e),l=r[0],o=r[1];return t.useEffect(function(){if(o(e),["uploading","preparing"].includes(l||"")&&["success","error","aborted"].includes(e||"")){setTimeout(function(){a(!1)},3500);return}else a(e==="preparing"||e==="uploading")},[e]),i},Wt=function(e,n){var i=t.useState(void 0),a=i[0],r=i[1];return e!==void 0?a!==e&&r(e):n!=null&&n.upload.onprogress===null&&(n.upload.onprogress=function(l){r(l.loaded/l.total*100)},r(0)),a};w(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.fui-avatar-main-container {
  width: 200px;
  height: 200px;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(128, 128, 128, 0.486);
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
}
.fui-avatar-main-container.square {
  border-radius: 0px;
}
.fui-avatar-main-container.circle {
  border-radius: 50%;
}
.fui-avatar-main-container .fui-avatar-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.fui-avatar-main-container:hover .fui-avatar-label.hide {
  display: flex;
}
.fui-avatar-main-container .fui-avatar-label {
  margin: 0;
  overflow: hidden;
  background-color: rgba(128, 128, 128, 0.486);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}
.fui-avatar-main-container .fui-avatar-label.hide {
  display: none;
}
.fui-avatar-main-container .fui-avatar-label:hover {
  background-color: rgba(71, 71, 71, 0.74);
  display: flex;
  cursor: pointer;
}`);var Zt=function(e){var n=e.size,i=e.color,a=e.style,r=e.radius,l=e.x,o=e.y,s=e.width,u=r||46,c=l||50,f=o||50,p=X(n),g=a||{};return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"".concat(p,"px"),height:"".concat(p,"px"),style:g,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},t.createElement("circle",{cx:"".concat(c),cy:"".concat(f),r:"".concat(u),fill:"none",stroke:i||"#14ff00",strokeWidth:"".concat(s||8,"px"),strokeDasharray:"164.93361431346415 100.97787143782138"},t.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 ".concat(c," ").concat(c,";360 ").concat(c," ").concat(c),keyTimes:"0;1"})))};w(`.files-ui-loader-container {
  background-color: rgba(0, 0, 0, 0.41);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.files-ui-loader-container.clickable {
  cursor: pointer;
}
.files-ui-loader-container:hover {
  background-color: rgba(0, 0, 0, 0.61);
}`);var an=function(e){var n=e.children,i=e.className,a=e.style,r=e.size,l=e.onClick,o=r?X(r):void 0,s=l?"files-ui-loader-container clickable":"files-ui-loader-container",u=function(){l==null||l()};return t.createElement("div",{onClick:u,className:i?"".concat(s," ").concat(i):s,style:C(C({},a),{height:o,width:o})},n)},rn=function(e){var n=e.onClick,i=e.size;return t.createElement(an,{onClick:n,size:i},t.createElement(t.Fragment,null,t.createElement(Zt,{size:i}),t.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},n&&t.createElement(ae,{color:"rgba(255,255,255,0.75)",size:45,onClick:n}))))};w(`.files-ui-layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}`);var te=function(e){var n=e.style,i=e.className,a=e.children,r=e.visible,l=Ge(e,["style","className","children","visible"]),o=ce(i||"","files-ui-layer");return r?t.createElement("div",C({className:o,style:n},l),a):t.createElement(t.Fragment,null)},Kt={alt:"image-preview",smartImgFit:"orientation"};w(`.fui-image-preview {
  position: relative;
  border-radius: 10px;
}`);var we=function(e){var n=Lt(e,Kt),i=n.src,a=n.alt,r=n.width,l=n.height,o=n.onError,s=n.smartImgFit,u=n.style,c=n.className,f=t.useState([void 0,void 0]),p=f[0],g=p[0],b=p[1],v=f[1],z=t.useState(void 0),h=z[0],B=z[1],j=function(k){return he(void 0,void 0,void 0,function(){var y;return ye(this,function(S){switch(S.label){case 0:return[4,Ye(k)];case 1:return y=S.sent(),F(y),[2]}})})},F=function(k){return he(void 0,void 0,void 0,function(){var y,S,P;return ye(this,function(_){switch(_.label){case 0:return k===""||!k?[2]:(y=void 0,S=void 0,s?[3,1]:(S="100%",[3,4]));case 1:return _.trys.push([1,3,,4]),[4,ri(k)];case 2:return P=_.sent(),P==="landscape"?s==="orientation"?(y=void 0,S="100%"):(y="100%",S=void 0):s==="center"?(y=void 0,S="100%"):(y="100%",S=void 0),[3,4];case 3:return _.sent(),o==null||o(),[3,4];case 4:return l&&(y=l),r&&(S=r),v([y,S]),B(k),[2]}})})};t.useEffect(function(){if(i)if(typeof i=="string")F(i);else{var k=i.type?i.type.split("/")[0]:"octet";k==="image"?j(i):o==null||o()}},[i]);var I=function(k){o==null||o()};return t.createElement(t.Fragment,null,i&&h&&(g||b)&&t.createElement("img",{style:u||{},onClick:function(k){k.preventDefault()},width:b,height:g,src:h,alt:a,className:c,onError:I}))};w(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.files-ui-file-card-main-container {
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.858);
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 100px;
  box-sizing: border-box;
  position: relative;
  font-size: 15px;
  font-weight: 400;
  width: 320px;
  font-family: "Poppins", sans-serif;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container {
  border-radius: 8px;
  overflow: hidden;
  width: 320px;
  box-sizing: border-box;
  height: 100px;
  box-sizing: border-box;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container {
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer {
  box-sizing: border-box;
  position: absolute;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer.blur img {
  filter: blur(4px);
  width: 200%;
  height: 200%;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-status-layer {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 5px;
  box-sizing: border-box;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data {
  padding-right: 10px;
  box-sizing: border-box;
  line-height: 19px;
  font-weight: 500;
  width: calc(100% - 100px);
  word-break: break-all;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data.dark-mode {
  color: rgba(255, 255, 255, 0.7);
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-size {
  font-weight: 400;
  font-size: 0.9rem;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-name {
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-name.not-allowed {
  background-color: rgba(180, 16, 16, 0.7);
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-upload-layer-container {
  cursor: default;
  display: flex;
  box-sizing: border-box;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.625), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container {
  cursor: default;
  display: flex;
  box-sizing: border-box;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info {
  width: calc(100% - 100px);
  height: 100px;
  text-align: left;
  scrollbar-width: thin;
  overflow: auto;
  scrollbar-color: rgba(100, 108, 127, 0.662745098) transparent;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar {
  width: 9px;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar-track {
  background: transparent;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar-thumb {
  background-color: rgba(100, 108, 127, 0.662745098);
  border-radius: 20px;
  border: transparent;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .files-ui-file-card-info-layer-header {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  /*  position: absolute;
  top: 5;
  right: 5; */
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .heading {
  font-weight: 600;
  padding: 0 5px;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .label {
  padding: 0 5px;
  font-weight: 399;
}
.files-ui-file-card-main-container.clickable {
  cursor: pointer;
}

/* .files-ui-file-icon {
  font-size: 0.7rem;
  min-width: 19px;
  min-height: 19px;
  margin: 0;
  padding: 2px 2px;
  border-radius: 50%;
  background-color: rgba(32, 33, 36, 0.65);
  word-break: break-word;
  box-sizing: content-box;
  &:hover {
    background-color: rgba(32, 33, 36, 0.85);
  }
  &.dark-mode {
    background-color: rgba(154, 160, 166, 0.65);
    &:hover {
      background-color: rgba(154, 160, 166, 0.85);
    }
  }
} */`);w(`.files-ui-file-icon {
  font-size: 0.7rem;
  min-width: 19px;
  min-height: 19px;
  margin: 0;
  padding: 2px 2px;
  border-radius: 50%;
  background-color: rgba(32, 33, 36, 0.65);
  word-break: break-word;
  box-sizing: content-box;
}
.files-ui-file-icon:hover {
  background-color: rgba(32, 33, 36, 0.85);
}
.files-ui-file-icon.dark-mode {
  background-color: rgba(154, 160, 166, 0.65);
}
.files-ui-file-icon.dark-mode:hover {
  background-color: rgba(154, 160, 166, 0.85);
}`);w(`.files-ui-file-card-main-container.dark-mode {
  color: rgba(255, 255, 255, 0.7);
  background-color: #121212;
}
.files-ui-file-card-main-container.dark-mode.elevation-0 {
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
}
.files-ui-file-card-main-container.dark-mode.elevation-1 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
}
.files-ui-file-card-main-container.dark-mode.elevation-2 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07));
}
.files-ui-file-card-main-container.dark-mode.elevation-3 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08));
}
.files-ui-file-card-main-container.dark-mode.elevation-4 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09));
}
.files-ui-file-card-main-container.dark-mode.elevation-5 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
}
.files-ui-file-card-main-container.dark-mode.elevation-6 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11));
}
.files-ui-file-card-main-container.dark-mode.elevation-7 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11));
}
.files-ui-file-card-main-container.dark-mode.elevation-8 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12));
}
.files-ui-file-card-main-container.dark-mode.elevation-9 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12));
}
.files-ui-file-card-main-container.dark-mode.elevation-10 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13));
}
.files-ui-file-card-main-container.dark-mode.elevation-11 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13));
}
.files-ui-file-card-main-container.dark-mode.elevation-12 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-13 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-14 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-15 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-16 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-17 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-18 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-19 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-20 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-21 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-22 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-23 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-24 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.elevation-0 {
  box-shadow: none;
}
.files-ui-file-card-main-container.elevation-1 {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-2 {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-3 {
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-4 {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-5 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-6 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-7 {
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-8 {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-9 {
  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-10 {
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-11 {
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-12 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-13 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-14 {
  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-15 {
  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-16 {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-17 {
  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-18 {
  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-19 {
  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-20 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-21 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-22 {
  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-23 {
  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-24 {
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
}`);w(`.file-card-right-layer-header {
  margin-top: 3px;
  margin-right: 3px;
  position: absolute;
  top: 0;
  right: 0;
  left: unset;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
}

.file-card-right-layer-footer {
  margin-bottom: 3px;
  margin-right: 3px;
  left: unset;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  bottom: 0;
  right: 0;
}`);var Gt=function(e){var n=e.localization,i=e.size,a=Q(n).status;return t.createElement(t.Fragment,null,t.createElement(tn,{color:"#f44336",size:i||65}),t.createElement("span",null," ",a.aborted))},Yt=function(e){var n=e.height,i=n?typeof n=="number"?"".concat(n,"px"):n:"132px";return t.createElement(t.Fragment,null,t.createElement("div",{style:{width:"100%",height:i}}))},qt=function(e){var n=e.localization,i=e.size,a=Q(n).status;return t.createElement(t.Fragment,null,t.createElement(ae,{color:"rgba(255,255,255,0.4)",style:{backgroundColor:"rgba(244, 67, 54, 0.8)",borderRadius:"50%"},size:i||65}),t.createElement("span",null," ",a.error))},Qt=function(e){var n=e.onCancel,i=e.localization,a=e.size,r=Q(i).status;return t.createElement(t.Fragment,null,t.createElement(rn,{onClick:n,size:a||65}),t.createElement("span",null,r.preparing))},Jt=function(e){var n=e.localization,i=e.size,a=Q(n).status;return t.createElement(t.Fragment,null,t.createElement(nn,{color:"#4caf50",size:i||65}),t.createElement("span",null," ",a.success))};w(`text.files-ui-text-dynamic-loader {
  text-anchor: middle;
  font-size: 1em;
  fill: aliceblue;
}`);var ea=function(e){var n=e.size,i=e.color,a=e.style,r=e.percentage,l=e.hidePerncentage,o=e.radius,s=e.x,u=e.y,c=e.width,f=e.onClick,p=o||28,g=s||30,b=u||30,v=X(n),z=a||{},h=t.useRef(null);function B(j,F,I){F.style.strokeDashoffset="".concat(I*(1-j/100))}return t.useEffect(function(){var j=h.current;if(j!=null&&r!==void 0){var F=2*Math.PI*j.r.baseVal.value;j.style.strokeDasharray="".concat(F," 1000"),B(r>=100?100:r,j,F)}},[r]),r!==void 0?t.createElement(an,{size:n},t.createElement(t.Fragment,null,t.createElement("svg",{className:"dui_svg_circle_loader",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"".concat(v,"px"),height:"".concat(v,"px"),style:z},t.createElement("circle",{style:{transform:"rotate(-90deg)",transformOrigin:"center"},stroke:i||"#14ff00",cx:"".concat(g),cy:"".concat(b),r:"".concat(p),strokeWidth:"".concat(c||8,"px"),id:"circle",ref:h,fill:"none"}),!l&&r!==void 0&&t.createElement("text",{className:"files-ui-text-dynamic-loader",x:"".concat(g),y:"".concat(g*7/6)},"".concat(r.toFixed(0)," %"))),f&&t.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},t.createElement(ae,{color:"rgba(255,255,255,0.75)",size:45,onClick:f})))):t.createElement(t.Fragment,null)};w(`.lds-colorbar {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}
.lds-colorbar .files-ui-text-default-loader {
  font-size: 1.5rem;
  font-weight: 400;
  text-anchor: middle;
}`);var na=function(e){var n=e.localization,i=e.size,a=e.onAbort,r=e.progress,l=Q(n).status;return t.createElement(t.Fragment,null,r!==void 0?t.createElement(ea,{size:70,x:35,y:35,radius:32,percentage:r,width:6,hidePerncentage:r===void 0||a!==void 0,onClick:a}):t.createElement(rn,{onClick:a,size:i||70}),t.createElement("span",null," ",l.uploading))};w(`.files-ui-file-card-upload-layer {
  width: 100px;
  height: 100%;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  position: relative;
  overflow: hidden;
}
.files-ui-file-card-upload-layer .elevation-list-card {
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.files-ui-file-card-upload-layer .elevation-list-card .elevation-item-card {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
}
.files-ui-file-card-upload-layer .elevation-list-card .elevation-item-card span {
  text-align: center;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}`);w(`.files-ui-tooltip {
  cursor: default;
  position: relative;
}
.files-ui-tooltip:hover {
  z-index: 2;
}
.files-ui-tooltip:hover .files-ui-tooltiptext {
  visibility: visible;
  opacity: 1;
  z-index: 2;
}
.files-ui-tooltip.card:hover {
  z-index: 2;
}
.files-ui-tooltip.card:hover .files-ui-tooltiptext {
  visibility: visible;
  opacity: 1;
  z-index: 2;
}
.files-ui-tooltip.card .files-ui-tooltiptext {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  visibility: hidden;
  width: 200px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 2px 2px;
  position: absolute;
  z-index: 2;
  left: calc(50% - 100px);
  left: 0;
  margin-top: 5px;
  top: 100%;
  opacity: 0;
  transition: opacity 1s;
}
.files-ui-tooltip.card .files-ui-tooltiptext.not-valid-error {
  background: linear-gradient(to top, #c62828, #d32f2f);
}
.files-ui-tooltip.card .files-ui-tooltiptext.not-valid-error::after {
  border-color: transparent transparent #d32f2f transparent;
}
.files-ui-tooltip.card .files-ui-tooltiptext.success {
  background: linear-gradient(to top, #1b5e20, #2e7d32);
}
.files-ui-tooltip.card .files-ui-tooltiptext.success::after {
  border-color: transparent transparent #2e7d32 transparent;
}
.files-ui-tooltip.card .files-ui-tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
}
.files-ui-tooltip .files-ui-tooltiptext {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  visibility: hidden;
  width: 132px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 2px 2px;
  position: absolute;
  z-index: 2;
  left: 0;
  opacity: 0;
  transition: opacity 1s;
}
.files-ui-tooltip .files-ui-tooltiptext.not-valid-error {
  background: linear-gradient(to top, #c62828, #d32f2f);
}
.files-ui-tooltip .files-ui-tooltiptext.not-valid-error::after {
  border-color: transparent transparent #d32f2f transparent;
}
.files-ui-tooltip .files-ui-tooltiptext.success {
  background: linear-gradient(to top, #1b5e20, #2e7d32);
}
.files-ui-tooltip .files-ui-tooltiptext.success::after {
  border-color: transparent transparent #2e7d32 transparent;
}
.files-ui-tooltip .files-ui-tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
}`);var ia=function(e){var n=e.uploadStatus,i=e.valid,a=e.errors,r=e.uploadMessage,l=e.open,o=t.useState(void 0),s=o[0],u=o[1],c=t.useState(void 0),f=c[0],p=c[1],g=function(b,v){b!==void 0?(p(r),u(b==="success"?"success":"not-valid-error")):v!==void 0&&(v||(u("not-valid-error"),p(a?a.reduce(function(z,h){return z+="".concat(h,". "),z},""):"")))};return t.useEffect(function(){g(n,i)},[n,i]),t.createElement(t.Fragment,null,l&&f&&s&&t.createElement("span",{className:"files-ui-tooltiptext ".concat(s)},f))},ta=function(e){var n=e.downloadUrl,i=e.anchorRef,a=e.fileName;function r(l){l.stopPropagation()}return n?t.createElement("a",{ref:i,target:"_blank",href:n,download:a,hidden:!0,rel:"noopener noreferrer",onClick:r},"download_file"):t.createElement(t.Fragment,null)};w(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.files-ui-file-mosaic-main-container {
  width: 132px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 400;
  word-break: break-word;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container {
  width: 132px;
  height: 132px;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer.blur img {
  filter: blur(4px);
  width: 200%;
  height: 200%;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer .file-mosaic-footer-right {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: flex-end;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer .file-mosaic-footer-left {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: center;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer {
  position: absolute;
  left: 0;
  right: 0;
  text-align: left;
  scrollbar-width: thin;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  font-family: "Poppins", sans-serif;
  width: inherit;
  background-color: rgba(0, 0, 0, 0.85);
  word-break: break-word;
  height: 100%;
  width: 100%;
  font-size: 0.8rem;
  transition: all 0.5s ease 0s;
  overflow: auto;
  color: white;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar {
  width: 9px;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar-track {
  background: transparent;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar-thumb {
  background-color: rgba(100, 108, 127, 0.662745098);
  border-radius: 20px;
  border: transparent;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .files-ui-file-mosaic-info-layer-header {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .heading {
  font-weight: 600;
  padding: 0 5px;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .label {
  padding: 0 5px;
  font-weight: 399;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-file-name {
  margin-top: 1px;
  height: 31px;
  text-align: center;
  width: 100%;
  color: black;
  font-size: 0.95em;
  box-sizing: border-box;
  line-height: 15px;
  font-weight: 400;
  letter-spacing: 0.07rem;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  /*  display: flex;
   align-items: center;
   justify-content: center; */
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-file-name.dark-mode {
  color: rgba(255, 255, 255, 0.7);
}
.files-ui-file-mosaic-main-container.clickable {
  cursor: pointer;
}

/* .files-ui-file-icon {
  font-size: 0.7rem;
  min-width: 19px;
  min-height: 19px;
  margin: 0;
  padding: 2px 2px;
  border-radius: 50%;
  background-color: rgba(32, 33, 36, 0.65);
  word-break: break-word;
  box-sizing: content-box;
  &:hover {
    background-color: rgba(32, 33, 36, 0.85);
  }
  &.dark-mode {
    background-color: rgba(154, 160, 166, 0.65);
    &:hover {
      background-color: rgba(154, 160, 166, 0.85);
    }
  }
}
 */`);w(`.files-ui-layer-container {
  position: relative;
}`);var aa=function(e){var n=e.style,i=e.className,a=e.children,r=ce(i||"","files-ui-layer-container");return t.createElement("div",{className:r,style:n},a)},ra=function(e){var n=e.fileName;return n?t.createElement("span",null,n):t.createElement(t.Fragment,null)};w(`.files-ui-file-mosaic-upload-layer {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  position: relative;
  overflow: hidden;
}
.files-ui-file-mosaic-upload-layer .elevation-list {
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.files-ui-file-mosaic-upload-layer .elevation-list .elevation-item {
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
}
.files-ui-file-mosaic-upload-layer .elevation-list .elevation-item span {
  text-align: center;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}`);var la=function(e){var n=e.uploadStatus,i=e.onCancel,a=e.onAbort,r=e.progress,l=e.localization,o=t.useRef(null),s=t.useRef(null),u=t.useState([void 0]),c=u[0],f=u[1];t.useEffect(function(){f(function(g){if(g[g.length-1]==="preparing"&&n==="uploading"){var b=oe([],g,!0);return b[g.length-1]=n,oe([],b,!0)}return oe(oe([],g,!0),[n],!1)})},[n]);var p=function(){var g=o.current,b=s.current;g===null||b===null||(b.style.top=0-(c.length-1)*132+"px")};return t.useEffect(function(){c.length>1&&p()},[c.length]),t.createElement("div",{className:"elevation-layer-container",ref:o},t.createElement("div",{className:"elevation-list",ref:s},c.map(function(g,b){switch(g){case"preparing":return t.createElement("div",{className:"elevation-item",key:b+1},t.createElement(Qt,{onCancel:i,localization:l}));case"uploading":return t.createElement("div",{className:"elevation-item",key:b+1},t.createElement(na,{onAbort:a,progress:r,localization:l}));case"error":return t.createElement("div",{className:"elevation-item",key:b+1},t.createElement(qt,{localization:l}));case"success":return t.createElement("div",{className:"elevation-item",key:b+1},t.createElement(Jt,{localization:l}));case"aborted":return t.createElement("div",{className:"elevation-item",key:b+1},t.createElement(Gt,{localization:l}));default:return t.createElement("div",{className:"elevation-item",key:b+1},t.createElement(Yt,null))}})))},$e=function(e){var n=e.imageSource,i=e.url,a=e.fileName,r=e.card,l=e.isBlur,o=e.smartImgFit,s=t.useState(void 0),u=s[0],c=s[1],f=t.useState(!1),p=f[0],g=f[1];t.useEffect(function(){c(n||i)},[n,i]);var b=function(){g(!0),c(i)};return l?t.createElement(t.Fragment,null,!r&&!p&&n&&t.createElement(we,{src:u,alt:"blur ".concat(a),smartImgFit:!1})):t.createElement(t.Fragment,null,t.createElement(we,{onError:b,src:u,style:{borderRadius:"0px"},alt:"preview ".concat(a),smartImgFit:o}))};w(`.files-ui-file-item-status-container {
  text-align: center;
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
  padding: 0.5px;
  font-weight: 400;
}
.files-ui-file-item-status-container.file-status-error {
  color: #f44336;
}
.files-ui-file-item-status-container.file-status-ok {
  color: #5c7a1f;
}
.files-ui-file-item-status-container.file-status-loading {
  position: relative;
  display: flex;
  color: #8b6b10;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
}
.files-ui-file-item-status-container.file-status-loading.percentage {
  padding: 7px 4px 2px 5px;
}
.files-ui-file-item-status-container.file-status-loading .abort-button {
  position: absolute;
  right: -2px;
  top: -2px;
}
.files-ui-file-item-status-container.file-status-loading .uploading-text.up {
  margin-bottom: -22px;
}
.files-ui-file-item-status-container.file-status-loading .uploading-text.down {
  margin-top: -20px;
}
.files-ui-file-item-status-container.file-status-loading .uploading-text p.percentage {
  font-weight: 500;
}`);var ln=function(e){var n=e.valid,i=e.uploadStatus,a=e.localization,r=e.style,l=Q(a).status;return i==="success"?t.createElement("div",{className:"files-ui-file-item-status-container file-status-ok",style:r},t.createElement(Mt,{color:"#4caf50",size:"small",className:"status-icon"}),l.success):i==="error"||i==="aborted"?t.createElement("div",{className:"files-ui-file-item-status-container file-status-error",style:r},t.createElement(Bt,{color:"#f44336",size:"semi-medium",className:"status-icon"}),l.error):n!=null?n?t.createElement("div",{className:"files-ui-file-item-status-container file-status-ok",style:r},t.createElement(nn,{color:"#4caf50",size:"small",className:"status-icon"}),l.valid):t.createElement("div",{className:"files-ui-file-item-status-container file-status-error",style:r},t.createElement(tn,{color:"#f44336",size:"small",className:"status-icon"}),l.denied):t.createElement(t.Fragment,null)},oa=function(e){var n=e.valid,i=e.localization,a=e.onCloseInfo,r=e.uploadStatus,l=e.localName,o=e.sizeFormatted,s=e.localType,u=Q(i),c=u.fullInfoLayer,f=c.name,p=c.size,g=c.type;return t.createElement(t.Fragment,null,t.createElement("div",{className:"files-ui-file-mosaic-info-layer-header"},t.createElement(Ot,{color:"rgba(255,255,255,0.8)",onClick:a,colorFill:"black"}),t.createElement(ln,{valid:n,uploadStatus:r,localization:i})),t.createElement("div",{className:"heading"},f),t.createElement("div",{className:"label"},l),t.createElement("div",{className:"heading"},p),t.createElement("div",{className:"label"},o),t.createElement("div",{className:"heading"},g),t.createElement("div",{className:"label"},s))};w(`.filesui-file-item-size {
  box-sizing: border-box;
  font-size: 0.7rem;
  border: 0.5px solid wheat;
  text-align: center;
  color: rgba(255, 255, 255, 0.89);
  padding: 2px 1.5px;
  border-radius: 7px;
  background-color: rgba(32, 33, 36, 0.75);
  min-width: 45px;
  word-break: break-word;
  font-family: inherit;
}
.filesui-file-item-size:hover {
  background-color: rgba(32, 33, 36, 0.85);
  color: rgba(255, 255, 255, 0.97);
}`);var sa=function(e){var n=e.sizeFormatted;return t.createElement(t.Fragment,null,n&&t.createElement("div",{className:"filesui-file-item-size"},n))},ca=function(e){var n=e.darkMode,i=e.deleteIcon,a=e.downloadIcon,r=e.imageIcon,l=e.infoIcon,o=e.onDelete,s=e.onDownload,u=e.onOpenInfo,c=e.onSee,f=e.onWatch,p=e.sizeFormatted,g=e.valid,b=e.videoIcon,v=e.localization,z=e.uploadStatus,h=e.isActive;return t.createElement(t.Fragment,null,t.createElement("div",{className:"file-mosaic-main-layer-header"},h&&i&&t.createElement(ae,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:o,size:"small",colorFill:"transparent"})),t.createElement("div",{className:"file-mosaic-main-layer-footer"},t.createElement("div",{className:"file-mosaic-footer-left"},t.createElement(ln,{valid:g,uploadStatus:z,localization:v}),h&&p&&t.createElement(sa,{sizeFormatted:p})),t.createElement("div",{className:"file-mosaic-footer-right"},h&&t.createElement(t.Fragment,null,r&&t.createElement(Dt,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:c,size:"small"}),b&&t.createElement(_t,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:f,size:"small"}),a&&t.createElement(Pt,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:s,size:"small"}),l&&t.createElement(Rt,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",onClick:u,color:n?"#121212":"rgba(255,255,255,0.851)",size:"micro"})))))},ua=function(e){var n=e.style,i=e.className,a=e.file,r=e.name,l=e.size,o=e.type,s=e.id,u=e.valid,c=e.errors,f=e.uploadStatus,p=e.uploadMessage,g=e.progress,b=e.xhr,v=e.localization,z=e.preview,h=e.imageUrl,B=e.videoUrl,j=e.info,F=e.backgroundBlurImage,I=F===void 0?!0:F,k=e.darkMode,y=e.alwaysActive,S=y===void 0?!0:y,P=e.resultOnTooltip,_=P===void 0?!0:P,L=e.downloadUrl,$=e.onDelete,D=e.onCancel,T=e.onAbort,H=e.onDownload,U=e.onSee,Z=e.onWatch,V=e.onDoubleClick,d=e.onClick,m=e.onRightClick,O=e.smartImgFit,N=O===void 0?"orientation":O,R=t.useContext($t),E=R.darkMode,K=R.icons,A=R.localization,ne=v!==void 0?v:A,Ee=k!==void 0?k:E,Ce=t.useRef(null),on=ce(ce("files-ui-file-mosaic-main-container files-ui-tooltip",i),d?"clickable":void 0),sn=Ee?"files-ui-file-mosaic-file-name dark-mode":"files-ui-file-mosaic-file-name",de=It(a,r,o,l),ie=de[0],cn=de[1],un=de[2],dn=Wt(g,b),J=Ht(a,r,o,u,z,h,B,K),fn=J[0],mn=J[1],pn=J[2],Se=J[3],fe=J[4],gn=J[5],Ne=Yn(un),je=t.useState(!1),me=je[0],Fe=je[1],Ie=t.useState(!1),bn=Ie[0],Le=Ie[1],vn=function(){S||Le(!0)},xn=function(){S||Le(!1)},hn=function(){return $==null?void 0:$(s)},yn=function(){return Fe(!0)},Oe=function(){return Fe(!1)},re=Xt(f);t.useEffect(function(){re&&me&&Oe()},[re]);function wn(G){G.stopPropagation(),d==null||d(G)}var kn=function(G){G.preventDefault(),V==null||V(G)};function zn(G){m==null||m(G)}var En=function(){var G=Ce.current;G&&G.click()},Cn=function(){H?H==null||H(s,L):typeof L=="string"&&En()},Sn=function(){b==null||b.abort(),T==null||T(s)};return fn?t.createElement("div",{className:on,style:n,onClick:wn,onMouseEnter:vn,onMouseLeave:xn,onDoubleClick:kn,onContextMenu:zn},t.createElement(aa,{className:"files-ui-file-mosaic-icon-layer-container",style:n},t.createElement(te,{className:"files-ui-file-mosaic-image-layer blur",visible:I},t.createElement($e,{imageSource:fe,url:Se,fileName:ie,isBlur:!0,smartImgFit:!1})),t.createElement(te,{className:"files-ui-file-mosaic-image-layer",visible:!0},t.createElement($e,{imageSource:fe,url:Se,fileName:ie,isBlur:!1,smartImgFit:N})),t.createElement(te,{className:"files-ui-file-mosaic-main-layer",visible:!re&&!me},t.createElement(ca,{deleteIcon:$!==void 0,onDelete:hn,darkMode:Ee,valid:u,uploadStatus:f,localization:ne,sizeFormatted:Ne,imageIcon:mn&&U!==void 0,onSee:function(){return U==null?void 0:U(fe)},videoIcon:pn&&Z!==void 0,onWatch:function(){return Z==null?void 0:Z(gn)},downloadIcon:H!==void 0||L!==void 0,onDownload:Cn,infoIcon:j!==void 0,onOpenInfo:yn,isActive:S||bn})),t.createElement(te,{className:"files-ui-file-mosaic-info-layer",visible:me,onClick:q},t.createElement(oa,{onCloseInfo:Oe,valid:u,localization:ne,localName:ie,sizeFormatted:Ne,localType:cn})),t.createElement(te,{className:"files-ui-file-mosaic-upload-layer",visible:re,onClick:q},t.createElement(la,{uploadStatus:f,progress:dn,onCancel:D?function(){return D==null?void 0:D(s)}:void 0,onAbort:T?Sn:void 0,localization:ne}))),t.createElement("div",{className:sn},t.createElement(ra,{fileName:ie})),t.createElement(ia,{open:_,uploadStatus:f,valid:u,errors:c,uploadMessage:p}),t.createElement(ta,{fileName:ie,anchorRef:Ce,downloadUrl:L})):t.createElement(t.Fragment,null)};w(`.fui-fullscreen-container {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.734);
  transform: translate(100%);
  transition: transform 0.2s ease-in-out;
  margin: 0 !important;
  z-index: 4000;
  box-sizing: border-box;
}
.fui-fullscreen-container.show-fs {
  transform: translate(0);
}

.fui-fullscreen-relative-container {
  position: relative;
  width: 90%;
  height: 90%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /*   @media (max-width: 600px) {
    width: 80%;
    height: auto;
  }*/
}
.fui-fullscreen-relative-container img {
  height: 100%;
  width: auto;
}
.fui-fullscreen-relative-container video {
  height: 100%;
  width: auto;
}
@media (max-width: 960px) {
  .fui-fullscreen-relative-container {
    height: 90%;
    width: 100%;
  }
  .fui-fullscreen-relative-container video {
    height: auto;
    width: 100%;
  }
  .fui-fullscreen-relative-container img {
    height: auto;
    width: 100%;
  }
}

.button-full-screen {
  position: absolute;
  top: 0;
  right: 0;
}`);var He=function(e){var n=e.open,i=e.onClose,a=e.children;function r(l){l.stopPropagation(),i==null||i()}return t.useEffect(function(){var l=function(o){o.key==="Escape"&&(i==null||i())};return document.addEventListener("keydown",l),function(){document.removeEventListener("keydown",l)}},[]),t.createElement("div",{className:n?"fui-fullscreen-container show-fs":"fui-fullscreen-container",onClick:r},n&&t.createElement("div",{className:"fui-fullscreen-relative-container",onClick:r},a),i&&t.createElement(ae,{color:"rgba(255,255,255,0.8)",onClick:r,colorFill:"transparent",className:"button-full-screen",size:"extra-large"}))},da=function(e){var n=e.src,i=e.style,a=e.className,r=Ge(e,["src","style","className"]),l=t.useRef(null),o=t.useState(void 0),s=o[0],u=o[1];return t.useEffect(function(){if(n)if(typeof n=="string")u(n);else{var c=n.type?n.type.split("/")[0]:"octet",f=n.type?n.type.split("/")[1]:"octet";if(c==="video"&&["mp4","ogg","webm"].includes(f)){var p=URL.createObjectURL(n);u(p)}}},[n]),t.useEffect(function(){s&&l.current&&l.current.load()},[s]),t.createElement(t.Fragment,null,n&&s&&t.createElement("video",C({onClick:function(c){c.preventDefault()},id:"files-ui-video",ref:l,className:a||"filesui-video-preview",src:s,height:"100%",style:i},r),t.createElement("source",{type:"video/webm"}),t.createElement("source",{type:"video/ogg"}),t.createElement("source",{type:"video/mp4"})))};const fa="menu-id-1",ma="menu-id-2",pa="menu-id-3",ga="menuFolder";function Pa(){const{show:e}=le({id:fa}),{show:n}=le({id:ma}),{show:i}=le({id:pa}),{show:a}=le({id:ga}),[r,l]=t.useState([]),[o,s]=t.useState(),[u,c]=t.useState("uploads"),[f,p]=t.useState(void 0),[g,b]=t.useState(void 0),[v,z]=t.useState([]),[h,B]=t.useState([]),{token:{colorBgContainer:j}}=On.useToken(),[F,I]=t.useState([{title:"uploads"}]),[k,y]=t.useState(""),[S,P]=t.useState(""),_=({event:d,node:m})=>{d.preventDefault(),m.isLeaf?r.length===0?(m.parent&&s(m.parent.key),e({event:d})):(s(m.parent.key),n({event:d})):(e({event:d}),s(m.key))},L=d=>{p(d)},$=d=>{b(d)};t.useState([]);const D=async(d,m)=>{if(m)try{const O=await fetch(m);if(!O.ok){_e("Tải xuống bị lỗi","File không tồn tại hoặc đã bị xóa khỏi hệ thống");return}const N=await O.blob(),R=URL.createObjectURL(N),E=document.createElement("a");E.href=R,E.download=d||"newFile.jpeg",document.body.appendChild(E),E.click(),document.body.removeChild(E),URL.revokeObjectURL(R)}catch{_e("Tải xuống bị lỗi","File không tồn tại hoặc đã bị xóa khỏi hệ thống")}};t.useState([!1,!1]),t.useState(""),t.useState(""),t.useState(!1);const T=d=>{c(d),I(Z(d)),V(d)},H=(d,m="")=>{const O=(N,R)=>{const E=R?`${R}/${N.name}`:N.name;if(N.type==="file")return{title:N.name,key:N.path,isLeaf:!0};if(N.type==="directory"){const K=N.children?N.children.map(A=>O(A,E)):[];return K.sort((A,ne)=>A.isLeaf===ne.isLeaf?0:A.isLeaf?1:-1),{title:N.name,key:N.path,className:"non-leaf-node",path:E,children:K}}};return O(d,m)},U=d=>(d.sort((m,O)=>m.type==="directory"&&O.type==="file"?-1:m.type==="file"&&O.type==="directory"?1:0),d.map(m=>{let O=m.type==="file"?m.mimeType:"folder";if(m.type==="file")return{name:m.name,type:O,size:m.size,url:`${pe}/${m.path}`,downloadUrl:`${pe}/${m.path}`};if(m.type==="directory")return{name:m.name,type:O,size:m.size,children:m.children?U(m.children):[]}})),Z=d=>{const m=d.split("/");return m.map((N,R)=>{let E={title:N};return R<m.length-1&&(E.href="#"),E})};t.useEffect(()=>{Re.allFile().then(d=>{z([H(d)])})},[]);const V=d=>{Re.filesInFolder({folderName:d}).then(m=>{B(U(m))})};return t.useEffect(()=>{V(u)},[]),x.jsx(Mn,{header:x.jsx("div",{className:"flex items-center h-full",children:x.jsx("h6",{className:"mb-0",children:"QUẢN LÝ FILE"})}),children:x.jsxs("div",{onClick:()=>y(null),children:[x.jsxs(ge,{gutter:[24,24],children:[x.jsx(ee,{md:{span:6},span:24,children:x.jsx(Rn,{className:"overflow-auto p-2",style:{height:"calc(100vh - 120px)"},showLine:!0,defaultExpandAll:!0,switcherIcon:x.jsx(Xe,{className:"fs-7"}),onSelect:()=>console.log("onSelect"),onClick:(d,m)=>{(m==null?void 0:m.isLeaf)==null&&T(m.path)},onRightClick:_,treeData:v})}),x.jsxs(ee,{className:"overflow-auto p-2",style:{height:"calc(100vh - 105px)",backgroundColor:j},md:{span:18},span:24,onContextMenu:d=>{a({event:d})},children:[x.jsxs(ge,{gutter:[24,24],children:[x.jsx(ee,{className:"flex justify-center items-center",xxl:{span:2},xl:{span:4},md:{span:6},children:x.jsx(_n,{onClick:()=>T(u.substring(0,u.lastIndexOf("/"))),disabled:u==="uploads"||u==="",type:"text",block:!0,children:x.jsx(Pn,{size:20})})}),x.jsx(ee,{xxl:{span:22},xl:{span:20},md:{span:18},children:x.jsx(ze,{className:"fs-6",separator:">",items:F})})]}),x.jsx(ge,{children:h.length===0?x.jsx(ee,{span:24,children:x.jsx(Dn,{})}):h.map(d=>x.jsx(ee,{xl:{span:4},lg:{span:6},md:{span:8},span:12,className:"flex justify-center items-center p-4 mb-2",children:d.type==="folder"?x.jsxs("div",{className:"hover-folder position-relative",children:[x.jsx("img",{className:"folder-img position-relative",onDoubleClick:()=>{T(`${u}/${d.name}`)},onContextMenu:m=>{m.preventDefault(),m.stopPropagation(),P(d),i({event:m})},src:`${pe}/system/file/folder.png`,alt:"Hình ảnh folder"}),x.jsx("div",{className:"position-absolute folder-name",children:d.name})]}):x.jsx(ua,{className:`hover-file h-full ${k&&k.url===d.url?"selected":""}`,style:{width:"100%",height:"100%"},name:d.name,type:d.type,size:d.size,imageUrl:d.url,smartImgFit:"center",onDownload:()=>D(d.name,d.downloadUrl),onSee:d.type.startsWith("video/")?$:d.type.startsWith("image/")?L:void 0,onRightClick:m=>{y(d),m.stopPropagation(),i({event:m})},onClick:()=>{y(d)}})},d.name))})]})]}),x.jsx(He,{open:f!==void 0,onClose:()=>p(void 0),children:x.jsx(we,{src:f})}),x.jsx(He,{open:g!==void 0,onClose:()=>b(void 0),children:x.jsx(da,{src:g,autoPlay:!0,controls:!0})})]})})}export{Pa as default};
