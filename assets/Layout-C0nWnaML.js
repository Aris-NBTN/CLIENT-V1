import{r as s,q,s as c,y as w,b7 as k,b8 as I,b9 as R,j as d,I as g,A as O,ba as W,t as G}from"./index-6AfYbl-K.js";import{b7 as J}from"./Layout-DARDxYOA.js";import{P as N,p as U,b as _,a as z,B as a}from"./index-uMq9McVO.js";import{p as K,a as Q,S as B}from"./index-BLZGZfSB.js";import"./index-7JilEvWs.js";import"./EllipsisOutlined-CLWcPuTv.js";import"./Overflow-CTLObAd3.js";import"./context-BpHl7iEz.js";import"./index-CecO4LnH.js";import"./index-C3nRum2W.js";import"./index-BDqapfMa.js";import"./row-Bgy8XCwY.js";import"./index-BcwvvWET.js";import"./useLocale-B5IigTwq.js";import"./TextArea-D899ar1i.js";import"./useVariants-B8E7oZP8.js";import"./compact-item-CRXRFQ0U.js";import"./CheckOutlined-dq0Gckb5.js";import"./button-Czt-CxNq.js";import"./index-v3e6hEig.js";import"./PurePanel-DFgSlsd-.js";import"./index-CsVqu72X.js";import"./SearchOutlined-CNqk3EOE.js";import"./Dropdown-Dk-edO6X.js";import"./index-B6e-1niT.js";import"./index-Bm2zEGaQ.js";import"./fileApi-UsiM3wmT.js";const Lt=()=>{var E,v;const[C,j]=s.useState(""),[h,T]=s.useState(!1),f=q(),S=c(t=>t.pluginsScript.pluginsScript),M=c(t=>t.pluginsScript.loading),{plugins:i,loading:b}=c(t=>t.plugins),{pluginsScript:A}=c(t=>t.pluginsScript),D=s.useMemo(()=>{var t;return(t=i==null?void 0:i.newData)==null?void 0:t.map(o=>({id:o.id,src:`${w}/uploads/${o.src}`}))},[i]),$=(t,o)=>{const r=new Date,{html:n,css:l,js:e}=o,y=new DOMParser().parseFromString(n,"text/html"),p=y.querySelector("#Header"),u=y.querySelector("#Footer");let x="",L="";const P=n.match(/<body[^>]*>([\s\S]*?)<\/body>/i);if(P&&P[1].trim()===""&&console.log("không có dữ liệu"),!p){g("Chưa có Header!");return}if(!u){g("Chưa có Footer!");return}p&&(x=`<div class="${p.className}">${p.innerHTML}</div>`),u&&(L=`<div id="Footer">${u.innerHTML}</div>`),O(r,"Đang cập nhật..."),k.putLayout(W,{header:x,footer:L,css:l,js:e,edit:t}).then(()=>{G(r,"Cập nhật thành công")}).catch(H=>{g(H.response.data.message)})},F=t=>{t.loadProjectData(C.edit);const o=["video","map","video","bootstrapIcon","map","model-3D","Masonry","quote","link-block","text-basic","text-section","column1","column2","column3","column3-7"],r=["gjs-open-import-webpage","open-templates","link-page","export-template"],n=["Extra","Blog","Layout","Short Codes"],{models:l}=t.BlockManager.getCategories();o.forEach(e=>t.BlockManager.remove(e)),r.forEach(e=>{t.Panels.removeButton("options",e)}),l.forEach(e=>{var m;return n.includes((m=e.get)==null?void 0:m.call(e,"id"))&&e.set("open",!1)})};return s.useEffect(()=>{k.getLayoutEdit().then(t=>{j(t[0]),T(!0)})},[]),s.useEffect(()=>{M===!0&&f(I())},[]),s.useEffect(()=>{b===!0&&f(R())},[]),d.jsxs(J,{margin:0,header:"BỐ CỤC WEBSITE",children:[!h&&d.jsx("div",{children:"LOAdding"}),h&&!b&&d.jsx(N,{height:"calc(100vh - 56px)",configGrapeJs:F,scripts:(E=S[0])==null?void 0:E.scripts,styles:(v=S[0])==null?void 0:v.styles,pluginss:D,plugins:[U,_,z,K,Q,a.imageLink,a.header,a.footer,a.container,a.user,B.customType,B.customTypeSelect],canvas:A[0],savePage:$})]})};export{Lt as default};
