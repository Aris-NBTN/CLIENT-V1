import{a as n,a4 as c,r as i,W as h,j as r}from"./index-Ca-ywajW.js";import{L as m}from"./Layout-CXM9uupG.js";import{R as u}from"./index-CR75mzd_.js";import{T as l}from"./index-DwMj5orM.js";import{B as a}from"./TextArea-BGDHj_Xu.js";import"./context-BPytJE9N.js";import"./EllipsisOutlined-D2qaaC01.js";import"./Overflow-pX7p5_Au.js";import"./CheckOutlined-DPvv86UP.js";import"./index-DeworCSe.js";const C=()=>{const t=n(),[s]=c(),o=localStorage.getItem("orderCode"),e=s.get("orderCode");return i.useEffect(()=>{o!==e||!o&&!e?(h("success","Đơn Hàng Không Tồn Tại!","Vui lòng thử lại sau!"),t("/")):localStorage.removeItem("orderCode")},[t,s]),r.jsx(m,{title:"thanh toán thành công",children:r.jsx("section",{children:r.jsx(u,{status:"success",title:`Đơn hàng ${e} của bạn đã được thanh toán thành công!`,subTitle:r.jsxs(r.Fragment,{children:["Vui lòng truy cập! ",r.jsx(l.Link,{href:"/user/orders",children:"Trang đơn hàng của bạn"})," để xem chi tiết đơn hàng!"]}),extra:[r.jsx(a,{type:"primary",onClick:()=>t("/courses"),children:"Mua thêm khóa học"},"buy"),r.jsx(a,{type:"primary",onClick:()=>t("/user/courses"),children:"Đến trang khóa học của bạn"},"console")]})})})};export{C as default};
