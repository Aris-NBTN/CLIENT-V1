import{q as d,s as c,r as a,bm as h,j as i,T as u}from"./index-Cvumwag0.js";import{x}from"./index-BzKNvAXv.js";import{b7 as E}from"./Layout-DMe9Yda_.js";import{E as f}from"./Table-BNdyjfDC.js";import"./EllipsisOutlined-DY3DbVIG.js";import"./Overflow-BOvg0haA.js";import"./context-D5a8cD_F.js";import"./index-D_A2dMGL.js";import"./index-BeRMAYc2.js";import"./index-B_KmW7Yz.js";import"./row-x3r63JJG.js";import"./index-BPWmadhO.js";import"./useLocale-D5q9tkvn.js";import"./TextArea-BivcCCng.js";import"./CheckOutlined-CXfZ2kbW.js";import"./compact-item-BjWUl9HS.js";import"./button-wnxBu4Nw.js";import"./index--Otc51ov.js";import"./PurePanel-DqKaa4g8.js";import"./index-CKlGKJDT.js";import"./SearchOutlined-YGPLaLhP.js";import"./Dropdown-BOoWbi5a.js";import"./index-DZ_Ba4s_.js";import"./index-soUEOnqz.js";import"./iconUtil-CdIYEX7c.js";import"./index-C-RfQ8tE.js";import"./index-Cx-Fy8w2.js";import"./index-DS_joJ0I.js";import"./index-BOZl5Wfs.js";import"./index-DqOyJfzI.js";const U=()=>{const m=[{title:"Email",dataIndex:"name",editable:!0,ellipsis:{showTitle:!0}},{title:"Chức năng",dataIndex:"fuction",editable:!0,ellipsis:{showTitle:!0}}],s=d(),{email:o,loading:e}=c(t=>t.email),l=a.useMemo(()=>{var t;return(t=o==null?void 0:o.newData)==null?void 0:t.map(r=>({...r,key:r._id}))},[o==null?void 0:o.newData]),p=t=>{console.log(t)},n=t=>{console.log(t)};return a.useEffect(()=>{e&&s(h())},[]),i.jsx(E,{title:"Email",header:"Email",children:i.jsx(f,{dragMode:!1,loading:e,data:l,columns:m,onSave:p,onDelete:n,width:"12%",button:t=>i.jsx(i.Fragment,{children:i.jsx(u,{title:"Chỉnh sửa trang",children:i.jsx("a",{href:`/admin/email/${t._id}`,children:i.jsx(x,{size:22,color:"rgb(255 127 0)"})})})})})})};export{U as default};
