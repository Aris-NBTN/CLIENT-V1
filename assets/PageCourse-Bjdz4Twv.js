import{u as L,q as I,s as c,r as e,x as j,b4 as w,b3 as G,j as u,aS as m,G as g,t as R}from"./index-Bd1JPvcl.js";import{b7 as $}from"./Layout-W3LOKDLp.js";import{P as q,p as D,b as F,a as J,B as r}from"./index-DpD8ijRX.js";import{p as K,a as d,b as M,c as z,d as h,B as U,e as H,t as N}from"./index-DjWcJNiG.js";import{p as O,a as Q,S as f}from"./index-BLZGZfSB.js";import"./index-DuyNhCpa.js";import"./EllipsisOutlined-D3RgMTin.js";import"./Overflow-DpT_j1eZ.js";import"./context-wqRSYxvZ.js";import"./index-BASv7Qct.js";import"./index-B7HXAEoT.js";import"./index-DL1dEdjL.js";import"./row-nnzDZOjk.js";import"./index-BoCxdkRm.js";import"./useLocale-BCPxCgGV.js";import"./TextArea-CbwmkXxT.js";import"./CheckOutlined-BdTlGpy5.js";import"./compact-item-C1WbefM3.js";import"./button-ufKoKsm6.js";import"./index-BI4eMhKo.js";import"./PurePanel-Cbfo2Nq5.js";import"./index-CIqbzuAJ.js";import"./SearchOutlined-DaeuOrvR.js";import"./Dropdown-CkyQIXy8.js";import"./index-CVNUbqh-.js";import"./index-BT0Un0La.js";import"./fileApi-wlJyTllo.js";import"./html2canvas.esm-CBrSDip1.js";const vt=()=>{const o=L(),p=I(),b=localStorage.getItem("name-course"),{pluginsScript:k,loading:P}=c(t=>t.pluginsScript),[i,S]=e.useState(),B=()=>{m.getChildrenPage(o).then(t=>{S(t.data)}).catch(()=>g("data","Lỗi lấy bài viết"))},v=(t,a)=>{m.putChildren({id:o==null?void 0:o.id,childId:o==null?void 0:o.childId,edit:t,content:a}).then(()=>R("data","Đã lưu bài viết")).catch(()=>g("data","Lỗi lưu bài viết"))},{plugins:n,loading:x}=c(t=>t.plugins),y=e.useMemo(()=>{var t;return(t=n==null?void 0:n.newData)==null?void 0:t.map(a=>({id:a.id,src:`${j}/uploads/${a.src}`}))},[n]),C=t=>{t.Panels.addButton("options",[{id:"google-fonts",className:"fa fa-font",attributes:{title:"Cài đặt kiểu chữ"},command:"open-fonts",togglable:!0,visible:!0}]);const a=["bootstrapIcon","link","quote","link-block","text-basic","text-section","column1","column2","column3","column3-7"],E=["open-templates","link-page"],T=["Extra","Blog","Layout","Short Codes"],{models:A}=t.BlockManager.getCategories();a.forEach(s=>t.BlockManager.remove(s)),E.forEach(s=>{t.Panels.removeButton("options",s)}),A.forEach(s=>{var l;return T.includes((l=s.get)==null?void 0:l.call(s,"id"))&&s.set("open",!1)})};return e.useEffect(()=>{x===!0&&p(w())},[]),e.useEffect(()=>{P===!0&&p(G())},[]),e.useEffect(()=>{B()},[]),u.jsx($,{margin:0,header:"Bài viết Bài Học",children:i&&u.jsx(q,{data:(i==null?void 0:i.edit)||"",configGrapeJs:C,height:"calc(100vh - 56px)",folder:b,pluginss:y,canvas:k[0],plugins:[D,F,K,d,J,M,z,h,O,Q,r.model3d,r.imageLink,r.masonry,U,f.customType,f.customTypeSelect,H,N],pluginsOpts:{[h]:{api_key:"AIzaSyAdJTYSLPlKz4w5Iqyy-JAF2o8uQKd1FKc"},[d]:{options:{extraPlugins:"dialogui,sharedspace,justify,colorbutton,panelbutton,font",language:"vi",toolbarGroups:[{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi","paragraph"]},{name:"links",groups:["links"]},{name:"insert",groups:["insert"]},"/",{name:"styles",groups:["styles"]},{name:"colors",groups:["colors"]},{name:"tools",groups:["tools"]},{name:"others",groups:["others"]}]},position:"center"}},savePage:v})})};export{vt as default};
