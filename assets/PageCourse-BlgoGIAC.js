import{u as L,q as I,s as c,r as e,w as j,b4 as w,b3 as R,j as u,aN as m,E as g,t as $}from"./index-Cc-1vpYl.js";import{b7 as q}from"./Layout-733AEOU8.js";import{P as D,p as F,b as G,a as J,B as r}from"./index-Cb_niReO.js";import{p as K,a as d,b as M,c as z,d as h,B as N,e as U,t as H}from"./index-DoPg2_iF.js";import{p as O,a as Q,S as f}from"./index-Dg-iPfYn.js";import"./index-CG-qH4GJ.js";import"./EllipsisOutlined-D0dVKAMB.js";import"./Overflow-DMuMV_Su.js";import"./context-rMj-ykUU.js";import"./index-Cm-otAoX.js";import"./index-BmQX2tAk.js";import"./index-DUp2AJIR.js";import"./row-D_YbyT5k.js";import"./index-D0fWuZLb.js";import"./useLocale-CQArx0VH.js";import"./TextArea-BA3qAdpn.js";import"./CheckOutlined-BwGAYYAr.js";import"./compact-item-Cwd_vZD_.js";import"./button-DdLP26k3.js";import"./index-BdWzYs5L.js";import"./PurePanel-78eoImhg.js";import"./index-Buo2xWbB.js";import"./SearchOutlined-B6ysJDXa.js";import"./Dropdown-BFwukFt_.js";import"./index-DQ64fGs7.js";import"./index-DPY8sSwT.js";import"./fileApi-DefVh1X3.js";import"./html2canvas.esm-CBrSDip1.js";const vt=()=>{const o=L(),p=I(),b=localStorage.getItem("name-course"),{pluginsScript:k,loading:P}=c(t=>t.pluginsScript),[i,S]=e.useState(),B=()=>{m.getChildrenPage(o).then(t=>{S(t.data)}).catch(()=>g("data","Lỗi lấy bài viết"))},v=(t,a)=>{m.putChildren({id:o==null?void 0:o.id,childId:o==null?void 0:o.childId,edit:t,content:a}).then(()=>$("data","Đã lưu bài viết")).catch(()=>g("data","Lỗi lưu bài viết"))},{plugins:n,loading:y}=c(t=>t.plugins),x=e.useMemo(()=>{var t;return(t=n==null?void 0:n.newData)==null?void 0:t.map(a=>({id:a.id,src:`${j}/uploads/${a.src}`}))},[n]),E=t=>{t.Panels.addButton("options",[{id:"google-fonts",className:"fa fa-font",attributes:{title:"Cài đặt kiểu chữ"},command:"open-fonts",togglable:!0,visible:!0}]);const a=["bootstrapIcon","link","quote","link-block","text-basic","text-section","column1","column2","column3","column3-7"],C=["open-templates","link-page"],T=["Extra","Blog","Layout","Short Codes"],{models:A}=t.BlockManager.getCategories();a.forEach(s=>t.BlockManager.remove(s)),C.forEach(s=>{t.Panels.removeButton("options",s)}),A.forEach(s=>{var l;return T.includes((l=s.get)==null?void 0:l.call(s,"id"))&&s.set("open",!1)})};return e.useEffect(()=>{y===!0&&p(w())},[]),e.useEffect(()=>{P===!0&&p(R())},[]),e.useEffect(()=>{B()},[]),u.jsx(q,{margin:0,header:"Bài viết Bài Học",children:i&&u.jsx(D,{data:(i==null?void 0:i.edit)||"",configGrapeJs:E,height:"calc(100vh - 56px)",folder:b,pluginss:x,canvas:k[0],plugins:[F,G,K,d,J,M,z,h,O,Q,r.model3d,r.imageLink,r.masonry,N,f.customType,f.customTypeSelect,U,H],pluginsOpts:{[h]:{api_key:"AIzaSyAdJTYSLPlKz4w5Iqyy-JAF2o8uQKd1FKc"},[d]:{options:{extraPlugins:"dialogui,sharedspace,justify,colorbutton,panelbutton,font",language:"vi",toolbarGroups:[{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi","paragraph"]},{name:"links",groups:["links"]},{name:"insert",groups:["insert"]},"/",{name:"styles",groups:["styles"]},{name:"colors",groups:["colors"]},{name:"tools",groups:["tools"]},{name:"others",groups:["others"]}]},position:"center"}},savePage:v})})};export{vt as default};
