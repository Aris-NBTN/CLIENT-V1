import{d as j,r,c as F,j as t,aJ as m}from"./index-bwOTuzAT.js";import{b7 as y}from"./Layout-Csu-sfMs.js";import{E as w}from"./Table-D0gfnNUA.js";import{F as c,b as p,a as N}from"./jspdf.es.min-D6lzqlLt.js";import{I as C}from"./Invoice-SGE5VmPe.js";import{e as E,a as A}from"./export-C2O8bRtN.js";import{d as h}from"./Format-D7-fwIh2.js";import{B as o}from"./TextArea-BSyf-wd8.js";import{M as D}from"./index-B-m8jKNI.js";import"./index-5Oj6Dx0r.js";import"./EllipsisOutlined-_3EUVNj_.js";import"./Overflow-BYLru37j.js";import"./CheckOutlined--i9GrI_G.js";import"./index-DnPka7B9.js";import"./index-DqlZTV-q.js";import"./index-Dlw4ObIR.js";import"./index-CR8zkw6M.js";import"./SearchOutlined-Bp-Ap9qm.js";import"./addEventListener-PYWGTrpz.js";import"./iconUtil-Cq-2CeaN.js";import"./index-DWrWMSyX.js";import"./index-DBSm4aWt.js";import"./index-Df598U2L.js";import"./index-nVbZcPSO.js";import"./row-Cbh7OpyR.js";import"./index-xLYEoOfd.js";import"./index-CYFdNklX.js";import"./html2canvas.esm-CBrSDip1.js";import"./index-JWdyHt5z.js";const rt=()=>{const{order:a,loading:d}=j(e=>e.order),[x,i]=r.useState(!1),[f,s]=r.useState(),u=F(),l=r.useRef(null),g=[{title:"Mã đơn hàng",dataIndex:"orderId",width:"10%",...c({dataIndex:"orderId"})},{title:"Người đặt hàng",dataIndex:"name",width:"15%",...c({dataIndex:"name"})},{title:"Ngày đặt",dataIndex:"createdAt",width:"10%",...p({dataIndex:"createdAt"}),render:e=>h(e)},{title:"Ngày thanh toán",dataIndex:"updatedAt",width:"10%",...p({dataIndex:"updatedAt"}),render:e=>h(e)},{title:"Trạng thái",dataIndex:"status",width:"10%",...N("status",[{value:!0,text:"Đã thanh toán"},{value:!1,text:"Chưa thanh toán"}]),render:e=>e===!0?t.jsx("span",{className:"text-success",children:"Đã thanh toán"}):t.jsx("span",{className:"text-danger",children:"Chưa thanh toán"})},{title:"Phương thức thanh toán",dataIndex:"paymentMethod",width:"14%"},{title:"Thông tin",dataIndex:"info",width:"11%",render:(e,n)=>t.jsx(t.Fragment,{children:t.jsx(o,{onClick:()=>{i(!0),s(n)},children:"Chi tiết đơn hàng"})})}],I=r.useMemo(()=>{var e;return(e=a==null?void 0:a.newData)==null?void 0:e.map(n=>({...n,key:n._id}))},[a]);return r.useEffect(()=>{d&&u(m({page:1,limit:localStorage.getItem("pageSize")||10}))},[]),t.jsxs(y,{header:t.jsx(t.Fragment,{children:t.jsx("div",{className:"flex items-center",children:t.jsx("h6",{className:"mb-0",children:"ĐƠN HÀNG"})})}),button:t.jsx(t.Fragment,{children:t.jsx(o,{onClick:()=>E(a,"Order.xlsx"),type:"primary",children:"Xuất file Excel"})}),children:[t.jsx(w,{dragMode:!1,Api:m,total:a==null?void 0:a.totalItems,loading:d,data:I,columns:g,colEdit:!1}),t.jsx(D,{centered:!0,open:x,onOk:()=>i(!1),onCancel:()=>{i(!1),s()},footer:t.jsxs(t.Fragment,{children:[t.jsx(o,{onClick:()=>{i(!1),s()},children:"Hủy"}),t.jsx(o,{type:"primary",onClick:()=>A(l),children:"Xuất file PDF"})]}),width:800,children:t.jsx("div",{ref:l,children:t.jsx(C,{info:f})})})]})};export{rt as default};
