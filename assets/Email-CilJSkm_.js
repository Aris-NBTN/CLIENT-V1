import{r as s,j as i,e as r,V as E}from"./index-DE5XhBCr.js";import{b7 as b}from"./Layout-BEdbvo9Y.js";import{P as x,p as k,b as v,a as B,B as j,c as P,d as C}from"./index-CYBcKfWG.js";import{B as R}from"./button-D_f20KL0.js";import"./animate-CNPIBgQA.js";import"./context-CsfdzBwd.js";import"./index-BwCU8U38.js";import"./index-ryfAGLJW.js";import"./index-B_khmHK4.js";import"./EllipsisOutlined-DMUE7OaF.js";import"./Overflow-Bn3H8H0j.js";import"./collapse-BbEVqHco.js";import"./index-D9MB6VQ_.js";import"./useLocale-BqnSk2g0.js";import"./TextArea-DbcwDeGW.js";import"./CheckOutlined-Do-_RANe.js";import"./compact-item-j-IwINpD.js";import"./index-D-46KyVB.js";import"./PurePanel-CXcxwk_K.js";import"./index-DVbmQFHF.js";import"./SearchOutlined-DoyMI1tW.js";import"./index-DvgPVpEV.js";import"./responsiveObserver-D_NtFPG1.js";import"./GrapeJs-C_R3gant.js";import"./fileApi-C1B48QZr.js";import"./row-2mV1AMPv.js";import"./index-vvjVAyMb.js";const T="/assets/2-BD6tlX0X.png",it=()=>{const[m,l]=s.useState(),p=e=>{const n=["video","map","video","bootstrapIcon","map","model-3D","Masonry","quote","link-block","text-basic","text-section","column1","column2","column3","column3-7"],h=["gjs-open-import-webpage","open-templates","link-page","export-template"],d=["Extra","Blog","Layout","Short Codes"],{models:f}=e.BlockManager.getCategories();n.forEach(t=>e.BlockManager.remove(t)),h.forEach(t=>{e.Panels.removeButton("options",t)}),f.forEach(t=>{var a;return d.includes((a=t.get)==null?void 0:a.call(t,"id"))&&t.set("open",!1)})},c=(e,n)=>{l(n),r("","Đã cập nhập nội dung Email!","Hãy chọn người nhận và gửi email!")},u=()=>{m?r("","Gửi email thành công"):E("","Vui lòng nhập email","Chưa có nội dung email!")},o=[s.useRef(null),s.useRef(null)],g=[{title:"Thiết kế Email!",description:"Thiết kế email của bạn thông qua WebBuilder-Aris",target:()=>o[0].current},{title:"Ấn nút lưu!",description:"Ấn nút lưu để lưu lại nội dung email của bạn.",cover:i.jsx("img",{alt:"tour.png",src:T})},{title:"Gửi Email!",description:"Ấn và chọn người nhận để gửi email!",target:()=>o[1].current}];return i.jsx(b,{margin:0,header:"Email",tours:g,button:i.jsx(R,{ref:o[1],onClick:u,type:"primary",children:"Gửi email"}),children:i.jsx("div",{ref:o[0],children:i.jsx(x,{configGrapeJs:p,height:"calc(100vh - 56px)",plugins:[k,v,B,j.imageLink,P,C],savePage:c})})})};export{it as default};
