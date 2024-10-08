import{r as o,a0 as I,e as y,j as t,x as v,bn as w,t as N,G as D,q as T,s as A,b4 as c,ai as m,bo as S,bp as F,bq as M}from"./index-Bd1JPvcl.js";import{b7 as U}from"./Layout-W3LOKDLp.js";import{E as C}from"./Table-qeynNYVd.js";import{U as E}from"./index-CaKCjST_.js";import{B as g}from"./button-ufKoKsm6.js";import{d as h,h as k}from"./Format-DNSsZoBC.js";import{F as n}from"./index-Cwo-VUSW.js";import{M as q}from"./index-BT0Un0La.js";import{I as p}from"./index-CWWA39Vx.js";import{S as H}from"./index-BI4eMhKo.js";import{D as K}from"./index-Bxo_R5JN.js";import"./index-DuyNhCpa.js";import"./EllipsisOutlined-D3RgMTin.js";import"./Overflow-DpT_j1eZ.js";import"./context-wqRSYxvZ.js";import"./index-BASv7Qct.js";import"./index-B7HXAEoT.js";import"./index-DL1dEdjL.js";import"./row-nnzDZOjk.js";import"./index-BoCxdkRm.js";import"./useLocale-BCPxCgGV.js";import"./TextArea-CbwmkXxT.js";import"./CheckOutlined-BdTlGpy5.js";import"./compact-item-C1WbefM3.js";import"./PurePanel-Cbfo2Nq5.js";import"./Dropdown-CkyQIXy8.js";import"./index-CVNUbqh-.js";import"./iconUtil-C6jxXjqj.js";import"./index-DZOC5dJR.js";import"./index-CIqbzuAJ.js";import"./index-BO91-lYD.js";import"./SearchOutlined-DaeuOrvR.js";import"./index-wqr7Dg1a.js";import"./progress-BJ18a4Vs.js";var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},V=function(i,s){return o.createElement(I,y({},i,{ref:s,icon:O}))},_=o.forwardRef(V);const z=({name:a,id:i})=>t.jsx(E,{name:"filePlugins",multiple:!1,action:`${v}/v1/plugins/file-plugin`,headers:{Authorization:"Bearer "+localStorage.getItem("token")},onChange:s=>{const{response:l}=s.file;s.file.status==="done"?(w.put({_id:i,src:l.src}),N("upload","Tải file thành công!","Đã thêm plugins mới")):s.file.status==="error"&&D("upload","Tải file không thành công!",l.message)},children:t.jsx(g,{icon:t.jsx(_,{}),children:a})}),ve=()=>{const a=T(),[i]=n.useForm(),[s,l]=o.useState(!1),{plugins:r,loading:u}=A(e=>e.plugins),f=o.useMemo(()=>{var e;return(e=r==null?void 0:r.newData)==null?void 0:e.map(d=>({...d,key:d._id}))},[r]),x=[{title:"ID",dataIndex:"id",width:"15%",ellipsis:{showTitle:!0}},{title:"Tên Plugins",dataIndex:"name",width:"15%",editable:!0},{title:"Mô tả",dataIndex:"description",width:"15%",editable:!0},{title:"Trang thái",dataIndex:"status",type:"select",width:"8%",editable:!0,optionSelect:[{label:"Hoạt động",value:!0},{label:"Không hoạt động",value:!1}],render:e=>e?"Hoạt động":"Không hoạt động"},{title:"Ngày thêm",dataIndex:"createdAt",width:"8%",render:e=>h(e)},{title:"Hết hạn",dataIndex:"expiry",width:"8%",render:e=>e?h(e):"Vĩnh viễn"},{title:"Ngày cập nhập",dataIndex:"updatedAt",width:"10%",render:e=>k(e)},{title:"File",dataIndex:"src",width:"10%",render:(e,d)=>t.jsx("div",{className:"flex justify-center",children:t.jsx(z,{id:d._id,name:e?"Cập nhập":"Tải lên"})})}],b=e=>{m(a,S(e),()=>{l(!1),i.resetFields()})},P=e=>{e._id=e.id,delete e.id,m(a,F(e))},j=e=>{m(a,M(e))};return o.useEffect(()=>{u&&a(c({page:1,limit:localStorage.getItem("pageSize")||10}))},[]),t.jsxs(U,{header:"PLUGINS",button:t.jsx(g,{onClick:()=>l(!0),type:"primary",children:"Thêm Plugins"}),children:[t.jsx(C,{dragMode:!1,Api:c,total:r==null?void 0:r.totalItems,loading:u,data:f,columns:x,onSave:P,onDelete:j}),t.jsx(q,{title:"Thêm Plugins",centered:!0,open:s,onOk:()=>i.submit(),onCancel:()=>l(!1),children:t.jsxs(n,{form:i,onFinish:b,layout:"vertical",children:[t.jsx(n.Item,{name:"name",className:"!mb-2",label:"Tên Plugins",rules:[{required:!0,message:"Nhập tên Plugins!"}],children:t.jsx(p,{placeholder:"Nhập tên pluigns",onKeyDown:e=>e.stopPropagation()})}),t.jsx(n.Item,{name:"id",className:"!mb-2",label:"ID",rules:[{required:!0,message:"Nhập id!"}],children:t.jsx(p,{placeholder:"Nhập tên pluigns",onKeyDown:e=>e.stopPropagation()})}),t.jsx(n.Item,{name:"status",className:"!mb-2",label:"Trang thái",rules:[{required:!0,message:"Chọn trang thái!"}],children:t.jsx(H,{placeholder:"Chọn trang thái",options:[{label:"Hoạt động",value:!0},{label:"Không hoạt động",value:!1}]})}),t.jsx(n.Item,{name:"description",className:"!mb-2",label:"Mô tả",rules:[{required:!0,message:"Nhập mô tả!"}],children:t.jsx(p,{placeholder:"Nhập tên pluigns",onKeyDown:e=>e.stopPropagation()})}),t.jsx(n.Item,{name:"expiry",className:"!mb-2",label:"Ngày hết hạn",children:t.jsx(K,{style:{width:"100%"}})})]})})]})};export{ve as default};
