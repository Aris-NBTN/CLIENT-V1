import{a as H,u as A,v as I,r as l,s as K,ds as P,j as e,A as j,x as U,a4 as L,G as $}from"./index-3xEO5Kh7.js";import{c as B}from"./index-Dfox1zHl.js";import{b7 as M}from"./Layout-DrRKwb8A.js";import{V as W}from"./Video-Bvd6n3Q1.js";import{T as h}from"./index-4sSb7ed2.js";import{P as X}from"./index-UbZASs7T.js";import{B as G}from"./button-XLX5cfWj.js";import{R as O,C as y}from"./row-4a-sKREA.js";import{C}from"./index-C1MYHGMc.js";import{E as R}from"./index-BdDvJKaJ.js";import{C as q}from"./Collapse-C1FyHEkr.js";import"./index-Dmksc7EW.js";import"./EllipsisOutlined-B8tL-v1-.js";import"./Overflow-Dv8RgYH_.js";import"./context-DyeVQoWZ.js";import"./index-DIGnI-jo.js";import"./index-B5tLbmJj.js";import"./index-iSK8tnOM.js";import"./PurePanel-DY8wMCh1.js";import"./CheckOutlined-DruerEUG.js";import"./compact-item-E5rnYlTL.js";import"./SearchOutlined-Cs-WW-yt.js";import"./useLocale-k4ZIc4WA.js";import"./Dropdown-F5gwu4Dx.js";import"./index-DEooR1r1.js";import"./index-CqJ31P7s.js";import"./TextArea-H9p9Bleg.js";import"./index-DGCvDpAG.js";const Se=()=>{const S=H(),{slug:u}=A(),{token:{colorPrimary:v}}=I.useToken(),w=l.useRef(null),f=l.useRef(null),{user:a}=K(t=>t.auth),[g,_]=l.useState(!0),[o,F]=l.useState(null),[s,x]=l.useState(null),d={videoRef:l.useRef(null),modulesRef:l.useRef(null),contentRef:l.useRef(null)},E=[{placement:"right",title:"Video khóa học!",description:"Xem video để hiểu rõ hơn về khóa học!",target:()=>d.videoRef.current},{placement:"left",title:"Học phần!",description:"Trong học phần có nhiều bài học, hãy chọn bài học để học!",target:()=>d.modulesRef.current},{placement:"top",title:"Nội dung và ghi chú bài học!",description:"Hãy đọc kỹ nội dung và ghi chú bài học để hiểu nhiều kiến thức hơn!",target:()=>d.contentRef.current}],z=l.useCallback((t,i,n)=>{const r=t==null?void 0:t.find(c=>c.slug===n);return(r==null?void 0:r._id)||null},[]),b=l.useCallback((t,i)=>{if(!(t!=null&&t.video)||!i)return null;const r=t.video.filter(c=>c.watched).sort((c,m)=>new Date(m.updatedAt)-new Date(c.updatedAt))[0];if(!r)return null;for(const c of i)for(const m of c.children)if(m._id===r.videoId)return{...m,watchTime:r.watchTime};return null},[]),k=l.useCallback((t,i)=>!(t!=null&&t.module)||!i?t:{...t,module:t.module.map(n=>({...n,children:n.children.map(r=>{const c=i.find(m=>m.videoId===r._id);return{...r,watchTime:c?c.watchTime:void 0,watched:!!c}})}))},[]),N=l.useCallback(()=>{var t;if((t=s==null?void 0:s.content)!=null&&t.css){const i=document.createElement("style");return i.textContent=s.content.css,document.head.appendChild(i),()=>{document.head.removeChild(i)}}},[s]),T=l.useCallback(()=>{var t,i;if((t=s==null?void 0:s.content)!=null&&t.js){const n=`
                (function() {
                    try {
                        ${s.content.js}
                    } catch (error) {
                        console.error('Error in lesson script:', error);
                    }
                })();
            `,r=document.createElement("script");return r.type="text/javascript",r.textContent=n,(i=f.current)==null||i.appendChild(r),()=>{var c;(c=f.current)!=null&&c.contains(r)&&f.current.removeChild(r)}}},[s]);l.useEffect(()=>{const t=N(),i=T();return()=>{t&&t(),i&&i()}},[s,N,T]),l.useEffect(()=>{const t=async()=>{try{const i=await L.checkCourseUser({idUser:a._id,slugCourse:u}),n=k(i,a.video),r=b(a,n.module);F(n),r!=null?x(b(a,n.module)):x(n.module[0].children[0]),_(!1)}catch{S("/user/courses"),$("courses","Không thể xem khóa học!","Khóa học không tồn tại hoặc bạn chưa mua khóa học này!")}};a!=null&&a._id&&u&&t()},[a,S,u,z,k,b]),P(l.useCallback(()=>{(()=>{var n;const i=((n=w.current)==null?void 0:n.currentTime)||0;a!=null&&a._id&&(s!=null&&s._id)&&j.putVideo({id:a._id,videoId:s._id,watched:!0,watchTime:i}).catch(console.error)})()},[s,a]));const p=l.useMemo(()=>{var t;return(t=o==null?void 0:o.module)==null?void 0:t.map(i=>({key:i._id,label:e.jsx(h.Title,{level:5,strong:!0,className:"!mb-0",children:i.title}),extra:`${i.children.length} Bài Học`,children:i.children.map(n=>e.jsxs("div",{onClick:()=>{x(n),n!=null&&n.src&&j.putVideo({id:a==null?void 0:a._id,videoId:n==null?void 0:n._id,watched:!0})},className:"flex justify-between cursor-pointer",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[n!=null&&n.watched?e.jsx(B,{color:v,size:20}):e.jsx(B,{size:20}),e.jsx(h.Title,{level:5,className:"!mb-0 p-2",children:n.title})]}),(s==null?void 0:s._id)===n._id&&e.jsx(h.Text,{type:"danger",className:"!mb-0 p-2",children:(n==null?void 0:n.src)&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.2rem",height:"1.2rem",viewBox:"0 0 24 24",children:[e.jsxs("rect",{width:"6",height:"14",x:"1",y:"4",fill:"#ff0000",children:[e.jsx("animate",{id:"svgSpinnersBarsScaleFade0",fill:"freeze",attributeName:"y",begin:"0;svgSpinnersBarsScaleFade1.end-0.25s",dur:"0.75s",values:"1;5"}),e.jsx("animate",{fill:"freeze",attributeName:"height",begin:"0;svgSpinnersBarsScaleFade1.end-0.25s",dur:"0.75s",values:"22;14"}),e.jsx("animate",{fill:"freeze",attributeName:"opacity",begin:"0;svgSpinnersBarsScaleFade1.end-0.25s",dur:"0.75s",values:"1;0.2"})]}),e.jsxs("rect",{width:"6",height:"14",x:"9",y:"4",fill:"#ff0000",opacity:"0.4",children:[e.jsx("animate",{fill:"freeze",attributeName:"y",begin:"svgSpinnersBarsScaleFade0.begin+0.15s",dur:"0.75s",values:"1;5"}),e.jsx("animate",{fill:"freeze",attributeName:"height",begin:"svgSpinnersBarsScaleFade0.begin+0.15s",dur:"0.75s",values:"22;14"}),e.jsx("animate",{fill:"freeze",attributeName:"opacity",begin:"svgSpinnersBarsScaleFade0.begin+0.15s",dur:"0.75s",values:"1;0.2"})]}),e.jsxs("rect",{width:"6",height:"14",x:"17",y:"4",fill:"#ff0000",opacity:"0.3",children:[e.jsx("animate",{id:"svgSpinnersBarsScaleFade1",fill:"freeze",attributeName:"y",begin:"svgSpinnersBarsScaleFade0.begin+0.3s",dur:"0.75s",values:"1;5"}),e.jsx("animate",{fill:"freeze",attributeName:"height",begin:"svgSpinnersBarsScaleFade0.begin+0.3s",dur:"0.75s",values:"22;14"}),e.jsx("animate",{fill:"freeze",attributeName:"opacity",begin:"svgSpinnersBarsScaleFade0.begin+0.3s",dur:"0.75s",values:"1;0.2"})]})]})})]},n._id))}))},[o,v,s,a]);return e.jsx(M,{title:(o==null?void 0:o.name)||"Khóa học của tôi",tours:E,header:"KHÓA HỌC CỦA TÔI",button:e.jsx(e.Fragment,{children:e.jsx(X,{placement:"left",title:"Xác nhận học lại khóa học?",description:"Bạn có chắc chắn muốn học lại khóa học này không?",onConfirm:()=>{j.putUser({id:a==null?void 0:a._id,video:[]})},children:e.jsx(G,{children:"Học Lại Khóa Học"})})}),children:e.jsxs(O,{gutter:[24,24],children:[e.jsx(y,{xxl:{span:16},xl:{span:15},lg:{span:14},md:{span:24},span:24,children:e.jsx(C,{loading:g,title:e.jsx(h.Title,{level:3,className:"!mb-0",children:(o==null?void 0:o.name)||"Khóa học của tôi"}),ref:d.videoRef,className:"sticky",style:{top:"5rem"},children:s!=null&&s.src?e.jsx(W,{mediaPlayerRef:w,iduser:a==null?void 0:a._id,videoId:s._id,autoPlay:!0,time:s.watchTime,src:`${U}/uploads/${s.src}`}):e.jsx(R,{description:"Chưa có video được tải lên!"})})}),e.jsx(y,{xxl:{span:8,order:1},xl:{span:9},lg:{span:10,order:1},md:{span:24,order:2},order:2,span:24,children:e.jsx(C,{className:"mb-6 lg:mb-0",loading:g,title:e.jsx(h.Title,{level:3,className:"!mb-0",children:"Nội Dung Khóa Học"}),ref:d.modulesRef,children:e.jsx(q,{expandIconPosition:"start",items:p,defaultActiveKey:p==null?void 0:p.map(t=>t.key)})})}),e.jsx(y,{xxl:{order:2},md:{order:1},order:1,span:24,children:e.jsx(C,{loading:g,ref:d.contentRef,className:"mb-0 lg:mb-6",title:e.jsxs(h.Title,{className:"!mb-0",level:3,children:["Bài Học ",s==null?void 0:s.title]}),children:s!=null&&s.content?e.jsx(e.Fragment,{children:e.jsx("div",{dangerouslySetInnerHTML:{__html:s.content.html}})}):e.jsx(R,{description:"Chưa có nội dung được tải lên!"})})})]})})};export{Se as default};
