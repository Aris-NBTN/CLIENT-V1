import{a as B,b as W,c as V,t as X,r as c,d as x,bX as Y,bY as $,j as e}from"./index-DQygNEjr.js";import{S as J,T as u,j as K,U as Z,V as G,W as Q,z as ee,X as te,Y as ne,Z as ae,M as se,_ as re,E as ie,$ as oe,A as D}from"./index-Ct1Ahm0O.js";const ue=({title:A="Wood 3D",description:M="Wood 3D",keywords:_="3D",author:z="Wood 3D",children:R})=>{var w,j,v,b,C,k;const i=B(),{pathname:I}=W(),y=V(),{token:{colorPrimary:U}}=X.useToken(),[F,h]=c.useState(!1),g=c.useRef(null),t=x(n=>n.menu),f=x(n=>n.menu.status),{user:a}=x(n=>n.auth),H={"@context":"https://schema.org/","@id":"https://www.example.com/advancedCpp","@type":"Course",name:"Learn Advanced C++ Topics",description:"Improve your C++ skills by learning advanced topics.",publisher:{"@type":"Organization",name:"CourseWebsite",url:"www.examplecoursewebsite.com"},provider:{"@type":"Organization",name:"Example University",url:"www.example.com"},image:["https://example.com/photos/1x1/photo.jpg","https://example.com/photos/4x3/photo.jpg","https://example.com/photos/16x9/photo.jpg"],aggregateRating:{"@type":"AggregateRating",ratingValue:4,ratingCount:1234,reviewCount:450},offers:[{"@type":"Offer",category:"Paid",priceCurrency:"EUR",price:10.99}],totalHistoricalEnrollment:12345,datePublished:"2024-03-21",educationalLevel:"Advanced",about:["C++ Coding","Backend Engineering"],teaches:["Practice and apply systems thinking to plan for change","Understand how memory allocation works."],financialAidEligible:"Scholarship Available",inLanguage:"en",availableLanguage:["fr","es"],syllabusSections:[{"@type":"Syllabus",name:"Memory Allocation",description:"Learn how memory is allocated when creating C++ variables.",timeRequired:"PT6H"},{"@type":"Syllabus",name:"C++ Pointers",description:"Learn what a C++ pointer is and when they are used.",timeRequired:"PT11H"}],review:[{"@type":"Review",author:{"@type":"Person",name:"Lou S."},datePublished:"2024-08-31",reviewRating:{"@type":"Rating",bestRating:10,ratingValue:6}}],coursePrerequisites:["Basic understanding of C++ up to arrays and functions.","https://www.example.com/beginnerCpp"],educationalCredentialAwarded:[{"@type":"EducationalOccupationalCredential",name:"CourseProvider Certificate",url:"www.example.com",credentialCategory:"Certificate",offers:[{"@type":"Offer",category:"Paid",price:5,priceCurrency:"USD"}]}],video:{"@type":"VideoObject",name:"Video name",description:"A video previewing this course.",uploadDate:"2024-03-28T08:00:00+08:00",contentUrl:"www.example.come/mp4",thumbnailUrl:"www.example.com/thumbnailurl.jpg"},hasCourseInstance:[{"@type":"CourseInstance",courseMode:"Blended",location:"Example University",courseSchedule:{"@type":"Schedule",duration:"PT3H",repeatFrequency:"Daily",repeatCount:31,startDate:"2024-07-01",endDate:"2024-07-31"},instructor:[{"@type":"Person",name:"Ira D.",description:"Professor at X-University",image:"http://example.com/person.jpg"}]},{"@type":"CourseInstance",courseMode:"Online",courseWorkload:"P2D"}],hasPart:[{"@type":"Course",name:"C++ Algorithms",url:"https://www.example.com/cpp-algorithms",description:"Learn how to code base algorithms in c++.",provider:{"@type":"Organization",name:"Example University",url:"www.example.com"}},{"@type":"Course",name:"C++ Data Structures",url:"https://www.example.com/cpp-data-structures",description:"Learn about core c++ data structures.",provider:{"@type":"Organization",name:"Example University",url:"www.example.com"}}]},N=n=>{const r=new DOMParser().parseFromString(n,"text/html"),o=[];return r.querySelectorAll(".nav__menu > ul > li").forEach(p=>{const E=p.querySelector(".nav__link > a"),L={key:E.getAttribute("href"),label:E.textContent.trim()},q=p.querySelectorAll(".dropdown__menu.dropdown-aris > li"),m=[];q.forEach(S=>{const T=S.querySelector(".dropdown__link > h4 > a"),d={key:T.getAttribute("href"),label:T.textContent.trim(),children:[]};S.querySelectorAll(".dropdown__submenu.dropdown-aris > li > a").forEach(P=>{d.children.push({key:P.getAttribute("href"),label:P.textContent.trim()})}),d.children.length>0?m.push(d):m.push({label:d.label,key:d.key})}),m.length>0&&(L.children=m),o.push(L)}),o};function O(n){return n.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()}return c.useEffect(()=>{window.scrollTo(0,0)},[I]),c.useEffect(()=>{const n=r=>{const o=r.target.closest("a");if(o&&o.href){const l=new URL(o.href),p=l.pathname+l.search+l.hash;l.origin===window.location.origin&&(r.preventDefault(),i(p))}},s=document.getElementById("root");return s&&s.addEventListener("click",n),()=>{s&&s.removeEventListener("click",n)}},[i]),c.useEffect(()=>{f==="idle"&&y(Y())},[y,f]),c.useEffect(()=>{var n;if((n=t==null?void 0:t.menuItems)!=null&&n.header){const s=document.getElementById("menu-mobile"),r=()=>h(!0);return s&&s.addEventListener("click",r),()=>{s&&s.removeEventListener("click",r)}}},[t]),c.useEffect(()=>{const n=document.getElementById("icon-user");if(a!=null&&a.userType&&n&&(a==null?void 0:a.userType)!="admin"){n.innerHTML="",g.current||(g.current=$(n));const s=g.current,r=[{key:"user",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>i("/user"),children:[e.jsx(J,{size:18}),e.jsx(u.Text,{children:"Trang chủ"})]})},{key:"info",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>i("/user/info"),children:[e.jsx(K,{size:18}),e.jsx(u.Text,{children:"Thông tin cá nhân"})]})},{key:"courses",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>i("/user/courses"),children:[e.jsx(Z,{size:18}),e.jsx(u.Text,{children:"Khóa học của tôi"})]})},{key:"orders",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>i("/user/orders"),children:[e.jsx(G,{size:18}),e.jsx(u.Text,{children:"Lịch sử mua hàng"})]})},{key:"change-password",label:e.jsxs("div",{className:"flex items-center gap-1",onClick:()=>i("/user/change-password"),children:[e.jsx(Q,{size:18}),e.jsx(u.Text,{children:"Đổi mật khẩu"})]})}],o=()=>a!=null&&a.src?e.jsx(D,{src:a==null?void 0:a.src,size:40}):e.jsx(D,{style:{backgroundColor:U},size:40,children:O(a==null?void 0:a.name)});s.render(e.jsx(ee,{menu:{items:r},placement:"bottomRight",arrow:{pointAtCenter:!0},children:o()}))}},[a,t]),e.jsxs(te,{children:[e.jsxs(ne,{children:[e.jsx("meta",{name:"description",content:M}),e.jsx("meta",{name:"keywords",content:_}),e.jsx("meta",{name:"author",content:z}),e.jsx("title",{children:A}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify(H)})]}),((w=t==null?void 0:t.menuItems)==null?void 0:w.css)&&e.jsx(e.Fragment,{children:e.jsx("style",{dangerouslySetInnerHTML:{__html:(j=t==null?void 0:t.menuItems)==null?void 0:j.css}})}),((v=t==null?void 0:t.menuItems)==null?void 0:v.header)&&e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:500},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:(b=t==null?void 0:t.menuItems)==null?void 0:b.header}})})}),e.jsx("div",{style:{minHeight:"calc(93vh - 6rem)"},children:R}),e.jsx("div",{dangerouslySetInnerHTML:{__html:(C=t==null?void 0:t.menuItems)==null?void 0:C.footer}}),e.jsx(ae,{title:"Tự Học 3D",placement:"left",onClose:()=>h(!1),open:F,width:256,children:e.jsxs("div",{className:"flex flex-col justify-between",style:{height:"100%"},children:[e.jsx(se,{mode:"inline",onClick:n=>{h(!1),setTimeout(()=>{i(n.key)},500)},style:{width:256},items:N((k=t==null?void 0:t.menuItems)==null?void 0:k.header)}),e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(re,{size:22})}),e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(ie,{size:22})}),e.jsx("div",{className:"flex items-center gap-2 my-2",children:e.jsx(oe,{size:22})})]})]})})]})};export{ue as L};
