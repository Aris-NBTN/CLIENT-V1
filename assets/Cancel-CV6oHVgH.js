import{a as i,a6 as c,r as h,W as n,j as t}from"./index-bwOTuzAT.js";import{L as l}from"./Layout-B8e3rLoX.js";import{R as m}from"./index-9uk-LOaF.js";import{B as o}from"./TextArea-BSyf-wd8.js";import"./index-5Oj6Dx0r.js";import"./EllipsisOutlined-_3EUVNj_.js";import"./Overflow-BYLru37j.js";import"./CheckOutlined--i9GrI_G.js";import"./index-DnPka7B9.js";const C=()=>{const e=i(),[r]=c();return h.useEffect(()=>{const s=localStorage.getItem("orderCode"),a=r.get("orderCode");s!==a||!s&&!a?(n("","Đơn hàng không tồn tại!","Vui lòng thử lại sau!"),e("/")):(n("","Xác nhận hủy thành công!","Bạn đã hủy đơn hàng thành công!"),localStorage.removeItem("orderCode"))},[e,r]),t.jsx(l,{title:"thanh toán thất bại",children:t.jsx("section",{children:t.jsx(m,{className:"px-0",status:"500",title:"Hủy Đơn Hàng",subTitle:"Đơn hàng đã hủy thành công!",extra:t.jsxs("div",{className:"flex flex-wrap justify-center gap-3",children:[t.jsx(o,{size:"large",onClick:()=>e("/checkout"),type:"primary",children:"Xem lại đơn hàng"}),t.jsx(o,{size:"large",onClick:()=>e("/courses"),type:"primary",children:"Xem khóa học khác..."})]})})})})};export{C as default};
