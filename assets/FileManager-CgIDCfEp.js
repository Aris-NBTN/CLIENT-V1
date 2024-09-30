import{r,M as ke,aK as $e,o as xe,F as jn,G as Nn,H as Cn,I as Me,aL as Sn,Y as Oe,aM as Fn,L as S,W as he,j as d,f as Ve,e as In,t as Ln,c as Mn,d as Pe,aN as On,aO as Pn,aP as Rn,aQ as Bn,k as _n}from"./index-bwOTuzAT.js";import{b7 as Tn}from"./Layout-Csu-sfMs.js";import{D as Dn,l as Hn,m as An,n as Un,o as $n,p as Vn,q as Xn,T as Wn}from"./index-5Oj6Dx0r.js";import{I as Gn}from"./index--jMtrvYf.js";import{U as Zn}from"./index-Ckq8qb-Q.js";import{B as Y}from"./TextArea-BSyf-wd8.js";import{R as ae,C as $}from"./row-Cbh7OpyR.js";import{R as qn}from"./index-Dlw4ObIR.js";import{T as Kn}from"./index-DBSm4aWt.js";import{M as Yn}from"./index-B-m8jKNI.js";import{I as Qn}from"./index-Df598U2L.js";import"./index-DqlZTV-q.js";import"./CheckOutlined--i9GrI_G.js";import"./EllipsisOutlined-_3EUVNj_.js";import"./Overflow-BYLru37j.js";import"./index-DnPka7B9.js";import"./progress-BvoH6sIk.js";import"./index-CR8zkw6M.js";import"./SearchOutlined-Bp-Ap9qm.js";import"./iconUtil-Cq-2CeaN.js";import"./index-JWdyHt5z.js";const de=e=>{let{children:n}=e;const{getPrefixCls:i}=r.useContext(ke),a=i("breadcrumb");return r.createElement("li",{className:`${a}-separator`,"aria-hidden":"true"},n===""?n:n||"/")};de.__ANT_BREADCRUMB_SEPARATOR=!0;var Jn=function(e,n){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(i[a[t]]=e[a[t]]);return i};function ei(e,n){if(e.title===void 0||e.title===null)return null;const i=Object.keys(n).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${i})`,"g"),(a,t)=>n[t]||a)}function Xe(e,n,i,a){if(i==null)return null;const{className:t,onClick:l}=n,o=Jn(n,["className","onClick"]),s=Object.assign(Object.assign({},$e(o,{data:!0,aria:!0})),{onClick:l});return a!==void 0?r.createElement("a",Object.assign({},s,{className:xe(`${e}-link`,t),href:a}),i):r.createElement("span",Object.assign({},s,{className:xe(`${e}-link`,t)}),i)}function ni(e,n){return(a,t,l,o,s)=>{if(n)return n(a,t,l,o);const u=ei(a,t);return Xe(e,a,u,s)}}var ve=function(e,n){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(i[a[t]]=e[a[t]]);return i};const We=e=>{const{prefixCls:n,separator:i="/",children:a,menu:t,overlay:l,dropdownProps:o,href:s}=e,c=(f=>{if(t||l){const p=Object.assign({},o);if(t){const g=t||{},{items:b}=g,h=ve(g,["items"]);p.menu=Object.assign(Object.assign({},h),{items:b==null?void 0:b.map((E,y)=>{var{key:I,title:m,label:v,path:k}=E,x=ve(E,["key","title","label","path"]);let w=v??m;return k&&(w=r.createElement("a",{href:`${s}${k}`},w)),Object.assign(Object.assign({},x),{key:I??y,label:w})})})}else l&&(p.overlay=l);return r.createElement(Dn,Object.assign({placement:"bottom"},p),r.createElement("span",{className:`${n}-overlay-link`},f,r.createElement(qn,null)))}return f})(a);return c!=null?r.createElement(r.Fragment,null,r.createElement("li",null,c),i&&r.createElement(de,null,i)):null},Ge=e=>{const{prefixCls:n,children:i,href:a}=e,t=ve(e,["prefixCls","children","href"]),{getPrefixCls:l}=r.useContext(ke),o=l("breadcrumb",n);return r.createElement(We,Object.assign({},t,{prefixCls:o}),Xe(o,t,i,a))};Ge.__ANT_BREADCRUMB_ITEM=!0;const ii=Ge,ai=e=>{const{componentCls:n,iconCls:i,calc:a}=e;return{[n]:Object.assign(Object.assign({},Cn(e)),{color:e.itemColor,fontSize:e.fontSize,[i]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${Me(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:a(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},Sn(e)),"li:last-child":{color:e.lastItemColor},[`${n}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${n}-link`]:{[`
          > ${i} + span,
          > ${i} + a
        `]:{marginInlineStart:e.marginXXS}},[`${n}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${Me(e.paddingXXS)}`,marginInline:a(e.marginXXS).mul(-1).equal(),[`> ${i}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},ti=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}),ri=jn("Breadcrumb",e=>{const n=Nn(e,{});return ai(n)},ti);var Re=function(e,n){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(i[a[t]]=e[a[t]]);return i};function li(e){const{breadcrumbName:n,children:i}=e,a=Re(e,["breadcrumbName","children"]),t=Object.assign({title:n},a);return i&&(t.menu={items:i.map(l=>{var{breadcrumbName:o}=l,s=Re(l,["breadcrumbName"]);return Object.assign(Object.assign({},s),{title:o})})}),t}function oi(e,n){return r.useMemo(()=>e||(n?n.map(li):null),[e,n])}var si=function(e,n){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(i[a[t]]=e[a[t]]);return i};const ci=(e,n)=>{if(n===void 0)return n;let i=(n||"").replace(/^\//,"");return Object.keys(e).forEach(a=>{i=i.replace(`:${a}`,e[a])}),i},re=e=>{const{prefixCls:n,separator:i="/",style:a,className:t,rootClassName:l,routes:o,items:s,children:u,itemRender:c,params:f={}}=e,p=si(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:g,direction:b,breadcrumb:h}=r.useContext(ke);let E;const y=g("breadcrumb",n),[I,m,v]=ri(y),k=oi(s,o),x=ni(y,c);if(k&&k.length>0){const F=[],L=s||o;E=k.map((C,R)=>{const{path:M,key:B,type:_,menu:T,overlay:V,onClick:A,className:D,separator:q,dropdownProps:ne}=C,J=ci(f,M);J!==void 0&&F.push(J);const X=B??R;if(_==="separator")return r.createElement(de,{key:X},q);const H={},K=R===k.length-1;T?H.menu=T:V&&(H.overlay=V);let{href:W}=C;return F.length&&J!==void 0&&(W=`#/${F.join("/")}`),r.createElement(We,Object.assign({key:X},H,$e(C,{data:!0,aria:!0}),{className:D,dropdownProps:ne,href:W,separator:K?"":i,onClick:A,prefixCls:y}),x(C,f,L,F,W))})}else if(u){const F=Oe(u).length;E=Oe(u).map((L,C)=>{if(!L)return L;const R=C===F-1;return Fn(L,{separator:R?"":i,key:C})})}const w=xe(y,h==null?void 0:h.className,{[`${y}-rtl`]:b==="rtl"},t,l,m,v),j=Object.assign(Object.assign({},h==null?void 0:h.style),a);return I(r.createElement("nav",Object.assign({className:w,style:j},p),r.createElement("ol",null,E)))};re.Item=ii;re.Separator=de;function z(e){if(!e||typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n),e}var N=function(){return N=Object.assign||function(n){for(var i,a=1,t=arguments.length;a<t;a++){i=arguments[a];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(n[l]=i[l])}return n},N.apply(this,arguments)};function di(e,n){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(i[a[t]]=e[a[t]]);return i}function ye(e,n,i,a){function t(l){return l instanceof i?l:new i(function(o){o(l)})}return new(i||(i=Promise))(function(l,o){function s(f){try{c(a.next(f))}catch(p){o(p)}}function u(f){try{c(a.throw(f))}catch(p){o(p)}}function c(f){f.done?l(f.value):t(f.value).then(s,u)}c((a=a.apply(e,[])).next())})}function we(e,n){var i={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},a,t,l,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(c){return function(f){return u([c,f])}}function u(c){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(i=0)),i;)try{if(a=1,t&&(l=c[0]&2?t.return:c[0]?t.throw||((l=t.return)&&l.call(t),0):t.next)&&!(l=l.call(t,c[1])).done)return l;switch(t=0,l&&(c=[c[0]&2,l.value]),c[0]){case 0:case 1:l=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,t=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(l=i.trys,!(l=l.length>0&&l[l.length-1])&&(c[0]===6||c[0]===2)){i=0;continue}if(c[0]===3&&(!l||c[1]>l[0]&&c[1]<l[3])){i.label=c[1];break}if(c[0]===6&&i.label<l[1]){i.label=l[1],l=c;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(c);break}l[2]&&i.ops.pop(),i.trys.pop();continue}c=n.call(e,i)}catch(f){c=[6,f],t=0}finally{a=l=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function oe(e,n,i){if(i||arguments.length===2)for(var a=0,t=n.length,l;a<t;a++)(l||!(a in n))&&(l||(l=Array.prototype.slice.call(n,0,a)),l[a]=n[a]);return e.concat(l||Array.prototype.slice.call(n))}var ui=function(e){var n="";if(e)return e<1024?n=e+" Bytes":e<1024*1024?n=(e/1024).toFixed(2)+" KB":e<1024*1024*1024?n=(e/1024/1024).toFixed(2)+" MB":e<1024*1024*1024*1024?n=(e/1024/1024/1024).toFixed(2)+" GB":n=(e/1024/1024/1024/1024).toFixed(2)+" TB",n},fi={fullInfoLayer:{name:"Nome: ",size:"Dimensione: ",type:"Tipo: "},status:{preparing:"preparazione",uploading:"In corso",success:"Successo",valid:"Valido",denied:"Non válido",error:"Errore",aborted:"Interrotto"}},mi={fullInfoLayer:{name:"Le nom: ",size:"Le taille: ",type:"Le type: "},status:{preparing:"préparer",uploading:"En cours",success:"Succès",valid:"Valide",denied:"Refusé",error:"Erreur",aborted:"Interrompu"}},pi={fullInfoLayer:{name:"Name: ",size:"Size: ",type:"Type: "},status:{preparing:"Preparing",uploading:"Uploading",success:"Success",valid:"Valid",denied:"Not valid",error:"Error",aborted:"Aborted"}},gi={fullInfoLayer:{name:"Nombre: ",size:"Tamaño: ",type:"Tipo: "},status:{preparing:"Preparando",uploading:"Subiendo",success:"Éxito",valid:"Válido",denied:"No válido",error:"Error",aborted:"Anulado"}},bi={fullInfoLayer:{name:"Имя: ",size:"Размер: ",type:"Tип: "},status:{preparing:"подготовка",uploading:"Загрузка",success:"успех",valid:"годный",denied:"выкинутый",error:"ошибка",aborted:"прерванный"}},xi={fullInfoLayer:{name:"Nome: ",size:"Tamanho: ",type:"Tipo: "},status:{preparing:"Preparando",uploading:"Enviando",success:"Êxito",valid:"válido",denied:"Negado",error:"Erro",aborted:"Abortado"}},hi={fullInfoLayer:{name:"文档名称: ",size:"尺寸: ",type:"文件类型: "},status:{preparing:"预加载",uploading:"上传",success:"成功",valid:"接受的文件",denied:"被拒绝的文件",error:"错误",aborted:"中止"}},vi={fullInfoLayer:{name:"文檔名稱: ",size:"文件大小: ",type:"文件類型: "},status:{preparing:"預加載",uploading:"上傳",success:"成功",valid:"有效文件",denied:"無效文件",error:"錯誤",aborted:"中止"}},G={"ES-es":gi,"EN-en":pi,"FR-fr":mi,"IT-it":fi,"PT-pt":xi,"RU-ru":bi,"ZH-cn":hi,"ZH-hk":vi},Q=function(e){switch(e){case"ES-es":return G["ES-es"];case"EN-en":return G["EN-en"];case"FR-fr":return G["FR-fr"];case"IT-it":return G["IT-it"];case"PT-pt":return G["PT-pt"];case"RU-ru":return G["RU-ru"];case"ZH-cn":return G["ZH-cn"];case"ZH-hk":return G["ZH-hk"];default:return G["EN-en"]}},Ze=function(e,n,i){return new Promise(function(a,t){try{var l=new FileReader;l.onprogress=function(){n==null||n()},l.onerror=function(){i==null||i()},l.onload=function(){a(l.result)},l.readAsDataURL(e)}catch{t(void 0)}})};function yi(e){return new Promise(function(n,i){if(!e||e.length===0){i("landscape");return}try{var a=new Image;a.src=e,a.onerror=function(t){i("landscape")},a.onload=function(){var t=a.width,l=a.height;t>l?n("landscape"):n("portrait")}}catch{i("landscape")}})}var wi="https://user-images.githubusercontent.com/43678736/132086517-72a51a12-e403-4675-bfd7-22c23affa730.png",ki="https://user-images.githubusercontent.com/43678736/132086518-7026d4f1-ea16-4ed0-89fd-37c1aa8ac3ed.png",zi="https://user-images.githubusercontent.com/43678736/132086519-863c63b4-917e-4471-94ff-7e15651cc14b.png",Ei="https://user-images.githubusercontent.com/43678736/132086520-9bc6aa3b-51c9-4da2-9ef7-349162b86d0b.png",ji="https://user-images.githubusercontent.com/43678736/132086521-dbd6cf0d-d4d7-4b92-bb26-17e8a51a9383.png",Ni="https://user-images.githubusercontent.com/43678736/132086522-070f48e8-78a8-4294-8dbb-aab81525e164.png",Ci="https://user-images.githubusercontent.com/43678736/132086595-90ab7f90-f87e-4900-94d9-d0b26745df48.png",Si="https://user-images.githubusercontent.com/43678736/132086597-e285ad5c-613a-4679-a270-493e5be4ffd9.png",Fi="https://user-images.githubusercontent.com/43678736/132086598-623c410a-084a-4395-a448-211b2ff61cfe.png",Ii="https://user-images.githubusercontent.com/43678736/132086600-8b70a007-512d-4252-9c66-eabd3ddd6573.png",Li="https://user-images.githubusercontent.com/43678736/132086601-e62e5d1a-d8a2-4475-a14f-85922cec9272.png",Mi="https://user-images.githubusercontent.com/43678736/132086602-4c772934-f608-4f01-8459-c4622cee8ad5.png",Oi="https://user-images.githubusercontent.com/43678736/132086604-b5b019fe-572e-477e-92c2-3769a48a1304.png",Pi="https://user-images.githubusercontent.com/43678736/132086606-715ccb66-4702-4f7d-9b09-ac93ba17b643.png",Ri="https://user-images.githubusercontent.com/43678736/132086608-bcae9d57-8e54-488c-90c4-4952ae530b5e.png",Bi="https://user-images.githubusercontent.com/43678736/132086618-397d6bd2-9fda-43ed-a135-cb40388c35af.png",_i="https://user-images.githubusercontent.com/43678736/132086620-2586ba40-c583-4589-b1a4-8bb5b258b44d.png",Ti="https://user-images.githubusercontent.com/43678736/132086621-3b95fb64-2533-4ccc-abcd-bd2beba572e9.png",Di="https://user-images.githubusercontent.com/43678736/132086622-af705a0c-2b25-4ba7-8ab6-bd69ec97f7e2.png",Hi="https://user-images.githubusercontent.com/43678736/132086624-89141a46-64e4-4fa0-bf69-54a0eb4d48c9.png",Be="https://user-images.githubusercontent.com/43678736/132086625-1b8f2652-1de0-4475-8c12-7da4a9973ffb.png",Ai="https://user-images.githubusercontent.com/43678736/132086626-38699705-1e6f-4bca-984b-03167b236faa.png",Ui="https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png",$i="https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png",Vi="https://user-images.githubusercontent.com/43678736/132086652-4562942e-aaea-466c-968f-380fffabf3f9.png",Xi="https://user-images.githubusercontent.com/43678736/132086653-0487e7e2-1ee3-49e2-8cfe-3e20f1f7490a.png",Wi="https://user-images.githubusercontent.com/43678736/132086656-6e96c815-e4e2-4ffd-9d71-57e9cc2450bc.png",Gi="https://user-images.githubusercontent.com/43678736/132086658-5d27d3c2-394f-43fb-b512-9b414a257875.png",Zi="https://user-images.githubusercontent.com/43678736/132086659-98f3ef6e-b9f3-4b6d-b18f-469b5334ba27.png",qi="https://user-images.githubusercontent.com/43678736/132086661-a5484553-06c7-4ffa-a8f9-96b57b1b0344.png",Ki="https://user-images.githubusercontent.com/43678736/132086662-05ad1597-d5e5-4efa-833e-2876e966a745.png",Yi="https://user-images.githubusercontent.com/43678736/132086663-90c58955-f7fb-4bdb-ac53-92667d16d4a3.png",Qi="https://user-images.githubusercontent.com/43678736/132086664-9a7530e7-6d78-4ef3-a176-20cf7f57b555.png",be="https://user-images.githubusercontent.com/43678736/132086666-ab3c505d-b2c0-4177-9a06-aed5d9c39ee4.png",Ji="https://user-images.githubusercontent.com/43678736/132086667-6c7dcbcc-8d83-41a2-8e0a-85b09e2791ae.png",ea="https://user-images.githubusercontent.com/43678736/132086668-9f246e91-cf2e-49cf-9617-e1fbb71abbbb.png",na="https://user-images.githubusercontent.com/43678736/132086669-46113762-84d1-4b32-9441-b0138ce17a5d.png",ia="https://user-images.githubusercontent.com/43678736/145835364-2054509d-3448-4d34-921f-73dd6e297fc7.png",aa="https://user-images.githubusercontent.com/43678736/145835367-19172bf8-cd5a-4cbe-b512-d0de1d91f269.png",ta="https://user-images.githubusercontent.com/43678736/145835373-a57ef0f5-3968-483b-9f55-6d67e7f1dcea.png",ra="https://user-images.githubusercontent.com/43678736/132086670-0f96e770-cedc-4635-a5f9-cf97894c1d7a.png",la="https://user-images.githubusercontent.com/43678736/132086671-02ad35ef-ec3a-4a65-abd5-5bf794dfcf7b.png",oa="https://user-images.githubusercontent.com/43678736/132086672-3a856fda-823d-4997-b802-c7c640e6ef44.png",sa="https://user-images.githubusercontent.com/43678736/132086673-0c4409ab-754e-4619-8cfa-179d0ccf1bd9.png",ca="https://user-images.githubusercontent.com/43678736/132086674-fdb56d02-5845-49b7-8462-6357bc963464.png",da="https://user-images.githubusercontent.com/43678736/132086675-c879645d-acb4-41a6-ab3c-4e6c2048badb.png",ua="https://user-images.githubusercontent.com/43678736/132086685-4e327c4c-a409-4b83-b36a-8d88936b314b.png",fa="https://user-images.githubusercontent.com/43678736/132086688-8e82fae4-3a9b-49c0-bf99-77189525514c.png",ma="https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png",pa="https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png",ga="https://user-images.githubusercontent.com/43678736/132086691-d472576b-ec6a-4332-acd2-dd6a00b72952.png",ba="https://user-images.githubusercontent.com/43678736/132086693-9d43571e-0c86-438f-b247-e2cb42e19e06.png",xa="https://user-images.githubusercontent.com/43678736/132086694-4e661d6a-1118-441e-8bc3-c52fcb2133b6.png",ha="https://user-images.githubusercontent.com/43678736/132086697-1d82d724-35b6-4f06-847a-3c59a5deda6e.png",va="https://user-images.githubusercontent.com/43678736/132086698-19384230-dbd7-4e05-bc69-ef4537b6aae3.png",ya="https://user-images.githubusercontent.com/43678736/132086699-5993a482-04f4-4915-b105-9037f527cf61.png",wa="https://user-images.githubusercontent.com/43678736/132086700-c23461c8-6819-46e1-aecd-0a1f8d3507bb.png",ka="https://user-images.githubusercontent.com/43678736/132086701-c8044c09-8d95-4af1-9410-66761001d7da.png",za="https://user-images.githubusercontent.com/43678736/132086702-59294337-ed99-4302-badd-316b2c1ff62f.png",Ea="https://user-images.githubusercontent.com/43678736/132086704-8fd51e7c-afa2-47a3-ab2f-d0bcd0ecae9f.png",ja="https://user-images.githubusercontent.com/43678736/132086705-33294da1-5c0f-49f7-b890-e4857cec0a6d.png",Na="https://user-images.githubusercontent.com/43678736/132086706-22f805d0-39d4-494b-824e-47dc75d05eb7.png",Ca="https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png",Sa="https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png",Fa="https://user-images.githubusercontent.com/43678736/132086708-21d096dd-7148-40aa-97f1-cbb099339740.png",Ia="https://user-images.githubusercontent.com/43678736/132086709-811d4e90-3cfa-4044-a956-aeda9c67fc92.png",La="https://user-images.githubusercontent.com/43678736/132086710-c5479c6c-0249-4542-adad-48b0ef40b775.png",Ma="https://user-images.githubusercontent.com/43678736/132086711-1524a3e7-3e33-4822-a34f-ff3235404045.png",Oa="https://user-images.githubusercontent.com/43678736/132086712-17e2c491-f6e4-4586-aef6-06bcc5f4b0e5.png",Pa="https://user-images.githubusercontent.com/43678736/132086715-204b5a8b-9c5a-4bac-8294-9237ebc16089.png",Ra="https://user-images.githubusercontent.com/43678736/132086716-64511d20-58cb-45a8-85df-f4d9408b469d.png",Ba="https://user-images.githubusercontent.com/43678736/132086718-a8499333-6282-4820-aa1f-4d133eb54648.png",qe=function(e){var n=/(?:\.([^.]+))?$/,i=n.exec(e);return i?i[1]:""},P="octet",_a=function(e){switch(e){case"aac":return"aac";case"midi":return"midi";case"x-midi":return"midi";case"mpeg":return"mpeg";case"ogg":return"oga";case"opus":return"opus";case"wav":return"wav";case"webm":return"webm";case"wma":return"wma";default:return P}},Ta=function(e){switch(e){case"css":return"css";case"csv":return"csv";case"html":return"html";case"calendar":return"icalendar";case"javascript":return"javascript";case"x-javascript":return"javascript";case"plain":return"text";case"xml":return"xml";default:return P}},Da=function(e){switch(e){case"bmp":return"bmp";case"gif":return"gif";case"jpg":return"jpeg";case"jpeg":return"jpeg";case"png":return"png";case"tiff":return"tiff";case"webp":return"webp";default:return P}},Ha=function(e){switch(e){case"otf":return"otf";case"ttf":return"ttf";case"woff":return"woff";case"woff2":return"woff";default:return P}},Aa=function(e){switch(e){case"x-msvideo":return"avi";case"msvideo":return"avi";case"avi":return"avi";case"mp4":return"mp4";case"mpeg":return"mpeg";case"ogg":return"ogv";case"mp2t":return"mp2t";case"wmv":return"wmv";case"webm":return"webm";default:return P}},Ua=function(e){switch(e){case"x-abiword":return"abw";case"abiword":return"abw";case"x-freearc":return"arc";case"freearc":return"arc";case"vnd.amazon.ebook":return"azw";case"octet-stream":return"octet";case"x-bzip":return"bz";case"x-bzip2":return"bz2";case"bzip":return"bz";case"bzip2":return"bz2";case"x-cdf":return"cda";case"msaccess":return"accdb";case"csh":return"csh";case"x-csh":return"csh";case"vnd.ms-fontobject":return"eot";case"epub+zip":return"epub";case"gzip":return"gzip";case"java-archive":return"jar";case"x-javascript":return"javascript";case"json":return"json";case"ld+json":return"jsonld";case"vnd.apple.installer+xml":return"mpkg";case"ogg":return"ogx";case"vnd.rar":return"rar";case"rtf":return"rtf";case"x-sh":return"sh";case"sh":return"sh";case"x-shockwave-flash":return"swf";case"x-tar":return"tar";case"x-httpd-php":return"php";case"vnd.visio":return"vsd";case"xhtml+xml":return"xhtml";case"xml":return"xml";case"vnd.mozilla.xul+xml":return"xul";case"vnd.openxmlformats-officedocument.wordprocessingml.document":return"docx";case"msword":return"docx";case"vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"xlsx";case"vnd.openxmlformats-officedocument.presentationml.presentation":return"pptx";case"vnd.ms-powerpoint":return"pptx";case"vnd.oasis.opendocument.presentation":return"odp";case"vnd.oasis.opendocument.text":return"odt";case"vnd.oasis.opendocument.spreadsheet":return"ods";case"zip":return"zip";case"x-zip-compressed":return"zip";case"pdf":return"pdf";default:return P}},Ke=function(e){if(!e||!e.includes("/"))return P;var n=e.split("/")[0],i=e.split("/")[1];switch(n){case"application":return Ua(i);case"audio":return _a(i);case"video":return Aa(i);case"text":return Ta(i);case"image":return Da(i);case"font":return Ha(i);default:return P}},Ye=function(e){var n="octet";return e&&e!==""&&(e.includes("zip")||e.includes("rar")?n="zip":e.includes("doc")?n="docx":e.includes("xls")?n="xlsx":e.includes("drawio")?n="drawio":e.includes("psd")?n="psd":e.includes("csv")?n="csv":e==="jsx"?n="react":e==="py"?n="python":e==="vue"?n="vue":e==="java"?n="java":e==="ts"?n="typescript":(e==="sass"||e==="scss")&&(n="sass")),n},Qe=function(e){var n="text";return e&&e!==""&&(e==="jsx"?n="react":e==="py"?n="python":e==="vue"?n="vue":e==="java"?n="java":e==="ts"||e==="tsx"?n="typescript":e==="js"?n="javascript":e==="xml"?n="xml":e==="php"&&(n="php")),n},$a=function(e,n){var i="fallBack";if(e)i=Ke(e.type);else return i=P,n!=null&&n.fallBack?{url:n==null?void 0:n.fallBack,mimeResume:i}:{url:se[i],mimeResume:i};var a=qe(e.name);i==="text"&&(i=Qe(a)),i===P&&(i=Ye(a));var t=n==null?void 0:n[i];return t!==void 0?{url:t,mimeResume:i}:{url:se[i],mimeResume:i}},Va=function(e,n,i){var a="octet";if(e)a=Ke(n);else return a=P,i!=null&&i.fallBack?{url:i==null?void 0:i.fallBack,mimeResume:a}:{url:se[a],mimeResume:a};var t=qe(e);a==="text"&&(a=Qe(t)),a===P&&(a=Ye(t));var l=i==null?void 0:i[a];return l!==void 0?{url:l,mimeResume:a}:{url:se[a],mimeResume:a}},se={aac:ki,accdb:Ei,abw:zi,arc:Ti,avi:ji,azw:Ni,octet:be,bmp:Ci,bz:Si,bz2:Fi,cda:Ii,csh:Li,css:Mi,csv:Oi,docx:Pi,drawio:Ri,eot:Bi,epub:_i,gzip:Hi,gif:Di,html:Be,icalendar:Ai,jar:$i,jpeg:Xi,javascript:Vi,json:Wi,jsonld:Gi,midi:Zi,mp3:qi,mp4:Ki,mpeg:Yi,mpkg:Qi,mp2t:be,odp:Ji,ods:ea,odt:na,oga:ia,ogv:aa,ogx:ta,opus:ra,otf:la,png:ca,pdf:oa,php:sa,pptx:da,psd:ua,rar:pa,rtf:ba,sass:xa,sh:ha,swf:va,tar:ma,tiff:wa,ttf:ka,typescript:za,text:ya,vsd:Ea,wav:Na,weba:Sa,webm:Ca,webp:Fa,woff:Ma,wma:Ia,wmv:La,xhtml:Be,xlsx:Oa,xml:Pa,xul:Ra,zip:Ba,sevenzip:wi,python:fa,java:Ui,react:ga,vue:ja,fallBack:be},ce=function(e,n){return n?"".concat(e," ").concat(n):e},Xa=function(e,n,i,a){var t="",l=void 0,o=void 0;return e&&typeof e.name=="string"?(t=e.name,l=e.type,o=e.size):n&&typeof n=="string"&&(t=n,l=i,o=a),[t,l,o]};function Wa(e,n){return e?N(N({},n),e):n}z(`.files-ui-dropzone-children-container {
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 5px 0;
}`);function Z(e){e.preventDefault(),e.stopPropagation()}z(`.filesui-disabled-root {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.38);
}`);z(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
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
}`);z(`.filesui-base-ripple-absolute {
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
}`);var O=function(e){if(typeof e=="number")return e;switch(e){case"micro":return 8;case"small":return 15;case"semi-medium":return 18;case"medium":return 25;case"large":return 28;case"extra-large":return 32;default:return 24}},Ga=function(e){var n=e.size,i=e.color,a=e.colorFill,t=e.onClick,l=e.style,o=e.className,s=O(n),u=l||{};return r.createElement("svg",{style:t?N({},N({cursor:"pointer"},u)):u,onClick:function(c){Z(c),t==null||t(c)},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000",className:o||""},r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",opacity:".87"}),r.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",fill:a||"none",opacity:".5"}),r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"}))},Je=function(e){var n=e.size,i=e.color,a=e.colorFill,t=e.onClick,l=e.style,o=e.className,s=O(n),u=l||{};return S.createElement("svg",{className:o||"",style:t?N({},N({cursor:"pointer"},u)):u,onClick:function(){return t==null?void 0:t()},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000"},S.createElement("path",{d:"M0 0h24v24H0z",fill:a||"none"}),S.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))},ue=function(e){var n=e.size,i=e.color,a=e.colorFill,t=e.onClick,l=e.style,o=e.className,s=O(n),u=l||{};return r.createElement("svg",{className:o||"",style:t?N({cursor:"pointer"},u):u,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000",onClick:function(c){Z(c),t==null||t(c)}},r.createElement("path",{d:"M0 0h24v24H0V0z",fill:a||"none"}),r.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}))},Za=function(e){var n=e.size,i=e.color,a=e.colorFill,t=e.onClick,l=e.style,o=e.className,s=O(n),u=l||{};return r.createElement("svg",{className:o||"",style:t?N({cursor:"pointer"},u):u,enableBackground:"new 0 0 24 24",xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000",onClick:function(c){Z(c),t==null||t(c)}},r.createElement("path",{d:"M0 0h24v24H0V0z",fill:a||"none"}),r.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-9-3.82l-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z"}))},en=function(e){var n=e.size,i=e.color,a=e.onClick,t=e.style,l=e.className,o=O(n),s=t||{};return S.createElement("svg",{className:l||"",style:a?N({},N({cursor:"pointer"},s)):s,onClick:function(){return a==null?void 0:a()},xmlns:"http://www.w3.org/2000/svg",height:o?"".concat(o,"px"):"24px",viewBox:"0 0 24 24",width:o?"".concat(o,"px"):"24px",fill:i||"#000000"},S.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),S.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z",opacity:".4"}),S.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"}))},qa=function(e){var n=e.size,i=e.color,a=e.colorFill,t=e.onClick,l=e.style,o=e.className,s=O(n),u=l||{};return r.createElement("svg",{className:o||"",style:t?N({cursor:"pointer"},u):u,enableBackground:"new 0 0 24 24",xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000",onClick:function(c){Z(c),t==null||t(c)}},r.createElement("g",null,r.createElement("rect",{fill:a||"none",height:s,width:s})),r.createElement("g",null,r.createElement("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"})))},Ka=function(e){var n=e.size,i=e.color,a=e.onClick,t=e.style,l=e.className,o=O(n)-2,s=t||{};return r.createElement("svg",{className:l||"",style:a?N({cursor:"pointer"},s):s,"aria-hidden":"true","aria-label":"info",fill:i||"#000000",role:"img",transform:"",version:"1.1",viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",height:"".concat(o,"px"),width:"".concat(o,"px"),onClick:function(u){Z(u),a==null||a(u)}},r.createElement("path",{d:"M22.378 0c2.412 0 3.618 1.642 3.618 3.523 0 2.349-2.095 4.522-4.822 4.522-2.284 0-3.616-1.35-3.553-3.582 0-1.877 1.586-4.462 4.757-4.462zM14.956 36c-1.904 0-3.299-1.174-1.967-6.343l2.185-9.166c0.38-1.465 0.443-2.054 0-2.054-0.571 0-3.040 1.012-4.504 2.011l-0.95-1.584c4.63-3.935 9.956-6.241 12.242-6.241 1.903 0 2.219 2.291 1.269 5.814l-2.504 9.634c-0.443 1.701-0.254 2.288 0.191 2.288 0.571 0 2.443-0.706 4.282-2.173l1.080 1.465c-4.504 4.585-9.423 6.349-11.324 6.349z"}))},Ya=function(e){var n=e.size,i=e.color,a=e.colorFill,t=e.onClick,l=e.style,o=e.className,s=O(n),u=l||{};return S.createElement("svg",{className:o||"",style:t?N({cursor:"pointer"},u):u,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000",onClick:function(c){Z(c),t==null||t(c)}},S.createElement("path",{d:"M0 0h24v24H0V0z",opacity:".9",fill:a||"none"}),S.createElement("path",{d:"M8 5v14l11-7L8 5z"}))},Qa=function(e){var n=e.size,i=e.color,a=e.colorFill,t=e.onClick,l=e.style,o=e.className,s=O(n),u=l||{};return S.createElement("svg",{className:o||"",style:t?N({},N({cursor:"pointer"},u)):u,onClick:function(){return t==null?void 0:t()},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000"},S.createElement("rect",{fill:a||"none",height:s,width:s}),S.createElement("path",{d:"M18,15.17V15h2v2.17L18,15.17z M15.41,12.59L17,11l-1.41-1.41L14,11.17L15.41,12.59z M13,10.17V4h-2v4.17L13,10.17z M21.19,21.19l-1.78-1.78L2.81,2.81L1.39,4.22l6.19,6.19L7,11l5,5l0.59-0.59L15.17,18H6v-3H4v3c0,1.1,0.9,2,2,2h11.17l2.61,2.61 L21.19,21.19z"}))};z(`@keyframes filesui-rotate-spin {
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
}`);var Ja=function(e){var n=e.size,i=e.color,a=e.colorFill,t=e.onClick,l=e.style,o=e.className,s=O(n),u=l||{};return S.createElement("svg",{className:o||"",style:t?N({cursor:"pointer"},u):u,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:i||"#000000",onClick:function(c){Z(c),t==null||t(c)}},S.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),S.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z",fill:a||"none"}),S.createElement("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}))},_e;(function(e){function n(o){var s="";if(typeof window>"u"||typeof o>"u"||o===null)return"";if(document.getElementById(o.id))return o.id;s=o.id;var u=document.createElement("style");u.id=s,u.setAttribute("type","text/css");var c=De(o.sheetRules||[])+o.raw||"";u.textContent=c;var f=document.head.appendChild(u);return f?s:""}e.insertStyleSheet=n;function i(o,s){var u="";if(typeof window>"u"||typeof o>"u"||o===null||s===null)return"";var c=document.getElementById(o);return c?(c.textContent=De(s),u):""}e.editStyleSheet=i;function a(o){var s="";if(!o)return"";var u=document.getElementById(o);return u&&(document.head.removeChild(u),s=o),s}e.removeStyleSheet=a;function t(o){if(typeof o>"u"||o===null)return!1;var s=document.getElementById(o);return!!s}e.existStyleSheet=t;function l(o){return typeof o>"u"||o===null?null:o}e.makeStyleSheet=l})(_e||(_e={}));function et(e){return e?!/[a-z]/.test(e)&&/[A-Z]/.test(e):!1}function Te(e){for(var n="",i=" ",a=!1,t=0;t<e.length;t++){var l=e[t];if(et(l)){i=l,a=!0;break}}if(a){var o=e.split(i);n="".concat(o[0],"-").concat(i.toLowerCase()).concat(o[1])}else n=e;return n}function nt(e){return e?e.includes(":"):!1}function it(e){var n="",i=e.trim().split(" ");if(i.length>1){for(var a=0;a<i.length;a++)n+=".".concat(i[a]);n+=`{
`}else n+=".".concat(e,`{
`);return n}function De(e){if(typeof e>"u"||e===null)return"";for(var n="",i=[],a=0;a<e.length;a++){var t=e[a],l="";l+=it(t.className);for(var o=Object.keys(t.rules),s=0;s<o.length;s++){var u=o[s],c=Te(u);if(nt(c)){var f=t.className+c;i.push({className:f,rules:t.rules[c]})}else{var p=t.rules[u];l+="	".concat(c," : ").concat(p,`;
`)}}l+=`}
`,n+=l}for(var g=0;g<i.length;g++){var l="",t=i[g],o=Object.keys(t.rules);l+=".".concat(t.className,`{
`);for(var s=0;s<o.length;s++){var u=o[s],c=Te(u),p=t.rules[u];l+="	".concat(c," : ").concat(p,`;
`)}l+=`}
`,n+=l}return n}z(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
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
 */`);var at=S.createContext({});z(`.files-ui-buttons-container {
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
}`);var tt=function(e,n,i,a,t,l,o,s,u){var c=r.useState(!1),f=c[0],p=c[1],g=r.useState(!1),b=g[0],h=g[1],E=r.useState(""),y=E[0],I=E[1],m=r.useState(void 0),v=m[0],k=m[1],x=r.useState(void 0),w=x[0],j=x[1],F=r.useState(!1),L=F[0],C=F[1],R=function(M,B,_,T,V,A,D,q,ne,J){return ye(void 0,void 0,void 0,function(){var X,H,K;return we(this,function(W){switch(W.label){case 0:return!M&&!B&&!_?[2]:(X=(M?$a(M,q):Va(B,_,q)).url,I(X),A&&D?(h(!0),k(A),j(D),C(!0),[2]):[3,1]);case 1:return A?(p(!0),k(A),C(!0),[2]):[3,2];case 2:return D?(h(!0),j(D),C(!0),[3,5]):[3,3];case 3:return H=rt(M,_),p(H[0]==="image"),["mp4","ogg","webm"].includes(H[1])&&h(H[0]==="video"),V&&(T||typeof T>"u"||T===null)&&H[0]==="image"?(K=void 0,M?[4,Ze(M)]:[3,5]):[3,5];case 4:K=W.sent(),K&&k(K),W.label=5;case 5:return C(!0),[2]}})})};return r.useEffect(function(){return R(e,n,i,a,t||!1,l,o,s),function(){k(void 0),p(!1),h(!1),C(!1)}},[e,n,i,a,t,l,o,s]),[L,f,b,y,v,w]},rt=function(e,n){if(e)if(e.type){var i=e.type.split("/");return[i[0],i[1]]}else return["octet","octet"];else{var i=n==null?void 0:n.split("/");return i&&i.length>1?[i[0],i[1]]:["octet","octet"]}},lt=function(e){var n=r.useState(!1),i=n[0],a=n[1],t=r.useState(e),l=t[0],o=t[1];return r.useEffect(function(){if(o(e),["uploading","preparing"].includes(l||"")&&["success","error","aborted"].includes(e||"")){setTimeout(function(){a(!1)},3500);return}else a(e==="preparing"||e==="uploading")},[e]),i},ot=function(e,n){var i=r.useState(void 0),a=i[0],t=i[1];return e!==void 0?a!==e&&t(e):n!=null&&n.upload.onprogress===null&&(n.upload.onprogress=function(l){t(l.loaded/l.total*100)},t(0)),a};z(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
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
}`);var st=function(e){var n=e.size,i=e.color,a=e.style,t=e.radius,l=e.x,o=e.y,s=e.width,u=t||46,c=l||50,f=o||50,p=O(n),g=a||{};return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"".concat(p,"px"),height:"".concat(p,"px"),style:g,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},r.createElement("circle",{cx:"".concat(c),cy:"".concat(f),r:"".concat(u),fill:"none",stroke:i||"#14ff00",strokeWidth:"".concat(s||8,"px"),strokeDasharray:"164.93361431346415 100.97787143782138"},r.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 ".concat(c," ").concat(c,";360 ").concat(c," ").concat(c),keyTimes:"0;1"})))};z(`.files-ui-loader-container {
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
}`);var nn=function(e){var n=e.children,i=e.className,a=e.style,t=e.size,l=e.onClick,o=t?O(t):void 0,s=l?"files-ui-loader-container clickable":"files-ui-loader-container",u=function(){l==null||l()};return r.createElement("div",{onClick:u,className:i?"".concat(s," ").concat(i):s,style:N(N({},a),{height:o,width:o})},n)},an=function(e){var n=e.onClick,i=e.size;return r.createElement(nn,{onClick:n,size:i},r.createElement(r.Fragment,null,r.createElement(st,{size:i}),r.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},n&&r.createElement(ue,{color:"rgba(255,255,255,0.75)",size:45,onClick:n}))))};z(`.files-ui-layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}`);var te=function(e){var n=e.style,i=e.className,a=e.children,t=e.visible,l=di(e,["style","className","children","visible"]),o=ce(i||"","files-ui-layer");return t?r.createElement("div",N({className:o,style:n},l),a):r.createElement(r.Fragment,null)},ct={alt:"image-preview",smartImgFit:"orientation"};z(`.fui-image-preview {
  position: relative;
  border-radius: 10px;
}`);var He=function(e){var n=Wa(e,ct),i=n.src,a=n.alt,t=n.width,l=n.height,o=n.onError,s=n.smartImgFit,u=n.style,c=n.className,f=r.useState([void 0,void 0]),p=f[0],g=p[0],b=p[1],h=f[1],E=r.useState(void 0),y=E[0],I=E[1],m=function(x){return ye(void 0,void 0,void 0,function(){var w;return we(this,function(j){switch(j.label){case 0:return[4,Ze(x)];case 1:return w=j.sent(),v(w),[2]}})})},v=function(x){return ye(void 0,void 0,void 0,function(){var w,j,F;return we(this,function(L){switch(L.label){case 0:return x===""||!x?[2]:(w=void 0,j=void 0,s?[3,1]:(j="100%",[3,4]));case 1:return L.trys.push([1,3,,4]),[4,yi(x)];case 2:return F=L.sent(),F==="landscape"?s==="orientation"?(w=void 0,j="100%"):(w="100%",j=void 0):s==="center"?(w=void 0,j="100%"):(w="100%",j=void 0),[3,4];case 3:return L.sent(),o==null||o(),[3,4];case 4:return l&&(w=l),t&&(j=t),h([w,j]),I(x),[2]}})})};r.useEffect(function(){if(i)if(typeof i=="string")v(i);else{var x=i.type?i.type.split("/")[0]:"octet";x==="image"?m(i):o==null||o()}},[i]);var k=function(x){o==null||o()};return r.createElement(r.Fragment,null,i&&y&&(g||b)&&r.createElement("img",{style:u||{},onClick:function(x){x.preventDefault()},width:b,height:g,src:y,alt:a,className:c,onError:k}))};z(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
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
} */`);z(`.files-ui-file-icon {
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
}`);z(`.files-ui-file-card-main-container.dark-mode {
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
}`);z(`.file-card-right-layer-header {
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
}`);var dt=function(e){var n=e.localization,i=e.size,a=Q(n).status;return r.createElement(r.Fragment,null,r.createElement(en,{color:"#f44336",size:i||65}),r.createElement("span",null," ",a.aborted))},ut=function(e){var n=e.height,i=n?typeof n=="number"?"".concat(n,"px"):n:"132px";return r.createElement(r.Fragment,null,r.createElement("div",{style:{width:"100%",height:i}}))},ft=function(e){var n=e.localization,i=e.size,a=Q(n).status;return r.createElement(r.Fragment,null,r.createElement(ue,{color:"rgba(255,255,255,0.4)",style:{backgroundColor:"rgba(244, 67, 54, 0.8)",borderRadius:"50%"},size:i||65}),r.createElement("span",null," ",a.error))},mt=function(e){var n=e.onCancel,i=e.localization,a=e.size,t=Q(i).status;return r.createElement(r.Fragment,null,r.createElement(an,{onClick:n,size:a||65}),r.createElement("span",null,t.preparing))},pt=function(e){var n=e.localization,i=e.size,a=Q(n).status;return r.createElement(r.Fragment,null,r.createElement(Je,{color:"#4caf50",size:i||65}),r.createElement("span",null," ",a.success))};z(`text.files-ui-text-dynamic-loader {
  text-anchor: middle;
  font-size: 1em;
  fill: aliceblue;
}`);var gt=function(e){var n=e.size,i=e.color,a=e.style,t=e.percentage,l=e.hidePerncentage,o=e.radius,s=e.x,u=e.y,c=e.width,f=e.onClick,p=o||28,g=s||30,b=u||30,h=O(n),E=a||{},y=r.useRef(null);function I(m,v,k){v.style.strokeDashoffset="".concat(k*(1-m/100))}return r.useEffect(function(){var m=y.current;if(m!=null&&t!==void 0){var v=2*Math.PI*m.r.baseVal.value;m.style.strokeDasharray="".concat(v," 1000"),I(t>=100?100:t,m,v)}},[t]),t!==void 0?r.createElement(nn,{size:n},r.createElement(r.Fragment,null,r.createElement("svg",{className:"dui_svg_circle_loader",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"".concat(h,"px"),height:"".concat(h,"px"),style:E},r.createElement("circle",{style:{transform:"rotate(-90deg)",transformOrigin:"center"},stroke:i||"#14ff00",cx:"".concat(g),cy:"".concat(b),r:"".concat(p),strokeWidth:"".concat(c||8,"px"),id:"circle",ref:y,fill:"none"}),!l&&t!==void 0&&r.createElement("text",{className:"files-ui-text-dynamic-loader",x:"".concat(g),y:"".concat(g*7/6)},"".concat(t.toFixed(0)," %"))),f&&r.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.createElement(ue,{color:"rgba(255,255,255,0.75)",size:45,onClick:f})))):r.createElement(r.Fragment,null)};z(`.lds-colorbar {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}
.lds-colorbar .files-ui-text-default-loader {
  font-size: 1.5rem;
  font-weight: 400;
  text-anchor: middle;
}`);var bt=function(e){var n=e.localization,i=e.size,a=e.onAbort,t=e.progress,l=Q(n).status;return r.createElement(r.Fragment,null,t!==void 0?r.createElement(gt,{size:70,x:35,y:35,radius:32,percentage:t,width:6,hidePerncentage:t===void 0||a!==void 0,onClick:a}):r.createElement(an,{onClick:a,size:i||70}),r.createElement("span",null," ",l.uploading))};z(`.files-ui-file-card-upload-layer {
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
}`);z(`.files-ui-tooltip {
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
}`);var xt=function(e){var n=e.uploadStatus,i=e.valid,a=e.errors,t=e.uploadMessage,l=e.open,o=r.useState(void 0),s=o[0],u=o[1],c=r.useState(void 0),f=c[0],p=c[1],g=function(b,h){b!==void 0?(p(t),u(b==="success"?"success":"not-valid-error")):h!==void 0&&(h||(u("not-valid-error"),p(a?a.reduce(function(E,y){return E+="".concat(y,". "),E},""):"")))};return r.useEffect(function(){g(n,i)},[n,i]),r.createElement(r.Fragment,null,l&&f&&s&&r.createElement("span",{className:"files-ui-tooltiptext ".concat(s)},f))},ht=function(e){var n=e.downloadUrl,i=e.anchorRef,a=e.fileName;function t(l){l.stopPropagation()}return n?r.createElement("a",{ref:i,target:"_blank",href:n,download:a,hidden:!0,rel:"noopener noreferrer",onClick:t},"download_file"):r.createElement(r.Fragment,null)};z(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
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
 */`);z(`.files-ui-layer-container {
  position: relative;
}`);var vt=function(e){var n=e.style,i=e.className,a=e.children,t=ce(i||"","files-ui-layer-container");return r.createElement("div",{className:t,style:n},a)},yt=function(e){var n=e.fileName;return n?r.createElement("span",null,n):r.createElement(r.Fragment,null)};z(`.files-ui-file-mosaic-upload-layer {
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
}`);var wt=function(e){var n=e.uploadStatus,i=e.onCancel,a=e.onAbort,t=e.progress,l=e.localization,o=r.useRef(null),s=r.useRef(null),u=r.useState([void 0]),c=u[0],f=u[1];r.useEffect(function(){f(function(g){if(g[g.length-1]==="preparing"&&n==="uploading"){var b=oe([],g,!0);return b[g.length-1]=n,oe([],b,!0)}return oe(oe([],g,!0),[n],!1)})},[n]);var p=function(){var g=o.current,b=s.current;g===null||b===null||(b.style.top=0-(c.length-1)*132+"px")};return r.useEffect(function(){c.length>1&&p()},[c.length]),r.createElement("div",{className:"elevation-layer-container",ref:o},r.createElement("div",{className:"elevation-list",ref:s},c.map(function(g,b){switch(g){case"preparing":return r.createElement("div",{className:"elevation-item",key:b+1},r.createElement(mt,{onCancel:i,localization:l}));case"uploading":return r.createElement("div",{className:"elevation-item",key:b+1},r.createElement(bt,{onAbort:a,progress:t,localization:l}));case"error":return r.createElement("div",{className:"elevation-item",key:b+1},r.createElement(ft,{localization:l}));case"success":return r.createElement("div",{className:"elevation-item",key:b+1},r.createElement(pt,{localization:l}));case"aborted":return r.createElement("div",{className:"elevation-item",key:b+1},r.createElement(dt,{localization:l}));default:return r.createElement("div",{className:"elevation-item",key:b+1},r.createElement(ut,null))}})))},Ae=function(e){var n=e.imageSource,i=e.url,a=e.fileName,t=e.card,l=e.isBlur,o=e.smartImgFit,s=r.useState(void 0),u=s[0],c=s[1],f=r.useState(!1),p=f[0],g=f[1];r.useEffect(function(){c(n||i)},[n,i]);var b=function(){g(!0),c(i)};return l?r.createElement(r.Fragment,null,!t&&!p&&n&&r.createElement(He,{src:u,alt:"blur ".concat(a),smartImgFit:!1})):r.createElement(r.Fragment,null,r.createElement(He,{onError:b,src:u,style:{borderRadius:"0px"},alt:"preview ".concat(a),smartImgFit:o}))};z(`.files-ui-file-item-status-container {
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
}`);var tn=function(e){var n=e.valid,i=e.uploadStatus,a=e.localization,t=e.style,l=Q(a).status;return i==="success"?r.createElement("div",{className:"files-ui-file-item-status-container file-status-ok",style:t},r.createElement(Za,{color:"#4caf50",size:"small",className:"status-icon"}),l.success):i==="error"||i==="aborted"?r.createElement("div",{className:"files-ui-file-item-status-container file-status-error",style:t},r.createElement(Qa,{color:"#f44336",size:"semi-medium",className:"status-icon"}),l.error):n!=null?n?r.createElement("div",{className:"files-ui-file-item-status-container file-status-ok",style:t},r.createElement(Je,{color:"#4caf50",size:"small",className:"status-icon"}),l.valid):r.createElement("div",{className:"files-ui-file-item-status-container file-status-error",style:t},r.createElement(en,{color:"#f44336",size:"small",className:"status-icon"}),l.denied):r.createElement(r.Fragment,null)},kt=function(e){var n=e.valid,i=e.localization,a=e.onCloseInfo,t=e.uploadStatus,l=e.localName,o=e.sizeFormatted,s=e.localType,u=Q(i),c=u.fullInfoLayer,f=c.name,p=c.size,g=c.type;return r.createElement(r.Fragment,null,r.createElement("div",{className:"files-ui-file-mosaic-info-layer-header"},r.createElement(Ga,{color:"rgba(255,255,255,0.8)",onClick:a,colorFill:"black"}),r.createElement(tn,{valid:n,uploadStatus:t,localization:i})),r.createElement("div",{className:"heading"},f),r.createElement("div",{className:"label"},l),r.createElement("div",{className:"heading"},p),r.createElement("div",{className:"label"},o),r.createElement("div",{className:"heading"},g),r.createElement("div",{className:"label"},s))};z(`.filesui-file-item-size {
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
}`);var zt=function(e){var n=e.sizeFormatted;return r.createElement(r.Fragment,null,n&&r.createElement("div",{className:"filesui-file-item-size"},n))},Et=function(e){var n=e.darkMode,i=e.deleteIcon,a=e.downloadIcon,t=e.imageIcon,l=e.infoIcon,o=e.onDelete,s=e.onDownload,u=e.onOpenInfo,c=e.onSee,f=e.onWatch,p=e.sizeFormatted,g=e.valid,b=e.videoIcon,h=e.localization,E=e.uploadStatus,y=e.isActive;return r.createElement(r.Fragment,null,r.createElement("div",{className:"file-mosaic-main-layer-header"},y&&i&&r.createElement(ue,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:o,size:"small",colorFill:"transparent"})),r.createElement("div",{className:"file-mosaic-main-layer-footer"},r.createElement("div",{className:"file-mosaic-footer-left"},r.createElement(tn,{valid:g,uploadStatus:E,localization:h}),y&&p&&r.createElement(zt,{sizeFormatted:p})),r.createElement("div",{className:"file-mosaic-footer-right"},y&&r.createElement(r.Fragment,null,t&&r.createElement(Ja,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:c,size:"small"}),b&&r.createElement(Ya,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:f,size:"small"}),a&&r.createElement(qa,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:s,size:"small"}),l&&r.createElement(Ka,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",onClick:u,color:n?"#121212":"rgba(255,255,255,0.851)",size:"micro"})))))},jt=function(e){var n=e.style,i=e.className,a=e.file,t=e.name,l=e.size,o=e.type,s=e.id,u=e.valid,c=e.errors,f=e.uploadStatus,p=e.uploadMessage,g=e.progress,b=e.xhr,h=e.localization,E=e.preview,y=e.imageUrl,I=e.videoUrl,m=e.info,v=e.backgroundBlurImage,k=v===void 0?!0:v,x=e.darkMode,w=e.alwaysActive,j=w===void 0?!0:w,F=e.resultOnTooltip,L=F===void 0?!0:F,C=e.downloadUrl,R=e.onDelete,M=e.onCancel,B=e.onAbort,_=e.onDownload,T=e.onSee,V=e.onWatch,A=e.onDoubleClick,D=e.onClick,q=e.onRightClick,ne=e.smartImgFit,J=ne===void 0?"orientation":ne,X=r.useContext(at),H=X.darkMode,K=X.icons,W=X.localization,fe=h!==void 0?h:W,ze=x!==void 0?x:H,Ee=r.useRef(null),rn=ce(ce("files-ui-file-mosaic-main-container files-ui-tooltip",i),D?"clickable":void 0),ln=ze?"files-ui-file-mosaic-file-name dark-mode":"files-ui-file-mosaic-file-name",me=Xa(a,t,o,l),ie=me[0],on=me[1],sn=me[2],cn=ot(g,b),ee=tt(a,t,o,u,E,y,I,K),dn=ee[0],un=ee[1],fn=ee[2],je=ee[3],pe=ee[4],mn=ee[5],Ne=ui(sn),Ce=r.useState(!1),ge=Ce[0],Se=Ce[1],Fe=r.useState(!1),pn=Fe[0],Ie=Fe[1],gn=function(){j||Ie(!0)},bn=function(){j||Ie(!1)},xn=function(){return R==null?void 0:R(s)},hn=function(){return Se(!0)},Le=function(){return Se(!1)},le=lt(f);r.useEffect(function(){le&&ge&&Le()},[le]);function vn(U){U.stopPropagation(),D==null||D(U)}var yn=function(U){U.preventDefault(),A==null||A(U)};function wn(U){q==null||q(U)}var kn=function(){var U=Ee.current;U&&U.click()},zn=function(){_?_==null||_(s,C):typeof C=="string"&&kn()},En=function(){b==null||b.abort(),B==null||B(s)};return dn?r.createElement("div",{className:rn,style:n,onClick:vn,onMouseEnter:gn,onMouseLeave:bn,onDoubleClick:yn,onContextMenu:wn},r.createElement(vt,{className:"files-ui-file-mosaic-icon-layer-container",style:n},r.createElement(te,{className:"files-ui-file-mosaic-image-layer blur",visible:k},r.createElement(Ae,{imageSource:pe,url:je,fileName:ie,isBlur:!0,smartImgFit:!1})),r.createElement(te,{className:"files-ui-file-mosaic-image-layer",visible:!0},r.createElement(Ae,{imageSource:pe,url:je,fileName:ie,isBlur:!1,smartImgFit:J})),r.createElement(te,{className:"files-ui-file-mosaic-main-layer",visible:!le&&!ge},r.createElement(Et,{deleteIcon:R!==void 0,onDelete:xn,darkMode:ze,valid:u,uploadStatus:f,localization:fe,sizeFormatted:Ne,imageIcon:un&&T!==void 0,onSee:function(){return T==null?void 0:T(pe)},videoIcon:fn&&V!==void 0,onWatch:function(){return V==null?void 0:V(mn)},downloadIcon:_!==void 0||C!==void 0,onDownload:zn,infoIcon:m!==void 0,onOpenInfo:hn,isActive:j||pn})),r.createElement(te,{className:"files-ui-file-mosaic-info-layer",visible:ge,onClick:Z},r.createElement(kt,{onCloseInfo:Le,valid:u,localization:fe,localName:ie,sizeFormatted:Ne,localType:on})),r.createElement(te,{className:"files-ui-file-mosaic-upload-layer",visible:le,onClick:Z},r.createElement(wt,{uploadStatus:f,progress:cn,onCancel:M?function(){return M==null?void 0:M(s)}:void 0,onAbort:B?En:void 0,localization:fe}))),r.createElement("div",{className:ln},r.createElement(yt,{fileName:ie})),r.createElement(xt,{open:L,uploadStatus:f,valid:u,errors:c,uploadMessage:p}),r.createElement(ht,{fileName:ie,anchorRef:Ee,downloadUrl:C})):r.createElement(r.Fragment,null)};z(`.fui-fullscreen-container {
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
}`);const Ue=async(e,n)=>{try{const i=await fetch(n);if(!i.ok){he("Tải xuống bị lỗi","File không tồn tại hoặc đã bị xóa khỏi hệ thống");return}const a=await i.blob(),t=URL.createObjectURL(a),l=document.createElement("a");l.href=t,l.download=e||"newFile.jpeg",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(t)}catch{he("Tải xuống bị lỗi","File không tồn tại hoặc đã bị xóa khỏi hệ thống")}},Nt=({size:e,name:n,valid:i=!1,type:a,onDownload:t,onDelete:l,onSee:o})=>d.jsxs("div",{className:"files-ui-file-mosaic-main-container files-ui-tooltip",children:[d.jsxs("div",{className:"files-ui-file-mosaic-icon-layer-container files-ui-layer-container",children:[a==="directory"?d.jsx(d.Fragment,{children:d.jsx("div",{className:"files-ui-file-mosaic-image-layer files-ui-layer",children:d.jsx("img",{height:"100%",src:"/asset/folder.png",alt:"preview 123423423423432423423423423432432423.png",style:{borderRadius:0}})})}):a==="glb"?d.jsx(d.Fragment,{children:d.jsx("div",{className:"files-ui-file-mosaic-image-layer files-ui-layer",children:d.jsx("img",{height:"100%",src:"/asset/glb.webp",alt:"preview 123423423423432423423423423432432423.png",style:{borderRadius:0}})})}):d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"files-ui-file-mosaic-image-layer blur files-ui-layer",children:d.jsx("img",{width:"100%",src:"https://picsum.photos/200/300",alt:"blur 123423423423432423423423423432432423.png"})}),d.jsx("div",{className:"files-ui-file-mosaic-image-layer files-ui-layer",children:d.jsx("img",{height:"100%",src:"https://picsum.photos/200/300",alt:"preview 123423423423432423423423423432432423.png",style:{borderRadius:0}})})]}),d.jsxs("div",{className:"files-ui-file-mosaic-main-layer files-ui-layer",children:[d.jsx("div",{className:"file-mosaic-main-layer-header",children:d.jsxs("svg",{onClick:l,className:"files-ui-file-icon",xmlns:"http://www.w3.org/2000/svg",height:"15px",viewBox:"0 0 24 24",width:"15px",fill:"rgba(255,255,255,0.851)",style:{cursor:"pointer"},children:[d.jsx("path",{d:"M0 0h24v24H0V0z",fill:"transparent"}),d.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]})}),d.jsxs("div",{className:"file-mosaic-main-layer-footer",children:[d.jsxs("div",{className:"file-mosaic-footer-left",children:[a!="folder"&&i&&d.jsxs("div",{className:"filesui-file-item-status-container file-status-ok flex items-center",style:{backgroundColor:"rgba(255, 255, 255, 0.8)",color:"#5c7a1f",borderRadius:"4px",marginBottom:"3px"},children:[d.jsxs("svg",{className:"status-icon",xmlns:"http://www.w3.org/2000/svg",height:"15px",viewBox:"0 0 24 24",width:"15px",fill:"#4caf50",children:[d.jsx("path",{d:"M0 0h24v24H0z",fill:"none"}),d.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})]}),"Valid"]}),d.jsx("div",{className:"filesui-file-item-size",children:e})]}),d.jsxs("div",{className:"file-mosaic-footer-right",children:[a!="folder"&&d.jsxs("svg",{onClick:o,className:"files-ui-file-icon",xmlns:"http://www.w3.org/2000/svg",height:"15px",viewBox:"0 0 24 24",width:"15px",fill:"rgba(255,255,255,0.851)",style:{cursor:"pointer"},children:[d.jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),d.jsx("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z",fill:"none"}),d.jsx("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})]}),d.jsxs("svg",{onClick:t,className:"files-ui-file-icon",enableBackground:"new 0 0 24 24",xmlns:"http://www.w3.org/2000/svg",height:"15px",viewBox:"0 0 24 24",width:"15px",fill:"rgba(255,255,255,0.851)",style:{cursor:"pointer"},children:[d.jsx("g",{children:d.jsx("rect",{fill:"none",height:15,width:15})}),d.jsx("g",{children:d.jsx("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"})})]})]})]})]})]}),d.jsx("div",{className:"files-ui-file-mosaic-file-name",children:d.jsx("span",{children:n})})]}),Ct=({name:e,folder:n,multiple:i=!1})=>d.jsx(Zn,{name:e,multiple:i,action:`${Ve}/v1/file/video`,data:{folder:`courses/${n}`},headers:{Authorization:"Bearer "+localStorage.getItem("token")},onChange:a=>{const{status:t,response:l}=a.file;t==="done"?In("Success","Tải file thành công!"):t==="error"&&(he("Error","Lỗi khi tải file!",l.message),a.fileList=[])},children:d.jsx(Y,{className:"hidden-title",icon:d.jsx(Hn,{size:20}),type:"text",children:"Tải lên file"})}),St=e=>(e/1048576).toFixed(2),Kt=()=>{var E,y,I;const{token:{colorBgContainer:e,colorPrimary:n}}=Ln.useToken(),i=Mn(),[a,t]=r.useState("horizontal"),[l,o]=r.useState(!1),{folder:s,loading:u}=Pe(m=>m.folder),{file:c,loading:f}=Pe(m=>m.file),[p,g]=r.useState(["uploads"]),b=(m,v,k=["uploads"])=>{for(let x of v){if(x.title===m)return[...k,x.title];if(x.children){const w=b(m,x.children,[...k,x.title]);if(w)return w}}return null},h=(m,v)=>{var x;const{node:k}=v;g(b(k.title,(x=s==null?void 0:s.newData)==null?void 0:x.children))};return r.useEffect(()=>{u&&i(On())},[]),r.useEffect(()=>{f&&i(Pn({folderName:"uploads"}))},[]),r.useEffect(()=>{console.log(p)},[p]),d.jsxs(Tn,{header:"QUẢN LÝ FILE",children:[d.jsx(ae,{style:{height:"calc(100vh - 104px)"},children:d.jsx($,{className:"p-3",style:{backgroundColor:e,borderRadius:6},span:24,children:d.jsxs(ae,{children:[d.jsxs($,{className:"flex gap-1",xxl:{span:8},span:24,children:[d.jsx(An,{size:20}),d.jsx(re,{onClick:m=>console.log(m),separator:">"}),d.jsx(re,{children:p==null?void 0:p.map((m,v)=>d.jsx(re.Item,{children:m},v))})]}),d.jsx($,{xxl:{span:16},md:{span:24},span:24,children:d.jsxs("div",{className:"flex flex-wrap gap-2 justify-center xl:justify-end",children:[d.jsx(Y,{className:"hidden-title",onClick:()=>o(!0),icon:d.jsx(Un,{size:20}),type:"text",children:"Thêm thư mục"}),d.jsx(Ct,{}),d.jsx(Y,{className:"hidden-title",onClick:()=>t("horizontal"),type:"text",icon:d.jsx(Rn,{size:20}),children:"Lưới"}),d.jsx(Y,{className:"hidden-title",onClick:()=>t("vertical"),type:"text",icon:d.jsx($n,{size:20}),children:"Danh sách"}),d.jsx(Y,{className:"hidden-title",icon:d.jsx(Vn,{size:20}),type:"text",children:"Lọc"}),d.jsx(Y,{className:"hidden-title",icon:d.jsx(Xn,{size:20}),type:"text",children:"Tìm kiếm"}),d.jsx(Y,{className:"hidden-title",icon:d.jsx(Gn,{size:20}),type:"text",children:"Tải lại"})]})}),d.jsx($,{className:"h-full overflow-auto",lg:{span:5},span:24,children:d.jsx(Kn.DirectoryTree,{className:"p-4 w-full treeView",showLine:!0,onSelect:h,titleRender:m=>d.jsxs("p",{className:"text-inline",children:[" ",m.title]}),treeData:(E=s==null?void 0:s.newData)==null?void 0:E.children})}),d.jsx($,{className:"h-full overflow-auto",lg:{span:19},span:24,children:d.jsx(ae,{className:"overflow-auto p-4 h-full",style:{backgroundColor:e,borderRadius:6},children:d.jsx($,{span:24,style:{height:"calc(100vh - 204px)"},children:f?d.jsx("div",{className:"flex items-center justify-center",style:{height:"calc(100vh - 204px)"},children:d.jsx(_n,{tip:"Loading",size:"large"})}):d.jsx(ae,{gutter:18,children:(I=(y=c==null?void 0:c.newData)==null?void 0:y.children)==null?void 0:I.map((m,v)=>{const k=m.type==="file",x={xxl:{span:a==="horizontal"?3:24},xl:{span:a==="horizontal"?4:24},lg:{span:a==="horizontal"?6:24},md:{span:a==="horizontal"?6:24},span:a==="horizontal"?12:24},w=d.jsx(jt,{name:m==null?void 0:m.name,size:m==null?void 0:m.size,imageUrl:`${Ve}/uploads/${m==null?void 0:m.name}`,onDownload:()=>Ue("123","https://picsum.photos/200/300"),onDelete:()=>console.log("delete"),onSee:()=>console.log("see")},v),j=d.jsx(Nt,{name:m==null?void 0:m.name,size:`${St(m==null?void 0:m.size)} MB`,type:m.type,onDownload:()=>Ue("123","https://picsum.photos/200/300"),onDelete:()=>console.log("delete"),onSee:()=>console.log("see")}),F=a==="horizontal"?k?w:j:d.jsxs(ae,{children:[d.jsx($,{xl:{span:12},span:24,children:d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[d.jsx(Bn,{size:22}),d.jsx(Wn.Text,{children:"123"})]})}),d.jsx($,{xl:{span:6},children:"123"}),d.jsx($,{xl:{span:6},children:"123"})]});return d.jsx($,{...x,children:F},v)})})})})})]})})}),d.jsx(Yn,{title:"Thêm thư mục",centered:!0,open:l,onOk:()=>o(!1),onCancel:()=>o(!1),children:d.jsx(Qn,{placeholder:"Nhập tên thư mục"})})]})};export{Kt as default};
