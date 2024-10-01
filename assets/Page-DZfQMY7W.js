var U=Object.defineProperty;var q=(t,e,o)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var I=(t,e,o)=>q(t,typeof e!="symbol"?e+"":e,o);import{u as G,a as J,r as E,c as K,d as H,f as V,aZ as W,aH as Q,j,a3 as X,W as L,p as P,t as Y}from"./index-CcDScCIj.js";import{b7 as Z,b8 as ee}from"./Layout-rT2rL0Mv.js";import{S as te,P as oe,p as se,a as ne,B as A}from"./index-CfocsqHw.js";import{p as ae,b as ie,a as le}from"./index-BaK9lv42.js";import{p as D,a as re,b as ce,c as O}from"./index-CNulVg0E.js";import de from"./html2canvas.esm-CBrSDip1.js";import{S as N}from"./index-BcZ8U7N5.js";import{m as z}from"./customPageApi-Byfkdsgn.js";import{f as pe}from"./fileApi-BF5u9JAm.js";import{B as me}from"./TextArea-DcrxrkUU.js";import"./index-Do_G6Ik8.js";import"./EllipsisOutlined-DOAbwiOn.js";import"./Overflow-DYxonkPG.js";import"./CheckOutlined-CzI6vixS.js";import"./index-BCiBb8i7.js";import"./index-DzmEW-zz.js";import"./index-GvQfN75r.js";import"./index-6EM9zGX5.js";import"./index-BeJqwAnw.js";import"./SearchOutlined-Cw6RRrfB.js";import"./row-Bv7HvGZ0.js";import"./indexFile-KYTZc652.js";const ge=(t,e={})=>{const o={config:{},constructor:"",labelImageEditor:"Chỉnh sửa ảnh",labelApply:"Cập nhập",height:"650px",width:"100%",commandId:"tui-image-editor",toolbarIcon:`<svg viewBox="0 0 24 24">
                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z">
                    </path>
                  </svg>`,hideHeader:!0,addToAssets:!0,upload:!1,onApplyButton:()=>{},onApply:null,script:["https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js","https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js","https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js"],style:["https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css","https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css"],...e},{script:n,style:c,height:m,width:g,hideHeader:l,onApply:d,upload:w,addToAssets:u,commandId:i}=o,r=typeof window<"u",x=()=>{var s;return o.constructor||r&&((s=window.tui)==null?void 0:s.ImageEditor)};let B=x();if(!B&&(n!=null&&n.length)&&r){const{head:s}=document,a=Array.isArray(n)?[...n]:[n],v=Array.isArray(c)?[...c]:[c],y=f=>{if(f.length){const b=document.createElement("link");b.href=f.shift(),b.rel="stylesheet",s.appendChild(b),y(f)}},h=f=>{if(f.length){const b=document.createElement("script");b.src=f.shift(),b.onerror=b.onload=h.bind(null,f),s.appendChild(b)}else B=x()};y(v),h(a)}o.toolbarIcon&&t.Components.addType("image",{extendFn:["initToolbar"],model:{initToolbar(){const s=this.get("toolbar");(s==null?void 0:s.some(v=>v.command===i))||(s==null||s.unshift({command:i,label:o.toolbarIcon}),this.set("toolbar",s))}}});const p={level:"error",ns:i};t.Commands.add(i,{imageEditor:null,run(s,a,v={}){if(!B)return s.log("TOAST UI Image editor not found",p),s.stopCommand(i);const y=v.target||s.getSelected();if(!y)return s.log("Target not available",p),s.stopCommand(i);const h=this.createContent(),f=o.labelImageEditor,b=h.children[1];s.Modal.open({title:f,content:h}).onceClose(()=>s.stopCommand(i));const S=this.getEditorConfig(y.get("src"));this.imageEditor=new B(h.children[0],S),s.getModel().setEditing(!0),b.onclick=()=>this.applyChanges(y),o.onApplyButton(b)},stop(s){var a;(a=this.imageEditor)==null||a.destroy(),s.getModel().setEditing(!1)},getEditorConfig(s){const a={...o.config};return a.includeUI||(a.includeUI={}),a.includeUI={theme:{},...a.includeUI,loadImage:{path:s,name:"1"},uiSize:{height:m,width:g}},l&&(a.includeUI.theme["header.display"]="none"),a},createContent(){const s=document.createElement("div");return s.style.position="relative",s.innerHTML=`
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
      `,s},applyChanges(s){const a=this.imageEditor;d?d(a,s):a.getDrawingMode()==="CROPPER"?a.crop(a.getCropzoneRect()).then(()=>{this.uploadImage(a,s)}):this.uploadImage(a,s)},uploadImage(s,a){const v=t.Assets,y=s.toDataURL();if(w){const h=this.dataUrlToBlob(y);v.FileUploader().uploadFile({dataTransfer:{files:[h]}},f=>{const b=f&&f.data&&f.data[0],S=b&&(typeof b=="string"?b:b.src);S&&this.applyToTarget(S,a)})}else u&&v.add({src:y,name:(a.get("src")||"").split("/").pop()}),this.applyToTarget(y,a)},applyToTarget(s,a){a.set("src",s),t.Modal.close()},dataUrlToBlob(s){const a=s.split(","),v=window.atob(a[1]),y=a[0].split(":")[1].split(";")[0],h=new ArrayBuffer(v.length),f=new Uint8Array(h);for(let b=0;b<v.length;b++)f[b]=v.charCodeAt(b);return new Blob([h],{type:y})}})},ue=(t,e={})=>{t.Components.addType(e.name,{model:{defaults:{resizable:!0,droppable:!0,copyable:!0,progressType:"bullets","script-props":["progressType"],components:`
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
  
        `,traits:[{type:"select",name:"progressType",label:"Progress Type",changeProp:1,options:[{value:"bullets",name:"Bullets"},{value:"fraction",name:"Fraction"},{value:"progressbar",name:"Progressbar"}]},{type:"button",text:"Add Slider",full:!0,command:m=>{const g=m.getSelected(),l=g.find(".swiper-wrapper")[0],d=l.components().length;l.append(`<div class="swiper-slide">${d+1}</div>`),m.trigger("component:update"),g.view.updateScript()}}],script:function(m){const{progressType:g}=m,l=this;console.log("progressType",g);let d;function w(){d&&d.destroy(!0,!0),d=new Swiper(l.querySelector(".mySwiper"),{pagination:{el:".swiper-pagination",type:g},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}w(),new MutationObserver(i=>{i.forEach(r=>{r.type==="childList"&&w()})}).observe(l.querySelector(".swiper-wrapper"),{childList:!0})},style:{height:"80vh"}},initialize(m,g){this.on("component:clone",l=>{setTimeout(()=>{l.view.updateScript()},0)})}},view:{onRender(){this.model.trigger("component:mount")}}}),t.on("component:clone",m=>{m.get("type")===e.name&&setTimeout(()=>{m.view.updateScript()},0)})},he=(t,e={})=>{t.Blocks.add(e.name,{...e,content:{type:e.name}})},be={"<%= rName %>":{}},ve=(t,e={})=>{const o={label:"Silder",name:"Silder",category:"Basic",media:`
    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 218.207 218.207" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M214.31,27.276H3.897C1.743,27.276,0,29.019,0,31.172v27.276v77.931v50.655c0,2.154,1.743,3.897,3.897,3.897H214.31 c2.154,0,3.897-1.743,3.897-3.897v-50.655V58.448V31.172C218.207,29.019,216.464,27.276,214.31,27.276z M7.793,62.345h35.069 v70.138H7.793V62.345z M210.414,132.483h-11.69V62.345h11.69V132.483z M210.414,54.552h-15.586c-2.154,0-3.897,1.743-3.897,3.897 v77.931c0,2.154,1.743,3.897,3.897,3.897h15.586v42.862H7.793v-0.001v-42.862h38.966c2.154,0,3.897-1.743,3.897-3.897V58.448 c0-2.154-1.743-3.897-3.897-3.897H7.793V35.069h202.621V54.552z"></path> <circle cx="113" cy="163.655" r="7.793"></circle> <path d="M66.241,140.277h109.103c2.154,0,3.897-1.743,3.897-3.897V58.448c0-2.153-1.743-3.896-3.896-3.896H66.241 c-2.154,0-3.897,1.743-3.897,3.897v77.931C62.344,138.534,64.087,140.277,66.241,140.277z M70.138,62.345h101.31v70.138H70.138 V62.345z"></path> <rect x="66.241" y="159.759" width="11.69" height="7.793"></rect> <rect x="85.724" y="159.759" width="11.69" height="7.793"></rect> <rect x="128.586" y="159.759" width="11.69" height="7.793"></rect> <rect x="148.069" y="159.759" width="11.69" height="7.793"></rect> </g> </g> </g> </g></svg>
    `};for(let n in o)n in e||(e[n]=o[n]);he(t,o),ue(t,o),t.I18n&&t.I18n.addMessages({en:be,...o.i18n})};let M;class fe{constructor(e){I(this,"_blocks",{});if(this.editor=e,M)throw new Error("New instance cannot be created!");this.editor=e}async loadBlocks(){const{userBlocks:e}=await this.editor.load({});if(e)return this._blocks=e,this._blocks}get blocks(){return this._blocks}get categories(){return Object.keys(this._blocks)}addBlock({details:e,htmlCode:o,cssCode:n}){this._blocks[e.category]||(this._blocks[e.category]={}),this._blocks[e.category][e.id]={label:e.label,htmlCode:o,cssCode:n}}updateBlock(e,o){for(let n in this._blocks){let c=this._blocks[n];if(c[e]){c[e]={...c[e],label:o};break}}}removeBlock(e){for(let o in this._blocks){let n=this._blocks[o];if(n[e]){delete n[e];break}}}updateBlockCategory(e,o){this._blocks[e]&&(this._blocks[o]=this._blocks[e],delete this._blocks[e])}}function $(t){return M||(M=new fe(t)),M}function ye({selectedComponent:t,editor:e,details:o,saveModal:n}){const c=e.Blocks,m=t==null?void 0:t.toHTML();let g=e.CodeManager.getCode(t,"css",{cssc:e.CssComposer});$(e).addBlock({details:o,htmlCode:m,cssCode:g}),e.store({}),c.add(o.id,{label:o.label,category:o.category,content:`${m}
      <style>
      ${g}
      </style>`}),n.close()}function we(t){const e=$(t),o=t.BlockManager;let n=e.blocks;for(let c in n){let m=n[c];for(let g in m){let l=m[g],d={id:g,label:l.label,category:c},w=l.htmlCode,u=l.cssCode;o.add(d.id,{label:d.label,category:d.category,content:`${w}
      <style>
      ${u}
      </style>`})}}o.render()}function ke(){const t=Date.now().toString(36),e=Math.random().toString(36).slice(2);return t+e}function xe(t,e){const o=$(t),n=t.getSelected(),c=t.Modal,m=`
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
                ${o.categories.map(i=>`<option value="${i}">${i}</option>`).join("")}
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
</div>`,g=c.open({content:m,title:e.modalSaveTitle,width:"400px",height:"auto",closedOnEscape:!0,closedOnClickOutside:!0}),l=document.getElementById("submit");l==null||l.addEventListener("click",w);const d=document.getElementById("reset");d==null||d.addEventListener("click",u),g.onceClose(()=>{l==null||l.removeEventListener("click",w),d==null||d.removeEventListener("click",u)}),de(n==null?void 0:n.getEl()).then(function(i){var r;i.style.width="100%",i.style.height="auto",(r=document.getElementById("screenShotCanvas"))==null||r.appendChild(i)});function w(){const i=document.getElementById("component-name"),r=document.getElementById("component-category"),B=document.getElementById("component-new-category").value.trim()||r.value.trim(),p={id:ke(),label:i.value,category:B};ye({selectedComponent:n,editor:t,details:p,saveModal:g})}function u(){const i=document.getElementById("component-name"),r=document.getElementById("component-category");i.value="",r.value=""}return g}function Be(t,e){const o=t.Modal,n=t.Blocks,c=$(t),m=c.blocks,g=`<div class="modal">
  <form id="saveAllForm" class="modal-content gjs-sm-properties" style="display: block">
  ${Object.entries(m).map(([u,i])=>`<div class="gjs-trt-trait__wrp gjs-trt-trait__wrp-id" style="margin-bottom: 10px; max-width: 300px;">
          <div class="gjs-trt-trait gjs-trt-trait--text">
            <div class="gjs-label-wrp">
              <div class="gjs-label" title="${e.categoryLabel}">${e.categoryLabel}</div>
            </div>
            <div class="gjs-field-wrp gjs-field-wrp--text">
              <div class="gjs-field gjs-field-text">
                <input type="hidden" name="${u}OldName" value="${u}"/>
                <input type="text" name="${u}NewName" class="category-input" value="${u}" placeholder="${e.categoryLabel}"/>
              </div>
            </div>
          </div>
        </div>
        <div class="gjs-sm-field gjs-sm-composite" style="margin-bottom: 10px;">
        <div class="gjs-sm-properties" style="display:block">
          <ul class="gjs-fields" style="flex-wrap: wrap; list-style:none; padding: 0">
          ${Object.entries(i).map(([r])=>`<li style="display: flex; width: 50%" data-block-item="${r}">
                  <div class="gjs-trt-trait__wrp gjs-trt-trait__wrp-id">
                    <div class="gjs-trt-trait gjs-trt-trait--text" style="width:100%; box-sizing: border-box;">
                      <div class="gjs-label-wrp">
                        <div class="gjs-label" title="${e.blockLabel}">${e.blockLabel}</div>
                      </div>
                      <div class="gjs-field-wrp gjs-field-wrp--text">
                        <div class="gjs-field gjs-field-text">
                          <input type="hidden" name="${r}Id" value="${r}"/>
                          <input type="text" name="${r}NewName" class="name-input" value="${i[r].label}" placeholder="${e.blockLabel}"/>
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
</div>`,l=o.open({content:g,title:e.modalEditTitle,closedOnEscape:!0,closedOnClickOutside:!0});setTimeout(()=>{var i;document.querySelectorAll(".delete-button").forEach(r=>{r.addEventListener("click",d)}),(i=document.getElementById("saveAllForm"))==null||i.addEventListener("submit",w)},1),l.onceClose(()=>{var i;document.querySelectorAll(".delete-button").forEach(r=>{r.removeEventListener("click",d)}),(i=document.getElementById("saveAllForm"))==null||i.removeEventListener("submit",w)});async function d(u){u.preventDefault();const i=u.target.dataset.blockId,r=document.querySelector(`[data-block-item="${i}"]`);confirm(e.messageDeleteBlock)&&(n.remove(i),c.removeBlock(i),r&&r.remove(),await t.store({}))}async function w(u){u.preventDefault();const i=new FormData(u.target),r=n.getCategories();Object.entries(c.blocks).forEach(([x,B])=>{const p=i.get(`${x}OldName`).trim(),s=i.get(`${x}NewName`).trim();if(p!==s){c.updateBlockCategory(p,s);const a=r.get(p);a.set("label",s),a.set("id",s)}Object.entries(B).forEach(([a])=>{const v=i.get(`${a}NewName`).trim();c.updateBlock(a,v),n.get(a).set("label",v)})}),await t.store({}),l.close()}}const Se=t=>{const e=t.StorageManager,o=e.getCurrentStorage(),n=$(t);o&&t.Storage.add(e.getCurrent(),{async load(){return o.load(e.getCurrentOptions())},async store(c){return o.store({...c,userBlocks:n.blocks},e.getCurrentOptions())}})},je=(t,e={})=>{const o={blockLabel:"Tên",categoryLabel:"Danh mục",buttonSaveLabel:"Lưu",buttonResetLabel:"Thiết lập lại",buttonEditLabel:"Cài đăt khối",buttonDeleteLabel:"Xóa",modalSaveTitle:"Lưu",modalEditTitle:"Cài đặt",messageDeleteBlock:"Are you sure you want to delete this block?",newCategoryLabel:"Tạo danh mục mới",...e},n=t.DomComponents,c=t.Commands,m=t.Panels,g=$(t),l="block-adder",d="blocks-editor",w=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
  `;Se(t),g.loadBlocks().then(()=>we(t)),m.addButton("options",{id:d,className:"fa fa-folder",command:d,attributes:{title:o.buttonEditLabel}}),n.getTypes().forEach(u=>{const{model:i,view:r}=u;n.addType(u.id,{model:i.extend({initToolbar(){i.prototype.initToolbar.apply(this,arguments);const x=this.get("toolbar");x.filter(B=>B.id===l).length||(x.unshift({id:l,command:function(){xe(t,o)},label:w}),this.set("toolbar",x))}}),view:r})}),c.add(d,{run:()=>Be(t,o)})},Ce=(t,e={})=>{t.Components.addType(e.name,{model:{defaults:{resizable:!0,droppable:!0,copyable:!0,progressType:"bullets","script-props":["progressType"],components:`
          <style>
            
  
          </style>

          
  <div class name="section">
  </div>
  
        `,script:function(m){},style:{height:"80px"}}}})},Ee=(t,e={})=>{t.Blocks.add(e.name,{...e,content:{type:e.name}})},$e={"<%= rName %>":{}},Te=(t,e={})=>{const o={label:"Margin Menu",name:"Margin Menu",category:"Basic",media:`
    <svg fill="#ffffff" viewBox="0 0 100 100" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M31,34H69a1,1,0,0,0,1-1V29a1,1,0,0,0-1-1H31a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1m41,6H28a4,4,0,0,1-4-4V26a4,4,0,0,1,4-4H72a4,4,0,0,1,4,4V36a4,4,0,0,1-4,4" fill-rule="evenodd"></path><path d="M31,72H69a1,1,0,0,0,1-1V67a1,1,0,0,0-1-1H31a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1m41,6H28a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H72a4,4,0,0,1,4,4V74a4,4,0,0,1-4,4" fill-rule="evenodd"></path><path d="M77,54H67a3,3,0,0,1-3-3V49a3,3,0,0,1,3-3H77a3,3,0,0,1,3,3v2a3,3,0,0,1-3,3" fill-rule="evenodd"></path><path d="M55,54H45a3,3,0,0,1-3-3V49a3,3,0,0,1,3-3H55a3,3,0,0,1,3,3v2a3,3,0,0,1-3,3" fill-rule="evenodd"></path><path d="M33,54H23a3,3,0,0,1-3-3V49a3,3,0,0,1,3-3H33a3,3,0,0,1,3,3v2a3,3,0,0,1-3,3" fill-rule="evenodd"></path></g></svg>
    `};for(let n in o)n in e||(e[n]=o[n]);Ee(t,o),Ce(t,o),t.I18n&&t.I18n.addMessages({en:$e,...o.i18n})},Ze=()=>{const t=G(),e=J(),[o,n]=E.useState(""),[c,m]=E.useState(!0),g=K(),{plugins:l,loading:d}=H(p=>p.plugins),{pluginsScript:w,loading:u}=H(p=>p.pluginsScript),i=E.useMemo(()=>{var p;return(p=l==null?void 0:l.newData)==null?void 0:p.map(s=>({id:s.id,src:`${V}/uploads/${s.src}`}))},[l==null?void 0:l.newData]),r=p=>{p.on("component:add",h=>{switch(h.attributes.type){case"Masonry":z.addMasonry({name:t.slug});break}}),p.Panels.addButton("options",[{id:"google-fonts",className:"fa fa-font",attributes:{title:"Cài đặt kiểu chữ"},command:"open-fonts",togglable:!0,visible:!0}]),p.Panels.addButton("options",[{id:"open-link",className:"fa fa-link",attributes:{title:"Public"},command:"open-link",active:!1,togglable:!1}]),p.Commands.add("open-link",{run(h,f){t.slug=="trang-chu"?window.open("/","_blank"):window.open(`/${t.slug}`,"_blank")}});const s=["bootstrapIcon","link","quote","link-block","text-basic","text-section","column1","column2","column3","column3-7"],a=["open-templates","link-page"],v=["Extra","Blog","Layout","Short Codes"],{models:y}=p.BlockManager.getCategories();s.forEach(h=>p.BlockManager.remove(h)),a.forEach(h=>{p.Panels.removeButton("options",h)}),y.forEach(h=>{var f;return v.includes((f=h.get)==null?void 0:f.call(h,"id"))&&h.set("open",!1)})},x=async(p,s)=>{const a=Date.now();X(a,"Đang cập nhật trang...");const{html:v,css:y,js:h}=s;if(!new DOMParser().parseFromString(v,"text/html").body.innerHTML.trim()){L(a,"Trang không được để trống!");return}const S=new DOMParser().parseFromString(v,"text/html"),R=S.querySelectorAll('img[src^="data:image/"]');for(const C of R){const T=C.getAttribute("src");try{const k=await pe.fileBase64({base64:T});k&&k.file?C.setAttribute("src",`${V}/uploads/${k.file}`):console.warn("Không tìm thấy tệp trong phản hồi:",k)}catch(k){console.error("Lỗi khi chuyển đổi base64:",k)}}const _=S.querySelector('iframe[name="masonry"]');if(_){const T=(await z.getSingleMasonry(t.slug)).img.map((k,F)=>`<div key="${F}" id="${k.idImg}" class="grid-item grid-item--width${k.width}" style="aspect-ratio: ${k.aspectRatio};">
                    <a class="w-full h-full" href="${k.link||"#"}">
                        <img class="w-full h-full" src="${k.imgSrc}" alt="Ảnh mô tả về ${k.imgSrc}" />
                    </a>
                </div>`).join("");_.parentNode.innerHTML=`<div class="grid">${T}</div>`}try{const C={html:S.body.innerHTML,css:y,js:h},T=p;await P.put({id:o._id,content:C,edit:T}),Y(a,"Đã cập nhật trang")}catch{L(a,"Cập nhật trang thất bại")}},B=()=>{P.sigEdit(t.slug).then(p=>{n(p),m(!1)}).catch(p=>{L("error",p.message,"Vui lòng thử lại sau!"),e("/admin/pages")})};return E.useEffect(()=>{u===!0&&g(W())},[]),E.useEffect(()=>{d&&g(Q())},[]),E.useEffect(()=>{B()},[]),j.jsxs(Z,{title:`Trang ${(o==null?void 0:o.name)||""}`,margin:0,header:j.jsxs("div",{className:"flex items-center gap-2",children:[j.jsxs(me,{onClick:()=>e("/admin/pages"),children:[" ",j.jsx(ee,{size:20})," Trở về"]}),"Tên trang: ",(o==null?void 0:o.name)||""," | Đường dẫn: /",(o==null?void 0:o.slug)||""]}),children:[c&&j.jsx(te,{}),!c&&!d&&j.jsx(j.Fragment,{children:j.jsx(oe,{data:(o==null?void 0:o.edit)||"",loadData:c,configGrapeJs:r,height:"calc(100vh - 56px)",slug:t==null?void 0:t.slug,folder:o==null?void 0:o.name,canvas:w[0],pluginss:i,plugins:[ae,ie,ge,D,le,re,ce,O,se,ne,A.model3d,A.imageLink,A.masonry,je,N.customType,N.customTypeSelect,ve,Te],pluginsOpts:{[O]:{api_key:"AIzaSyAdJTYSLPlKz4w5Iqyy-JAF2o8uQKd1FKc"},[D]:{options:{extraPlugins:"dialogui,sharedspace,justify,colorbutton,panelbutton,font",language:"vi",toolbarGroups:[{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi","paragraph"]},{name:"links",groups:["links"]},{name:"insert",groups:["insert"]},"/",{name:"styles",groups:["styles"]},{name:"colors",groups:["colors"]},{name:"tools",groups:["tools"]},{name:"others",groups:["others"]}]},position:"center"}},savePage:x})})]})};export{Ze as default};
