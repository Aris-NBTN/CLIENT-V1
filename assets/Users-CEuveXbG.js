import{c as B,d as m,r,j as a,a9 as H,aa as L,ab as V,ac as i,ad as G,ae as k,af as Q,ag as X,ah as z}from"./index-BLzEd4n4.js";import{b7 as J}from"./Layout-Bst5Vo9z.js";import{E as j}from"./Table-Bxx_ZSAF.js";import{F as o,a as x,b as Y}from"./jspdf.es.min-CnS-_-p-.js";import{d as Z,e as $}from"./Format-DS4FwMn6.js";import{e as ee}from"./export-oiO0RVDw.js";import{F as l}from"./index-Bnj9Y8Ab.js";import{B as u}from"./button-BLmoP8MS.js";import{T}from"./index-D9h7xL2N.js";import{M as F}from"./index-BAdybpeW.js";import{T as ae}from"./index-SeUHU9Hv.js";import{I}from"./index-HT6McCpU.js";import{T as S}from"./index-DElj-M_7.js";import{S as te}from"./index-p5fWdFdd.js";import"./animate-D3eBM9nS.js";import"./index-BkE6QgOY.js";import"./index-BYI7st5n.js";import"./index-BkhA4-75.js";import"./index-Bk7VKPwO.js";import"./context-HDE3hCe4.js";import"./useClosable-DF0DdXx9.js";import"./EllipsisOutlined-DH7R3b3D.js";import"./Overflow-CE1sZDJR.js";import"./collapse-BbEVqHco.js";import"./useLocale-DWC3Bj2-.js";import"./PurePanel-CvO3W_SQ.js";import"./index-CXXaD3cS.js";import"./responsiveObserver-D88kR1tr.js";import"./iconUtil-DYKrIg6c.js";import"./compact-item-Dl7C-00r.js";import"./index-FEicpWCI.js";import"./index-BsiHLG3I.js";import"./TextArea-B8cMsvUT.js";import"./CheckOutlined-DnLyXb8r.js";import"./index-CjLK_A61.js";import"./index-CG4YCKAZ.js";import"./SearchOutlined-BUKY2D18.js";import"./index-GhZ32GV6.js";import"./ActionButton-DQkA6vFR.js";import"./html2canvas.esm-CBrSDip1.js";import"./row-BuGFnJt0.js";const Le=()=>{const t=B(),b=m(e=>{var d,C;return(C=(d=e.auth)==null?void 0:d.user)==null?void 0:C.userType}),{users:c,loading:h}=m(e=>e.users),{roles:s,loading:g}=m(e=>e.roles),{courses:f,loading:N}=m(e=>e.courses),[p]=l.useForm(),[n]=l.useForm(),[R,y]=r.useState(!1),[A,v]=r.useState(!1),D=r.useMemo(()=>c.map(e=>({...e,key:e._id,activeStatus:e.activeStatus?"Cho phép":"Chặn"})),[c]),w=r.useMemo(()=>s.map(e=>({...e,key:e._id})),[s]),q=r.useMemo(()=>f.map(e=>({key:e._id,label:e.name,value:e._id})),[f]),E=[{title:"Tên người dùng",dataIndex:"name",width:"10%",editable:!1,...o({dataIndex:"name"})},{title:"Email",dataIndex:"email",width:"10%",editable:!1,...o({dataIndex:"email"})},{title:"Điện Thoại",dataIndex:"phone",width:"7%",editable:!1,...o({dataIndex:"phone"})},{title:"Giới tính",dataIndex:"gender",width:"7%",type:"select",optionSelect:[{value:"Nam",label:"Nam"},{value:"Nữ",label:"Nữ"}],editable:!0,...x("gender",[{value:"Nam",text:"Nam"},{value:"Nữ",text:"Nữ"}])},{title:"Trạng Thái",dataIndex:"activeStatus",width:"7%",editable:!0,type:"select",optionSelect:[{value:!0,label:"Cho phép"},{value:!1,label:"Chặn"}],...x("activeStatus",[{value:"Cho phép",text:"Cho phép"},{value:"Chặn",text:"Chặn"}])},...b==="admin"?[{title:"Quyền",dataIndex:"userType",width:"7%",editable:!0,type:"select",optionSelect:Array.isArray(s)?s.map(e=>({value:e._id,label:e.nameRole})):[],...Array.isArray(s)&&s.length>0?x("userType",s.map(e=>({text:e.nameRole,value:e._id}))):{}}]:[],{title:"Ngày Tạo",dataIndex:"createdAt",width:"7%",...Y({dataIndex:"createdAt"}),render:e=>Z(e)},...b==="admin"?[{title:"Khóa học",dataIndex:"courseBuy",width:"6%",render:(e,d)=>a.jsx("div",{className:"flex justify-center",children:a.jsx(u,{type:"primary",ghost:!0,onClick:()=>{n.setFieldsValue(d),v(!0)},children:"Khóa học"})})}]:[]],P=[{title:"Tên quyền",dataIndex:"nameRole",width:"20%",editable:!0,...o({dataIndex:"nameRole"}),render:e=>a.jsx(T.Text,{ellipsis:{suffix:""},children:e})},{title:"Quản lý",dataIndex:"role",width:"40%",type:"select-multi",optionSelect:[{value:"adminWebsite",label:"Bài Viết"},{value:"adminCourses",label:"Khóa Học"},{value:"adminOrders",label:"Đơn Hàng"},{value:"adminFileManager",label:"File"}],editable:!0,...o({dataIndex:"name123"}),render:e=>a.jsx(a.Fragment,{children:a.jsx($,{keywords:e})})}],U=e=>{i(t,G(e))},K=e=>{e.activeStatus=e.activeStatus==="Chặn"?!1:e.activeStatus==="Cho phép"?!0:e.activeStatus,i(t,k(e))},O=e=>{i(t,Q(e),()=>{y(!1),p.resetFields()})},M=e=>{i(t,X(e))},_=e=>{i(t,z(e))},W=e=>{e.id=e.key,i(t,k(e))};return r.useEffect(()=>{h===!0&&(t(H()),t(L()))},[]),r.useEffect(()=>{N===!0&&t(V())},[]),a.jsxs(J,{header:"NGƯỜI DÙNG",button:a.jsxs(a.Fragment,{children:[a.jsx(u,{onClick:()=>y(!0),type:"primary",children:"Phân quyền"}),a.jsx(u,{onClick:()=>ee(c,"Users.xlsx"),type:"primary",children:"Xuất file Excel"})]}),children:[a.jsx(j,{loading:h,data:D,columns:E,onSave:K,onDelete:U}),a.jsx(F,{centered:!0,open:R,onCancel:()=>y(!1),footer:null,width:750,children:a.jsx(ae,{centered:!0,items:[{label:"Thêm quyền quản trị",key:"1",children:a.jsx(a.Fragment,{children:a.jsxs(l,{form:p,name:"customForm",layout:"vertical",onFinish:O,children:[a.jsx(l.Item,{className:"mb-3",name:"nameRole",label:"Tên quyền",rules:[{required:!0,message:"Nhập tên quyền!"}],children:a.jsx(I,{placeholder:"Nhập tên quyền"})}),a.jsx(l.Item,{className:"mb-3",name:"role",label:"Chức năng quản lý",rules:[{required:!0,message:"Chọn các quyền!"}],children:a.jsx(S,{treeDefaultExpandAll:!0,showSearch:!1,showCheckedStrategy:S.SHOW_PARENT,treeCheckable:!0,treeData:[{title:"Admin",children:[{key:"adminDashboard",value:"adminDashboard",label:"Trang chủ"},{key:"adminWebsite",value:"adminWebsite",label:"Bài Viết"},{key:"adminPlugins",value:"adminPlugins",label:"Plugins"},{key:"adminUsers",value:"adminUsers",label:"Người dùng"},{key:"adminWebsite",value:"adminCourses",label:"Khóa Học"},{key:"adminOrders",value:"adminOrders",label:"Đơn Hàng"},{key:"adminWebsite",value:"adminEmail",label:"Email"},{key:"adminFileManager",value:"adminFileManager",label:"File"},{key:"adminData",value:"adminData",label:"Dữ Liệu"},{key:"adminPayment",value:"adminPayment",label:"Key Thanh Toán"}]},{title:"User",value:"0-1",key:"0-1",children:[{title:"Trang chủ",value:"userDashboard",key:"userDashboard"},{title:"Thông tin",value:"userInfo",key:"userInfo"},{title:"Khóa học",value:"userCourses",key:"userCourses"},{title:"Lịch sử mua hàng",value:"userOrders",key:"userOrders"},{title:"Đổi mật khẩu",value:"userChangePassword",key:"userChangePassword"}]}],placeholder:"Chọn các quyền"})}),a.jsx(u,{type:"primary",loading:g,onClick:()=>p.submit(),className:"flex float-end",children:"Thêm quyền"})]})})},{label:"Chỉnh sửa quyền quản trị",key:"2",children:a.jsx(a.Fragment,{children:a.jsx(j,{loading:g,data:w,columns:P,scroll:{x:500,y:350},width:"10%",onSave:M,onDelete:_})})}]})}),a.jsx(F,{title:a.jsxs(a.Fragment,{children:["Khóa học của học viên: ",a.jsx(T.Text,{type:"danger",children:n.getFieldValue("name")})]}),centered:!0,open:A,onOk:()=>{n.submit()},onCancel:()=>{v(!1),n.resetFields()},confirmLoading:h,width:600,children:a.jsxs(l,{form:n,name:"customFormCourses",layout:"vertical",onFinish:W,children:[a.jsx(l.Item,{className:"mb-4 hidden",name:"key",label:"Khóa học",rules:[{required:!0,message:"Chọn khóa học cần kích hoạt!"}],children:a.jsx(I,{})}),a.jsx(l.Item,{className:"mb-4",name:"courses",label:"Kích hoạt khóa học",children:a.jsx(te,{mode:"multiple",options:q,placeholder:"Chọn khóa học cần kích hoạt"})})]})})]})};export{Le as default};
