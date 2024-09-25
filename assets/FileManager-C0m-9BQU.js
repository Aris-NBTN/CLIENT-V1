import{r as i,L as va,ap as bt,o as sa,F as ar,G as tr,H as rr,I as Wa,aq as ir,Y as Ga,ar as lr,R as I,as as Ka,j as f,at as or,f as ea,au as na,e as aa,W as Fn}from"./index-Vh6CaCBN.js";import{F as Cn,i as Sn,p as W,E as Ve,K as Ja}from"./ReactContexify.min-CgX9CLwE.js";import{b7 as sr}from"./Layout-jN7qPcNq.js";import{D as cr,l as Ya,m as Qa,n as et,o as ur,p as dr,q as fr,r as mr,s as pr,t as gr}from"./index-C3Ojar74.js";import{I as vr}from"./index-CsISpvhO.js";import{B as $e}from"./TextArea-BYLBHmx3.js";import{I as ta}from"./index-Cgd3kYe6.js";import{T as xt}from"./index-FX5ujNAR.js";import{R as ra,C as qe}from"./row-BIs4APoP.js";import{R as yt}from"./index-A4s6Kzr0.js";import{E as hr}from"./index-BTDpC-Sw.js";import{M as ia}from"./index-BrEj49SH.js";import{P as br}from"./index-CHXci339.js";import"./index-COWI_zw8.js";import"./CheckOutlined-r7Yp9YwM.js";import"./context-DmvJlOEW.js";import"./EllipsisOutlined-BN5h1C5H.js";import"./Overflow-Nzkb4Z8L.js";import"./index-DO3-EIkb.js";import"./SearchOutlined-5O5MTolL.js";import"./iconUtil-C8ZsRQOI.js";import"./index-CvUlTMya.js";const Dn=e=>{let{children:n}=e;const{getPrefixCls:a}=i.useContext(va),t=a("breadcrumb");return i.createElement("li",{className:`${t}-separator`,"aria-hidden":"true"},n===""?n:n||"/")};Dn.__ANT_BREADCRUMB_SEPARATOR=!0;var xr=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};function yr(e,n){if(e.title===void 0||e.title===null)return null;const a=Object.keys(n).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${a})`,"g"),(t,r)=>n[r]||t)}function wt(e,n,a,t){if(a==null)return null;const{className:r,onClick:l}=n,o=xr(n,["className","onClick"]),s=Object.assign(Object.assign({},bt(o,{data:!0,aria:!0})),{onClick:l});return t!==void 0?i.createElement("a",Object.assign({},s,{className:sa(`${e}-link`,r),href:t}),a):i.createElement("span",Object.assign({},s,{className:sa(`${e}-link`,r)}),a)}function wr(e,n){return(t,r,l,o,s)=>{if(n)return n(t,r,l,o);const c=yr(t,r);return wt(e,t,c,s)}}var ca=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Et=e=>{const{prefixCls:n,separator:a="/",children:t,menu:r,overlay:l,dropdownProps:o,href:s}=e,u=(d=>{if(r||l){const m=Object.assign({},o);if(r){const p=r||{},{items:v}=p,x=ca(p,["items"]);m.menu=Object.assign(Object.assign({},x),{items:v==null?void 0:v.map((h,b)=>{var{key:w,title:F,label:j,path:E}=h,C=ca(h,["key","title","label","path"]);let S=j??F;return E&&(S=i.createElement("a",{href:`${s}${E}`},S)),Object.assign(Object.assign({},C),{key:w??b,label:S})})})}else l&&(m.overlay=l);return i.createElement(cr,Object.assign({placement:"bottom"},m),i.createElement("span",{className:`${n}-overlay-link`},d,i.createElement(yt,null)))}return d})(t);return u!=null?i.createElement(i.Fragment,null,i.createElement("li",null,u),a&&i.createElement(Dn,null,a)):null},kt=e=>{const{prefixCls:n,children:a,href:t}=e,r=ca(e,["prefixCls","children","href"]),{getPrefixCls:l}=i.useContext(va),o=l("breadcrumb",n);return i.createElement(Et,Object.assign({},r,{prefixCls:o}),wt(o,r,a,t))};kt.__ANT_BREADCRUMB_ITEM=!0;const Er=kt,kr=e=>{const{componentCls:n,iconCls:a,calc:t}=e;return{[n]:Object.assign(Object.assign({},rr(e)),{color:e.itemColor,fontSize:e.fontSize,[a]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${Wa(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:t(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},ir(e)),"li:last-child":{color:e.lastItemColor},[`${n}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${n}-link`]:{[`
          > ${a} + span,
          > ${a} + a
        `]:{marginInlineStart:e.marginXXS}},[`${n}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${Wa(e.paddingXXS)}`,marginInline:t(e.marginXXS).mul(-1).equal(),[`> ${a}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},Fr=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}),Cr=ar("Breadcrumb",e=>{const n=tr(e,{});return kr(n)},Fr);var nt=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};function Sr(e){const{breadcrumbName:n,children:a}=e,t=nt(e,["breadcrumbName","children"]),r=Object.assign({title:n},t);return a&&(r.menu={items:a.map(l=>{var{breadcrumbName:o}=l,s=nt(l,["breadcrumbName"]);return Object.assign(Object.assign({},s),{title:o})})}),r}function zr(e,n){return i.useMemo(()=>e||(n?n.map(Sr):null),[e,n])}var Nr=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const jr=(e,n)=>{if(n===void 0)return n;let a=(n||"").replace(/^\//,"");return Object.keys(e).forEach(t=>{a=a.replace(`:${t}`,e[t])}),a},ha=e=>{const{prefixCls:n,separator:a="/",style:t,className:r,rootClassName:l,routes:o,items:s,children:c,itemRender:u,params:d={}}=e,m=Nr(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:p,direction:v,breadcrumb:x}=i.useContext(va);let h;const b=p("breadcrumb",n),[w,F,j]=Cr(b),E=zr(s,o),C=wr(b,u);if(E&&E.length>0){const R=[],z=s||o;h=E.map((L,H)=>{const{path:U,key:V,type:$,menu:G,overlay:_,onClick:ae,className:K,separator:Z,dropdownProps:me}=L,pe=jr(d,U);pe!==void 0&&R.push(pe);const re=V??H;if($==="separator")return i.createElement(Dn,{key:re},Z);const Q={},le=H===E.length-1;G?Q.menu=G:_&&(Q.overlay=_);let{href:q}=L;return R.length&&pe!==void 0&&(q=`#/${R.join("/")}`),i.createElement(Et,Object.assign({key:re},Q,bt(L,{data:!0,aria:!0}),{className:K,dropdownProps:me,href:q,separator:le?"":a,onClick:ae,prefixCls:b}),C(L,d,z,R,q))})}else if(c){const R=Ga(c).length;h=Ga(c).map((z,L)=>{if(!z)return z;const H=L===R-1;return lr(z,{separator:H?"":a,key:L})})}const S=sa(b,x==null?void 0:x.className,{[`${b}-rtl`]:v==="rtl"},r,l,F,j),M=Object.assign(Object.assign({},x==null?void 0:x.style),t);return w(i.createElement("nav",Object.assign({className:S,style:M},m),i.createElement("ol",null,h)))};ha.Item=Er;ha.Separator=Dn;const Mr=(e=5)=>Math.random().toString(36).substr(2,e),ua=e=>{if(e===null||typeof e!="object")return e;let n=Array.isArray(e)?[]:{};for(let a in e)a!=="parent"&&(e[a]&&typeof e[a]=="object"?n[a]=ua(e[a]):n[a]=e[a]);return n},Ft=(e,n,a=[])=>{for(let t of e){if(t.key===n){if(t.children&&t.children.length>0)for(let r of t.children)r.isLeaf&&a.push(r.key);return a}t.children&&Ft(t.children,n,a)}return a},Dr=(e,n,a,t)=>{const r=a(e,n);t(r)};function P(e){if(!e||typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n),e}var k=function(){return k=Object.assign||function(n){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(n[l]=a[l])}return n},k.apply(this,arguments)};function Rn(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a}function Xe(e,n,a,t){function r(l){return l instanceof a?l:new a(function(o){o(l)})}return new(a||(a=Promise))(function(l,o){function s(d){try{u(t.next(d))}catch(m){o(m)}}function c(d){try{u(t.throw(d))}catch(m){o(m)}}function u(d){d.done?l(d.value):r(d.value).then(s,c)}u((t=t.apply(e,[])).next())})}function Ze(e,n){var a={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},t,r,l,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(d){return c([u,d])}}function c(u){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(t=1,r&&(l=u[0]&2?r.return:u[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,u[1])).done)return l;switch(r=0,l&&(u=[u[0]&2,l.value]),u[0]){case 0:case 1:l=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(l=a.trys,!(l=l.length>0&&l[l.length-1])&&(u[0]===6||u[0]===2)){a=0;continue}if(u[0]===3&&(!l||u[1]>l[0]&&u[1]<l[3])){a.label=u[1];break}if(u[0]===6&&a.label<l[1]){a.label=l[1],l=u;break}if(l&&a.label<l[2]){a.label=l[2],a.ops.push(u);break}l[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(d){u=[6,d],r=0}finally{t=l=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Le(e,n,a){if(a||arguments.length===2)for(var t=0,r=n.length,l;t<r;t++)(l||!(t in n))&&(l||(l=Array.prototype.slice.call(n,0,t)),l[t]=n[t]);return e.concat(l||Array.prototype.slice.call(n))}var Ee=function(e){var n="";if(e)return e<1024?n=e+" Bytes":e<1024*1024?n=(e/1024).toFixed(2)+" KB":e<1024*1024*1024?n=(e/1024/1024).toFixed(2)+" MB":e<1024*1024*1024*1024?n=(e/1024/1024/1024).toFixed(2)+" GB":n=(e/1024/1024/1024/1024).toFixed(2)+" TB",n},Rr={defaultLabel:"Trascina qui i tuoi file",uploadingMessage:function(e){return"Caricamento di ".concat(e," file")},uploadFinished:function(e,n){return"File caricati: ".concat(e,", File rifiutati: ").concat(n)},noFilesMessage:"Nessun file valido in attesa di essere caricato",footer:{acceptAll:"Tutti i tipi di file sono accettati",acceptCustom:function(e){return"Tipi di file consentiti: ".concat(e)}},header:{uploadFilesMessage:"Caricamento",maxSizeMessage:function(e){return"Dimensione massima ".concat(e)},validFilesMessage:function(e,n){return"File  ".concat(e,"/").concat(n)}},fakeuploadsuccess:"Il file è stato caricato con successo ",fakeUploadError:"Errore di caricamento del file"},Lr={fullInfoLayer:{name:"Nome: ",size:"Dimensione: ",type:"Tipo: "},status:{preparing:"preparazione",uploading:"In corso",success:"Successo",valid:"Valido",denied:"Non válido",error:"Errore",aborted:"Interrotto"}},Br={maxSizeError:function(e){return"Il file è molto grande. Il tam. il massimo è ".concat(Ee(e))},acceptError:"Tipo di file illegale",maxFileCount:function(e){return"Numero massimo di file (".concat(e,") raggiunto")}},Ar={defaultLabel:"Déposez vos fichiers ici",uploadingMessage:function(e){return"Envoi de ".concat(e," fichiers")},uploadFinished:function(e,n){return"Fichiers téléchargés : ".concat(e,", Fichiers rejetés: ").concat(n)},noFilesMessage:"Aucun fichier valide ne manque",footer:{acceptAll:"Tous types de fichiers acceptés ",acceptCustom:function(e){return"Types de fichier: ".concat(e)}},header:{uploadFilesMessage:"Envoyer",maxSizeMessage:function(e){return"Taille maximale ".concat(e)},validFilesMessage:function(e,n){return"Fichiers  ".concat(e,"/").concat(n)}},fakeuploadsuccess:"Le fichier a été téléchargé avec succès",fakeUploadError:"Erreur lors du téléchargement "},Ir={fullInfoLayer:{name:"Le nom: ",size:"Le taille: ",type:"Le type: "},status:{preparing:"préparer",uploading:"En cours",success:"Succès",valid:"Valide",denied:"Refusé",error:"Erreur",aborted:"Interrompu"}},Or={maxSizeError:function(e){return"Le fichier est très volumineux. Le tam. le maximum est de ".concat(Ee(e))},acceptError:"Type de fichier illégal ",maxFileCount:function(e){return"Limite de fichiers atteinte (".concat(e,")")}},Ur={defaultLabel:"Drop your files here",uploadingMessage:function(e){return"Uploading ".concat(e," files")},uploadFinished:function(e,n){return"Uploaded files: ".concat(e,", Rejected files: ").concat(n)},noFilesMessage:"There is no missing valid file to upload",footer:{acceptAll:"All file types accepted",acceptCustom:function(e){return"Allowed types: ".concat(e)}},header:{uploadFilesMessage:"Upload files",maxSizeMessage:function(e){return"Max file size: ".concat(e)},validFilesMessage:function(e,n){return"Files ".concat(e,"/").concat(n)}},fakeuploadsuccess:"File was successfuly uploaded",fakeUploadError:"Error on uploading. Please try again later."},_r={fullInfoLayer:{name:"Name: ",size:"Size: ",type:"Type: "},status:{preparing:"Preparing",uploading:"Uploading",success:"Success",valid:"Valid",denied:"Not valid",error:"Error",aborted:"Aborted"}},Tr={maxSizeError:function(e){return"File is too big. Max file size allowed is ".concat(Ee(e))},acceptError:"File type is not allowed",maxFileCount:function(e){return"Max amount of files (".concat(e,") has been reached")}},Pr={defaultLabel:"Suelta tus archivos aquí",uploadingMessage:function(e){return"Subiendo ".concat(e," archivos")},uploadFinished:function(e,n){return"Archivos subidos: ".concat(e,", Archivos rechazados: ").concat(n)},noFilesMessage:"No hay archivos válidos pendientes por subir",footer:{acceptAll:"Todos los tipos de archivo aceptados",acceptCustom:function(e){return"Tipo(s) de archivo permitidos: ".concat(e)}},header:{uploadFilesMessage:"Subir",maxSizeMessage:function(e){return"Tam. máximo ".concat(e)},validFilesMessage:function(e,n){return"Archivos ".concat(e,"/").concat(n)}},fakeuploadsuccess:"El archivo se subió correctamente",fakeUploadError:"Error al subir el archivo"},Hr={fullInfoLayer:{name:"Nombre: ",size:"Tamaño: ",type:"Tipo: "},status:{preparing:"Preparando",uploading:"Subiendo",success:"Éxito",valid:"Válido",denied:"No válido",error:"Error",aborted:"Anulado"}},Vr={maxSizeError:function(e){return"El archivo es muy grande. El tam. máximo es ".concat(Ee(e))},acceptError:"Tipo de archivo no permitido",maxFileCount:function(e){return"Cantidad máxima de archivos (".concat(e,") alcanzada")}},$r={defaultLabel:"Перетащите сюда свои файлы.",uploadingMessage:function(e){return"Выгрузка ".concat(e," файлов")},uploadFinished:function(e,n){return"Загружено файлов: ".concat(e,", отклоненных файлов: ").concat(n)},noFilesMessage:"Действительный файл не отсутствует для загрузки",footer:{acceptAll:"Принимаются все типы файлов ",acceptCustom:function(e){return"Допустимые типы: ".concat(e)}},header:{uploadFilesMessage:"Отправить",maxSizeMessage:function(e){return"макс размер: ".concat(e)},validFilesMessage:function(e,n){return"Файлы ".concat(e,"/").concat(n)}},fakeuploadsuccess:"Файл был успешно загружен",fakeUploadError:"Ошибка при загрузке"},qr={fullInfoLayer:{name:"Имя: ",size:"Размер: ",type:"Tип: "},status:{preparing:"подготовка",uploading:"Загрузка",success:"успех",valid:"годный",denied:"выкинутый",error:"ошибка",aborted:"прерванный"}},Xr={maxSizeError:function(e){return"Файл слишком большой. Максимально допустимый размер файла - ".concat(Ee(e))},acceptError:"Тип файла не разрешен",maxFileCount:function(e){return"Достигнуто максимальное количество файлов (".concat(e,")")}},Zr={defaultLabel:"Solte seus arquivos aqui ",uploadingMessage:function(e){return"Enviando ".concat(e," arquivos")},uploadFinished:function(e,n){return"Arquivos enviados: ".concat(e,", Arquivos rejeitados: ").concat(n)},noFilesMessage:"Nenhum arquivo válido está faltando para enviar",footer:{acceptAll:"Todos os tipos de arquivo são aceitos",acceptCustom:function(e){return"Tipos permitidos: ".concat(e)}},header:{uploadFilesMessage:"Enviar",maxSizeMessage:function(e){return"Tamanho máximo: ".concat(e)},validFilesMessage:function(e,n){return"Arquivos ".concat(e,"/").concat(n)}},fakeuploadsuccess:"O arquivo foi enviado com sucesso",fakeUploadError:"Erro ao enviar"},Wr={fullInfoLayer:{name:"Nome: ",size:"Tamanho: ",type:"Tipo: "},status:{preparing:"Preparando",uploading:"Enviando",success:"Êxito",valid:"válido",denied:"Negado",error:"Erro",aborted:"Abortado"}},Gr={maxSizeError:function(e){return"O arquivo é muito grande. O tamanho máximo de arquivo permitido é ".concat(Ee(e))},acceptError:"O tipo de arquivo não é permitido ",maxFileCount:function(e){return"Quantidade máxima de arquivos (".concat(e,") alcançada")}},Kr={defaultLabel:"将您的文件放在这里",uploadingMessage:function(e){return"上传 ".concat(e," 个文件")},uploadFinished:function(e,n){return"上传文件：".concat(e,"，拒绝文件：").concat(n)},noFilesMessage:"没有缺少要加载的有效文件",footer:{acceptAll:"接受所有文件类型",acceptCustom:function(e){return"允许的类型: ".concat(e)}},header:{uploadFilesMessage:"上传文件",maxSizeMessage:function(e){return"最大文件大小：".concat(e)},validFilesMessage:function(e,n){return"文档 ".concat(e,"/").concat(n)}},fakeuploadsuccess:"文件已成功上传",fakeUploadError:"上传时出错"},Jr={fullInfoLayer:{name:"文档名称: ",size:"尺寸: ",type:"文件类型: "},status:{preparing:"预加载",uploading:"上传",success:"成功",valid:"接受的文件",denied:"被拒绝的文件",error:"错误",aborted:"中止"}},Yr={maxSizeError:function(e){return"文件太大。 允许的最大文件大小为 ".concat(Ee(e))},acceptError:"文件类型不允许",maxFileCount:function(e){return"已达到最大文件数 (".concat(e,")")}},Qr={defaultLabel:"把你的文件放在這裡 ",uploadingMessage:function(e){return"上傳".concat(e,"個文件")},uploadFinished:function(e,n){return"上傳文件: ".concat(e,", 拒絕的文件：").concat(n)},noFilesMessage:"沒有缺少要上傳的有效文件",footer:{acceptAll:"接受所有文件類型",acceptCustom:function(e){return"允許的類型：".concat(e)}},header:{uploadFilesMessage:"上傳文件",maxSizeMessage:function(e){return"最大文件大小：".concat(e)},validFilesMessage:function(e,n){return" 文件 ".concat(e,"/").concat(n)}},fakeuploadsuccess:"文件已成功上傳",fakeUploadError:"上傳時出錯"},ei={fullInfoLayer:{name:"文檔名稱: ",size:"文件大小: ",type:"文件類型: "},status:{preparing:"預加載",uploading:"上傳",success:"成功",valid:"有效文件",denied:"無效文件",error:"錯誤",aborted:"中止"}},ni={maxSizeError:function(e){return"文件太大。 允許的最大文件大小為 ".concat(Ee(e))},acceptError:"文件類型不允許",maxFileCount:function(e){return"已達到最大文件數 (".concat(e,")")}},ze={"ES-es":Hr,"EN-en":_r,"FR-fr":Ir,"IT-it":Lr,"PT-pt":Wr,"RU-ru":qr,"ZH-cn":Jr,"ZH-hk":ei},Ue=function(e){switch(e){case"ES-es":return ze["ES-es"];case"EN-en":return ze["EN-en"];case"FR-fr":return ze["FR-fr"];case"IT-it":return ze["IT-it"];case"PT-pt":return ze["PT-pt"];case"RU-ru":return ze["RU-ru"];case"ZH-cn":return ze["ZH-cn"];case"ZH-hk":return ze["ZH-hk"];default:return ze["EN-en"]}},Ne={"ES-es":Pr,"EN-en":Ur,"FR-fr":Ar,"IT-it":Rr,"PT-pt":Zr,"RU-ru":$r,"ZH-cn":Kr,"ZH-hk":Qr},cn=function(e){switch(e){case"ES-es":return Ne["ES-es"];case"EN-en":return Ne["EN-en"];case"FR-fr":return Ne["FR-fr"];case"IT-it":return Ne["IT-it"];case"PT-pt":return Ne["PT-pt"];case"RU-ru":return Ne["RU-ru"];case"ZH-cn":return Ne["ZH-cn"];case"ZH-hk":return Ne["ZH-hk"];default:return Ne["EN-en"]}},at={"ES-es":Vr,"EN-en":Tr,"FR-fr":Or,"IT-it":Br,"PT-pt":Gr,"RU-ru":Xr,"ZH-cn":Yr,"ZH-hk":ni},ai=function(e){return!e||!["ES-es","EN-en","FR-fr","IT-it","PT-pt","RU-ru","ZH-cn","ZH-hk"].includes(e)?at["EN-en"]:at[e]},Ct=function(e,n,a){return new Promise(function(t,r){try{var l=new FileReader;l.onprogress=function(){n==null||n()},l.onerror=function(){a==null||a()},l.onload=function(){t(l.result)},l.readAsDataURL(e)}catch{r(void 0)}})};function ti(e){return new Promise(function(n,a){if(!e||e.length===0){a("landscape");return}try{var t=new Image;t.src=e,t.onerror=function(r){a("landscape")},t.onload=function(){var r=t.width,l=t.height;r>l?n("landscape"):n("portrait")}}catch{a("landscape")}})}var ri="https://user-images.githubusercontent.com/43678736/132086517-72a51a12-e403-4675-bfd7-22c23affa730.png",ii="https://user-images.githubusercontent.com/43678736/132086518-7026d4f1-ea16-4ed0-89fd-37c1aa8ac3ed.png",li="https://user-images.githubusercontent.com/43678736/132086519-863c63b4-917e-4471-94ff-7e15651cc14b.png",oi="https://user-images.githubusercontent.com/43678736/132086520-9bc6aa3b-51c9-4da2-9ef7-349162b86d0b.png",si="https://user-images.githubusercontent.com/43678736/132086521-dbd6cf0d-d4d7-4b92-bb26-17e8a51a9383.png",ci="https://user-images.githubusercontent.com/43678736/132086522-070f48e8-78a8-4294-8dbb-aab81525e164.png",ui="https://user-images.githubusercontent.com/43678736/132086595-90ab7f90-f87e-4900-94d9-d0b26745df48.png",di="https://user-images.githubusercontent.com/43678736/132086597-e285ad5c-613a-4679-a270-493e5be4ffd9.png",fi="https://user-images.githubusercontent.com/43678736/132086598-623c410a-084a-4395-a448-211b2ff61cfe.png",mi="https://user-images.githubusercontent.com/43678736/132086600-8b70a007-512d-4252-9c66-eabd3ddd6573.png",pi="https://user-images.githubusercontent.com/43678736/132086601-e62e5d1a-d8a2-4475-a14f-85922cec9272.png",gi="https://user-images.githubusercontent.com/43678736/132086602-4c772934-f608-4f01-8459-c4622cee8ad5.png",vi="https://user-images.githubusercontent.com/43678736/132086604-b5b019fe-572e-477e-92c2-3769a48a1304.png",hi="https://user-images.githubusercontent.com/43678736/132086606-715ccb66-4702-4f7d-9b09-ac93ba17b643.png",bi="https://user-images.githubusercontent.com/43678736/132086608-bcae9d57-8e54-488c-90c4-4952ae530b5e.png",xi="https://user-images.githubusercontent.com/43678736/132086618-397d6bd2-9fda-43ed-a135-cb40388c35af.png",yi="https://user-images.githubusercontent.com/43678736/132086620-2586ba40-c583-4589-b1a4-8bb5b258b44d.png",wi="https://user-images.githubusercontent.com/43678736/132086621-3b95fb64-2533-4ccc-abcd-bd2beba572e9.png",Ei="https://user-images.githubusercontent.com/43678736/132086622-af705a0c-2b25-4ba7-8ab6-bd69ec97f7e2.png",ki="https://user-images.githubusercontent.com/43678736/132086624-89141a46-64e4-4fa0-bf69-54a0eb4d48c9.png",tt="https://user-images.githubusercontent.com/43678736/132086625-1b8f2652-1de0-4475-8c12-7da4a9973ffb.png",Fi="https://user-images.githubusercontent.com/43678736/132086626-38699705-1e6f-4bca-984b-03167b236faa.png",Ci="https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png",Si="https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png",zi="https://user-images.githubusercontent.com/43678736/132086652-4562942e-aaea-466c-968f-380fffabf3f9.png",Ni="https://user-images.githubusercontent.com/43678736/132086653-0487e7e2-1ee3-49e2-8cfe-3e20f1f7490a.png",ji="https://user-images.githubusercontent.com/43678736/132086656-6e96c815-e4e2-4ffd-9d71-57e9cc2450bc.png",Mi="https://user-images.githubusercontent.com/43678736/132086658-5d27d3c2-394f-43fb-b512-9b414a257875.png",Di="https://user-images.githubusercontent.com/43678736/132086659-98f3ef6e-b9f3-4b6d-b18f-469b5334ba27.png",Ri="https://user-images.githubusercontent.com/43678736/132086661-a5484553-06c7-4ffa-a8f9-96b57b1b0344.png",Li="https://user-images.githubusercontent.com/43678736/132086662-05ad1597-d5e5-4efa-833e-2876e966a745.png",Bi="https://user-images.githubusercontent.com/43678736/132086663-90c58955-f7fb-4bdb-ac53-92667d16d4a3.png",Ai="https://user-images.githubusercontent.com/43678736/132086664-9a7530e7-6d78-4ef3-a176-20cf7f57b555.png",la="https://user-images.githubusercontent.com/43678736/132086666-ab3c505d-b2c0-4177-9a06-aed5d9c39ee4.png",Ii="https://user-images.githubusercontent.com/43678736/132086667-6c7dcbcc-8d83-41a2-8e0a-85b09e2791ae.png",Oi="https://user-images.githubusercontent.com/43678736/132086668-9f246e91-cf2e-49cf-9617-e1fbb71abbbb.png",Ui="https://user-images.githubusercontent.com/43678736/132086669-46113762-84d1-4b32-9441-b0138ce17a5d.png",_i="https://user-images.githubusercontent.com/43678736/145835364-2054509d-3448-4d34-921f-73dd6e297fc7.png",Ti="https://user-images.githubusercontent.com/43678736/145835367-19172bf8-cd5a-4cbe-b512-d0de1d91f269.png",Pi="https://user-images.githubusercontent.com/43678736/145835373-a57ef0f5-3968-483b-9f55-6d67e7f1dcea.png",Hi="https://user-images.githubusercontent.com/43678736/132086670-0f96e770-cedc-4635-a5f9-cf97894c1d7a.png",Vi="https://user-images.githubusercontent.com/43678736/132086671-02ad35ef-ec3a-4a65-abd5-5bf794dfcf7b.png",$i="https://user-images.githubusercontent.com/43678736/132086672-3a856fda-823d-4997-b802-c7c640e6ef44.png",qi="https://user-images.githubusercontent.com/43678736/132086673-0c4409ab-754e-4619-8cfa-179d0ccf1bd9.png",Xi="https://user-images.githubusercontent.com/43678736/132086674-fdb56d02-5845-49b7-8462-6357bc963464.png",Zi="https://user-images.githubusercontent.com/43678736/132086675-c879645d-acb4-41a6-ab3c-4e6c2048badb.png",Wi="https://user-images.githubusercontent.com/43678736/132086685-4e327c4c-a409-4b83-b36a-8d88936b314b.png",Gi="https://user-images.githubusercontent.com/43678736/132086688-8e82fae4-3a9b-49c0-bf99-77189525514c.png",Ki="https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png",Ji="https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png",Yi="https://user-images.githubusercontent.com/43678736/132086691-d472576b-ec6a-4332-acd2-dd6a00b72952.png",Qi="https://user-images.githubusercontent.com/43678736/132086693-9d43571e-0c86-438f-b247-e2cb42e19e06.png",el="https://user-images.githubusercontent.com/43678736/132086694-4e661d6a-1118-441e-8bc3-c52fcb2133b6.png",nl="https://user-images.githubusercontent.com/43678736/132086697-1d82d724-35b6-4f06-847a-3c59a5deda6e.png",al="https://user-images.githubusercontent.com/43678736/132086698-19384230-dbd7-4e05-bc69-ef4537b6aae3.png",tl="https://user-images.githubusercontent.com/43678736/132086699-5993a482-04f4-4915-b105-9037f527cf61.png",rl="https://user-images.githubusercontent.com/43678736/132086700-c23461c8-6819-46e1-aecd-0a1f8d3507bb.png",il="https://user-images.githubusercontent.com/43678736/132086701-c8044c09-8d95-4af1-9410-66761001d7da.png",ll="https://user-images.githubusercontent.com/43678736/132086702-59294337-ed99-4302-badd-316b2c1ff62f.png",ol="https://user-images.githubusercontent.com/43678736/132086704-8fd51e7c-afa2-47a3-ab2f-d0bcd0ecae9f.png",sl="https://user-images.githubusercontent.com/43678736/132086705-33294da1-5c0f-49f7-b890-e4857cec0a6d.png",cl="https://user-images.githubusercontent.com/43678736/132086706-22f805d0-39d4-494b-824e-47dc75d05eb7.png",ul="https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png",dl="https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png",fl="https://user-images.githubusercontent.com/43678736/132086708-21d096dd-7148-40aa-97f1-cbb099339740.png",ml="https://user-images.githubusercontent.com/43678736/132086709-811d4e90-3cfa-4044-a956-aeda9c67fc92.png",pl="https://user-images.githubusercontent.com/43678736/132086710-c5479c6c-0249-4542-adad-48b0ef40b775.png",gl="https://user-images.githubusercontent.com/43678736/132086711-1524a3e7-3e33-4822-a34f-ff3235404045.png",vl="https://user-images.githubusercontent.com/43678736/132086712-17e2c491-f6e4-4586-aef6-06bcc5f4b0e5.png",hl="https://user-images.githubusercontent.com/43678736/132086715-204b5a8b-9c5a-4bac-8294-9237ebc16089.png",bl="https://user-images.githubusercontent.com/43678736/132086716-64511d20-58cb-45a8-85df-f4d9408b469d.png",xl="https://user-images.githubusercontent.com/43678736/132086718-a8499333-6282-4820-aa1f-4d133eb54648.png",ba=function(e){var n=/(?:\.([^.]+))?$/,a=n.exec(e);return a?a[1]:""},fe="octet",yl=function(e){switch(e){case"aac":return"aac";case"midi":return"midi";case"x-midi":return"midi";case"mpeg":return"mpeg";case"ogg":return"oga";case"opus":return"opus";case"wav":return"wav";case"webm":return"webm";case"wma":return"wma";default:return fe}},wl=function(e){switch(e){case"css":return"css";case"csv":return"csv";case"html":return"html";case"calendar":return"icalendar";case"javascript":return"javascript";case"x-javascript":return"javascript";case"plain":return"text";case"xml":return"xml";default:return fe}},El=function(e){switch(e){case"bmp":return"bmp";case"gif":return"gif";case"jpg":return"jpeg";case"jpeg":return"jpeg";case"png":return"png";case"tiff":return"tiff";case"webp":return"webp";default:return fe}},kl=function(e){switch(e){case"otf":return"otf";case"ttf":return"ttf";case"woff":return"woff";case"woff2":return"woff";default:return fe}},Fl=function(e){switch(e){case"x-msvideo":return"avi";case"msvideo":return"avi";case"avi":return"avi";case"mp4":return"mp4";case"mpeg":return"mpeg";case"ogg":return"ogv";case"mp2t":return"mp2t";case"wmv":return"wmv";case"webm":return"webm";default:return fe}},Cl=function(e){switch(e){case"x-abiword":return"abw";case"abiword":return"abw";case"x-freearc":return"arc";case"freearc":return"arc";case"vnd.amazon.ebook":return"azw";case"octet-stream":return"octet";case"x-bzip":return"bz";case"x-bzip2":return"bz2";case"bzip":return"bz";case"bzip2":return"bz2";case"x-cdf":return"cda";case"msaccess":return"accdb";case"csh":return"csh";case"x-csh":return"csh";case"vnd.ms-fontobject":return"eot";case"epub+zip":return"epub";case"gzip":return"gzip";case"java-archive":return"jar";case"x-javascript":return"javascript";case"json":return"json";case"ld+json":return"jsonld";case"vnd.apple.installer+xml":return"mpkg";case"ogg":return"ogx";case"vnd.rar":return"rar";case"rtf":return"rtf";case"x-sh":return"sh";case"sh":return"sh";case"x-shockwave-flash":return"swf";case"x-tar":return"tar";case"x-httpd-php":return"php";case"vnd.visio":return"vsd";case"xhtml+xml":return"xhtml";case"xml":return"xml";case"vnd.mozilla.xul+xml":return"xul";case"vnd.openxmlformats-officedocument.wordprocessingml.document":return"docx";case"msword":return"docx";case"vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"xlsx";case"vnd.openxmlformats-officedocument.presentationml.presentation":return"pptx";case"vnd.ms-powerpoint":return"pptx";case"vnd.oasis.opendocument.presentation":return"odp";case"vnd.oasis.opendocument.text":return"odt";case"vnd.oasis.opendocument.spreadsheet":return"ods";case"zip":return"zip";case"x-zip-compressed":return"zip";case"pdf":return"pdf";default:return fe}},St=function(e){if(!e||!e.includes("/"))return fe;var n=e.split("/")[0],a=e.split("/")[1];switch(n){case"application":return Cl(a);case"audio":return yl(a);case"video":return Fl(a);case"text":return wl(a);case"image":return El(a);case"font":return kl(a);default:return fe}},zt=function(e){var n="octet";return e&&e!==""&&(e.includes("zip")||e.includes("rar")?n="zip":e.includes("doc")?n="docx":e.includes("xls")?n="xlsx":e.includes("drawio")?n="drawio":e.includes("psd")?n="psd":e.includes("csv")?n="csv":e==="jsx"?n="react":e==="py"?n="python":e==="vue"?n="vue":e==="java"?n="java":e==="ts"?n="typescript":(e==="sass"||e==="scss")&&(n="sass")),n},Nt=function(e){var n="text";return e&&e!==""&&(e==="jsx"?n="react":e==="py"?n="python":e==="vue"?n="vue":e==="java"?n="java":e==="ts"||e==="tsx"?n="typescript":e==="js"?n="javascript":e==="xml"?n="xml":e==="php"&&(n="php")),n},Sl=function(e,n){var a="fallBack";if(e)a=St(e.type);else return a=fe,n!=null&&n.fallBack?{url:n==null?void 0:n.fallBack,mimeResume:a}:{url:zn[a],mimeResume:a};var t=ba(e.name);a==="text"&&(a=Nt(t)),a===fe&&(a=zt(t));var r=n==null?void 0:n[a];return r!==void 0?{url:r,mimeResume:a}:{url:zn[a],mimeResume:a}},zl=function(e,n,a){var t="octet";if(e)t=St(n);else return t=fe,a!=null&&a.fallBack?{url:a==null?void 0:a.fallBack,mimeResume:t}:{url:zn[t],mimeResume:t};var r=ba(e);t==="text"&&(t=Nt(r)),t===fe&&(t=zt(r));var l=a==null?void 0:a[t];return l!==void 0?{url:l,mimeResume:t}:{url:zn[t],mimeResume:t}},zn={aac:ii,accdb:oi,abw:li,arc:wi,avi:si,azw:ci,octet:la,bmp:ui,bz:di,bz2:fi,cda:mi,csh:pi,css:gi,csv:vi,docx:hi,drawio:bi,eot:xi,epub:yi,gzip:ki,gif:Ei,html:tt,icalendar:Fi,jar:Si,jpeg:Ni,javascript:zi,json:ji,jsonld:Mi,midi:Di,mp3:Ri,mp4:Li,mpeg:Bi,mpkg:Ai,mp2t:la,odp:Ii,ods:Oi,odt:Ui,oga:_i,ogv:Ti,ogx:Pi,opus:Hi,otf:Vi,png:Xi,pdf:$i,php:qi,pptx:Zi,psd:Wi,rar:Ji,rtf:Qi,sass:el,sh:nl,swf:al,tar:Ki,tiff:rl,ttf:il,typescript:ll,text:tl,vsd:ol,wav:cl,weba:dl,webm:ul,webp:fl,woff:gl,wma:ml,wmv:pl,xhtml:tt,xlsx:vl,xml:hl,xul:bl,zip:xl,sevenzip:ri,python:Gi,java:Ci,react:Yi,vue:sl,fallBack:la},Nn=function(){function e(n){var a=n.id,t=n.file,r=n.name,l=n.size,o=n.type,s=n.imageUrl,c=n.valid,u=n.errors,d=n.uploadMessage,m=n.uploadStatus,p=n.progress,v=n.xhr,x=n.extraData,h=n.extraUploadData,b=n.serverResponse,w=n.downloadUrl,F=n.videoUrl,j=n.uploadUrl;this.id=a,this.file=t,this.name=r,this.size=l,this.type=o,this.imageUrl=s,this.valid=c,this.errors=u,this.uploadStatus=m,this.uploadMessage=d,this.progress=p,this.xhr=v,this.extraData=x,this.extraUploadData=h,this.serverResponse=b,this.downloadUrl=w,this.videoUrl=F,this.uploadUrl=j}return e.toExtFile=function(n){for(var a={},t=Object.keys(n),r=Object.values(n),l=0;l<r.length;l++){var o=r[l],s=t[l];o!==void 0&&(a[s]=o)}return a},e.prototype.toExtFile=function(){return e.toExtFile(this)},e.hasValidUrl=function(n){return n.uploadUrl&&n.uploadUrl.length>0},e.someValidUrl=function(n){return n.some(e.hasValidUrl)},e}(),A=function(){return A=Object.assign||function(n){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(n[l]=a[l])}return n},A.apply(this,arguments)};function We(e,n,a,t){function r(l){return l instanceof a?l:new a(function(o){o(l)})}return new(a||(a=Promise))(function(l,o){function s(d){try{u(t.next(d))}catch(m){o(m)}}function c(d){try{u(t.throw(d))}catch(m){o(m)}}function u(d){d.done?l(d.value):r(d.value).then(s,c)}u((t=t.apply(e,[])).next())})}function Ge(e,n){var a={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},t,r,l,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(d){return c([u,d])}}function c(u){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(t=1,r&&(l=u[0]&2?r.return:u[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,u[1])).done)return l;switch(r=0,l&&(u=[u[0]&2,l.value]),u[0]){case 0:case 1:l=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(l=a.trys,!(l=l.length>0&&l[l.length-1])&&(u[0]===6||u[0]===2)){a=0;continue}if(u[0]===3&&(!l||u[1]>l[0]&&u[1]<l[3])){a.label=u[1];break}if(u[0]===6&&a.label<l[1]){a.label=l[1],l=u;break}if(l&&a.label<l[2]){a.label=l[2],a.ops.push(u);break}l[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(d){u=[6,d],r=0}finally{t=l=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function jn(e,n,a){if(a||arguments.length===2)for(var t=0,r=n.length,l;t<r;t++)(l||!(t in n))&&(l||(l=Array.prototype.slice.call(n,0,t)),l[t]=n[t]);return e.concat(l||Array.prototype.slice.call(n))}var da=function(){function e(){}return e.getNextId=function(){return e.nextId++,e.nextId},e.setFileList=function(n,a){return n?(e.fileLists[n]=jn([],a,!0),n):0},e.createFileListMap=function(){var n=e.getNextId();return e.fileLists[n]=[],n},e.removeFileListMap=function(n){if(n)try{return e.fileLists[n]=void 0,n}catch{return 0}else return 0},e.getExtFileInstanceList=function(n){try{return n?e.fileLists[n]:void 0}catch{return}},e.setFileListMapPreparing=function(n,a,t,r){if(typeof n=="number"||typeof n=="string")try{var l=[],o=jn([],a,!0);r&&t&&(o=o.filter(function(c){return c.valid})),t?o=o.map(function(c){return c.uploadStatus!=="success"&&c.valid?A(A({},c),{uploadStatus:"preparing"}):A({},c)}):o=o.map(function(c){return c.uploadStatus!=="success"?A(A({},c),{uploadStatus:"preparing"}):A({},c)}),l=o.map(function(c){return new Nn(c)});var s=e.setFileList(n,l);return l}catch{return}},e.setFileListMapPreparing2=function(n,a,t,r){return e.setFileList(n,a.map(function(l){return new Nn(A(A({},l),{uploadStatus:"preparing"}))})),e.getExtFileInstanceList(n)},e.nextId=0,e.fileLists={},e}(),xa=function(){function e(){}return e.getNextId=function(){return e.nextId++,e.nextId},e.nextId=0,e}(),rt=function(e){for(var n=[],a=0,t=void 0;t=e[a];a++)n.push({id:xa.getNextId(),file:t,name:t.name,size:t.size,type:t.type});return n},Nl=function(e,n,a,t){return e!=null||n!=null||a!=null||t!=null},jl=function(e){return e===void 0&&(e=5e3),new Promise(function(n,a){setTimeout(function(){n()},e)})},Ml=function(e,n){n===void 0&&(n=cn("EN-en"));var a=e.toExtFile();return new Promise(function(t,r){setTimeout(function(){var l=Math.floor(Math.random()*10);if(l%2===0){var o=!0,s=n.fakeuploadsuccess,c={url:""};t(A(A({},a),{serverResponse:{success:o,message:s,payload:c},uploadStatus:"success",uploadMessage:s}))}else{var o=!1,s=n.fakeUploadError,c={};t(A(A({},a),{serverResponse:{success:o,message:s,payload:c},uploadStatus:"error",uploadMessage:s}))}},1700)})};function Dl(e,n){return Math.floor(Math.random()*(n-e))+e}var Rl=function(e){e&&(e.value="")},be=function(e,n){return n?"".concat(e," ").concat(n):e},Ll=function(e,n){return(!n||n&&e.valid)&&e.uploadStatus!=="success"},Bl=function(e,n,a,t){var r="",l=void 0,o=void 0;return e&&typeof e.name=="string"?(r=e.name,l=e.type,o=e.size):n&&typeof n=="string"&&(r=n,l=a,o=t),[r,l,o]},Al=function(e){if(!e||e.length===0)return[];var n=e.split(",").map(function(a){return a.trim()});return n},Il=function(e,n){for(var a=!1,t=n.name,r=n.type,l=0;l<e.length;l++){var o=e[l];if(o.length!==0){if(o.charAt(0)==="."&&o.includes(ba(t)))return!0;if(r&&r.length>0&&o.includes("/")&&r.includes("/")){var s=o.split("/")[0],c=o.split("/")[1],u=r.split("/")[0],d=r.split("/")[1];if(s===u){if(c==="*")return!0;if(c===d)return!0}}}}return a},fa=function(e,n,a,t,r,l){var o=[];if(!n)return o;for(var s=n,c=ai(l),u=c.maxFileCount,d=0;d<e.length;d++){var m=e[d];if(m=Ol(m,t,a,c),m.valid){var p=s>0;m.valid=p,p||(m.errors=m.errors?jn(jn([],m.errors,!0),[u(r||1/0)],!1):[u(r||1/0)]),s--}o.push(m)}return o},Ol=function(e,n,a,t){var r=A({},e),l=[];if(!e.file)return A({},r);if(n){var o=n(r.file),s=o.errors;s&&l.push.apply(l,s)}var c=a.maxFileSize,u=a.accept,d=e.file;if(c&&d.size>c){var m=t.maxSizeError;l.push(m(c))}u&&!Il(Al(u),d)&&l.push(t.acceptError);var p=l.length===0;return r=A(A({},r),{valid:p,errors:p?void 0:l}),r};function Ul(e,n){for(var a=Object.keys(n||{}),t=0;t<a.length&&n;t++)e.append(a[t],n[a[t]])}function jt(e,n){for(var a=Object.keys(n||{}),t=0;t<a.length&&n;t++)e.setRequestHeader(a[t],n[a[t]])}var _l="Unable to upload. A valid url was not provided",Tl="Unable to upload. xhr object was not provided",Mt={success:!1,message:"Timeout error",payload:{}},Mn={success:!1,message:"Upload aborted",payload:{}},Pl={success:!1,message:"Error when parsing JSON response",payload:{}},Hl={success:!1,message:"Unexpected error",payload:{}},Vl=function(e){return A(A({},e),{uploadMessage:Tl,uploadStatus:"error",serverResponse:{success:!1}})},$l=function(e){return A(A({},e),{uploadMessage:_l,uploadStatus:"error",serverResponse:{success:!1}})},Dt=function(e){try{var n=JSON.parse(e.response),a=e.status>=200&&e.status<300?!0:typeof n.success=="boolean"?n.success:!1,t=typeof n.message=="string"?n.message:a?"Upload compete!. No message from server found.":"Error on upload. No message from server found.",r=n.payload||n||{},l={success:a,message:t,payload:r};return l}catch{return Pl}},ql=function(e,n){return A(A({},e),{serverResponse:n,uploadMessage:n.message,uploadStatus:"success"})},it=function(e,n){return A(A({},e),{uploadMessage:n.message,uploadStatus:"error",serverResponse:n})},Xl=function(e,n,a,t,r){return n===void 0&&(n="POST"),new Promise(function(l,o){console.log("uploadBlob => BLOB");var s=["POST","PUT","PATCH"].includes(n.toUpperCase())?n:"POST";e.upload.onload=function(){},e.upload.ontimeout=function(){return l(Mt)},e.upload.onabort=function(){l(Mn)},e.onloadend=function(c){return We(void 0,void 0,void 0,function(){return Ge(this,function(u){return[2]})})},e.onreadystatechange=function(c){return We(void 0,void 0,void 0,function(){return Ge(this,function(u){return e.readyState===4&&(e.response!==""?l(Dt(e)):l(Mn)),[2]})})},e.open(s,a,!0),jt(e,r),e.send(t)})},Zl=function(e,n,a,t,r){return n===void 0&&(n="POST"),new Promise(function(l,o){var s=["POST","PUT","PATCH"].includes(n.toUpperCase())?n:"POST";e.upload.onload=function(){},e.upload.ontimeout=function(){return l(Mt)},e.upload.onabort=function(){l(Mn)},e.onloadend=function(c){return We(void 0,void 0,void 0,function(){return Ge(this,function(u){return[2]})})},e.onreadystatechange=function(c){return We(void 0,void 0,void 0,function(){return Ge(this,function(u){return e.readyState===4&&(e.response!==""?l(Dt(e)):l(Mn)),[2]})})},e.open(s,a,!0),jt(e,r),e.send(t)})},Wl=function(e,n,a,t,r,l,o){return We(void 0,void 0,void 0,function(){return Ge(this,function(s){return[2,new Promise(function(c,u){return We(void 0,void 0,void 0,function(){var d,m,p,v,x,h,b;return Ge(this,function(w){switch(w.label){case 0:return w.trys.push([0,5,,6]),d=e.xhr,d?(m=e.uploadUrl||(a==null?void 0:a(e))||n,m==null||m.length==0?(c($l(e)),[2]):(p=t||"POST",v=e.file,x=new FormData,x.append(l||"file",v),h=A({},e.extraUploadData),Ul(x,h),b=void 0,o?[4,Xl(d,p,m,v,r||{})]:[3,2])):(c(Vl(e)),[2]);case 1:return b=w.sent(),[3,4];case 2:return[4,Zl(d,p,m,x,r||{})];case 3:b=w.sent(),w.label=4;case 4:return b.success?c(ql(e,b)):c(it(e,b)),[3,6];case 5:return w.sent(),c(it(e,Hl)),[3,6];case 6:return[2]}})})})]})})},Gl=function(e){return A(A({},e),{uploadMessage:"Unexpected error",uploadStatus:"error",serverResponse:{success:!1,message:"Error on upload: unexpected error ",payload:{}}})},lt=function(e){return e?e.map(function(n){return A(A({},n),{xhr:new XMLHttpRequest})}):[]},Kl=function(e){return e.uploadStatus==="preparing"?(e.uploadStatus="uploading",A(A({},e),{uploadStatus:"uploading"})):e},oa=function(e){return e===void 0&&(e=1500),new Promise(function(n,a){setTimeout(function(){n(!0)},e)})},Re=function(e){return e.filter(function(n){var a;return!(!((a=n.extraData)===null||a===void 0)&&a.deleted)}).map(function(n){return n.uploadStatus==="aborted"&&!n.uploadMessage&&(n.uploadMessage="Upload aborted by user"),Nn.toExtFile(n)})},Jl=function(e,n){var a=e.uploadStatus,t=n.uploadStatus;a==="preparing"&&["aborted",void 0].includes(t)?(e.uploadStatus=void 0,e.uploadMessage=n.uploadMessage):a==="uploading"&&["aborted",void 0].includes(t)&&(e.uploadStatus="aborted",e.uploadMessage=n.uploadMessage)},ot={indianred:"#CD5C5C",lightcoral:"#F08080",salmon:"#FA8072",darksalmon:"#E9967A",lightsalmon:"#FFA07A",crimson:"#DC143C",red:"#FF0000",firebrick:"#B22222",darkred:"#8B0000",pink:"#FFC0CB",lightpink:"#FFB6C1",hotpink:"#FF69B4",deeppink:"#FF1493",mediumvioletred:"#C71585",palevioletred:"#DB7093",coral:"#FF7F50",tomato:"#FF6347",orangered:"#FF4500",darkorange:"#FF8C00",orange:"#FFA500",gold:"#FFD700",yellow:"#FFFF00",lightyellow:"#FFFFE0",lemonchiffon:"#FFFACD",lightgoldenrodyellow:"#FAFAD2",papayawhip:"#FFEFD5",moccasin:"#FFE4B5",peachpuff:"#FFDAB9",palegoldenrod:"#EEE8AA",khaki:"#F0E68C",darkkhaki:"#BDB76B",lavender:"#E6E6FA",thistle:"#D8BFD8",plum:"#DDA0DD",violet:"#EE82EE",orchid:"#DA70D6",fuchsia:"#FF00FF",magenta:"#FF00FF",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",rebeccapurple:"#663399",blueviolet:"#8A2BE2",darkviolet:"#9400D3",darkorchid:"#9932CC",darkmagenta:"#8B008B",purple:"#800080",indigo:"#4B0082",slateblue:"#6A5ACD",darkslateblue:"#483D8B",mediumslateblue:"#7B68EE",greenyellow:"#ADFF2F",chartreuse:"#7FFF00",lawngreen:"#7CFC00",lime:"#00FF00",limegreen:"#32CD32",palegreen:"#98FB98",lightgreen:"#90EE90",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",mediumseagreen:"#3CB371",seagreen:"#2E8B57",forestgreen:"#228B22",green:"#008000",darkgreen:"#006400",yellowgreen:"#9ACD32",olivedrab:"#6B8E23",olive:"#808000",darkolivegreen:"#556B2F",mediumaquamarine:"#66CDAA",darkseagreen:"#8FBC8B",lightseagreen:"#20B2AA",darkcyan:"#008B8B",teal:"#008080",aqua:"#00FFFF",cyan:"#00FFFF",lightcyan:"#E0FFFF",paleturquoise:"#AFEEEE",aquamarine:"#7FFFD4",turquoise:"#40E0D0",mediumturquoise:"#48D1CC",darkturquoise:"#00CED1",cadetblue:"#5F9EA0",steelblue:"#4682B4",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",lightblue:"#ADD8E6",skyblue:"#87CEEB",lightskyblue:"#87CEFA",deepskyblue:"#00BFFF",dodgerblue:"#1E90FF",cornflowerblue:"#6495ED",royalblue:"#4169E1",blue:"#0000FF",mediumblue:"#0000CD",darkblue:"#00008B",navy:"#000080",midnightblue:"#191970",cornsilk:"#FFF8DC",blanchedalmond:"#FFEBCD",bisque:"#FFE4C4",navajowhite:"#FFDEAD",wheat:"#F5DEB3",burlywood:"#DEB887",tan:"#D2B48C",rosybrown:"#BC8F8F",sandybrown:"#F4A460",goldenrod:"#DAA520",darkgoldenrod:"#B8860B",peru:"#CD853F",chocolate:"#D2691E",saddlebrown:"#8B4513",sienna:"#A0522D",brown:"#A52A2A",maroon:"#800000",white:"#FFFFFF",snow:"#FFFAFA",honeydew:"#F0FFF0",mintcream:"#F5FFFA",azure:"#F0FFFF",aliceblue:"#F0F8FF",ghostwhite:"#F8F8FF",whitesmoke:"#F5F5F5",seashell:"#FFF5EE",beige:"#F5F5DC",oldlace:"#FDF5E6",floralwhite:"#FFFAF0",ivory:"#FFFFF0",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lavenderblush:"#FFF0F5",mistyrose:"#FFE4E1",gainsboro:"#DCDCDC",lightgray:"#D3D3D3",silver:"#C0C0C0",darkgray:"#A9A9A9",gray:"#808080",dimgray:"#696969",lightslategray:"#778899",slategray:"#708090",darkslategray:"#2F4F4F",black:"#000000"},Yl=function(e,n){n===void 0&&(n=25);var a="",t=(100-n)/100,r=0,l=0,o=0;if(Lt(Ln(e)))r=de(e.charAt(1))*16+de(e.charAt(2)),l=de(e.charAt(3))*16+de(e.charAt(4)),o=de(e.charAt(5))*16+de(e.charAt(6)),a="rgb(".concat(r*t,", ").concat(l*t,",").concat(o*t,")");else if(e.includes("rgba")){var s=e.replace("rgba(",""),c=s.split(",");a="rgb(".concat(parseInt(c[0],10)*t,", ").concat(parseInt(c[1],10)*t,",").concat(parseInt(c[2],10)*t,")")}else if(e.includes("rgb")){var s=e.replace("rgb(",""),c=s.split(",");a="rgb(".concat(parseInt(c[0],10)*t,", ").concat(parseInt(c[1],10)*t,",").concat(parseInt(c[2],10)*t,")")}return a},Rt=function(e,n,a){n===void 0&&(n=0);var t=a||"rgba(255, 255, 255, 0.6)";if(!e)return t;var r=e.toUpperCase();if(r.includes("RGBA"))return r;if(r.includes("RGB"))return r.replace("RGB","rgba").replace(")",", ".concat(n,")"));if(!Lt(Ln(r)))return t;var l="",o=0,s=0,c=0;return o=de(r.charAt(1))*16+de(r.charAt(2)),s=de(r.charAt(3))*16+de(r.charAt(4)),c=de(r.charAt(5))*16+de(r.charAt(6)),l="rgba(".concat(o,", ").concat(s,",").concat(c," , ").concat(n,")"),l},Lt=function(e){if(e.charAt(0)!=="#"||e.length!==7)return!1;for(var n=1;n<e.length;n++)if(!ma.includes(e.charAt(n)))return!1;return!0};function Ln(e){return e?ot[e.toLocaleLowerCase()]!==void 0?ot[e.toLocaleLowerCase()]:e:""}var ma=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],Ql=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],de=function(e){return ma.includes(e)?Ql[ma.indexOf(e)]:0},Bt=function(e){return e!==void 0&&e!==""?e:eo},Y=function(e,n){return n===void 0&&(n=1),Rt(Bt(Ln(e)),n)},eo="#646c7f";function At(e,n){return e?k(k({},n),e):n}var no=function(e){var n=e.onChange,a=e.inputRef,t=e.accept,r=e.multiple;return i.createElement(i.Fragment,null,i.createElement("input",{"aria-label":"fui-hidden-input",style:{display:"none"},ref:a,onChange:n,type:"file",accept:t,multiple:r}))},ao={clickable:!0,behaviour:"add",disabled:!1,dropOnLayer:!0,uploadConfig:{},actionButtons:{},header:!0,footer:!0,value:[]},Oe="8px";P(`.files-ui-dropzone-children-container {
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 5px 0;
}`);var to=function(e){var n=e.children,a=e.label,t=e.localization,r=Array.isArray(n)&&n.length===0,l=cn(t);return n&&!r?i.createElement("div",{className:"files-ui-dropzone-children-container"},n):i.createElement("div",{className:"files-ui-dropzone-children-container"},i.createElement("label",null," ",a||l.defaultLabel))},ya=function(e){e.stopPropagation(),e.preventDefault()},pa=function(e){e.dataTransfer.dropEffect="link",ya(e)};function xe(e){e.preventDefault(),e.stopPropagation()}var ro=function(e){e&&e.click()},It=function(e){return Y(e,.4)};function io(e,n,a){if(!(!n||!e)){e.style.display="block";var t=document.createElement("span");t.id="filesui-ripple",t.className="ripple";var r=Math.max(n.clientWidth,n.clientHeight);t.style.width=t.style.height="".concat(r,"px"),t.style.backgroundColor=It(a),n.appendChild(t),setTimeout(function(){e.style.display="none",t==null||t.remove()},501)}}function lo(e,n,a){var t=e.currentTarget,r=document.createElement("span"),l=Math.max(t.clientWidth,t.clientHeight);r.style.width=r.style.height="".concat(l,"px"),r.classList.add("ripple"),n!=="contained"?r.style.backgroundColor=It(a):r.style.backgroundColor=Rt("#ffffff",.4),t.appendChild(r),setTimeout(function(){r==null||r.remove()},501)}P(`.filesui-disabled-root {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.38);
}`);var oo=function(e){var n=e.open,a=e.className,t=e.style;function r(c){xe(c)}var l=function(c){pa(c)},o=function(c){return Xe(void 0,void 0,void 0,function(){return Ze(this,function(u){return ya(c),[2]})})},s=be("filesui-disabled-root",a);return n?i.createElement("div",{style:t,className:s,onDrop:o,onDragOver:l,onClick:r}):i.createElement(i.Fragment,null)};P(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
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
}`);P(`.filesui-base-ripple-absolute {
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
}`);var ne=function(e){if(typeof e=="number")return e;switch(e){case"micro":return 8;case"small":return 15;case"semi-medium":return 18;case"medium":return 25;case"large":return 28;case"extra-large":return 32;default:return 24}},Ot=function(e){var n=e.size,a=e.color,t=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=ne(n),c=l||{};return i.createElement("svg",{style:r?k({},k({cursor:"pointer"},c)):c,onClick:function(u){xe(u),r==null||r(u)},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",className:o||""},i.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",opacity:".87"}),i.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",fill:t||"none",opacity:".5"}),i.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"}))},Ut=function(e){var n=e.size,a=e.color,t=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=ne(n),c=l||{};return I.createElement("svg",{className:o||"",style:r?k({},k({cursor:"pointer"},c)):c,onClick:function(){return r==null?void 0:r()},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000"},I.createElement("path",{d:"M0 0h24v24H0z",fill:t||"none"}),I.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))},so=function(e){var n=e.size,a=e.color,t=e.onClick,r=e.style,l=e.className,o=ne(n),s=r||{};return I.createElement("svg",{className:l||"",style:t?k({},k({cursor:"pointer"},s)):s,onClick:function(){return t==null?void 0:t()},xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:o?"".concat(o,"px"):"24px",viewBox:"0 0 24 24",width:o?"".concat(o,"px"):"24px",fill:a||"#000000"},I.createElement("g",null,I.createElement("rect",{fill:"none",height:o||"24",width:o||"24"})),I.createElement("g",null,I.createElement("g",null,I.createElement("path",{d:"M16,11h-1V3c0-1.1-0.9-2-2-2h-2C9.9,1,9,1.9,9,3v8H8c-2.76,0-5,2.24-5,5v7h18v-7C21,13.24,18.76,11,16,11z M11,3h2v8h-2V3 z M19,21h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H9v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H5 v-5c0-1.65,1.35-3,3-3h8c1.65,0,3,1.35,3,3V21z"}))))},un=function(e){var n=e.size,a=e.color,t=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=ne(n),c=l||{};return i.createElement("svg",{className:o||"",style:r?k({cursor:"pointer"},c):c,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){xe(u),r==null||r(u)}},i.createElement("path",{d:"M0 0h24v24H0V0z",fill:t||"none"}),i.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}))},co=function(e){var n=e.size,a=e.color,t=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=ne(n),c=l||{};return i.createElement("svg",{className:o||"",style:r?k({cursor:"pointer"},c):c,enableBackground:"new 0 0 24 24",xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){xe(u),r==null||r(u)}},i.createElement("path",{d:"M0 0h24v24H0V0z",fill:t||"none"}),i.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-9-3.82l-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z"}))},_t=function(e){var n=e.size,a=e.color,t=e.onClick,r=e.style,l=e.className,o=ne(n),s=r||{};return I.createElement("svg",{className:l||"",style:t?k({},k({cursor:"pointer"},s)):s,onClick:function(){return t==null?void 0:t()},xmlns:"http://www.w3.org/2000/svg",height:o?"".concat(o,"px"):"24px",viewBox:"0 0 24 24",width:o?"".concat(o,"px"):"24px",fill:a||"#000000"},I.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),I.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z",opacity:".4"}),I.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"}))},uo=function(e){var n=e.size,a=e.color,t=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=ne(n),c=l||{};return i.createElement("svg",{className:o||"",style:r?k({cursor:"pointer"},c):c,enableBackground:"new 0 0 24 24",xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){xe(u),r==null||r(u)}},i.createElement("g",null,i.createElement("rect",{fill:t||"none",height:s,width:s})),i.createElement("g",null,i.createElement("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"})))},fo=function(e){var n=e.size,a=e.color,t=e.onClick,r=e.style,l=e.className,o=ne(n)-2,s=r||{};return i.createElement("svg",{className:l||"",style:t?k({cursor:"pointer"},s):s,"aria-hidden":"true","aria-label":"info",fill:a||"#000000",role:"img",transform:"",version:"1.1",viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",height:"".concat(o,"px"),width:"".concat(o,"px"),onClick:function(c){xe(c),t==null||t(c)}},i.createElement("path",{d:"M22.378 0c2.412 0 3.618 1.642 3.618 3.523 0 2.349-2.095 4.522-4.822 4.522-2.284 0-3.616-1.35-3.553-3.582 0-1.877 1.586-4.462 4.757-4.462zM14.956 36c-1.904 0-3.299-1.174-1.967-6.343l2.185-9.166c0.38-1.465 0.443-2.054 0-2.054-0.571 0-3.040 1.012-4.504 2.011l-0.95-1.584c4.63-3.935 9.956-6.241 12.242-6.241 1.903 0 2.219 2.291 1.269 5.814l-2.504 9.634c-0.443 1.701-0.254 2.288 0.191 2.288 0.571 0 2.443-0.706 4.282-2.173l1.080 1.465c-4.504 4.585-9.423 6.349-11.324 6.349z"}))},mo=function(e){var n=e.size,a=e.color,t=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=ne(n),c=l||{};return I.createElement("svg",{className:o||"",style:r?k({cursor:"pointer"},c):c,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){xe(u),r==null||r(u)}},I.createElement("path",{d:"M0 0h24v24H0V0z",opacity:".9",fill:t||"none"}),I.createElement("path",{d:"M8 5v14l11-7L8 5z"}))},po=function(e){var n=e.size,a=e.color,t=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=ne(n),c=l||{};return I.createElement("svg",{style:r?k({},k({cursor:"pointer"},c)):c,onClick:function(){return r==null?void 0:r()},xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",className:o||""},I.createElement("g",null,I.createElement("rect",{fill:t||"none",height:n||"24",width:n||"24"})),I.createElement("g",null,I.createElement("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z"})))},go=function(e){var n=e.size,a=e.color,t=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=ne(n),c=l||{};return I.createElement("svg",{className:o||"",style:r?k({},k({cursor:"pointer"},c)):c,onClick:function(){return r==null?void 0:r()},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000"},I.createElement("rect",{fill:t||"none",height:s,width:s}),I.createElement("path",{d:"M18,15.17V15h2v2.17L18,15.17z M15.41,12.59L17,11l-1.41-1.41L14,11.17L15.41,12.59z M13,10.17V4h-2v4.17L13,10.17z M21.19,21.19l-1.78-1.78L2.81,2.81L1.39,4.22l6.19,6.19L7,11l5,5l0.59-0.59L15.17,18H6v-3H4v3c0,1.1,0.9,2,2,2h11.17l2.61,2.61 L21.19,21.19z"}))};P(`@keyframes filesui-rotate-spin {
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
}`);var vo=function(e){var n=e.size,a=e.color,t=e.onClick,r=e.style,l=e.className,o=e.spin,s=ne(n),c=r||{},u=l||"";return u+=o?"filesui-rotate":"",I.createElement("svg",{className:u,style:t?k({},k({cursor:"pointer"},c)):c,onClick:function(){return t==null?void 0:t()},xmlns:"http://www.w3.org/2000/svg",height:s?"".concat(s,"px"):"24px",viewBox:"0 0 24 24",width:s?"".concat(s,"px"):"24px",fill:a||"#000000"},I.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),I.createElement("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}))},ho=function(e){var n=e.size,a=e.color,t=e.colorFill,r=e.onClick,l=e.style,o=e.className,s=ne(n),c=l||{};return I.createElement("svg",{className:o||"",style:r?k({cursor:"pointer"},c):c,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){xe(u),r==null||r(u)}},I.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),I.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z",fill:t||"none"}),I.createElement("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}))},bo=function(e){var n=e.maxFileSize,a=e.numberOfValidFiles,t=e.onReset,r=e.onClean,l=e.maxFiles,o=e.onUploadStart,s=e.isUploading,c=e.urlPresent,u=e.localization,d=e.borderRadius,m=e.style,p=e.className,v=p===void 0?"":p,x=e.resetStyles,h=e.color,b=e.firstClassName,w=b===void 0?"":b,F=cn(u).header,j=function(){r==null||r()},E=function(){o==null||o()},C=function(){var z=[];o&&c&&a&&(s?z.push(i.createElement(vo,{spin:!0,color:h})):z.push(i.createElement(i.Fragment,null,i.createElement(i.Fragment,null,F.uploadFilesMessage),i.createElement(po,{color:h,onClick:E}))),z.push(i.createElement(i.Fragment,null,","," ")));var L=F.maxSizeMessage,H=Ee(n);H&&(z.push(L(H)),z.push(i.createElement(i.Fragment,null,","," ")));var U=F.validFilesMessage;return l&&(z.push(U(a,l)),z.push(i.createElement(i.Fragment,null,","," "))),r&&z.push(i.createElement(so,{color:h,onClick:j,size:"semi-medium"})),t&&z.push(i.createElement(Ot,{color:h,onClick:function(){return t==null?void 0:t()}})),z};function S(z){z.stopPropagation()}var M=x?v:be("files-ui-header "+w,v),R=x?m:k(k({},m),{borderTopLeftRadius:d,borderTopRightRadius:d});return i.createElement("div",{className:M,onClick:S,style:R},C().map(function(z,L){return i.createElement("span",{key:L,style:{display:"flex"}},z)}))},xo=function(e){var n=e.accept,a=e.message,t=e.localization,r=e.borderRadius,l=e.style,o=e.className,s=o===void 0?"":o,c=e.resetStyles,u=c===void 0?!1:c,d=e.allowedTypesLabel,m=d===void 0?!0:d,p=e.customMessage,v=p===void 0?void 0:p,x=e.firstClassName,h=x===void 0?"":x,b=cn(t).footer,w=b.acceptCustom;function F(C){xe(C)}var j=u?s:be("files-ui-footer ".concat(h),s),E=u?l:k(k({},l),{borderBotomLeftRadius:r,borderBotomRightRadius:r});return i.createElement("div",{className:j,onClick:F,style:E},v?i.createElement(i.Fragment,null,v):i.createElement(i.Fragment,null,a||(n?w(n):m?b.acceptAll:void 0)))},he;(function(e){function n(o){var s="";if(typeof window>"u"||typeof o>"u"||o===null)return"";if(document.getElementById(o.id))return o.id;s=o.id;var c=document.createElement("style");c.id=s,c.setAttribute("type","text/css");var u=ct(o.sheetRules||[])+o.raw||"";c.textContent=u;var d=document.head.appendChild(c);return d?s:""}e.insertStyleSheet=n;function a(o,s){var c="";if(typeof window>"u"||typeof o>"u"||o===null||s===null)return"";var u=document.getElementById(o);return u?(u.textContent=ct(s),c):""}e.editStyleSheet=a;function t(o){var s="";if(!o)return"";var c=document.getElementById(o);return c&&(document.head.removeChild(c),s=o),s}e.removeStyleSheet=t;function r(o){if(typeof o>"u"||o===null)return!1;var s=document.getElementById(o);return!!s}e.existStyleSheet=r;function l(o){return typeof o>"u"||o===null?null:o}e.makeStyleSheet=l})(he||(he={}));function yo(e){return e?!/[a-z]/.test(e)&&/[A-Z]/.test(e):!1}function st(e){for(var n="",a=" ",t=!1,r=0;r<e.length;r++){var l=e[r];if(yo(l)){a=l,t=!0;break}}if(t){var o=e.split(a);n="".concat(o[0],"-").concat(a.toLowerCase()).concat(o[1])}else n=e;return n}function wo(e){return e?e.includes(":"):!1}function Eo(e){var n="",a=e.trim().split(" ");if(a.length>1){for(var t=0;t<a.length;t++)n+=".".concat(a[t]);n+=`{
`}else n+=".".concat(e,`{
`);return n}function ct(e){if(typeof e>"u"||e===null)return"";for(var n="",a=[],t=0;t<e.length;t++){var r=e[t],l="";l+=Eo(r.className);for(var o=Object.keys(r.rules),s=0;s<o.length;s++){var c=o[s],u=st(c);if(wo(u)){var d=r.className+u;a.push({className:d,rules:r.rules[u]})}else{var m=r.rules[c];l+="	".concat(u," : ").concat(m,`;
`)}}l+=`}
`,n+=l}for(var p=0;p<a.length;p++){var l="",r=a[p],o=Object.keys(r.rules);l+=".".concat(r.className,`{
`);for(var s=0;s<o.length;s++){var c=o[s],u=st(c),m=r.rules[c];l+="	".concat(u," : ").concat(m,`;
`)}l+=`}
`,n+=l}return n}var ko=function(){function e(){}return e.getNextId=function(){return e.nextButtonClassNameNumber++,e.nextButtonClassNameNumber},e.nextButtonClassNameNumber=0,e.makeDynamicStyle=function(n,a,t,r,l,o){var s={id:"material-button-styles-".concat(n),sheetRules:[{className:"material-button.".concat(a,"-").concat(n),rules:{}},{className:"material-button-root.".concat(a,"-").concat(n),rules:{}}]},c=s.sheetRules;if(!t)switch(a){case"contained":c[0].rules={color:Bt(Ln(l)),backgroundColor:Y(r),textDecoration:o},c[1].rules={":hover":{backgroundColor:Yl(Y(r))}};break;case"outlined":c[0].rules={border:"1px solid ".concat(Y(r,.5)),color:Y(r),backgroundColor:"transparent",textDecoration:o},c[1].rules={":hover":{border:"1px solid ".concat(Y(r,1)),backgroundColor:Y(r,.085)}};break;case"text":c[0].rules={color:Y(r),backgroundColor:"transparent",textDecoration:o},c[1].rules={":hover":{backgroundColor:Y(r,.085)}};break}return s.sheetRules=c,s},e}(),Fo=function(e,n,a,t,r,l,o,s){var c="material-button-root material-button",u=i.useState(""),d=u[0],m=u[1],p=i.useState(!1),v=p[0],x=p[1],h=i.useState(void 0),b=h[0],w=h[1],F=function(E,C,S,M,R,z){var L=c,H=ko.makeDynamicStyle(E,C,S,M,z,R),U="";if(v?he.editStyleSheet(d,H.sheetRules||[]):(U=he.insertStyleSheet(H),m(U),U!==""&&x(!0)),S?L+=" disabled":L+=" ".concat(C," ").concat(C,"-").concat(E),l&&l.length>0&&(L+=" ".concat(l)),R){var V=R&&["uppercase","capitalize","lowercase","none"].includes(R==null?void 0:R.toLowerCase())?R.toLowerCase():"uppercase";L+=" ".concat(V)}w(L)};i.useEffect(function(){s||F(o,e,n,a,r,t)},[e,n,a,r,t,l,o,s]);var j=function(E,C){E&&(he.removeStyleSheet(C),x(!1),m(""))};return i.useEffect(function(){return function(){return j(v,d)}},[v,d]),b};P(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
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
 */`);var wa=I.createContext({}),Co=function(e){var n=e.disabled,a=e.href,t=e.textTransform,r=e.variant,l=r===void 0?"contained":r,o=e.color,s=o===void 0?"#1976d2":o,c=e.textColor,u=c===void 0?"white":c,d=e.children,m=e.className,p=e.style,v=e.onClick,x=e.resetStyles,h=e.disableRipple,b=e.darkMode,w=e.id,F=Rn(e,["disabled","href","textTransform","variant","color","textColor","children","className","style","onClick","resetStyles","disableRipple","darkMode","id"]),j=i.useContext(wa).darkMode,E=b!==void 0?b:j,C=i.useMemo(function(){return w||xa.getNextId()+""},[w]),S=Fo(l,n,s,u,t,m,C.replace(":","").replace(":",""),x),M=S&&E?be(S,"darkmode"):S;function R(z){z.preventDefault(),h||lo(z,l,s),v==null||v(z)}return M!==void 0||x?i.createElement(a?"a":"button",k({className:x&&m?m:M,"data-testid":a?"dui-anchor":"dui-button",onClick:R,href:a,style:p,children:i.createElement("span",{className:"material-button-label"},d),disabled:n},F)):i.createElement(i.Fragment,null,"loading styes")};P(`.files-ui-buttons-container {
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
}`);var ut=function(e){var n=e.cleanButton,a=e.abortButton,t=e.className,r=e.style,l=e.deleteButton,o=e.uploadButton,s=e.onAbort,c=e.onClean,u=e.onDelete,d=e.onUpload,m=e.top;e.disabled;var p=[n?k(k({},n),{label:n.label||"Clean",onClick:n.onClick||c}):void 0,l?k(k({},l),{label:l.label||"Delete",onClick:l.onClick||u}):void 0,o?k(k({},o),{label:o.label||"Upload",onClick:o.onClick||d}):void 0,a?k(k({},a),{label:a.label||"Abort",onClick:a.onClick||s}):void 0].filter(function(h){return h!==void 0}),v="".concat(m?" top":" bottom"),x=be("files-ui-buttons-container"+v,t);return i.createElement("div",{className:x,style:r},p.map(function(h,b){var w=h.disabled,F=h.children,j=h.label,E=h.resetStyles,C=h.className,S=h.style,M=h.onClick;return i.createElement(Co,{key:b,className:C,style:S,resetStyles:E,onClick:function(R){return M==null?void 0:M(R)},disabled:w},F||j)}))},So=function(e){var n=e.onDrop,a=e.onDragLeave,t=e.className,r=e.open,l=e.style;return i.createElement("div",{className:t,onDragLeave:a,onDrop:n,style:l||{display:r?void 0:"none"}})};function zo(e,n,a,t,r){var l=a===void 0&&t===void 0&&r===void 0?"default":e.replace(":","_").replace(":","_"),o="fui-dropzone-root fui-dropzone-border",s=i.useState(""),c=s[0],u=s[1],d=i.useState(!1),m=d[0],p=d[1],v=i.useState(void 0),x=v[0],h=v[1],b=i.useState(void 0),w=b[0],F=b[1],j=i.useState(void 0),E=j[0],C=j[1],S=i.useState(void 0),M=S[0],R=S[1],z=function(L,H,U,V){var $=o,G=No(l,H,U,V),_="";m?he.editStyleSheet(c,G.sheetRules||[]):(_=he.insertStyleSheet(G),u(_),_!==""&&p(!0)),$+=" files-ui-dropzone-extra-".concat(l),L&&($="".concat($," ").concat(L)),h($),F("files-ui-header-border-rd-".concat(l)),C("files-ui-footer-border-rd-top-bg-color-".concat(l)),R("files-ui-disabled-layer-color-".concat(l))};return i.useEffect(function(){z(n,a,t,r)},[n,a,t,r]),[x,w,E,M]}var No=function(e,n,a,t){var r={className:"files-ui-dropzone-extra-".concat(e),rules:{color:Y(n),border:"1px dashed ".concat(Y(n)),borderRadius:Oe,background:a,minHeight:typeof t=="number"?"".concat(t,"px"):t}},l={className:"files-ui-root-border-hide",rules:{borderColor:"transparent"}},o={className:"files-ui-header-border-rd-".concat(e),rules:{"border-top-left-radius":Oe,"border-top-right-radius":Oe}},s={className:"files-ui-footer-border-rd-top-bg-color-".concat(e),rules:{"border-bottom-left-radius":Oe,"border-bottom-right-radius":Oe,background:Y(n,.129),borderTop:"1px dotted ".concat(Y(n))}},c={className:"files-ui-disabled-layer-color-".concat(e),rules:{borderRadius:Oe,background:Y(n,.38)}},u=[r,l,o,s,c];return{id:"files-dropzone-ui-style-id-"+e,sheetRules:u}},jo=function(e,n,a,t,r,l,o,s,c){var u=i.useState([]),d=u[0],m=u[1],p=i.useState(0),v=p[0],x=p[1];return i.useEffect(function(){var h=da.getExtFileInstanceList(e);a?h&&h.forEach(function(b){var w=n.findIndex(function(j){return j.id===b.id});if(w===-1)b.extraData={deleted:!0};else{var F=n[w];Jl(b,F)}}):m(n)},[e,n]),i.useEffect(function(){if(!c){m(d.map(function(w){return k(k({},w),{valid:void 0})}));return}var h={maxFileSize:t,accept:r},b=fa(d,l?l-v:1/0,h,o,l,s);m(b)},[c,t,r,l,s]),i.useEffect(function(){x(c?d.filter(function(h){return h.valid}).length:d.length)},[d,c]),[d,v,m]},Mo=function(e,n){return{id:"files-ui-drop-layer-style-id-"+e,sheetRules:[{className:"dropzone-layer-".concat(e),rules:{backgroundColor:Y(n,.4),borderRadius:Oe,position:"absolute",left:0,top:0,width:"0%",height:"0%",zIndex:20,border:"0px dashed ".concat(Y(n))}},{className:"dropzone-layer-drag",rules:{width:"100%",height:"100%",borderWidth:"2px"}}]}},Do=function(e,n,a){var t=i.useState(""),r=t[0],l=t[1],o=i.useState(!1),s=o[0],c=o[1],u=i.useState(""),d=u[0],m=u[1],p=n===void 0?"default":e.replace(":","_").replace(":","_");return i.useEffect(function(){var v=function(x){var h="",b=Mo(p,x),w="";p==="default"&&!s?he.existStyleSheet("files-ui-drop-layer-style-id-"+p)?(c(!0),l("files-ui-drop-layer-style-id-"+p)):(w=he.insertStyleSheet(b),l(w),w!==""&&c(!0)):s?he.editStyleSheet(r,b.sheetRules||[]):(w=he.insertStyleSheet(b),l(w),w!==""&&c(!0)),h+="dropzone-layer-".concat(p),m(h)};a&&v(n)},[n,a]),d},Ro=function(e,n,a,t,r,l,o,s,c){var u=i.useState(!1),d=u[0],m=u[1],p=i.useState(!1),v=p[0],x=p[1],h=i.useState(""),b=h[0],w=h[1],F=i.useState(void 0),j=F[0],E=F[1],C=i.useState(void 0),S=C[0],M=C[1],R=i.useState(!1),z=R[0],L=R[1],H=function(U,V,$,G,_,ae,K,Z,me,pe){return Xe(void 0,void 0,void 0,function(){var re,Q,le;return Ze(this,function(q){switch(q.label){case 0:return!U&&!V&&!$?[2]:(re=(U?Sl(U,Z):zl(V,$,Z)).url,w(re),ae&&K?(x(!0),E(ae),M(K),L(!0),[2]):[3,1]);case 1:return ae?(m(!0),E(ae),L(!0),[2]):[3,2];case 2:return K?(x(!0),M(K),L(!0),[3,5]):[3,3];case 3:return Q=Lo(U,$),m(Q[0]==="image"),["mp4","ogg","webm"].includes(Q[1])&&x(Q[0]==="video"),_&&(G||typeof G>"u"||G===null)&&Q[0]==="image"?(le=void 0,U?[4,Ct(U)]:[3,5]):[3,5];case 4:le=q.sent(),le&&E(le),q.label=5;case 5:return L(!0),[2]}})})};return i.useEffect(function(){return H(e,n,a,t,r||!1,l,o,s),function(){E(void 0),m(!1),x(!1),L(!1)}},[e,n,a,t,r,l,o,s]),[z,d,v,b,j,S]},Lo=function(e,n){if(e)if(e.type){var a=e.type.split("/");return[a[0],a[1]]}else return["octet","octet"];else{var a=n==null?void 0:n.split("/");return a&&a.length>1?[a[0],a[1]]:["octet","octet"]}},Bo=function(e){var n=i.useState(!1),a=n[0],t=n[1],r=i.useState(e),l=r[0],o=r[1];return i.useEffect(function(){if(o(e),["uploading","preparing"].includes(l||"")&&["success","error","aborted"].includes(e||"")){setTimeout(function(){t(!1)},3500);return}else t(e==="preparing"||e==="uploading")},[e]),a},Ao=function(e,n){var a=i.useState(void 0),t=a[0],r=a[1];return e!==void 0?t!==e&&r(e):n!=null&&n.upload.onprogress===null&&(n.upload.onprogress=function(l){r(l.loaded/l.total*100)},r(0)),t},Io=function(e,n,a){return Nn.someValidUrl(a||[])||n!=null||e!=null&&e.length>0},Oo=function(e){var n=At(e,ao),a=n.onChange,t=n.value,r=t===void 0?[]:t,l=n.accept,o=n.maxFileSize,s=n.maxFiles,c=n.validator,u=n.cleanFiles,d=n.onClean,m=n.autoClean,p=n.uploadConfig,v=n.fakeUpload,x=n.groupUpload,h=n.onUploadStart,b=n.onUploadFinish,w=n.background,F=n.color,j=n.minHeight,E=n.style,C=n.className,S=n.label,M=n.localization,R=n.disableRipple,z=n.onDragEnter,L=n.onDragLeave,H=n.actionButtons,U=n.dropOnLayer,V=n.header,$=n.footer,G=n.headerConfig,_=G===void 0?{}:G,ae=n.footerConfig,K=ae===void 0?{}:ae,Z=n.disabled,me=n.clickable,pe=n.behaviour,re=n.children,Q=Rn(n,["onChange","value","accept","maxFileSize","maxFiles","validator","cleanFiles","onClean","autoClean","uploadConfig","fakeUpload","groupUpload","onUploadStart","onUploadFinish","background","color","minHeight","style","className","label","localization","disableRipple","onDragEnter","onDragLeave","actionButtons","dropOnLayer","header","footer","headerConfig","footerConfig","disabled","clickable","behaviour","children"]),le=i.useContext(wa).localization,q=M!==void 0?M:le,X=p,je=X.url,ke=X.method,Be=X.headers,Ke=X.uploadLabel,Fe=X.cleanOnUpload,Ce=Fe===void 0?!0:Fe,Se=X.preparingTime,g=Se===void 0?1500:Se,y=X.autoUpload,D=y===void 0?!1:y,B=X.urlFromExtFile,ie=X.asBlob,te=ie===void 0?!1:ie,oe=H,ge=oe.position,_e=oe.abortButton,Je=oe.deleteButton,Te=oe.uploadButton,Ae=oe.cleanButton,Ye=oe.style,Qe=oe.className,dn=E==null?void 0:E.borderRadius,en=_.cleanFiles,Bn=en===void 0?!0:en,fn=_.deleteFiles,An=fn===void 0?!0:fn,mn=_.maxFileSize,pn=mn===void 0?!0:mn,Ie=_.uploadFiles,In=Ie===void 0?!0:Ie,gn=_.uploadingIcon,On=gn===void 0?!0:gn,vn=_.validFilesCount,Un=vn===void 0?!0:vn,hn=_.customHeader,ce=_.className,Ea=_.resetStyles,Vt=Ea===void 0?!1:Ea,$t=_.style,ka=K.customFooter,Fa=K.noMissingFilesLabel,qt=Fa===void 0?!0:Fa,Ca=K.uploadProgressMessage,Sa=Ca===void 0?!0:Ca,za=K.uploadResultMessage,Xt=za===void 0?!0:za,nn=cn(q),Na=i.useRef(null),ja=i.useRef(null),_n=i.useRef(null),Ma=i.useState(!1),Tn=Ma[0],Pn=Ma[1],Da=i.useState(!1),ee=Da[0],an=Da[1],Ra=i.useState(""),Zt=Ra[0],tn=Ra[1],rn=i.useMemo(function(){return xa.getNextId()+""},[]),Me=Nl(l,o,s,c),Hn=jo(rn,r||[],ee,o,l,s,c,q,Me),De=Hn[0],Vn=Hn[1],ln=Hn[2],bn=Io(je,B,De),xn=function(O){return Xe(void 0,void 0,void 0,function(){var N,T,we,Pe,Ta,Wn,Pa,Gn,Ha,Va,Kn,wn,ve,He,on,En,$a,Jn;return Ze(this,function(J){switch(J.label){case 0:return an(!0),ee||O.length===0||!bn?(an(!1),[2]):O.length===0?(tn(nn.noFilesMessage),setTimeout(function(){an(!1)},1500),[2]):(N=[],T=O.length,we=O.filter(function(se){return Ll(se,Me)}).length,Pe=0,Ta=0,Wn=nn.uploadingMessage,we>0?(Sa&&tn(Wn("".concat(we,"/").concat(T))),h==null||h(O),N=da.setFileListMapPreparing(rn,O,Me,Ce)||[],Pa=Le([],N,!0).map(function(se){return se.toExtFile()}),ye(Pa,!0),[4,jl(g)]):(setTimeout(function(){qt&&tn(nn.noFilesMessage),an(!1)},1500),[2]));case 1:if(J.sent(),Gn=[],!x)return[3,6];Ha=function(se,er,qa){N.forEach(function(Qn){return Qn.uploadStatus="uploading"}),ye(Re(N),!0);for(var Xa=new FormData,Yn=0;Yn<qa.length;Yn++)Xa.append("files",qa[Yn].file);return new Promise(function(Qn,Za){var ue=new XMLHttpRequest;ue.upload.onprogress=function(kn){N.forEach(function(nr){nr.progress=kn.loaded/kn.total*100}),ye(Re(N),!0)},ue.responseType="json",ue.onload=function(){ue.status>=200&&ue.status<300?(console.log(ue.response),console.log(typeof ue.response),Qn(ue.response)):Za(ue.response)},ue.onerror=function(kn){Za(kn)},ue.open(se,er),ue.send(Xa)})},J.label=2;case 2:return J.trys.push([2,4,,5]),[4,Ha("POST",je,N)];case 3:return Va=J.sent(),N.forEach(function(se){return se.uploadStatus="success"}),N.forEach(function(se){return se.uploadMessage=Va.message}),[3,5];case 4:return Kn=J.sent(),N.forEach(function(se){return se.uploadStatus="error"}),N.forEach(function(se){return se.uploadMessage=Kn.message}),console.log(Kn),[3,5];case 5:return ye(Re(N),!0),[3,21];case 6:wn=0,J.label=7;case 7:return wn<N.length?(ve=N[wn],ve.uploadStatus==="preparing"&&!(!((Jn=ve.extraData)===null||Jn===void 0)&&Jn.deleted)?[4,oa()]:[3,19]):[3,21];case 8:return J.sent(),Kl(ve),Sa&&tn(Wn("".concat(++Ta,"/").concat(we))),ye(Re(N),!0),He=void 0,v?[4,Ml(ve,nn)]:[3,13];case 9:He=J.sent(),on=0,J.label=10;case 10:return on<100?(on+=Dl(21,35),ve.progress=on>100?100:on,[4,oa(1e3)]):[3,12];case 11:return J.sent(),ye(Re(N),!0),[3,10];case 12:return[3,16];case 13:return J.trys.push([13,15,,16]),[4,Wl(ve,je,B,ke,Be,Ke,te)];case 14:return He=J.sent(),[3,16];case 15:return J.sent(),He=Gl(ve.toExtFile()),[3,16];case 16:return En=He,ve.uploadStatus=En.uploadStatus,ve.uploadMessage=En.uploadMessage,ve.uploadStatus==="aborted"?[3,18]:[4,oa()];case 17:J.sent(),J.label=18;case 18:return ye(Re(N),!0),En.uploadStatus==="error"&&Pe++,Gn.push(He),[3,20];case 19:ye(Re(N),!0),J.label=20;case 20:return wn++,[3,7];case 21:return ln(Re(N)),b==null||b(Gn),$a=nn.uploadFinished,Xt&&tn($a(we-Pe,Pe)),setTimeout(function(){an(!1)},2e3),[2]}})})},La=function(){var O=da.getExtFileInstanceList(rn);O&&O.forEach(function(N){(N.uploadStatus==="uploading"||N.uploadStatus==="preparing")&&(N.xhr!==null&&N.xhr!==void 0&&N.xhr.abort(),N.uploadStatus="aborted",N.uploadMessage="Upload was aborted by user")})},yn=zo(rn,C,F,w,j),$n=yn[0],Wt=yn[1],Gt=yn[2],Kt=yn[3],Ba=Do(rn,F,!z&&!L);i.useEffect(function(){var O={maxFileSize:o,accept:l},N=fa(De,s?s-Vn:1/0,O,c,s,q);ln(N)},[o,l,s,q]);var ye=function(O,N){var T=Le(pe==="add"&&!N?Le([],De,!0):[],O,!0);a?a(T):ln(T),D&&!N&&xn(T)},Jt=function(O){var N=O.target.files,T=rt(N);Me&&(T=Aa(T),m&&(T=T.filter(function(we){return we.valid}))),bn&&(T=lt(T)),Rl(_n.current),ye(T)},Aa=function(O){var N={maxFileSize:o,accept:l},T=Vn;pe==="replace"&&(T=0);var we=fa(O,s?s-T:1/0,N,c,s,q);return we};function Yt(){!me||Z||ee||(Oa(),ro(_n.current))}var Qt=function(O){pa(O),!Z&&Pn(!0)},Ia=function(O){Z||(pa(O),Pn(!1))},Oa=function(){io(Na.current,ja.current,F)},Ua=function(O){return Xe(void 0,void 0,void 0,function(){var N,T;return Ze(this,function(we){return ya(O),Z?[2]:ee?[2]:(R||Oa(),Pn(!1),N=O.dataTransfer.files,T=rt(N),Me&&(T=Aa(T),m&&(T=T.filter(function(Pe){return Pe.valid}))),bn&&(T=lt(T)),ye(T),[2])})})},qn=function(){a?a([]):ln([])},Xn=function(){d?d():a?a(De.filter(function(O){return O.valid})):ln(De.filter(function(O){return O.valid}))},Zn=$n?Tn&&U||Z?be($n,"files-ui-root-border-hide"):$n:void 0,_a=Zn?me&&!Z?be(Zn,"clickable"):Zn:void 0;return _a?i.createElement(i.Fragment,null,ge==="before"&&i.createElement(ut,{disabled:Z,abortButton:ee?_e:void 0,onAbort:La,deleteButton:Je,onDelete:ee?void 0:qn,uploadButton:!ee&&!D?Te:void 0,onUpload:D?void 0:function(){return xn(De)},cleanButton:Me&&!ee&&!m?Ae:void 0,onClean:Xn,style:Ye,className:Qe,top:!0}),i.createElement("div",k({style:E,className:_a},Q,{onClick:Yt,onDragOver:Qt,onDragLeave:U?void 0:Ia,onDrop:U?void 0:Ua}),!R&&i.createElement("div",{ref:Na,className:"filesui-base-ripple-absolute",style:{borderRadius:E==null?void 0:E.borderRadius}},i.createElement("div",{ref:ja,className:"filesui-base-ripple-relative"})),i.createElement(i.Fragment,null,V?i.createElement(i.Fragment,null,hn?i.createElement(i.Fragment,null,hn):i.createElement(bo,{firstClassName:Wt,color:Y(F),style:$t,className:ce,resetStyles:Vt,borderRadius:dn,isUploading:ee&&On,onReset:!ee&&An?qn:void 0,maxFileSize:o&&pn?o:void 0,maxFiles:s&&Un?s:void 0,localization:q,urlPresent:bn&&In,onUploadStart:!D&&!Te?function(){return xn(De)}:void 0,numberOfValidFiles:Vn,onClean:!Bn||ee||Ae||m?void 0:(u||d)&&Me?Xn:void 0})):i.createElement(i.Fragment,null)),i.createElement(to,{label:S,localization:q},re),i.createElement(i.Fragment,null,ka?i.createElement(i.Fragment,null,ka):i.createElement(i.Fragment,null,$&&i.createElement(xo,k({firstClassName:Gt,borderRadius:dn,accept:l,message:ee?Zt:void 0,localization:q},K)))),U&&i.createElement(So,{open:Tn,className:Tn?"".concat(Ba," dropzone-layer-drag"):Ba,onDragLeave:Ia,onDrop:Ua,style:{borderRadius:E==null?void 0:E.borderRadius}}),i.createElement(no,{multiple:s?s>1:!0,accept:l||"",inputRef:_n,onChange:Jt}),i.createElement(oo,{open:Z,className:Kt})),ge==="after"&&i.createElement(ut,{disabled:Z,abortButton:ee?_e:void 0,onAbort:La,deleteButton:Je,onDelete:ee?void 0:qn,uploadButton:!ee&&!D?Te:void 0,onUpload:D?void 0:function(){return xn(De)},cleanButton:Me&&!ee&&!m?Ae:void 0,onClean:Xn,style:Ye,className:Qe,top:!1})):i.createElement(i.Fragment,null)};P(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
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
}`);var Uo=function(e){var n=e.size,a=e.color,t=e.style,r=e.radius,l=e.x,o=e.y,s=e.width,c=r||46,u=l||50,d=o||50,m=ne(n),p=t||{};return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"".concat(m,"px"),height:"".concat(m,"px"),style:p,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},i.createElement("circle",{cx:"".concat(u),cy:"".concat(d),r:"".concat(c),fill:"none",stroke:a||"#14ff00",strokeWidth:"".concat(s||8,"px"),strokeDasharray:"164.93361431346415 100.97787143782138"},i.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 ".concat(u," ").concat(u,";360 ").concat(u," ").concat(u),keyTimes:"0;1"})))};P(`.files-ui-loader-container {
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
}`);var Tt=function(e){var n=e.children,a=e.className,t=e.style,r=e.size,l=e.onClick,o=r?ne(r):void 0,s=l?"files-ui-loader-container clickable":"files-ui-loader-container",c=function(){l==null||l()};return i.createElement("div",{onClick:c,className:a?"".concat(s," ").concat(a):s,style:k(k({},t),{height:o,width:o})},n)},Pt=function(e){var n=e.onClick,a=e.size;return i.createElement(Tt,{onClick:n,size:a},i.createElement(i.Fragment,null,i.createElement(Uo,{size:a}),i.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},n&&i.createElement(un,{color:"rgba(255,255,255,0.75)",size:45,onClick:n}))))};P(`.files-ui-layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}`);var sn=function(e){var n=e.style,a=e.className,t=e.children,r=e.visible,l=Rn(e,["style","className","children","visible"]),o=be(a||"","files-ui-layer");return r?i.createElement("div",k({className:o,style:n},l),t):i.createElement(i.Fragment,null)},_o={alt:"image-preview",smartImgFit:"orientation"};P(`.fui-image-preview {
  position: relative;
  border-radius: 10px;
}`);var ga=function(e){var n=At(e,_o),a=n.src,t=n.alt,r=n.width,l=n.height,o=n.onError,s=n.smartImgFit,c=n.style,u=n.className,d=i.useState([void 0,void 0]),m=d[0],p=m[0],v=m[1],x=d[1],h=i.useState(void 0),b=h[0],w=h[1],F=function(C){return Xe(void 0,void 0,void 0,function(){var S;return Ze(this,function(M){switch(M.label){case 0:return[4,Ct(C)];case 1:return S=M.sent(),j(S),[2]}})})},j=function(C){return Xe(void 0,void 0,void 0,function(){var S,M,R;return Ze(this,function(z){switch(z.label){case 0:return C===""||!C?[2]:(S=void 0,M=void 0,s?[3,1]:(M="100%",[3,4]));case 1:return z.trys.push([1,3,,4]),[4,ti(C)];case 2:return R=z.sent(),R==="landscape"?s==="orientation"?(S=void 0,M="100%"):(S="100%",M=void 0):s==="center"?(S=void 0,M="100%"):(S="100%",M=void 0),[3,4];case 3:return z.sent(),o==null||o(),[3,4];case 4:return l&&(S=l),r&&(M=r),x([S,M]),w(C),[2]}})})};i.useEffect(function(){if(a)if(typeof a=="string")j(a);else{var C=a.type?a.type.split("/")[0]:"octet";C==="image"?F(a):o==null||o()}},[a]);var E=function(C){o==null||o()};return i.createElement(i.Fragment,null,a&&b&&(p||v)&&i.createElement("img",{style:c||{},onClick:function(C){C.preventDefault()},width:v,height:p,src:b,alt:t,className:u,onError:E}))};P(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
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
} */`);P(`.files-ui-file-icon {
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
}`);P(`.files-ui-file-card-main-container.dark-mode {
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
}`);P(`.file-card-right-layer-header {
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
}`);var To=function(e){var n=e.localization,a=e.size,t=Ue(n).status;return i.createElement(i.Fragment,null,i.createElement(_t,{color:"#f44336",size:a||65}),i.createElement("span",null," ",t.aborted))},Po=function(e){var n=e.height,a=n?typeof n=="number"?"".concat(n,"px"):n:"132px";return i.createElement(i.Fragment,null,i.createElement("div",{style:{width:"100%",height:a}}))},Ho=function(e){var n=e.localization,a=e.size,t=Ue(n).status;return i.createElement(i.Fragment,null,i.createElement(un,{color:"rgba(255,255,255,0.4)",style:{backgroundColor:"rgba(244, 67, 54, 0.8)",borderRadius:"50%"},size:a||65}),i.createElement("span",null," ",t.error))},Vo=function(e){var n=e.onCancel,a=e.localization,t=e.size,r=Ue(a).status;return i.createElement(i.Fragment,null,i.createElement(Pt,{onClick:n,size:t||65}),i.createElement("span",null,r.preparing))},$o=function(e){var n=e.localization,a=e.size,t=Ue(n).status;return i.createElement(i.Fragment,null,i.createElement(Ut,{color:"#4caf50",size:a||65}),i.createElement("span",null," ",t.success))};P(`text.files-ui-text-dynamic-loader {
  text-anchor: middle;
  font-size: 1em;
  fill: aliceblue;
}`);var qo=function(e){var n=e.size,a=e.color,t=e.style,r=e.percentage,l=e.hidePerncentage,o=e.radius,s=e.x,c=e.y,u=e.width,d=e.onClick,m=o||28,p=s||30,v=c||30,x=ne(n),h=t||{},b=i.useRef(null);function w(F,j,E){j.style.strokeDashoffset="".concat(E*(1-F/100))}return i.useEffect(function(){var F=b.current;if(F!=null&&r!==void 0){var j=2*Math.PI*F.r.baseVal.value;F.style.strokeDasharray="".concat(j," 1000"),w(r>=100?100:r,F,j)}},[r]),r!==void 0?i.createElement(Tt,{size:n},i.createElement(i.Fragment,null,i.createElement("svg",{className:"dui_svg_circle_loader",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"".concat(x,"px"),height:"".concat(x,"px"),style:h},i.createElement("circle",{style:{transform:"rotate(-90deg)",transformOrigin:"center"},stroke:a||"#14ff00",cx:"".concat(p),cy:"".concat(v),r:"".concat(m),strokeWidth:"".concat(u||8,"px"),id:"circle",ref:b,fill:"none"}),!l&&r!==void 0&&i.createElement("text",{className:"files-ui-text-dynamic-loader",x:"".concat(p),y:"".concat(p*7/6)},"".concat(r.toFixed(0)," %"))),d&&i.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},i.createElement(un,{color:"rgba(255,255,255,0.75)",size:45,onClick:d})))):i.createElement(i.Fragment,null)};P(`.lds-colorbar {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}
.lds-colorbar .files-ui-text-default-loader {
  font-size: 1.5rem;
  font-weight: 400;
  text-anchor: middle;
}`);var Xo=function(e){var n=e.localization,a=e.size,t=e.onAbort,r=e.progress,l=Ue(n).status;return i.createElement(i.Fragment,null,r!==void 0?i.createElement(qo,{size:70,x:35,y:35,radius:32,percentage:r,width:6,hidePerncentage:r===void 0||t!==void 0,onClick:t}):i.createElement(Pt,{onClick:t,size:a||70}),i.createElement("span",null," ",l.uploading))};P(`.files-ui-file-card-upload-layer {
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
}`);P(`.files-ui-tooltip {
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
}`);var Zo=function(e){var n=e.uploadStatus,a=e.valid,t=e.errors,r=e.uploadMessage,l=e.open,o=i.useState(void 0),s=o[0],c=o[1],u=i.useState(void 0),d=u[0],m=u[1],p=function(v,x){v!==void 0?(m(r),c(v==="success"?"success":"not-valid-error")):x!==void 0&&(x||(c("not-valid-error"),m(t?t.reduce(function(h,b){return h+="".concat(b,". "),h},""):"")))};return i.useEffect(function(){p(n,a)},[n,a]),i.createElement(i.Fragment,null,l&&d&&s&&i.createElement("span",{className:"files-ui-tooltiptext ".concat(s)},d))},Wo=function(e){var n=e.downloadUrl,a=e.anchorRef,t=e.fileName;function r(l){l.stopPropagation()}return n?i.createElement("a",{ref:a,target:"_blank",href:n,download:t,hidden:!0,rel:"noopener noreferrer",onClick:r},"download_file"):i.createElement(i.Fragment,null)};P(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
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
 */`);P(`.files-ui-layer-container {
  position: relative;
}`);var Go=function(e){var n=e.style,a=e.className,t=e.children,r=be(a||"","files-ui-layer-container");return i.createElement("div",{className:r,style:n},t)},Ko=function(e){var n=e.fileName;return n?i.createElement("span",null,n):i.createElement(i.Fragment,null)};P(`.files-ui-file-mosaic-upload-layer {
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
}`);var Jo=function(e){var n=e.uploadStatus,a=e.onCancel,t=e.onAbort,r=e.progress,l=e.localization,o=i.useRef(null),s=i.useRef(null),c=i.useState([void 0]),u=c[0],d=c[1];i.useEffect(function(){d(function(p){if(p[p.length-1]==="preparing"&&n==="uploading"){var v=Le([],p,!0);return v[p.length-1]=n,Le([],v,!0)}return Le(Le([],p,!0),[n],!1)})},[n]);var m=function(){var p=o.current,v=s.current;p===null||v===null||(v.style.top=0-(u.length-1)*132+"px")};return i.useEffect(function(){u.length>1&&m()},[u.length]),i.createElement("div",{className:"elevation-layer-container",ref:o},i.createElement("div",{className:"elevation-list",ref:s},u.map(function(p,v){switch(p){case"preparing":return i.createElement("div",{className:"elevation-item",key:v+1},i.createElement(Vo,{onCancel:a,localization:l}));case"uploading":return i.createElement("div",{className:"elevation-item",key:v+1},i.createElement(Xo,{onAbort:t,progress:r,localization:l}));case"error":return i.createElement("div",{className:"elevation-item",key:v+1},i.createElement(Ho,{localization:l}));case"success":return i.createElement("div",{className:"elevation-item",key:v+1},i.createElement($o,{localization:l}));case"aborted":return i.createElement("div",{className:"elevation-item",key:v+1},i.createElement(To,{localization:l}));default:return i.createElement("div",{className:"elevation-item",key:v+1},i.createElement(Po,null))}})))},dt=function(e){var n=e.imageSource,a=e.url,t=e.fileName,r=e.card,l=e.isBlur,o=e.smartImgFit,s=i.useState(void 0),c=s[0],u=s[1],d=i.useState(!1),m=d[0],p=d[1];i.useEffect(function(){u(n||a)},[n,a]);var v=function(){p(!0),u(a)};return l?i.createElement(i.Fragment,null,!r&&!m&&n&&i.createElement(ga,{src:c,alt:"blur ".concat(t),smartImgFit:!1})):i.createElement(i.Fragment,null,i.createElement(ga,{onError:v,src:c,style:{borderRadius:"0px"},alt:"preview ".concat(t),smartImgFit:o}))};P(`.files-ui-file-item-status-container {
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
}`);var Ht=function(e){var n=e.valid,a=e.uploadStatus,t=e.localization,r=e.style,l=Ue(t).status;return a==="success"?i.createElement("div",{className:"files-ui-file-item-status-container file-status-ok",style:r},i.createElement(co,{color:"#4caf50",size:"small",className:"status-icon"}),l.success):a==="error"||a==="aborted"?i.createElement("div",{className:"files-ui-file-item-status-container file-status-error",style:r},i.createElement(go,{color:"#f44336",size:"semi-medium",className:"status-icon"}),l.error):n!=null?n?i.createElement("div",{className:"files-ui-file-item-status-container file-status-ok",style:r},i.createElement(Ut,{color:"#4caf50",size:"small",className:"status-icon"}),l.valid):i.createElement("div",{className:"files-ui-file-item-status-container file-status-error",style:r},i.createElement(_t,{color:"#f44336",size:"small",className:"status-icon"}),l.denied):i.createElement(i.Fragment,null)},Yo=function(e){var n=e.valid,a=e.localization,t=e.onCloseInfo,r=e.uploadStatus,l=e.localName,o=e.sizeFormatted,s=e.localType,c=Ue(a),u=c.fullInfoLayer,d=u.name,m=u.size,p=u.type;return i.createElement(i.Fragment,null,i.createElement("div",{className:"files-ui-file-mosaic-info-layer-header"},i.createElement(Ot,{color:"rgba(255,255,255,0.8)",onClick:t,colorFill:"black"}),i.createElement(Ht,{valid:n,uploadStatus:r,localization:a})),i.createElement("div",{className:"heading"},d),i.createElement("div",{className:"label"},l),i.createElement("div",{className:"heading"},m),i.createElement("div",{className:"label"},o),i.createElement("div",{className:"heading"},p),i.createElement("div",{className:"label"},s))};P(`.filesui-file-item-size {
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
}`);var Qo=function(e){var n=e.sizeFormatted;return i.createElement(i.Fragment,null,n&&i.createElement("div",{className:"filesui-file-item-size"},n))},es=function(e){var n=e.darkMode,a=e.deleteIcon,t=e.downloadIcon,r=e.imageIcon,l=e.infoIcon,o=e.onDelete,s=e.onDownload,c=e.onOpenInfo,u=e.onSee,d=e.onWatch,m=e.sizeFormatted,p=e.valid,v=e.videoIcon,x=e.localization,h=e.uploadStatus,b=e.isActive;return i.createElement(i.Fragment,null,i.createElement("div",{className:"file-mosaic-main-layer-header"},b&&a&&i.createElement(un,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:o,size:"small",colorFill:"transparent"})),i.createElement("div",{className:"file-mosaic-main-layer-footer"},i.createElement("div",{className:"file-mosaic-footer-left"},i.createElement(Ht,{valid:p,uploadStatus:h,localization:x}),b&&m&&i.createElement(Qo,{sizeFormatted:m})),i.createElement("div",{className:"file-mosaic-footer-right"},b&&i.createElement(i.Fragment,null,r&&i.createElement(ho,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:u,size:"small"}),v&&i.createElement(mo,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:d,size:"small"}),t&&i.createElement(uo,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:s,size:"small"}),l&&i.createElement(fo,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",onClick:c,color:n?"#121212":"rgba(255,255,255,0.851)",size:"micro"})))))},ft=function(e){var n=e.style,a=e.className,t=e.file,r=e.name,l=e.size,o=e.type,s=e.id,c=e.valid,u=e.errors,d=e.uploadStatus,m=e.uploadMessage,p=e.progress,v=e.xhr,x=e.localization,h=e.preview,b=e.imageUrl,w=e.videoUrl,F=e.info,j=e.backgroundBlurImage,E=j===void 0?!0:j,C=e.darkMode,S=e.alwaysActive,M=S===void 0?!0:S,R=e.resultOnTooltip,z=R===void 0?!0:R,L=e.downloadUrl,H=e.onDelete,U=e.onCancel,V=e.onAbort,$=e.onDownload,G=e.onSee,_=e.onWatch,ae=e.onDoubleClick,K=e.onClick,Z=e.onRightClick,me=e.smartImgFit,pe=me===void 0?"orientation":me,re=i.useContext(wa),Q=re.darkMode,le=re.icons,q=re.localization,X=x!==void 0?x:q,je=C!==void 0?C:Q,ke=i.useRef(null),Be=be(be("files-ui-file-mosaic-main-container files-ui-tooltip",a),K?"clickable":void 0),Ke=je?"files-ui-file-mosaic-file-name dark-mode":"files-ui-file-mosaic-file-name",Fe=Bl(t,r,o,l),Ce=Fe[0],Se=Fe[1],g=Fe[2],y=Ao(p,v),D=Ro(t,r,o,c,h,b,w,le),B=D[0],ie=D[1],te=D[2],oe=D[3],ge=D[4],_e=D[5],Je=Ee(g),Te=i.useState(!1),Ae=Te[0],Ye=Te[1],Qe=i.useState(!1),dn=Qe[0],en=Qe[1],Bn=function(){M||en(!0)},fn=function(){M||en(!1)},An=function(){return H==null?void 0:H(s)},mn=function(){return Ye(!0)},pn=function(){return Ye(!1)},Ie=Bo(d);i.useEffect(function(){Ie&&Ae&&pn()},[Ie]);function In(ce){ce.stopPropagation(),K==null||K(ce)}var gn=function(ce){ce.preventDefault(),ae==null||ae(ce)};function On(ce){Z==null||Z(ce)}var vn=function(){var ce=ke.current;ce&&ce.click()},Un=function(){$?$==null||$(s,L):typeof L=="string"&&vn()},hn=function(){v==null||v.abort(),V==null||V(s)};return B?i.createElement("div",{className:Be,style:n,onClick:In,onMouseEnter:Bn,onMouseLeave:fn,onDoubleClick:gn,onContextMenu:On},i.createElement(Go,{className:"files-ui-file-mosaic-icon-layer-container",style:n},i.createElement(sn,{className:"files-ui-file-mosaic-image-layer blur",visible:E},i.createElement(dt,{imageSource:ge,url:oe,fileName:Ce,isBlur:!0,smartImgFit:!1})),i.createElement(sn,{className:"files-ui-file-mosaic-image-layer",visible:!0},i.createElement(dt,{imageSource:ge,url:oe,fileName:Ce,isBlur:!1,smartImgFit:pe})),i.createElement(sn,{className:"files-ui-file-mosaic-main-layer",visible:!Ie&&!Ae},i.createElement(es,{deleteIcon:H!==void 0,onDelete:An,darkMode:je,valid:c,uploadStatus:d,localization:X,sizeFormatted:Je,imageIcon:ie&&G!==void 0,onSee:function(){return G==null?void 0:G(ge)},videoIcon:te&&_!==void 0,onWatch:function(){return _==null?void 0:_(_e)},downloadIcon:$!==void 0||L!==void 0,onDownload:Un,infoIcon:F!==void 0,onOpenInfo:mn,isActive:M||dn})),i.createElement(sn,{className:"files-ui-file-mosaic-info-layer",visible:Ae,onClick:xe},i.createElement(Yo,{onCloseInfo:pn,valid:c,localization:X,localName:Ce,sizeFormatted:Je,localType:Se})),i.createElement(sn,{className:"files-ui-file-mosaic-upload-layer",visible:Ie,onClick:xe},i.createElement(Jo,{uploadStatus:d,progress:y,onCancel:U?function(){return U==null?void 0:U(s)}:void 0,onAbort:V?hn:void 0,localization:X}))),i.createElement("div",{className:Ke},i.createElement(Ko,{fileName:Ce})),i.createElement(Zo,{open:z,uploadStatus:d,valid:c,errors:u,uploadMessage:m}),i.createElement(Wo,{fileName:Ce,anchorRef:ke,downloadUrl:L})):i.createElement(i.Fragment,null)};P(`.fui-fullscreen-container {
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
}`);var mt=function(e){var n=e.open,a=e.onClose,t=e.children;function r(l){l.stopPropagation(),a==null||a()}return i.useEffect(function(){var l=function(o){o.key==="Escape"&&(a==null||a())};return document.addEventListener("keydown",l),function(){document.removeEventListener("keydown",l)}},[]),i.createElement("div",{className:n?"fui-fullscreen-container show-fs":"fui-fullscreen-container",onClick:r},n&&i.createElement("div",{className:"fui-fullscreen-relative-container",onClick:r},t),a&&i.createElement(un,{color:"rgba(255,255,255,0.8)",onClick:r,colorFill:"transparent",className:"button-full-screen",size:"extra-large"}))},ns=function(e){var n=e.src,a=e.style,t=e.className,r=Rn(e,["src","style","className"]),l=i.useRef(null),o=i.useState(void 0),s=o[0],c=o[1];return i.useEffect(function(){if(n)if(typeof n=="string")c(n);else{var u=n.type?n.type.split("/")[0]:"octet",d=n.type?n.type.split("/")[1]:"octet";if(u==="video"&&["mp4","ogg","webm"].includes(d)){var m=URL.createObjectURL(n);c(m)}}},[n]),i.useEffect(function(){s&&l.current&&l.current.load()},[s]),i.createElement(i.Fragment,null,n&&s&&i.createElement("video",k({onClick:function(u){u.preventDefault()},id:"files-ui-video",ref:l,className:t||"filesui-video-preview",src:s,height:"100%",style:a},r),i.createElement("source",{type:"video/webm"}),i.createElement("source",{type:"video/ogg"}),i.createElement("source",{type:"video/mp4"})))};const pt="menu-id-1",gt="menu-id-2",vt="menu-id-3",ht="menuFolder",{DirectoryTree:as}=xt;function Cs(){const{show:e}=Cn({id:pt}),{show:n}=Cn({id:gt}),{show:a}=Cn({id:vt}),{show:t}=Cn({id:ht}),[r,l]=i.useState([]),[o,s]=i.useState(),[c,u]=i.useState("uploads"),[d,m]=i.useState(void 0),[p,v]=i.useState(void 0),[x,h]=i.useState([]),[b,w]=i.useState([]),[F,j]=i.useState([{title:"uploads"}]),[E,C]=i.useState(""),[S,M]=i.useState(""),R=()=>{const g=ua(x),y=D=>{for(let B of D){if(B.key===o){B.children=B.children||[];const ie=Mr();B.children.push({title:"Thư mục mới",key:ie,className:"non-leaf-node"});return}B.children&&y(B.children)}};y(g),h(g)},z=()=>{const g=ua(x),y=D=>{for(let B=0;B<D.length;B++){if(D[B].key===o){D.splice(B,1);return}D[B].children&&y(D[B].children)}};y(g),h(g)},L=({event:g,node:y})=>{g.preventDefault(),y.isLeaf?r.length===0?(y.parent&&s(y.parent.key),e({event:g})):(s(y.parent.key),n({event:g})):(e({event:g}),s(y.key))},H=g=>{m(g)},U=g=>{v(g)},[V,$]=i.useState([]),G=async(g,y)=>{if(y)try{const D=await fetch(y);if(!D.ok){Fn("Tải xuống bị lỗi","File không tồn tại hoặc đã bị xóa khỏi hệ thống");return}const B=await D.blob(),ie=URL.createObjectURL(B),te=document.createElement("a");te.href=ie,te.download=g||"newFile.jpeg",document.body.appendChild(te),te.click(),document.body.removeChild(te),URL.revokeObjectURL(ie)}catch{Fn("Tải xuống bị lỗi","File không tồn tại hoặc đã bị xóa khỏi hệ thống")}},_=g=>{$(V.filter(y=>y.id!==g))},ae=g=>{$(g)},K=g=>{m(g)},Z=g=>{v(g)},[me,pe]=i.useState([!1,!1]),[re,Q]=i.useState(""),[le,q]=i.useState(""),X=(g,y)=>{pe(D=>(D[g]=y,[...D]))},[je,ke]=i.useState(!1),Be=g=>{u(g),j(Ce(g)),Se(g)},Ke=(g,y="")=>{const D=(B,ie)=>{const te=ie?`${ie}/${B.name}`:B.name;if(B.type==="file")return{title:B.name,key:B.path,isLeaf:!0};if(B.type==="directory"){const oe=B.children?B.children.map(ge=>D(ge,te)):[];return oe.sort((ge,_e)=>ge.isLeaf===_e.isLeaf?0:ge.isLeaf?1:-1),{title:B.name,key:B.path,className:"non-leaf-node",path:te,children:oe}}};return D(g,y)},Fe=g=>(g.sort((y,D)=>y.type==="directory"&&D.type==="file"?-1:y.type==="file"&&D.type==="directory"?1:0),g.map(y=>{let D=y.type==="file"?y.mimeType:"folder";if(y.type==="file")return{name:y.name,type:D,size:y.size,url:`${ea}/${y.path}`,downloadUrl:`${ea}/${y.path}`};if(y.type==="directory")return{name:y.name,type:D,size:y.size,children:y.children?Fe(y.children):[]}})),Ce=g=>{const y=g.split("/");return y.map((B,ie)=>{let te={title:B};return ie<y.length-1&&(te.href="#"),te})};i.useEffect(()=>{Ka.allFile().then(g=>{h([Ke(g)])})},[]);const Se=g=>{Ka.filesInFolder({folderName:g}).then(y=>{w(Fe(y))})};return i.useEffect(()=>{Se(c)},[]),f.jsx(sr,{header:f.jsx("div",{className:"flex items-center h-full",children:f.jsx("h6",{className:"mb-0",children:"QUẢN LÝ FILE"})}),children:f.jsxs("div",{style:{height:"calc(100vh - 132px)"},onClick:()=>C(null),children:[f.jsx("div",{className:"row px-0 border-bottom pb-2",children:f.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center overflow-hidden",children:[f.jsxs("div",{className:"flex",children:[f.jsxs($e,{onClick:()=>X(0,!0),type:"text",block:!0,children:["Thêm thư mục ",f.jsx(Ya,{size:20})]}),f.jsxs($e,{type:"text",block:!0,onClick:()=>ke(!0),children:["Thêm file ",f.jsx(Qa,{size:20})]}),f.jsxs($e,{type:"text",block:!0,children:["Thêm file 3D ",f.jsx(et,{size:25})]})]}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx(ta,{addonAfter:f.jsx(ur,{size:20}),placeholder:"Nhập tên file",style:{width:"200px"}}),f.jsx($e,{style:{width:"100px"},type:"text",block:!0,children:f.jsx(dr,{placement:"bottomRight",title:"Chọn loại tệp",content:f.jsx(xt,{checkable:!0,defaultExpandAll:!0,treeData:[{title:"Chọn tất cả",key:"all",children:[{title:"PNG",key:"png"},{title:"JPG",key:"jpg"},{title:"GLB",key:"glb"}]}],blockNode:!0}),children:f.jsxs("div",{className:"flex gap-2",children:["Lọc",f.jsx(fr,{size:20})]})})}),f.jsxs($e,{style:{width:"100px"},type:"text",block:!0,children:["Tải lại ",f.jsx(or,{size:20})]})]})]})}),f.jsx("div",{className:"row",children:f.jsxs(ra,{children:[f.jsx(qe,{md:{span:6},span:24,children:f.jsx(as,{className:"overflow-auto p-2",style:{height:"calc(100vh - 160px)"},showLine:!0,defaultExpandAll:!0,switcherIcon:f.jsx(yt,{className:"fs-7"}),onSelect:()=>console.log("onSelect"),onClick:(g,y)=>{(y==null?void 0:y.isLeaf)==null&&Be(y.path)},onRightClick:L,treeData:x})}),f.jsxs(qe,{className:"overflow-auto p-2",style:{height:"calc(100vh - 160px)"},md:{span:18},span:24,onContextMenu:g=>{t({event:g})},children:[f.jsxs(ra,{children:[f.jsx(qe,{className:"flex justify-center items-center",xxl:{span:2},xl:{span:4},md:{span:6},children:f.jsx($e,{onClick:()=>Be(c.substring(0,c.lastIndexOf("/"))),disabled:c==="uploads"||c==="",type:"text",block:!0,children:f.jsx(mr,{size:20})})}),f.jsx(qe,{xxl:{span:22},xl:{span:20},md:{span:18},children:f.jsx(ha,{className:"fs-6",separator:">",items:F})})]}),f.jsx(ra,{children:b.length===0?f.jsx(qe,{span:24,children:f.jsx(hr,{})}):b.map(g=>f.jsx(qe,{xl:{span:4},lg:{span:6},md:{span:8},span:12,className:"flex justify-center items-center mb-2",children:g.type==="folder"?f.jsxs("div",{className:"hover-folder position-relative",children:[f.jsx("img",{className:"folder-img position-relative",onDoubleClick:()=>{Be(`${c}/${g.name}`)},onContextMenu:y=>{y.preventDefault(),y.stopPropagation(),M(g),a({event:y})},src:`${ea}/system/file/folder.png`,alt:"Hình ảnh folder"}),f.jsx("div",{className:"position-absolute folder-name",children:g.name})]}):f.jsx(ft,{className:`hover-file h-full ${E&&E.url===g.url?"selected":""}`,name:g.name,type:g.type,size:g.size,imageUrl:g.url,smartImgFit:"center",onDownload:()=>G(g.name,g.downloadUrl),onSee:g.type.startsWith("video/")?U:g.type.startsWith("image/")?H:void 0,onRightClick:y=>{C(g),y.stopPropagation(),a({event:y})},onClick:()=>{C(g)}})},g.name))})]})]})}),f.jsx(ia,{title:"Thêm file",centered:!0,open:je,onOk:()=>ke(!1),onCancel:()=>ke(!1),width:1e3,footer:null,children:f.jsx(Oo,{onChange:ae,minHeight:"195px",value:V,maxFiles:0,maxFileSize:5*1024*1024,label:"Kéo và thả tập tin vào đây hoặc nhấp để thêm tập tin",children:V.map(g=>i.createElement(ft,{...g,key:g.id,onDelete:_,onSee:K,onWatch:Z,resultOnTooltip:!0,alwaysActive:!0,preview:!0,info:!0}))})}),f.jsx(ia,{title:"Tạo thư mục",centered:!0,open:me[0],onOk:()=>{na.createFolder({name:re,parentPath:c}).then(()=>{aa("Tạo thư mục thành công","Tạo thư mục mới thành công"),Se(c)}).catch(()=>{Fn("Tạo thư mục thất bại","Có lỗi xảy ra khi tạo thư mục mới")}),Q(""),X(0,!1)},closeIcon:!1,onCancel:()=>X(0,!1),width:500,children:f.jsx(ta,{value:re,onChange:g=>Q(g.target.value),placeholder:"Nhập tên thư mục"})}),f.jsx(ia,{title:"Chỉnh sửa tên thư mục",centered:!0,open:me[1],onOk:()=>{console.log(S),na.updateFolder({oldName:S.name,newName:le,parentPath:c}).then(()=>{M(""),aa("Đổi tên thư mục thành công","Đổi tên thư mục thành công"),Se(c)}).catch(g=>console.log(g)),q(""),X(1,!1)},closeIcon:!1,onCancel:()=>X(1,!1),width:500,children:f.jsx(ta,{value:le,onChange:g=>q(g.target.value),placeholder:"Nhập tên thư mục"})}),f.jsxs(Sn,{id:pt,children:[f.jsxs(W,{onClick:R,children:[f.jsx("i",{className:"fa-light fa-folder-plus me-2 fs-4"})," Thêm thư mục"]}),f.jsxs(W,{onClick:z,children:[f.jsx("i",{className:"fa-light fa-folder-minus me-2 fs-4"})," Xóa thư mục"]}),f.jsx(Ve,{}),f.jsxs(W,{children:[f.jsx("i",{className:"fa-light fa-file-signature me-2 fs-4"}),"  Đổi tên thư mục"]}),f.jsx(Ve,{}),f.jsxs(W,{children:[f.jsx("i",{className:"fa-light fa-file-plus me-2 fs-4"})," Tải file lên"]}),f.jsx(Ve,{}),f.jsxs(Ja,{label:"Thông tin",children:[f.jsx(W,{children:"Ngày tạo: "}),f.jsx(W,{children:"Kích thước: "}),f.jsx(W,{children:"Bao gồm: "})]})]}),f.jsxs(Sn,{id:gt,children:[f.jsxs(W,{children:[f.jsx("i",{className:"fa-solid fa-check me-2 fs-4"})," Chọn nhiều file"]}),f.jsxs(W,{onClick:()=>{Dr(x,o,Ft,l)},children:[f.jsx("i",{className:"fa-solid fa-check-double me-2 fs-4"})," Chọn toàn bộ file"]}),f.jsxs(W,{onClick:()=>l([]),children:[f.jsx("i",{className:"fa-solid fa-x me-2 fs-4"})," Bỏ chọn"]}),f.jsx(Ve,{}),f.jsxs(W,{children:[f.jsx("i",{className:"fa-solid fa-download fs-4 me-2"}),"Tải file xuống"]}),f.jsxs(W,{children:[f.jsx("i",{className:"fa-solid fa-trash fs-4 me-2"})," Xóa file"]})]}),f.jsxs(Sn,{style:{width:"100px"},animation:"scale",id:vt,children:[f.jsxs(Ja,{label:f.jsxs(f.Fragment,{children:[f.jsx(vr,{size:22})," Thông tin: "]}),children:[f.jsx(W,{children:"Kích thước: "}),f.jsx(W,{children:"Loại file: "}),f.jsx(W,{children:"Link: "})]}),f.jsx(Ve,{}),f.jsxs(W,{onClick:()=>X(1,!0),children:[f.jsx(pr,{size:22}),"Chỉnh sửa file"]}),f.jsx(Ve,{}),f.jsx(br,{placement:"bottom",onConfirm:()=>{na.deleteFolder({namefolder:S.name,parentPath:c}).then(()=>aa("Xóa thư mục thành công","Xóa thư mục thành công")).catch(()=>Fn("Xóa thư mục thất bại","Có lỗi xảy ra khi xóa thư mục")),console.log(S),console.log(c)},title:"Bạn có chắc chắn muốn xóa file này không?",children:f.jsxs(W,{children:[f.jsx(gr,{size:22}),"Xóa file"]})})]}),f.jsxs(Sn,{style:{width:"100px"},animation:"scale",id:ht,children:[f.jsxs(W,{onClick:()=>X(0,!0),children:[f.jsx(Ya,{size:20,className:"me-1"})," Thêm thư mục"]}),f.jsxs(W,{onClick:()=>ke(!0),children:[f.jsx(Qa,{size:20,className:"me-1"}),"Thêm file "]}),f.jsxs(W,{children:[f.jsx(et,{size:22,className:"me-1"}),"Thêm file 3D"]})]}),f.jsx(mt,{open:d!==void 0,onClose:()=>m(void 0),children:f.jsx(ga,{src:d})}),f.jsx(mt,{open:p!==void 0,onClose:()=>v(void 0),children:f.jsx(ns,{src:p,autoPlay:!0,controls:!0})})]})})}export{Cs as default};
