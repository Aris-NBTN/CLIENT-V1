import{r as i,C as je,an as ze,z as pe,G as Ge,H as Ve,J as qe,K as ve,ao as Ze,w as Ne,ap as Je,aq as Se,j as t,ar as Qe,f as ce,as as de,e as me,s as ee}from"./index-DlYMrpPW.js";import{F as te,i as re,p as m,E as B,K as Oe}from"./ReactContexify.min-DPoTfwKX.js";import{b9 as Ye,b7 as et}from"./Layout-CpjJMsYa.js";import{F as we,D as tt,a as Fe,I as rt,V as st}from"./index.es-E0pdLPqV.js";import{p as ke,q as Pe,r as nt,s as lt,t as at,u as ot,v as it}from"./index-BhRu2L4p.js";import{a as ct}from"./index-C3t25U0_.js";import{a as Ie}from"./index-DJL_NHcj.js";import{B as _}from"./button-CE-BZK77.js";import{I as he}from"./index-P5rlzTpu.js";import{P as dt}from"./index-DXcoRrUW.js";import{T as Me}from"./index-BURokasu.js";import{R as fe,C as A}from"./row-BjQvrOOl.js";import{R as Le}from"./index-BYNFFT4D.js";import{E as mt}from"./index-DWBsL6Py.js";import{M as ue}from"./index-CO9Q68ww.js";import{P as ht}from"./index-CKNSBnWp.js";import"./animate-q5OpxXju.js";import"./context-C-Rv8Q9P.js";import"./index-B0WLfmks.js";import"./EllipsisOutlined--Rr4Zdtn.js";import"./Overflow-CkeVNlGt.js";import"./collapse-BbEVqHco.js";import"./index-BA5SGM9y.js";import"./useLocale-AUr8qwmz.js";import"./TextArea-BL_qZjFp.js";import"./compact-item-DVIPdewI.js";import"./PurePanel-CgvgODcO.js";import"./index-RbKsYPWi.js";import"./responsiveObserver--9lCBinC.js";import"./SearchOutlined-DFBtPtmd.js";import"./iconUtil-DQgXce6J.js";import"./ActionButton-Cwh1PuVf.js";const se=e=>{let{children:l}=e;const{getPrefixCls:n}=i.useContext(je),r=n("breadcrumb");return i.createElement("li",{className:`${r}-separator`,"aria-hidden":"true"},l===""?l:l||"/")};se.__ANT_BREADCRUMB_SEPARATOR=!0;var ft=function(e,l){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&l.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)l.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function ut(e,l){if(e.title===void 0||e.title===null)return null;const n=Object.keys(l).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${n})`,"g"),(r,a)=>l[a]||r)}function Be(e,l,n,r){if(n==null)return null;const{className:a,onClick:f}=l,u=ft(l,["className","onClick"]),p=Object.assign(Object.assign({},ze(u,{data:!0,aria:!0})),{onClick:f});return r!==void 0?i.createElement("a",Object.assign({},p,{className:pe(`${e}-link`,a),href:r}),n):i.createElement("span",Object.assign({},p,{className:pe(`${e}-link`,a)}),n)}function pt(e,l){return(r,a,f,u,p)=>{if(l)return l(r,a,f,u);const h=ut(r,a);return Be(e,r,h,p)}}var xe=function(e,l){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&l.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)l.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const _e=e=>{const{prefixCls:l,separator:n="/",children:r,menu:a,overlay:f,dropdownProps:u,href:p}=e,k=(w=>{if(a||f){const v=Object.assign({},u);if(a){const P=a||{},{items:N}=P,x=xe(P,["items"]);v.menu=Object.assign(Object.assign({},x),{items:N==null?void 0:N.map((j,y)=>{var{key:I,title:X,label:E,path:b}=j,T=xe(j,["key","title","label","path"]);let C=E??X;return b&&(C=i.createElement("a",{href:`${p}${b}`},C)),Object.assign(Object.assign({},T),{key:I??y,label:C})})})}else f&&(v.overlay=f);return i.createElement(Ye,Object.assign({placement:"bottom"},v),i.createElement("span",{className:`${l}-overlay-link`},w,i.createElement(Le,null)))}return w})(r);return k!=null?i.createElement(i.Fragment,null,i.createElement("li",null,k),n&&i.createElement(se,null,n)):null},Ae=e=>{const{prefixCls:l,children:n,href:r}=e,a=xe(e,["prefixCls","children","href"]),{getPrefixCls:f}=i.useContext(je),u=f("breadcrumb",l);return i.createElement(_e,Object.assign({},a,{prefixCls:u}),Be(u,a,n,r))};Ae.__ANT_BREADCRUMB_ITEM=!0;const xt=Ae,gt=e=>{const{componentCls:l,iconCls:n,calc:r}=e;return{[l]:Object.assign(Object.assign({},qe(e)),{color:e.itemColor,fontSize:e.fontSize,[n]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${ve(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:r(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},Ze(e)),"li:last-child":{color:e.lastItemColor},[`${l}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${l}-link`]:{[`
          > ${n} + span,
          > ${n} + a
        `]:{marginInlineStart:e.marginXXS}},[`${l}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${ve(e.paddingXXS)}`,marginInline:r(e.marginXXS).mul(-1).equal(),[`> ${n}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},jt=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}),yt=Ge("Breadcrumb",e=>{const l=Ve(e,{});return gt(l)},jt);var Ee=function(e,l){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&l.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)l.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function bt(e){const{breadcrumbName:l,children:n}=e,r=Ee(e,["breadcrumbName","children"]),a=Object.assign({title:l},r);return n&&(a.menu={items:n.map(f=>{var{breadcrumbName:u}=f,p=Ee(f,["breadcrumbName"]);return Object.assign(Object.assign({},p),{title:u})})}),a}function Ct(e,l){return i.useMemo(()=>e||(l?l.map(bt):null),[e,l])}var vt=function(e,l){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&l.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)l.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Nt=(e,l)=>{if(l===void 0)return l;let n=(l||"").replace(/^\//,"");return Object.keys(e).forEach(r=>{n=n.replace(`:${r}`,e[r])}),n},ye=e=>{const{prefixCls:l,separator:n="/",style:r,className:a,rootClassName:f,routes:u,items:p,children:h,itemRender:k,params:w={}}=e,v=vt(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:P,direction:N,breadcrumb:x}=i.useContext(je);let j;const y=P("breadcrumb",l),[I,X,E]=yt(y),b=Ct(p,u),T=pt(y,k);if(b&&b.length>0){const F=[],R=p||u;j=b.map((S,z)=>{const{path:ne,key:D,type:W,menu:G,overlay:V,onClick:le,className:ae,separator:oe,dropdownProps:q}=S,U=Nt(w,ne);U!==void 0&&F.push(U);const H=D??z;if(W==="separator")return i.createElement(se,{key:H},oe);const M={},Z=z===b.length-1;G?M.menu=G:V&&(M.overlay=V);let{href:L}=S;return F.length&&U!==void 0&&(L=`#/${F.join("/")}`),i.createElement(_e,Object.assign({key:H},M,ze(S,{data:!0,aria:!0}),{className:ae,dropdownProps:q,href:L,separator:Z?"":n,onClick:le,prefixCls:y}),T(S,w,R,F,L))})}else if(h){const F=Ne(h).length;j=Ne(h).map((R,S)=>{if(!R)return R;const z=S===F-1;return Je(R,{separator:z?"":n,key:S})})}const C=pe(y,x==null?void 0:x.className,{[`${y}-rtl`]:N==="rtl"},a,f,X,E),K=Object.assign(Object.assign({},x==null?void 0:x.style),r);return I(i.createElement("nav",Object.assign({className:C,style:K},v),i.createElement("ol",null,j)))};ye.Item=xt;ye.Separator=se;const St=(e=5)=>Math.random().toString(36).substr(2,e),ge=e=>{if(e===null||typeof e!="object")return e;let l=Array.isArray(e)?[]:{};for(let n in e)n!=="parent"&&(e[n]&&typeof e[n]=="object"?l[n]=ge(e[n]):l[n]=e[n]);return l},Xe=(e,l,n=[])=>{for(let r of e){if(r.key===l){if(r.children&&r.children.length>0)for(let a of r.children)a.isLeaf&&n.push(a.key);return n}r.children&&Xe(r.children,l,n)}return n},Ot=(e,l,n,r)=>{const a=n(e,l);r(a)},Te="menu-id-1",Re="menu-id-2",De="menu-id-3",$e="menuFolder",{DirectoryTree:wt}=Me;function lr(){const{show:e}=te({id:Te}),{show:l}=te({id:Re}),{show:n}=te({id:De}),{show:r}=te({id:$e}),[a,f]=i.useState([]),[u,p]=i.useState(),[h,k]=i.useState("uploads"),[w,v]=i.useState(void 0),[P,N]=i.useState(void 0),[x,j]=i.useState([]),[y,I]=i.useState([]),[X,E]=i.useState([{title:"uploads"}]),[b,T]=i.useState(""),[C,K]=i.useState(""),F=()=>{const s=ge(x),o=d=>{for(let c of d){if(c.key===u){c.children=c.children||[];const O=St();c.children.push({title:"Thư mục mới",key:O,className:"non-leaf-node"});return}c.children&&o(c.children)}};o(s),j(s)},R=()=>{const s=ge(x),o=d=>{for(let c=0;c<d.length;c++){if(d[c].key===u){d.splice(c,1);return}d[c].children&&o(d[c].children)}};o(s),j(s)},S=({event:s,node:o})=>{s.preventDefault(),o.isLeaf?a.length===0?(o.parent&&p(o.parent.key),e({event:s})):(p(o.parent.key),l({event:s})):(e({event:s}),p(o.key))},z=s=>{v(s)},ne=s=>{N(s)},[D,W]=i.useState([]),G=async(s,o)=>{if(o)try{const d=await fetch(o);if(!d.ok){ee("Tải xuống bị lỗi","File không tồn tại hoặc đã bị xóa khỏi hệ thống");return}const c=await d.blob(),O=URL.createObjectURL(c),g=document.createElement("a");g.href=O,g.download=s||"newFile.jpeg",document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(O)}catch{ee("Tải xuống bị lỗi","File không tồn tại hoặc đã bị xóa khỏi hệ thống")}},V=s=>{W(D.filter(o=>o.id!==s))},le=s=>{W(s)},ae=s=>{v(s)},oe=s=>{N(s)},[q,U]=i.useState([!1,!1]),[H,M]=i.useState(""),[Z,L]=i.useState(""),$=(s,o)=>{U(d=>(d[s]=o,[...d]))},[Ue,J]=i.useState(!1),ie=s=>{k(s),E(Ke(s)),Q(s)},He=(s,o="")=>{const d=(c,O)=>{const g=O?`${O}/${c.name}`:c.name;if(c.type==="file")return{title:c.name,key:c.path,isLeaf:!0};if(c.type==="directory"){const Ce=c.children?c.children.map(Y=>d(Y,g)):[];return Ce.sort((Y,We)=>Y.isLeaf===We.isLeaf?0:Y.isLeaf?1:-1),{title:c.name,key:c.path,className:"non-leaf-node",path:g,children:Ce}}};return d(s,o)},be=s=>(s.sort((o,d)=>o.type==="directory"&&d.type==="file"?-1:o.type==="file"&&d.type==="directory"?1:0),s.map(o=>{let d=o.type==="file"?o.mimeType:"folder";if(o.type==="file")return{name:o.name,type:d,size:o.size,url:`${ce}/${o.path}`,downloadUrl:`${ce}/${o.path}`};if(o.type==="directory")return{name:o.name,type:d,size:o.size,children:o.children?be(o.children):[]}})),Ke=s=>{const o=s.split("/");return o.map((c,O)=>{let g={title:c};return O<o.length-1&&(g.href="#"),g})};i.useEffect(()=>{Se.allFile().then(s=>{j([He(s)])})},[]);const Q=s=>{Se.filesInFolder({folderName:s}).then(o=>{I(be(o))})};return i.useEffect(()=>{Q(h)},[]),t.jsx(et,{header:t.jsx("div",{className:"flex items-center h-full",children:t.jsx("h6",{className:"mb-0",children:"QUẢN LÝ FILE"})}),children:t.jsxs("div",{style:{height:"calc(100vh - 132px)"},onClick:()=>T(null),children:[t.jsx("div",{className:"row px-0 border-bottom pb-2",children:t.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center overflow-hidden",children:[t.jsxs("div",{className:"flex",children:[t.jsxs(_,{onClick:()=>$(0,!0),type:"text",block:!0,children:["Thêm thư mục ",t.jsx(ke,{size:20})]}),t.jsxs(_,{type:"text",block:!0,onClick:()=>J(!0),children:["Thêm file ",t.jsx(Pe,{size:20})]}),t.jsxs(_,{type:"text",block:!0,children:["Thêm file 3D ",t.jsx(Ie,{size:25})]})]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx(he,{addonAfter:t.jsx(nt,{size:20}),placeholder:"Nhập tên file",style:{width:"200px"}}),t.jsx(_,{style:{width:"100px"},type:"text",block:!0,children:t.jsx(dt,{placement:"bottomRight",title:"Chọn loại tệp",content:t.jsx(Me,{checkable:!0,defaultExpandAll:!0,treeData:[{title:"Chọn tất cả",key:"all",children:[{title:"PNG",key:"png"},{title:"JPG",key:"jpg"},{title:"GLB",key:"glb"}]}],blockNode:!0}),children:t.jsxs("div",{className:"flex gap-2",children:["Lọc",t.jsx(lt,{size:20})]})})}),t.jsxs(_,{style:{width:"100px"},type:"text",block:!0,children:["Tải lại ",t.jsx(Qe,{size:20})]})]})]})}),t.jsx("div",{className:"row",children:t.jsxs(fe,{children:[t.jsx(A,{md:{span:6},span:24,children:t.jsx(wt,{className:"overflow-auto p-2",style:{height:"calc(100vh - 160px)"},showLine:!0,defaultExpandAll:!0,switcherIcon:t.jsx(Le,{className:"fs-7"}),onSelect:()=>console.log("onSelect"),onClick:(s,o)=>{(o==null?void 0:o.isLeaf)==null&&ie(o.path)},onRightClick:S,treeData:x})}),t.jsxs(A,{className:"overflow-auto p-2",style:{height:"calc(100vh - 160px)"},md:{span:18},span:24,onContextMenu:s=>{r({event:s})},children:[t.jsxs(fe,{children:[t.jsx(A,{className:"flex justify-center items-center",xxl:{span:2},xl:{span:4},md:{span:6},children:t.jsx(_,{onClick:()=>ie(h.substring(0,h.lastIndexOf("/"))),disabled:h==="uploads"||h==="",type:"text",block:!0,children:t.jsx(at,{size:20})})}),t.jsx(A,{xxl:{span:22},xl:{span:20},md:{span:18},children:t.jsx(ye,{className:"fs-6",separator:">",items:X})})]}),t.jsx(fe,{children:y.length===0?t.jsx(A,{span:24,children:t.jsx(mt,{})}):y.map(s=>t.jsx(A,{xl:{span:4},lg:{span:6},md:{span:8},span:12,className:"flex justify-center items-center mb-2",children:s.type==="folder"?t.jsxs("div",{className:"hover-folder position-relative",children:[t.jsx("img",{className:"folder-img position-relative",onDoubleClick:()=>{ie(`${h}/${s.name}`)},onContextMenu:o=>{o.preventDefault(),o.stopPropagation(),K(s),n({event:o})},src:`${ce}/system/file/folder.png`,alt:"Hình ảnh folder"}),t.jsx("div",{className:"position-absolute folder-name",children:s.name})]}):t.jsx(we,{className:`hover-file h-full ${b&&b.url===s.url?"selected":""}`,name:s.name,type:s.type,size:s.size,imageUrl:s.url,smartImgFit:"center",onDownload:()=>G(s.name,s.downloadUrl),onSee:s.type.startsWith("video/")?ne:s.type.startsWith("image/")?z:void 0,onRightClick:o=>{T(s),o.stopPropagation(),n({event:o})},onClick:()=>{T(s)}})},s.name))})]})]})}),t.jsx(ue,{title:"Thêm file",centered:!0,open:Ue,onOk:()=>J(!1),onCancel:()=>J(!1),width:1e3,footer:null,children:t.jsx(tt,{onChange:le,minHeight:"195px",value:D,maxFiles:0,maxFileSize:5*1024*1024,label:"Kéo và thả tập tin vào đây hoặc nhấp để thêm tập tin",children:D.map(s=>i.createElement(we,{...s,key:s.id,onDelete:V,onSee:ae,onWatch:oe,resultOnTooltip:!0,alwaysActive:!0,preview:!0,info:!0}))})}),t.jsx(ue,{title:"Tạo thư mục",centered:!0,open:q[0],onOk:()=>{de.createFolder({name:H,parentPath:h}).then(()=>{me("Tạo thư mục thành công","Tạo thư mục mới thành công"),Q(h)}).catch(()=>{ee("Tạo thư mục thất bại","Có lỗi xảy ra khi tạo thư mục mới")}),M(""),$(0,!1)},closeIcon:!1,onCancel:()=>$(0,!1),width:500,children:t.jsx(he,{value:H,onChange:s=>M(s.target.value),placeholder:"Nhập tên thư mục"})}),t.jsx(ue,{title:"Chỉnh sửa tên thư mục",centered:!0,open:q[1],onOk:()=>{console.log(C),de.updateFolder({oldName:C.name,newName:Z,parentPath:h}).then(()=>{K(""),me("Đổi tên thư mục thành công","Đổi tên thư mục thành công"),Q(h)}).catch(s=>console.log(s)),L(""),$(1,!1)},closeIcon:!1,onCancel:()=>$(1,!1),width:500,children:t.jsx(he,{value:Z,onChange:s=>L(s.target.value),placeholder:"Nhập tên thư mục"})}),t.jsxs(re,{id:Te,children:[t.jsxs(m,{onClick:F,children:[t.jsx("i",{className:"fa-light fa-folder-plus me-2 fs-4"})," Thêm thư mục"]}),t.jsxs(m,{onClick:R,children:[t.jsx("i",{className:"fa-light fa-folder-minus me-2 fs-4"})," Xóa thư mục"]}),t.jsx(B,{}),t.jsxs(m,{children:[t.jsx("i",{className:"fa-light fa-file-signature me-2 fs-4"}),"  Đổi tên thư mục"]}),t.jsx(B,{}),t.jsxs(m,{children:[t.jsx("i",{className:"fa-light fa-file-plus me-2 fs-4"})," Tải file lên"]}),t.jsx(B,{}),t.jsxs(Oe,{label:"Thông tin",children:[t.jsx(m,{children:"Ngày tạo: "}),t.jsx(m,{children:"Kích thước: "}),t.jsx(m,{children:"Bao gồm: "})]})]}),t.jsxs(re,{id:Re,children:[t.jsxs(m,{children:[t.jsx("i",{className:"fa-solid fa-check me-2 fs-4"})," Chọn nhiều file"]}),t.jsxs(m,{onClick:()=>{Ot(x,u,Xe,f)},children:[t.jsx("i",{className:"fa-solid fa-check-double me-2 fs-4"})," Chọn toàn bộ file"]}),t.jsxs(m,{onClick:()=>f([]),children:[t.jsx("i",{className:"fa-solid fa-x me-2 fs-4"})," Bỏ chọn"]}),t.jsx(B,{}),t.jsxs(m,{children:[t.jsx("i",{className:"fa-solid fa-download fs-4 me-2"}),"Tải file xuống"]}),t.jsxs(m,{children:[t.jsx("i",{className:"fa-solid fa-trash fs-4 me-2"})," Xóa file"]})]}),t.jsxs(re,{style:{width:"100px"},animation:"scale",id:De,children:[t.jsxs(Oe,{label:t.jsxs(t.Fragment,{children:[t.jsx(ct,{size:22})," Thông tin: "]}),children:[t.jsx(m,{children:"Kích thước: "}),t.jsx(m,{children:"Loại file: "}),t.jsx(m,{children:"Link: "})]}),t.jsx(B,{}),t.jsxs(m,{onClick:()=>$(1,!0),children:[t.jsx(ot,{size:22}),"Chỉnh sửa file"]}),t.jsx(B,{}),t.jsx(ht,{placement:"bottom",onConfirm:()=>{de.deleteFolder({namefolder:C.name,parentPath:h}).then(()=>me("Xóa thư mục thành công","Xóa thư mục thành công")).catch(()=>ee("Xóa thư mục thất bại","Có lỗi xảy ra khi xóa thư mục")),console.log(C),console.log(h)},title:"Bạn có chắc chắn muốn xóa file này không?",children:t.jsxs(m,{children:[t.jsx(it,{size:22}),"Xóa file"]})})]}),t.jsxs(re,{style:{width:"100px"},animation:"scale",id:$e,children:[t.jsxs(m,{onClick:()=>$(0,!0),children:[t.jsx(ke,{size:20,className:"me-1"})," Thêm thư mục"]}),t.jsxs(m,{onClick:()=>J(!0),children:[t.jsx(Pe,{size:20,className:"me-1"}),"Thêm file "]}),t.jsxs(m,{children:[t.jsx(Ie,{size:22,className:"me-1"}),"Thêm file 3D"]})]}),t.jsx(Fe,{open:w!==void 0,onClose:()=>v(void 0),children:t.jsx(rt,{src:w})}),t.jsx(Fe,{open:P!==void 0,onClose:()=>N(void 0),children:t.jsx(st,{src:P,autoPlay:!0,controls:!0})})]})})}export{lr as default};
