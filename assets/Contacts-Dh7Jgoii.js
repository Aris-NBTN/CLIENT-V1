import{r as n,bV as j,j as s}from"./index-Cc-1vpYl.js";import{c as f}from"./contact-CXX-WDKz.js";import{b7 as b}from"./Layout-733AEOU8.js";import{E as x}from"./Table-DyUCFK3O.js";import{T as O}from"./index-BM4oy-f0.js";import"./index-CG-qH4GJ.js";import"./EllipsisOutlined-D0dVKAMB.js";import"./Overflow-DMuMV_Su.js";import"./context-rMj-ykUU.js";import"./index-Cm-otAoX.js";import"./index-BmQX2tAk.js";import"./index-DUp2AJIR.js";import"./row-D_YbyT5k.js";import"./index-D0fWuZLb.js";import"./useLocale-CQArx0VH.js";import"./TextArea-BA3qAdpn.js";import"./CheckOutlined-BwGAYYAr.js";import"./compact-item-Cwd_vZD_.js";import"./button-DdLP26k3.js";import"./index-BdWzYs5L.js";import"./PurePanel-78eoImhg.js";import"./index-Buo2xWbB.js";import"./SearchOutlined-B6ysJDXa.js";import"./Dropdown-BFwukFt_.js";import"./index-DQ64fGs7.js";import"./index-DPY8sSwT.js";import"./addEventListener-I9xQISnI.js";import"./iconUtil-BlF2GiOy.js";import"./index-CSPc7-Im.js";import"./index-vP3YjJUD.js";import"./index-BrC3VjxJ.js";import"./index-NGbqFlrI.js";import"./index-C6x3o1WO.js";const tt=()=>{const[a,h]=n.useState(),[u,l]=n.useState([]),[g,c]=n.useState([]);return n.useEffect(()=>{j.filesInFolder({folderName:"uploads/contacts"}).then(i=>{const e=i.newData.children;if(h(e),e.length>0){const o=e[0].name.split(".")[0];return f.get({filename:o}).then(d=>{e[0]={...e[0],details:d},l(e[0].details.data);const m=e[0].details.data.reduce((t,r)=>Object.keys(t).length>Object.keys(r).length?t:r),p=Object.keys(m).map(t=>({title:t.charAt(0).toUpperCase()+t.slice(1),dataIndex:t,key:t}));c(p)})}return e}).catch(i=>console.log(i))},[]),s.jsx(b,{title:"Liên hệ",header:"LIÊN HỆ",children:s.jsx(O,{onChange:i=>{f.get({filename:i.split(".")[0]}).then(e=>{a.map((o,d)=>{if(o.name===i){o.details=e,l(o.details.data);const m=o.details.data.reduce((t,r)=>Object.keys(t).length>Object.keys(r).length?t:r),p=Object.keys(m).map(t=>({title:t.charAt(0).toUpperCase()+t.slice(1),dataIndex:t,key:t}));c(p)}})})},type:"card",tabPosition:"left",items:a==null?void 0:a.map((i,e)=>({label:i.name,key:i.name,children:s.jsx(s.Fragment,{children:s.jsx(x,{colEdit:!1,dragMode:!1,data:u,columns:g})})}))})})};export{tt as default};
