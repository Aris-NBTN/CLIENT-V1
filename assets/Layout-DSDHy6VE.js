import{r as i,d as y,c as F,b1 as E,b2 as H,j as m,V as d,a1 as I,b3 as A,e as $}from"./index-DE5XhBCr.js";import{b7 as q}from"./Layout-BEdbvo9Y.js";import{P as w,p as R,b as O,a as W,c as G,d as J,B as e}from"./index-CYBcKfWG.js";import{S as v}from"./index-BcZ8U7N5.js";import"./animate-CNPIBgQA.js";import"./context-CsfdzBwd.js";import"./index-BwCU8U38.js";import"./index-ryfAGLJW.js";import"./index-B_khmHK4.js";import"./EllipsisOutlined-DMUE7OaF.js";import"./Overflow-Bn3H8H0j.js";import"./collapse-BbEVqHco.js";import"./button-D_f20KL0.js";import"./index-vvjVAyMb.js";import"./compact-item-j-IwINpD.js";import"./index-D9MB6VQ_.js";import"./useLocale-BqnSk2g0.js";import"./TextArea-DbcwDeGW.js";import"./CheckOutlined-Do-_RANe.js";import"./index-D-46KyVB.js";import"./PurePanel-CXcxwk_K.js";import"./index-DVbmQFHF.js";import"./SearchOutlined-DoyMI1tW.js";import"./index-DvgPVpEV.js";import"./responsiveObserver-D_NtFPG1.js";import"./GrapeJs-C_R3gant.js";import"./fileApi-C1B48QZr.js";import"./row-2mV1AMPv.js";const xt=()=>{var h,f;const[k,L]=i.useState(""),[u,B]=i.useState(!1),g=y(t=>t.pluginsScript.pluginsScript),P=y(t=>t.pluginsScript.loading),C=F(),T=(t,p)=>{const o=new Date,{html:r,css:n,js:s}=p,b=new DOMParser().parseFromString(r,"text/html"),a=b.querySelector("#Header"),l=b.querySelector("#Footer");let x="",S="";const j=r.match(/<body[^>]*>([\s\S]*?)<\/body>/i);if(j&&j[1].trim()===""&&console.log("không có dữ liệu"),!a){d("Chưa có Header!");return}if(!l){d("Chưa có Footer!");return}a&&(x=`<div class="${a.className}">${a.innerHTML}</div>`),l&&(S=`<div id="Footer">${l.innerHTML}</div>`),I(o,"Đang cập nhật..."),E.putLayout(A,{header:x,footer:S,css:n,js:s,edit:t}).then(()=>{$(o,"Cập nhật thành công")}).catch(D=>{d(D.response.data.message)})},M=t=>{t.loadProjectData(k.edit);const p=["video","map","video","bootstrapIcon","map","model-3D","Masonry","quote","link-block","text-basic","text-section","column1","column2","column3","column3-7"],o=["gjs-open-import-webpage","open-templates","link-page","export-template"],r=["Extra","Blog","Layout","Short Codes"],{models:n}=t.BlockManager.getCategories();p.forEach(s=>t.BlockManager.remove(s)),o.forEach(s=>{t.Panels.removeButton("options",s)}),n.forEach(s=>{var c;return r.includes((c=s.get)==null?void 0:c.call(s,"id"))&&s.set("open",!1)})};return i.useEffect(()=>{E.getLayoutEdit().then(t=>{L(t[0]),B(!0)})},[]),i.useEffect(()=>{P===!0&&C(H())},[]),m.jsxs(q,{margin:0,header:"BỐ CỤC WEBSITE",children:[!u&&m.jsx("div",{children:"LOAdding"}),u&&m.jsx(w,{height:"calc(100vh - 56px)",configGrapeJs:M,scripts:(h=g[0])==null?void 0:h.scripts,styles:(f=g[0])==null?void 0:f.styles,pluginss:[{id:"grapesjs-component-icon",src:"http://localhost:8082/plugins/Icon/Indexlayout.js"},{id:"@silexlabs/grapesjs-filter-styles",src:"https://unpkg.com/@silexlabs/grapesjs-filter-styles@1.0.0/dist/index.js"},{id:"grapesjs-parser-postcss",src:"https://unpkg.com/grapesjs-parser-postcss@1.0.3/dist/index.js"}],plugins:[R,O,W,G,J,e.imageLink,e.header,e.footer,e.container,e.user,v.customType,v.customTypeSelect],savePage:T})]})};export{xt as default};
