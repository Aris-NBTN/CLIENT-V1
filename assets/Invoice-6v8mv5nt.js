import{t as h,j as e}from"./index-DlI1B2Q-.js";import{j as t,E as j,G as c,H as o,T as a}from"./index-B3pLzQmz.js";import{a as d}from"./index-BbM_hfVD.js";import{i as n,F as N}from"./Format-DxqM5mp2.js";import{R as r,C as i}from"./row-Dml-BTfG.js";const y=({info:s})=>{const{token:{colorPrimary:m}}=h.useToken();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"invoice-wrapper",children:e.jsx("div",{className:"invoice",children:e.jsxs("div",{className:"invoice-container",children:[e.jsxs("div",{className:"invoice-head",children:[e.jsxs(r,{children:[e.jsx(i,{md:{span:12},span:24,children:e.jsx("img",{className:"h-20",src:"https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"})}),e.jsx(i,{className:"flex justify-end items-center invoice-head-top-right text-end",md:{span:12},span:24,children:e.jsx("h3",{className:"!mb-0",style:{color:m},children:"HÓA ĐƠN"})})]}),e.jsx("div",{className:"hr !mb-1"}),e.jsxs("div",{className:"invoice-head-middle",children:[e.jsx("div",{className:"invoice-head-middle-left text-start",children:e.jsxs("p",{className:"!mb-0",children:[e.jsx("span",{className:"text-bold",children:"Ngày đặt hàng: "}),n(s.createdAt)]})}),e.jsx("div",{className:"invoice-head-middle-right text-end",children:e.jsx("p",{className:"!mb-0",children:e.jsxs("span",{className:"text-bold",children:["Mã Đơn Hàng: ",s.orderId," "]})})})]}),e.jsx("div",{className:"hr !mb-1"}),s.status===!0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"invoice-head-middle",children:[e.jsx("div",{className:"invoice-head-middle-left text-start",children:e.jsxs("p",{className:"!mb-0",children:[e.jsx("span",{className:"text-bold",children:"Ngày thanh toán: "}),n(s.updatedAt)]})}),e.jsx("div",{className:"invoice-head-middle-right text-end",children:e.jsx("p",{className:"!mb-0",children:e.jsxs("span",{className:"text-bold",children:["Phương thức thanh toán: ",s.orderId," "]})})})]}),e.jsx("div",{className:"hr !mb-1"})]}),e.jsxs(r,{children:[e.jsx(i,{md:{span:12},span:24,children:e.jsxs("ul",{children:[e.jsx("li",{className:"text-bold",children:"Người mua hàng:"}),e.jsxs("li",{className:"flex items-center gap-2 !mb-1",children:[" ",e.jsx(t,{})," ",s.name]}),e.jsxs("li",{className:"flex items-center gap-2 !mb-1",children:[" ",e.jsx(j,{})," ",s.phone]}),e.jsxs("li",{className:"flex items-center gap-2 !mb-1",children:[" ",e.jsx(d,{})," ",s.email]}),e.jsxs("li",{className:"flex items-center gap-2 !mb-1",children:[" ",e.jsx(c,{})," ",s.address]})]})}),e.jsx(i,{md:{span:12},span:24,children:e.jsxs("ul",{className:"text-end",children:[e.jsx("li",{className:"text-bold flex justify-end items-center",children:"Người nhận:"}),e.jsxs("li",{className:"flex justify-end items-center gap-2 !mb-1",children:["Tự Học 3D ",e.jsx(t,{})]}),e.jsxs("li",{className:"flex justify-end items-center gap-2 !mb-1",children:["2705 ",e.jsx(o,{})]}),e.jsxs("li",{className:"flex justify-end items-center gap-2 !mb-1",children:["Orange, ",e.jsx(d,{})]}),e.jsxs("li",{className:"flex justify-end items-center gap-2 !mb-1",children:["contact@koiceinc.com ",e.jsx(c,{})]})]})})]})]}),e.jsx("div",{className:"overflow-view pt-2",children:e.jsxs("div",{className:"invoice-body",children:[e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-bold",children:"Mã Khóa Học"}),e.jsx("td",{className:"text-bold",children:"Tên Khóa Học"}),e.jsx("td",{className:"text-bold",children:"Giá Tiền"})]})}),s.product.map((l,x)=>e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:l.id}),e.jsx("td",{children:l.name}),e.jsx("td",{className:"text-start",children:e.jsx(a.Text,{type:"danger",children:N(l.price)})})]})},x))]}),e.jsx("div",{className:"invoice-body-bottom",children:e.jsxs("div",{className:"invoice-body-info-item",children:[e.jsx("div",{className:"info-item-td text-end text-bold",children:"Thành Tiền:"}),e.jsx(a.Text,{strong:!0,type:"danger",className:"info-item-td text-end",children:"1.200.000 VNĐ"})]})})]})}),e.jsx("div",{className:"invoice-foot text-center",children:e.jsxs("p",{children:[e.jsx("span",{className:"text-bold text-center",children:"NOTE: "}),"This is computer generated receipt and does not require physical signature."]})}),e.jsx("div",{className:"invoice-foot text-center",children:s.status===!0?e.jsx(a.Title,{level:5,className:"!!mb-0",type:"danger",children:"Đã thanh toán"}):e.jsx(a.Title,{level:5,className:"!!mb-0",type:"danger",children:"Chưa thanh toán"})})]})})})})};export{y as I};
