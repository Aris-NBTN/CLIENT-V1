import{e as V,s as k,D as Z,f as R,cA as G}from"./index-DlYMrpPW.js";import{f as F}from"./fileApi-BlZkL-Jt.js";const D=(a,l)=>{const n={id:"1",label:"File 3D"},r={id:"2",label:"Ánh sáng",open:!1},o={id:"3",label:"Bóng đỗ",open:!1},p={id:"4",label:"Tự động xoay",open:!1},m={id:"5",label:"Môi trường",open:!1},h={id:"7",label:"Skybox",open:!1},b={id:"8",label:"Tùy chọn",open:!0},v={id:"9",label:"Camera",open:!1};a.Components.addType("Model 3D",{model:{defaults:{name:"Model 3D",tagName:"model-viewer",droppable:!1,resizable:!0,script:function(){},traits:[{name:"option-file-glb",type:"option-file",category:b},{name:"input-src-glb",type:"input-file",label:"Link file",category:n},{name:"src",type:"input-file-glb",category:n},{label:"Camera",name:"camera-model",type:"camera-model",category:v},{label:"Min FOV",name:"camera-min-fov",type:"camera-min-fov",category:v},{label:"Max FOV",name:"camera-max-fov",type:"camera-max-fov",category:v},{label:"Độ sáng",name:"exposure",type:"range-light",category:r},{name:"input-src-environment",type:"input-src-environment",label:"Link file",category:m},{label:"Môi trường",name:"environment-image",type:"environment",category:m},{name:"add-environment",type:"add-environment",category:m},{label:"Skybox",name:"skybox",type:"skybox",category:h},{label:"Distance",name:"floor-skybox",type:"floor-skybox",category:h},{label:"Cường độ",name:"shadow-intensity",type:"shadow-intensity",category:o},{label:"Độ mềm",name:"shadow-softness",type:"shadow-softness",category:o},{label:"Vị trí",name:"shadow-placement",type:"shadow-placement",category:o},{label:"Góc xoay",name:"rotation-per-second",type:"rotation-per-second",category:p},{label:"Độ trễ",name:"delay-rotate",type:"delay-rotate",category:p}],attributes:{"camera-controls":!0,"touch-action":"pan-y",src:"http://localhost:8082/uploads/3d/file3d/1.glb"},style:{width:"100%",height:"345px",display:"block"}}}}),a.TraitManager.addType("camera-model",{noLabel:!0,createInput({component:e}){const i=document.createElement("div");return i.classList.add("flex","items-center","justify-center"),i.innerHTML=`
      <button id="a">Đặt làm camera mặc định</button>
      `,i.querySelector("#a").addEventListener("click",()=>{const s=e.view.el,u=s.getCameraOrbit();s.getCameraTarget();const d=s.getFieldOfView();e.addAttributes({"camera-orbit":u}),e.addAttributes({"field-of-view":d}),V("Đã đặt làm camera mặc định","Vui lòng lưu trang !")}),i},onEvent({component:e}){}}),a.TraitManager.addType("camera-max-fov",{createInput({component:e}){var s,u;const i=parseInt((u=(s=e.view.el)==null?void 0:s.getAttribute("max-field-of-view"))==null?void 0:u.replace("deg",""))||e.view.el.getFieldOfView().toFixed(0);console.log(i);const t=document.createElement("div");return t.classList.add("flex","items-center","justify-center","flex-col"),t.innerHTML=`
      <input 
        id="fov" 
        type="range" 
        min="0" max="120" step="10" value="${i}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,t},onEvent({component:e}){var t=this.el.querySelector("#fov").value;e.addAttributes({"max-field-of-view":`${t}deg`})}}),a.TraitManager.addType("camera-min-fov",{createInput({component:e}){var u,d,f,g;const i=parseInt((d=(u=e.view.el)==null?void 0:u.getAttribute("max-field-of-view"))==null?void 0:d.replace("deg",""))||60,t=parseInt((g=(f=e.view.el)==null?void 0:f.getAttribute("min-field-of-view"))==null?void 0:g.replace("deg",""))||30,s=document.createElement("div");return s.classList.add("flex","items-center","justify-center","flex-col"),s.innerHTML=`
      <input 
        id="fov" 
        type="range" 
        min="0" max="${i}" step="1" value="${t}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,s},onEvent({component:e}){var t=this.el.querySelector("#fov").value;e.addAttributes({"min-field-of-view":`${t}deg`})}}),a.TraitManager.addType("option-file",{noLabel:!0,createInput({component:e}){const i=document.createElement("div");i.classList.add("flex","items-center","justify-center"),i.innerHTML=`
      <button id="a">Thêm tùy chọn</button>
      `;const t=e.view.el;return t[Object.getOwnPropertySymbols(t).find(u=>u.description==="scene")],i.querySelector("#a").addEventListener("click",()=>{a.DomComponents.addComponent({tagName:"div",classes:["aaa"],components:`
              <style>
            .aaa{
                position: absolute;
                bottom: 20px;
                right: 0;
                display: flex;
            }

            .aaa:hover .main {
                height: auto;
            }

            .main {
                display: flex;
                flex-wrap: wrap;
                width: 14em;
                height: 0px;
                overflow: hidden;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }

            .card {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60px;
                height: 60px;
                border-top-left-radius: text10px;
                background: lightgrey;
                transition: 0.4s ease-in-out, 0.2s background-color ease-in-out,
                    0.2s background-image ease-in-out;
                background: none;
                border: 1px solid transparent;
                -webkit-backdrop-filter: blur(5px);
            }

            .card img {
                opacity: 0;
                width: 90%;
                height: 90%;
                border-radius: 5px;
                object-fit: cover;
                transition: 0.2s ease-in-out;
            }

            .card .instagram {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: #cc39a4;
            }

            .card:nth-child(2) {
                border-radius: 0px;
            }

            .card:nth-child(2) .twitter {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: #03a9f4;
            }

            .card:nth-child(3) {
                border-top-right-radius: 10px;
                border-top-left-radius: 0px;
            }

            .card:nth-child(3) .dribble {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: #ffb5d2;
            }

            .card:nth-child(4) {
                border-radius: 0px;
            }

            .card:nth-child(4) .codepen {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: black;
            }

            .card:nth-child(5) {
                border-radius: 0px;
            }

            .card:nth-child(5) .uiverse {
                position: absolute;
                margin-left: 0.2em;
                margin-top: 0.2em;
                opacity: 0;
                transition: 0.2s ease-in-out;
            }

            .card:nth-child(6) {
                border-radius: 0px;
            }

            .card:nth-child(6) .discord {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: #8c9eff;
            }

            .card:nth-child(7) {
                border-bottom-left-radius: 10px;
                border-top-left-radius: 0px;
            }

            .card:nth-child(7) .github {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: black;
            }

            .card:nth-child(8) {
                border-radius: 0px;
            }

            .card:nth-child(8) .telegram {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: #29b6f6;
            }

            .card:nth-child(9) {
                border-bottom-right-radius: 10px;
                border-top-left-radius: 0px;
            }

            .card:nth-child(9) .reddit {
                opacity: 0;
                transition: 0.2s ease-in-out;
            }

            .main:hover {
                width: 14em;
                cursor: pointer;
            }
            .main:hover .card {
                border-radius: 10px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.3);
                background: rgba(255, 255, 255, 0.2);
            }

            .main:hover .card:nth-child(5) {
                border: transparent;
            }

            .main:hover .text {
                opacity: 0;
                z-index: -3;
            }

            .main:hover img {
                opacity: 1;
            }

            .card:nth-child(1):hover {
                background-color: #cc39a4;
            }

            .card:nth-child(2):hover {
                background-color: #03a9f4;
            }

            .card:nth-child(3):hover {
                background-color: #ffb5d2;
            }

            .card:nth-child(4):hover {
                background-color: #1e1f26;
            }
            .card:nth-child(5):hover {
                animation: backgroundIMG 0.1s;
                animation-fill-mode: forwards;
            }

            @keyframes backgroundIMG {
                100% {
                    background-image: linear-gradient(#bf66ff, #6248ff, #00ddeb);
                }
            }

            .card:nth-child(6):hover {
                background-color: #8c9eff;
            }

            .card:nth-child(7):hover {
                background-color: black;
            }

            .card:nth-child(8):hover {
                background-color: #29b6f6;
            }

            .card:nth-child(9):hover {
                background-color: rgb(255, 69, 0);
            }

            .text {
                bottom: 0px;
                width: 100%;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.7em;
                transition: 0.4s ease-in-out;
                text-align: center;
                font-weight: bold;
                letter-spacing: 0.33em;
                z-index: 3;
            }
        </style>

        <style>
            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 11rem;
                overflow: hidden;
                height: 2.5rem;
                background-size: 300% 300%;
                backdrop-filter: blur(1rem);
                border-radius: 5rem;
                transition: 0.5s;
                animation: gradient_301 5s ease infinite;
                border: double 4px transparent;
                background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #FE53BB 45%, #8F51EA 67%, #0044ff 87%);
                background-origin: border-box;
                background-clip: content-box, border-box;
            }

            #container-stars {
                position: absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
                overflow: hidden;
                transition: 0.5s;
                backdrop-filter: blur(1rem);
                border-radius: 5rem;
            }

            strong {
                z-index: 2;
                font-family: 'Roboto', sans-serif;
                font-size: 12px;
                letter-spacing: 2px;
                color: #FFFFFF;
            }

            #glow {
                position: absolute;
                display: flex;
                width: 12rem;
            }

            .circle {
                width: 100%;
                height: 30px;
                filter: blur(2rem);
                animation: pulse_3011 4s infinite;
                z-index: -1;
            }

            .circle:nth-of-type(1) {
                background: rgba(254, 83, 186, 0.636);
            }

            .circle:nth-of-type(2) {
                background: rgba(142, 81, 234, 0.704);
            }

            .btn:hover #container-stars {
                z-index: 1;
                background-color: #212121;
            }

            .btn:hover {
                transform: scale(1.1)
            }

            .btn:active {
                border: double 4px #FE53BB;
                background-origin: border-box;
                background-clip: content-box, border-box;
                animation: none;
            }

            .btn:active .circle {
                background: #FE53BB;
            }

            #stars {
                position: relative;
                background: transparent;
                width: 200rem;
                height: 200rem;
            }

            #stars::after {
                content: "";
                position: absolute;
                top: -10rem;
                left: -100rem;
                width: 100%;
                height: 100%;
                animation: animStarRotate 90s linear infinite;
            }

            #stars::after {
                background-image: radial-gradient(#ffffff 1px, transparent 1%);
                background-size: 50px 50px;
            }

            #stars::before {
                content: "";
                position: absolute;
                top: 0;
                left: -50%;
                width: 170%;
                height: 500%;
                animation: animStar 60s linear infinite;
            }

            #stars::before {
                background-image: radial-gradient(#ffffff 1px, transparent 1%);
                background-size: 50px 50px;
                opacity: 0.5;
            }

            @keyframes animStar {
                from {
                    transform: translateY(0);
                }

                to {
                    transform: translateY(-135rem);
                }
            }

            @keyframes animStarRotate {
                from {
                    transform: rotate(360deg);
                }

                to {
                    transform: rotate(0);
                }
            }

            @keyframes gradient_301 {
                0% {
                    background-position: 0% 50%;
                }

                50% {
                    background-position: 100% 50%;
                }

                100% {
                    background-position: 0% 50%;
                }
            }

            @keyframes pulse_3011 {
                0% {
                    transform: scale(0.75);
                    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
                }

                70% {
                    transform: scale(1);
                    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
                }

                100% {
                    transform: scale(0.75);
                    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                }
            }
        </style>
              <div class="main">
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>

                    <div class="text">
                        <button class="btn" type="button">
                            <strong>Chân đế giày Okla</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow">
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </button>
                    </div>
                </div>
              `})}),i},onEvent({component:e}){}}),a.TraitManager.addType("loader",{createInput(){const e=[{text:"Neutral",value:"neutral"},{text:"Legacy",value:"legacy"},{text:"Spruit Sunrise",value:""},{text:"Creek Regional",value:""}];let i="";e.forEach(s=>{i+=`<option value="${s.value}">${s.text}</option>`});const t=document.createElement("div");return t.innerHTML=`
      <select id="loader">
        ${i}
      </select>
      `,t},onEvent({component:e}){}}),a.TraitManager.addType("add-loader",{noLabel:!0,createInput(){const e=document.createElement("div");return e.innerHTML=`
      <h4 style="text-align: center;">Html</h4>
      <textarea id="codeHtml" name="code" style="height: 70px;">
        <h1>Hello, world!</h1>
        <p>This is a sample HTML code.</p>
      </textarea>

      <h4 style="text-align: center;">Css</h4>
      <textarea id="codeCss" name="code" style="height: 70px;">
        <h1>Hello, world!</h1>
        <p>This is a sample HTML code.</p>
      </textarea>
      `,e},onEvent({component:e}){}}),a.TraitManager.addType("input-src-glb",{createInput({component:e}){const i=e.view.el.getAttribute("src")||"",t=document.createElement("div");return t.innerHTML=`
      <input id="file" type="text" placeholder="Nhập link file glb" value="${i}" />
    `,t},onEvent({component:e}){function i(s){return/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*(\:[0-9]+)?(\/.*)?$/.test(s)}const t=this.el.querySelector("#file");i(t.value)?fetch(t.value,{method:"HEAD"}).then(s=>{s.ok==!0?(e.addAttributes({src:t.value}),V("File đã được cập nhập")):k("File không tồn tại hoặc đã bị xóa !","Vui lòng nhập lại !")}).catch(()=>{k("Có lỗi xảy ra","Vui lòng thử lại !")}):k("Link không hợp lệ","Vui lòng nhập lại !")}}),a.TraitManager.addType("input-file-glb",{noLabel:!0,createInput(){const e=document.createElement("div");return e.innerHTML=`
      <input id="file-glb" type="file" class="input-file" accept=".glb, .gltf"/>
    `,e},onEvent({component:e}){Z("3d","Đang giảm kích thước..");const i=this.el.querySelector("#file-glb");if(i.files[0]){let t=new FormData;t.append("file3d",i.files[0]),F.file3D(t).then(s=>{V("3d","Đã cập nhập file","Vui lòng lưu trang !"),e.addAttributes({src:`${R}/uploads/3d/${s.file}`})}).catch(()=>k("Có lỗi xảy ra"))}}}),a.TraitManager.addType("range-light",{createInput({component:e}){const i=e.view.el.getAttribute("exposure")||1,t=document.createElement("div");return t.classList.add("flex","items-center","justify-center","flex-col"),t.innerHTML=`
      <input 
        id="exposure" 
        type="range" 
        min="0" max="5" step="0.2" value="${i}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,t},onEvent({component:e}){var t=this.el.querySelector("#exposure").value;e.addAttributes({exposure:t})}}),a.TraitManager.addType("environment",{createInput({component:e}){const i=e.view.el.getAttribute("environment-image")||"neutral",t=document.createElement("div");t.classList.add("flex","items-center","justify-center");const s=[{text:"Neutral",value:"neutral"},{text:"Legacy",value:"legacy"},{text:"Spruit Sunrise",value:"https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.jpg"},{text:"Creek Regional",value:"https://modelviewer.dev/shared-assets/environments/whipple_creek_regional_park_04_1k.hdr"},{text:"Custom",value:"custom",disabled:!0}];let u="";return s.forEach(d=>{u+=`<option value="${d.value}" ${d.value===i?"selected":""} ${d.disabled?"disabled":""}>${d.text}</option>`}),t.innerHTML=`
      <select id="environment">
        ${u}
      </select>
    `,t},onEvent({component:e}){const i=this.el.querySelector("#environment"),t=e.view.el.getAttribute("skybox-image");var s=i.value;t!=null&&e.addAttributes({"skybox-image":s}),(s=="neutral"||s=="legacy")&&e.removeAttributes("skybox-image"),e.addAttributes({"environment-image":s})}}),a.TraitManager.addType("add-environment",{noLabel:!0,createInput(){const e=document.createElement("div");return e.innerHTML=`
        <input id="file-environment" type="file" class="input-file" accept=".png, .jpg"/>
      `,e},onEvent({component:e}){const i=this.el.querySelector("#file-environment"),t=e.view.el.getAttribute("skybox-image");if(i.files[0]){let s=new FormData;s.append("ev",i.files[0]),settingGlbApi.environment(s).then(u=>{t&&(console.log("skyboxValue",t),e.addAttributes({"skybox-image":`${R}/uploads/3d/environment/${u.link}`})),e.addAttributes({"environment-image":`${R}/uploads/3d/environment/${u.link}`})})}}}),a.TraitManager.addType("input-src-environment",{createInput({component:e}){const i=e.view.el.getAttribute("environment-image")||"",t=document.createElement("div");return t.innerHTML=`
      <input id="file" type="text" placeholder="Nhập link môi trường" value="${i}" />
    `,t},onEvent({component:e}){function i(s){return/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*(\:[0-9]+)?(\/.*)?$/.test(s)}const t=this.el.querySelector("#file");i(t.value)?fetch(t.value,{method:"HEAD"}).then(s=>{s.ok==!0?(e.addAttributes({"environment-image":t.value}),V("File đã được cập nhập")):k("File không tồn tại hoặc đã bị xóa !","Vui lòng nhập lại !")}).catch(()=>{k("Có lỗi xảy ra","Vui lòng thử lại !")}):k("Link không hợp lệ","Vui lòng nhập lại !")}}),a.TraitManager.addType("skybox",{createInput({component:e}){const i=!!e.view.el.getAttribute("skybox-image"),t=document.createElement("div");t.classList.add("flex","items-center","justify-center");const s=[{text:"Tắt",value:!1},{text:"Bật",value:!0}];let u="";return s.forEach(d=>{u+=`<option value="${d.value}" ${d.value===i?"selected":""}>${d.text}</option>`}),t.innerHTML=`
      <select id="skybox">
        ${u}
      </select>
    `,t},onEvent({component:e}){const i=this.el.querySelector("#skybox"),t=e.view.el.getAttribute("environment-image");var s=i.value;if(t=="neutral"||t=="legacy"){e.removeAttributes("skybox-image"),k("Môi trường mặc định không hỗ trợ skybox !","Vui lòng chọn môi trường khác !");return}s==="true"?e.addAttributes({"skybox-image":t}):e.removeAttributes("skybox-image")}}),a.TraitManager.addType("floor-skybox",{createInput({component:e}){const i=e.view.el.getAttribute("skybox-height")||1,t=document.createElement("div");return t.classList.add("flex","items-center","justify-center","flex-col"),t.innerHTML=`
      <input 
        id="floor-skybox" 
        type="range" 
        min="0" max="500" step="0.5" value="${i}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,t},onEvent({component:e}){var t=this.el.querySelector("#floor-skybox").value;e.addAttributes({"skybox-height":`${parseFloat(t)}m`})}}),a.TraitManager.addType("shadow-intensity",{createInput({component:e}){const i=e.view.el.getAttribute("shadow-intensity")||1,t=document.createElement("div");return t.classList.add("flex","items-center","justify-center","flex-col"),t.innerHTML=`
      <input 
        id="shadow-intensity" 
        type="range" 
        min="0" max="3" step="0.2" value="${i}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,t},onEvent({component:e}){var t=this.el.querySelector("#shadow-intensity").value;e.addAttributes({"shadow-intensity":t})}}),a.TraitManager.addType("shadow-softness",{createInput({component:e}){const i=e.view.el.getAttribute("shadow-softness")||1,t=document.createElement("div");return t.classList.add("flex","items-center","justify-center","flex-col"),t.innerHTML=`
      <input 
        id="shadow-softness" 
        type="range" 
        min="0" max="1" step="0.1" value="${i}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,t},onEvent({component:e}){var t=this.el.querySelector("#shadow-softness").value;e.addAttributes({"shadow-softness":t})}}),a.TraitManager.addType("shadow-placement",{createInput({component:e}){const i=e.view.el.getAttribute("ar-placement")||"floor",t=document.createElement("div");t.classList.add("flex","items-center","justify-center","flex-col");const s=[{text:"Mặt đất",value:"floor"},{text:"Bức tường",value:"wall"}];let u="";return s.forEach(d=>{u+=`<option value="${d.value}" ${d.value===i?"selected":""} ${d.disabled?"disabled":""}>${d.text}</option>`}),t.innerHTML=`
      <select id="placement">
        ${u}
      </select>
    `,t},onEvent({component:e}){var t=this.el.querySelector("#placement").value;e.addAttributes({"ar-placement":t})}}),a.TraitManager.addType("delay-rotate",{createInput({component:e}){const i=e.view.el.getAttribute("auto-rotate-delay")||3e3,t=document.createElement("div");return t.classList.add("flex","items-center","justify-center","flex-col"),t.innerHTML=`
      <input 
        id="rotateDelay" 
        type="range" 
        min="0" max="5000" step="500" value="${i}"
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,t},onEvent({component:e}){const i=!!e.view.el.getAttribute("auto-rotate");var s=this.el.querySelector("#rotateDelay").value;i||e.addAttributes({"auto-rotate":!0}),e.addAttributes({"auto-rotate-delay":s})}}),a.TraitManager.addType("rotation-per-second",{createInput({component:e}){const i=e.view.el.getAttribute("rotation-per-second")||30,t=document.createElement("div");return t.classList.add("flex","items-center","justify-center","flex-col"),t.innerHTML=`
      <input 
        id="rotation-per-second" 
        type="range" 
        min="0" max="180" step="10" value="${i}"
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,t},onEvent({component:e}){const i=!!e.view.el.getAttribute("auto-rotate");var s=this.el.querySelector("#rotation-per-second").value;i||e.addAttributes({"auto-rotate":!0}),e.addAttributes({"rotation-per-second":`${s}deg`})}}),a.Blocks.add("model-3D",{label:"3D",media:`<svg width="100%" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19.3297 5.68003L13.0597 2.30003C12.3997 1.94003 11.5997 1.94003 10.9397 2.30003L4.66969 5.68003C4.20969 5.93003 3.92969 6.41003 3.92969 6.96003C3.92969 7.50003 4.20969 7.99003 4.66969 8.24003L10.9397 11.62C11.2697 11.8 11.6397 11.89 11.9997 11.89C12.3597 11.89 12.7297 11.8 13.0597 11.62L19.3297 8.24003C19.7897 7.99003 20.0697 7.51003 20.0697 6.96003C20.0697 6.41003 19.7897 5.93003 19.3297 5.68003Z" fill="currentColor"></path> 
        <path d="M9.91 12.79L4.07 9.87C3.62 9.65 3.1 9.67 2.68 9.93C2.25 10.2 2 10.65 2 11.15V16.66C2 17.61 2.53 18.47 3.38 18.9L9.21 21.82C9.41 21.92 9.63 21.97 9.85 21.97C10.11 21.97 10.37 21.9 10.6 21.76C11.03 21.5 11.28 21.04 11.28 20.54V15.03C11.29 14.07 10.76 13.21 9.91 12.79Z" fill="currentColor"></path> 
        <path d="M21.3207 9.9299C20.8907 9.6699 20.3707 9.6399 19.9307 9.8699L14.1007 12.7899C13.2507 13.2199 12.7207 14.0699 12.7207 15.0299V20.5399C12.7207 21.0399 12.9707 21.4999 13.4007 21.7599C13.6307 21.8999 13.8907 21.9699 14.1507 21.9699C14.3707 21.9699 14.5907 21.9199 14.7907 21.8199L20.6207 18.8999C21.4707 18.4699 22.0007 17.6199 22.0007 16.6599V11.1499C22.0007 10.6499 21.7507 10.1999 21.3207 9.9299Z" fill="currentColor"></path>
       </svg>`,content:{type:"Model 3D"},category:"Basic"})},N=a=>{a.Blocks.add("block-link",{label:"Link Block",media:`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM9.198 7.25H9.30203C10.2005 7.24997 10.9497 7.24995 11.5445 7.32991C12.1723 7.41432 12.7391 7.59999 13.1945 8.05546C13.65 8.51093 13.8357 9.07773 13.9201 9.70552C14.0001 10.3003 14 11.0495 14 11.948L14 12C14 12.4142 13.6642 12.75 13.25 12.75C12.8358 12.75 12.5 12.4142 12.5 12C12.5 11.036 12.4984 10.3884 12.4335 9.9054C12.3714 9.44393 12.2642 9.24644 12.1339 9.11612C12.0036 8.9858 11.8061 8.87858 11.3446 8.81654C10.8616 8.7516 10.214 8.75 9.25 8.75C8.28599 8.75 7.63843 8.7516 7.15539 8.81654C6.69393 8.87858 6.49644 8.9858 6.36612 9.11612C6.2358 9.24644 6.12858 9.44393 6.06654 9.9054C6.0016 10.3884 6 11.036 6 12C6 12.964 6.0016 13.6116 6.06654 14.0946C6.12858 14.5561 6.2358 14.7536 6.36612 14.8839C6.49644 15.0142 6.69393 15.1214 7.15539 15.1835C7.63843 15.2484 8.28599 15.25 9.25 15.25C9.66422 15.25 10 15.5858 10 16C10 16.4142 9.66422 16.75 9.25 16.75L9.19798 16.75C8.29951 16.75 7.5503 16.7501 6.95552 16.6701C6.32773 16.5857 5.76093 16.4 5.30546 15.9445C4.84999 15.4891 4.66432 14.9223 4.57991 14.2945C4.49995 13.6997 4.49997 12.9505 4.5 12.052V11.948C4.49997 11.0495 4.49995 10.3003 4.57991 9.70552C4.66432 9.07773 4.84999 8.51093 5.30546 8.05546C5.76093 7.59999 6.32773 7.41432 6.95552 7.32991C7.55029 7.24995 8.29954 7.24997 9.198 7.25ZM16.8446 8.81654C16.3616 8.7516 15.714 8.75 14.75 8.75C14.3358 8.75 14 8.41422 14 8C14 7.58579 14.3358 7.25 14.75 7.25L14.802 7.25C15.7005 7.24997 16.4497 7.24995 17.0445 7.32991C17.6723 7.41432 18.2391 7.59999 18.6945 8.05546C19.15 8.51093 19.3357 9.07773 19.4201 9.70552C19.5001 10.3003 19.5 11.0495 19.5 11.9479V12.052C19.5 12.9505 19.5001 13.6997 19.4201 14.2945C19.3357 14.9223 19.15 15.4891 18.6945 15.9445C18.2391 16.4 17.6723 16.5857 17.0445 16.6701C16.4497 16.7501 15.7005 16.75 14.802 16.75H14.698C13.7995 16.75 13.0503 16.7501 12.4555 16.6701C11.8277 16.5857 11.2609 16.4 10.8055 15.9445C10.35 15.4891 10.1643 14.9223 10.0799 14.2945C9.99995 13.6997 9.99997 12.9505 10 12.052L10 12C10 11.5858 10.3358 11.25 10.75 11.25C11.1642 11.25 11.5 11.5858 11.5 12C11.5 12.964 11.5016 13.6116 11.5665 14.0946C11.6286 14.5561 11.7358 14.7536 11.8661 14.8839C11.9964 15.0142 12.1939 15.1214 12.6554 15.1835C13.1384 15.2484 13.786 15.25 14.75 15.25C15.714 15.25 16.3616 15.2484 16.8446 15.1835C17.3061 15.1214 17.5036 15.0142 17.6339 14.8839C17.7642 14.7536 17.8714 14.5561 17.9335 14.0946C17.9984 13.6116 18 12.964 18 12C18 11.036 17.9984 10.3884 17.9335 9.9054C17.8714 9.44393 17.7642 9.24644 17.6339 9.11612C17.5036 8.9858 17.3061 8.87858 16.8446 8.81654Z"></path> </g></svg>
    `,content:{type:"block-link"},category:"Basic"}),a.Components.addType("block-link",{model:{defaults:{name:"Link Block",tagName:"a",resizable:!0,traits:[{type:"title-link",name:"title-link",label:"title"},{type:"href-next",name:"href",label:"New href"},{type:"target-link",name:"target-link",label:"Mở cửa sổ"}],style:{width:"100%",height:"345px",display:"block",cursor:"pointer"}}}}),a.TraitManager.addType("target-link",{createInput({component:l}){const n=l.view.el.getAttribute("target")||"",r=document.createElement("div");return r.innerHTML=`
        <select id="target-link">
          <option value="" ${n===""?"selected":""}>Cửa sổ trang hiện tại</option>
          <option value="_blank" ${n==="_blank"?"selected":""}>Cửa sổ trang mới</option>
        </select>
      `,r},onEvent({component:l}){const n=this.el.querySelector("#target-link");n.value==="_blank"?(l.addAttributes({target:n.value}),console.log(l.view.el)):l.removeAttributes("target")}}),a.TraitManager.addType("title-link",{createInput({component:l}){const n=l.view.el.getAttribute("title")||"",r=document.createElement("div");return r.innerHTML=`
        <input id="title" type="text" placeholder="Nhập tiêu đề" value="${n}" />
      `,r},onEvent({component:l}){const n=this.el.querySelector("#title");l.addAttributes({title:n.value})}}),a.TraitManager.addType("href-next-link",{createInput({component:l}){const n=l.view.el.getAttribute("href")||"",r=document.createElement("div");return r.innerHTML=`
        <input id="link" type="text" value="${n}" />
      `,r},onEvent({component:l}){const n=this.el.querySelector("#link");l.addAttributes({href:n.value})}})},q=a=>{a.Components.addType("Slider",{model:{defaults:{name:"Slider",resizable:!0,droppable:!1,copyable:!1,traits:[{name:"navigation",type:"select",options:[{id:"no",label:"Không có"},{id:"yes",label:"Có"}],default:"yes",placeholder:"Chọn ẩn/hiển nút điều hướng",changeProp:!0}],navigation:"yes","script-props":["navigation"],script:function(l){let n=null;function r(o){n&&n.destroy(!0,!0);const p={pagination:{el:".swiper-pagination",dynamicBullets:!0}};o==="yes"&&(p.navigation={nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}),n=new Swiper(".mySwiper",p)}r(l.navigation)},components:`
        <style>
          .swiper {
            width: 100%;
            height: 100%;
          }

          .swiper-slide {
            text-align: center;
             overflow: hidden;
          }
        </style>

        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
          </div>

          <div class="button-swiper swiper-button-next"></div>
          <div class="button-swiper swiper-button-prev"></div>

          <div class="swiper-pagination"></div>
        </div>
        `,style:{height:"80vh"}}}}),a.Blocks.add("Slider",{label:"Slider",media:`
    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 218.207 218.207" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M214.31,27.276H3.897C1.743,27.276,0,29.019,0,31.172v27.276v77.931v50.655c0,2.154,1.743,3.897,3.897,3.897H214.31 c2.154,0,3.897-1.743,3.897-3.897v-50.655V58.448V31.172C218.207,29.019,216.464,27.276,214.31,27.276z M7.793,62.345h35.069 v70.138H7.793V62.345z M210.414,132.483h-11.69V62.345h11.69V132.483z M210.414,54.552h-15.586c-2.154,0-3.897,1.743-3.897,3.897 v77.931c0,2.154,1.743,3.897,3.897,3.897h15.586v42.862H7.793v-0.001v-42.862h38.966c2.154,0,3.897-1.743,3.897-3.897V58.448 c0-2.154-1.743-3.897-3.897-3.897H7.793V35.069h202.621V54.552z"></path> <circle cx="113" cy="163.655" r="7.793"></circle> <path d="M66.241,140.277h109.103c2.154,0,3.897-1.743,3.897-3.897V58.448c0-2.153-1.743-3.896-3.896-3.896H66.241 c-2.154,0-3.897,1.743-3.897,3.897v77.931C62.344,138.534,64.087,140.277,66.241,140.277z M70.138,62.345h101.31v70.138H70.138 V62.345z"></path> <rect x="66.241" y="159.759" width="11.69" height="7.793"></rect> <rect x="85.724" y="159.759" width="11.69" height="7.793"></rect> <rect x="128.586" y="159.759" width="11.69" height="7.793"></rect> <rect x="148.069" y="159.759" width="11.69" height="7.793"></rect> </g> </g> </g> </g></svg>
    `,content:{type:"Slider"},category:"Basic"})},P=(a,l)=>{a.Components.addType("Masonry",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,script:function(){var n=document.querySelector(".grid");new Packery(n,{itemSelector:".grid-item"})},content:`
         <iframe
            name="masonry"
            style="width: 100%; height: 100dvh;"
            src="${G}/admin/page-custom/masonry/${l}" 
            title="ARIS">
          </iframe>
        `}}}),a.Blocks.add("Masonry",{label:"Masonry",media:`
    <svg width="201px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path fill-rule="nonzero" d="M22 20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16zm-11-5H4v4h7v-4zm9-4h-7v8h7v-8zm-9-6H4v8h7V5zm9 0h-7v4h7V5z"></path> </g> </g></svg>
    `,content:{type:"Masonry"},category:"Basic"})},O=a=>{a.Components.addType("HeaderLayout",{model:{defaults:{droppable:!1,copyable:!1,resizable:!0,script:function(){((r,o)=>{const p=document.getElementById(r),m=document.getElementById(o);p.addEventListener("click",()=>{m.classList.toggle("show-menu"),p.classList.toggle("show-icon")})})("nav-toggle-2","nav-menu-2")},components:`
        <style>
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");
          root {
            --header-height: 3.5rem;
            --black-color: hsl(220, 24%, 12%);
            --black-color-light: hsl(220, 24%, 15%);
            --black-color-lighten: hsl(220, 20%, 18%);
            --white-color: #fff;
            --body-color: hsl(220, 100%, 97%);
            --body-font: "Montserrat", sans-serif;
            --normal-font-size: .938rem;
            --font-regular: 400;
            --font-semi-bold: 600;
            --z-tooltip: 10;
            --z-fixed: 100;
        }

        @media screen and (min-width: 1024px) {
            :root {
                --normal-font-size: 1rem;
            }
        }

        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }

        body {
            font-family: var(--body-font);
            font-size: var(--normal-font-size);
            background-color: var(--body-color);
        }

        ul {
            list-style: none;
            /* Color highlighting when pressed on mobile devices */
            /*-webkit-tap-highlight-color: transparent;*/
        }

        a {
            text-decoration: none;
        }

        .container {
            max-width: 1120px;
            margin-inline: 1.5rem;
        }

        .headerr {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: var(--black-color);
            box-shadow: 0 2px 16px hsla(220, 32%, 8%, .3);
            z-index: var(--z-fixed);
        }

        .nav__logo,
        .nav__burger,
        .nav__close {
            color: var(--white-color);
        }

        .nav__data {
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav__logo {
            display: inline-flex;
            align-items: center;
            column-gap: .25rem;
            font-weight: var(--font-semi-bold);
            /* Color highlighting when pressed on mobile devices */
            /*-webkit-tap-highlight-color: transparent;*/
        }

        .nav__logo i {
            font-weight: initial;
            font-size: 1.25rem;
        }

        .nav__toggle {
            position: relative;
            width: 32px;
            height: 32px;
        }

        .nav__burger,
        .nav__close {
            position: absolute;
            width: max-content;
            height: max-content;
            inset: 0;
            margin: auto;
            font-size: 1.25rem;
            cursor: pointer;
            transition: opacity .1s, transform .4s;
        }

        .nav__close {
            opacity: 0;
        }

        @media screen and (max-width: 1118px) {}

        .nav__link {
            color: var(--white-color);
            background-color: var(--black-color);
            font-weight: var(--font-semi-bold);
            padding: 1.25rem 1.5rem;
            display: flex;
            height: 100%;
            column-gap: .25rem;
            justify-content: space-between;
            align-items: center;
            transition: background-color .3s;
        }

        .nav__link:hover {
            background-color: var(--black-color-light);
        }

        /* Show menu */
        .show-menu {
            opacity: 1;
            top: 3.5rem;
            pointer-events: initial;
        }

        /* Show icon */
        .show-icon .nav__burger {
            opacity: 0;
            transform: rotate(90deg);
        }

        .show-icon .nav__close {
            opacity: 1;
            transform: rotate(90deg);
        }

        /*=============== DROPDOWN ===============*/
        .dropdown__item {
            cursor: pointer;
        }

       .dropdown__arrow, .submenu-icon  {
            font-size: 1.25rem;
            font-weight: initial;
            transition: transform .4s;
        }

        .dropdown__link{
          background-color: #0a0a0a78;
          border-bottom: 1px solid #fff;
        }

        .dropdown__link,
        .dropdown__sublink {
            padding: 1.25rem;
            color: var(--white-color);
            background-color: var(--black-color-light);
            display: flex;
            align-items: center;
            column-gap: .5rem;
            font-weight: var(--font-semi-bold);
            transition: background-color .3s;
        }

        .dropdown__link i,
        .dropdown__sublink i {
            font-size: 1.25rem;
            font-weight: initial;
        }

        .dropdown__link:hover,
        .dropdown__sublink:hover {
            background-color: var(--black-color);
        }

        .dropdown__menu,
        .dropdown__submenu {
            max-height: 0;
            overflow: hidden;
            transition: max-height .4s ease-out;
        }

        /* Show dropdown menu & submenu */
        .dropdown__item:hover .dropdown__menu,
        .dropdown__subitem:hover>.dropdown__submenu {
            max-height: 1000px;
            transition: max-height .4s ease-in;
        }

        /* Rotate dropdown icon */
        .dropdown__item:hover .dropdown__arrow {
            transform: rotate(180deg);
        }

        /*=============== DROPDOWN SUBMENU ===============*/
        .dropdown__add {
            margin-left: auto;
        }

        .dropdown__sublink {
            background-color: var(--black-color-lighten);
        }

        @media screen and (min-width: 1118px) {
            .nav {
                height: calc(var(--header-height) + 2rem);
                width: 100%;
                display: flex;
                justify-content: center;
            }

            .nav__list {
                height: 100%;
                display: flex;
            }

            .nav__link:hover {
                background-color: transparent;
            }

            .dropdown__item,
            .dropdown__subitem {
                position: relative;
            }

            .dropdown__menu,
            .dropdown__submenu {
                max-height: initial;
                overflow: initial;
                position: absolute;
                left: 0;
                top: 6rem;
                opacity: 0;
                pointer-events: none;
                transition: opacity .3s, top .3s;
            }


            .dropdown__subitem .dropdown__link {
                padding-inline: 1rem;
            }

            .dropdown__submenu {
                position: absolute;
                left: 100%;
                top: .5rem;
            }

            /* Show dropdown menu */
            .dropdown__item:hover .dropdown__menu {
                opacity: 1;
                top: 5.5rem;
                pointer-events: initial;
                transition: top .3s;
            }

            /* Show dropdown submenu */
            .dropdown__subitem:hover .dropdown__submenu {
              opacity: 1;
              top: 0;
              pointer-events: initial;
              transition: top .3s;
            }

            .dropdown__link:hover .submenu-icon {
              transform: rotate(90deg);
            }
        }
    </style>

    <header class="headerr">
        <nav class="nav">
            <div class="nav__data">
              <a href="#" class="nav__logo">
                <i class="ri-planet-line"></i> Company
              </a>

              <div class="nav__toggle" id="nav-toggle">
                <i class="ri-menu-line nav__burger"></i>
                <i class="ri-close-line nav__close"></i>
              </div>
            </div>

            <div class="nav__menu" id="nav-menu">
              <ul class="nav__list">
                <li class="dropdown__item menu-dropdown">
                  <div class="nav__link">
                    <h4 class="menu-text">ABOUT US</h4>
                    <ul class="dropdown__menu dropdown-aris">
                    </ul>
                  </div>
                </li>

                <li class="dropdown__item menu-dropdown">
                    <div class="nav__link">
                        <h4 class="menu-text">COURSES</h4>
                        <div class="dropdown__arrow">
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <ul class="dropdown__menu dropdown-aris">
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                  <i class="ri-bar-chart-line"></i>
                                  <h4 class="menu-text">LOWPOLY HANDPAINTED</h4>
                                  <ul class="dropdown__submenu dropdown-aris">
                                  </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">MODELING HARD SURFACE</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">MODELING CHARACTER</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">CREATURE DESIGN</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="dropdown__item menu-dropdown">
                    <div class="nav__link">
                        <h4 class="menu-text">STUDENT WORKS</h4>
                        <div class="dropdown__arrow">
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <ul class="dropdown__menu dropdown-aris">
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">ALL PROJECTS</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">ENVIRONMENT</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">HARD SURFACE</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">CHARACTER</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">PORTRAIT</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">CREATURE DESIGN ZBRUSH</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="dropdown__item menu-dropdown">
                    <div class="nav__link">
                        <h4 class="menu-text">TUTORIALS</h4>
                        <div class="dropdown__arrow">
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <ul class="dropdown__menu dropdown-aris">
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">All Tutorials</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">Making Of</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="dropdown__item menu-dropdown">
                    <div class="nav__link">
                        <h4 class="menu-text">CONTACT US</h4>
                        <ul class="dropdown__menu dropdown-aris">
                        </ul>
                    </div>
                </li>
            </ul>
            </div>
        </nav>
    </header>
        `}}}),a.Blocks.add("HeaderLayout",{label:"Header",title:"Header",media:`
        <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"> <path d="m14.4978951 12.4978973-.0105089-9.99999996c-.0011648-1.10374784-.8962548-1.99789734-2-1.99789734h-9.99999995c-1.0543629 0-1.91816623.81587779-1.99451537 1.85073766l-.00548463.151365.0105133 10.00000004c.0011604 1.1037478.89625045 1.9978973 1.99999889 1.9978973h9.99999776c1.0543618 0 1.9181652-.8158778 1.9945143-1.8507377z"></path> <path d="m4.5 4.5v9.817"></path> <path d="m7-2v14" transform="matrix(0 1 -1 0 12.5 -2.5)"></path> </g> </g></svg>
      `,content:{type:"HeaderLayout"},category:"Layout"}),a.DomComponents.addType("link",{model:{defaults:{traits:[{type:"title-link",name:"title-link",label:"title"},{type:"href-next",name:"href",label:"New href"},{type:"href-next-link",name:"href-link",label:"Link file"},{type:"target-link",name:"target-link",label:"Mở cửa sổ"}]}}}),a.TraitManager.addType("target-link",{createInput({component:n}){const r=n.view.el.getAttribute("target")||"",o=document.createElement("div");return o.innerHTML=`
        <select id="target-link">
          <option value="" ${r===""?"selected":""}>Cửa sổ trang hiện tại</option>
          <option value="_blank" ${r==="_blank"?"selected":""}>Cửa sổ trang mới</option>
        </select>
      `,o},onEvent({component:n}){const r=this.el.querySelector("#target-link");r.value==="_blank"?(n.addAttributes({target:r.value}),console.log(n.view.el)):n.removeAttributes("target")}}),a.TraitManager.addType("title-link",{createInput({component:n}){const r=n.view.el.getAttribute("title")||"",o=document.createElement("div");return o.innerHTML=`
        <input id="title" type="text" placeholder="Nhập tiêu đề" value="${r}" />
      `,o},onEvent({component:n}){const r=this.el.querySelector("#title");n.addAttributes({title:r.value})}}),a.TraitManager.addType("href-next-link",{createInput({component:n}){const r=n.view.el.getAttribute("href")||"",o=document.createElement("div");return o.innerHTML=`
        <input id="link" type="text" value="${r}" />
      `,o},onEvent({component:n}){const r=this.el.querySelector("#link");n.addAttributes({href:r.value})}}),a.Commands.add("addMenu",{run(n){const r=n.getSelected();if(r){const o=r.find(".nav__list")[0];if(o){const p=n.DomComponents.addComponent({tagName:"li",classes:["dropdown__item","menu-dropdown"],components:`
            <div class="nav__link">
              <h4 class="menu-text">New</h4> 
              <ul class="dropdown__menu"></ul>
            </div>
            `});o.append(p)}}}}),a.Commands.add("addNavLink",{run(n){var h,b;const r=n.getSelected(),o=r.find(".dropdown__menu")[0],p=(b=(h=r==null?void 0:r.view)==null?void 0:h.el)==null?void 0:b.querySelector(".dropdown__arrow"),m=()=>{const v=n.DomComponents.addComponent({tagName:"li",classes:["dropdown__subitem"],components:`
          <div class="dropdown__link">
            <h4 class="menu-text">Items</h4> 
              <ul class="dropdown__submenu dropdown-aris">
            </ul>
          </div>
          `});o.append(v)};if(p==null){const v=n.DomComponents.addComponent({tagName:"div",classes:["dropdown__arrow"],components:'<i class="ri-arrow-down-s-line"></i>'});m(),r.append(v)}else m()}}),a.Commands.add("addDropDownLink",{run(n){const r=n.getSelected(),o=r.find(".dropdown__submenu")[0],p=o.view.el.querySelectorAll("li").length,m=()=>{const h=n.DomComponents.addComponent({tagName:"li",components:`
            <a href="#" class="dropdown__sublink">
              <i class="ri-file-list-line"></i> 
              <h4 class="menu-text">Items</h4>
            </a>
          `});o.append(h)};if(p==0){console.log("countLi",p);const h=n.DomComponents.addComponent({tagName:"div",classes:["submenu-icon"],components:`
            <i class="ri-add-line dropdown__add"></i>
          `});r.append(h),m()}else m()}}),a.Commands.add("delMenu",{run(n){var m;const r=n.getSelected().view.el,o=(m=r==null?void 0:r.closest("li.dropdown__item"))==null?void 0:m.querySelector("ul.dropdown__menu"),p=n.getSelected();if(p){const h=p.parent();console.log(h.parent().parent()),h&&(h.remove(p),o&&(o.style.opacity="",o.style.top=""))}}}),a.Commands.add("del-sub-menu",{run(n){var h,b;const r=n.getSelected().view.el,o=n.getSelected(),p=(h=r==null?void 0:r.closest("li.dropdown__item"))==null?void 0:h.querySelector("ul.dropdown__menu"),m=(b=r==null?void 0:r.closest("li.dropdown__subitem"))==null?void 0:b.querySelector("ul.dropdown__submenu");if(o){const v=o.parent();v&&(v.remove(o),m.style.opacity="",m.style.top="",p.style.opacity="",p.style.top="")}}}),a.Commands.add("del-menu-cha",{run(n){const r=n.getSelected();if(r){const o=r.parent();console.log(o),o&&o.remove(r)}}});const l=(n,r,o,p)=>{var f,g;const m=n.view.el,h=n.get("toolbar"),b=m.classList[0],v=h.some(c=>c.id==="new-menu"),e=h.some(c=>c.id==="new-con"),i=h.some(c=>c.id==="del-menu"),t=h.some(c=>c.id==="del-menu-cha"),s=(f=m==null?void 0:m.closest("li.dropdown__item"))==null?void 0:f.querySelector("ul.dropdown__menu"),u=(g=m==null?void 0:m.closest("li.dropdown__subitem"))==null?void 0:g.querySelector("ul.dropdown__submenu"),d=h.filter(c=>c.command!=="tlb-delete"&&c.command!=="tlb-clone"&&c.command!=="tlb-move");switch(b){case"dropdown__sublink":if(!v){const c={label:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',id:"del-sub-menu",command:"del-sub-menu"};d.push(c),n.set("toolbar",d)}break;case"nav__link":if(!t){const c={label:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',id:"del-menu-cha",command:"del-menu-cha"};d.push(c)}if(!v){const c={label:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M18 15l-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15h2zm-7 3v2H3v-2h8zm10-7v2H3v-2h18zm0-7v2H3V4h18z"></path> </g> </g></svg>',id:"new-menu",command:"addNavLink"};d.push(c)}n.set("toolbar",d);break;case"dropdown__link":if(!i){const c={label:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',id:"del-menu",command:"delMenu"};d.push(c)}if(!e){const c={label:'<svg fill="#000000" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 3C.9 3 0 3.9 0 5v2c0 1.1.9 2 2 2h21c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 1h21c.563 0 1 .437 1 1v2c0 .563-.437 1-1 1H2c-.563 0-1-.437-1-1V5c0-.563.437-1 1-1zm0 17.5v2c0 .262.238.5.5.5h6.813l-1.157 1.125c-.48.497.28 1.157.688.72l2-2c.193-.187.193-.534 0-.72l-2-2c-.397-.397-1.14.268-.688.72L9.312 23H3v-1.5c0-.665-1-.644-1 0zm14-.5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 1h12c.563 0 1 .437 1 1v2c0 .563-.437 1-1 1H16c-.563 0-1-.437-1-1v-2c0-.563.437-1 1-1zM2 12c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h21c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 1h21c.563 0 1 .437 1 1v2c0 .563-.437 1-1 1H2c-.563 0-1-.437-1-1v-2c0-.563.437-1 1-1z"></path></g></svg>',id:"new-con",command:"addDropDownLink"};d.push(c)}n.set("toolbar",d);break;case"nav":if(!e){const c={label:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g data-name="add" id="add-2"> <g> <line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"></line> <line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"></line> </g> </g> </g> </g></svg>',id:"new-menu",command:"addMenu"};d.push(c)}n.set("toolbar",d);break}s&&(s.style.opacity=r,s.style.top=o),u&&(u.style.opacity=r,u.style.top=p)};a.on("component:selected",n=>{l(n,"1","60px","0")}),a.on("component:deselected",n=>{l(n,"","","0")})},W=a=>{a.Components.addType("FooterLayout",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,script:function(){},components:`
                <div class="mx-auto w-full max-w-screen-xl" style="height: 100%">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
        `,style:{width:"100%",height:"100%",overflow:"hidden"}}}}),a.Blocks.add("FooterLayout",{label:"Footer",media:`
        <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"> <path d="m14.4978951 12.4978973-.0105089-9.99999996c-.0011648-1.10374784-.8962548-1.99789734-2-1.99789734h-9.99999995c-1.0543629 0-1.91816623.81587779-1.99451537 1.85073766l-.00548463.151365.0105133 10.00000004c.0011604 1.1037478.89625045 1.9978973 1.99999889 1.9978973h9.99999776c1.0543618 0 1.9181652-.8158778 1.9945143-1.8507377z"></path> <path d="m4.5 4.5v9.817"></path> <path d="m7-2v14" transform="matrix(0 1 -1 0 12.5 -2.5)"></path> </g> </g></svg>
        `,content:{type:"FooterLayout"},category:"Layout"})},U=a=>{a.Components.addType("User",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,components:`
                    <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                `,style:{width:"40px"}}}}),a.Blocks.add("User",{label:"User",media:`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        `,content:{type:"User"},category:"Layout"})},J=a=>{infoApi.allInfo().then(l=>{let n="";l.social.forEach(r=>{n+=`
      <a class="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 gap-2">
      ${r.Icon}
      </a>
      `}),a.Components.addType("Social",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,components:n,style:{display:"flex"}}}}),a.Blocks.add("Social",{label:"Social",media:`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H1V18C1 16.1362 2.27477 14.5701 4 14.126M6 10.8293C4.83481 10.4175 4 9.30621 4 7.99999C4 6.69378 4.83481 5.58254 6 5.1707M21 19H23V18C23 16.1362 21.7252 14.5701 20 14.126M18 5.1707C19.1652 5.58254 20 6.69378 20 7.99999C20 9.30621 19.1652 10.4175 18 10.8293M10 14H14C16.2091 14 18 15.7909 18 18V19H6V18C6 15.7909 7.79086 14 10 14ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      `,content:{type:"Social"},category:"Layout"})}).catch(l=>{console.error("Error fetching data from API:",l)})},Y=a=>{a.Components.addType("Container",{model:{defaults:{resizable:!0,components:`
          <div class="md:container md:mx-auto">
          </div>  
        `,style:{width:"100%",height:"75px","max-width":"100%","max-height":"100%",overflow:"hidden"}}}}),a.Blocks.add("Container",{label:"Container",media:`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H1V18C1 16.1362 2.27477 14.5701 4 14.126M6 10.8293C4.83481 10.4175 4 9.30621 4 7.99999C4 6.69378 4.83481 5.58254 6 5.1707M21 19H23V18C23 16.1362 21.7252 14.5701 20 14.126M18 5.1707C19.1652 5.58254 20 6.69378 20 7.99999C20 9.30621 19.1652 10.4175 18 10.8293M10 14H14C16.2091 14 18 15.7909 18 18V19H6V18C6 15.7909 7.79086 14 10 14ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        `,content:{type:"Container"},category:"Layout"})},K=a=>{a.Components.addType("ImgSlider",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,script:function(){setTimeout(()=>{var l=new Packery(".grid",{itemSelector:".grid-item",columnWidth:100});l.getItemElements().forEach(function(r){var o=new Draggabilly(r);l.bindDraggabillyEvents(o)});function n(){l.getItemElements().forEach(function(r,o){r.textContent=o+1})}l.on("layoutComplete",n),l.on("dragItemPositioned",n)},0)},components:`
        <style>
        </style>
        `}}}),a.Blocks.add("ImgSlider",{label:"ImgSlider",media:`
    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 218.207 218.207" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M214.31,27.276H3.897C1.743,27.276,0,29.019,0,31.172v27.276v77.931v50.655c0,2.154,1.743,3.897,3.897,3.897H214.31 c2.154,0,3.897-1.743,3.897-3.897v-50.655V58.448V31.172C218.207,29.019,216.464,27.276,214.31,27.276z M7.793,62.345h35.069 v70.138H7.793V62.345z M210.414,132.483h-11.69V62.345h11.69V132.483z M210.414,54.552h-15.586c-2.154,0-3.897,1.743-3.897,3.897 v77.931c0,2.154,1.743,3.897,3.897,3.897h15.586v42.862H7.793v-0.001v-42.862h38.966c2.154,0,3.897-1.743,3.897-3.897V58.448 c0-2.154-1.743-3.897-3.897-3.897H7.793V35.069h202.621V54.552z"></path> <circle cx="113" cy="163.655" r="7.793"></circle> <path d="M66.241,140.277h109.103c2.154,0,3.897-1.743,3.897-3.897V58.448c0-2.153-1.743-3.896-3.896-3.896H66.241 c-2.154,0-3.897,1.743-3.897,3.897v77.931C62.344,138.534,64.087,140.277,66.241,140.277z M70.138,62.345h101.31v70.138H70.138 V62.345z"></path> <rect x="66.241" y="159.759" width="11.69" height="7.793"></rect> <rect x="85.724" y="159.759" width="11.69" height="7.793"></rect> <rect x="128.586" y="159.759" width="11.69" height="7.793"></rect> <rect x="148.069" y="159.759" width="11.69" height="7.793"></rect> </g> </g> </g> </g></svg>
    `,content:{type:"ImgSlider"},category:"Basic"})},Q=a=>{a.Components.addType("ThreeJs1",{model:{defaults:{resizable:!0,copyable:!1,traits:[{type:"range-shadow",name:"Shadow",label:"Test"}],script:function(){},content:`
       <style>
          * {
              box-sizing: border-box;
          }

          body {
              font-family: sans-serif;
          }

          /* ---- grid ---- */

          .grid {
              background: #DDD;
              max-width: 1200px;
          }

          /* clear fix */
          .grid:after {
              content: '';
              display: block;
              clear: both;
          }

          .grid-item {
              float: left;
              width: 100px;
              height: 100px;
              background: #C09;
              border: 2px solid hsla(0, 0%, 0%, 0.5);
          }

          .grid-item--width2 {
              width: 200px;
          }

          .grid-item--height2 {
              height: 200px;
          }
      </style>

      <div class="grid">
        <div class="grid-item grid-item--width2"></div>
        <div class="grid-item grid-item--height2"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item grid-item--width2 grid-item--height2"></div>
        <div class="grid-item grid-item--width2"></div>
        <div class="grid-item grid-item--width2"></div>
        <div class="grid-item grid-item--height2"></div>
        <div class="grid-item"></div>
        <div class="grid-item grid-item--width2"></div>
        <div class="grid-item grid-item--height2"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
      </div>
        `}}}),a.Blocks.add("ThreeJs1",{label:"ThreeJs1",media:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g font-weight="400" font-family="sans-serif"><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M16.219 15.762a1.129 1.129 0 00-1.076 1.399l24.394 98.742a1.129 1.129 0 001.879.544l73.386-70.59a1.129 1.129 0 00-.47-1.899L16.55 15.806a1.129 1.129 0 00-.331-.044zm1.584 2.754l94.024 27.07-70.566 67.877-23.458-94.947z" overflow="visible"/><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M65.137 29.84a1.129 1.129 0 00-.807.315L27.654 65.46a1.129 1.129 0 00.471 1.898L76.984 81.44a1.129 1.129 0 001.409-1.355L66.21 30.698a1.129 1.129 0 00-1.073-.858zm-.651 3.3L75.734 78.73l-45.104-13L64.486 33.14z" overflow="visible"/><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M46.914 47.313a1.129 1.129 0 00-1.076 1.399l6.054 24.531a1.129 1.129 0 001.88.543l18.222-17.563a1.129 1.129 0 00-.472-1.898l-24.277-6.968a1.129 1.129 0 00-.331-.044zm1.583 2.751l20.522 5.89L53.614 70.8l-5.117-20.736z" overflow="visible"/><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M40.902 22.809a1.129 1.129 0 00-.807.316L21.873 40.687a1.129 1.129 0 00.472 1.898l24.273 6.969a1.129 1.129 0 001.408-1.356l-6.051-24.53a1.129 1.129 0 00-1.073-.86zm-.65 3.3l5.114 20.736-20.517-5.89 15.403-14.847zM89.453 36.793a1.129 1.129 0 00-.806.316L70.423 54.67a1.129 1.129 0 00.472 1.899l24.274 6.968a1.129 1.129 0 001.408-1.356l-6.05-24.53a1.129 1.129 0 00-1.074-.859zm-.65 3.3l5.114 20.737L73.4 54.94l15.403-14.846zM52.944 71.864a1.129 1.129 0 00-.74.315L33.982 89.742a1.129 1.129 0 00.472 1.898l24.278 6.968a1.129 1.129 0 001.407-1.355l-6.055-24.531a1.129 1.129 0 00-1.14-.858zm-.582 3.3l5.118 20.737-20.522-5.89 15.404-14.846z" overflow="visible"/></g></svg>
    `,content:{type:"ThreeJs1"},category:"Basic"})},X=a=>{a.Components.addType("Products",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,script:function(){var l=new Swiper("#thumbs",{slidesPerView:5,spaceBetween:10,mousewheel:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:6,direction:"vertical"}}});new Swiper(".mySwiper2",{mousewheel:!0,effect:"fade",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:l}})},components:`
        <style>
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

          body {
            background: #000;
            color: #000;
          }

          .swiper-container {
            display: flex;
          }

          .mySwiper2 {
            height: 600px;
            width: 100%;
          }

          .mySwiper {
            width: 100px;
            height: 300px;
            margin-right: 10px;
            box-sizing: border-box;
          }

          .mySwiper .swiper-slide {
            height: 75px !important;
            opacity: 0.4;
          }

          .mySwiper .swiper-slide-thumb-active {
            opacity: 1;
          }

          /* Responsive styles */
          @media (max-width: 767px) {
            .swiper-container {
              flex-direction: column-reverse;
            }

            .mySwiper {
              width: 100%;
              height: 80px;
              margin: 10px 0 0 0;
            }

            .mySwiper .swiper-slide {
              width: 25%;
              height: 100%;
            }

            .mySwiper2 {
              height: 350px;
            }
          }
        </style>
         <div class="container mx-auto"> 
            <div class="grid grid-cols-12 md:px-4 px-2">
              <div class="md:col-span-6 col-span-12 lg:flex">
                <div class="swiper mySwiper" id="thumbs">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </div>
                  </div>
                </div>

                <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </div>
                  </div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>

        `}}}),a.Blocks.add("Products",{label:"Products",media:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 640" x="0px" y="0px"><path d="M472,24H40A24.028,24.028,0,0,0,16,48V464a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V48A24.028,24.028,0,0,0,472,24ZM40,40H472a8.009,8.009,0,0,1,8,8V88H32V48A8.009,8.009,0,0,1,40,40ZM472,472H40a8.009,8.009,0,0,1-8-8V104H480V464A8.009,8.009,0,0,1,472,472Z"/><circle cx="120" cy="64" r="8"/><circle cx="88" cy="64" r="8"/><circle cx="56" cy="64" r="8"/><path d="M72,312H264a8,8,0,0,0,8-8V144a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V304A8,8,0,0,0,72,312Zm107.406-31.207L200,253.333,232,296H188.53ZM169.87,296H102.13L136,239.549ZM80,152H256V296h-4l-45.6-60.8a8,8,0,0,0-12.8,0l-23.083,30.778L142.86,219.884a8,8,0,0,0-13.72,0L83.47,296H80Z"/><circle cx="176" cy="192" r="8"/><path d="M440,136H344a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"/><path d="M312,184h96a8,8,0,0,0,0-16H312a8,8,0,0,0,0,16Z"/><path d="M312,216h48a8,8,0,0,0,0-16H312a8,8,0,0,0,0,16Z"/><path d="M440,200H408a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z"/><path d="M344,328H328a24,24,0,0,0,0,48h16a24,24,0,0,0,0-48Zm0,32H328a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z"/><path d="M312,312h96a8,8,0,0,0,8-8V272a8,8,0,0,0-8-8H312a8,8,0,0,0-8,8v32A8,8,0,0,0,312,312Zm88-16H384V280h16Zm-80-16h48v16H320Z"/><path d="M424,328H408a24,24,0,0,0,0,48h16a24,24,0,0,0,0-48Zm0,32H408a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z"/><path d="M312,248h32a8,8,0,0,0,0-16H312a8,8,0,0,0,0,16Z"/><circle cx="312" cy="144" r="8"/><path d="M168,424H104a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/><circle cx="72" cy="432" r="8"/><path d="M304,424H240a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/><circle cx="208" cy="432" r="8"/><path d="M440,424H376a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/><circle cx="344" cy="432" r="8"/><path d="M72,392H264a8,8,0,0,0,8-8V336a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v48A8,8,0,0,0,72,392Zm88-16H128V344h32Zm16-32h32v32H176Zm80,32H224V344h32ZM80,344h32v32H80Z"/></svg>
    `,content:{type:"Products"},category:"Basic"})},ee=a=>{a.Components.addType("Three.Js",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,traits:[{type:"text",name:"delay",placeholder:"Nhập số khoảng thời gian chuyển slide (ms)",changeProp:!0}],delay:"https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj","script-props":["delay"],script:function(l){function n(){const r=document.querySelector("#c"),o=new THREE.WebGLRenderer({canvas:r}),p=45,m=2,h=.1,b=100,v=new THREE.PerspectiveCamera(p,m,h,b);v.position.set(0,10,20);const e=new THREE.OrbitControls(v,r);e.target.set(0,5,0),e.update();const i=new THREE.Scene;i.background=new THREE.Color("black");{const g=new THREE.TextureLoader().load("https://threejsfundamentals.org/threejs/resources/images/checker.png");g.wrapS=THREE.RepeatWrapping,g.wrapT=THREE.RepeatWrapping,g.magFilter=THREE.NearestFilter;const c=40/2;g.repeat.set(c,c);const C=new THREE.PlaneBufferGeometry(40,40),E=new THREE.MeshPhongMaterial({map:g,side:THREE.DoubleSide}),M=new THREE.Mesh(C,E);M.rotation.x=Math.PI*-.5,i.add(M)}{const c=new THREE.HemisphereLight(11657727,12155424,1);i.add(c)}{const g=new THREE.DirectionalLight(16777215,1);g.position.set(5,10,2),i.add(g),i.add(g.target)}const t=new THREE.OBJLoader2;t.loadMtl("https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.mtl",null,d=>{t.setMaterials(d),t.load(l.delay,f=>{const g=f.detail.loaderRootNode;i.add(g)})});function s(d){const f=d.domElement,g=f.clientWidth,c=f.clientHeight,C=f.width!==g||f.height!==c;return C&&d.setSize(g,c,!1),C}function u(){if(s(o)){const d=o.domElement;v.aspect=d.clientWidth/d.clientHeight,v.updateProjectionMatrix()}o.render(i,v),requestAnimationFrame(u)}requestAnimationFrame(u)}n()},content:`
        <style>
        #c{
          width: 100%;
          height: 100%;
        }
        </style>
        <canvas id="c"></canvas>
        `}}}),a.Blocks.add("Three.Js",{label:"Three.Js",media:`
    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 218.207 218.207" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M214.31,27.276H3.897C1.743,27.276,0,29.019,0,31.172v27.276v77.931v50.655c0,2.154,1.743,3.897,3.897,3.897H214.31 c2.154,0,3.897-1.743,3.897-3.897v-50.655V58.448V31.172C218.207,29.019,216.464,27.276,214.31,27.276z M7.793,62.345h35.069 v70.138H7.793V62.345z M210.414,132.483h-11.69V62.345h11.69V132.483z M210.414,54.552h-15.586c-2.154,0-3.897,1.743-3.897,3.897 v77.931c0,2.154,1.743,3.897,3.897,3.897h15.586v42.862H7.793v-0.001v-42.862h38.966c2.154,0,3.897-1.743,3.897-3.897V58.448 c0-2.154-1.743-3.897-3.897-3.897H7.793V35.069h202.621V54.552z"></path> <circle cx="113" cy="163.655" r="7.793"></circle> <path d="M66.241,140.277h109.103c2.154,0,3.897-1.743,3.897-3.897V58.448c0-2.153-1.743-3.896-3.896-3.896H66.241 c-2.154,0-3.897,1.743-3.897,3.897v77.931C62.344,138.534,64.087,140.277,66.241,140.277z M70.138,62.345h101.31v70.138H70.138 V62.345z"></path> <rect x="66.241" y="159.759" width="11.69" height="7.793"></rect> <rect x="85.724" y="159.759" width="11.69" height="7.793"></rect> <rect x="128.586" y="159.759" width="11.69" height="7.793"></rect> <rect x="148.069" y="159.759" width="11.69" height="7.793"></rect> </g> </g> </g> </g></svg>
    `,content:{type:"Three.Js"},category:"Basic"})},re={model3d:D,imageLink:N,masonry:P,header:O,footer:W,user:U,socical:J,container:Y,slider:q,imgSlider:K,threeJs:Q,products:X,test:ee},te=(a,l={})=>{const n=a.BlockManager,r=l.stylePrefix,o=`${r}row-aris`,p=`${r}cell-aris`,m=l.labelRow,h=l.labelColumn,b=w=>{const x=[];for(let H in w){let y=w[H];const _=y instanceof Array||y instanceof Object;y=_?JSON.stringify(y):y,x.push(`${H}=${_?`${y}`:`"${y}"`}`)}return x.length?`${x.join(" ")}`:""},v="flex-basis",e=3,i=1,t=1,s={tl:0,tc:0,tr:0,cl:0,cr:0,bl:0,br:0,minDim:i},u={...s,cr:1,cl:1,bc:1,keyWidth:v,currentUnit:t,minDim:i,step:e,onMove:(w,x,{resizer:H})=>{const y=w.parentElement;if(!y)return;const _=Array.from(y.children),L=_.indexOf(w),$=L===0,I=L===_.length-1;if(H==="cr"&&!I){const T=_[L+1],A=w.offsetWidth,z=T.offsetWidth,S=x.right;w.style.width=`${A+S}px`,T.style.width=`${z-S}px`}else if(H==="cl"&&!$){const T=_[L-1],A=w.offsetWidth,z=T.offsetWidth,S=x.left;w.style.width=`${A-S}px`,T.style.width=`${z+S}px`}}},d={class:o,"data-gjs-droppable":`.${p}`,"data-gjs-resizable":s,"data-gjs-custom-name":m},f={class:p,"data-gjs-draggable":`.${o}`,"data-gjs-resizable":u,"data-gjs-custom-name":h,"data-gjs-unstylable":["width"],"data-gjs-stylable-require":["flex-basis"]},g=[`.${o}`,`.${p}`];a.on("selector:add",w=>g.indexOf(w.getFullName())>=0&&w.set("private",1)),a.on("block:drag:stop",w=>{const x=w==null?void 0:w.parent();x&&x.getClasses().includes(p)&&w.setStyle({width:"100%",display:"block",padding:"0","min-height":"55px","max-height":"100%","max-width":"100%"})});const c="Flexbox",C="Basic",E=b(d),M=b(f),j=`
    .${o} {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
      padding: 10px;
      gap: 10px;
      min-height: 75px;
    }
    @media (max-width: 768px) {
      .${o} {
        flex-direction: column;
      }
    }
    @media (max-width: 480px) {
      .${o} {
        height: auto;
      }
    }
  `,B=`
    .${p} {
      min-height: 55px;
      flex-grow: 1;
      flex-basis: 100%;
    }
  `;n.add("flexbox",{label:c,category:C,media:`
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="#ffffff" stroke-width="0.00024000000000000003" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 19.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="#ffffff" stroke-width="0.00024000000000000003" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    `,attributes:{class:"gjs-fonts gjs-f-b2"},content:`
      <div ${E}>
        <div ${M}></div>
        <div ${M}></div>
      </div>
      <style>
        ${j}
        ${B}
      </style>
    `,...l.flexboxBlock})},ae=(a,l={})=>{const n={flexboxBlock:{},stylePrefix:"",labelRow:"Row",labelColumn:"Column",...l};te(a,n)},oe=ae;export{re as B,oe as p};
