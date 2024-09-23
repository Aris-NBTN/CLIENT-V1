import{e as J,V as q,a1 as se,f as X,b4 as me,j as T,h as D,r as re,aX as te,aY as ne}from"./index-DI1ELRnN.js";import{G as ge}from"./GrapeJs-D5Yat3jc.js";import{f as ce}from"./fileApi-CgI_yzPo.js";import{R as ie,C as G}from"./row-D9f7Fr9s.js";const he=u=>{u.I18n.addMessages({vi:{assetManager:{addButton:"Thêm ảnh",inputPlh:"Nhập link ảnh: http://image.jpg",modalTitle:"Chọn ảnh",uploadTitle:"Kéo thả file vào đây hoặc click để upload"},blockManager:{labels:{column1:"1 Cột",column2:"2 Cột",column3:"3 Cột","column3-7":"2 Cột (1 nhỏ 1 lớn)",image:"Ảnh",text:"Văn bản",link:"Liên kết",video:"Video",map:"Bản đồ"},categories:{Basic:"Khối cơ bản",Extra:"Khối mở rộng",Blog:"Khối Blog",Contact:"Khối liên hệ",Content:"Khối nội dung",CTA:"Khối CTA",Commerce:"Khối thương mại",Features:"Khối tính năng",Footer:"Khối chân trang",Header:"Khối tiêu đề",Gallery:"Khối thư viện","3D Model":"Mô hình 3D",Hero:"Khối Hero",Pricing:"Khối giá",Statistics:"Khối thống kê",Steps:"Khối bước",Team:"Khối nhóm",Testimonials:"Khối chứng nhận",Layout:"Khối bố cục"}},domComponents:{names:{"":"Box",wrapper:"Body",text:"Text",comment:"Bình luận",image:"Hình ảnh",video:"Video",label:"Nhãn",link:"Liên kết",map:"Google Map",tfoot:"Chân bảng biểu",tbody:"Thân bảng biểu",thead:"Đầu bảng biểu",table:"Bảng biểu",Row:"Hàng",Cell:"Cột"}},deviceManager:{device:"",devices:{desktop:"Máy tính",tablet:"Máy tính bảng",mobileLandscape:"Di động nằm ngang",mobilePortrait:"Di động dọc"}},panels:{buttons:{titles:{Preview:"Xem thử",fullscreen:"Toàn màn hình","sw-visibility":"X-ray","export-template":"Xem mã","open-sm":"Trình soạn thảo style","open-tm":"Thiết lập","open-layers":"Trình soạn thảo lớp","open-blocks":"Mở khối"}}},selectorManager:{label:"Classes",selected:"Đã chọn",emptyState:"- Trạng thái -",states:{hover:"Lướt qua",active:"Chạm","nth-of-type(2n)":"Chẵn/Lẻ"}},styleManager:{empty:"Chọn 1 phần tử trước khi sử dụng",layer:"Lớp",fileButton:"Hình ảnh",sectors:{general:"Chung",layout:"Bố cục",typography:"Kiểu chữ",decorations:"Trang trí",extra:"Mở rộng",flex:"Flex",dimension:"Kích thước"},properties:{"text-shadow-h":"X","text-shadow-v":"Y","text-shadow-blur":"Mờ","text-shadow-color":"Màu","box-shadow-h":"X","box-shadow-v":"Y","box-shadow-blur":"Mờ","box-shadow-spread":"Spread","box-shadow-color":"Màu","box-shadow-type":"Loại","border-top-left-radius-sub":"Trên góc trái","border-top-right-radius-sub":"Trên góc phải","border-bottom-right-radius-sub":"Dưới góc phải","border-bottom-left-radius-sub":"Dưới góc trái","transform-rotate-x":"Rotate X","transform-rotate-y":"Rotate Y","transform-rotate-z":"Rotate Z","transform-scale-x":"Scale X","transform-scale-y":"Scale Y","transform-scale-z":"Scale Z","transition-property-sub":"Thuộc tính","transition-duration-sub":"Duration","transition-timing-function-sub":"Timing","background-image-sub":"Hình ảnh","background-repeat-sub":"Lặp lại","background-position-sub":"Vị trí","background-attachment-sub":"Đính kèm","background-size-sub":"Kích thước"}},traitManager:{empty:"Chọn 1 thành phần trước khi sử dụng",label:"Cấu hình",traits:{labels:{id:"Id",alt:"Mô tả",title:"Tiêu đề",href:"Liên kết",address:"Địa chỉ",mapType:"Bản đồ",zoom:"Phóng to",target:"Mở cửa sổ"},options:{target:{false:"Cửa sổ hiện tại",_blank:"Cửa sổ mới"},mapType:{roadMap:"Đường bộ",sateLlite:"Vệ tinh"}}}},storageManager:{recover:"Bạn có muốn khôi phục những thay đổi chưa được lưu?"}}})},fe=(u,S)=>{const h={id:"1",label:"File 3D"},f={id:"2",label:"Ánh sáng",open:!1},g={id:"3",label:"Bóng đỗ",open:!1},A={id:"4",label:"Tự động xoay",open:!1},V={id:"5",label:"Môi trường",open:!1},k={id:"7",label:"Skybox",open:!1},E={id:"8",label:"Tùy chọn",open:!0},j={id:"9",label:"Camera",open:!1};u.Components.addType("Model 3D",{model:{defaults:{name:"Model 3D",tagName:"model-viewer",droppable:!1,resizable:!0,script:function(){},traits:[{name:"option-file-glb",type:"option-file",category:E},{name:"input-src-glb",type:"input-file",label:"Link file",category:h},{name:"src",type:"input-file-glb",category:h},{label:"Camera",name:"camera-model",type:"camera-model",category:j},{label:"Min FOV",name:"camera-min-fov",type:"camera-min-fov",category:j},{label:"Max FOV",name:"camera-max-fov",type:"camera-max-fov",category:j},{label:"Độ sáng",name:"exposure",type:"range-light",category:f},{name:"input-src-environment",type:"input-src-environment",label:"Link file",category:V},{label:"Môi trường",name:"environment-image",type:"environment",category:V},{name:"add-environment",type:"add-environment",category:V},{label:"Skybox",name:"skybox",type:"skybox",category:k},{label:"Distance",name:"floor-skybox",type:"floor-skybox",category:k},{label:"Cường độ",name:"shadow-intensity",type:"shadow-intensity",category:g},{label:"Độ mềm",name:"shadow-softness",type:"shadow-softness",category:g},{label:"Vị trí",name:"shadow-placement",type:"shadow-placement",category:g},{label:"Góc xoay",name:"rotation-per-second",type:"rotation-per-second",category:A},{label:"Độ trễ",name:"delay-rotate",type:"delay-rotate",category:A}],attributes:{"camera-controls":!0,"touch-action":"pan-y",src:"http://localhost:8082/uploads/3d/file3d/1.glb"},style:{width:"100%",height:"345px",display:"block"}}}}),u.TraitManager.addType("camera-model",{noLabel:!0,createInput({component:e}){const c=document.createElement("div");return c.classList.add("flex","items-center","justify-center"),c.innerHTML=`
      <button id="a">Đặt làm camera mặc định</button>
      `,c.querySelector("#a").addEventListener("click",()=>{const b=e.view.el,o=b.getCameraOrbit();b.getCameraTarget();const m=b.getFieldOfView();e.addAttributes({"camera-orbit":o}),e.addAttributes({"field-of-view":m}),J("Đã đặt làm camera mặc định","Vui lòng lưu trang !")}),c},onEvent({component:e}){}}),u.TraitManager.addType("camera-max-fov",{createInput({component:e}){var b,o;const c=parseInt((o=(b=e.view.el)==null?void 0:b.getAttribute("max-field-of-view"))==null?void 0:o.replace("deg",""))||e.view.el.getFieldOfView().toFixed(0);console.log(c);const n=document.createElement("div");return n.classList.add("flex","items-center","justify-center","flex-col"),n.innerHTML=`
      <input 
        id="fov" 
        type="range" 
        min="0" max="120" step="10" value="${c}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,n},onEvent({component:e}){var n=this.el.querySelector("#fov").value;e.addAttributes({"max-field-of-view":`${n}deg`})}}),u.TraitManager.addType("camera-min-fov",{createInput({component:e}){var o,m,i,r;const c=parseInt((m=(o=e.view.el)==null?void 0:o.getAttribute("max-field-of-view"))==null?void 0:m.replace("deg",""))||60,n=parseInt((r=(i=e.view.el)==null?void 0:i.getAttribute("min-field-of-view"))==null?void 0:r.replace("deg",""))||30,b=document.createElement("div");return b.classList.add("flex","items-center","justify-center","flex-col"),b.innerHTML=`
      <input 
        id="fov" 
        type="range" 
        min="0" max="${c}" step="1" value="${n}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,b},onEvent({component:e}){var n=this.el.querySelector("#fov").value;e.addAttributes({"min-field-of-view":`${n}deg`})}}),u.TraitManager.addType("option-file",{noLabel:!0,createInput({component:e}){const c=document.createElement("div");c.classList.add("flex","items-center","justify-center"),c.innerHTML=`
      <button id="a">Thêm tùy chọn</button>
      `;const n=e.view.el;return n[Object.getOwnPropertySymbols(n).find(o=>o.description==="scene")],c.querySelector("#a").addEventListener("click",()=>{u.DomComponents.addComponent({tagName:"div",classes:["aaa"],components:`
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
              `})}),c},onEvent({component:e}){}}),u.TraitManager.addType("loader",{createInput(){const e=[{text:"Neutral",value:"neutral"},{text:"Legacy",value:"legacy"},{text:"Spruit Sunrise",value:""},{text:"Creek Regional",value:""}];let c="";e.forEach(b=>{c+=`<option value="${b.value}">${b.text}</option>`});const n=document.createElement("div");return n.innerHTML=`
      <select id="loader">
        ${c}
      </select>
      `,n},onEvent({component:e}){}}),u.TraitManager.addType("add-loader",{noLabel:!0,createInput(){const e=document.createElement("div");return e.innerHTML=`
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
      `,e},onEvent({component:e}){}}),u.TraitManager.addType("input-src-glb",{createInput({component:e}){const c=e.view.el.getAttribute("src")||"",n=document.createElement("div");return n.innerHTML=`
      <input id="file" type="text" placeholder="Nhập link file glb" value="${c}" />
    `,n},onEvent({component:e}){function c(b){return/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*(\:[0-9]+)?(\/.*)?$/.test(b)}const n=this.el.querySelector("#file");c(n.value)?fetch(n.value,{method:"HEAD"}).then(b=>{b.ok==!0?(e.addAttributes({src:n.value}),J("File đã được cập nhập")):q("File không tồn tại hoặc đã bị xóa !","Vui lòng nhập lại !")}).catch(()=>{q("Có lỗi xảy ra","Vui lòng thử lại !")}):q("Link không hợp lệ","Vui lòng nhập lại !")}}),u.TraitManager.addType("input-file-glb",{noLabel:!0,createInput(){const e=document.createElement("div");return e.innerHTML=`
      <input id="file-glb" type="file" class="input-file" accept=".glb, .gltf"/>
    `,e},onEvent({component:e}){se("3d","Đang giảm kích thước..");const c=this.el.querySelector("#file-glb");if(c.files[0]){let n=new FormData;n.append("file3d",c.files[0]),ce.file3D(n).then(b=>{J("3d","Đã cập nhập file","Vui lòng lưu trang !"),e.addAttributes({src:`${X}/uploads/3d/${b.file}`})}).catch(()=>q("Có lỗi xảy ra"))}}}),u.TraitManager.addType("range-light",{createInput({component:e}){const c=e.view.el.getAttribute("exposure")||1,n=document.createElement("div");return n.classList.add("flex","items-center","justify-center","flex-col"),n.innerHTML=`
      <input 
        id="exposure" 
        type="range" 
        min="0" max="5" step="0.2" value="${c}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,n},onEvent({component:e}){var n=this.el.querySelector("#exposure").value;e.addAttributes({exposure:n})}}),u.TraitManager.addType("environment",{createInput({component:e}){const c=e.view.el.getAttribute("environment-image")||"neutral",n=document.createElement("div");n.classList.add("flex","items-center","justify-center");const b=[{text:"Neutral",value:"neutral"},{text:"Legacy",value:"legacy"},{text:"Spruit Sunrise",value:"https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.jpg"},{text:"Creek Regional",value:"https://modelviewer.dev/shared-assets/environments/whipple_creek_regional_park_04_1k.hdr"},{text:"Custom",value:"custom",disabled:!0}];let o="";return b.forEach(m=>{o+=`<option value="${m.value}" ${m.value===c?"selected":""} ${m.disabled?"disabled":""}>${m.text}</option>`}),n.innerHTML=`
      <select id="environment">
        ${o}
      </select>
    `,n},onEvent({component:e}){const c=this.el.querySelector("#environment"),n=e.view.el.getAttribute("skybox-image");var b=c.value;n!=null&&e.addAttributes({"skybox-image":b}),(b=="neutral"||b=="legacy")&&e.removeAttributes("skybox-image"),e.addAttributes({"environment-image":b})}}),u.TraitManager.addType("add-environment",{noLabel:!0,createInput(){const e=document.createElement("div");return e.innerHTML=`
        <input id="file-environment" type="file" class="input-file" accept=".png, .jpg"/>
      `,e},onEvent({component:e}){const c=this.el.querySelector("#file-environment"),n=e.view.el.getAttribute("skybox-image");if(c.files[0]){let b=new FormData;b.append("ev",c.files[0]),settingGlbApi.environment(b).then(o=>{n&&(console.log("skyboxValue",n),e.addAttributes({"skybox-image":`${X}/uploads/3d/environment/${o.link}`})),e.addAttributes({"environment-image":`${X}/uploads/3d/environment/${o.link}`})})}}}),u.TraitManager.addType("input-src-environment",{createInput({component:e}){const c=e.view.el.getAttribute("environment-image")||"",n=document.createElement("div");return n.innerHTML=`
      <input id="file" type="text" placeholder="Nhập link môi trường" value="${c}" />
    `,n},onEvent({component:e}){function c(b){return/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*(\:[0-9]+)?(\/.*)?$/.test(b)}const n=this.el.querySelector("#file");c(n.value)?fetch(n.value,{method:"HEAD"}).then(b=>{b.ok==!0?(e.addAttributes({"environment-image":n.value}),J("File đã được cập nhập")):q("File không tồn tại hoặc đã bị xóa !","Vui lòng nhập lại !")}).catch(()=>{q("Có lỗi xảy ra","Vui lòng thử lại !")}):q("Link không hợp lệ","Vui lòng nhập lại !")}}),u.TraitManager.addType("skybox",{createInput({component:e}){const c=!!e.view.el.getAttribute("skybox-image"),n=document.createElement("div");n.classList.add("flex","items-center","justify-center");const b=[{text:"Tắt",value:!1},{text:"Bật",value:!0}];let o="";return b.forEach(m=>{o+=`<option value="${m.value}" ${m.value===c?"selected":""}>${m.text}</option>`}),n.innerHTML=`
      <select id="skybox">
        ${o}
      </select>
    `,n},onEvent({component:e}){const c=this.el.querySelector("#skybox"),n=e.view.el.getAttribute("environment-image");var b=c.value;if(n=="neutral"||n=="legacy"){e.removeAttributes("skybox-image"),q("Môi trường mặc định không hỗ trợ skybox !","Vui lòng chọn môi trường khác !");return}b==="true"?e.addAttributes({"skybox-image":n}):e.removeAttributes("skybox-image")}}),u.TraitManager.addType("floor-skybox",{createInput({component:e}){const c=e.view.el.getAttribute("skybox-height")||1,n=document.createElement("div");return n.classList.add("flex","items-center","justify-center","flex-col"),n.innerHTML=`
      <input 
        id="floor-skybox" 
        type="range" 
        min="0" max="500" step="0.5" value="${c}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,n},onEvent({component:e}){var n=this.el.querySelector("#floor-skybox").value;e.addAttributes({"skybox-height":`${parseFloat(n)}m`})}}),u.TraitManager.addType("shadow-intensity",{createInput({component:e}){const c=e.view.el.getAttribute("shadow-intensity")||1,n=document.createElement("div");return n.classList.add("flex","items-center","justify-center","flex-col"),n.innerHTML=`
      <input 
        id="shadow-intensity" 
        type="range" 
        min="0" max="3" step="0.2" value="${c}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,n},onEvent({component:e}){var n=this.el.querySelector("#shadow-intensity").value;e.addAttributes({"shadow-intensity":n})}}),u.TraitManager.addType("shadow-softness",{createInput({component:e}){const c=e.view.el.getAttribute("shadow-softness")||1,n=document.createElement("div");return n.classList.add("flex","items-center","justify-center","flex-col"),n.innerHTML=`
      <input 
        id="shadow-softness" 
        type="range" 
        min="0" max="1" step="0.1" value="${c}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,n},onEvent({component:e}){var n=this.el.querySelector("#shadow-softness").value;e.addAttributes({"shadow-softness":n})}}),u.TraitManager.addType("shadow-placement",{createInput({component:e}){const c=e.view.el.getAttribute("ar-placement")||"floor",n=document.createElement("div");n.classList.add("flex","items-center","justify-center","flex-col");const b=[{text:"Mặt đất",value:"floor"},{text:"Bức tường",value:"wall"}];let o="";return b.forEach(m=>{o+=`<option value="${m.value}" ${m.value===c?"selected":""} ${m.disabled?"disabled":""}>${m.text}</option>`}),n.innerHTML=`
      <select id="placement">
        ${o}
      </select>
    `,n},onEvent({component:e}){var n=this.el.querySelector("#placement").value;e.addAttributes({"ar-placement":n})}}),u.TraitManager.addType("delay-rotate",{createInput({component:e}){const c=e.view.el.getAttribute("auto-rotate-delay")||3e3,n=document.createElement("div");return n.classList.add("flex","items-center","justify-center","flex-col"),n.innerHTML=`
      <input 
        id="rotateDelay" 
        type="range" 
        min="0" max="5000" step="500" value="${c}"
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,n},onEvent({component:e}){const c=!!e.view.el.getAttribute("auto-rotate");var b=this.el.querySelector("#rotateDelay").value;c||e.addAttributes({"auto-rotate":!0}),e.addAttributes({"auto-rotate-delay":b})}}),u.TraitManager.addType("rotation-per-second",{createInput({component:e}){const c=e.view.el.getAttribute("rotation-per-second")||30,n=document.createElement("div");return n.classList.add("flex","items-center","justify-center","flex-col"),n.innerHTML=`
      <input 
        id="rotation-per-second" 
        type="range" 
        min="0" max="180" step="10" value="${c}"
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,n},onEvent({component:e}){const c=!!e.view.el.getAttribute("auto-rotate");var b=this.el.querySelector("#rotation-per-second").value;c||e.addAttributes({"auto-rotate":!0}),e.addAttributes({"rotation-per-second":`${b}deg`})}}),u.Blocks.add("model-3D",{label:"3D",media:`<svg width="100%" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19.3297 5.68003L13.0597 2.30003C12.3997 1.94003 11.5997 1.94003 10.9397 2.30003L4.66969 5.68003C4.20969 5.93003 3.92969 6.41003 3.92969 6.96003C3.92969 7.50003 4.20969 7.99003 4.66969 8.24003L10.9397 11.62C11.2697 11.8 11.6397 11.89 11.9997 11.89C12.3597 11.89 12.7297 11.8 13.0597 11.62L19.3297 8.24003C19.7897 7.99003 20.0697 7.51003 20.0697 6.96003C20.0697 6.41003 19.7897 5.93003 19.3297 5.68003Z" fill="currentColor"></path> 
        <path d="M9.91 12.79L4.07 9.87C3.62 9.65 3.1 9.67 2.68 9.93C2.25 10.2 2 10.65 2 11.15V16.66C2 17.61 2.53 18.47 3.38 18.9L9.21 21.82C9.41 21.92 9.63 21.97 9.85 21.97C10.11 21.97 10.37 21.9 10.6 21.76C11.03 21.5 11.28 21.04 11.28 20.54V15.03C11.29 14.07 10.76 13.21 9.91 12.79Z" fill="currentColor"></path> 
        <path d="M21.3207 9.9299C20.8907 9.6699 20.3707 9.6399 19.9307 9.8699L14.1007 12.7899C13.2507 13.2199 12.7207 14.0699 12.7207 15.0299V20.5399C12.7207 21.0399 12.9707 21.4999 13.4007 21.7599C13.6307 21.8999 13.8907 21.9699 14.1507 21.9699C14.3707 21.9699 14.5907 21.9199 14.7907 21.8199L20.6207 18.8999C21.4707 18.4699 22.0007 17.6199 22.0007 16.6599V11.1499C22.0007 10.6499 21.7507 10.1999 21.3207 9.9299Z" fill="currentColor"></path>
       </svg>`,content:{type:"Model 3D"},category:"Basic"})},ve=u=>{u.Blocks.add("block-link",{label:"Link Block",media:`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM9.198 7.25H9.30203C10.2005 7.24997 10.9497 7.24995 11.5445 7.32991C12.1723 7.41432 12.7391 7.59999 13.1945 8.05546C13.65 8.51093 13.8357 9.07773 13.9201 9.70552C14.0001 10.3003 14 11.0495 14 11.948L14 12C14 12.4142 13.6642 12.75 13.25 12.75C12.8358 12.75 12.5 12.4142 12.5 12C12.5 11.036 12.4984 10.3884 12.4335 9.9054C12.3714 9.44393 12.2642 9.24644 12.1339 9.11612C12.0036 8.9858 11.8061 8.87858 11.3446 8.81654C10.8616 8.7516 10.214 8.75 9.25 8.75C8.28599 8.75 7.63843 8.7516 7.15539 8.81654C6.69393 8.87858 6.49644 8.9858 6.36612 9.11612C6.2358 9.24644 6.12858 9.44393 6.06654 9.9054C6.0016 10.3884 6 11.036 6 12C6 12.964 6.0016 13.6116 6.06654 14.0946C6.12858 14.5561 6.2358 14.7536 6.36612 14.8839C6.49644 15.0142 6.69393 15.1214 7.15539 15.1835C7.63843 15.2484 8.28599 15.25 9.25 15.25C9.66422 15.25 10 15.5858 10 16C10 16.4142 9.66422 16.75 9.25 16.75L9.19798 16.75C8.29951 16.75 7.5503 16.7501 6.95552 16.6701C6.32773 16.5857 5.76093 16.4 5.30546 15.9445C4.84999 15.4891 4.66432 14.9223 4.57991 14.2945C4.49995 13.6997 4.49997 12.9505 4.5 12.052V11.948C4.49997 11.0495 4.49995 10.3003 4.57991 9.70552C4.66432 9.07773 4.84999 8.51093 5.30546 8.05546C5.76093 7.59999 6.32773 7.41432 6.95552 7.32991C7.55029 7.24995 8.29954 7.24997 9.198 7.25ZM16.8446 8.81654C16.3616 8.7516 15.714 8.75 14.75 8.75C14.3358 8.75 14 8.41422 14 8C14 7.58579 14.3358 7.25 14.75 7.25L14.802 7.25C15.7005 7.24997 16.4497 7.24995 17.0445 7.32991C17.6723 7.41432 18.2391 7.59999 18.6945 8.05546C19.15 8.51093 19.3357 9.07773 19.4201 9.70552C19.5001 10.3003 19.5 11.0495 19.5 11.9479V12.052C19.5 12.9505 19.5001 13.6997 19.4201 14.2945C19.3357 14.9223 19.15 15.4891 18.6945 15.9445C18.2391 16.4 17.6723 16.5857 17.0445 16.6701C16.4497 16.7501 15.7005 16.75 14.802 16.75H14.698C13.7995 16.75 13.0503 16.7501 12.4555 16.6701C11.8277 16.5857 11.2609 16.4 10.8055 15.9445C10.35 15.4891 10.1643 14.9223 10.0799 14.2945C9.99995 13.6997 9.99997 12.9505 10 12.052L10 12C10 11.5858 10.3358 11.25 10.75 11.25C11.1642 11.25 11.5 11.5858 11.5 12C11.5 12.964 11.5016 13.6116 11.5665 14.0946C11.6286 14.5561 11.7358 14.7536 11.8661 14.8839C11.9964 15.0142 12.1939 15.1214 12.6554 15.1835C13.1384 15.2484 13.786 15.25 14.75 15.25C15.714 15.25 16.3616 15.2484 16.8446 15.1835C17.3061 15.1214 17.5036 15.0142 17.6339 14.8839C17.7642 14.7536 17.8714 14.5561 17.9335 14.0946C17.9984 13.6116 18 12.964 18 12C18 11.036 17.9984 10.3884 17.9335 9.9054C17.8714 9.44393 17.7642 9.24644 17.6339 9.11612C17.5036 8.9858 17.3061 8.87858 16.8446 8.81654Z"></path> </g></svg>
    `,content:{type:"block-link"},category:"Basic"}),u.Components.addType("block-link",{model:{defaults:{name:"Link Block",tagName:"a",resizable:!0,traits:[{type:"title-link",name:"title-link",label:"title"},{type:"href-next",name:"href",label:"New href"},{type:"target-link",name:"target-link",label:"Mở cửa sổ"}],style:{width:"100%",height:"345px",display:"block",cursor:"pointer"}}}}),u.TraitManager.addType("target-link",{createInput({component:S}){const h=S.view.el.getAttribute("target")||"",f=document.createElement("div");return f.innerHTML=`
        <select id="target-link">
          <option value="" ${h===""?"selected":""}>Cửa sổ trang hiện tại</option>
          <option value="_blank" ${h==="_blank"?"selected":""}>Cửa sổ trang mới</option>
        </select>
      `,f},onEvent({component:S}){const h=this.el.querySelector("#target-link");h.value==="_blank"?(S.addAttributes({target:h.value}),console.log(S.view.el)):S.removeAttributes("target")}}),u.TraitManager.addType("title-link",{createInput({component:S}){const h=S.view.el.getAttribute("title")||"",f=document.createElement("div");return f.innerHTML=`
        <input id="title" type="text" placeholder="Nhập tiêu đề" value="${h}" />
      `,f},onEvent({component:S}){const h=this.el.querySelector("#title");S.addAttributes({title:h.value})}}),u.TraitManager.addType("href-next-link",{createInput({component:S}){const h=S.view.el.getAttribute("href")||"",f=document.createElement("div");return f.innerHTML=`
        <input id="link" type="text" value="${h}" />
      `,f},onEvent({component:S}){const h=this.el.querySelector("#link");S.addAttributes({href:h.value})}})},be=u=>{u.Components.addType("Slider",{model:{defaults:{name:"Slider",resizable:!0,droppable:!1,copyable:!1,traits:[{name:"navigation",type:"select",options:[{id:"no",label:"Không có"},{id:"yes",label:"Có"}],default:"yes",placeholder:"Chọn ẩn/hiển nút điều hướng",changeProp:!0}],navigation:"yes","script-props":["navigation"],script:function(S){let h=null;function f(g){h&&h.destroy(!0,!0);const A={pagination:{el:".swiper-pagination",dynamicBullets:!0}};g==="yes"&&(A.navigation={nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}),h=new Swiper(".mySwiper",A)}f(S.navigation)},components:`
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
        `,style:{height:"80vh"}}}}),u.Blocks.add("Slider",{label:"Slider",media:`
    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 218.207 218.207" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M214.31,27.276H3.897C1.743,27.276,0,29.019,0,31.172v27.276v77.931v50.655c0,2.154,1.743,3.897,3.897,3.897H214.31 c2.154,0,3.897-1.743,3.897-3.897v-50.655V58.448V31.172C218.207,29.019,216.464,27.276,214.31,27.276z M7.793,62.345h35.069 v70.138H7.793V62.345z M210.414,132.483h-11.69V62.345h11.69V132.483z M210.414,54.552h-15.586c-2.154,0-3.897,1.743-3.897,3.897 v77.931c0,2.154,1.743,3.897,3.897,3.897h15.586v42.862H7.793v-0.001v-42.862h38.966c2.154,0,3.897-1.743,3.897-3.897V58.448 c0-2.154-1.743-3.897-3.897-3.897H7.793V35.069h202.621V54.552z"></path> <circle cx="113" cy="163.655" r="7.793"></circle> <path d="M66.241,140.277h109.103c2.154,0,3.897-1.743,3.897-3.897V58.448c0-2.153-1.743-3.896-3.896-3.896H66.241 c-2.154,0-3.897,1.743-3.897,3.897v77.931C62.344,138.534,64.087,140.277,66.241,140.277z M70.138,62.345h101.31v70.138H70.138 V62.345z"></path> <rect x="66.241" y="159.759" width="11.69" height="7.793"></rect> <rect x="85.724" y="159.759" width="11.69" height="7.793"></rect> <rect x="128.586" y="159.759" width="11.69" height="7.793"></rect> <rect x="148.069" y="159.759" width="11.69" height="7.793"></rect> </g> </g> </g> </g></svg>
    `,content:{type:"Slider"},category:"Basic"})},ye=(u,S)=>{u.Components.addType("Masonry",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,script:function(){var h=document.querySelector(".grid");new Packery(h,{itemSelector:".grid-item"})},content:`
         <iframe
            name="masonry"
            style="width: 100%; height: 100dvh;"
            src="${me}/admin/page-custom/masonry/${S}" 
            title="ARIS">
          </iframe>
        `}}}),u.Blocks.add("Masonry",{label:"Masonry",media:`
    <svg width="201px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path fill-rule="nonzero" d="M22 20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16zm-11-5H4v4h7v-4zm9-4h-7v8h7v-8zm-9-6H4v8h7V5zm9 0h-7v4h7V5z"></path> </g> </g></svg>
    `,content:{type:"Masonry"},category:"Basic"})},we=u=>{u.Components.addType("HeaderLayout",{model:{defaults:{droppable:!1,copyable:!1,resizable:!0,script:function(){((f,g)=>{const A=document.getElementById(f),V=document.getElementById(g);A.addEventListener("click",()=>{V.classList.toggle("show-menu"),A.classList.toggle("show-icon")})})("nav-toggle-2","nav-menu-2")},components:`
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
        `}}}),u.Blocks.add("HeaderLayout",{label:"Header",title:"Header",media:`
        <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"> <path d="m14.4978951 12.4978973-.0105089-9.99999996c-.0011648-1.10374784-.8962548-1.99789734-2-1.99789734h-9.99999995c-1.0543629 0-1.91816623.81587779-1.99451537 1.85073766l-.00548463.151365.0105133 10.00000004c.0011604 1.1037478.89625045 1.9978973 1.99999889 1.9978973h9.99999776c1.0543618 0 1.9181652-.8158778 1.9945143-1.8507377z"></path> <path d="m4.5 4.5v9.817"></path> <path d="m7-2v14" transform="matrix(0 1 -1 0 12.5 -2.5)"></path> </g> </g></svg>
      `,content:{type:"HeaderLayout"},category:"Layout"}),u.DomComponents.addType("link",{model:{defaults:{traits:[{type:"title-link",name:"title-link",label:"title"},{type:"href-next",name:"href",label:"New href"},{type:"href-next-link",name:"href-link",label:"Link file"},{type:"target-link",name:"target-link",label:"Mở cửa sổ"}]}}}),u.TraitManager.addType("target-link",{createInput({component:h}){const f=h.view.el.getAttribute("target")||"",g=document.createElement("div");return g.innerHTML=`
        <select id="target-link">
          <option value="" ${f===""?"selected":""}>Cửa sổ trang hiện tại</option>
          <option value="_blank" ${f==="_blank"?"selected":""}>Cửa sổ trang mới</option>
        </select>
      `,g},onEvent({component:h}){const f=this.el.querySelector("#target-link");f.value==="_blank"?(h.addAttributes({target:f.value}),console.log(h.view.el)):h.removeAttributes("target")}}),u.TraitManager.addType("title-link",{createInput({component:h}){const f=h.view.el.getAttribute("title")||"",g=document.createElement("div");return g.innerHTML=`
        <input id="title" type="text" placeholder="Nhập tiêu đề" value="${f}" />
      `,g},onEvent({component:h}){const f=this.el.querySelector("#title");h.addAttributes({title:f.value})}}),u.TraitManager.addType("href-next-link",{createInput({component:h}){const f=h.view.el.getAttribute("href")||"",g=document.createElement("div");return g.innerHTML=`
        <input id="link" type="text" value="${f}" />
      `,g},onEvent({component:h}){const f=this.el.querySelector("#link");h.addAttributes({href:f.value})}}),u.Commands.add("addMenu",{run(h){const f=h.getSelected();if(f){const g=f.find(".nav__list")[0];if(g){const A=h.DomComponents.addComponent({tagName:"li",classes:["dropdown__item","menu-dropdown"],components:`
            <div class="nav__link">
              <h4 class="menu-text">New</h4> 
              <ul class="dropdown__menu"></ul>
            </div>
            `});g.append(A)}}}}),u.Commands.add("addNavLink",{run(h){var k,E;const f=h.getSelected(),g=f.find(".dropdown__menu")[0],A=(E=(k=f==null?void 0:f.view)==null?void 0:k.el)==null?void 0:E.querySelector(".dropdown__arrow"),V=()=>{const j=h.DomComponents.addComponent({tagName:"li",classes:["dropdown__subitem"],components:`
          <div class="dropdown__link">
            <h4 class="menu-text">Items</h4> 
              <ul class="dropdown__submenu dropdown-aris">
            </ul>
          </div>
          `});g.append(j)};if(A==null){const j=h.DomComponents.addComponent({tagName:"div",classes:["dropdown__arrow"],components:'<i class="ri-arrow-down-s-line"></i>'});V(),f.append(j)}else V()}}),u.Commands.add("addDropDownLink",{run(h){const f=h.getSelected(),g=f.find(".dropdown__submenu")[0],A=g.view.el.querySelectorAll("li").length,V=()=>{const k=h.DomComponents.addComponent({tagName:"li",components:`
            <a href="#" class="dropdown__sublink">
              <i class="ri-file-list-line"></i> 
              <h4 class="menu-text">Items</h4>
            </a>
          `});g.append(k)};if(A==0){console.log("countLi",A);const k=h.DomComponents.addComponent({tagName:"div",classes:["submenu-icon"],components:`
            <i class="ri-add-line dropdown__add"></i>
          `});f.append(k),V()}else V()}}),u.Commands.add("delMenu",{run(h){var V;const f=h.getSelected().view.el,g=(V=f==null?void 0:f.closest("li.dropdown__item"))==null?void 0:V.querySelector("ul.dropdown__menu"),A=h.getSelected();if(A){const k=A.parent();console.log(k.parent().parent()),k&&(k.remove(A),g&&(g.style.opacity="",g.style.top=""))}}}),u.Commands.add("del-sub-menu",{run(h){var k,E;const f=h.getSelected().view.el,g=h.getSelected(),A=(k=f==null?void 0:f.closest("li.dropdown__item"))==null?void 0:k.querySelector("ul.dropdown__menu"),V=(E=f==null?void 0:f.closest("li.dropdown__subitem"))==null?void 0:E.querySelector("ul.dropdown__submenu");if(g){const j=g.parent();j&&(j.remove(g),V.style.opacity="",V.style.top="",A.style.opacity="",A.style.top="")}}}),u.Commands.add("del-menu-cha",{run(h){const f=h.getSelected();if(f){const g=f.parent();console.log(g),g&&g.remove(f)}}});const S=(h,f,g,A)=>{var i,r;const V=h.view.el,k=h.get("toolbar"),E=V.classList[0],j=k.some(d=>d.id==="new-menu"),e=k.some(d=>d.id==="new-con"),c=k.some(d=>d.id==="del-menu"),n=k.some(d=>d.id==="del-menu-cha"),b=(i=V==null?void 0:V.closest("li.dropdown__item"))==null?void 0:i.querySelector("ul.dropdown__menu"),o=(r=V==null?void 0:V.closest("li.dropdown__subitem"))==null?void 0:r.querySelector("ul.dropdown__submenu"),m=k.filter(d=>d.command!=="tlb-delete"&&d.command!=="tlb-clone"&&d.command!=="tlb-move");switch(E){case"dropdown__sublink":if(!j){const d={label:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',id:"del-sub-menu",command:"del-sub-menu"};m.push(d),h.set("toolbar",m)}break;case"nav__link":if(!n){const d={label:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',id:"del-menu-cha",command:"del-menu-cha"};m.push(d)}if(!j){const d={label:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M18 15l-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15h2zm-7 3v2H3v-2h8zm10-7v2H3v-2h18zm0-7v2H3V4h18z"></path> </g> </g></svg>',id:"new-menu",command:"addNavLink"};m.push(d)}h.set("toolbar",m);break;case"dropdown__link":if(!c){const d={label:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',id:"del-menu",command:"delMenu"};m.push(d)}if(!e){const d={label:'<svg fill="#000000" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 3C.9 3 0 3.9 0 5v2c0 1.1.9 2 2 2h21c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 1h21c.563 0 1 .437 1 1v2c0 .563-.437 1-1 1H2c-.563 0-1-.437-1-1V5c0-.563.437-1 1-1zm0 17.5v2c0 .262.238.5.5.5h6.813l-1.157 1.125c-.48.497.28 1.157.688.72l2-2c.193-.187.193-.534 0-.72l-2-2c-.397-.397-1.14.268-.688.72L9.312 23H3v-1.5c0-.665-1-.644-1 0zm14-.5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 1h12c.563 0 1 .437 1 1v2c0 .563-.437 1-1 1H16c-.563 0-1-.437-1-1v-2c0-.563.437-1 1-1zM2 12c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h21c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 1h21c.563 0 1 .437 1 1v2c0 .563-.437 1-1 1H2c-.563 0-1-.437-1-1v-2c0-.563.437-1 1-1z"></path></g></svg>',id:"new-con",command:"addDropDownLink"};m.push(d)}h.set("toolbar",m);break;case"nav":if(!e){const d={label:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g data-name="add" id="add-2"> <g> <line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"></line> <line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"></line> </g> </g> </g> </g></svg>',id:"new-menu",command:"addMenu"};m.push(d)}h.set("toolbar",m);break}b&&(b.style.opacity=f,b.style.top=g),o&&(o.style.opacity=f,o.style.top=A)};u.on("component:selected",h=>{S(h,"1","60px","0")}),u.on("component:deselected",h=>{S(h,"","","0")})},xe=u=>{u.Components.addType("FooterLayout",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,script:function(){},components:`
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
        `,style:{width:"100%",height:"100%",overflow:"hidden"}}}}),u.Blocks.add("FooterLayout",{label:"Footer",media:`
        <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"> <path d="m14.4978951 12.4978973-.0105089-9.99999996c-.0011648-1.10374784-.8962548-1.99789734-2-1.99789734h-9.99999995c-1.0543629 0-1.91816623.81587779-1.99451537 1.85073766l-.00548463.151365.0105133 10.00000004c.0011604 1.1037478.89625045 1.9978973 1.99999889 1.9978973h9.99999776c1.0543618 0 1.9181652-.8158778 1.9945143-1.8507377z"></path> <path d="m4.5 4.5v9.817"></path> <path d="m7-2v14" transform="matrix(0 1 -1 0 12.5 -2.5)"></path> </g> </g></svg>
        `,content:{type:"FooterLayout"},category:"Layout"})},Ce=u=>{u.Components.addType("User",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,components:`
                    <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                `,style:{width:"40px"}}}}),u.Blocks.add("User",{label:"User",media:`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        `,content:{type:"User"},category:"Layout"})},ke=u=>{infoApi.allInfo().then(S=>{let h="";S.social.forEach(f=>{h+=`
      <a class="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 gap-2">
      ${f.Icon}
      </a>
      `}),u.Components.addType("Social",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,components:h,style:{display:"flex"}}}}),u.Blocks.add("Social",{label:"Social",media:`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H1V18C1 16.1362 2.27477 14.5701 4 14.126M6 10.8293C4.83481 10.4175 4 9.30621 4 7.99999C4 6.69378 4.83481 5.58254 6 5.1707M21 19H23V18C23 16.1362 21.7252 14.5701 20 14.126M18 5.1707C19.1652 5.58254 20 6.69378 20 7.99999C20 9.30621 19.1652 10.4175 18 10.8293M10 14H14C16.2091 14 18 15.7909 18 18V19H6V18C6 15.7909 7.79086 14 10 14ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      `,content:{type:"Social"},category:"Layout"})}).catch(S=>{console.error("Error fetching data from API:",S)})},_e=u=>{u.Components.addType("Container",{model:{defaults:{resizable:!0,components:`
          <div class="md:container md:mx-auto">
          </div>  
        `,style:{width:"100%",height:"75px","max-width":"100%","max-height":"100%",overflow:"hidden"}}}}),u.Blocks.add("Container",{label:"Container",media:`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H1V18C1 16.1362 2.27477 14.5701 4 14.126M6 10.8293C4.83481 10.4175 4 9.30621 4 7.99999C4 6.69378 4.83481 5.58254 6 5.1707M21 19H23V18C23 16.1362 21.7252 14.5701 20 14.126M18 5.1707C19.1652 5.58254 20 6.69378 20 7.99999C20 9.30621 19.1652 10.4175 18 10.8293M10 14H14C16.2091 14 18 15.7909 18 18V19H6V18C6 15.7909 7.79086 14 10 14ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        `,content:{type:"Container"},category:"Layout"})},He=u=>{u.Components.addType("ImgSlider",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,script:function(){setTimeout(()=>{var S=new Packery(".grid",{itemSelector:".grid-item",columnWidth:100});S.getItemElements().forEach(function(f){var g=new Draggabilly(f);S.bindDraggabillyEvents(g)});function h(){S.getItemElements().forEach(function(f,g){f.textContent=g+1})}S.on("layoutComplete",h),S.on("dragItemPositioned",h)},0)},components:`
        <style>
        </style>
        `}}}),u.Blocks.add("ImgSlider",{label:"ImgSlider",media:`
    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 218.207 218.207" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M214.31,27.276H3.897C1.743,27.276,0,29.019,0,31.172v27.276v77.931v50.655c0,2.154,1.743,3.897,3.897,3.897H214.31 c2.154,0,3.897-1.743,3.897-3.897v-50.655V58.448V31.172C218.207,29.019,216.464,27.276,214.31,27.276z M7.793,62.345h35.069 v70.138H7.793V62.345z M210.414,132.483h-11.69V62.345h11.69V132.483z M210.414,54.552h-15.586c-2.154,0-3.897,1.743-3.897,3.897 v77.931c0,2.154,1.743,3.897,3.897,3.897h15.586v42.862H7.793v-0.001v-42.862h38.966c2.154,0,3.897-1.743,3.897-3.897V58.448 c0-2.154-1.743-3.897-3.897-3.897H7.793V35.069h202.621V54.552z"></path> <circle cx="113" cy="163.655" r="7.793"></circle> <path d="M66.241,140.277h109.103c2.154,0,3.897-1.743,3.897-3.897V58.448c0-2.153-1.743-3.896-3.896-3.896H66.241 c-2.154,0-3.897,1.743-3.897,3.897v77.931C62.344,138.534,64.087,140.277,66.241,140.277z M70.138,62.345h101.31v70.138H70.138 V62.345z"></path> <rect x="66.241" y="159.759" width="11.69" height="7.793"></rect> <rect x="85.724" y="159.759" width="11.69" height="7.793"></rect> <rect x="128.586" y="159.759" width="11.69" height="7.793"></rect> <rect x="148.069" y="159.759" width="11.69" height="7.793"></rect> </g> </g> </g> </g></svg>
    `,content:{type:"ImgSlider"},category:"Basic"})},Me=u=>{u.Components.addType("ThreeJs1",{model:{defaults:{resizable:!0,copyable:!1,traits:[{type:"range-shadow",name:"Shadow",label:"Test"}],script:function(){},content:`
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
        `}}}),u.Blocks.add("ThreeJs1",{label:"ThreeJs1",media:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g font-weight="400" font-family="sans-serif"><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M16.219 15.762a1.129 1.129 0 00-1.076 1.399l24.394 98.742a1.129 1.129 0 001.879.544l73.386-70.59a1.129 1.129 0 00-.47-1.899L16.55 15.806a1.129 1.129 0 00-.331-.044zm1.584 2.754l94.024 27.07-70.566 67.877-23.458-94.947z" overflow="visible"/><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M65.137 29.84a1.129 1.129 0 00-.807.315L27.654 65.46a1.129 1.129 0 00.471 1.898L76.984 81.44a1.129 1.129 0 001.409-1.355L66.21 30.698a1.129 1.129 0 00-1.073-.858zm-.651 3.3L75.734 78.73l-45.104-13L64.486 33.14z" overflow="visible"/><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M46.914 47.313a1.129 1.129 0 00-1.076 1.399l6.054 24.531a1.129 1.129 0 001.88.543l18.222-17.563a1.129 1.129 0 00-.472-1.898l-24.277-6.968a1.129 1.129 0 00-.331-.044zm1.583 2.751l20.522 5.89L53.614 70.8l-5.117-20.736z" overflow="visible"/><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M40.902 22.809a1.129 1.129 0 00-.807.316L21.873 40.687a1.129 1.129 0 00.472 1.898l24.273 6.969a1.129 1.129 0 001.408-1.356l-6.051-24.53a1.129 1.129 0 00-1.073-.86zm-.65 3.3l5.114 20.736-20.517-5.89 15.403-14.847zM89.453 36.793a1.129 1.129 0 00-.806.316L70.423 54.67a1.129 1.129 0 00.472 1.899l24.274 6.968a1.129 1.129 0 001.408-1.356l-6.05-24.53a1.129 1.129 0 00-1.074-.859zm-.65 3.3l5.114 20.737L73.4 54.94l15.403-14.846zM52.944 71.864a1.129 1.129 0 00-.74.315L33.982 89.742a1.129 1.129 0 00.472 1.898l24.278 6.968a1.129 1.129 0 001.407-1.355l-6.055-24.531a1.129 1.129 0 00-1.14-.858zm-.582 3.3l5.118 20.737-20.522-5.89 15.404-14.846z" overflow="visible"/></g></svg>
    `,content:{type:"ThreeJs1"},category:"Basic"})},Ve=u=>{u.Components.addType("Products",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,script:function(){var S=new Swiper("#thumbs",{slidesPerView:5,spaceBetween:10,mousewheel:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:6,direction:"vertical"}}});new Swiper(".mySwiper2",{mousewheel:!0,effect:"fade",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:S}})},components:`
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

        `}}}),u.Blocks.add("Products",{label:"Products",media:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 640" x="0px" y="0px"><path d="M472,24H40A24.028,24.028,0,0,0,16,48V464a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V48A24.028,24.028,0,0,0,472,24ZM40,40H472a8.009,8.009,0,0,1,8,8V88H32V48A8.009,8.009,0,0,1,40,40ZM472,472H40a8.009,8.009,0,0,1-8-8V104H480V464A8.009,8.009,0,0,1,472,472Z"/><circle cx="120" cy="64" r="8"/><circle cx="88" cy="64" r="8"/><circle cx="56" cy="64" r="8"/><path d="M72,312H264a8,8,0,0,0,8-8V144a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V304A8,8,0,0,0,72,312Zm107.406-31.207L200,253.333,232,296H188.53ZM169.87,296H102.13L136,239.549ZM80,152H256V296h-4l-45.6-60.8a8,8,0,0,0-12.8,0l-23.083,30.778L142.86,219.884a8,8,0,0,0-13.72,0L83.47,296H80Z"/><circle cx="176" cy="192" r="8"/><path d="M440,136H344a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"/><path d="M312,184h96a8,8,0,0,0,0-16H312a8,8,0,0,0,0,16Z"/><path d="M312,216h48a8,8,0,0,0,0-16H312a8,8,0,0,0,0,16Z"/><path d="M440,200H408a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z"/><path d="M344,328H328a24,24,0,0,0,0,48h16a24,24,0,0,0,0-48Zm0,32H328a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z"/><path d="M312,312h96a8,8,0,0,0,8-8V272a8,8,0,0,0-8-8H312a8,8,0,0,0-8,8v32A8,8,0,0,0,312,312Zm88-16H384V280h16Zm-80-16h48v16H320Z"/><path d="M424,328H408a24,24,0,0,0,0,48h16a24,24,0,0,0,0-48Zm0,32H408a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z"/><path d="M312,248h32a8,8,0,0,0,0-16H312a8,8,0,0,0,0,16Z"/><circle cx="312" cy="144" r="8"/><path d="M168,424H104a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/><circle cx="72" cy="432" r="8"/><path d="M304,424H240a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/><circle cx="208" cy="432" r="8"/><path d="M440,424H376a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/><circle cx="344" cy="432" r="8"/><path d="M72,392H264a8,8,0,0,0,8-8V336a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v48A8,8,0,0,0,72,392Zm88-16H128V344h32Zm16-32h32v32H176Zm80,32H224V344h32ZM80,344h32v32H80Z"/></svg>
    `,content:{type:"Products"},category:"Basic"})},Le=u=>{u.Components.addType("Three.Js",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,traits:[{type:"text",name:"delay",placeholder:"Nhập số khoảng thời gian chuyển slide (ms)",changeProp:!0}],delay:"https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj","script-props":["delay"],script:function(S){function h(){const f=document.querySelector("#c"),g=new THREE.WebGLRenderer({canvas:f}),A=45,V=2,k=.1,E=100,j=new THREE.PerspectiveCamera(A,V,k,E);j.position.set(0,10,20);const e=new THREE.OrbitControls(j,f);e.target.set(0,5,0),e.update();const c=new THREE.Scene;c.background=new THREE.Color("black");{const r=new THREE.TextureLoader().load("https://threejsfundamentals.org/threejs/resources/images/checker.png");r.wrapS=THREE.RepeatWrapping,r.wrapT=THREE.RepeatWrapping,r.magFilter=THREE.NearestFilter;const d=40/2;r.repeat.set(d,d);const y=new THREE.PlaneBufferGeometry(40,40),s=new THREE.MeshPhongMaterial({map:r,side:THREE.DoubleSide}),x=new THREE.Mesh(y,s);x.rotation.x=Math.PI*-.5,c.add(x)}{const d=new THREE.HemisphereLight(11657727,12155424,1);c.add(d)}{const r=new THREE.DirectionalLight(16777215,1);r.position.set(5,10,2),c.add(r),c.add(r.target)}const n=new THREE.OBJLoader2;n.loadMtl("https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.mtl",null,m=>{n.setMaterials(m),n.load(S.delay,i=>{const r=i.detail.loaderRootNode;c.add(r)})});function b(m){const i=m.domElement,r=i.clientWidth,d=i.clientHeight,y=i.width!==r||i.height!==d;return y&&m.setSize(r,d,!1),y}function o(){if(b(g)){const m=g.domElement;j.aspect=m.clientWidth/m.clientHeight,j.updateProjectionMatrix()}g.render(c,j),requestAnimationFrame(o)}requestAnimationFrame(o)}h()},content:`
        <style>
        #c{
          width: 100%;
          height: 100%;
        }
        </style>
        <canvas id="c"></canvas>
        `}}}),u.Blocks.add("Three.Js",{label:"Three.Js",media:`
    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 218.207 218.207" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M214.31,27.276H3.897C1.743,27.276,0,29.019,0,31.172v27.276v77.931v50.655c0,2.154,1.743,3.897,3.897,3.897H214.31 c2.154,0,3.897-1.743,3.897-3.897v-50.655V58.448V31.172C218.207,29.019,216.464,27.276,214.31,27.276z M7.793,62.345h35.069 v70.138H7.793V62.345z M210.414,132.483h-11.69V62.345h11.69V132.483z M210.414,54.552h-15.586c-2.154,0-3.897,1.743-3.897,3.897 v77.931c0,2.154,1.743,3.897,3.897,3.897h15.586v42.862H7.793v-0.001v-42.862h38.966c2.154,0,3.897-1.743,3.897-3.897V58.448 c0-2.154-1.743-3.897-3.897-3.897H7.793V35.069h202.621V54.552z"></path> <circle cx="113" cy="163.655" r="7.793"></circle> <path d="M66.241,140.277h109.103c2.154,0,3.897-1.743,3.897-3.897V58.448c0-2.153-1.743-3.896-3.896-3.896H66.241 c-2.154,0-3.897,1.743-3.897,3.897v77.931C62.344,138.534,64.087,140.277,66.241,140.277z M70.138,62.345h101.31v70.138H70.138 V62.345z"></path> <rect x="66.241" y="159.759" width="11.69" height="7.793"></rect> <rect x="85.724" y="159.759" width="11.69" height="7.793"></rect> <rect x="128.586" y="159.759" width="11.69" height="7.793"></rect> <rect x="148.069" y="159.759" width="11.69" height="7.793"></rect> </g> </g> </g> </g></svg>
    `,content:{type:"Three.Js"},category:"Basic"})},Se={model3d:fe,imageLink:ve,masonry:ye,header:we,footer:xe,user:Ce,socical:ke,container:_e,slider:be,imgSlider:He,threeJs:Me,products:Ve,test:Le},je=(u,S)=>{u.Panels.addButton("options",[{id:"link-page",className:"fa fa-link",attributes:{title:"Link"},command:"open-new-page",active:!1,togglable:!1}]),u.Commands.add("open-new-page",{run(h,f){S=="trang-chu"?window.open("/","_blank"):window.open(`/${S}`,"_blank")}})},Te=u=>{u.Panels.addButton("views",[{id:"open-code",attributes:{title:"Open Code"},className:"fa fa-file-code-o",command:"open-code",togglable:!1}])},Ee=u=>{u.Panels.addButton("options",[{id:"google-fonts",className:"fa-solid fa-font-case",attributes:{title:"Cài đặt kiểu chữ"},command:"open-fonts",active:!1}])},le={openPage:je,openCode:Te,openGoogleFont:Ee},Ae=()=>T.jsx(T.Fragment,{children:T.jsx("div",{className:"gjs-one-bg",style:{height:40},children:T.jsxs(ie,{children:[T.jsxs(G,{className:"overflow-hidden",span:20,children:[T.jsxs("div",{className:"flex justify-between items-center p-2 border",style:{height:40},children:[T.jsx(D.Input,{active:!0,size:"default",style:{height:25}}),T.jsx(D.Input,{className:"float-right",active:!0,size:"default",style:{height:25}})]}),T.jsx("div",{className:"bg-white flex justify-center items-center",style:{height:"calc(100vh - 100px)"},children:T.jsxs("div",{"aria-label":"Orange and tan hamster running in a metal wheel",role:"img",className:"wheel-and-hamster",children:[T.jsx("div",{className:"wheel"}),T.jsx("div",{className:"hamster",children:T.jsxs("div",{className:"hamster__body",children:[T.jsxs("div",{className:"hamster__head",children:[T.jsx("div",{className:"hamster__ear"}),T.jsx("div",{className:"hamster__eye"}),T.jsx("div",{className:"hamster__nose"})]}),T.jsx("div",{className:"hamster__limb hamster__limb--fr"}),T.jsx("div",{className:"hamster__limb hamster__limb--fl"}),T.jsx("div",{className:"hamster__limb hamster__limb--br"}),T.jsx("div",{className:"hamster__limb hamster__limb--bl"}),T.jsx("div",{className:"hamster__tail"})]})}),T.jsx("div",{className:"spoke"})]})})]}),T.jsxs(G,{className:"border gjs-one-bg overflow-hidden",span:4,style:{height:"calc(100vh - 56px)"},children:[T.jsx("div",{className:"flex justify-center items-center p-2 border-b",style:{height:38},children:T.jsx(D.Button,{active:!0,block:!0,style:{height:25}})}),T.jsx("div",{className:"flex justify-center items-center p-2 border-b",style:{height:38},children:T.jsx(D.Button,{active:!0,block:!0,style:{height:25}})}),T.jsxs(ie,{className:"p-2",gutter:[12,12],children:[T.jsx(G,{span:12,children:T.jsx(D.Image,{active:!0,style:{width:"100%"}})}),T.jsx(G,{span:12,children:T.jsx(D.Image,{active:!0,style:{width:"100%"}})}),T.jsx(G,{span:12,children:T.jsx(D.Image,{active:!0,style:{width:"100%"}})}),T.jsx(G,{span:12,children:T.jsx(D.Image,{active:!0,style:{width:"100%"}})}),T.jsx(G,{span:12,children:T.jsx(D.Image,{active:!0,style:{width:"100%"}})}),T.jsx(G,{span:12,children:T.jsx(D.Image,{active:!0,style:{width:"100%"}})}),T.jsx(G,{span:12,children:T.jsx(D.Image,{active:!0,style:{width:"100%"}})}),T.jsx(G,{span:12,children:T.jsx(D.Image,{active:!0,style:{width:"100%"}})}),T.jsx(G,{span:12,children:T.jsx(D.Image,{active:!0,style:{width:"100%"}})}),T.jsx(G,{span:12,children:T.jsx(D.Image,{active:!0,style:{width:"100%"}})}),T.jsx(G,{span:12,children:T.jsx(D.Image,{active:!0,style:{width:"100%"}})}),T.jsx(G,{span:12,children:T.jsx(D.Image,{active:!0,style:{width:"100%"}})})]})]})]})})}),De=({data:u,scripts:S,styles:h,pluginss:f,plugins:g,pluginsOpts:A,savePage:V,slug:k,folder:E,configGrapeJs:j,height:e="100vh"})=>{const c=re.useRef(null),[n,b]=re.useState(!0),o=i=>{i.Panels.addButton("options",[{id:"save-page",className:"fa fa-upload",attributes:{title:"Public"},command:"save-page",active:!1,togglable:!1}]),i.Commands.add("save-page",{run(r,d){var y=r.getHtml().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,""),s=r.getCss(),x=r.getJs();const p=r.getProjectData();V(p,{html:y,css:s,js:x})}})},m=i=>{c.current=i,Se.masonry(i,k),le.openPage(i,k),i.loadProjectData(u),i.Components.addType("image",{model:{defaults:{name:"Ảnh",resizable:!0,droppable:!1,copyable:!0,traits:["alt"],attributes:{"data-fancybox":"gallery"}}}}),le.openPage(i,k),he(i),j(i),o(i),i.on("asset:open",()=>{const r=i.AssetManager;console.log(r)}),b(!1)};return T.jsxs(T.Fragment,{children:[n&&T.jsx(Ae,{}),T.jsx(ge,{className:"overflow-hidden",grapesjs:"https://unpkg.com/grapesjs",grapesjsCss:"https://unpkg.com/grapesjs/dist/css/grapes.min.css",onEditor:m,i18n:{locale:"vi"},plugins:f,options:{height:e,canvas:{scripts:S,styles:h},plugins:g,pluginsOpts:A,storageManager:!1,undoManager:{trackSelection:!1},canvasCss:`
                        .gjs-dashed *[data-gjs-highlightable]{
                            outline-offset: -1px !important;
                        }
                        .gjs-selected {
                            outline: 3px solid #1677ff !important;
                            outline-offset: -2px;
                        }
                        .gjs-hovered{
                            outline: 2px solid #1677ff !important;
                        }
                        img{
                            width: 100%;
                        }
                    `,assetManager:{uploadFile:i=>{se("file","Kiên nhẫn đang tải file và resize file","Các tấm ảnh có width > 1300 sẽ được tối ưu hóa!");const r=i.dataTransfer?i.dataTransfer.files:i.target.files;if(!r||r.length===0){q("file","Không có file nào được tải lên");return}const d=new FormData;d.append("file",r[0]),d.append("folder",`${E}`),ce.uploadFile(d).then(y=>{c.current.AssetManager.add({type:"image",src:`${X}/uploads/${y}`,name:`${y}`}),J("file","Tải lên file thành công")}).catch(()=>{q("file","Tải lên file thất bại","Tấm ảnh không được tối ưu hóa!")})}},styleManager:{sectors:[{name:"General",buildProps:["float","display","position","top","right","left","bottom"],properties:[{name:"Alignment",property:"float",type:"radio",defaults:"none",list:[{value:"none",className:"fa fa-times"},{value:"left",className:"fa fa-align-left"},{value:"right",className:"fa fa-align-right"}]},{property:"position",type:"select"}]},{name:"Flex",open:!1,properties:[{name:"Flex Container",property:"display",type:"select",defaults:"block",list:[{value:"block",name:"Disable"},{value:"flex",name:"Enable"}]},{name:"Flex Parent",property:"label-parent-flex",type:"integer"},{name:"Direction",property:"flex-direction",type:"radio",defaults:"row",list:[{value:"row",name:"Row",className:"icons-flex icon-dir-row",title:"Row"},{value:"row-reverse",name:"Row reverse",className:"icons-flex icon-dir-row-rev",title:"Row reverse"},{value:"column",name:"Column",title:"Column",className:"icons-flex icon-dir-col"},{value:"column-reverse",name:"Column reverse",title:"Column reverse",className:"icons-flex icon-dir-col-rev"}]},{name:"Justify",property:"justify-content",type:"radio",defaults:"flex-start",list:[{value:"flex-start",className:"icons-flex icon-just-start",title:"Start"},{value:"flex-end",title:"End",className:"icons-flex icon-just-end"},{value:"space-between",title:"Space between",className:"icons-flex icon-just-sp-bet"},{value:"space-around",title:"Space around",className:"icons-flex icon-just-sp-ar"},{value:"center",title:"Center",className:"icons-flex icon-just-sp-cent"}]},{name:"Align",property:"align-items",type:"radio",defaults:"flex-start",list:[{value:"flex-start",title:"Start",className:"icons-flex icon-al-start"},{value:"flex-end",title:"End",className:"icons-flex icon-al-end"},{value:"stretch",title:"Stretch",className:"icons-flex icon-al-str"},{value:"center",title:"Center",className:"icons-flex icon-al-center"}]},{type:"aris-custom-prop",property:"gap",default:"15",min:0},{name:"Flex Children",property:"label-parent-flex",type:"integer"},{name:"Order",property:"order",type:"integer",defaults:0,min:0},{name:"Flex",property:"flex",type:"composite",properties:[{name:"Grow",property:"flex-grow",type:"integer",defaults:0,min:0},{name:"Shrink",property:"flex-shrink",type:"integer",defaults:0,min:0},{name:"Basis",property:"flex-basis",type:"integer",units:["px","%",""],unit:"",defaults:"auto"}]},{name:"Align",property:"align-self",type:"radio",defaults:"auto",list:[{value:"auto",name:"Auto"},{value:"flex-start",title:"Start",className:"icons-flex icon-al-start"},{value:"flex-end",title:"End",className:"icons-flex icon-al-end"},{value:"stretch",title:"Stretch",className:"icons-flex icon-al-str"},{value:"center",title:"Center",className:"icons-flex icon-al-center"}]}]},{name:"Dimension",open:!1,buildProps:["width","flex-width","height","max-width","min-width","max-height","min-height","margin","padding"],properties:[{id:"flex-width",type:"integer",name:"Width",units:["px","%"],property:"flex-basis",toRequire:1},{property:"margin",properties:[{name:"Top",property:"margin-top"},{name:"Right",property:"margin-right"},{name:"Bottom",property:"margin-bottom"},{name:"Left",property:"margin-left"}]},{property:"padding",properties:[{name:"Top",property:"padding-top"},{name:"Right",property:"padding-right"},{name:"Bottom",property:"padding-bottom"},{name:"Left",property:"padding-left"}]}]},{name:"Typography",open:!1,buildProps:["font-family","font-size","font-weight","letter-spacing","color","line-height","text-align","text-decoration","text-shadow"],properties:[{name:"Font",property:"font-family"},{name:"Weight",property:"font-weight"},{name:"Font color",property:"color"},{property:"text-align",type:"radio",defaults:"left",list:[{value:"left",name:"Left",className:"fa fa-align-left"},{value:"center",name:"Center",className:"fa fa-align-center"},{value:"right",name:"Right",className:"fa fa-align-right"},{value:"justify",name:"Justify",className:"fa fa-align-justify"}]},{property:"text-decoration",type:"radio",defaults:"none",list:[{value:"none",name:"None",className:"fa fa-times"},{value:"underline",name:"underline",className:"fa fa-underline"},{value:"line-through",name:"Line-through",className:"fa fa-strikethrough"}]},{property:"text-shadow",properties:[{name:"X position",property:"text-shadow-h"},{name:"Y position",property:"text-shadow-v"},{name:"Blur",property:"text-shadow-blur"},{name:"Color",property:"text-shadow-color"}]}]},{name:"Image",open:!1,properties:[{type:"aris-custom-select",property:"object-fit",options:[{name:"Cover",value:"cover"},{name:"Fill",value:"fill"},{name:"Scale Down",value:"scale-down"},{name:"Contain",value:"contain"},{name:"None",value:""}],default:"no"}]},{name:"Decorations",open:!1,buildProps:["opacity","border-radius","border","box-shadow","background"],properties:[{type:"slider",property:"opacity",defaults:1,step:.01,max:1,min:0},{property:"border-radius",properties:[{name:"Top",property:"border-top-left-radius"},{name:"Right",property:"border-top-right-radius"},{name:"Bottom",property:"border-bottom-left-radius"},{name:"Left",property:"border-bottom-right-radius"}]},{property:"box-shadow",properties:[{name:"X position",property:"box-shadow-h"},{name:"Y position",property:"box-shadow-v"},{name:"Blur",property:"box-shadow-blur"},{name:"Spread",property:"box-shadow-spread"},{name:"Color",property:"box-shadow-color"},{name:"Shadow type",property:"box-shadow-type"}]}]},{name:"Extra",open:!1,buildProps:["transition","perspective","transform"],properties:[{property:"transition",properties:[{name:"Property",property:"transition-property"},{name:"Duration",property:"transition-duration"},{name:"Easing",property:"transition-timing-function"}]},{property:"transform",properties:[{name:"Rotate X",property:"transform-rotate-x"},{name:"Rotate Y",property:"transform-rotate-y"},{name:"Rotate Z",property:"transform-rotate-z"},{name:"Scale X",property:"transform-scale-x"},{name:"Scale Y",property:"transform-scale-y"},{name:"Scale Z",property:"transform-scale-z"}]}]}]}}})]})};var de={exports:{}};/*! grapesjs-preset-webpage - 1.0.3 */(function(u,S){(function(h,f){u.exports=f()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:te,()=>(()=>{var h={d:(o,m)=>{for(var i in m)h.o(m,i)&&!h.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:m[i]})},o:(o,m)=>Object.prototype.hasOwnProperty.call(o,m),r:o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},f={};h.r(f),h.d(f,{default:()=>b});var g=function(){return g=Object.assign||function(o){for(var m,i=1,r=arguments.length;i<r;i++)for(var d in m=arguments[i])Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d]);return o},g.apply(this,arguments)},A="gjs-open-import-webpage",V="set-device-desktop",k="set-device-tablet",E="set-device-mobile",j="canvas-clear",e=function(){return e=Object.assign||function(o){for(var m,i=1,r=arguments.length;i<r;i++)for(var d in m=arguments[i])Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d]);return o},e.apply(this,arguments)};const c=function(o,m){var i=o.Commands,r=m.textCleanCanvas;(function(d,y){var s=d.getConfig("stylePrefix"),x=y.modalImportLabel,p=y.modalImportContent;d.Commands.add(A,{codeViewer:null,container:null,run:function(H){var w=typeof p=="function"?p(H):p,a=this.getCodeViewer();H.Modal.open({title:y.modalImportTitle,content:this.getContainer()}).onceClose(function(){return H.stopCommand(A)}),a.setContent(w??""),a.refresh(),setTimeout(function(){return a.focus()},0)},stop:function(){d.Modal.close()},getContainer:function(){if(!this.container){var H=this.getCodeViewer(),w=document.createElement("div");if(w.className="".concat(s,"import-container"),x){var a=document.createElement("div");a.className="".concat(s,"import-label"),a.innerHTML=x,w.appendChild(a)}w.appendChild(H.getElement());var t=document.createElement("button");t.type="button",t.innerHTML=y.modalImportButton,t.className="".concat(s,"btn-prim ").concat(s,"btn-import"),t.onclick=function(){d.Css.clear(),d.setComponents(H.getContent().trim()),d.Modal.close()},w.appendChild(t),this.container=w}return this.container},getCodeViewer:function(){return this.codeViewer||(this.codeViewer=d.CodeManager.createViewer(e({codeName:"htmlmixed",theme:"hopscotch",readOnly:!1},y.importViewerOptions))),this.codeViewer}})})(o,m),i.add(V,{run:function(d){return d.setDevice("Desktop")},stop:function(){}}),i.add(k,{run:function(d){return d.setDevice("Tablet")},stop:function(){}}),i.add(E,{run:function(d){return d.setDevice("Mobile portrait")},stop:function(){}}),i.add(j,function(d){return confirm(r)&&d.runCommand("core:canvas-clear")})};var n=function(){return n=Object.assign||function(o){for(var m,i=1,r=arguments.length;i<r;i++)for(var d in m=arguments[i])Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d]);return o},n.apply(this,arguments)};const b=function(o,m){m===void 0&&(m={});var i=n({blocks:["link-block","quote","text-basic"],block:function(){return{}},modalImportTitle:"Import",modalImportButton:"Import",modalImportLabel:"",modalImportContent:"",importViewerOptions:{},textCleanCanvas:"Are you sure you want to clear the canvas?",showStylesOnChange:!0,useCustomTheme:!0},m);if(i.useCustomTheme&&typeof window<"u"){var r="gjs-",d="";[["one","#463a3c"],["two","#b9a5a6"],["three","#804f7b"],["four","#d97aa6"]].forEach(function(s){var x=s[0],p=s[1];d+=`
        .`.concat(r).concat(x,`-bg {
          background-color: `).concat(p,`;
        }

        .`).concat(r).concat(x,`-color {
          color: `).concat(p,`;
        }

        .`).concat(r).concat(x,`-color-h:hover {
          color: `).concat(p,`;
        }
      `)});var y=document.createElement("style");y.innerText=d,document.head.appendChild(y)}(function(s,x){var p=function(H,w){x.blocks.indexOf(H)>=0&&s.Blocks.add(H,g(g({select:!0,category:"Basic"},w),x.block(H)))};p("link-block",{label:"Link Block",media:`<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
    </svg>`,content:{type:"link",editable:!1,droppable:!0,style:{display:"inline-block",padding:"5px","min-height":"50px","min-width":"50px"}}}),p("quote",{label:"Quote",media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
    </svg>`,content:`<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`}),p("text-basic",{label:"Text section",media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" />
    </svg>`,content:`<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`})})(o,i),c(o,i),function(s,x){var p=s.Panels,H=s.getConfig(),w="sw-visibility",a="export-template",t="open-sm",l="open-tm",v="open-layers",_="open-blocks",M="fullscreen",C="preview",L='style="display: block; max-width:22px"';H.showDevices=!1,p.getPanels().reset([{id:"commands",buttons:[{}]},{id:"devices-c",buttons:[{id:V,command:V,active:!0,label:"<svg ".concat(L,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
        </svg>`)},{id:k,command:k,label:"<svg ".concat(L,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />
        </svg>`)},{id:E,command:E,label:"<svg ".concat(L,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
        </svg>`)}]},{id:"options",buttons:[{id:w,command:w,context:w,label:"<svg ".concat(L,` viewBox="0 0 24 24">
        <path fill="currentColor" d="M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z" />
    </svg>`)},{id:C,context:C,command:function(){return s.runCommand(C)},label:"<svg ".concat(L,' viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>')},{id:M,command:M,context:M,label:"<svg ".concat(L,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
        </svg>`)},{id:a,command:function(){return s.runCommand(a)},label:"<svg ".concat(L,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
        </svg>`)},{id:"undo",command:function(){return s.runCommand("core:undo")},label:"<svg ".concat(L,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />
        </svg>`)},{id:"redo",command:function(){return s.runCommand("core:redo")},label:"<svg ".concat(L,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />
        </svg>`)},{id:A,command:function(){return s.runCommand(A)},label:"<svg ".concat(L,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
        </svg>`)},{id:j,command:function(){return s.runCommand(j)},label:"<svg ".concat(L,` viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>`)}]},{id:"views",buttons:[{id:t,command:t,active:!0,label:"<svg ".concat(L,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" />
        </svg>`)},{id:l,command:l,label:"<svg ".concat(L,` viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
      </svg>`)},{id:v,command:v,label:"<svg ".concat(L,` viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
      </svg>`)},{id:_,command:_,label:"<svg ".concat(L,` viewBox="0 0 24 24">
          <path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
      </svg>`)}]}]);var P=p.getButton("views",_);s.on("load",function(){return P==null?void 0:P.set("active",!0)}),x.showStylesOnChange&&s.on("component:selected",function(){var B=p.getButton("views",t),R=p.getButton("views",v);R&&R.get("active")||!s.getSelected()||B==null||B.set("active",!0)})}(o,i)};return f})())})(de);var Re=de.exports;const Ge=ne(Re);var pe={exports:{}};/*! grapesjs-blocks-basic - 1.0.2 */(function(u,S){(function(h,f){u.exports=f()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:te,()=>(()=>{var h={d:(k,E)=>{for(var j in E)h.o(E,j)&&!h.o(k,j)&&Object.defineProperty(k,j,{enumerable:!0,get:E[j]})},o:(k,E)=>Object.prototype.hasOwnProperty.call(k,E),r:k=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(k,"__esModule",{value:!0})}},f={};h.r(f),h.d(f,{default:()=>V});var g=function(){return g=Object.assign||function(k){for(var E,j=1,e=arguments.length;j<e;j++)for(var c in E=arguments[j])Object.prototype.hasOwnProperty.call(E,c)&&(k[c]=E[c]);return k},g.apply(this,arguments)},A=function(){return A=Object.assign||function(k){for(var E,j=1,e=arguments.length;j<e;j++)for(var c in E=arguments[j])Object.prototype.hasOwnProperty.call(E,c)&&(k[c]=E[c]);return k},A.apply(this,arguments)};const V=function(k,E){E===void 0&&(E={}),function(j,e){var c=j.BlockManager,n=e.category,b=e.blocks,o=e.stylePrefix,m=e.flexGrid,i=e.rowHeight,r=e.addBasicStyle,d="".concat(o,"row"),y="".concat(o,"cell"),s=m?`
    .`.concat(d,` {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
      padding: 10px;
    }
    @media (max-width: 768px) {
      .`).concat(d,` {
        flex-wrap: wrap;
      }
    }`):`
    .`.concat(d,` {
      display: table;
      padding: 10px;
      width: 100%;
    }
    @media (max-width: 768px) {
      .`).concat(o,"cell, .").concat(o,"cell30, .").concat(o,`cell70 {
        width: 100%;
        display: block;
      }
    }`),x=m?`
    .`.concat(y,` {
      min-height: `).concat(i,`px;
      flex-grow: 1;
      flex-basis: 100%;
    }`):`
    .`.concat(y,` {
      width: 8%;
      display: table-cell;
      height: `).concat(i,`px;
    }`),p=`
  .`.concat(o,`cell30 {
    width: 30%;
  }`),H=`
  .`.concat(o,`cell70 {
    width: 70%;
  }`),w=1,a={tl:0,tc:0,tr:0,cl:0,cr:0,bl:0,br:0,minDim:w},t=g(g({},a),{cr:1,bc:0,currentUnit:1,minDim:w,step:.2});m&&(t.keyWidth="flex-basis");var l={class:d,"data-gjs-droppable":".".concat(y),"data-gjs-resizable":a,"data-gjs-name":"Row"},v={class:y,"data-gjs-draggable":".".concat(d),"data-gjs-resizable":t,"data-gjs-name":"Cell"};m&&(v["data-gjs-unstylable"]=["width"],v["data-gjs-stylable-require"]=["flex-basis"]);var _=[".".concat(d),".".concat(y)];j.on("selector:add",function(R){return _.indexOf(R.getFullName())>=0&&R.set("private",1)});var M=function(R){var N=[];for(var z in R){var I=R[z];I=I instanceof Array||I instanceof Object?JSON.stringify(I):I,N.push("".concat(z,"=").concat("'".concat(I,"'")))}return N.length?" ".concat(N.join(" ")):""},C=function(R){return b.indexOf(R)>=0},L=M(l),P=M(v),B={category:n,select:!0};C("column1")&&c.add("column1",g(g({},B),{label:e.labelColumn1,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
      </svg>`,content:"<div ".concat(L,`>
        <div `).concat(P,`></div>
      </div>
      `).concat(r?`<style>
          `.concat(s,`
          `).concat(x,`
        </style>`):"")})),C("column2")&&c.add("column2",g(g({},B),{label:e.labelColumn2,media:`<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
      </svg>`,content:"<div ".concat(L,`>
        <div `).concat(P,`></div>
        <div `).concat(P,`></div>
      </div>
      `).concat(r?`<style>
          `.concat(s,`
          `).concat(x,`
        </style>`):"")})),C("column3")&&c.add("column3",g(g({},B),{label:e.labelColumn3,media:`<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>
      </svg>`,content:"<div ".concat(L,`>
        <div `).concat(P,`></div>
        <div `).concat(P,`></div>
        <div `).concat(P,`></div>
      </div>
      `).concat(r?`<style>
          `.concat(s,`
          `).concat(x,`
        </style>`):"")})),C("column3-7")&&c.add("column3-7",g(g({},B),{label:e.labelColumn37,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"/>
      </svg>`,content:"<div ".concat(L,`>
        <div `).concat(P," style='").concat(m?"flex-basis":"width",`: 30%;'></div>
        <div `).concat(P," style='").concat(m?"flex-basis":"width",`: 70%;'></div>
      </div>
      `).concat(r?`<style>
          `.concat(s,`
          `).concat(x,`
          `).concat(p,`
          `).concat(H,`
        </style>`):"")})),C("text")&&c.add("text",g(g({},B),{activate:!0,label:e.labelText,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
      </svg>`,content:{type:"text",content:"Insert your text here",style:{padding:"10px"}}})),C("link")&&c.add("link",g(g({},B),{label:e.labelLink,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
      </svg>`,content:{type:"link",content:"Link",style:{color:"#d983a6"}}})),C("image")&&c.add("image",g(g({},B),{activate:!0,label:e.labelImage,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
      </svg>`,content:{style:{color:"black"},type:"image"}})),C("video")&&c.add("video",g(g({},B),{label:e.labelVideo,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
      </svg>`,content:{type:"video",src:"img/video2.webm",style:{height:"350px",width:"615px"}}})),C("map")&&c.add("map",g(g({},B),{label:e.labelMap,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z" />
      </svg>`,content:{type:"map",style:{height:"350px"}}}))}(k,A({blocks:["column1","column2","column3","column3-7","text","link","image","video","map"],flexGrid:!1,stylePrefix:"gjs-",addBasicStyle:!0,category:"Basic",labelColumn1:"1 Column",labelColumn2:"2 Columns",labelColumn3:"3 Columns",labelColumn37:"2 Columns 3/7",labelText:"Text",labelLink:"Link",labelImage:"Image",labelVideo:"Video",labelMap:"Map",rowHeight:75},E))};return f})())})(pe);var Be=pe.exports;const Fe=ne(Be);var ue={exports:{}};/*! grapesjs-style-bg - 2.0.2 */(function(u,S){(function(h,f){u.exports=f()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:te,()=>(()=>{var h={180:function(V){var k;k=()=>(()=>{var E={9:function(n){n.exports=function(b){function o(i){if(m[i])return m[i].exports;var r=m[i]={i,l:!1,exports:{}};return b[i].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var m={};return o.m=b,o.c=m,o.d=function(i,r,d){o.o(i,r)||Object.defineProperty(i,r,{configurable:!1,enumerable:!0,get:d})},o.n=function(i){var r=i&&i.__esModule?function(){return i.default}:function(){return i};return o.d(r,"a",r),r},o.o=function(i,r){return Object.prototype.hasOwnProperty.call(i,r)},o.p="",o(o.s=1)}([function(b,o,m){Object.defineProperty(o,"__esModule",{value:!0}),o.on=function(i,r,d){r=r.split(/\s+/);for(var y=0;y<r.length;++y)i.addEventListener(r[y],d)},o.off=function(i,r,d){r=r.split(/\s+/);for(var y=0;y<r.length;++y)i.removeEventListener(r[y],d)},o.isFunction=function(i){return typeof i=="function"},o.isDef=function(i){return i!==void 0},o.getPointerEvent=function(i){return i.touches&&i.touches[0]||i}},function(b,o,m){var i=function(r){return r&&r.__esModule?r:{default:r}}(m(2));b.exports=function(r){return new i.default(r)}},function(b,o,m){function i(H){return H&&H.__esModule?H:{default:H}}Object.defineProperty(o,"__esModule",{value:!0});var r=function(){function H(w,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(w,l.key,l)}}return function(w,a,t){return a&&H(w.prototype,a),t&&H(w,t),w}}(),d=i(m(3)),y=i(m(4)),s=m(0),x=function(H,w){return H.position-w.position},p=function(H){function w(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(function(M,C){if(!(M instanceof C))throw new TypeError("Cannot call a class as a function")})(this,w);var t=function(M,C){if(!M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!C||typeof C!="object"&&typeof C!="function"?M:C}(this,(w.__proto__||Object.getPrototypeOf(w)).call(this));a=Object.assign({},a);var l={pfx:"grp",el:".grp",colorEl:"",min:0,max:100,direction:"90deg",type:"linear",height:"30px",width:"100%",emptyColor:"#000",onValuePos:function(M){return parseInt(M)}};for(var v in l)v in a||(a[v]=l[v]);var _=a.el;if(!((_=typeof _=="string"?document.querySelector(_):_)instanceof HTMLElement))throw"Element not found, given "+_;return t.el=_,t.handlers=[],t.options=a,t.on("handler:color:change",function(M,C){return t.change(C)}),t.on("handler:position:change",function(M,C){return t.change(C)}),t.on("handler:remove",function(M){return t.change(1)}),t.on("handler:add",function(M){return t.change(1)}),t.render(),t}return function(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(a,t):a.__proto__=t)}(w,H),r(w,[{key:"destroy",value:function(){var a=this;this.clear(),this.e={},["el","handlers","options","colorPicker"].forEach(function(t){return a[t]=0}),["previewEl","wrapperEl","sandEl"].forEach(function(t){var l=a[t];l&&l.parentNode&&l.parentNode.removeChild(l),delete a[t]})}},{key:"setColorPicker",value:function(a){this.colorPicker=a}},{key:"getValue",value:function(a,t){var l=this.getColorValue(),v=a||this.getType(),_=["top","left","bottom","right","center"],M=t||this.getDirection();return["linear","repeating-linear"].indexOf(v)>=0&&_.indexOf(M)>=0&&(M=M==="center"?"to right":"to "+M),["radial","repeating-radial"].indexOf(v)>=0&&_.indexOf(M)>=0&&(M="circle at "+M),l?v+"-gradient("+M+", "+l+")":""}},{key:"getSafeValue",value:function(a,t){var l=this.previewEl,v=this.getValue(a,t);if(!this.sandEl&&(this.sandEl=document.createElement("div")),!l||!v)return"";for(var _=this.sandEl.style,M=[v].concat(function(P){if(Array.isArray(P)){for(var B=0,R=Array(P.length);B<P.length;B++)R[B]=P[B];return R}return Array.from(P)}(this.getPrefixedValues(a,t))),C=void 0,L=0;L<M.length&&(C=M[L],_.backgroundImage=C,_.backgroundImage!=C);L++);return _.backgroundImage}},{key:"setValue",value:function(){var a=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=this.type,_=this.direction,M=t.indexOf("(")+1,C=t.lastIndexOf(")"),L=t.substring(M,C),P=L.split(/,(?![^(]*\)) /);if(this.clear(l),L){P.length>2&&(_=P.shift());var B=void 0;["repeating-linear","repeating-radial","linear","radial"].forEach(function(R){t.indexOf(function(N){return N+"-gradient("}(R))>-1&&!B&&(B=1,v=R)}),this.setDirection(_,l),this.setType(v,l),P.forEach(function(R){var N=R.split(" "),z=parseFloat(N.pop()),I=N.join("");a.addHandler(z,I,0,l)}),this.updatePreview()}else this.updatePreview()}},{key:"getColorValue",value:function(){var a=this.handlers;return a.sort(x),(a=a.length==1?[a[0],a[0]]:a).map(function(t){return t.getValue()}).join(", ")}},{key:"getPrefixedValues",value:function(a,t){var l=this.getValue(a,t);return["-moz-","-webkit-","-o-","-ms-"].map(function(v){return""+v+l})}},{key:"change",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.updatePreview(),!t.silent&&this.emit("change",a)}},{key:"setDirection",value:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.options.direction=a;var l=t.complete,v=l===void 0?1:l;this.change(v,t)}},{key:"getDirection",value:function(){return this.options.direction}},{key:"setType",value:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.options.type=a;var l=t.complete,v=l===void 0?1:l;this.change(v,t)}},{key:"getType",value:function(){return this.options.type}},{key:"addHandler",value:function(a,t){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},_=new y.default(this,a,t,l,v);return!v.silent&&this.emit("handler:add",_),_}},{key:"getHandler",value:function(a){return this.handlers[a]}},{key:"getHandlers",value:function(){return this.handlers}},{key:"clear",value:function(){for(var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=this.handlers,l=t.length-1;l>=0;l--)t[l].remove(a)}},{key:"getSelected",value:function(){for(var a=this.getHandlers(),t=0;t<a.length;t++){var l=a[t];if(l.isSelected())return l}return null}},{key:"updatePreview",value:function(){var a=this.previewEl;a&&(a.style.backgroundImage=this.getValue("linear","to right"))}},{key:"initEvents",value:function(){var a=this,t=this.previewEl;t&&(0,s.on)(t,"click",function(l){var v=a.options,_=v.min,M=v.max,C={w:t.clientWidth,h:t.clientHeight},L=l.offsetX-t.clientLeft,P=l.offsetY-t.clientTop,B=L/C.w*100;if(!(B>M||B<_||P>C.h||P<0)){var R=document.createElement("canvas"),N=R.getContext("2d");R.width=C.w,R.height=C.h;var z=N.createLinearGradient(0,0,C.w,C.h);a.getHandlers().forEach(function($){return z.addColorStop($.position/100,$.color)}),N.fillStyle=z,N.fillRect(0,0,R.width,R.height),R.style.background="black";var I=R.getContext("2d").getImageData(L,P,1,1).data,Z="rgba("+I[0]+", "+I[1]+", "+I[2]+", "+I[3]+")",O=Z=="rgba(0, 0, 0, 0)"?v.emptyColor:Z;a.addHandler(B,O)}})}},{key:"render",value:function(){var a=this.options,t=this.el,l=a.pfx,v=a.height,_=a.width;if(t){var M=l+"-wrapper",C=l+"-preview";t.innerHTML=`
      <div class="`+M+`">
        <div class="`+C+`"></div>
      </div>
    `;var L=t.querySelector("."+M),P=t.querySelector("."+C),B=L.style;B.position="relative",this.wrapperEl=L,this.previewEl=P,v&&(B.height=v),_&&(B.width=_),this.initEvents(),this.updatePreview()}}}]),w}(d.default);o.default=p},function(b,o,m){Object.defineProperty(o,"__esModule",{value:!0});var i=function(){function d(y,s){for(var x=0;x<s.length;x++){var p=s[x];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(y,p.key,p)}}return function(y,s,x){return s&&d(y.prototype,s),x&&d(y,x),y}}(),r=function(){function d(){(function(y,s){if(!(y instanceof s))throw new TypeError("Cannot call a class as a function")})(this,d)}return i(d,[{key:"on",value:function(y,s,x){var p=this.e||(this.e={});return(p[y]||(p[y]=[])).push({fn:s,ctx:x}),this}},{key:"once",value:function(y,s,x){function p(){H.off(y,p),s.apply(x,arguments)}var H=this;return p._=s,this.on(y,p,x)}},{key:"emit",value:function(y){for(var s=[].slice.call(arguments,1),x=((this.e||(this.e={}))[y]||[]).slice(),p=0,H=x.length;p<H;p++)x[p].fn.apply(x[p].ctx,s);return this}},{key:"off",value:function(y,s){var x=this.e||(this.e={}),p=x[y],H=[];if(p&&s)for(var w=0,a=p.length;w<a;w++)p[w].fn!==s&&p[w].fn._!==s&&H.push(p[w]);return H.length?x[y]=H:delete x[y],this}}]),d}();o.default=r},function(b,o,m){Object.defineProperty(o,"__esModule",{value:!0});var i=function(){function y(s,x){for(var p=0;p<x.length;p++){var H=x[p];H.enumerable=H.enumerable||!1,H.configurable=!0,"value"in H&&(H.writable=!0),Object.defineProperty(s,H.key,H)}}return function(s,x,p){return x&&y(s.prototype,x),p&&y(s,p),s}}(),r=m(0),d=function(){function y(s){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"black",H=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,w=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{};(function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")})(this,y),s.getHandlers().push(this),this.gp=s,this.position=x,this.color=p,this.selected=0,this.render(),H&&this.select(w)}return i(y,[{key:"toJSON",value:function(){return{position:this.position,selected:this.selected,color:this.color}}},{key:"setColor",value:function(s){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;this.color=s,this.emit("handler:color:change",this,x)}},{key:"setPosition",value:function(s){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,p=this.getEl();this.position=s,p&&(p.style.left=s+"%"),this.emit("handler:position:change",this,x)}},{key:"getColor",value:function(){return this.color}},{key:"getPosition",value:function(){var s=this.position,x=this.gp.options.onValuePos;return(0,r.isFunction)(x)?x(s):s}},{key:"isSelected",value:function(){return!!this.selected}},{key:"getValue",value:function(){return this.getColor()+" "+this.getPosition()+"%"}},{key:"select",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},x=this.getEl(),p=this.gp.getHandlers();!s.keepSelect&&p.forEach(function(w){return w.deselect()}),this.selected=1;var H=this.getSelectedCls();x&&(x.className+=" "+H),this.emit("handler:select",this)}},{key:"deselect",value:function(){var s=this.getEl();this.selected=0;var x=this.getSelectedCls();s&&(s.className=s.className.replace(x,"").trim()),this.emit("handler:deselect",this)}},{key:"getSelectedCls",value:function(){return this.gp.options.pfx+"-handler-selected"}},{key:"remove",value:function(){var s=this,x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=this.cpFn,H=this.getEl(),w=this.gp.getHandlers(),a=w.splice(w.indexOf(this),1)[0];return H&&H.parentNode.removeChild(H),!x.silent&&this.emit("handler:remove",a),(0,r.isFunction)(p)&&p(this),["el","gp"].forEach(function(t){return s[t]=0}),a}},{key:"getEl",value:function(){return this.el}},{key:"initEvents",value:function(){var s=this,x=this.getEl(),p=this.gp.previewEl,H=this.gp.options,w=H.min,a=H.max,t=x.querySelector("[data-toggle=handler-close]"),l=x.querySelector("[data-toggle=handler-color-c]"),v=x.querySelector("[data-toggle=handler-color-wrap]"),_=x.querySelector("[data-toggle=handler-color]"),M=x.querySelector("[data-toggle=handler-drag]"),C=function(O){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,F=O.target.value;s.setColor(F,$),v&&(v.style.backgroundColor=F)};if(l&&(0,r.on)(l,"click",function(O){return O.stopPropagation()}),t&&(0,r.on)(t,"click",function(O){O.stopPropagation(),s.remove()}),_&&((0,r.on)(_,"change",C),(0,r.on)(_,"input",function(O){return C(O,0)})),M){var L=0,P=0,B=0,R={},N={},z={},I=function(O){var $=(0,r.getPointerEvent)(O);B=1,z.x=$.clientX-N.x,z.y=$.clientY-N.y,L=100*z.x,L/=R.w,L=(L=(L=P+L)<w?w:L)>a?a:L,s.setPosition(L,0),s.emit("handler:drag",s,L),(0,r.isDef)(O.button)&&O.which===0&&Z(O)},Z=function O($){(0,r.off)(document,"touchmove mousemove",I),(0,r.off)(document,"touchend mouseup",O),B&&(B=0,s.setPosition(L),s.emit("handler:drag:end",s,L))};(0,r.on)(M,"touchstart mousedown",function(O){if(!(0,r.isDef)(O.button)||O.button===0){s.select();var $=(0,r.getPointerEvent)(O);P=s.position,R.w=p.clientWidth,R.h=p.clientHeight,N.x=$.clientX,N.y=$.clientY,(0,r.on)(document,"touchmove mousemove",I),(0,r.on)(document,"touchend mouseup",Z),s.emit("handler:drag:start",s)}}),(0,r.on)(M,"click",function(O){return O.stopPropagation()})}}},{key:"emit",value:function(){var s;(s=this.gp).emit.apply(s,arguments)}},{key:"render",value:function(){var s=this.gp,x=s.options,p=s.previewEl,H=s.colorPicker,w=x.pfx,a=x.colorEl,t=this.getColor();if(p){var l=document.createElement("div"),v=l.style,_=w+"-handler";return l.className=_,l.innerHTML=`
      <div class="`+_+`-close-c">
        <div class="`+_+`-close" data-toggle="handler-close">&Cross;</div>
      </div>
      <div class="`+_+`-drag" data-toggle="handler-drag"></div>
      <div class="`+_+`-cp-c" data-toggle="handler-color-c">
        `+(a||`
          <div class="`+_+'-cp-wrap" data-toggle="handler-color-wrap" style="background-color: '+t+`">
            <input type="color" data-toggle="handler-color" value="`+t+`">
          </div>`)+`
      </div>
    `,v.position="absolute",v.top=0,v.left=this.position+"%",p.appendChild(l),this.el=l,this.initEvents(),this.cpFn=H&&H(this),l}}}]),y}();o.default=d}])}},j={};function e(n){var b=j[n];if(b!==void 0)return b.exports;var o=j[n]={exports:{}};return E[n].call(o.exports,o,o.exports,e),o.exports}e.n=n=>{var b=n&&n.__esModule?()=>n.default:()=>n;return e.d(b,{a:b}),b},e.d=(n,b)=>{for(var o in b)e.o(b,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:b[o]})},e.o=(n,b)=>Object.prototype.hasOwnProperty.call(n,b),e.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var c={};return(()=>{e.r(c),e.d(c,{GRAD_DIRS:()=>y,GRAD_TYPES:()=>s,default:()=>t,getValidDir:()=>d,parseGradient:()=>i,toGradient:()=>r});var n=e(9),b=e.n(n),o=function(){return o=Object.assign||function(l){for(var v,_=1,M=arguments.length;_<M;_++)for(var C in v=arguments[_])Object.prototype.hasOwnProperty.call(v,C)&&(l[C]=v[C]);return l},o.apply(this,arguments)},m=function(l,v,_){if(_||arguments.length===2)for(var M,C=0,L=v.length;C<L;C++)!M&&C in v||(M||(M=Array.prototype.slice.call(v,0,C)),M[C]=v[C]);return l.concat(M||Array.prototype.slice.call(v))},i=function(l){var v=l.indexOf("(")+1,_=l.lastIndexOf(")"),M=l.substring(v,_),C=M.split(/,(?![^(]*\))/),L={direction:"left",type:"linear",content:M,colors:M,stops:[]};if(!M)return L;C.length>2&&(L.direction=C.shift(),L.colors=C.join(",").trim());var P=!1;return["repeating-linear","repeating-radial","linear","radial"].forEach(function(B){l.indexOf(function(R){return"".concat(R,"-gradient(")}(B))>-1&&!P&&(P=!0,L.type=B)}),L.stops=C.map(function(B){var R=B.split(" "),N=(R.length>1?R.pop():"").trim();return{color:R.join(" ").trim(),position:N}}),L},r=function(l,v,_){var M=m(m([],y,!0),["center"],!1),C=v;return["linear","repeating-linear"].indexOf(l)>=0&&M.indexOf(C)>=0&&(C=C==="center"?"to right":"to ".concat(C)),["radial","repeating-radial"].indexOf(l)>=0&&M.indexOf(C)>=0&&(C="circle at ".concat(C)),_?"".concat(l,"-gradient(").concat(C,", ").concat(_,")"):""},d=function(l){return y.filter(function(v){return l.indexOf(v)>-1})[0]},y=["right","bottom","left","top"],s=["linear","radial","repeating-linear","repeating-radial"],x='[data-toggle="handler-color-wrap"]',p="background-image-gradient",H="".concat(p,"-dir"),w="".concat(p,"-type"),a=function(){return a=Object.assign||function(l){for(var v,_=1,M=arguments.length;_<M;_++)for(var C in v=arguments[_])Object.prototype.hasOwnProperty.call(v,C)&&(l[C]=v[C]);return l},a.apply(this,arguments)};const t=function(l,v){v===void 0&&(v={}),function(_,M){M===void 0&&(M={});var C=_.getModel(),L=_.Styles,P=M.colorPicker,B=M.builtInType,R=M.styleType,N=function(z){var I=z.getEl().querySelector(x),Z=_.$(I);Z.spectrum&&Z.spectrum("destroy")};R&&L.addType(R,{create:function(z){var I=z.change,Z=document.createElement("div");Z.className="gp-container",Z.style.width="100%";var O=new(b())(o({el:Z},M.grapickOpts));return O.on("change",function($){return I({value:O.getValue(),partial:!$})}),this.gp=O,P==="default"&&(P=function($){var F=$.getEl(),W=F.querySelector(x),K=F.querySelector("input");K==null||K.parentNode.removeChild(K);var Y=W.style;Y.backgroundColor=$.getColor();var ae=function(U,Q){Q===void 0&&(Q=1);var oe=function(ee){return(ee.getAlpha()==1?ee.toHexString():ee.toRgbString()).replace(/ /g,"")}(U);Y.backgroundColor=oe,$.setColor(oe,Q)};C.initBaseColorPicker(W,{color:$.getColor(),change:function(U){ae(U)},move:function(U){ae(U,0)}})},O.on("handler:remove",N)),P&&O.setColorPicker(P),Z},emit:function(z,I){var Z=z.updateStyle,O=I.partial;Z(I.value,{partial:O})},update:function(z){var I=z.value,Z=this.gp;if(Z.getValue()!==I){var O=Z.getHandlers();O.map(N),Z.setValue(I,{silent:!0}),M.selectEdgeStops&&[O[0],O[O.length-1]].filter(Boolean).map(function($){return $.select({keepSelect:!0})})}},destroy:function(){var z;(z=this.gp)===null||z===void 0||z.destroy()}}),B&&L.addBuiltIn(B,{type:"composite",fromStyle:function(z,I){var Z,O=I.name,$=i(z[O]||""),F=$.type||s[0],W=d($.direction)||y[0];return(Z={})[p]=r(F,W,$.colors),Z[w]=F,Z[H]=W,Z},toStyle:function(z,I){var Z,O=I.name,$=z[p]||"",F=z[w]||s[0],W=z[H]||y[0],K=i($),Y=r(F,W,K.colors);return(Z={})[O]=Y,Z},properties:[{name:" ",full:!0,defaults:"none",type:R,property:p},{name:"Direction",type:"select",defaults:"right",property:H,options:y.map(function(z){return{value:z}})},{name:"Type",type:"select",defaults:"linear",property:w,options:s.map(function(z){return{value:z}})}]})}(l,a({grapickOpts:{},selectEdgeStops:!0,styleType:"gradient",builtInType:"background-image"},v))}})(),c})(),V.exports=k()}},f={};function g(V){var k=f[V];if(k!==void 0)return k.exports;var E=f[V]={exports:{}};return h[V].call(E.exports,E,E.exports,g),E.exports}g.n=V=>{var k=V&&V.__esModule?()=>V.default:()=>V;return g.d(k,{a:k}),k},g.d=(V,k)=>{for(var E in k)g.o(k,E)&&!g.o(V,E)&&Object.defineProperty(V,E,{enumerable:!0,get:k[E]})},g.o=(V,k)=>Object.prototype.hasOwnProperty.call(V,k),g.r=V=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(V,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(V,"__esModule",{value:!0})};var A={};return(()=>{g.r(A),g.d(A,{BackgroundType:()=>V,default:()=>x});var V,k=g(180),E=g.n(k),j=function(){return j=Object.assign||function(p){for(var H,w=1,a=arguments.length;w<a;w++)for(var t in H=arguments[w])Object.prototype.hasOwnProperty.call(H,t)&&(p[t]=H[t]);return p},j.apply(this,arguments)};(function(p){p.Image="image",p.Color="color",p.Grad="grad"})(V||(V={}));var e=function(p){return p.map(function(H){return{id:H}})},c=function(p){var H,w=((H={})[o]=V.Image,H);if(p.indexOf("url(")>-1)w[m]=p;else if(p.indexOf("gradient(")>-1){var a=(0,k.parseGradient)(p),t=a.stops;if(t.length===2&&a.type==="linear"&&t[0].color===t[1].color)w[o]=V.Color,w[i]=t[0].color;else{var l=(0,k.getValidDir)(a.direction)||k.GRAD_DIRS[0],v=a.type||k.GRAD_TYPES[0];w[o]=V.Grad,w[r]=(0,k.toGradient)(v,l,a.colors),w[y]=v,w[d]=l}}return w},n='style="max-height: 16px; display: block; margin: 0 auto" viewBox="0 0 24 24"',b="background-image",o="__background-type",m=b,i="".concat(m,"-color"),r="".concat(m,"-gradient"),d="".concat(r,"-dir"),y="".concat(r,"-type"),s="none";const x=function(p,H){H===void 0&&(H={});var w=j({styleGradientOpts:{},propExtender:function(a){return a}},H);E()(p,j({colorPicker:"default"},w.styleGradientOpts)),p.Styles.addBuiltIn("background",{type:"stack",layerSeparator:new RegExp("(?<!\\(.*[^)]),(?![^(]*\\))"),layerJoin:", ",detached:!0,layerLabel:function(a,t){var l,v=t.values,_=t.property.getProperty(o).getOption(v[o]);return _!=null&&_.title?"".concat((l=_.title)&&l.charAt(0).toUpperCase()+l.substring(1)):""},fromStyle:function(a,t){var l=t.property,v=t.name,_=l.getLayerSeparator(),M=l.getProperties(),C=[];return a[b]?(C=l.__splitStyleName(a,b,_).map(c),M.forEach(function(L){var P=L.getId(),B=L.getName();B!==b&&l.__splitStyleName(a,B,_).map(function(R){var N;return(N={})[P]=R||L.getDefaultValue(),N}).forEach(function(R,N){C[N]=C[N]?j(j({},C[N]),R):R})})):a[v]&&(C=l.__splitStyleName(a,v,/(?![^)(]*\([^)(]*?\)\)),(?![^\(]*\))/).map(function(L){return L.substring(0,L.lastIndexOf(")")+1)}).map(c)),C},toStyle:function(a){var t=j({},a),l=t[o],v=t[m];if(l===V.Color){var _=t[i];v=_===s?s:"linear-gradient(".concat(_," 0%, ").concat(_," 100%)")}else if(l===V.Grad){var M=(0,k.parseGradient)(t[r]||"");v=(0,k.toGradient)(t[y]||k.GRAD_TYPES[0],t[d]||k.GRAD_DIRS[0],M.colors)}return delete t[m],delete t[i],delete t[r],delete t[d],delete t[y],j(j({},t),{"background-image":v||s})},properties:[{label:" ",property:o,type:"radio",default:V.Image,onChange:function(a){var t=a.property,l=a.to.value;l&&t.getParent().getProperties().forEach(function(v){var _=v.getName(),M=!1;_!==o&&((l===V.Image&&[i,r,d,y].indexOf(_)<0||l===V.Color&&_===i||l===V.Grad&&[r,d,y].indexOf(_)>=0)&&(M=!0),v.up({visible:M}))})},options:[{id:V.Image,title:"Image",label:"<svg ".concat(n,'><path fill="currentColor" d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z"/></svg>')},{id:V.Color,title:"Color",label:"<svg ".concat(n,'><path fill="currentColor" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/></svg>')},{id:V.Grad,title:"Gradient",label:"<svg ".concat(n,'><path fill="currentColor" d="M11 9h2v2h-2V9m-2 2h2v2H9v-2m4 0h2v2h-2v-2m2-2h2v2h-2V9M7 9h2v2H7V9m12-6H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2M9 18H7v-2h2v2m4 0h-2v-2h2v2m4 0h-2v-2h2v2m2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"/></svg>')}]},{label:"Image",property:m,default:"none",functionName:"url",type:"file",full:!0},{property:"background-repeat",default:"repeat",type:"select",options:[{id:"repeat",label:"Repeat"},{id:"repeat-x",label:"Repeat x"},{id:"repeat-y",label:"Repeat y"},{id:"no-repeat",label:"No repeat"},{id:"space",label:"Space"},{id:"round",label:"Round"}]},{property:"background-position",default:"left top",type:"select",options:e(["left top","left center","left bottom","right top","right center","right bottom","center top","center center","center bottom"])},{property:"background-attachment",default:"scroll",type:"select",options:e(["scroll","fixed","local"])},{type:"select",default:"auto",property:"background-size",options:e(["auto","cover","contain"])},{label:"Color",property:i,default:"none",type:"color",full:!0},{label:"Gradient",property:r,default:"linear-gradient(right, black 0%, white 100%)",type:"gradient",full:!0},{name:"Direction",property:d,type:"select",default:"right",options:e(k.GRAD_DIRS)},{name:"Type",property:y,default:"linear",type:"select",options:e(k.GRAD_TYPES)}].map(function(a){var t;return((t=w.propExtender)===null||t===void 0?void 0:t.call(w,a))||a})})}})(),A})())})(ue);var Pe=ue.exports;const qe=ne(Pe),Oe=(u,S={})=>{const h=u.BlockManager,f=S.stylePrefix,g=`${f}row-aris`,A=`${f}cell-aris`,V=S.labelRow,k=S.labelColumn,E=w=>{const a=[];for(let t in w){let l=w[t];const v=l instanceof Array||l instanceof Object;l=v?JSON.stringify(l):l,a.push(`${t}=${v?`${l}`:`"${l}"`}`)}return a.length?`${a.join(" ")}`:""},j="flex-basis",e=3,c=1,n=1,b={tl:0,tc:0,tr:0,cl:0,cr:0,bl:0,br:0,minDim:c},o={...b,cr:1,cl:1,bc:1,keyWidth:j,currentUnit:n,minDim:c,step:e,onMove:(w,a,{resizer:t})=>{const l=w.parentElement;if(!l)return;const v=Array.from(l.children),_=v.indexOf(w),M=_===0,C=_===v.length-1;if(t==="cr"&&!C){const L=v[_+1],P=w.offsetWidth,B=L.offsetWidth,R=a.right;w.style.width=`${P+R}px`,L.style.width=`${B-R}px`}else if(t==="cl"&&!M){const L=v[_-1],P=w.offsetWidth,B=L.offsetWidth,R=a.left;w.style.width=`${P-R}px`,L.style.width=`${B+R}px`}}},m={class:g,"data-gjs-droppable":`.${A}`,"data-gjs-resizable":b,"data-gjs-custom-name":V},i={class:A,"data-gjs-draggable":`.${g}`,"data-gjs-resizable":o,"data-gjs-custom-name":k,"data-gjs-unstylable":["width"],"data-gjs-stylable-require":["flex-basis"]},r=[`.${g}`,`.${A}`];u.on("selector:add",w=>r.indexOf(w.getFullName())>=0&&w.set("private",1)),u.on("block:drag:stop",w=>{const a=w==null?void 0:w.parent();a&&a.getClasses().includes(A)&&w.setStyle({width:"100%",display:"block",padding:"0","min-height":"55px","max-height":"100%","max-width":"100%"})});const d="Flexbox",y="Basic",s=E(m),x=E(i),p=`
    .${g} {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
      padding: 10px;
      gap: 10px;
      min-height: 75px;
    }
    @media (max-width: 768px) {
      .${g} {
        flex-direction: column;
      }
    }
    @media (max-width: 480px) {
      .${g} {
        height: auto;
      }
    }
  `,H=`
    .${A} {
      min-height: 55px;
      flex-grow: 1;
      flex-basis: 100%;
    }
  `;h.add("flexbox",{label:d,category:y,media:`
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="#ffffff" stroke-width="0.00024000000000000003" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 19.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="#ffffff" stroke-width="0.00024000000000000003" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    `,attributes:{class:"gjs-fonts gjs-f-b2"},content:`
      <div ${s}>
        <div ${x}></div>
        <div ${x}></div>
      </div>
      <style>
        ${p}
        ${H}
      </style>
    `,...S.flexboxBlock})},We=(u,S={})=>{const h={flexboxBlock:{},stylePrefix:"",labelRow:"Row",labelColumn:"Column",...S};Oe(u,h)},ze=(u,S={})=>{const h=u.BlockManager,f=S.stylePrefix,g=`${f}row-aris-2`,A=`${f}cell-aris-2`,V=S.labelRow,k=S.labelColumn,E=y=>{const s=[];for(let x in y){let p=y[x];const H=p instanceof Array||p instanceof Object;p=H?JSON.stringify(p):p,s.push(`${x}=${H?`'${p}'`:`"${p}"`}`)}return s.length?` ${s.join(" ")}`:""},e={tl:0,tc:0,tr:0,cl:0,cr:0,bl:0,br:0,minDim:10},c={class:g,"data-gjs-droppable":`.${A}`,"data-gjs-resizable":e,"data-gjs-custom-name":V},n={class:A,"data-gjs-draggable":`.${g}`,"data-gjs-resizable":{bc:1,keyHeight:"flex-basis",minDim:10,step:1,currentUnit:"px",unitHeight:"px",tl:0,tr:0,bl:0,br:0},"data-gjs-custom-name":k,"data-gjs-unstylable":["width"],"data-gjs-stylable-require":["flex-basis"]},b=[`.${g}`,`.${A}`];u.on("selector:add",y=>b.indexOf(y.getFullName())>=0&&y.set("private",1)),u.on("block:drag:stop",y=>{const s=y==null?void 0:y.parent();s&&s.getClasses().includes(A)&&y.setStyle({width:"auto",height:"234px",padding:"0","min-height":"55px","max-height":"100%","max-width":"100%"})}),u.on("component:clone",y=>{console.log(y)});const o="Basic",m=E(c),i=E(n),r=`
    .${g} {
      display: flex;
      flex-direction: column;
      padding: 10px;
      gap: 10px;
      min-height: 75px;
    }
    @media (max-width: 480px){
      .${g} {
        height: auto;
      }
    }
    `,d=`
    .${A} {
      min-height: 55px;
      flex-grow: 1;
      flex-basis: 100px;
    }`;h.add("flexbox-row",{label:"Flexbox Row",media:`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="#ffffff" stroke-width="0.00024000000000000003" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 19.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="#ffffff" stroke-width="0.00024000000000000003" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    `,category:o,attributes:{class:"gjs-fonts gjs-f-b2"},content:`
        <div ${m}>
          <div ${i}></div>
          <div ${i}></div>
        </div>
        <style>
          ${r}
          ${d}
        </style>
        `,...S.flexboxBlock})},Ke=(u,S={})=>{const h={flexboxBlock:{},stylePrefix:"",labelRow:"Row-Row",labelColumn:"Column-Row",...S};ze(u,h)};export{Se as B,De as P,Ae as S,qe as a,Fe as b,We as c,Ke as d,Ge as p};
