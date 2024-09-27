import{a as J,b as Q,c as V,t as X,r as o,d as x,c9 as Z,ca as ee,j as e,a1 as te}from"./index-D_8e4c1c.js";import{B as se,T as h,g as ne,C as ie,D as re,E as ae,H as ce,G as oe,I as le,J as de,s as he,K as ue,A as D}from"./index-Dmxhq2rE.js";import{a as me,M as fe}from"./index-DUMoXffW.js";const ye=({title:H,description:P,keywords:R,author:q,ldJson:p={},children:B})=>{var b,v,w,E,T,C,L,M,S,_;const a=J(),{pathname:O}=Q(),j=V(),{token:{colorPrimary:U}}=X.useToken(),[K,g]=o.useState(!1),y=o.useRef(null),t=x(s=>s.menu),k=x(s=>s.menu.status),{user:n}=x(s=>s.auth),{info:u,loading:G}=x(s=>s.info),W=s=>{const r=new DOMParser().parseFromString(s,"text/html"),c=[];return r.querySelectorAll(".nav__menu > ul > li").forEach(m=>{const A=m.querySelector(".nav__link > a"),N={key:A.getAttribute("href"),label:A.textContent.trim()},$=m.querySelectorAll(".dropdown__menu.dropdown-aris > li"),f=[];$.forEach(z=>{const F=z.querySelector(".dropdown__link > h4 > a"),d={key:F.getAttribute("href"),label:F.textContent.trim(),children:[]};z.querySelectorAll(".dropdown__submenu.dropdown-aris > li > a").forEach(I=>{d.children.push({key:I.getAttribute("href"),label:I.textContent.trim()})}),d.children.length>0?f.push(d):f.push({label:d.label,key:d.key})}),f.length>0&&(N.children=f),c.push(N)}),c};function Y(s){return s.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()}return o.useEffect(()=>{window.scrollTo(0,0)},[O]),o.useEffect(()=>{const s=r=>{const c=r.target.closest("a");if(c&&c.href){const l=new URL(c.href),m=l.pathname+l.search+l.hash;l.origin===window.location.origin&&(r.preventDefault(),a(m))}},i=document.getElementById("root");return i&&i.addEventListener("click",s),()=>{i&&i.removeEventListener("click",s)}},[a]),o.useEffect(()=>{k==="idle"&&j(Z())},[j,k]),o.useEffect(()=>{var s;if((s=t==null?void 0:t.menuItems)!=null&&s.header){const i=document.getElementById("menu-mobile"),r=()=>g(!0);return i&&i.addEventListener("click",r),()=>{i&&i.removeEventListener("click",r)}}},[t]),o.useEffect(()=>{const s=document.getElementById("icon-user");if(n!=null&&n.userType&&s&&(n==null?void 0:n.userType)!="admin"){s.innerHTML="",y.current||(y.current=ee(s));const i=y.current,r=[{key:"user",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user"),children:[e.jsx(se,{size:18}),e.jsx(h.Text,{children:"Trang chủ"})]})},{key:"info",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/info"),children:[e.jsx(ne,{size:18}),e.jsx(h.Text,{children:"Thông tin cá nhân"})]})},{key:"courses",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/courses"),children:[e.jsx(ie,{size:18}),e.jsx(h.Text,{children:"Khóa học của tôi"})]})},{key:"orders",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/orders"),children:[e.jsx(re,{size:18}),e.jsx(h.Text,{children:"Lịch sử mua hàng"})]})},{key:"change-password",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/change-password"),children:[e.jsx(ae,{size:18}),e.jsx(h.Text,{children:"Đổi mật khẩu"})]})}],c=()=>n!=null&&n.src?e.jsx(D,{src:n==null?void 0:n.src,size:40}):e.jsx(D,{style:{backgroundColor:U},size:40,children:Y(n==null?void 0:n.name)});i.render(e.jsx(me,{menu:{items:r},placement:"bottomRight",arrow:{pointAtCenter:!0},children:c()}))}},[n,t]),o.useEffect(()=>{G&&j(te())},[]),e.jsxs(ce,{children:[e.jsxs(oe,{children:[e.jsx("meta",{name:"description",content:P||((b=u[0])==null?void 0:b.description)}),e.jsx("meta",{name:"keywords",content:R||((v=u[0])==null?void 0:v.keywords)}),e.jsx("meta",{name:"author",content:q||((w=u[0])==null?void 0:w.manage)}),e.jsx("title",{children:H||((E=u[0])==null?void 0:E.name)}),typeof p=="object"&&Object.keys(p).length>0&&e.jsx("script",{type:"application/ld+json",children:JSON.stringify(p)})]}),((T=t==null?void 0:t.menuItems)==null?void 0:T.css)&&e.jsx(e.Fragment,{children:e.jsx("style",{dangerouslySetInnerHTML:{__html:(C=t==null?void 0:t.menuItems)==null?void 0:C.css}})}),((L=t==null?void 0:t.menuItems)==null?void 0:L.header)&&e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:500},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:(M=t==null?void 0:t.menuItems)==null?void 0:M.header}})})}),e.jsx("div",{style:{minHeight:"calc(93vh - 6rem)"},children:B}),e.jsx("div",{dangerouslySetInnerHTML:{__html:(S=t==null?void 0:t.menuItems)==null?void 0:S.footer}}),e.jsx(le,{title:"Chicken War Studio",placement:"left",onClose:()=>g(!1),open:K,width:256,children:e.jsxs("div",{className:"flex flex-col justify-between",style:{height:"100%"},children:[e.jsx(fe,{mode:"inline",onClick:s=>{g(!1),setTimeout(()=>{a(s.key)},500)},style:{width:256},items:W((_=t==null?void 0:t.menuItems)==null?void 0:_.header)}),e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(de,{size:22})}),e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(he,{size:22})}),e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(ue,{size:22})})]})]})})]})};export{ye as L};
