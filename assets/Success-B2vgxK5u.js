import{a as n,a4 as i,r as c,V as m,j as r}from"./index-CewBEJG5.js";import{L as h}from"./Layout-EPDCSRE_.js";import{R as u}from"./index-BFZzynSn.js";import{T as p}from"./index-Bmj1-6_B.js";import{B as a}from"./button-DUa7Kh7Q.js";import"./index-DtEo5aVO.js";import"./EllipsisOutlined-Y_7jWXfS.js";import"./Overflow-CWQQQYEb.js";import"./context-DSnrQzLd.js";import"./useLocale-CG7I0sBF.js";import"./TextArea-DOxyJ0X2.js";import"./CheckOutlined-B9rnEn5N.js";import"./compact-item-DMuXnXta.js";import"./index-DOO5QKko.js";const I=()=>{const t=n(),[e]=i(),o=localStorage.getItem("orderCode"),s=e.get("orderCode");return c.useEffect(()=>{o!==s||!o&&!s?(m("success","Đơn Hàng Không Tồn Tại!","Vui lòng thử lại sau!"),t("/")):localStorage.removeItem("orderCode")},[t,e]),r.jsx(h,{children:r.jsx("section",{children:r.jsx(u,{status:"success",title:`Đơn hàng ${s} của bạn đã được thanh toán thành công!`,subTitle:r.jsxs(r.Fragment,{children:["Vui lòng truy cập! ",r.jsx(p.Link,{href:"/user/orders",children:"Trang đơn hàng của bạn"})," để xem chi tiết đơn hàng!"]}),extra:[r.jsx(a,{type:"primary",onClick:()=>t("/courses"),children:"Mua thêm khóa học"},"buy"),r.jsx(a,{type:"primary",onClick:()=>t("/user/courses"),children:"Đến trang khóa học của bạn"},"console")]})})})};export{I as default};
