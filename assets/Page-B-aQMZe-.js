var F=Object.defineProperty;var U=(t,e,o)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var I=(t,e,o)=>U(t,typeof e!="symbol"?e+"":e,o);import{u as q,a as G,r as E,c as J,d as H,f as V,aX as K,aI as W,j,a3 as X,W as L,p as P,e as Q}from"./index-D_8e4c1c.js";import{b7 as Y,b8 as Z}from"./Layout-CyzyjsxQ.js";import{S as ee,P as te,p as oe,a as se,B as A}from"./index-BcyNr5lV.js";import{p as ne,b as ae,a as ie}from"./index-BOOS2E1S.js";import{p as D,a as le,b as re,c as O}from"./index-M2nQI7jy.js";import ce from"./html2canvas.esm-CBrSDip1.js";import{S as N}from"./index-BcZ8U7N5.js";import{m as z}from"./customPageApi-CBD7g6we.js";import{f as de}from"./fileApi-DFQQgF_Z.js";import{B as pe}from"./TextArea-CWw6Kbja.js";import"./index-Dmxhq2rE.js";import"./index-DUMoXffW.js";import"./EllipsisOutlined-DotS4OyN.js";import"./Overflow-D7J6rgzg.js";import"./CheckOutlined-DdAy9wLR.js";import"./index-BMT87hfN.js";import"./context-CZuqpdQ0.js";import"./index-D2w-eL_m.js";import"./index-Bk93MzKf.js";import"./index-Coxcvceq.js";import"./SearchOutlined-CK_rNMR1.js";import"./row-9dsEpJck.js";import"./indexFile-CjJi2Tza.js";const me=(t,e={})=>{const o={config:{},constructor:"",labelImageEditor:"Chỉnh sửa ảnh",labelApply:"Cập nhập",height:"650px",width:"100%",commandId:"tui-image-editor",toolbarIcon:`<svg viewBox="0 0 24 24">
                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z">
                    </path>
                  </svg>`,hideHeader:!0,addToAssets:!0,upload:!1,onApplyButton:()=>{},onApply:null,script:["https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js","https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js","https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js"],style:["https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css","https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css"],...e},{script:n,style:d,height:g,width:u,hideHeader:p,onApply:l,upload:f,addToAssets:h,commandId:a}=o,r=typeof window<"u",B=()=>{var s;return o.constructor||r&&((s=window.tui)==null?void 0:s.ImageEditor)};let c=B();if(!c&&(n!=null&&n.length)&&r){const{head:s}=document,i=Array.isArray(n)?[...n]:[n],v=Array.isArray(d)?[...d]:[d],m=w=>{if(w.length){const b=document.createElement("link");b.href=w.shift(),b.rel="stylesheet",s.appendChild(b),m(w)}},y=w=>{if(w.length){const b=document.createElement("script");b.src=w.shift(),b.onerror=b.onload=y.bind(null,w),s.appendChild(b)}else c=B()};m(v),y(i)}o.toolbarIcon&&t.Components.addType("image",{extendFn:["initToolbar"],model:{initToolbar(){const s=this.get("toolbar");(s==null?void 0:s.some(v=>v.command===a))||(s==null||s.unshift({command:a,label:o.toolbarIcon}),this.set("toolbar",s))}}});const k={level:"error",ns:a};t.Commands.add(a,{imageEditor:null,run(s,i,v={}){if(!c)return s.log("TOAST UI Image editor not found",k),s.stopCommand(a);const m=v.target||s.getSelected();if(!m)return s.log("Target not available",k),s.stopCommand(a);const y=this.createContent(),w=o.labelImageEditor,b=y.children[1];s.Modal.open({title:w,content:y}).onceClose(()=>s.stopCommand(a));const C=this.getEditorConfig(m.get("src"));this.imageEditor=new c(y.children[0],C),s.getModel().setEditing(!0),b.onclick=()=>this.applyChanges(m),o.onApplyButton(b)},stop(s){var i;(i=this.imageEditor)==null||i.destroy(),s.getModel().setEditing(!1)},getEditorConfig(s){const i={...o.config};return i.includeUI||(i.includeUI={}),i.includeUI={theme:{},...i.includeUI,loadImage:{path:s,name:"1"},uiSize:{height:g,width:u}},p&&(i.includeUI.theme["header.display"]="none"),i},createContent(){const s=document.createElement("div");return s.style.position="relative",s.innerHTML=`
        <div></div>
        <button class="tui-image-editor__apply-btn" style="
          position: absolute;
          top: 0; right: 0;
          margin: 10px;
          background-color: #fff;
          font-size: 1rem;
          border-radius: 3px;
          border: none;
          padding: 10px 20px;
          cursor: pointer
        ">
          ${o.labelApply}
        </botton>
      `,s},applyChanges(s){const i=this.imageEditor;l?l(i,s):i.getDrawingMode()==="CROPPER"?i.crop(i.getCropzoneRect()).then(()=>{this.uploadImage(i,s)}):this.uploadImage(i,s)},uploadImage(s,i){const v=t.Assets,m=s.toDataURL();if(f){const y=this.dataUrlToBlob(m);v.FileUploader().uploadFile({dataTransfer:{files:[y]}},w=>{const b=w&&w.data&&w.data[0],C=b&&(typeof b=="string"?b:b.src);C&&this.applyToTarget(C,i)})}else h&&v.add({src:m,name:(i.get("src")||"").split("/").pop()}),this.applyToTarget(m,i)},applyToTarget(s,i){i.set("src",s),t.Modal.close()},dataUrlToBlob(s){const i=s.split(","),v=window.atob(i[1]),m=i[0].split(":")[1].split(";")[0],y=new ArrayBuffer(v.length),w=new Uint8Array(y);for(let b=0;b<v.length;b++)w[b]=v.charCodeAt(b);return new Blob([y],{type:m})}})},ge=(t,e={})=>{t.Components.addType(e.name,{model:{defaults:{resizable:!0,droppable:!0,copyable:!0,progressType:"bullets","script-props":["progressType"],components:`
          <style>
            
    html,
    body {
      position: relative;
      height: 100%;
    }

    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      margin: 0;
      padding: 0;
    }

    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
          </style>

          
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"></div>
      <div class="swiper-slide"></div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
  
        `,traits:[{type:"select",name:"progressType",label:"Progress Type",changeProp:1,options:[{value:"bullets",name:"Bullets"},{value:"fraction",name:"Fraction"},{value:"progressbar",name:"Progressbar"}]},{type:"button",text:"Add Slider",full:!0,command:g=>{const u=g.getSelected(),p=u.find(".swiper-wrapper")[0],l=p.components().length;p.append(`<div class="swiper-slide">${l+1}</div>`),g.trigger("component:update"),u.view.updateScript()}}],script:function(g){const{progressType:u}=g,p=this;console.log("progressType",u);let l;function f(){l&&l.destroy(!0,!0),l=new Swiper(p.querySelector(".mySwiper"),{pagination:{el:".swiper-pagination",type:u},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}f(),new MutationObserver(a=>{a.forEach(r=>{r.type==="childList"&&f()})}).observe(p.querySelector(".swiper-wrapper"),{childList:!0})},style:{height:"80vh"}},initialize(g,u){this.on("component:clone",p=>{setTimeout(()=>{p.view.updateScript()},0)})}},view:{onRender(){this.model.trigger("component:mount")}}}),t.on("component:clone",g=>{g.get("type")===e.name&&setTimeout(()=>{g.view.updateScript()},0)})},ue=(t,e={})=>{t.Blocks.add(e.name,{...e,content:{type:e.name}})},he={"<%= rName %>":{}},be=(t,e={})=>{const o={label:"Silder",name:"Silder",category:"Basic",media:`
    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 218.207 218.207" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M214.31,27.276H3.897C1.743,27.276,0,29.019,0,31.172v27.276v77.931v50.655c0,2.154,1.743,3.897,3.897,3.897H214.31 c2.154,0,3.897-1.743,3.897-3.897v-50.655V58.448V31.172C218.207,29.019,216.464,27.276,214.31,27.276z M7.793,62.345h35.069 v70.138H7.793V62.345z M210.414,132.483h-11.69V62.345h11.69V132.483z M210.414,54.552h-15.586c-2.154,0-3.897,1.743-3.897,3.897 v77.931c0,2.154,1.743,3.897,3.897,3.897h15.586v42.862H7.793v-0.001v-42.862h38.966c2.154,0,3.897-1.743,3.897-3.897V58.448 c0-2.154-1.743-3.897-3.897-3.897H7.793V35.069h202.621V54.552z"></path> <circle cx="113" cy="163.655" r="7.793"></circle> <path d="M66.241,140.277h109.103c2.154,0,3.897-1.743,3.897-3.897V58.448c0-2.153-1.743-3.896-3.896-3.896H66.241 c-2.154,0-3.897,1.743-3.897,3.897v77.931C62.344,138.534,64.087,140.277,66.241,140.277z M70.138,62.345h101.31v70.138H70.138 V62.345z"></path> <rect x="66.241" y="159.759" width="11.69" height="7.793"></rect> <rect x="85.724" y="159.759" width="11.69" height="7.793"></rect> <rect x="128.586" y="159.759" width="11.69" height="7.793"></rect> <rect x="148.069" y="159.759" width="11.69" height="7.793"></rect> </g> </g> </g> </g></svg>
    `};for(let n in o)n in e||(e[n]=o[n]);ue(t,o),ge(t,o),t.I18n&&t.I18n.addMessages({en:he,...o.i18n})};let T;class ve{constructor(e){I(this,"_blocks",{});if(this.editor=e,T)throw new Error("New instance cannot be created!");this.editor=e}async loadBlocks(){const{userBlocks:e}=await this.editor.load({});if(e)return this._blocks=e,this._blocks}get blocks(){return this._blocks}get categories(){return Object.keys(this._blocks)}addBlock({details:e,htmlCode:o,cssCode:n}){this._blocks[e.category]||(this._blocks[e.category]={}),this._blocks[e.category][e.id]={label:e.label,htmlCode:o,cssCode:n}}updateBlock(e,o){for(let n in this._blocks){let d=this._blocks[n];if(d[e]){d[e]={...d[e],label:o};break}}}removeBlock(e){for(let o in this._blocks){let n=this._blocks[o];if(n[e]){delete n[e];break}}}updateBlockCategory(e,o){this._blocks[e]&&(this._blocks[o]=this._blocks[e],delete this._blocks[e])}}function $(t){return T||(T=new ve(t)),T}function fe({selectedComponent:t,editor:e,details:o,saveModal:n}){const d=e.Blocks,g=t==null?void 0:t.toHTML();let u=e.CodeManager.getCode(t,"css",{cssc:e.CssComposer});$(e).addBlock({details:o,htmlCode:g,cssCode:u}),e.store({}),d.add(o.id,{label:o.label,category:o.category,content:`${g}
      <style>
      ${u}
      </style>`}),n.close()}function ye(t){const e=$(t),o=t.BlockManager;let n=e.blocks;for(let d in n){let g=n[d];for(let u in g){let p=g[u],l={id:u,label:p.label,category:d},f=p.htmlCode,h=p.cssCode;o.add(l.id,{label:l.label,category:l.category,content:`${f}
      <style>
      ${h}
      </style>`})}}o.render()}function we(){const t=Date.now().toString(36),e=Math.random().toString(36).slice(2);return t+e}function ke(t,e){const o=$(t),n=t.getSelected(),d=t.Modal,g=`
<div class="modal">
  <div class="modal-content gjs-sm-properties" style="display: block">
    <div>
      <div style="margin-bottom: 10px; display: flex; gap: 10px;">
        <div class="gjs-field-wrp gjs-field-wrp--text">
          <div class="gjs-field gjs-field-text">
            <input type="text" id="component-name" name="component-name" placeholder="${e.blockLabel}">
          </div>
        </div>
        <div class="gjs-label-wrp">
          <div class="gjs-field gjs-field-select">
            <span>
              <select id="component-category" name="component-category">
                <option value="">Chọn danh mục</option>
                ${o.categories.map(a=>`<option value="${a}">${a}</option>`).join("")}
              </select>
            </span>
            <div class="gjs-sel-arrow">
              <div class="gjs-d-s-arrow"></div>
            </div>
          </div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text">
          <div class="gjs-field gjs-field-text">
            <input type="text" id="component-new-category" name="component-new-category" placeholder="${e.newCategoryLabel}">
          </div>
        </div>
      </div>
      <div style="margin-bottom: 10px;">
        <div id="screenShotCanvas" style="max-height: 300px; overflow: auto;"></div>
      </div>
      <div class="float-right">
       <button id="reset" class="gjs-btn-prim reset-button">${e.buttonResetLabel}</button>
        <button id="submit" class="gjs-btn-prim save-button">${e.buttonSaveLabel}</button>
      </div>
    </div>
  </div>
</div>`,u=d.open({content:g,title:e.modalSaveTitle,width:"400px",height:"auto",closedOnEscape:!0,closedOnClickOutside:!0}),p=document.getElementById("submit");p==null||p.addEventListener("click",f);const l=document.getElementById("reset");l==null||l.addEventListener("click",h),u.onceClose(()=>{p==null||p.removeEventListener("click",f),l==null||l.removeEventListener("click",h)}),ce(n==null?void 0:n.getEl()).then(function(a){var r;a.style.width="100%",a.style.height="auto",(r=document.getElementById("screenShotCanvas"))==null||r.appendChild(a)});function f(){const a=document.getElementById("component-name"),r=document.getElementById("component-category"),c=document.getElementById("component-new-category").value.trim()||r.value.trim(),k={id:we(),label:a.value,category:c};fe({selectedComponent:n,editor:t,details:k,saveModal:u})}function h(){const a=document.getElementById("component-name"),r=document.getElementById("component-category");a.value="",r.value=""}return u}function xe(t,e){const o=t.Modal,n=t.Blocks,d=$(t),g=d.blocks,u=`<div class="modal">
  <form id="saveAllForm" class="modal-content gjs-sm-properties" style="display: block">
  ${Object.entries(g).map(([h,a])=>`<div class="gjs-trt-trait__wrp gjs-trt-trait__wrp-id" style="margin-bottom: 10px; max-width: 300px;">
          <div class="gjs-trt-trait gjs-trt-trait--text">
            <div class="gjs-label-wrp">
              <div class="gjs-label" title="${e.categoryLabel}">${e.categoryLabel}</div>
            </div>
            <div class="gjs-field-wrp gjs-field-wrp--text">
              <div class="gjs-field gjs-field-text">
                <input type="hidden" name="${h}OldName" value="${h}"/>
                <input type="text" name="${h}NewName" class="category-input" value="${h}" placeholder="${e.categoryLabel}"/>
              </div>
            </div>
          </div>
        </div>
        <div class="gjs-sm-field gjs-sm-composite" style="margin-bottom: 10px;">
        <div class="gjs-sm-properties" style="display:block">
          <ul class="gjs-fields" style="flex-wrap: wrap; list-style:none; padding: 0">
          ${Object.entries(a).map(([r])=>`<li style="display: flex; width: 50%" data-block-item="${r}">
                  <div class="gjs-trt-trait__wrp gjs-trt-trait__wrp-id">
                    <div class="gjs-trt-trait gjs-trt-trait--text" style="width:100%; box-sizing: border-box;">
                      <div class="gjs-label-wrp">
                        <div class="gjs-label" title="${e.blockLabel}">${e.blockLabel}</div>
                      </div>
                      <div class="gjs-field-wrp gjs-field-wrp--text">
                        <div class="gjs-field gjs-field-text">
                          <input type="hidden" name="${r}Id" value="${r}"/>
                          <input type="text" name="${r}NewName" class="name-input" value="${a[r].label}" placeholder="${e.blockLabel}"/>
                        </div>
                      </div>
                      <button type="button" class="gjs-btn-prim delete-button" data-block-id="${r}">${e.buttonDeleteLabel}</button>
                    </div>
                  </div>
                </li>`).join(`
	`)}
          </ul>
        </div>
      </div>`).join("  ")}
    <button type="submit" class="gjs-btn-prim save-all-button" form="saveAllForm">${e.buttonSaveLabel}</button>
  </form>
</div>`,p=o.open({content:u,title:e.modalEditTitle,closedOnEscape:!0,closedOnClickOutside:!0});setTimeout(()=>{var a;document.querySelectorAll(".delete-button").forEach(r=>{r.addEventListener("click",l)}),(a=document.getElementById("saveAllForm"))==null||a.addEventListener("submit",f)},1),p.onceClose(()=>{var a;document.querySelectorAll(".delete-button").forEach(r=>{r.removeEventListener("click",l)}),(a=document.getElementById("saveAllForm"))==null||a.removeEventListener("submit",f)});async function l(h){h.preventDefault();const a=h.target.dataset.blockId,r=document.querySelector(`[data-block-item="${a}"]`);confirm(e.messageDeleteBlock)&&(n.remove(a),d.removeBlock(a),r&&r.remove(),await t.store({}))}async function f(h){h.preventDefault();const a=new FormData(h.target),r=n.getCategories();Object.entries(d.blocks).forEach(([B,c])=>{const k=a.get(`${B}OldName`).trim(),s=a.get(`${B}NewName`).trim();if(k!==s){d.updateBlockCategory(k,s);const i=r.get(k);i.set("label",s),i.set("id",s)}Object.entries(c).forEach(([i])=>{const v=a.get(`${i}NewName`).trim();d.updateBlock(i,v),n.get(i).set("label",v)})}),await t.store({}),p.close()}}const Be=t=>{const e=t.StorageManager,o=e.getCurrentStorage(),n=$(t);o&&t.Storage.add(e.getCurrent(),{async load(){return o.load(e.getCurrentOptions())},async store(d){return o.store({...d,userBlocks:n.blocks},e.getCurrentOptions())}})},je=(t,e={})=>{const o={blockLabel:"Tên",categoryLabel:"Danh mục",buttonSaveLabel:"Lưu",buttonResetLabel:"Thiết lập lại",buttonEditLabel:"Cài đăt khối",buttonDeleteLabel:"Xóa",modalSaveTitle:"Lưu",modalEditTitle:"Cài đặt",messageDeleteBlock:"Are you sure you want to delete this block?",newCategoryLabel:"Tạo danh mục mới",...e},n=t.DomComponents,d=t.Commands,g=t.Panels,u=$(t),p="block-adder",l="blocks-editor",f=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
  `;Be(t),u.loadBlocks().then(()=>ye(t)),g.addButton("options",{id:l,className:"fa fa-folder",command:l,attributes:{title:o.buttonEditLabel}}),n.getTypes().forEach(h=>{const{model:a,view:r}=h;n.addType(h.id,{model:a.extend({initToolbar(){a.prototype.initToolbar.apply(this,arguments);const B=this.get("toolbar");B.filter(c=>c.id===p).length||(B.unshift({id:p,command:function(){ke(t,o)},label:f}),this.set("toolbar",B))}}),view:r})}),d.add(l,{run:()=>xe(t,o)})},Ce=(t,e={})=>{t.Components.addType(e.name,{model:{defaults:{resizable:!0,droppable:!0,copyable:!0,progressType:"bullets","script-props":["progressType"],components:`
          <style>
            
  
          </style>

          
  <div class name="section">
  </div>
  
        `,script:function(g){},style:{height:"80px"}}}})},Se=(t,e={})=>{t.Blocks.add(e.name,{...e,content:{type:e.name}})},Ee={"<%= rName %>":{}},$e=(t,e={})=>{const o={label:"Margin Menu",name:"Margin Menu",category:"Basic",media:`
    <svg fill="#ffffff" viewBox="0 0 100 100" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M31,34H69a1,1,0,0,0,1-1V29a1,1,0,0,0-1-1H31a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1m41,6H28a4,4,0,0,1-4-4V26a4,4,0,0,1,4-4H72a4,4,0,0,1,4,4V36a4,4,0,0,1-4,4" fill-rule="evenodd"></path><path d="M31,72H69a1,1,0,0,0,1-1V67a1,1,0,0,0-1-1H31a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1m41,6H28a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H72a4,4,0,0,1,4,4V74a4,4,0,0,1-4,4" fill-rule="evenodd"></path><path d="M77,54H67a3,3,0,0,1-3-3V49a3,3,0,0,1,3-3H77a3,3,0,0,1,3,3v2a3,3,0,0,1-3,3" fill-rule="evenodd"></path><path d="M55,54H45a3,3,0,0,1-3-3V49a3,3,0,0,1,3-3H55a3,3,0,0,1,3,3v2a3,3,0,0,1-3,3" fill-rule="evenodd"></path><path d="M33,54H23a3,3,0,0,1-3-3V49a3,3,0,0,1,3-3H33a3,3,0,0,1,3,3v2a3,3,0,0,1-3,3" fill-rule="evenodd"></path></g></svg>
    `};for(let n in o)n in e||(e[n]=o[n]);Se(t,o),Ce(t,o),t.I18n&&t.I18n.addMessages({en:Ee,...o.i18n})},Ze=()=>{const t=q(),e=G(),[o,n]=E.useState(""),[d,g]=E.useState(!0),u=J(),p=H(c=>c.pluginsScript.loading),{plugins:l,loading:f}=H(c=>c.plugins),h=E.useMemo(()=>{var c;return(c=l==null?void 0:l.newData)==null?void 0:c.map(k=>({id:k.id,src:`${V}/uploads/${k.src}`}))},[l==null?void 0:l.newData]),a=c=>{c.on("component:add",m=>{switch(m.attributes.type){case"Masonry":z.addMasonry({name:t.slug});break}}),c.Panels.addButton("options",[{id:"google-fonts",className:"fa fa-font",attributes:{title:"Cài đặt kiểu chữ"},command:"open-fonts",togglable:!0,visible:!0}]),c.Panels.addButton("options",[{id:"open-link",className:"fa fa-link",attributes:{title:"Public"},command:"open-link",active:!1,togglable:!1}]),c.Commands.add("open-link",{run(m,y){t.slug=="trang-chu"?window.open("/","_blank"):window.open(`/${t.slug}`,"_blank")}});const k=["bootstrapIcon","link","quote","link-block","text-basic","text-section","column1","column2","column3","column3-7"],s=["open-templates","link-page"],i=["Extra","Blog","Layout","Short Codes"],{models:v}=c.BlockManager.getCategories();k.forEach(m=>c.BlockManager.remove(m)),s.forEach(m=>{c.Panels.removeButton("options",m)}),v.forEach(m=>{var y;return i.includes((y=m.get)==null?void 0:y.call(m,"id"))&&m.set("open",!1)})},r=async(c,k)=>{const s=Date.now();X(s,"Đang cập nhật trang...");const{html:i,css:v,js:m}=k;if(!new DOMParser().parseFromString(i,"text/html").body.innerHTML.trim()){L(s,"Trang không được để trống!");return}const b=new DOMParser().parseFromString(i,"text/html"),C=b.querySelectorAll('img[src^="data:image/"]');for(const S of C){const M=S.getAttribute("src");try{const x=await de.fileBase64({base64:M});x&&x.file?S.setAttribute("src",`${V}/uploads/${x.file}`):console.warn("Không tìm thấy tệp trong phản hồi:",x)}catch(x){console.error("Lỗi khi chuyển đổi base64:",x)}}const _=b.querySelector('iframe[name="masonry"]');if(_){const M=(await z.getSingleMasonry(t.slug)).img.map((x,R)=>`<div key="${R}" id="${x.idImg}" class="grid-item grid-item--width${x.width}" style="aspect-ratio: ${x.aspectRatio};">
                    <a class="w-full h-full" href="${x.link||"#"}">
                        <img class="w-full h-full" src="${x.imgSrc}" alt="Ảnh mô tả về ${x.imgSrc}" />
                    </a>
                </div>`).join("");_.parentNode.innerHTML=`<div class="grid">${M}</div>`}try{const S={html:b.body.innerHTML,css:v,js:m},M=c;await P.put({id:o._id,content:S,edit:M}),Q(s,"Đã cập nhật trang")}catch{L(s,"Cập nhật trang thất bại")}},B=()=>{P.sigEdit(t.slug).then(c=>{n(c),g(!1)}).catch(c=>{L("error",c.message,"Vui lòng thử lại sau!"),e("/admin/pages")})};return E.useEffect(()=>{p===!0&&u(K())},[]),E.useEffect(()=>{f===!0&&u(W())},[]),E.useEffect(()=>{B()},[]),j.jsxs(Y,{margin:0,header:j.jsxs("div",{className:"flex items-center gap-2",children:[j.jsxs(pe,{onClick:()=>e("/admin/pages"),children:[" ",j.jsx(Z,{size:20})," Trở về"]}),"Tên trang: ",(o==null?void 0:o.name)||""," | Đường dẫn: /",(o==null?void 0:o.slug)||""]}),children:[d&&j.jsx(ee,{}),!d&&!f&&j.jsx(j.Fragment,{children:j.jsx(te,{data:(o==null?void 0:o.edit)||"",loadData:d,configGrapeJs:a,height:"calc(100vh - 56px)",slug:t==null?void 0:t.slug,folder:o==null?void 0:o.name,pluginss:h,plugins:[ne,ae,me,D,ie,le,re,O,oe,se,A.model3d,A.imageLink,A.masonry,je,N.customType,N.customTypeSelect,be,$e],pluginsOpts:{[O]:{api_key:"AIzaSyAdJTYSLPlKz4w5Iqyy-JAF2o8uQKd1FKc"},[D]:{options:{extraPlugins:"dialogui,sharedspace,justify,colorbutton,panelbutton,font",language:"vi",toolbarGroups:[{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi","paragraph"]},{name:"links",groups:["links"]},{name:"insert",groups:["insert"]},"/",{name:"styles",groups:["styles"]},{name:"colors",groups:["colors"]},{name:"tools",groups:["tools"]},{name:"others",groups:["others"]}]},position:"center"}},savePage:r})})]})};export{Ze as default};
