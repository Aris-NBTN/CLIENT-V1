import{u as f,a as x,r as o,p,j as n,S}from"./index-CxLmWmje.js";import{L as v}from"./Layout-BqOX3-2H.js";import{R as E}from"./index-2ctgCC0I.js";import"./index-DgEZE7uO.js";import"./TextArea-wEl3k6cm.js";import"./CheckOutlined-BZ-XMaXi.js";import"./EllipsisOutlined-ua13AUoL.js";import"./Overflow-BGDKIUMZ.js";import"./index-LcK5sDX7.js";const I=()=>{var d;const{"*":c}=f(),r=x(),[t,m]=o.useState(null),[y,a]=o.useState(!0);return o.useEffect(()=>{window.location.pathname==="/"?p.sig("trang-chu").then(e=>{m(e),a(!1)}).catch(()=>{r("/404")}):p.sig(c,"page").then(e=>{m(e),a(!1)}).catch(()=>{r("/404")})},[c]),o.useEffect(()=>{var u,h;const e=document.getElementById("dynamic-styles");e&&e.remove();const l=document.getElementById("dynamic-script");l&&l.remove();const s=document.createElement("style");s.id="dynamic-styles",s.innerHTML=(u=t==null?void 0:t.content)==null?void 0:u.css,document.head.appendChild(s);const i=document.createElement("script");return i.id="dynamic-script",i.innerHTML=(h=t==null?void 0:t.content)==null?void 0:h.js,document.body.appendChild(i),()=>{s.remove(),i.remove()}},[t]),n.jsx(v,{title:(t==null?void 0:t.name)||"Chicken War Studio",description:(t==null?void 0:t.description)||"Chicken War Studio",keywords:(t==null?void 0:t.keywords)||"Chicken War Studio",children:y?n.jsx(S,{}):t!=null&&t.content?n.jsx("div",{id:"page-content",dangerouslySetInnerHTML:{__html:(d=t==null?void 0:t.content)==null?void 0:d.html}}):n.jsx("section",{children:n.jsx(E,{status:"403",title:"Không có dữ liệu!",subTitle:"Trang chưa được thêm dữ liệu vào trong, vui lòng thêm dữ liệu vào!"})})})};export{I as default};
