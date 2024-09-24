import{a as W,b as U,c as Y,t as K,r as o,d as f,bX as V,bY as X,j as e}from"./index-17j3_jhh.js";import{S as Z,T as h,j as $,U as J,V as G,W as Q,z as ee,X as te,Y as ne,Z as se,M as re,_ as ie,E as ae,$ as ce,A as D}from"./index-DSby45QQ.js";const he=({title:_="Wood 3D",description:N="Wood 3D",keywords:z="3D",author:A="Wood 3D",children:P})=>{var j,k,b,v,w,L;const a=W(),{pathname:F}=U(),g=Y(),{token:{colorPrimary:I}}=K.useToken(),[H,p]=o.useState(!1),x=o.useRef(null),t=f(n=>n.menu),y=f(n=>n.menu.status),{user:s}=f(n=>n.auth),R={"@context":"https://schema.org","@type":"Course",name:"Lập trình Python cho Người mới bắt đầu",description:"Khóa học này giới thiệu các khái niệm cơ bản của lập trình Python cho người mới bắt đầu.",provider:{"@type":"Organization",name:"Học viện Lập trình XYZ",sameAs:"https://www.xyzcodingacademy.com"},instructor:{"@type":"Person",name:"Nguyễn Văn A"},datePublished:"2024-09-01",hasCourseInstance:{"@type":"CourseInstance",courseMode:"online",duration:"P4W",startDate:"2024-10-01",endDate:"2024-10-28",inLanguage:"vi"},learningResourceType:"Online course",competencyRequired:"Không cần kiến thức lập trình trước đó",skillLevel:"Beginner",offers:{"@type":"Offer",price:"1500000",priceCurrency:"VND"}},q=n=>{const i=new DOMParser().parseFromString(n,"text/html"),c=[];return i.querySelectorAll(".nav__menu > ul > li").forEach(u=>{const T=u.querySelector(".nav__link > a"),C={key:T.getAttribute("href"),label:T.textContent.trim()},B=u.querySelectorAll(".dropdown__menu.dropdown-aris > li"),m=[];B.forEach(M=>{const E=M.querySelector(".dropdown__link > h4 > a"),d={key:E.getAttribute("href"),label:E.textContent.trim(),children:[]};M.querySelectorAll(".dropdown__submenu.dropdown-aris > li > a").forEach(S=>{d.children.push({key:S.getAttribute("href"),label:S.textContent.trim()})}),d.children.length>0?m.push(d):m.push({label:d.label,key:d.key})}),m.length>0&&(C.children=m),c.push(C)}),c};function O(n){return n.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()}return o.useEffect(()=>{window.scrollTo(0,0)},[F]),o.useEffect(()=>{const n=i=>{const c=i.target.closest("a");if(c&&c.href){const l=new URL(c.href),u=l.pathname+l.search+l.hash;l.origin===window.location.origin&&(i.preventDefault(),a(u))}},r=document.getElementById("root");return r&&r.addEventListener("click",n),()=>{r&&r.removeEventListener("click",n)}},[a]),o.useEffect(()=>{y==="idle"&&g(V())},[g,y]),o.useEffect(()=>{var n;if((n=t==null?void 0:t.menuItems)!=null&&n.header){const r=document.getElementById("menu-mobile"),i=()=>p(!0);return r&&r.addEventListener("click",i),()=>{r&&r.removeEventListener("click",i)}}},[t]),o.useEffect(()=>{const n=document.getElementById("icon-user");if(s!=null&&s.userType&&n&&(s==null?void 0:s.userType)!="admin"){n.innerHTML="",x.current||(x.current=X(n));const r=x.current,i=[{key:"user",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user"),children:[e.jsx(Z,{size:18}),e.jsx(h.Text,{children:"Trang chủ"})]})},{key:"info",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/info"),children:[e.jsx($,{size:18}),e.jsx(h.Text,{children:"Thông tin cá nhân"})]})},{key:"courses",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/courses"),children:[e.jsx(J,{size:18}),e.jsx(h.Text,{children:"Khóa học của tôi"})]})},{key:"orders",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/orders"),children:[e.jsx(G,{size:18}),e.jsx(h.Text,{children:"Lịch sử mua hàng"})]})},{key:"change-password",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/change-password"),children:[e.jsx(Q,{size:18}),e.jsx(h.Text,{children:"Đổi mật khẩu"})]})}],c=()=>s!=null&&s.src?e.jsx(D,{src:s==null?void 0:s.src,size:40}):e.jsx(D,{style:{backgroundColor:I},size:40,children:O(s==null?void 0:s.name)});r.render(e.jsx(ee,{menu:{items:i},placement:"bottomRight",arrow:{pointAtCenter:!0},children:c()}))}},[s,t]),e.jsxs(te,{children:[e.jsxs(ne,{children:[e.jsx("meta",{name:"description",content:N}),e.jsx("meta",{name:"keywords",content:z}),e.jsx("meta",{name:"author",content:A}),e.jsx("title",{children:_}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify(R)})]}),((j=t==null?void 0:t.menuItems)==null?void 0:j.css)&&e.jsx(e.Fragment,{children:e.jsx("style",{dangerouslySetInnerHTML:{__html:(k=t==null?void 0:t.menuItems)==null?void 0:k.css}})}),((b=t==null?void 0:t.menuItems)==null?void 0:b.header)&&e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:500},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:(v=t==null?void 0:t.menuItems)==null?void 0:v.header}})})}),e.jsx("div",{style:{minHeight:"calc(93vh - 6rem)"},children:P}),e.jsx("div",{dangerouslySetInnerHTML:{__html:(w=t==null?void 0:t.menuItems)==null?void 0:w.footer}}),e.jsx(se,{title:"Tự Học 3D",placement:"left",onClose:()=>p(!1),open:H,width:256,children:e.jsxs("div",{className:"flex flex-col justify-between",style:{height:"100%"},children:[e.jsx(re,{mode:"inline",onClick:n=>{p(!1),setTimeout(()=>{a(n.key)},500)},style:{width:256},items:q((L=t==null?void 0:t.menuItems)==null?void 0:L.header)}),e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(ie,{size:22})}),e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(ae,{size:22})}),e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(ce,{size:22})})]})]})})]})};export{he as L};
