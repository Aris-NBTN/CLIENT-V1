import{r as s,d as u,f as H,c as R,aJ as k,aK as q,aL as w,j as m,V as d,a1 as I,aM as J,e as O}from"./index-DlI1B2Q-.js";import{b7 as W}from"./Layout-BQVh_zxm.js";import{P as G,p as K,b as N,a as U,c as V,d as _,B as o}from"./index-Dth-7FFi.js";import{S as B}from"./index-BcZ8U7N5.js";import"./index-B3pLzQmz.js";import"./TextArea-DnM4TqAe.js";import"./CheckOutlined-D2NUDnSW.js";import"./EllipsisOutlined-DqFDUBbd.js";import"./Overflow-IUDK7h4x.js";import"./index-C_OZ8jyW.js";import"./index-Doi18fZP.js";import"./index-tVLsb9Df.js";import"./index-NWcpnsSN.js";import"./SearchOutlined-DhA0Ep-w.js";import"./GrapeJs-C9v-ybRK.js";import"./fileApi-nJCK28ZM.js";import"./row-Dml-BTfG.js";const mt=()=>{var b,v;const[C,j]=s.useState(""),[g,M]=s.useState(!1),f=u(t=>t.pluginsScript.pluginsScript),T=u(t=>t.pluginsScript.loading),{plugins:h,loading:S}=u(t=>t.plugins),$=s.useMemo(()=>h.map(t=>({id:t.id,src:`${H}/uploads/${t.src}`})),[h]),E=R(),A=(t,r)=>{const a=new Date,{html:i,css:c,js:e}=r,x=new DOMParser().parseFromString(i,"text/html"),n=x.querySelector("#Header"),l=x.querySelector("#Footer");let y="",L="";const P=i.match(/<body[^>]*>([\s\S]*?)<\/body>/i);if(P&&P[1].trim()===""&&console.log("không có dữ liệu"),!n){d("Chưa có Header!");return}if(!l){d("Chưa có Footer!");return}n&&(y=`<div class="${n.className}">${n.innerHTML}</div>`),l&&(L=`<div id="Footer">${l.innerHTML}</div>`),I(a,"Đang cập nhật..."),k.putLayout(J,{header:y,footer:L,css:c,js:e,edit:t}).then(()=>{O(a,"Cập nhật thành công")}).catch(F=>{d(F.response.data.message)})},D=t=>{t.loadProjectData(C.edit);const r=["video","map","video","bootstrapIcon","map","model-3D","Masonry","quote","link-block","text-basic","text-section","column1","column2","column3","column3-7"],a=["gjs-open-import-webpage","open-templates","link-page","export-template"],i=["Extra","Blog","Layout","Short Codes"],{models:c}=t.BlockManager.getCategories();r.forEach(e=>t.BlockManager.remove(e)),a.forEach(e=>{t.Panels.removeButton("options",e)}),c.forEach(e=>{var p;return i.includes((p=e.get)==null?void 0:p.call(e,"id"))&&e.set("open",!1)})};return s.useEffect(()=>{k.getLayoutEdit().then(t=>{j(t[0]),M(!0)})},[]),s.useEffect(()=>{T===!0&&E(q())},[]),s.useEffect(()=>{S===!0&&E(w())},[]),m.jsxs(W,{margin:0,header:"BỐ CỤC WEBSITE",children:[!g&&m.jsx("div",{children:"LOAdding"}),g&&!S&&m.jsx(G,{height:"calc(100vh - 56px)",configGrapeJs:D,scripts:(b=f[0])==null?void 0:b.scripts,styles:(v=f[0])==null?void 0:v.styles,pluginss:$,plugins:[K,N,U,V,_,o.imageLink,o.header,o.footer,o.container,o.user,B.customType,B.customTypeSelect],savePage:A})]})};export{mt as default};
