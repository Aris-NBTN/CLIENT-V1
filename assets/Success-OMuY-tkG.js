import{a as n,a4 as c,r as i,V as m,j as r}from"./index-DE5XhBCr.js";import{L as h}from"./Layout-D9RQEiTe.js";import{R as u}from"./index-cnYImFhH.js";import{T as l}from"./index-D9MB6VQ_.js";import{B as a}from"./button-D_f20KL0.js";import"./animate-CNPIBgQA.js";import"./context-CsfdzBwd.js";import"./useLocale-BqnSk2g0.js";import"./TextArea-DbcwDeGW.js";import"./CheckOutlined-Do-_RANe.js";import"./compact-item-j-IwINpD.js";import"./index-vvjVAyMb.js";const S=()=>{const t=n(),[e]=c(),o=localStorage.getItem("orderCode"),s=e.get("orderCode");return i.useEffect(()=>{o!==s||!o&&!s?(m("success","Đơn Hàng Không Tồn Tại!","Vui lòng thử lại sau!"),t("/")):localStorage.removeItem("orderCode")},[t,e]),r.jsx(h,{children:r.jsx("section",{children:r.jsx(u,{status:"success",title:`Đơn hàng ${s} của bạn đã được thanh toán thành công!`,subTitle:r.jsxs(r.Fragment,{children:["Vui lòng truy cập! ",r.jsx(l.Link,{href:"/user/orders",children:"Trang đơn hàng của bạn"})," để xem chi tiết đơn hàng!"]}),extra:[r.jsx(a,{type:"primary",onClick:()=>t("/courses"),children:"Mua thêm khóa học"},"buy"),r.jsx(a,{type:"primary",onClick:()=>t("/user/courses"),children:"Đến trang khóa học của bạn"},"console")]})})})};export{S as default};
