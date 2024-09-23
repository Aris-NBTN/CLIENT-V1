import{a as B,b as U,c as Y,t as O,r as c,d as f,bX as X,bY as $,j as e}from"./index-B3NSYGS1.js";import{S as G,T as h,j as J,U as K,V,W as Z,z as Q,X as ee,Y as te,Z as ne,M as se,_ as re,E as ie,$ as ae,A as C}from"./index-Deo6Lglc.js";const de=({title:A="Wood 3D",description:D="Wood 3D",keywords:z="3D",author:F="Wood 3D",children:N})=>{var y,k,b,v,w,T;const a=B(),{pathname:H}=U(),j=Y(),{token:{colorPrimary:I}}=O.useToken(),[P,x]=c.useState(!1),p=c.useRef(null),t=f(n=>n.menu),g=f(n=>n.menu.status),{user:s}=f(n=>n.auth),R=n=>{const i=new DOMParser().parseFromString(n,"text/html"),o=[];return i.querySelectorAll(".nav__menu > ul > li").forEach(m=>{const M=m.querySelector(".nav__link > a"),E={key:M.getAttribute("href"),label:M.textContent.trim()},W=m.querySelectorAll(".dropdown__menu.dropdown-aris > li"),u=[];W.forEach(L=>{const S=L.querySelector(".dropdown__link > h4 > a"),d={key:S.getAttribute("href"),label:S.textContent.trim(),children:[]};L.querySelectorAll(".dropdown__submenu.dropdown-aris > li > a").forEach(_=>{d.children.push({key:_.getAttribute("href"),label:_.textContent.trim()})}),d.children.length>0?u.push(d):u.push({label:d.label,key:d.key})}),u.length>0&&(E.children=u),o.push(E)}),o};function q(n){return n.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()}return c.useEffect(()=>{window.scrollTo(0,0)},[H]),c.useEffect(()=>{const n=i=>{const o=i.target.closest("a");if(o&&o.href){const l=new URL(o.href),m=l.pathname+l.search+l.hash;l.origin===window.location.origin&&(i.preventDefault(),a(m))}},r=document.getElementById("root");return r&&r.addEventListener("click",n),()=>{r&&r.removeEventListener("click",n)}},[a]),c.useEffect(()=>{g==="idle"&&j(X())},[j,g]),c.useEffect(()=>{var n;if((n=t==null?void 0:t.menuItems)!=null&&n.header){const r=document.getElementById("menu-mobile"),i=()=>x(!0);return r&&r.addEventListener("click",i),()=>{r&&r.removeEventListener("click",i)}}},[t]),c.useEffect(()=>{const n=document.getElementById("icon-user");if(s!=null&&s.userType&&n&&(s==null?void 0:s.userType)!="admin"){n.innerHTML="",p.current||(p.current=$(n));const r=p.current,i=[{key:"user",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user"),children:[e.jsx(G,{size:18}),e.jsx(h.Text,{children:"Trang chủ"})]})},{key:"info",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/info"),children:[e.jsx(J,{size:18}),e.jsx(h.Text,{children:"Thông tin cá nhân"})]})},{key:"courses",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/courses"),children:[e.jsx(K,{size:18}),e.jsx(h.Text,{children:"Khóa học của tôi"})]})},{key:"orders",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/orders"),children:[e.jsx(V,{size:18}),e.jsx(h.Text,{children:"Lịch sử mua hàng"})]})},{key:"change-password",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>a("/user/change-password"),children:[e.jsx(Z,{size:18}),e.jsx(h.Text,{children:"Đổi mật khẩu"})]})}],o=()=>s!=null&&s.src?e.jsx(C,{src:s==null?void 0:s.src,size:40}):e.jsx(C,{style:{backgroundColor:I},size:40,children:q(s==null?void 0:s.name)});r.render(e.jsx(Q,{menu:{items:i},placement:"bottomRight",arrow:{pointAtCenter:!0},children:o()}))}},[s,t]),e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"description",content:D}),e.jsx("meta",{name:"keywords",content:z}),e.jsx("meta",{name:"author",content:F}),e.jsx("meta",{property:"og:url",content:"http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"}),e.jsx("meta",{property:"og:type",content:"article"}),e.jsx("meta",{property:"og:title",content:"When Great Minds Don’t Think Alike"}),e.jsx("meta",{property:"og:description",content:"How much does culture influence creative thinking?"}),e.jsx("meta",{property:"og:image",content:"http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"}),e.jsx("title",{children:A})]}),((y=t==null?void 0:t.menuItems)==null?void 0:y.css)&&e.jsx(e.Fragment,{children:e.jsx("style",{dangerouslySetInnerHTML:{__html:(k=t==null?void 0:t.menuItems)==null?void 0:k.css}})}),((b=t==null?void 0:t.menuItems)==null?void 0:b.header)&&e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:500},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:(v=t==null?void 0:t.menuItems)==null?void 0:v.header}})})}),e.jsx("div",{style:{minHeight:"calc(93vh - 6rem)"},children:N}),e.jsx("div",{dangerouslySetInnerHTML:{__html:(w=t==null?void 0:t.menuItems)==null?void 0:w.footer}}),e.jsx(ne,{title:"Tự Học 3D",placement:"left",onClose:()=>x(!1),open:P,width:256,children:e.jsxs("div",{className:"flex flex-col justify-between",style:{height:"100%"},children:[e.jsx(se,{mode:"inline",onClick:n=>{x(!1),setTimeout(()=>{a(n.key)},500)},style:{width:256},items:R((T=t==null?void 0:t.menuItems)==null?void 0:T.header)}),e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(re,{size:22})}),e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(ie,{size:22})}),e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(ae,{size:22})})]})]})})]})};export{de as L};
