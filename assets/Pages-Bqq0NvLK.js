import{u as g,a as x,r as o,p as E,t as v,j as c,S as b}from"./index-Cc-1vpYl.js";import{L as j}from"./Layout-B8nylw2e.js";import{c as C}from"./contact-CXX-WDKz.js";import{R as L}from"./index-Df29FcKy.js";import"./index-CG-qH4GJ.js";import"./EllipsisOutlined-D0dVKAMB.js";import"./Overflow-DMuMV_Su.js";import"./context-rMj-ykUU.js";const P=()=>{var p;const{"*":u}=g(),m=x(),[t,h]=o.useState(null),[S,f]=o.useState(!0);o.useEffect(()=>{window.location.pathname==="/"?E.sig("trang-chu").then(e=>{h(e),f(!1)}).catch(()=>{m("/404")}):E.sig(u,"page").then(e=>{h(e),f(!1)}).catch(()=>{m("/404")})},[u,m]);const l=o.useCallback(e=>{e.preventDefault();const i=e.target,s=new FormData(i),n={};s.forEach((r,a)=>{n[a]=r}),C.put({filename:t==null?void 0:t.name,data:n}).then(()=>{v("sendData","Cảm ơn bạn đã gửi thông tin!","Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!")}).catch(()=>{v("sendData","Có lỗi xảy ra!","Vui lòng thử lại sau!")}),i.reset()},[t]);return o.useEffect(()=>{var a,y;const e=document.getElementById("dynamic-styles");e&&e.remove();const i=document.getElementById("dynamic-script");i&&i.remove();const s=document.createElement("style");s.id="dynamic-styles",s.innerHTML=(a=t==null?void 0:t.content)==null?void 0:a.css,document.head.appendChild(s);const n=document.createElement("script");n.id="dynamic-script",n.innerHTML=(y=t==null?void 0:t.content)==null?void 0:y.js,document.body.appendChild(n);const r=document.querySelectorAll("form");return r.forEach(d=>{d.addEventListener("submit",l)}),()=>{s.remove(),n.remove(),r.forEach(d=>{d.removeEventListener("submit",l)})}},[t,l]),c.jsx(j,{title:(t==null?void 0:t.name)||"Chicken War Studio",description:(t==null?void 0:t.description)||"Chicken War Studio",keywords:(t==null?void 0:t.keywords)||"Chicken War Studio",children:S?c.jsx(b,{}):t!=null&&t.content?c.jsx("div",{id:"page-content",dangerouslySetInnerHTML:{__html:(p=t==null?void 0:t.content)==null?void 0:p.html}}):c.jsx("section",{children:c.jsx(L,{status:"403",title:"Không có dữ liệu!",subTitle:"Trang chưa được thêm dữ liệu vào trong, vui lòng thêm dữ liệu vào!"})})})};export{P as default};
