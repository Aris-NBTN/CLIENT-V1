import{u as H,a as S,r as o,c as _,d as x,by as k,j as e}from"./index-DlYMrpPW.js";import{H as M,a as P,D as b}from"./animate-q5OpxXju.js";const C=({title:j="Wood 3D",description:g="Wood 3D",keywords:p="3D",author:v="Wood 3D",children:y})=>{var l,d,h,f,u;H();const L=S(),[D,w]=o.useState(!1),i=_(),t=x(s=>s.menu),c=x(s=>s.menu.status);return o.useEffect(()=>{const s=m=>{const r=m.target.closest("a");if(r&&r.href){const a=new URL(r.href),E=a.pathname+a.search+a.hash;a.origin===window.location.origin&&(m.preventDefault(),L(E))}},n=document.getElementById("root");return n&&n.addEventListener("click",s),()=>{n&&n.removeEventListener("click",s)}},[]),o.useEffect(()=>{c==="idle"&&i(k())},[i,c]),e.jsxs(M,{children:[e.jsxs(P,{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"description",content:g}),e.jsx("meta",{name:"keywords",content:p}),e.jsx("meta",{name:"author",content:v}),e.jsx("title",{children:j})]}),((l=t==null?void 0:t.menuItems)==null?void 0:l.css)&&e.jsx(e.Fragment,{children:e.jsx("style",{dangerouslySetInnerHTML:{__html:(d=t==null?void 0:t.menuItems)==null?void 0:d.css}})}),((h=t==null?void 0:t.menuItems)==null?void 0:h.header)&&e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:500},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:(f=t==null?void 0:t.menuItems)==null?void 0:f.header}})})}),e.jsx("div",{style:{minHeight:"calc(90vh - 6rem)"},children:y}),e.jsx("div",{dangerouslySetInnerHTML:{__html:(u=t==null?void 0:t.menuItems)==null?void 0:u.footer}}),e.jsx(b,{placement:"left",onClose:()=>w(!1),open:D,width:256,children:e.jsx("div",{className:"flex flex-column justify-between",style:{height:"100%"}})})]})};export{C as L};
