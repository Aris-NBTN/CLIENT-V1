import{r as o,j as e,f as S,V as ue,a as pe,c as ge,t as xe,d as B,T as je,ab as be,Q as ye,U as I,e as Ce,ac as j,ai as fe,aj as H,ak as Ne,al as ve,am as we,an as Fe}from"./index-Ca-ywajW.js";import{b7 as Ie}from"./Layout-BoplMKg2.js";import{E as U,T as R}from"./Table-C1YdLMua.js";import{F as M,a as G,c as J,b as Se}from"./jspdf.es.min-CL64axIk.js";import{f as ke,F as Te,g as Ae,d as K,h as De,T as Oe}from"./Format-BbRMhcZf.js";import"./html2canvas.esm-CBrSDip1.js";import{M as Pe,a as $e}from"./index-BT2peHDC.js";import{U as Le}from"./index-BGTeNL6G.js";import{I as Ve}from"./index-DaPgACoh.js";import{R as Re}from"./PlusOutlined-BDAEAEux.js";import{T as W,h as Me,a as i,b as q,i as qe}from"./index-DwMj5orM.js";import{F as t}from"./index-DEz6s2ne.js";import{B as C}from"./TextArea-BGDHj_Xu.js";import{M as z}from"./index-DNZNwrlU.js";import{I as g}from"./index-C_xNPb7d.js";import{S as d}from"./index-QJ3ETuZ9.js";import{D as ze}from"./index-BwP-EMz1.js";import{R as Q,C as f}from"./row-Bc2UZi5r.js";import{T as Ee}from"./index-B4ezo7p-.js";import"./index-CDdRk5rc.js";import"./CheckOutlined-DPvv86UP.js";import"./context-BPytJE9N.js";import"./Overflow-pX7p5_Au.js";import"./addEventListener-CsPXXqV9.js";import"./iconUtil-CRocJbJK.js";import"./EllipsisOutlined-D2qaaC01.js";import"./index-CW-2u7D2.js";import"./index-BkKP-bp6.js";import"./index-DIMlAJc2.js";import"./SearchOutlined-CU1oLW5s.js";import"./index-BUPKZCPb.js";import"./index-DeworCSe.js";import"./progress-BjVIq0d6.js";import"./index-BVaqU8xN.js";const _e=N=>new Promise((u,p)=>{const m=new FileReader;m.readAsDataURL(N),m.onload=()=>u(m.result),m.onerror=r=>p(r)}),Y=({limit:N,apiUpload:u,body:p,fileLists:m,name:r})=>{const[k,l]=o.useState(!1),[T,A]=o.useState(""),v=m==="undefined"?[]:[{uid:m,name:m,status:"done",url:`${S}/uploads/${m}`}],[D,b]=o.useState(v);o.useEffect(()=>{b(v)},[m]);const $=async n=>{!n.url&&!n.preview&&(n.preview=await _e(n.originFileObj)),A(n.url||n.preview),l(!0)},w=({fileList:n,file:s})=>{b(n),s.status==="done"&&ue.put({id:p,[r]:s.response})},L=e.jsxs("button",{style:{border:0,background:"none"},type:"button",children:[e.jsx(Re,{}),e.jsx("div",{style:{marginTop:8},children:"Tải ảnh lên"})]});return e.jsxs(e.Fragment,{children:[e.jsx(Le,{data:{folder:"123"},action:u,listType:"picture-card",fileList:D,onPreview:$,onChange:w,children:D.length>=N?null:L}),T&&e.jsx(Ve,{wrapperStyle:{display:"none"},preview:{visible:k,onVisibleChange:n=>l(n),afterOpenChange:n=>!n&&A("")},src:T})]})};let Be=0;const wa=()=>{const N=pe(),u=ge(),[p]=t.useForm(),[m]=t.useForm(),[r]=t.useForm(),[k]=t.useForm(),{token:{colorPrimary:l}}=xe.useToken(),T=t.useWatch("price",p),A=t.useWatch("sale",p),v=o.useRef(null),[D,b]=o.useState(!1),[$,w]=o.useState(!1),[L,n]=o.useState(!1),[s,X]=o.useState(""),[E,Z]=o.useState([]),[O,ee]=o.useState({}),{courses:_,loading:P}=B(a=>a.courses),{categoryCourses:c,loading:V}=B(a=>a.categoryCourses),ae=o.useMemo(()=>_.map(a=>({...a,key:a._id})),[_]),se=o.useMemo(()=>c.map(a=>({...a,key:a._id})),[c]),te=a=>{const{name:h,svgCode:F}=a,x=h||`New item ${Be++}`;Z([...E,x]),ee({...O,[x]:F}),k.resetFields(),setTimeout(()=>{var y;(y=v.current)==null||y.focus()},0)},le=[{title:"Tên khóa học",dataIndex:"name",width:"10%",type:"text",editable:!0,ellipsis:{showTitle:!0},...M({dataIndex:"name"}),render:a=>e.jsx(je,{placement:"top",title:a,children:a})},{title:"Link",dataIndex:"slug",width:"10%",type:"text",editable:!1,ellipsis:{showTitle:!0},...M({dataIndex:"slug"}),render:a=>e.jsx(e.Fragment,{children:e.jsx(W.Paragraph,{className:"!mb-0",ellipsis:{suffix:""},copyable:{text:`/course/${a}`},children:a})})},{title:"Danh mục",dataIndex:"category",width:"10%",type:"select",editable:!0,optionSelect:Array.isArray(c)&&c.length>0?c==null?void 0:c.map(a=>({label:a.category,value:a._id})):[],...Array.isArray(c)&&c.length>0?G("category",c.map(a=>({text:a.category,value:a._id}))):{},render:a=>a&&c&&Array.isArray(c)&&c.length>0?ke(a,c,"category"):null},{title:"Giá",dataIndex:"price",width:"7%",type:"price",editable:!0,...J({dataIndex:"price",type:"number"}),render:a=>Te(a)},{title:"Giảm",dataIndex:"sale",width:"5%",type:"percent",editable:!0,...J({dataIndex:"sale",type:"number"}),render:a=>Ae(a)},{title:"Trang thái",dataIndex:"status",width:"8%",type:"select",optionSelect:[{label:"Đang bán",value:"Đang bán"},{label:"Chưa bán",value:"Chưa bán"}],editable:!0,...G("status",[{value:"Đang bán",text:"Đang bán"},{value:"Chưa bán",text:"Chưa bán"}])},{title:"Sao",dataIndex:"star",width:"6%",type:"select",optionSelect:[{label:"3",value:"3"},{label:"4",value:"4"},{label:"4.5",value:"4.5"},{label:"5",value:"5"}],editable:!0},{title:"Ngày tạo",dataIndex:"createdAt",width:"8%",...Se({dataIndex:"createdAt"}),render:a=>K(a)},{title:"Cập nhập",dataIndex:"updatedAt",width:"8%",render:a=>De(a)},{title:"Thông tin",dataIndex:"info",width:"7%",render:(a,h)=>e.jsx("div",{className:"flex justify-center",children:e.jsx(C,{type:"primary",ghost:!0,onClick:()=>{r.setFieldsValue(h),b(!0),X(h)},children:"Thông tin"})})}],re=[{title:"Tên danh mục",dataIndex:"category",width:"70%",type:"text",editable:!0,...M({dataIndex:"category"})}],ne=a=>{j(u,fe(a),()=>{w(!1),p.resetFields()})},ie=a=>{j(u,H(a))},oe=a=>{a.id=a.key,j(u,H(a),()=>{b(!1),r.resetFields()})},ce=a=>{j(u,Ne(a))},de=a=>{j(u,ve(a),()=>{n(!1),m.resetFields()})},me=a=>{j(u,we(a))},he=a=>{j(u,Fe(a))};return o.useEffect(()=>{P===!0&&u(be())},[]),o.useEffect(()=>{V&&u(ye())},[]),o.useEffect(()=>{(()=>{const h=p.getFieldValue("price")||0,F=p.getFieldValue("sale")||0,x=h-h*F/100;p.setFieldsValue({priceSale:x>=0?x:0})})()},[T,A]),e.jsxs(Ie,{header:e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center",children:e.jsx("h6",{className:"mb-0",children:"KHÓA HỌC"})})}),button:e.jsxs(e.Fragment,{children:[e.jsx(C,{type:"primary",onClick:()=>{n(!0)},children:" Thêm danh mục"}),e.jsx(C,{type:"primary",onClick:()=>w(!0),children:"Thêm khóa học"})]}),children:[e.jsx(U,{loading:P,data:ae,columns:le,onSave:ie,onDelete:ce,button:a=>e.jsx("div",{className:"flex gap-3",children:e.jsx(Pe,{onClick:()=>N(`/admin/course/${a.slug}`),size:20,color:"red"})})}),e.jsx(z,{title:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[" Thông tin khóa học: ",e.jsx(W.Text,{type:"danger",children:r.getFieldValue("name")})]}),e.jsx(C,{className:"me-4",icon:s!=null&&s.seo?e.jsx(Me,{size:20,color:l}):e.jsx($e,{size:20,color:"red"}),onClick:()=>{const a={"@context":"https://schema.org/","@id":s==null?void 0:s.slug,"@type":"Course",name:s==null?void 0:s.name,description:s==null?void 0:s.description,publisher:{"@type":"Organization",name:"Chicken War Studio",url:`${I}`},provider:{"@type":"Organization",name:"Chicken War Studio",url:`${I}`},image:[`${S}/upload/course/123/${s==null?void 0:s.imgDetail}`,`${S}/upload/course/123/${s==null?void 0:s.img}`],aggregateRating:{"@type":"AggregateRating",ratingValue:s==null?void 0:s.star,ratingCount:2e3,reviewCount:1200},offers:[{"@type":"Offer",category:s==null?void 0:s.category,priceCurrency:"VND",price:s==null?void 0:s.price}],hasCourseInstance:[{"@type":"CourseInstance",courseMode:"Blended",location:"HoChiMinh University",courseSchedule:{"@type":"Schedule",duration:"PT3H",repeatFrequency:"Daily",repeatCount:31},instructor:[{"@type":"Person",name:"Nguyen Bac Trung Nam",description:"3D Artist",image:`${I}`}]},{"@type":"CourseInstance",courseMode:"Online",courseWorkload:"PT22H"}],totalHistoricalEnrollment:400,datePublished:K(s==null?void 0:s.createdAt),educationalLevel:"Advanced",about:["3D Modeling","3D environment","3D artist"],teaches:["Practice and apply systems thinking to plan for change","Understand how memory allocation works."],financialAidEligible:"Scholarship Available",inLanguage:"vn",availableLanguage:["vn","es"],coursePrerequisites:["Basic understanding of C++ up to arrays and functions.",`${I}`],educationalCredentialAwarded:[{"@type":"EducationalOccupationalCredential",name:"3D Modeling Certificate",url:`${I}`,credentialCategory:"Certificate"}]};Ce("ldjs","Tạo file thành công","Đã tạo file LD+JS, vui lòng cập nhập!"),r.setFieldValue("seo",a)},children:s!=null&&s.seo?"Đã tạo file LD+JS":"Tạo file LD+JS"})]})}),centered:!0,open:D,maskClosable:!1,onOk:()=>r.submit(),onCancel:()=>{b(!1),r.resetFields()},confirmLoading:P,width:800,children:e.jsxs(t,{form:r,name:"customForm",layout:"vertical",onFinish:oe,children:[e.jsx(t.Item,{className:"mb-0 hidden",name:"key",children:e.jsx(g,{className:"mb-2"})}),e.jsx(t.Item,{className:"mb-2",name:"title",label:"Tiêu đề",children:e.jsx(g,{size:"large",className:"mb-2",placeholder:"Nhập tiêu đề"})}),e.jsx(t.Item,{className:"mb-2",name:"prerequisite",label:"Điều kiện tiên quyết",children:e.jsx(d,{size:"large",className:"w-full mb-2",placeholder:"Chọn & nhập điều kiện tiên quyết",mode:"tags",tokenSeparators:[","]})}),e.jsx(t.Item,{className:"mb-2",name:"customer",label:"Đối tượng khách hàng",children:e.jsx(d,{size:"large",className:"w-full mb-2",placeholder:"Chọn & nhập đối tượng khách hàng",mode:"tags",tokenSeparators:[","]})}),e.jsx(t.Item,{className:"mb-2",name:"output",label:"Tiêu chí đầu ra",children:e.jsx(d,{size:"large",className:"w-full mb-2",placeholder:"Chọn & nhập tiêu chí đầu ra",mode:"tags",tokenSeparators:[","]})}),e.jsx(t.Item,{className:"mb-2",name:"benefit",label:"Lợi ích từ khóa học",children:e.jsx(d,{size:"large",className:"w-full mb-2",placeholder:"Chọn & nhập lợi ích",mode:"tags",tokenSeparators:[","]})}),e.jsx(t.Item,{className:"mb-2",name:"includes",label:"Khóa học bao gồm",children:e.jsx(d,{size:"large",mode:"multiple",placeholder:"custom dropdown render",tagRender:a=>{const{value:h,closable:F,onClose:x}=a;if(h!==void 0){const y=JSON.parse(h);return e.jsx(Oe,{style:{height:32,marginInlineEnd:4},closable:F,onClose:x,className:"flex items-center",children:e.jsxs("div",{className:"flex",children:[y.svgCode?e.jsx("div",{dangerouslySetInnerHTML:{__html:y.svgCode},style:{width:"20px",marginRight:"8px"}}):null,y.name]})})}},onChange:a=>{console.log(a)},dropdownRender:a=>e.jsxs(e.Fragment,{children:[a,e.jsx(ze,{style:{margin:"8px 0"}}),e.jsx(t,{form:k,onFinish:te,layout:"vertical",children:e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx(t.Item,{name:"name",className:"!mb-0",rules:[{required:!0,message:"Nhập thông tin!"}],children:e.jsx(g,{style:{width:200},placeholder:"Nhập tên thông tin",ref:v,onKeyDown:h=>h.stopPropagation()})}),e.jsx(t.Item,{name:"svgCode",className:"!mb-0",rules:[{required:!0,message:"Nhập SVG icon!"}],children:e.jsx(g,{style:{width:200},placeholder:"Nhập mã SVG icon",onKeyDown:h=>h.stopPropagation()})}),e.jsx(C,{className:"w-full",type:"primary",ghost:!0,htmlType:"submit",children:"Thêm thông tin"})]})})]}),options:E.map(a=>({label:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[O[a]&&e.jsx("div",{dangerouslySetInnerHTML:{__html:O[a]},style:{width:"20px",marginRight:"8px"}}),a]}),value:JSON.stringify({name:a,svgCode:O[a]||""})}))})}),e.jsx(t.Item,{className:"mb-2",name:"hidden",label:"Ẩn thông tin",children:e.jsx(d,{size:"large",className:"w-full mb-2",placeholder:"Chọn & nhập lợi ích",mode:"multiple",options:[{label:"Lợi ích từ khóa học",value:"benefit"},{label:"Yêu cầu khóa học",value:"prerequisite"},{label:"Đối tượng khách hàng",value:"customer"},{label:"Tiêu chí đầu ra",value:"output"},{label:"Nội dung khóa học",value:"module"},{label:"Đánh giá từ học viên",value:"review"}]})}),e.jsx(t.Item,{className:"mb-0 hidden",name:"seo",children:e.jsx(g,{className:"mb-2"})}),e.jsxs("div",{className:"flex flex-wrap md:flex-nowrap mt-2 gap-2 justify-center",children:[e.jsx(t.Item,{className:"mb-2",label:"Ảnh bìa",children:e.jsx(Y,{apiUpload:`${S}/v1/courser/image`,name:"img",body:r==null?void 0:r.getFieldValue("_id"),fileLists:`${r==null?void 0:r.getFieldValue("img")}`,limit:1})}),e.jsx(t.Item,{className:"mb-2",label:"Ảnh chi tiết",children:e.jsx(Y,{apiUpload:`${S}/v1/courser/image`,name:"imgDetail",body:r.getFieldValue("_id"),fileLists:`${r.getFieldValue("imgDetail")}`,limit:1})}),e.jsx(t.Item,{className:"w-full mb-2",name:"description",label:" Mô tả",children:e.jsx(g.TextArea,{size:"large",className:"mb-2",placeholder:"Nhập mô tả",style:{height:100,resize:"none"}})})]})]})}),e.jsx(z,{title:"Khóa học",centered:!0,open:$,onOk:()=>p.submit(),onCancel:()=>w(!1),confirmLoading:P,width:600,children:e.jsxs(t,{form:p,name:"customForm",layout:"vertical",onFinish:ne,children:[e.jsx(t.Item,{className:"mb-2",name:"name",label:"Tên khóa học",rules:[{required:!0,message:"Nhập tên khóa học!"}],children:e.jsx(g,{placeholder:"Nhập tên khóa học"})}),e.jsxs(Q,{gutter:[14,14],children:[e.jsx(f,{span:8,children:e.jsx(t.Item,{className:"mb-2",name:"category",label:"Danh mục",rules:[{required:!0,message:"Chọn danh mục!"}],children:e.jsx(d,{options:c.map(a=>({label:a.category,value:a._id})),placeholder:"Chọn danh mục"})})}),e.jsx(f,{span:8,children:e.jsx(t.Item,{className:"mb-2",name:"status",label:"Trạng thái",rules:[{required:!0,message:"Chọn trạng thái!"}],children:e.jsxs(d,{placeholder:"Chọn trạng thái",children:[e.jsx(d.Option,{value:"Đang bán",children:"Đang bán"}),e.jsx(d.Option,{value:"Chưa bán",children:"Chưa bán"})]})})}),e.jsx(f,{span:8,children:e.jsx(t.Item,{className:"mb-2",name:"star",label:"Số sao",rules:[{required:!0,message:"Chọn số sao!"}],children:e.jsxs(d,{placeholder:"Chọn trạng thái",children:[e.jsx(d.Option,{value:"3",children:e.jsxs("div",{className:"flex",children:[e.jsx(i,{color:l}),e.jsx(i,{color:l}),e.jsx(i,{color:l}),e.jsx(q,{color:l}),e.jsx(q,{color:l})]})}),e.jsx(d.Option,{value:"4",children:e.jsxs("div",{className:"flex",children:[e.jsx(i,{color:l}),e.jsx(i,{color:l}),e.jsx(i,{color:l}),e.jsx(i,{color:l}),e.jsx(q,{color:l})]})}),e.jsx(d.Option,{value:"4.5",children:e.jsxs("div",{className:"flex",children:[e.jsx(i,{color:l}),e.jsx(i,{color:l}),e.jsx(i,{color:l}),e.jsx(i,{color:l}),e.jsx(qe,{color:l})]})}),e.jsx(d.Option,{value:"5",children:e.jsxs("div",{className:"flex",children:[e.jsx(i,{color:l}),e.jsx(i,{color:l}),e.jsx(i,{color:l}),e.jsx(i,{color:l}),e.jsx(i,{color:l})]})})]})})})]}),e.jsxs(Q,{gutter:[14,14],children:[e.jsx(f,{span:8,children:e.jsx(t.Item,{className:"mb-0",name:"price",label:"Giá tiền VN",rules:[{required:!0,message:"Nhập giá tiền!"}],children:e.jsx(R,{className:"w-full mb-2",placeholder:"Nhập giá tiền",min:0,step:1e5,parser:a=>a==null?void 0:a.replace(/\$\s?|(,*)/g,""),formatter:a=>`${a}`.replace(/\B(?=(\d{3})+(?!\d))/g,",")})})}),e.jsx(f,{span:8,children:e.jsx(t.Item,{className:"mb-0",name:"sale",label:"Giảm giá %",rules:[{required:!0,message:"Nhập %!"}],children:e.jsx(R,{className:"w-full mb-2",placeholder:"Nhập %",min:0,max:100,step:5})})}),e.jsx(f,{span:8,children:e.jsx(t.Item,{className:"mb-0",label:"Giá sau khi giảm",name:"priceSale",children:e.jsx(R,{className:"w-full mb-2",placeholder:"Giá sau khi giảm",readOnly:!0,min:0,step:1e5,parser:a=>a==null?void 0:a.replace(/\$\s?|(,*)/g,""),formatter:a=>`${a}`.replace(/\B(?=(\d{3})+(?!\d))/g,",")})})})]})]})}),e.jsx(z,{centered:!0,open:L,onCancel:()=>n(!1),footer:null,width:600,children:e.jsx(Ee,{centered:!0,items:[{label:"Thêm danh mục",key:"1",children:e.jsx(e.Fragment,{children:e.jsxs(t,{form:m,name:"customForm",layout:"vertical",onFinish:de,children:[e.jsx(t.Item,{className:"mb-3",name:"category",label:"Tên danh mục",rules:[{required:!0,message:"Nhập tên danh mục!"}],children:e.jsx(g,{placeholder:"Nhập tên danh mục"})}),e.jsx(C,{type:"primary",loading:V,onClick:()=>m.submit(),className:"flex float-end",children:"Thêm danh mục"})]})})},{label:"Chỉnh sửa danh mục",key:"2",children:e.jsx(e.Fragment,{children:e.jsx(U,{loading:V,data:se,columns:re,onSave:me,onDelete:he,width:"20%",scroll:{x:500,y:350}})})}]})})]})};export{wa as default};
