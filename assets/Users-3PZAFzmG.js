import{c as B,d as m,r,j as a,T as H,a9 as L,aa as V,ab as G,ac as i,ad as Q,ae as j,af as X,ag as z,ah as J}from"./index-Ftj3_0aj.js";import{b7 as Y}from"./Layout-B3M28nyH.js";import{E as T}from"./Table-wMaUFwER.js";import{F as o,a as y,b as Z}from"./jspdf.es.min-DHnqiL_Z.js";import{d as $,e as ee}from"./Format-5NuCslZg.js";import{e as ae}from"./export-D-vxtzxf.js";import{F as l}from"./index-CDEQdea5.js";import{T as b}from"./index-C_d1lzc2.js";import{B as u}from"./button-DkewC5Mw.js";import{M as F}from"./index-BSoGMHgZ.js";import{T as te}from"./index-BJLNWIFV.js";import{I}from"./index-CcvZSDKs.js";import{T as S}from"./index-DWt1yQeK.js";import{S as le}from"./index-WVaXGypX.js";import"./index-BGp8naKY.js";import"./EllipsisOutlined-y0OdX5Zm.js";import"./Overflow-C-uCjaY3.js";import"./context-DWgLY0xf.js";import"./index-DF7Ys5Yz.js";import"./index-CJr3lxXR.js";import"./useLocale-B6dDyN8h.js";import"./PurePanel-Bnt_qy0i.js";import"./Dropdown-D6X-jJmv.js";import"./index-DEBTHk3J.js";import"./addEventListener-DghQEVp_.js";import"./iconUtil-BdQ3JKZa.js";import"./compact-item-CwR_qmY_.js";import"./index-DJHK0TYG.js";import"./index-BeTyp-HH.js";import"./TextArea-DxLHDA9M.js";import"./CheckOutlined-C97N76ai.js";import"./index-q160Hcww.js";import"./index-DXbd8Gef.js";import"./SearchOutlined-BQATVaE1.js";import"./index-5EWYVEDS.js";import"./ActionButton-BHY_5SKW.js";import"./html2canvas.esm-CBrSDip1.js";import"./row-BilKgrsh.js";import"./index-BlyQbtbC.js";const He=()=>{const t=B(),g=m(e=>{var d,k;return(k=(d=e.auth)==null?void 0:d.user)==null?void 0:k.userType}),{users:c,loading:h}=m(e=>e.users),{roles:s,loading:f}=m(e=>e.roles),{courses:v,loading:N}=m(e=>e.courses),[p]=l.useForm(),[n]=l.useForm(),[R,x]=r.useState(!1),[w,C]=r.useState(!1),A=r.useMemo(()=>c.map(e=>({...e,key:e._id,activeStatus:e.activeStatus?"Cho phép":"Chặn"})),[c]),D=r.useMemo(()=>s.map(e=>({...e,key:e._id})),[s]),q=r.useMemo(()=>v.map(e=>({key:e._id,label:e.name,value:e._id})),[v]),E=[{title:"Tên người dùng",dataIndex:"name",width:"10%",editable:!1,ellipsis:{showTitle:!0},...o({dataIndex:"name"}),render:e=>a.jsx(H,{placement:"topLeft",title:e,children:e})},{title:"Email",dataIndex:"email",width:"10%",editable:!1,...o({dataIndex:"email"}),render:e=>a.jsx(a.Fragment,{children:a.jsx(b.Paragraph,{ellipsis:{suffix:""},children:e})})},{title:"Điện Thoại",dataIndex:"phone",width:"7%",editable:!1,...o({dataIndex:"phone"})},{title:"Giới tính",dataIndex:"gender",width:"7%",type:"select",optionSelect:[{value:"Nam",label:"Nam"},{value:"Nữ",label:"Nữ"}],editable:!0,...y("gender",[{value:"Nam",text:"Nam"},{value:"Nữ",text:"Nữ"}])},{title:"Trạng Thái",dataIndex:"activeStatus",width:"7%",editable:!0,type:"select",optionSelect:[{value:!0,label:"Cho phép"},{value:!1,label:"Chặn"}],...y("activeStatus",[{value:"Cho phép",text:"Cho phép"},{value:"Chặn",text:"Chặn"}])},...g==="admin"?[{title:"Quyền",dataIndex:"userType",width:"7%",editable:!0,type:"select",optionSelect:Array.isArray(s)?s.map(e=>({value:e._id,label:e.nameRole})):[],...Array.isArray(s)&&s.length>0?y("userType",s.map(e=>({text:e.nameRole,value:e._id}))):{}}]:[],{title:"Ngày Tạo",dataIndex:"createdAt",width:"7%",...Z({dataIndex:"createdAt"}),render:e=>$(e)},...g==="admin"?[{title:"Khóa học",dataIndex:"courseBuy",width:"6%",render:(e,d)=>a.jsx("div",{className:"flex justify-center",children:a.jsx(u,{type:"primary",ghost:!0,onClick:()=>{n.setFieldsValue(d),C(!0)},children:"Khóa học"})})}]:[]],P=[{title:"Tên quyền",dataIndex:"nameRole",width:"20%",editable:!0,...o({dataIndex:"nameRole"}),render:e=>a.jsx(b.Text,{ellipsis:{suffix:""},children:e})},{title:"Quản lý",dataIndex:"role",width:"40%",type:"select-multi",optionSelect:[{value:"adminWebsite",label:"Bài Viết"},{value:"adminCourses",label:"Khóa Học"},{value:"adminOrders",label:"Đơn Hàng"},{value:"adminFileManager",label:"File"}],editable:!0,...o({dataIndex:"name123"}),render:e=>a.jsx(a.Fragment,{children:a.jsx(ee,{keywords:e})})}],U=e=>{i(t,Q(e))},K=e=>{e.activeStatus=e.activeStatus==="Chặn"?!1:e.activeStatus==="Cho phép"?!0:e.activeStatus,i(t,j(e))},O=e=>{i(t,X(e),()=>{x(!1),p.resetFields()})},M=e=>{i(t,z(e))},_=e=>{i(t,J(e))},W=e=>{e.id=e.key,i(t,j(e))};return r.useEffect(()=>{h===!0&&(t(L()),t(V()))},[]),r.useEffect(()=>{N===!0&&t(G())},[]),a.jsxs(Y,{header:"NGƯỜI DÙNG",button:a.jsxs(a.Fragment,{children:[a.jsx(u,{onClick:()=>x(!0),type:"primary",children:"Phân quyền"}),a.jsx(u,{onClick:()=>ae(c,"Users.xlsx"),type:"primary",children:"Xuất file Excel"})]}),children:[a.jsx(T,{loading:h,data:A,columns:E,onSave:K,onDelete:U}),a.jsx(F,{centered:!0,open:R,onCancel:()=>x(!1),footer:null,width:750,children:a.jsx(te,{centered:!0,items:[{label:"Thêm quyền quản trị",key:"1",children:a.jsx(a.Fragment,{children:a.jsxs(l,{form:p,name:"customForm",layout:"vertical",onFinish:O,children:[a.jsx(l.Item,{className:"mb-3",name:"nameRole",label:"Tên quyền",rules:[{required:!0,message:"Nhập tên quyền!"}],children:a.jsx(I,{placeholder:"Nhập tên quyền"})}),a.jsx(l.Item,{className:"mb-3",name:"role",label:"Chức năng quản lý",rules:[{required:!0,message:"Chọn các quyền!"}],children:a.jsx(S,{treeDefaultExpandAll:!0,showSearch:!1,showCheckedStrategy:S.SHOW_PARENT,treeCheckable:!0,treeData:[{title:"Admin",children:[{key:"adminDashboard",value:"adminDashboard",label:"Trang chủ"},{key:"adminWebsite",value:"adminWebsite",label:"Bài Viết"},{key:"adminPlugins",value:"adminPlugins",label:"Plugins"},{key:"adminUsers",value:"adminUsers",label:"Người dùng"},{key:"adminWebsite",value:"adminCourses",label:"Khóa Học"},{key:"adminOrders",value:"adminOrders",label:"Đơn Hàng"},{key:"adminWebsite",value:"adminEmail",label:"Email"},{key:"adminFileManager",value:"adminFileManager",label:"File"},{key:"adminData",value:"adminData",label:"Dữ Liệu"},{key:"adminPayment",value:"adminPayment",label:"Key Thanh Toán"}]},{title:"User",value:"0-1",key:"0-1",children:[{title:"Trang chủ",value:"userDashboard",key:"userDashboard"},{title:"Thông tin",value:"userInfo",key:"userInfo"},{title:"Khóa học",value:"userCourses",key:"userCourses"},{title:"Lịch sử mua hàng",value:"userOrders",key:"userOrders"},{title:"Đổi mật khẩu",value:"userChangePassword",key:"userChangePassword"}]}],placeholder:"Chọn các quyền"})}),a.jsx(u,{type:"primary",loading:f,onClick:()=>p.submit(),className:"flex float-end",children:"Thêm quyền"})]})})},{label:"Chỉnh sửa quyền quản trị",key:"2",children:a.jsx(a.Fragment,{children:a.jsx(T,{loading:f,data:D,columns:P,scroll:{x:500,y:350},width:"10%",onSave:M,onDelete:_})})}]})}),a.jsx(F,{title:a.jsxs(a.Fragment,{children:["Khóa học của học viên: ",a.jsx(b.Text,{type:"danger",children:n.getFieldValue("name")})]}),centered:!0,open:w,onOk:()=>{n.submit()},onCancel:()=>{C(!1),n.resetFields()},confirmLoading:h,width:600,children:a.jsxs(l,{form:n,name:"customFormCourses",layout:"vertical",onFinish:W,children:[a.jsx(l.Item,{className:"mb-4 hidden",name:"key",label:"Khóa học",rules:[{required:!0,message:"Chọn khóa học cần kích hoạt!"}],children:a.jsx(I,{})}),a.jsx(l.Item,{className:"mb-4",name:"courses",label:"Kích hoạt khóa học",children:a.jsx(le,{mode:"multiple",options:q,placeholder:"Chọn khóa học cần kích hoạt"})})]})})]})};export{He as default};
