import{r as a,j as t}from"./index-BLzEd4n4.js";import{b7 as h}from"./Layout-Bst5Vo9z.js";import{E as x}from"./Table-Bxx_ZSAF.js";import{F as o,b as n,a as c}from"./jspdf.es.min-CnS-_-p-.js";import{e as u}from"./export-oiO0RVDw.js";import{B as r}from"./button-BLmoP8MS.js";import{M as y}from"./index-BAdybpeW.js";import"./animate-D3eBM9nS.js";import"./index-BkE6QgOY.js";import"./index-BYI7st5n.js";import"./index-BkhA4-75.js";import"./index-Bk7VKPwO.js";import"./context-HDE3hCe4.js";import"./useClosable-DF0DdXx9.js";import"./EllipsisOutlined-DH7R3b3D.js";import"./Overflow-CE1sZDJR.js";import"./collapse-BbEVqHco.js";import"./index-D9h7xL2N.js";import"./useLocale-DWC3Bj2-.js";import"./TextArea-B8cMsvUT.js";import"./CheckOutlined-DnLyXb8r.js";import"./compact-item-Dl7C-00r.js";import"./index-p5fWdFdd.js";import"./PurePanel-CvO3W_SQ.js";import"./index-CjLK_A61.js";import"./SearchOutlined-BUKY2D18.js";import"./index-CXXaD3cS.js";import"./responsiveObserver-D88kR1tr.js";import"./iconUtil-DYKrIg6c.js";import"./index-FEicpWCI.js";import"./index-BsiHLG3I.js";import"./index-CG4YCKAZ.js";import"./index-HT6McCpU.js";import"./index-Bnj9Y8Ab.js";import"./row-BuGFnJt0.js";import"./index-GhZ32GV6.js";import"./ActionButton-DQkA6vFR.js";import"./html2canvas.esm-CBrSDip1.js";const et=()=>{const[i,f]=a.useState([{key:"1",userOrder:"Nguyễn V7",billOrder:"DH001",dayOrder:"2021-10-10",dayPay:"2023-10-10",status:"Đã thanh toán"},{key:"2",userOrder:"Nguyễn V7",billOrder:"DH002",dayOrder:"2021-10-10",dayPay:"2021-10-10",status:"Chưa thanh toán"}]),[d,s]=a.useState(!0),[l,e]=a.useState(!1),m=[{title:"Mã đơn hàng",dataIndex:"billOrder",width:"10%",...o({dataIndex:"billOrder"})},{title:"Người đặt hàng",dataIndex:"userOrder",width:"20%",...o({dataIndex:"userOrder"})},{title:"Ngày đặt",dataIndex:"dayOrder",width:"15%",...n({dataIndex:"dayOrder"})},{title:"Ngày thanh toán",dataIndex:"dayPay",width:"15%",...n({dataIndex:"dayPay"})},{title:"Trạng thái",dataIndex:"status",width:"10%",...c("status",[{value:"Đã thanh toán",text:"Đã thanh toán"},{value:"Chưa thanh toán",text:"Chưa thanh toán"}])},{title:"Thông tin",dataIndex:"info",width:"10%",render:()=>t.jsx(t.Fragment,{children:t.jsx(r,{onClick:()=>e(!0),children:"Chi tiết đơn hàng"})})}],p=()=>{s(!1)};return a.useEffect(()=>{p()},[]),t.jsxs(h,{header:t.jsx(t.Fragment,{children:t.jsx("div",{className:"flex items-center",children:t.jsx("h6",{className:"mb-0",children:"ĐƠN HÀNG"})})}),button:t.jsx(t.Fragment,{children:t.jsx(r,{onClick:()=>u(i,"Order.xlsx"),type:"primary",children:"Xuất file Excel"})}),children:[t.jsx(x,{loading:d,data:i,columns:m,colEdit:!1}),t.jsx(y,{centered:!0,closeIcon:!1,open:l,onOk:()=>e(!1),onCancel:()=>e(!1),footer:t.jsxs(t.Fragment,{children:[t.jsx(r,{onClick:()=>e(!1),children:"Hủy"}),t.jsx(r,{type:"primary",children:"Xuất file PDF"}),t.jsx(r,{type:"primary",children:"In hóa đơn"})]}),width:800})]})};export{et as default};
