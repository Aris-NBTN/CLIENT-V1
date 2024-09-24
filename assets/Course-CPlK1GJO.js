import{u as $,a as V,c as I,r as p,d as L,j as e,f as u,h as R,W as G,X as T,e as K,U as A,V as H}from"./index-CHCWDRZ2.js";import{L as q}from"./Layout-BBBMWoQx.js";import{V as U}from"./Video-CQjVAdiJ.js";import{T as i,F as N,P as k,a as r,b as c,c as X,d as _,e as z}from"./index-DdTMwFaj.js";import{I as J}from"./index-DKWSl0V5.js";import{F as P}from"./Format-DsbWSY0F.js";import{R as x,C as l}from"./row-BhNtE9JD.js";import{C as t}from"./index-BpOotXY0.js";import{C as O}from"./Collapse-DGwXp-8g.js";import{B as m}from"./TextArea-DAd0mUFG.js";import{P as h}from"./progress-CFbhnIB8.js";import{D as f}from"./index-JslxprzG.js";import{M as W}from"./index-BXmm9gNd.js";import"./EllipsisOutlined-DFwrhZRX.js";import"./Overflow-CwOSffrJ.js";import"./CheckOutlined-OG0Tjpvu.js";import"./index-B6MxgLcR.js";import"./index-DbC7zbte.js";import"./ActionButton-OOPoV2If.js";import"./index-BvehVlEt.js";const ge=()=>{var y,b,C,F;const S=$(),j=V(),v=I(),[s,B]=p.useState({}),[M,g]=p.useState(!1),[n,D]=p.useState(!0),d=L(a=>a.auth.user),E=(y=d==null?void 0:d.courses)==null?void 0:y.some(a=>a===s._id),w=()=>{A.sig(S.slug).then(a=>{B(a),D(!1)}).catch(()=>{j("/courses"),H("","Không tìm thấy khóa học!","Vui lòng thử lại sau!")})};return p.useEffect(()=>{w()},[]),e.jsxs(q,{ldJson:(s==null?void 0:s.seo)||{},title:`${(s==null?void 0:s.name)||"Tự học 3D"}`,children:[e.jsx("section",{children:e.jsxs(x,{gutter:[18,18],children:[e.jsx(l,{xl:{span:17,order:2},lg:{span:15,order:2},md:{span:14,order:1},span:24,xs:{order:2},children:e.jsxs(x,{gutter:[18,18],children:[e.jsx(l,{span:24,children:e.jsxs(t,{loading:n,hoverable:!0,children:[e.jsx(t.Meta,{className:"mb-3",title:e.jsx(i.Title,{className:"mb-0",level:3,children:s==null?void 0:s.name}),description:`${(s==null?void 0:s.title)||"Chưa có thông tin"}`}),e.jsx(t,{className:"my-2",children:e.jsx(t.Meta,{title:"Lợi ích từ khóa học",description:e.jsx(x,{children:((b=s==null?void 0:s.benefit)==null?void 0:b.length)>0?e.jsxs(e.Fragment,{children:[s.benefit.map((a,o)=>e.jsx("div",{children:e.jsxs(l,{className:"flex items-center gap-2 my-1",children:[e.jsx(N,{color:"ffc000"}),e.jsx(i.Text,{children:a})]},o)},o)),e.jsx("img",{className:"card-image",src:`${u}/asset/course/couresData.png`,alt:"Mô tả ảnh"})]}):e.jsx(i.Text,{children:"Chưa có thông tin"})})})}),e.jsx(t.Meta,{title:e.jsx(i.Title,{className:"mt-2 mb-0",level:3,children:"Giới thiệu khóa học"}),description:e.jsx(e.Fragment,{children:e.jsx(i.Text,{children:(s==null?void 0:s.description)||"Chưa có thông tin"})})})]})}),e.jsx(l,{span:24,children:e.jsx(t,{loading:n,hoverable:!0,children:e.jsx(t.Meta,{className:"mb-2",title:e.jsx(i.Title,{className:"mb-2",level:3,children:"Yêu cầu khóa học"}),description:e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-2",children:((C=s==null?void 0:s.prerequisite)==null?void 0:C.length)>0?s.prerequisite.map((a,o)=>e.jsxs("div",{className:"col-12 flex items-center gap-2 my-1",children:[e.jsx(N,{color:"ffc000"}),e.jsx(i.Text,{children:a})]},o)):e.jsx(i.Text,{children:"Chưa có thông tin"})})})})})}),e.jsx(l,{span:24,children:e.jsx(t,{loading:n,hoverable:!0,children:e.jsx(t.Meta,{className:"mb-2",title:e.jsx(i.Title,{className:"mb-2",level:3,children:"Khóa học này phù hợp với"}),description:e.jsx(e.Fragment,{children:((F=s==null?void 0:s.customer)==null?void 0:F.length)>0?s.customer.map((a,o)=>e.jsxs("div",{className:"col-12 flex items-center gap-2 my-1",children:[e.jsx(N,{color:"ffc000"}),e.jsx(i.Text,{children:a})]},o)):e.jsx(i.Text,{children:"Chưa có thông tin"})})})})}),e.jsx(l,{span:24,children:e.jsxs(t,{loading:n,hoverable:!0,children:[e.jsx(t.Meta,{className:"!mb-2",title:e.jsx(i.Title,{className:"mb-2",level:3,children:"Nội dung khóa học"}),description:"4 Phần, 22 Bài học"}),e.jsx(O,{items:[{key:"1",label:"Giới Thiệu",children:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(k,{color:"ffc000",size:22}),e.jsx(i.Text,{children:"Giới thiệu khóa học"}),e.jsx(m,{className:"ms-auto",type:"primary",onClick:()=>g(!0),children:"Xem thử"})]})})}],defaultActiveKey:["1"]})]})}),e.jsx(l,{span:24,children:e.jsxs(t,{loading:n,hoverable:!0,children:[e.jsx(t.Meta,{className:"mb-2",title:e.jsx(i.Title,{className:"!mb-2",level:3,children:"Đánh giá từ học viên"})}),e.jsxs(x,{gutter:[12,12],children:[e.jsxs(l,{className:"flex flex-col justify-center",md:{span:6},span:24,children:[e.jsx(i.Title,{level:1,style:{color:"#ffc000"},className:"text-center !mb-0",children:"4.9"}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}),e.jsx(i.Text,{className:"text-center fs-6",children:"Đánh giá khóa học"})]}),e.jsxs(l,{md:{span:18},span:24,children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:90,status:"active",percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:9,percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(c,{})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:1,percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(c,{}),e.jsx(c,{})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:0,percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(c,{}),e.jsx(c,{}),e.jsx(c,{})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"mb-2",percent:0,percentPosition:{align:"center",type:"inner"},size:["100%",22],strokeColor:{from:"#F6E96B",to:"#ffc000"}}),e.jsxs("div",{className:"evaluate flex justify-center gap-1",style:{color:"#ffc000",fontSize:18},children:[e.jsx(r,{}),e.jsx(c,{}),e.jsx(c,{}),e.jsx(c,{}),e.jsx(c,{})]})]})]})]})]})})]})}),e.jsx(l,{xl:{span:7,order:2},lg:{span:9,order:2},md:{span:10,order:2},span:24,xs:{order:1},children:e.jsx(t,{loading:n,className:"sticky card-course",style:{top:"3rem"},hoverable:!0,cover:e.jsx(e.Fragment,{children:n?e.jsx(R.Image,{className:"!w-full",active:!0,style:{height:"15rem"}}):e.jsx("div",{className:"px-5 pt-5",children:e.jsx("img",{className:"rounded-md",style:{height:"15rem",objectFit:"cover"},src:s.imgDetail?`${u}/uploads/${s.imgDetail}`:`${u}/asset/course/empty.png`,alt:""})})}),children:e.jsxs(x,{gutter:[12,12],children:[e.jsx(f,{style:{margin:"0px 0",borderColor:"rgb(173 173 173)"},children:"Khóa học bao gồm"}),e.jsxs(l,{span:12,className:"flex items-center gap-2",children:[e.jsx(X,{size:18})," Chuyên mục : 4"]}),e.jsxs(l,{span:12,className:"flex items-center gap-2",children:[e.jsx(k,{size:20})," Bài học: 42"]}),e.jsxs(l,{span:12,className:"flex items-center gap-2",children:[e.jsx(G,{size:20})," Bài tập"]}),e.jsxs(l,{span:12,className:"flex items-center gap-2",children:[e.jsx(_,{size:20})," Tài liệu"]}),e.jsxs(l,{span:12,className:"flex items-center gap-2",children:[e.jsx(z,{size:20})," Dễ hiểu"]}),e.jsxs(l,{span:12,className:"flex items-center gap-2",children:[e.jsx(z,{size:20})," Học trọn đời"]}),e.jsxs(l,{span:24,className:"flex items-center gap-2",children:[e.jsx(J,{size:22})," Học trên mọi thiết bị có internet"]}),E||s.price===0?e.jsx(e.Fragment,{children:e.jsxs(l,{span:24,children:[e.jsx(f,{style:{margin:"10px 0",borderColor:"rgb(173 173 173)"}}),d.userType==="user"?e.jsx(m,{size:"large",type:"primary",onClick:()=>j(`/user/course/${s.slug}`),className:"w-full",children:"Học ngay"}):e.jsx(m,{size:"large",className:"w-full",onClick:()=>j("/login",{state:{from:`/user/course/${s.slug}`}}),children:"Đăng nhập để học"})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(l,{span:24,children:[e.jsx(f,{style:{margin:"10px 0",borderColor:"rgb(173 173 173)"},children:"Giá khóa học"}),e.jsxs("div",{className:"flex justify-center items-center gap-3 fs-3 text-center text-danger",children:[e.jsx(i.Title,{className:"!mb-0",type:"danger",level:3,children:P(s.price*(1-s.sale/100))}),s.sale>0&&e.jsxs(e.Fragment,{children:[e.jsx(i.Text,{className:"!mb-0",delete:!0,children:P(s.price)}),e.jsxs("span",{className:"sale",children:[s.sale,"%"]})]})]})]}),e.jsxs(l,{span:24,children:[e.jsx(f,{style:{margin:"10px 0",borderColor:"rgb(173 173 173)"}}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(m,{type:"primary",className:"mb-2",onClick:()=>{v(T(s)),j("/checkout")},size:"large",children:"Mua ngay"}),e.jsx(m,{size:"large",onClick:()=>{v(T(s)),K(s.name,"Thêm vào giỏ hàng thành công",`Đã thêm ${s.name} vào giỏ hàng`)},children:"Thêm vào giỏ hàng"})]})]})]})]})})})]})}),e.jsx(W,{centered:!0,open:M,onOk:()=>g(!1),onCancel:()=>g(!1),width:1e3,footer:null,closeIcon:null,className:"mb-2",children:e.jsx(U,{src:"https://www.w3schools.com/html/mov_bbb.mp4"})})]})};export{ge as default};
