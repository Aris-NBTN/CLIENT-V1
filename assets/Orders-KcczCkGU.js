import{t as I,j as e,d as w,r,c as A,aX as C}from"./index-DE5XhBCr.js";import{b7 as k}from"./Layout-BEdbvo9Y.js";import{E}from"./Table-B1rLdSug.js";import{F as h,b as x,a as M}from"./jspdf.es.min-FNCWi2lQ.js";import{j as p,m as P,n as j,o as D}from"./index-BwCU8U38.js";import{a as N}from"./index-DNxK5pi3.js";import{i as u,F as H,d as g}from"./Format-Ch5CMtAa.js";import{R as f,C as d}from"./row-2mV1AMPv.js";import{T as l}from"./index-D9MB6VQ_.js";import{e as O,a as R}from"./export-gj5Vd9dJ.js";import{B as c}from"./button-D_f20KL0.js";import{M as S}from"./index-B8kpoSAP.js";import"./animate-CNPIBgQA.js";import"./context-CsfdzBwd.js";import"./index-ryfAGLJW.js";import"./index-B_khmHK4.js";import"./EllipsisOutlined-DMUE7OaF.js";import"./Overflow-Bn3H8H0j.js";import"./collapse-BbEVqHco.js";import"./index-D-46KyVB.js";import"./PurePanel-CXcxwk_K.js";import"./CheckOutlined-Do-_RANe.js";import"./index-DVbmQFHF.js";import"./useLocale-BqnSk2g0.js";import"./compact-item-j-IwINpD.js";import"./SearchOutlined-DoyMI1tW.js";import"./index-DvgPVpEV.js";import"./responsiveObserver-D_NtFPG1.js";import"./iconUtil-BDrrqbb0.js";import"./index-DSPFlQrT.js";import"./index-vvjVAyMb.js";import"./TextArea-DbcwDeGW.js";import"./index-BVQ3Ovgn.js";import"./index-DMuL5-0R.js";import"./index-Cz5Mk_UM.js";import"./index-BFRZXTbx.js";import"./ActionButton-MYhLG2Zg.js";import"./html2canvas.esm-CBrSDip1.js";const K=({info:s})=>{const{token:{colorPrimary:n}}=I.useToken();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"invoice-wrapper",children:e.jsx("div",{className:"invoice",children:e.jsxs("div",{className:"invoice-container",children:[e.jsxs("div",{className:"invoice-head",children:[e.jsxs(f,{children:[e.jsx(d,{md:{span:12},span:24,children:e.jsx("img",{className:"h-20",src:"https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"})}),e.jsx(d,{className:"flex justify-end items-center invoice-head-top-right text-end",md:{span:12},span:24,children:e.jsx("h3",{className:"!mb-0",style:{color:n},children:"HÓA ĐƠN"})})]}),e.jsx("div",{className:"hr !mb-1"}),e.jsxs("div",{className:"invoice-head-middle",children:[e.jsx("div",{className:"invoice-head-middle-left text-start",children:e.jsxs("p",{className:"!mb-0",children:[e.jsx("span",{className:"text-bold",children:"Ngày đặt hàng: "}),u(s.createdAt)]})}),e.jsx("div",{className:"invoice-head-middle-right text-end",children:e.jsx("p",{className:"!mb-0",children:e.jsxs("span",{className:"text-bold",children:["Mã Đơn Hàng: ",s.orderId," "]})})})]}),e.jsx("div",{className:"hr !mb-1"}),s.status===!0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"invoice-head-middle",children:[e.jsx("div",{className:"invoice-head-middle-left text-start",children:e.jsxs("p",{className:"!mb-0",children:[e.jsx("span",{className:"text-bold",children:"Ngày thanh toán: "}),u(s.updatedAt)]})}),e.jsx("div",{className:"invoice-head-middle-right text-end",children:e.jsx("p",{className:"!mb-0",children:e.jsxs("span",{className:"text-bold",children:["Phương thức thanh toán: ",s.orderId," "]})})})]}),e.jsx("div",{className:"hr !mb-1"})]}),e.jsxs(f,{children:[e.jsx(d,{md:{span:12},span:24,children:e.jsxs("ul",{children:[e.jsx("li",{className:"text-bold",children:"Người mua hàng:"}),e.jsxs("li",{className:"flex items-center gap-2 !mb-1",children:[" ",e.jsx(p,{})," ",s.name]}),e.jsxs("li",{className:"flex items-center gap-2 !mb-1",children:[" ",e.jsx(P,{})," ",s.phone]}),e.jsxs("li",{className:"flex items-center gap-2 !mb-1",children:[" ",e.jsx(N,{})," ",s.email]}),e.jsxs("li",{className:"flex items-center gap-2 !mb-1",children:[" ",e.jsx(j,{})," ",s.address]})]})}),e.jsx(d,{md:{span:12},span:24,children:e.jsxs("ul",{className:"text-end",children:[e.jsx("li",{className:"text-bold flex justify-end items-center",children:"Người nhận:"}),e.jsxs("li",{className:"flex justify-end items-center gap-2 !mb-1",children:["Tự Học 3D ",e.jsx(p,{})]}),e.jsxs("li",{className:"flex justify-end items-center gap-2 !mb-1",children:["2705 ",e.jsx(D,{})]}),e.jsxs("li",{className:"flex justify-end items-center gap-2 !mb-1",children:["Orange, ",e.jsx(N,{})]}),e.jsxs("li",{className:"flex justify-end items-center gap-2 !mb-1",children:["contact@koiceinc.com ",e.jsx(j,{})]})]})})]})]}),e.jsx("div",{className:"overflow-view pt-2",children:e.jsxs("div",{className:"invoice-body",children:[e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-bold",children:"Mã Khóa Học"}),e.jsx("td",{className:"text-bold",children:"Tên Khóa Học"}),e.jsx("td",{className:"text-bold",children:"Giá Tiền"})]})}),s.product.map((i,a)=>e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.name}),e.jsx("td",{className:"text-start",children:e.jsx(l.Text,{type:"danger",children:H(i.price)})})]})},a))]}),e.jsx("div",{className:"invoice-body-bottom",children:e.jsxs("div",{className:"invoice-body-info-item",children:[e.jsx("div",{className:"info-item-td text-end text-bold",children:"Thành Tiền:"}),e.jsx(l.Text,{strong:!0,type:"danger",className:"info-item-td text-end",children:"1.200.000 VNĐ"})]})})]})}),e.jsx("div",{className:"invoice-foot text-center",children:e.jsxs("p",{children:[e.jsx("span",{className:"text-bold text-center",children:"NOTE: "}),"This is computer generated receipt and does not require physical signature."]})}),e.jsx("div",{className:"invoice-foot text-center",children:s.status===!0?e.jsx(l.Title,{level:5,className:"!!mb-0",type:"danger",children:"Đã thanh toán"}):e.jsx(l.Title,{level:5,className:"!!mb-0",type:"danger",children:"Chưa thanh toán"})})]})})})})},Fe=()=>{const{order:s,loading:n}=w(t=>t.order),[i,a]=r.useState(!1),[v,m]=r.useState(),b=A(),o=r.useRef(null),y=[{title:"Mã đơn hàng",dataIndex:"orderId",width:"10%",...h({dataIndex:"orderId"})},{title:"Người đặt hàng",dataIndex:"name",width:"15%",...h({dataIndex:"name"})},{title:"Ngày đặt",dataIndex:"createdAt",width:"10%",...x({dataIndex:"createdAt"}),render:t=>g(t)},{title:"Ngày thanh toán",dataIndex:"updatedAt",width:"10%",...x({dataIndex:"updatedAt"}),render:t=>g(t)},{title:"Trạng thái",dataIndex:"status",width:"10%",...M("status",[{value:!0,text:"Đã thanh toán"},{value:!1,text:"Chưa thanh toán"}]),render:t=>t===!0?e.jsx("span",{className:"text-success",children:"Đã thanh toán"}):e.jsx("span",{className:"text-danger",children:"Chưa thanh toán"})},{title:"Phương thức thanh toán",dataIndex:"paymentMethod",width:"14%"},{title:"Thông tin",dataIndex:"info",width:"11%",render:(t,T)=>e.jsx(e.Fragment,{children:e.jsx(c,{onClick:()=>{a(!0),m(T)},children:"Chi tiết đơn hàng"})})}],F=r.useMemo(()=>s.map(t=>({...t,key:t._id})),[s]);return r.useEffect(()=>{n===!0&&b(C())},[]),e.jsxs(k,{header:e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center",children:e.jsx("h6",{className:"mb-0",children:"ĐƠN HÀNG"})})}),button:e.jsx(e.Fragment,{children:e.jsx(c,{onClick:()=>O(s,"Order.xlsx"),type:"primary",children:"Xuất file Excel"})}),children:[e.jsx(E,{loading:n,data:F,columns:y,colEdit:!1}),e.jsx(S,{centered:!0,open:i,onOk:()=>a(!1),onCancel:()=>{a(!1),m()},footer:e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>{a(!1),m()},children:"Hủy"}),e.jsx(c,{type:"primary",onClick:()=>R(o),children:"Xuất file PDF"})]}),width:800,children:e.jsx("div",{ref:o,children:e.jsx(K,{info:v})})})]})};export{Fe as default};
