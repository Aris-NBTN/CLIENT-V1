import{r as o,d as m,f as H,c as R,aJ as k,aK as q,aL as w,j as u,V as d,a1 as I,aM as J,e as O}from"./index-Ftj3_0aj.js";import{b7 as W}from"./Layout-B3M28nyH.js";import{P as G,p as K,b as N,a as U,c as V,d as _,B as s}from"./index-eYT0jvT4.js";import{S as B}from"./index-BcZ8U7N5.js";import"./index-BGp8naKY.js";import"./EllipsisOutlined-y0OdX5Zm.js";import"./Overflow-C-uCjaY3.js";import"./context-DWgLY0xf.js";import"./index-DF7Ys5Yz.js";import"./index-CJr3lxXR.js";import"./button-DkewC5Mw.js";import"./index-BeTyp-HH.js";import"./compact-item-CwR_qmY_.js";import"./index-C_d1lzc2.js";import"./useLocale-B6dDyN8h.js";import"./TextArea-DxLHDA9M.js";import"./CheckOutlined-C97N76ai.js";import"./index-WVaXGypX.js";import"./PurePanel-Bnt_qy0i.js";import"./index-q160Hcww.js";import"./SearchOutlined-BQATVaE1.js";import"./Dropdown-D6X-jJmv.js";import"./index-DEBTHk3J.js";import"./GrapeJs-DtM93srg.js";import"./fileApi-Dh3n0-Er.js";import"./row-BilKgrsh.js";const xt=()=>{var b,v;const[C,j]=o.useState(""),[g,M]=o.useState(!1),f=m(t=>t.pluginsScript.pluginsScript),T=m(t=>t.pluginsScript.loading),{plugins:h,loading:S}=m(t=>t.plugins),$=o.useMemo(()=>h.map(t=>({id:t.id,src:`${H}/uploads/${t.src}`})),[h]),E=R(),A=(t,n)=>{const a=new Date,{html:i,css:c,js:e}=n,x=new DOMParser().parseFromString(i,"text/html"),r=x.querySelector("#Header"),l=x.querySelector("#Footer");let y="",L="";const P=i.match(/<body[^>]*>([\s\S]*?)<\/body>/i);if(P&&P[1].trim()===""&&console.log("không có dữ liệu"),!r){d("Chưa có Header!");return}if(!l){d("Chưa có Footer!");return}r&&(y=`<div class="${r.className}">${r.innerHTML}</div>`),l&&(L=`<div id="Footer">${l.innerHTML}</div>`),I(a,"Đang cập nhật..."),k.putLayout(J,{header:y,footer:L,css:c,js:e,edit:t}).then(()=>{O(a,"Cập nhật thành công")}).catch(F=>{d(F.response.data.message)})},D=t=>{t.loadProjectData(C.edit);const n=["video","map","video","bootstrapIcon","map","model-3D","Masonry","quote","link-block","text-basic","text-section","column1","column2","column3","column3-7"],a=["gjs-open-import-webpage","open-templates","link-page","export-template"],i=["Extra","Blog","Layout","Short Codes"],{models:c}=t.BlockManager.getCategories();n.forEach(e=>t.BlockManager.remove(e)),a.forEach(e=>{t.Panels.removeButton("options",e)}),c.forEach(e=>{var p;return i.includes((p=e.get)==null?void 0:p.call(e,"id"))&&e.set("open",!1)})};return o.useEffect(()=>{k.getLayoutEdit().then(t=>{j(t[0]),M(!0)})},[]),o.useEffect(()=>{T===!0&&E(q())},[]),o.useEffect(()=>{S===!0&&E(w())},[]),u.jsxs(W,{margin:0,header:"BỐ CỤC WEBSITE",children:[!g&&u.jsx("div",{children:"LOAdding"}),g&&!S&&u.jsx(G,{height:"calc(100vh - 56px)",configGrapeJs:D,scripts:(b=f[0])==null?void 0:b.scripts,styles:(v=f[0])==null?void 0:v.styles,pluginss:$,plugins:[K,N,U,V,_,s.imageLink,s.header,s.footer,s.container,s.user,B.customType,B.customTypeSelect],savePage:A})]})};export{xt as default};
