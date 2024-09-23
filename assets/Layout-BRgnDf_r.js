import{a as U,b as W,c as Y,t as O,r as o,d as j,bX as X,bY as $,j as e}from"./index-DlI1B2Q-.js";import{S as K,T as h,j as V,U as Z,V as G,W as J,z as Q,X as ee,Y as te,Z as se,M as ne,_ as re,E as ie,$ as ae,A as C}from"./index-B3pLzQmz.js";const de=({title:D="Wood 3D",description:z="Wood 3D",keywords:A="3D",author:F="Wood 3D",children:N})=>{var y,k,b,v,w,T;const a=U(),{pathname:I}=W(),p=Y(),{token:{colorPrimary:H}}=O.useToken(),[P,x]=o.useState(!1),f=o.useRef(null),t=j(s=>s.menu),g=j(s=>s.menu.status),{user:n}=j(s=>s.auth),R=s=>{const i=new DOMParser().parseFromString(s,"text/html"),c=[];return i.querySelectorAll(".nav__menu > ul > li").forEach(u=>{const E=u.querySelector(".nav__link > a"),L={key:E.getAttribute("href"),label:E.textContent.trim()},B=u.querySelectorAll(".dropdown__menu.dropdown-aris > li"),m=[];B.forEach(M=>{const S=M.querySelector(".dropdown__link > h4 > a"),d={key:S.getAttribute("href"),label:S.textContent.trim(),children:[]};M.querySelectorAll(".dropdown__submenu.dropdown-aris > li > a").forEach(_=>{d.children.push({key:_.getAttribute("href"),label:_.textContent.trim()})}),d.children.length>0?m.push(d):m.push({label:d.label,key:d.key})}),m.length>0&&(L.children=m),c.push(L)}),c};function q(s){return s.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()}return o.useEffect(()=>{window.scrollTo(0,0)},[I]),o.useEffect(()=>{const s=i=>{const c=i.target.closest("a");if(c&&c.href){const l=new URL(c.href),u=l.pathname+l.search+l.hash;l.origin===window.location.origin&&(i.preventDefault(),a(u))}},r=document.getElementById("root");return r&&r.addEventListener("click",s),()=>{r&&r.removeEventListener("click",s)}},[a]),o.useEffect(()=>{g==="idle"&&p(X())},[p,g]),o.useEffect(()=>{var s;if((s=t==null?void 0:t.menuItems)!=null&&s.header){const r=document.getElementById("menu-mobile"),i=()=>x(!0);return r&&r.addEventListener("click",i),()=>{r&&r.removeEventListener("click",i)}}},[t]),o.useEffect(()=>{const s=document.getElementById("icon-user");if(n!=null&&n.userType&&s&&(n==null?void 0:n.userType)!="admin"){s.innerHTML="",f.current||(f.current=$(s));const r=f.current,i=[{key:"user",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user"),children:[e.jsx(K,{size:18}),e.jsx(h.Text,{children:"Trang chủ"})]})},{key:"info",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/info"),children:[e.jsx(V,{size:18}),e.jsx(h.Text,{children:"Thông tin cá nhân"})]})},{key:"courses",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/courses"),children:[e.jsx(Z,{size:18}),e.jsx(h.Text,{children:"Khóa học của tôi"})]})},{key:"orders",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/orders"),children:[e.jsx(G,{size:18}),e.jsx(h.Text,{children:"Lịch sử mua hàng"})]})},{key:"change-password",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/change-password"),children:[e.jsx(J,{size:18}),e.jsx(h.Text,{children:"Đổi mật khẩu"})]})}],c=()=>n!=null&&n.src?e.jsx(C,{src:n==null?void 0:n.src,size:40}):e.jsx(C,{style:{backgroundColor:H},size:40,children:q(n==null?void 0:n.name)});r.render(e.jsx(Q,{menu:{items:i},placement:"bottomRight",arrow:{pointAtCenter:!0},children:c()}))}},[n,t]),e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"description",content:z}),e.jsx("meta",{name:"keywords",content:A}),e.jsx("meta",{name:"author",content:F}),e.jsx("title",{children:D})]}),((y=t==null?void 0:t.menuItems)==null?void 0:y.css)&&e.jsx(e.Fragment,{children:e.jsx("style",{dangerouslySetInnerHTML:{__html:(k=t==null?void 0:t.menuItems)==null?void 0:k.css}})}),((b=t==null?void 0:t.menuItems)==null?void 0:b.header)&&e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:500},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:(v=t==null?void 0:t.menuItems)==null?void 0:v.header}})})}),e.jsx("div",{style:{minHeight:"calc(93vh - 6rem)"},children:N}),e.jsx("div",{dangerouslySetInnerHTML:{__html:(w=t==null?void 0:t.menuItems)==null?void 0:w.footer}}),e.jsx(se,{title:"Tự Học 3D",placement:"left",onClose:()=>x(!1),open:P,width:256,children:e.jsxs("div",{className:"flex flex-col justify-between",style:{height:"100%"},children:[e.jsx(ne,{mode:"inline",onClick:s=>{x(!1),setTimeout(()=>{a(s.key)},500)},style:{width:256},items:R((T=t==null?void 0:t.menuItems)==null?void 0:T.header)}),e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(re,{size:22})}),e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(ie,{size:22})}),e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(ae,{size:22})})]})]})})]})};export{de as L};
