import{a as n,a7 as c,r as i,W as h,j as r}from"./index-D_8e4c1c.js";import{L as m}from"./Layout-DMdqf4fT.js";import{R as u}from"./index-DOp9CtH_.js";import{T as l}from"./index-Dmxhq2rE.js";import{B as a}from"./TextArea-CWw6Kbja.js";import"./index-DUMoXffW.js";import"./EllipsisOutlined-DotS4OyN.js";import"./Overflow-D7J6rgzg.js";import"./CheckOutlined-DdAy9wLR.js";import"./index-BMT87hfN.js";import"./context-CZuqpdQ0.js";const E=()=>{const t=n(),[s]=c(),o=localStorage.getItem("orderCode"),e=s.get("orderCode");return i.useEffect(()=>{o!==e||!o&&!e?(h("success","Đơn Hàng Không Tồn Tại!","Vui lòng thử lại sau!"),t("/")):localStorage.removeItem("orderCode")},[t,s]),r.jsx(m,{title:"thanh toán thành công",children:r.jsx("section",{children:r.jsx(u,{status:"success",title:`Đơn hàng ${e} của bạn đã được thanh toán thành công!`,subTitle:r.jsxs(r.Fragment,{children:["Vui lòng truy cập! ",r.jsx(l.Link,{href:"/user/orders",children:"Trang đơn hàng của bạn"})," để xem chi tiết đơn hàng!"]}),extra:[r.jsx(a,{type:"primary",onClick:()=>t("/courses"),children:"Mua thêm khóa học"},"buy"),r.jsx(a,{type:"primary",onClick:()=>t("/user/courses"),children:"Đến trang khóa học của bạn"},"console")]})})})};export{E as default};
