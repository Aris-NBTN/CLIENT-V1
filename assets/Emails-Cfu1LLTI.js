import{q as d,s as c,r as a,br as h,j as i,T as u}from"./index-DjzyvRwx.js";import{x}from"./index-DDZmTsZa.js";import{b7 as E}from"./Layout-EFL-S3Sh.js";import{E as f}from"./Table-D_68jrlb.js";import"./EllipsisOutlined-DRkMZQPY.js";import"./Overflow-G4f62dog.js";import"./context-BOuCYIwU.js";import"./index-TSiB0zHv.js";import"./index-Du6iFTLT.js";import"./index-KQsL574t.js";import"./row-CZ3IofDq.js";import"./index-CLG6kvxt.js";import"./useLocale-8Aa_UwcM.js";import"./TextArea-2wz-QBZX.js";import"./useVariants-BufFGytT.js";import"./compact-item-wwFPHTMv.js";import"./CheckOutlined-gH9T7rVO.js";import"./button-CmKcfFMN.js";import"./index-BHwQyUhE.js";import"./PurePanel-BF3wwxBY.js";import"./index-DxZruAsQ.js";import"./SearchOutlined-C8-y0AAQ.js";import"./Dropdown--Jrj-izI.js";import"./index-Bi_65dOL.js";import"./index-Bj_Q29fP.js";import"./iconUtil-C537UKGV.js";import"./index-M8qm6Ulq.js";import"./index-BklRbNQs.js";import"./index-wRejgO5X.js";import"./index-D35ck0v8.js";import"./index-uDn68GWU.js";const V=()=>{const m=[{title:"Email",dataIndex:"name",editable:!0,ellipsis:{showTitle:!0}},{title:"Chức năng",dataIndex:"fuction",editable:!0,ellipsis:{showTitle:!0}}],s=d(),{email:o,loading:e}=c(t=>t.email),l=a.useMemo(()=>{var t;return(t=o==null?void 0:o.newData)==null?void 0:t.map(r=>({...r,key:r._id}))},[o==null?void 0:o.newData]),p=t=>{console.log(t)},n=t=>{console.log(t)};return a.useEffect(()=>{e&&s(h())},[]),i.jsx(E,{title:"Email",header:"Email",children:i.jsx(f,{dragMode:!1,loading:e,data:l,columns:m,onSave:p,onDelete:n,width:"12%",button:t=>i.jsx(i.Fragment,{children:i.jsx(u,{title:"Chỉnh sửa trang",children:i.jsx("a",{href:`/admin/email/${t._id}`,children:i.jsx(x,{size:22,color:"rgb(255 127 0)"})})})})})})};export{V as default};
