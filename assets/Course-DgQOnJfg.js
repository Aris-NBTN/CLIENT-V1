import{u as Y,a as J,q as O,r as m,s as U,a5 as W,I as Q,j as e,y as X,a6 as L,t as Z}from"./index-BjMGDQbw.js";import{L as ee}from"./Layout-DR5UUNxc.js";import{V as se}from"./Video-B2J39eeS.js";import{F as u,a as c,b as a,c as le,d as re}from"./index-Bd7UcDR3.js";import{P as ce}from"./index-ChSNQFOy.js";import{F as V}from"./Format-obDPdb-a.js";import{T as l}from"./index-DDguUU1-.js";import{R as x,C as t}from"./row-CiTWFBza.js";import{C as n}from"./index-BW1dhqT8.js";import{C as ie}from"./Collapse-hk4xtS6H.js";import{P as h}from"./progress-DabCRlFe.js";import{S as te}from"./context-Z-wvsuTa.js";import{D as g}from"./index-fu4XjZzB.js";import{B as f}from"./button-DSF6g_PM.js";import{M as ne}from"./index-ohQ0e7Eu.js";import"./EllipsisOutlined-B2NE3A1k.js";import"./Overflow-t-PEjg36.js";import"./useLocale-C6VG5USz.js";import"./TextArea-CCT7zbwr.js";import"./CheckOutlined-DycREzEt.js";import"./compact-item-Bntbl4Jb.js";import"./index-hN2c-FCA.js";import"./Dropdown-BVxEgPGc.js";import"./PurePanel-Bf-QZCUo.js";const Be=()=>{var y,C,T,F,k,z,S,M,P,w,B,$,E,H,K,D;const N=Y(),j=J(),b=O(),[s,_]=m.useState({}),[I,v]=m.useState(!1),[o,R]=m.useState(!0),d=U(r=>r.auth.user),q=(y=d==null?void 0:d.courses)==null?void 0:y.some(r=>r===s._id);console.log(s.includes);const G=({data:r})=>e.jsx(e.Fragment,{children:r==null?void 0:r.map((i,p)=>e.jsxs(t,{span:12,className:"flex items-center gap-2",children:[e.jsx("div",{style:{width:"20px"},dangerouslySetInnerHTML:{__html:i.svgCode}}),i.name]},p))});m.useEffect(()=>{W.sig(N.slug).then(r=>{_(r),R(!1)}).catch(()=>{j("/courses"),Q("","Không tìm thấy khóa học!","Vui lòng thử lại sau!")})},[N.slug]);const A=m.useMemo(()=>{var r;return(r=s==null?void 0:s.module)==null?void 0:r.map(i=>({key:i._id,label:e.jsx(l.Title,{level:5,strong:!0,className:"!mb-0",children:i.title}),extra:`${i.children.length} Bài Học`,children:i.children.map(p=>e.jsx("div",{className:"flex justify-between cursor-pointer",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(ce,{color:"ffc000",size:22}),e.jsx(l.Title,{level:5,className:"!mb-0 p-2",children:p.title})]})},p._id))}))},[s==null?void 0:s.module]);return e.jsxs(ee,{ldJson:(s==null?void 0:s.seo)||{},title:`${(s==null?void 0:s.name)||"Chicken War Studio"}`,children:[e.jsx("section",{children:e.jsxs(x,{gutter:[24,24],children:[e.jsx(t,{xl:{span:17,order:2},lg:{span:15,order:2},md:{span:24,order:2},span:24,xs:{order:2},children:e.jsxs(x,{gutter:[24,24],children:[e.jsx(t,{span:24,children:e.jsxs(n,{loading:o,hoverable:!0,children:[e.jsx(n.Meta,{className:"mb-3",title:e.jsxs(l.Title,{className:"!mb-0",level:3,children:[" ",s==null?void 0:s.name," "]}),description:`${(s==null?void 0:s.title)||"Chưa có thông tin"}`}),!((C=s==null?void 0:s.hidden)!=null&&C.includes("benefit"))&&e.jsx(n,{className:"my-2",children:e.jsx(n.Meta,{title:e.jsx(l.Title,{className:"!mt-2 !mb-0",level:4,children:"Lợi ích từ khóa học"}),description:e.jsx(x,{children:((T=s==null?void 0:s.benefit)==null?void 0:T.length)>0?e.jsxs(e.Fragment,{children:[s.benefit.map((r,i)=>e.jsxs(t,{span:24,className:"flex items-center gap-2 my-1",children:[e.jsx(u,{color:"ffc000"}),e.jsx(l,{className:"text-base",children:r})]},i)),e.jsx("img",{className:"card-image",src:"/course.png",alt:"Mô tả ảnh"})]}):e.jsx(l.Text,{children:" Chưa có thông tin"})})})}),e.jsx(n.Meta,{title:e.jsx(l.Title,{className:"!mt-2 !mb-0",level:3,children:"Giới thiệu khóa học"}),description:e.jsx(e.Fragment,{children:e.jsx(l,{className:"!text-justify !text-base",children:(s==null?void 0:s.description)||"Chưa có thông tin"})})})]})}),!((F=s==null?void 0:s.hidden)!=null&&F.includes("prerequisite"))&&e.jsx(t,{span:24,children:e.jsx(n,{loading:o,hoverable:!0,children:e.jsx(n.Meta,{className:"mb-2",title:e.jsx(l.Title,{className:"mb-2",level:3,children:" Yêu Cầu Khóa Học"}),description:e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-2",children:((k=s==null?void 0:s.prerequisite)==null?void 0:k.length)>0?s.prerequisite.map((r,i)=>e.jsxs("div",{className:"col-12 flex items-center gap-2 my-1",children:[e.jsx(u,{color:"ffc000"}),e.jsx(l.Text,{className:"text-base",children:r})]},i)):e.jsx(l.Text,{children:"Chưa có thông tin"})})})})})}),!((z=s==null?void 0:s.hidden)!=null&&z.includes("customer"))&&e.jsx(t,{Col:!0,span:24,children:e.jsx(n,{loading:o,hoverable:!0,children:e.jsx(n.Meta,{className:"mb-2",title:e.jsx(l.Title,{className:"mb-2",level:3,children:"Khóa học này phù hợp với"}),description:e.jsx(e.Fragment,{children:((S=s==null?void 0:s.customer)==null?void 0:S.length)>0?s.customer.map((r,i)=>e.jsxs("div",{className:"col-12 flex items-center gap-2 my-1",children:[e.jsx(u,{color:"ffc000"}),e.jsx(l.Text,{className:"text-base",children:r})]},i)):e.jsx(l.Text,{children:"Chưa có thông tin"})})})})}),!((M=s==null?void 0:s.hidden)!=null&&M.includes("output"))&&e.jsx(t,{Col:!0,span:24,children:e.jsx(n,{loading:o,hoverable:!0,children:e.jsx(n.Meta,{className:"mb-2",title:e.jsx(l.Title,{className:"mb-2",level:3,children:"Hoàn Thành Khóa Học"}),description:e.jsx(e.Fragment,{children:((P=s==null?void 0:s.output)==null?void 0:P.length)>0?s.output.map((r,i)=>e.jsxs("div",{className:"col-12 flex items-center gap-2 my-1",children:[e.jsx(u,{color:"ffc000"}),e.jsx(l.Text,{className:"text-base",children:r})]},i)):e.jsx(l.Text,{children:"Chưa có thông tin"})})})})}),!((w=s==null?void 0:s.hidden)!=null&&w.includes("module"))&&e.jsx(t,{span:24,children:e.jsxs(n,{loading:o,hoverable:!0,children:[e.jsx(n.Meta,{className:"!mb-2",title:e.jsx(l.Title,{className:"mb-2",level:3,children:" Nội Dung Khóa Học "}),description:`Khóa học này bao gồm ${(B=s==null?void 0:s.module)==null?void 0:B.length} chương và ${($=s==null?void 0:s.module)==null?void 0:$.reduce((r,i)=>r+i.children.length,0)} bài học`}),e.jsx(ie,{items:A,defaultActiveKey:["1"]})]})}),!((E=s==null?void 0:s.hidden)!=null&&E.includes("review"))&&e.jsx(t,{span:24,children:e.jsxs(n,{loading:o,hoverable:!0,children:[e.jsx(n.Meta,{className:"mb-2",title:e.jsx(l.Title,{className:"!mb-2",level:3,children:" Đánh Giá Từ Học Viên "})}),e.jsxs(x,{gutter:[12,12],children:[e.jsxs(t,{className:"flex flex-col justify-center",md:{span:6},span:24,children:[e.jsx(l.Title,{level:1,style:{color:"#ffc000"},className:"text-center !mb-0",children:"4.9"}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(c,{}),e.jsx(c,{}),e.jsx(c,{}),e.jsx(c,{}),e.jsx(c,{})]}),e.jsx(l.Text,{className:"text-center text-base",children:" Đánh giá khóa học"})]}),e.jsxs(t,{md:{span:18},span:24,children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:90,status:"active",percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(c,{}),e.jsx(c,{}),e.jsx(c,{}),e.jsx(c,{}),e.jsx(c,{})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:9,percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(c,{}),e.jsx(c,{}),e.jsx(c,{}),e.jsx(c,{}),e.jsx(a,{})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:1,percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(c,{}),e.jsx(c,{}),e.jsx(c,{}),e.jsx(a,{}),e.jsx(a,{})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:0,percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(c,{}),e.jsx(c,{}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:0,percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(c,{}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{})]})]})]})]})]})})]})}),e.jsx(t,{className:"mx-auto",xl:{span:7,order:2},lg:{span:9,order:2},md:{span:12,order:1},span:24,xs:{order:1},children:e.jsx(n,{loading:o,className:"sticky card-course",style:{top:"3rem"},hoverable:!0,cover:e.jsx(e.Fragment,{children:o?e.jsx(te.Image,{className:"!w-full",active:!0,style:{height:"15rem"}}):e.jsx("div",{className:"px-5 pt-5",children:e.jsx("img",{className:"rounded-md",style:{height:"15rem",objectFit:"cover"},src:s.imgDetail?`${X}/uploads/${s.imgDetail}`:"/empty.png",alt:""})})}),children:e.jsxs(x,{gutter:[12,12],children:[e.jsx(g,{style:{margin:"0px 0",borderColor:"rgb(173 173 173)"},children:"Khóa học bao gồm"}),e.jsxs(t,{span:12,className:"flex items-center gap-2",children:[e.jsx(le,{size:"20px"})," ",e.jsxs(l,{children:["Chuyên Mục ",(H=s==null?void 0:s.module)==null?void 0:H.length]})]}),e.jsxs(t,{span:12,className:"flex items-center gap-2",children:[e.jsx(re,{size:"20px"})," ",e.jsxs(l,{children:["Bài Học ",(K=s==null?void 0:s.module)==null?void 0:K.reduce((r,i)=>r+i.children.length,0)]})]}),((D=s==null?void 0:s.includes)==null?void 0:D.length)>0&&e.jsx(G,{data:s.includes}),q||s.price===0?e.jsx(e.Fragment,{children:e.jsxs(t,{span:24,children:[e.jsx(g,{style:{margin:"10px 0",borderColor:"rgb(173 173 173)"}}),d.userType==="user"?e.jsx(f,{size:"large",type:"primary",onClick:()=>j(`/user/course/${s.slug}`),className:"w-full",children:"Học ngay"}):e.jsx(f,{size:"large",className:"w-full",onClick:()=>j("/login",{state:{from:`/user/course/${s.slug}`}}),children:"Đăng nhập để học"})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(t,{span:24,children:[e.jsx(g,{style:{margin:"10px 0",borderColor:"rgb(173 173 173)"},children:"Giá khóa học"}),e.jsxs("div",{className:"flex justify-center items-center gap-3 fs-3 text-center text-danger",children:[e.jsx(l.Title,{className:"!mb-0",type:"danger",level:3,children:V(s.price*(1-s.sale/100))}),s.sale>0&&e.jsxs(e.Fragment,{children:[e.jsx(l.Text,{className:"!mb-0",delete:!0,children:V(s.price)}),e.jsxs("span",{className:"sale",children:[s.sale,"%"]})]})]})]}),e.jsxs(t,{span:24,children:[e.jsx(g,{style:{margin:"10px 0",borderColor:"rgb(173 173 173)"}}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(f,{type:"primary",className:"mb-2",onClick:()=>{b(L(s)),j("/checkout")},size:"large",children:"Mua ngay"}),e.jsx(f,{size:"large",onClick:()=>{b(L(s)),Z(s.name,"Thêm vào giỏ hàng thành công",`Đã thêm ${s.name} vào giỏ hàng`)},children:"Thêm vào giỏ hàng"})]})]})]})]})})})]})}),e.jsx(ne,{centered:!0,open:I,onOk:()=>v(!1),onCancel:()=>v(!1),width:1e3,footer:null,closeIcon:null,className:"mb-2",children:e.jsx(se,{src:"https://www.w3schools.com/html/mov_bbb.mp4"})})]})};export{Be as default};
