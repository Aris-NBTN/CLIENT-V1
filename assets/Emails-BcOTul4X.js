import{q as d,s as c,r as a,bm as h,j as i,T as u}from"./index-CMiVykFS.js";import{v as E}from"./index-BHopg8_v.js";import{b7 as x}from"./Layout-C9IZ64ku.js";import{E as f}from"./Table-BtZR7IIy.js";import"./EllipsisOutlined-SG8lhUTe.js";import"./Overflow-5HpDSEAt.js";import"./context-CkRM9wR3.js";import"./index-BVjAtN9L.js";import"./index-D_lziKWE.js";import"./index-D_n9stWu.js";import"./row-Cpj249K0.js";import"./index-c20IboSK.js";import"./useLocale-0TNeF9jh.js";import"./TextArea-BGv9QkLD.js";import"./CheckOutlined-pP_mpseQ.js";import"./compact-item-CHfkpL5N.js";import"./button-D6jlub6W.js";import"./index-BXPOm5q9.js";import"./PurePanel-BzrZVwuf.js";import"./index-BmqQxkSZ.js";import"./SearchOutlined-DcwjpJo2.js";import"./Dropdown-Cg-C5Egs.js";import"./index-CcztLlPD.js";import"./index-CT3yUSGL.js";import"./iconUtil-Bgg7VzoZ.js";import"./index-CfE94jJn.js";import"./index-CJFJHF_t.js";import"./index-DmhPosYl.js";import"./index-BdNDA3jp.js";import"./index-CL6p36EM.js";const U=()=>{const m=[{title:"Email",dataIndex:"name",editable:!0,ellipsis:{showTitle:!0}},{title:"Chức năng",dataIndex:"fuction",editable:!0,ellipsis:{showTitle:!0}}],s=d(),{email:o,loading:e}=c(t=>t.email),l=a.useMemo(()=>{var t;return(t=o==null?void 0:o.newData)==null?void 0:t.map(r=>({...r,key:r._id}))},[o==null?void 0:o.newData]),p=t=>{console.log(t)},n=t=>{console.log(t)};return a.useEffect(()=>{e&&s(h())},[]),i.jsx(x,{title:"Email",header:"Email",children:i.jsx(f,{dragMode:!1,loading:e,data:l,columns:m,onSave:p,onDelete:n,width:"12%",button:t=>i.jsx(i.Fragment,{children:i.jsx(u,{title:"Chỉnh sửa trang",children:i.jsx("a",{href:`/admin/email/${t._id}`,children:i.jsx(E,{size:22,color:"rgb(255 127 0)"})})})})})})};export{U as default};
