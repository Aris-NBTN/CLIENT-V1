import{u as q,a as A,c as H,r as u,d as J,j as e,h as O,f as W,X as $,t as X,V as U,W as Y}from"./index-CcDScCIj.js";import{L as Q}from"./Layout-CNPUaByi.js";import{V as Z}from"./Video-CnV5CucZ.js";import{T as l,F as g,P as ee,a as r,b as a}from"./index-Do_G6Ik8.js";import{F as D}from"./Format-Cn16B-ja.js";import{R as x,C as t}from"./row-Bv7HvGZ0.js";import{C as c}from"./index-UyVXlXcm.js";import{C as se}from"./Collapse-BKFegJ3i.js";import{B as m}from"./TextArea-DcrxrkUU.js";import{P as h}from"./progress-BssOhyeZ.js";import{D as f}from"./index-DeMEwB3o.js";import{M as le}from"./index-B_UpkUZM.js";import"./EllipsisOutlined-DOAbwiOn.js";import"./Overflow-DYxonkPG.js";import"./CheckOutlined-CzI6vixS.js";import"./index-BCiBb8i7.js";import"./index-DpwVJilV.js";import"./ActionButton-CiAlGdSe.js";import"./index-cqTSJj2c.js";const be=()=>{var b,C,T,k,F,S,z,P,M,w,E,B;const N=q(),j=A(),y=H(),[s,L]=u.useState({}),[R,v]=u.useState(!1),[o,V]=u.useState(!0),d=J(i=>i.auth.user),G=(b=d==null?void 0:d.courses)==null?void 0:b.some(i=>i===s._id),I=()=>{U.sig(N.slug).then(i=>{L(i),V(!1)}).catch(()=>{j("/courses"),Y("","Không tìm thấy khóa học!","Vui lòng thử lại sau!")})},K=({data:i})=>{const n=i==null?void 0:i.map(p=>JSON.parse(p));return e.jsx(e.Fragment,{children:n==null?void 0:n.map((p,_)=>e.jsxs(t,{span:12,className:"flex items-center gap-2",children:[e.jsx("div",{style:{width:"20px",marginRight:"8px"},dangerouslySetInnerHTML:{__html:p.svgCode}}),p.name]},_))})};return u.useEffect(()=>{I()},[N.slug]),e.jsxs(Q,{ldJson:(s==null?void 0:s.seo)||{},title:`${(s==null?void 0:s.name)||"Chicken War Studio"}`,children:[e.jsx("section",{children:e.jsxs(x,{gutter:[18,18],children:[e.jsx(t,{xl:{span:17,order:2},lg:{span:15,order:2},md:{span:14,order:1},span:24,xs:{order:2},children:e.jsxs(x,{gutter:[18,18],children:[e.jsx(t,{span:24,children:e.jsxs(c,{loading:o,hoverable:!0,children:[e.jsx(c.Meta,{className:"mb-3",title:e.jsxs(l.Title,{className:"!mb-0",level:3,children:[" ",s==null?void 0:s.name," "]}),description:`${(s==null?void 0:s.title)||"Chưa có thông tin"}`}),!((C=s==null?void 0:s.hidden)!=null&&C.includes("benefit"))&&e.jsx(c,{className:"my-2",children:e.jsx(c.Meta,{title:e.jsx(l.Title,{className:"!mt-2 !mb-0",level:4,children:"Lợi ích từ khóa học"}),description:e.jsx(x,{children:((T=s==null?void 0:s.benefit)==null?void 0:T.length)>0?e.jsxs(e.Fragment,{children:[s.benefit.map((i,n)=>e.jsxs(t,{span:24,className:"flex items-center gap-2 my-1",children:[e.jsx(g,{color:"ffc000"}),e.jsx(l,{children:i})]},n)),e.jsx("img",{className:"card-image",src:"/course.png",alt:"Mô tả ảnh"})]}):e.jsx(l.Text,{children:" Chưa có thông tin"})})})}),e.jsx(c.Meta,{title:e.jsx(l.Title,{className:"!mt-2 !mb-0",level:3,children:"Giới thiệu khóa học"}),description:e.jsx(e.Fragment,{children:e.jsx(l,{className:"!text-justify !text-base",children:(s==null?void 0:s.description)||"Chưa có thông tin"})})})]})}),!((k=s==null?void 0:s.hidden)!=null&&k.includes("prerequisite"))&&e.jsx(t,{span:24,children:e.jsx(c,{loading:o,hoverable:!0,children:e.jsx(c.Meta,{className:"mb-2",title:e.jsx(l.Title,{className:"mb-2",level:3,children:"Yêu cầu khóa học"}),description:e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-2",children:((F=s==null?void 0:s.prerequisite)==null?void 0:F.length)>0?s.prerequisite.map((i,n)=>e.jsxs("div",{className:"col-12 flex items-center gap-2 my-1",children:[e.jsx(g,{color:"ffc000"}),e.jsx(l.Text,{children:i})]},n)):e.jsx(l.Text,{children:"Chưa có thông tin"})})})})})}),!((S=s==null?void 0:s.hidden)!=null&&S.includes("customer"))&&e.jsx(t,{Col:!0,span:24,children:e.jsx(c,{loading:o,hoverable:!0,children:e.jsx(c.Meta,{className:"mb-2",title:e.jsx(l.Title,{className:"mb-2",level:3,children:"Khóa học này phù hợp với"}),description:e.jsx(e.Fragment,{children:((z=s==null?void 0:s.customer)==null?void 0:z.length)>0?s.customer.map((i,n)=>e.jsxs("div",{className:"col-12 flex items-center gap-2 my-1",children:[e.jsx(g,{color:"ffc000"}),e.jsx(l.Text,{children:i})]},n)):e.jsx(l.Text,{children:"Chưa có thông tin"})})})})}),!((P=s==null?void 0:s.hidden)!=null&&P.includes("output"))&&e.jsx(t,{Col:!0,span:24,children:e.jsx(c,{loading:o,hoverable:!0,children:e.jsx(c.Meta,{className:"mb-2",title:e.jsx(l.Title,{className:"mb-2",level:3,children:"Sau khi học xong khóa học này bạn có thể"}),description:e.jsx(e.Fragment,{children:((M=s==null?void 0:s.output)==null?void 0:M.length)>0?s.output.map((i,n)=>e.jsxs("div",{className:"col-12 flex items-center gap-2 my-1",children:[e.jsx(g,{color:"ffc000"}),e.jsx(l.Text,{children:i})]},n)):e.jsx(l.Text,{children:"Chưa có thông tin"})})})})}),!((w=s==null?void 0:s.hidden)!=null&&w.includes("module"))&&e.jsx(t,{span:24,children:e.jsxs(c,{loading:o,hoverable:!0,children:[e.jsx(c.Meta,{className:"!mb-2",title:e.jsx(l.Title,{className:"mb-2",level:3,children:"Nội dung khóa học"}),description:"4 Phần, 22 Bài học"}),e.jsx(se,{items:[{key:"1",label:"Giới Thiệu",children:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ee,{color:"ffc000",size:22}),e.jsx(l.Text,{children:"Giới thiệu khóa học"}),e.jsx(m,{className:"ms-auto",type:"primary",onClick:()=>v(!0),children:"Xem thử"})]})})}],defaultActiveKey:["1"]})]})}),!((E=s==null?void 0:s.hidden)!=null&&E.includes("review"))&&e.jsx(t,{span:24,children:e.jsxs(c,{loading:o,hoverable:!0,children:[e.jsx(c.Meta,{className:"mb-2",title:e.jsx(l.Title,{className:"!mb-2",level:3,children:"Đánh giá từ học viên"})}),e.jsxs(x,{gutter:[12,12],children:[e.jsxs(t,{className:"flex flex-col justify-center",md:{span:6},span:24,children:[e.jsx(l.Title,{level:1,style:{color:"#ffc000"},className:"text-center !mb-0",children:"4.9"}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}),e.jsx(l.Text,{className:"text-center fs-6",children:"Đánh giá khóa học"})]}),e.jsxs(t,{md:{span:18},span:24,children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:90,status:"active",percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:9,percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(a,{})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:1,percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(a,{}),e.jsx(a,{})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:0,percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:0,percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(r,{}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{})]})]})]})]})]})})]})}),e.jsx(t,{xl:{span:7,order:2},lg:{span:9,order:2},md:{span:10,order:2},span:24,xs:{order:1},children:e.jsx(c,{loading:o,className:"sticky card-course",style:{top:"3rem"},hoverable:!0,cover:e.jsx(e.Fragment,{children:o?e.jsx(O.Image,{className:"!w-full",active:!0,style:{height:"15rem"}}):e.jsx("div",{className:"px-5 pt-5",children:e.jsx("img",{className:"rounded-md",style:{height:"15rem",objectFit:"cover"},src:s.imgDetail?`${W}/uploads/${s.imgDetail}`:"/empty.png",alt:""})})}),children:e.jsxs(x,{gutter:[12,12],children:[e.jsx(f,{style:{margin:"0px 0",borderColor:"rgb(173 173 173)"},children:"Khóa học bao gồm"}),((B=s==null?void 0:s.includes)==null?void 0:B.length)>0?e.jsx(K,{data:s.includes}):e.jsx("div",{children:"1"}),G||s.price===0?e.jsx(e.Fragment,{children:e.jsxs(t,{span:24,children:[e.jsx(f,{style:{margin:"10px 0",borderColor:"rgb(173 173 173)"}}),d.userType==="user"?e.jsx(m,{size:"large",type:"primary",onClick:()=>j(`/user/course/${s.slug}`),className:"w-full",children:"Học ngay"}):e.jsx(m,{size:"large",className:"w-full",onClick:()=>j("/login",{state:{from:`/user/course/${s.slug}`}}),children:"Đăng nhập để học"})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(t,{span:24,children:[e.jsx(f,{style:{margin:"10px 0",borderColor:"rgb(173 173 173)"},children:"Giá khóa học"}),e.jsxs("div",{className:"flex justify-center items-center gap-3 fs-3 text-center text-danger",children:[e.jsx(l.Title,{className:"!mb-0",type:"danger",level:3,children:D(s.price*(1-s.sale/100))}),s.sale>0&&e.jsxs(e.Fragment,{children:[e.jsx(l.Text,{className:"!mb-0",delete:!0,children:D(s.price)}),e.jsxs("span",{className:"sale",children:[s.sale,"%"]})]})]})]}),e.jsxs(t,{span:24,children:[e.jsx(f,{style:{margin:"10px 0",borderColor:"rgb(173 173 173)"}}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(m,{type:"primary",className:"mb-2",onClick:()=>{y($(s)),j("/checkout")},size:"large",children:"Mua ngay"}),e.jsx(m,{size:"large",onClick:()=>{y($(s)),X(s.name,"Thêm vào giỏ hàng thành công",`Đã thêm ${s.name} vào giỏ hàng`)},children:"Thêm vào giỏ hàng"})]})]})]})]})})})]})}),e.jsx(le,{centered:!0,open:R,onOk:()=>v(!1),onCancel:()=>v(!1),width:1e3,footer:null,closeIcon:null,className:"mb-2",children:e.jsx(Z,{src:"https://www.w3schools.com/html/mov_bbb.mp4"})})]})};export{be as default};
