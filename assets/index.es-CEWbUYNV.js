import{R as S,r as i}from"./index-lNmQ6pPM.js";function B(e){if(!e||typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n),e}var h=function(){return h=Object.assign||function(n){for(var a,r=1,o=arguments.length;r<o;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},h.apply(this,arguments)};function xn(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]]);return a}function Re(e,n,a,r){function o(t){return t instanceof a?t:new a(function(l){l(t)})}return new(a||(a=Promise))(function(t,l){function s(d){try{u(r.next(d))}catch(f){l(f)}}function c(d){try{u(r.throw(d))}catch(f){l(f)}}function u(d){d.done?t(d.value):o(d.value).then(s,c)}u((r=r.apply(e,[])).next())})}function Le(e,n){var a={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},r,o,t,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(u){return function(d){return c([u,d])}}function c(u){if(r)throw new TypeError("Generator is already executing.");for(;l&&(l=0,u[0]&&(a=0)),a;)try{if(r=1,o&&(t=u[0]&2?o.return:u[0]?o.throw||((t=o.return)&&t.call(o),0):o.next)&&!(t=t.call(o,u[1])).done)return t;switch(o=0,t&&(u=[u[0]&2,t.value]),u[0]){case 0:case 1:t=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,o=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(t=a.trys,!(t=t.length>0&&t[t.length-1])&&(u[0]===6||u[0]===2)){a=0;continue}if(u[0]===3&&(!t||u[1]>t[0]&&u[1]<t[3])){a.label=u[1];break}if(u[0]===6&&a.label<t[1]){a.label=t[1],t=u;break}if(t&&a.label<t[2]){a.label=t[2],a.ops.push(u);break}t[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(d){u=[6,d],o=0}finally{r=t=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function he(e,n,a){if(a||arguments.length===2)for(var r=0,o=n.length,t;r<o;r++)(t||!(r in n))&&(t||(t=Array.prototype.slice.call(n,0,r)),t[r]=n[r]);return e.concat(t||Array.prototype.slice.call(n))}var ce=function(e){var n="";if(e)return e<1024?n=e+" Bytes":e<1024*1024?n=(e/1024).toFixed(2)+" KB":e<1024*1024*1024?n=(e/1024/1024).toFixed(2)+" MB":e<1024*1024*1024*1024?n=(e/1024/1024/1024).toFixed(2)+" GB":n=(e/1024/1024/1024/1024).toFixed(2)+" TB",n},vt={defaultLabel:"Trascina qui i tuoi file",uploadingMessage:function(e){return"Caricamento di ".concat(e," file")},uploadFinished:function(e,n){return"File caricati: ".concat(e,", File rifiutati: ").concat(n)},noFilesMessage:"Nessun file valido in attesa di essere caricato",footer:{acceptAll:"Tutti i tipi di file sono accettati",acceptCustom:function(e){return"Tipi di file consentiti: ".concat(e)}},header:{uploadFilesMessage:"Caricamento",maxSizeMessage:function(e){return"Dimensione massima ".concat(e)},validFilesMessage:function(e,n){return"File  ".concat(e,"/").concat(n)}},fakeuploadsuccess:"Il file è stato caricato con successo ",fakeUploadError:"Errore di caricamento del file"},gt={fullInfoLayer:{name:"Nome: ",size:"Dimensione: ",type:"Tipo: "},status:{preparing:"preparazione",uploading:"In corso",success:"Successo",valid:"Valido",denied:"Non válido",error:"Errore",aborted:"Interrotto"}},bt={maxSizeError:function(e){return"Il file è molto grande. Il tam. il massimo è ".concat(ce(e))},acceptError:"Tipo di file illegale",maxFileCount:function(e){return"Numero massimo di file (".concat(e,") raggiunto")}},ht={defaultLabel:"Déposez vos fichiers ici",uploadingMessage:function(e){return"Envoi de ".concat(e," fichiers")},uploadFinished:function(e,n){return"Fichiers téléchargés : ".concat(e,", Fichiers rejetés: ").concat(n)},noFilesMessage:"Aucun fichier valide ne manque",footer:{acceptAll:"Tous types de fichiers acceptés ",acceptCustom:function(e){return"Types de fichier: ".concat(e)}},header:{uploadFilesMessage:"Envoyer",maxSizeMessage:function(e){return"Taille maximale ".concat(e)},validFilesMessage:function(e,n){return"Fichiers  ".concat(e,"/").concat(n)}},fakeuploadsuccess:"Le fichier a été téléchargé avec succès",fakeUploadError:"Erreur lors du téléchargement "},xt={fullInfoLayer:{name:"Le nom: ",size:"Le taille: ",type:"Le type: "},status:{preparing:"préparer",uploading:"En cours",success:"Succès",valid:"Valide",denied:"Refusé",error:"Erreur",aborted:"Interrompu"}},yt={maxSizeError:function(e){return"Le fichier est très volumineux. Le tam. le maximum est de ".concat(ce(e))},acceptError:"Type de fichier illégal ",maxFileCount:function(e){return"Limite de fichiers atteinte (".concat(e,")")}},wt={defaultLabel:"Drop your files here",uploadingMessage:function(e){return"Uploading ".concat(e," files")},uploadFinished:function(e,n){return"Uploaded files: ".concat(e,", Rejected files: ").concat(n)},noFilesMessage:"There is no missing valid file to upload",footer:{acceptAll:"All file types accepted",acceptCustom:function(e){return"Allowed types: ".concat(e)}},header:{uploadFilesMessage:"Upload files",maxSizeMessage:function(e){return"Max file size: ".concat(e)},validFilesMessage:function(e,n){return"Files ".concat(e,"/").concat(n)}},fakeuploadsuccess:"File was successfuly uploaded",fakeUploadError:"Error on uploading. Please try again later."},Et={fullInfoLayer:{name:"Name: ",size:"Size: ",type:"Type: "},status:{preparing:"Preparing",uploading:"Uploading",success:"Success",valid:"Valid",denied:"Not valid",error:"Error",aborted:"Aborted"}},kt={maxSizeError:function(e){return"File is too big. Max file size allowed is ".concat(ce(e))},acceptError:"File type is not allowed",maxFileCount:function(e){return"Max amount of files (".concat(e,") has been reached")}},Ft={defaultLabel:"Suelta tus archivos aquí",uploadingMessage:function(e){return"Subiendo ".concat(e," archivos")},uploadFinished:function(e,n){return"Archivos subidos: ".concat(e,", Archivos rechazados: ").concat(n)},noFilesMessage:"No hay archivos válidos pendientes por subir",footer:{acceptAll:"Todos los tipos de archivo aceptados",acceptCustom:function(e){return"Tipo(s) de archivo permitidos: ".concat(e)}},header:{uploadFilesMessage:"Subir",maxSizeMessage:function(e){return"Tam. máximo ".concat(e)},validFilesMessage:function(e,n){return"Archivos ".concat(e,"/").concat(n)}},fakeuploadsuccess:"El archivo se subió correctamente",fakeUploadError:"Error al subir el archivo"},zt={fullInfoLayer:{name:"Nombre: ",size:"Tamaño: ",type:"Tipo: "},status:{preparing:"Preparando",uploading:"Subiendo",success:"Éxito",valid:"Válido",denied:"No válido",error:"Error",aborted:"Anulado"}},Ct={maxSizeError:function(e){return"El archivo es muy grande. El tam. máximo es ".concat(ce(e))},acceptError:"Tipo de archivo no permitido",maxFileCount:function(e){return"Cantidad máxima de archivos (".concat(e,") alcanzada")}},St={defaultLabel:"Перетащите сюда свои файлы.",uploadingMessage:function(e){return"Выгрузка ".concat(e," файлов")},uploadFinished:function(e,n){return"Загружено файлов: ".concat(e,", отклоненных файлов: ").concat(n)},noFilesMessage:"Действительный файл не отсутствует для загрузки",footer:{acceptAll:"Принимаются все типы файлов ",acceptCustom:function(e){return"Допустимые типы: ".concat(e)}},header:{uploadFilesMessage:"Отправить",maxSizeMessage:function(e){return"макс размер: ".concat(e)},validFilesMessage:function(e,n){return"Файлы ".concat(e,"/").concat(n)}},fakeuploadsuccess:"Файл был успешно загружен",fakeUploadError:"Ошибка при загрузке"},Nt={fullInfoLayer:{name:"Имя: ",size:"Размер: ",type:"Tип: "},status:{preparing:"подготовка",uploading:"Загрузка",success:"успех",valid:"годный",denied:"выкинутый",error:"ошибка",aborted:"прерванный"}},Mt={maxSizeError:function(e){return"Файл слишком большой. Максимально допустимый размер файла - ".concat(ce(e))},acceptError:"Тип файла не разрешен",maxFileCount:function(e){return"Достигнуто максимальное количество файлов (".concat(e,")")}},Dt={defaultLabel:"Solte seus arquivos aqui ",uploadingMessage:function(e){return"Enviando ".concat(e," arquivos")},uploadFinished:function(e,n){return"Arquivos enviados: ".concat(e,", Arquivos rejeitados: ").concat(n)},noFilesMessage:"Nenhum arquivo válido está faltando para enviar",footer:{acceptAll:"Todos os tipos de arquivo são aceitos",acceptCustom:function(e){return"Tipos permitidos: ".concat(e)}},header:{uploadFilesMessage:"Enviar",maxSizeMessage:function(e){return"Tamanho máximo: ".concat(e)},validFilesMessage:function(e,n){return"Arquivos ".concat(e,"/").concat(n)}},fakeuploadsuccess:"O arquivo foi enviado com sucesso",fakeUploadError:"Erro ao enviar"},Rt={fullInfoLayer:{name:"Nome: ",size:"Tamanho: ",type:"Tipo: "},status:{preparing:"Preparando",uploading:"Enviando",success:"Êxito",valid:"válido",denied:"Negado",error:"Erro",aborted:"Abortado"}},Lt={maxSizeError:function(e){return"O arquivo é muito grande. O tamanho máximo de arquivo permitido é ".concat(ce(e))},acceptError:"O tipo de arquivo não é permitido ",maxFileCount:function(e){return"Quantidade máxima de arquivos (".concat(e,") alcançada")}},At={defaultLabel:"将您的文件放在这里",uploadingMessage:function(e){return"上传 ".concat(e," 个文件")},uploadFinished:function(e,n){return"上传文件：".concat(e,"，拒绝文件：").concat(n)},noFilesMessage:"没有缺少要加载的有效文件",footer:{acceptAll:"接受所有文件类型",acceptCustom:function(e){return"允许的类型: ".concat(e)}},header:{uploadFilesMessage:"上传文件",maxSizeMessage:function(e){return"最大文件大小：".concat(e)},validFilesMessage:function(e,n){return"文档 ".concat(e,"/").concat(n)}},fakeuploadsuccess:"文件已成功上传",fakeUploadError:"上传时出错"},Bt={fullInfoLayer:{name:"文档名称: ",size:"尺寸: ",type:"文件类型: "},status:{preparing:"预加载",uploading:"上传",success:"成功",valid:"接受的文件",denied:"被拒绝的文件",error:"错误",aborted:"中止"}},Ut={maxSizeError:function(e){return"文件太大。 允许的最大文件大小为 ".concat(ce(e))},acceptError:"文件类型不允许",maxFileCount:function(e){return"已达到最大文件数 (".concat(e,")")}},_t={defaultLabel:"把你的文件放在這裡 ",uploadingMessage:function(e){return"上傳".concat(e,"個文件")},uploadFinished:function(e,n){return"上傳文件: ".concat(e,", 拒絕的文件：").concat(n)},noFilesMessage:"沒有缺少要上傳的有效文件",footer:{acceptAll:"接受所有文件類型",acceptCustom:function(e){return"允許的類型：".concat(e)}},header:{uploadFilesMessage:"上傳文件",maxSizeMessage:function(e){return"最大文件大小：".concat(e)},validFilesMessage:function(e,n){return" 文件 ".concat(e,"/").concat(n)}},fakeuploadsuccess:"文件已成功上傳",fakeUploadError:"上傳時出錯"},It={fullInfoLayer:{name:"文檔名稱: ",size:"文件大小: ",type:"文件類型: "},status:{preparing:"預加載",uploading:"上傳",success:"成功",valid:"有效文件",denied:"無效文件",error:"錯誤",aborted:"中止"}},Tt={maxSizeError:function(e){return"文件太大。 允許的最大文件大小為 ".concat(ce(e))},acceptError:"文件類型不允許",maxFileCount:function(e){return"已達到最大文件數 (".concat(e,")")}},de={"ES-es":zt,"EN-en":Et,"FR-fr":xt,"IT-it":gt,"PT-pt":Rt,"RU-ru":Nt,"ZH-cn":Bt,"ZH-hk":It},ke=function(e){switch(e){case"ES-es":return de["ES-es"];case"EN-en":return de["EN-en"];case"FR-fr":return de["FR-fr"];case"IT-it":return de["IT-it"];case"PT-pt":return de["PT-pt"];case"RU-ru":return de["RU-ru"];case"ZH-cn":return de["ZH-cn"];case"ZH-hk":return de["ZH-hk"];default:return de["EN-en"]}},fe={"ES-es":Ft,"EN-en":wt,"FR-fr":ht,"IT-it":vt,"PT-pt":Dt,"RU-ru":St,"ZH-cn":At,"ZH-hk":_t},We=function(e){switch(e){case"ES-es":return fe["ES-es"];case"EN-en":return fe["EN-en"];case"FR-fr":return fe["FR-fr"];case"IT-it":return fe["IT-it"];case"PT-pt":return fe["PT-pt"];case"RU-ru":return fe["RU-ru"];case"ZH-cn":return fe["ZH-cn"];case"ZH-hk":return fe["ZH-hk"];default:return fe["EN-en"]}},Sa={"ES-es":Ct,"EN-en":kt,"FR-fr":yt,"IT-it":bt,"PT-pt":Lt,"RU-ru":Mt,"ZH-cn":Ut,"ZH-hk":Tt},jt=function(e){return!e||!["ES-es","EN-en","FR-fr","IT-it","PT-pt","RU-ru","ZH-cn","ZH-hk"].includes(e)?Sa["EN-en"]:Sa[e]},Ta=function(e,n,a){return new Promise(function(r,o){try{var t=new FileReader;t.onprogress=function(){n==null||n()},t.onerror=function(){a==null||a()},t.onload=function(){r(t.result)},t.readAsDataURL(e)}catch{o(void 0)}})};function Ot(e){return new Promise(function(n,a){if(!e||e.length===0){a("landscape");return}try{var r=new Image;r.src=e,r.onerror=function(o){a("landscape")},r.onload=function(){var o=r.width,t=r.height;o>t?n("landscape"):n("portrait")}}catch{a("landscape")}})}var Pt="https://user-images.githubusercontent.com/43678736/132086517-72a51a12-e403-4675-bfd7-22c23affa730.png",Ht="https://user-images.githubusercontent.com/43678736/132086518-7026d4f1-ea16-4ed0-89fd-37c1aa8ac3ed.png",Vt="https://user-images.githubusercontent.com/43678736/132086519-863c63b4-917e-4471-94ff-7e15651cc14b.png",qt="https://user-images.githubusercontent.com/43678736/132086520-9bc6aa3b-51c9-4da2-9ef7-349162b86d0b.png",Zt="https://user-images.githubusercontent.com/43678736/132086521-dbd6cf0d-d4d7-4b92-bb26-17e8a51a9383.png",Gt="https://user-images.githubusercontent.com/43678736/132086522-070f48e8-78a8-4294-8dbb-aab81525e164.png",Wt="https://user-images.githubusercontent.com/43678736/132086595-90ab7f90-f87e-4900-94d9-d0b26745df48.png",Xt="https://user-images.githubusercontent.com/43678736/132086597-e285ad5c-613a-4679-a270-493e5be4ffd9.png",$t="https://user-images.githubusercontent.com/43678736/132086598-623c410a-084a-4395-a448-211b2ff61cfe.png",Jt="https://user-images.githubusercontent.com/43678736/132086600-8b70a007-512d-4252-9c66-eabd3ddd6573.png",Kt="https://user-images.githubusercontent.com/43678736/132086601-e62e5d1a-d8a2-4475-a14f-85922cec9272.png",Yt="https://user-images.githubusercontent.com/43678736/132086602-4c772934-f608-4f01-8459-c4622cee8ad5.png",Qt="https://user-images.githubusercontent.com/43678736/132086604-b5b019fe-572e-477e-92c2-3769a48a1304.png",er="https://user-images.githubusercontent.com/43678736/132086606-715ccb66-4702-4f7d-9b09-ac93ba17b643.png",nr="https://user-images.githubusercontent.com/43678736/132086608-bcae9d57-8e54-488c-90c4-4952ae530b5e.png",ar="https://user-images.githubusercontent.com/43678736/132086618-397d6bd2-9fda-43ed-a135-cb40388c35af.png",tr="https://user-images.githubusercontent.com/43678736/132086620-2586ba40-c583-4589-b1a4-8bb5b258b44d.png",rr="https://user-images.githubusercontent.com/43678736/132086621-3b95fb64-2533-4ccc-abcd-bd2beba572e9.png",ir="https://user-images.githubusercontent.com/43678736/132086622-af705a0c-2b25-4ba7-8ab6-bd69ec97f7e2.png",or="https://user-images.githubusercontent.com/43678736/132086624-89141a46-64e4-4fa0-bf69-54a0eb4d48c9.png",Na="https://user-images.githubusercontent.com/43678736/132086625-1b8f2652-1de0-4475-8c12-7da4a9973ffb.png",lr="https://user-images.githubusercontent.com/43678736/132086626-38699705-1e6f-4bca-984b-03167b236faa.png",sr="https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png",cr="https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png",ur="https://user-images.githubusercontent.com/43678736/132086652-4562942e-aaea-466c-968f-380fffabf3f9.png",dr="https://user-images.githubusercontent.com/43678736/132086653-0487e7e2-1ee3-49e2-8cfe-3e20f1f7490a.png",fr="https://user-images.githubusercontent.com/43678736/132086656-6e96c815-e4e2-4ffd-9d71-57e9cc2450bc.png",mr="https://user-images.githubusercontent.com/43678736/132086658-5d27d3c2-394f-43fb-b512-9b414a257875.png",pr="https://user-images.githubusercontent.com/43678736/132086659-98f3ef6e-b9f3-4b6d-b18f-469b5334ba27.png",vr="https://user-images.githubusercontent.com/43678736/132086661-a5484553-06c7-4ffa-a8f9-96b57b1b0344.png",gr="https://user-images.githubusercontent.com/43678736/132086662-05ad1597-d5e5-4efa-833e-2876e966a745.png",br="https://user-images.githubusercontent.com/43678736/132086663-90c58955-f7fb-4bdb-ac53-92667d16d4a3.png",hr="https://user-images.githubusercontent.com/43678736/132086664-9a7530e7-6d78-4ef3-a176-20cf7f57b555.png",Zn="https://user-images.githubusercontent.com/43678736/132086666-ab3c505d-b2c0-4177-9a06-aed5d9c39ee4.png",xr="https://user-images.githubusercontent.com/43678736/132086667-6c7dcbcc-8d83-41a2-8e0a-85b09e2791ae.png",yr="https://user-images.githubusercontent.com/43678736/132086668-9f246e91-cf2e-49cf-9617-e1fbb71abbbb.png",wr="https://user-images.githubusercontent.com/43678736/132086669-46113762-84d1-4b32-9441-b0138ce17a5d.png",Er="https://user-images.githubusercontent.com/43678736/145835364-2054509d-3448-4d34-921f-73dd6e297fc7.png",kr="https://user-images.githubusercontent.com/43678736/145835367-19172bf8-cd5a-4cbe-b512-d0de1d91f269.png",Fr="https://user-images.githubusercontent.com/43678736/145835373-a57ef0f5-3968-483b-9f55-6d67e7f1dcea.png",zr="https://user-images.githubusercontent.com/43678736/132086670-0f96e770-cedc-4635-a5f9-cf97894c1d7a.png",Cr="https://user-images.githubusercontent.com/43678736/132086671-02ad35ef-ec3a-4a65-abd5-5bf794dfcf7b.png",Sr="https://user-images.githubusercontent.com/43678736/132086672-3a856fda-823d-4997-b802-c7c640e6ef44.png",Nr="https://user-images.githubusercontent.com/43678736/132086673-0c4409ab-754e-4619-8cfa-179d0ccf1bd9.png",Mr="https://user-images.githubusercontent.com/43678736/132086674-fdb56d02-5845-49b7-8462-6357bc963464.png",Dr="https://user-images.githubusercontent.com/43678736/132086675-c879645d-acb4-41a6-ab3c-4e6c2048badb.png",Rr="https://user-images.githubusercontent.com/43678736/132086685-4e327c4c-a409-4b83-b36a-8d88936b314b.png",Lr="https://user-images.githubusercontent.com/43678736/132086688-8e82fae4-3a9b-49c0-bf99-77189525514c.png",Ar="https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png",Br="https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png",Ur="https://user-images.githubusercontent.com/43678736/132086691-d472576b-ec6a-4332-acd2-dd6a00b72952.png",_r="https://user-images.githubusercontent.com/43678736/132086693-9d43571e-0c86-438f-b247-e2cb42e19e06.png",Ir="https://user-images.githubusercontent.com/43678736/132086694-4e661d6a-1118-441e-8bc3-c52fcb2133b6.png",Tr="https://user-images.githubusercontent.com/43678736/132086697-1d82d724-35b6-4f06-847a-3c59a5deda6e.png",jr="https://user-images.githubusercontent.com/43678736/132086698-19384230-dbd7-4e05-bc69-ef4537b6aae3.png",Or="https://user-images.githubusercontent.com/43678736/132086699-5993a482-04f4-4915-b105-9037f527cf61.png",Pr="https://user-images.githubusercontent.com/43678736/132086700-c23461c8-6819-46e1-aecd-0a1f8d3507bb.png",Hr="https://user-images.githubusercontent.com/43678736/132086701-c8044c09-8d95-4af1-9410-66761001d7da.png",Vr="https://user-images.githubusercontent.com/43678736/132086702-59294337-ed99-4302-badd-316b2c1ff62f.png",qr="https://user-images.githubusercontent.com/43678736/132086704-8fd51e7c-afa2-47a3-ab2f-d0bcd0ecae9f.png",Zr="https://user-images.githubusercontent.com/43678736/132086705-33294da1-5c0f-49f7-b890-e4857cec0a6d.png",Gr="https://user-images.githubusercontent.com/43678736/132086706-22f805d0-39d4-494b-824e-47dc75d05eb7.png",Wr="https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png",Xr="https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png",$r="https://user-images.githubusercontent.com/43678736/132086708-21d096dd-7148-40aa-97f1-cbb099339740.png",Jr="https://user-images.githubusercontent.com/43678736/132086709-811d4e90-3cfa-4044-a956-aeda9c67fc92.png",Kr="https://user-images.githubusercontent.com/43678736/132086710-c5479c6c-0249-4542-adad-48b0ef40b775.png",Yr="https://user-images.githubusercontent.com/43678736/132086711-1524a3e7-3e33-4822-a34f-ff3235404045.png",Qr="https://user-images.githubusercontent.com/43678736/132086712-17e2c491-f6e4-4586-aef6-06bcc5f4b0e5.png",ei="https://user-images.githubusercontent.com/43678736/132086715-204b5a8b-9c5a-4bac-8294-9237ebc16089.png",ni="https://user-images.githubusercontent.com/43678736/132086716-64511d20-58cb-45a8-85df-f4d9408b469d.png",ai="https://user-images.githubusercontent.com/43678736/132086718-a8499333-6282-4820-aa1f-4d133eb54648.png",Kn=function(e){var n=/(?:\.([^.]+))?$/,a=n.exec(e);return a?a[1]:""},ee="octet",ti=function(e){switch(e){case"aac":return"aac";case"midi":return"midi";case"x-midi":return"midi";case"mpeg":return"mpeg";case"ogg":return"oga";case"opus":return"opus";case"wav":return"wav";case"webm":return"webm";case"wma":return"wma";default:return ee}},ri=function(e){switch(e){case"css":return"css";case"csv":return"csv";case"html":return"html";case"calendar":return"icalendar";case"javascript":return"javascript";case"x-javascript":return"javascript";case"plain":return"text";case"xml":return"xml";default:return ee}},ii=function(e){switch(e){case"bmp":return"bmp";case"gif":return"gif";case"jpg":return"jpeg";case"jpeg":return"jpeg";case"png":return"png";case"tiff":return"tiff";case"webp":return"webp";default:return ee}},oi=function(e){switch(e){case"otf":return"otf";case"ttf":return"ttf";case"woff":return"woff";case"woff2":return"woff";default:return ee}},li=function(e){switch(e){case"x-msvideo":return"avi";case"msvideo":return"avi";case"avi":return"avi";case"mp4":return"mp4";case"mpeg":return"mpeg";case"ogg":return"ogv";case"mp2t":return"mp2t";case"wmv":return"wmv";case"webm":return"webm";default:return ee}},si=function(e){switch(e){case"x-abiword":return"abw";case"abiword":return"abw";case"x-freearc":return"arc";case"freearc":return"arc";case"vnd.amazon.ebook":return"azw";case"octet-stream":return"octet";case"x-bzip":return"bz";case"x-bzip2":return"bz2";case"bzip":return"bz";case"bzip2":return"bz2";case"x-cdf":return"cda";case"msaccess":return"accdb";case"csh":return"csh";case"x-csh":return"csh";case"vnd.ms-fontobject":return"eot";case"epub+zip":return"epub";case"gzip":return"gzip";case"java-archive":return"jar";case"x-javascript":return"javascript";case"json":return"json";case"ld+json":return"jsonld";case"vnd.apple.installer+xml":return"mpkg";case"ogg":return"ogx";case"vnd.rar":return"rar";case"rtf":return"rtf";case"x-sh":return"sh";case"sh":return"sh";case"x-shockwave-flash":return"swf";case"x-tar":return"tar";case"x-httpd-php":return"php";case"vnd.visio":return"vsd";case"xhtml+xml":return"xhtml";case"xml":return"xml";case"vnd.mozilla.xul+xml":return"xul";case"vnd.openxmlformats-officedocument.wordprocessingml.document":return"docx";case"msword":return"docx";case"vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"xlsx";case"vnd.openxmlformats-officedocument.presentationml.presentation":return"pptx";case"vnd.ms-powerpoint":return"pptx";case"vnd.oasis.opendocument.presentation":return"odp";case"vnd.oasis.opendocument.text":return"odt";case"vnd.oasis.opendocument.spreadsheet":return"ods";case"zip":return"zip";case"x-zip-compressed":return"zip";case"pdf":return"pdf";default:return ee}},ja=function(e){if(!e||!e.includes("/"))return ee;var n=e.split("/")[0],a=e.split("/")[1];switch(n){case"application":return si(a);case"audio":return ti(a);case"video":return li(a);case"text":return ri(a);case"image":return ii(a);case"font":return oi(a);default:return ee}},Oa=function(e){var n="octet";return e&&e!==""&&(e.includes("zip")||e.includes("rar")?n="zip":e.includes("doc")?n="docx":e.includes("xls")?n="xlsx":e.includes("drawio")?n="drawio":e.includes("psd")?n="psd":e.includes("csv")?n="csv":e==="jsx"?n="react":e==="py"?n="python":e==="vue"?n="vue":e==="java"?n="java":e==="ts"?n="typescript":(e==="sass"||e==="scss")&&(n="sass")),n},Pa=function(e){var n="text";return e&&e!==""&&(e==="jsx"?n="react":e==="py"?n="python":e==="vue"?n="vue":e==="java"?n="java":e==="ts"||e==="tsx"?n="typescript":e==="js"?n="javascript":e==="xml"?n="xml":e==="php"&&(n="php")),n},ci=function(e,n){var a="fallBack";if(e)a=ja(e.type);else return a=ee,n!=null&&n.fallBack?{url:n==null?void 0:n.fallBack,mimeResume:a}:{url:vn[a],mimeResume:a};var r=Kn(e.name);a==="text"&&(a=Pa(r)),a===ee&&(a=Oa(r));var o=n==null?void 0:n[a];return o!==void 0?{url:o,mimeResume:a}:{url:vn[a],mimeResume:a}},ui=function(e,n,a){var r="octet";if(e)r=ja(n);else return r=ee,a!=null&&a.fallBack?{url:a==null?void 0:a.fallBack,mimeResume:r}:{url:vn[r],mimeResume:r};var o=Kn(e);r==="text"&&(r=Pa(o)),r===ee&&(r=Oa(o));var t=a==null?void 0:a[r];return t!==void 0?{url:t,mimeResume:r}:{url:vn[r],mimeResume:r}},vn={aac:Ht,accdb:qt,abw:Vt,arc:rr,avi:Zt,azw:Gt,octet:Zn,bmp:Wt,bz:Xt,bz2:$t,cda:Jt,csh:Kt,css:Yt,csv:Qt,docx:er,drawio:nr,eot:ar,epub:tr,gzip:or,gif:ir,html:Na,icalendar:lr,jar:cr,jpeg:dr,javascript:ur,json:fr,jsonld:mr,midi:pr,mp3:vr,mp4:gr,mpeg:br,mpkg:hr,mp2t:Zn,odp:xr,ods:yr,odt:wr,oga:Er,ogv:kr,ogx:Fr,opus:zr,otf:Cr,png:Mr,pdf:Sr,php:Nr,pptx:Dr,psd:Rr,rar:Br,rtf:_r,sass:Ir,sh:Tr,swf:jr,tar:Ar,tiff:Pr,ttf:Hr,typescript:Vr,text:Or,vsd:qr,wav:Gr,weba:Xr,webm:Wr,webp:$r,woff:Yr,wma:Jr,wmv:Kr,xhtml:Na,xlsx:Qr,xml:ei,xul:ni,zip:ai,sevenzip:Pt,python:Lr,java:sr,react:Ur,vue:Zr,fallBack:Zn},gn=function(){function e(n){var a=n.id,r=n.file,o=n.name,t=n.size,l=n.type,s=n.imageUrl,c=n.valid,u=n.errors,d=n.uploadMessage,f=n.uploadStatus,m=n.progress,p=n.xhr,b=n.extraData,v=n.extraUploadData,g=n.serverResponse,x=n.downloadUrl,w=n.videoUrl,N=n.uploadUrl;this.id=a,this.file=r,this.name=o,this.size=t,this.type=l,this.imageUrl=s,this.valid=c,this.errors=u,this.uploadStatus=f,this.uploadMessage=d,this.progress=m,this.xhr=p,this.extraData=b,this.extraUploadData=v,this.serverResponse=g,this.downloadUrl=x,this.videoUrl=w,this.uploadUrl=N}return e.toExtFile=function(n){for(var a={},r=Object.keys(n),o=Object.values(n),t=0;t<o.length;t++){var l=o[t],s=r[t];l!==void 0&&(a[s]=l)}return a},e.prototype.toExtFile=function(){return e.toExtFile(this)},e.hasValidUrl=function(n){return n.uploadUrl&&n.uploadUrl.length>0},e.someValidUrl=function(n){return n.some(e.hasValidUrl)},e}(),C=function(){return C=Object.assign||function(n){for(var a,r=1,o=arguments.length;r<o;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},C.apply(this,arguments)};function Ae(e,n,a,r){function o(t){return t instanceof a?t:new a(function(l){l(t)})}return new(a||(a=Promise))(function(t,l){function s(d){try{u(r.next(d))}catch(f){l(f)}}function c(d){try{u(r.throw(d))}catch(f){l(f)}}function u(d){d.done?t(d.value):o(d.value).then(s,c)}u((r=r.apply(e,[])).next())})}function Be(e,n){var a={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},r,o,t,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(u){return function(d){return c([u,d])}}function c(u){if(r)throw new TypeError("Generator is already executing.");for(;l&&(l=0,u[0]&&(a=0)),a;)try{if(r=1,o&&(t=u[0]&2?o.return:u[0]?o.throw||((t=o.return)&&t.call(o),0):o.next)&&!(t=t.call(o,u[1])).done)return t;switch(o=0,t&&(u=[u[0]&2,t.value]),u[0]){case 0:case 1:t=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,o=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(t=a.trys,!(t=t.length>0&&t[t.length-1])&&(u[0]===6||u[0]===2)){a=0;continue}if(u[0]===3&&(!t||u[1]>t[0]&&u[1]<t[3])){a.label=u[1];break}if(u[0]===6&&a.label<t[1]){a.label=t[1],t=u;break}if(t&&a.label<t[2]){a.label=t[2],a.ops.push(u);break}t[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(d){u=[6,d],o=0}finally{r=t=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function bn(e,n,a){if(a||arguments.length===2)for(var r=0,o=n.length,t;r<o;r++)(t||!(r in n))&&(t||(t=Array.prototype.slice.call(n,0,r)),t[r]=n[r]);return e.concat(t||Array.prototype.slice.call(n))}var Wn=function(){function e(){}return e.getNextId=function(){return e.nextId++,e.nextId},e.setFileList=function(n,a){return n?(e.fileLists[n]=bn([],a,!0),n):0},e.createFileListMap=function(){var n=e.getNextId();return e.fileLists[n]=[],n},e.removeFileListMap=function(n){if(n)try{return e.fileLists[n]=void 0,n}catch{return 0}else return 0},e.getExtFileInstanceList=function(n){try{return n?e.fileLists[n]:void 0}catch{return}},e.setFileListMapPreparing=function(n,a,r,o){if(typeof n=="number"||typeof n=="string")try{var t=[],l=bn([],a,!0);o&&r&&(l=l.filter(function(c){return c.valid})),r?l=l.map(function(c){return c.uploadStatus!=="success"&&c.valid?C(C({},c),{uploadStatus:"preparing"}):C({},c)}):l=l.map(function(c){return c.uploadStatus!=="success"?C(C({},c),{uploadStatus:"preparing"}):C({},c)}),t=l.map(function(c){return new gn(c)});var s=e.setFileList(n,t);return t}catch{return}},e.setFileListMapPreparing2=function(n,a,r,o){return e.setFileList(n,a.map(function(t){return new gn(C(C({},t),{uploadStatus:"preparing"}))})),e.getExtFileInstanceList(n)},e.nextId=0,e.fileLists={},e}(),Yn=function(){function e(){}return e.getNextId=function(){return e.nextId++,e.nextId},e.nextId=0,e}(),Ma=function(e){for(var n=[],a=0,r=void 0;r=e[a];a++)n.push({id:Yn.getNextId(),file:r,name:r.name,size:r.size,type:r.type});return n},di=function(e,n,a,r){return e!=null||n!=null||a!=null||r!=null},fi=function(e){return e===void 0&&(e=5e3),new Promise(function(n,a){setTimeout(function(){n()},e)})},mi=function(e,n){n===void 0&&(n=We("EN-en"));var a=e.toExtFile();return new Promise(function(r,o){setTimeout(function(){var t=Math.floor(Math.random()*10);if(t%2===0){var l=!0,s=n.fakeuploadsuccess,c={url:""};r(C(C({},a),{serverResponse:{success:l,message:s,payload:c},uploadStatus:"success",uploadMessage:s}))}else{var l=!1,s=n.fakeUploadError,c={};r(C(C({},a),{serverResponse:{success:l,message:s,payload:c},uploadStatus:"error",uploadMessage:s}))}},1700)})};function pi(e,n){return Math.floor(Math.random()*(n-e))+e}var vi=function(e){e&&(e.value="")},re=function(e,n){return n?"".concat(e," ").concat(n):e},gi=function(e,n){return(!n||n&&e.valid)&&e.uploadStatus!=="success"},bi=function(e,n,a,r){var o="",t=void 0,l=void 0;return e&&typeof e.name=="string"?(o=e.name,t=e.type,l=e.size):n&&typeof n=="string"&&(o=n,t=a,l=r),[o,t,l]},hi=function(e){if(!e||e.length===0)return[];var n=e.split(",").map(function(a){return a.trim()});return n},xi=function(e,n){for(var a=!1,r=n.name,o=n.type,t=0;t<e.length;t++){var l=e[t];if(l.length!==0){if(l.charAt(0)==="."&&l.includes(Kn(r)))return!0;if(o&&o.length>0&&l.includes("/")&&o.includes("/")){var s=l.split("/")[0],c=l.split("/")[1],u=o.split("/")[0],d=o.split("/")[1];if(s===u){if(c==="*")return!0;if(c===d)return!0}}}}return a},Xn=function(e,n,a,r,o,t){var l=[];if(!n)return l;for(var s=n,c=jt(t),u=c.maxFileCount,d=0;d<e.length;d++){var f=e[d];if(f=yi(f,r,a,c),f.valid){var m=s>0;f.valid=m,m||(f.errors=f.errors?bn(bn([],f.errors,!0),[u(o||1/0)],!1):[u(o||1/0)]),s--}l.push(f)}return l},yi=function(e,n,a,r){var o=C({},e),t=[];if(!e.file)return C({},o);if(n){var l=n(o.file),s=l.errors;s&&t.push.apply(t,s)}var c=a.maxFileSize,u=a.accept,d=e.file;if(c&&d.size>c){var f=r.maxSizeError;t.push(f(c))}u&&!xi(hi(u),d)&&t.push(r.acceptError);var m=t.length===0;return o=C(C({},o),{valid:m,errors:m?void 0:t}),o};function wi(e,n){for(var a=Object.keys(n||{}),r=0;r<a.length&&n;r++)e.append(a[r],n[a[r]])}function Ha(e,n){for(var a=Object.keys(n||{}),r=0;r<a.length&&n;r++)e.setRequestHeader(a[r],n[a[r]])}var Ei="Unable to upload. A valid url was not provided",ki="Unable to upload. xhr object was not provided",Va={success:!1,message:"Timeout error",payload:{}},hn={success:!1,message:"Upload aborted",payload:{}},Fi={success:!1,message:"Error when parsing JSON response",payload:{}},zi={success:!1,message:"Unexpected error",payload:{}},Ci=function(e){return C(C({},e),{uploadMessage:ki,uploadStatus:"error",serverResponse:{success:!1}})},Si=function(e){return C(C({},e),{uploadMessage:Ei,uploadStatus:"error",serverResponse:{success:!1}})},qa=function(e){try{var n=JSON.parse(e.response),a=e.status>=200&&e.status<300?!0:typeof n.success=="boolean"?n.success:!1,r=typeof n.message=="string"?n.message:a?"Upload compete!. No message from server found.":"Error on upload. No message from server found.",o=n.payload||n||{},t={success:a,message:r,payload:o};return t}catch{return Fi}},Ni=function(e,n){return C(C({},e),{serverResponse:n,uploadMessage:n.message,uploadStatus:"success"})},Da=function(e,n){return C(C({},e),{uploadMessage:n.message,uploadStatus:"error",serverResponse:n})},Mi=function(e,n,a,r,o){return n===void 0&&(n="POST"),new Promise(function(t,l){console.log("uploadBlob => BLOB");var s=["POST","PUT","PATCH"].includes(n.toUpperCase())?n:"POST";e.upload.onload=function(){},e.upload.ontimeout=function(){return t(Va)},e.upload.onabort=function(){t(hn)},e.onloadend=function(c){return Ae(void 0,void 0,void 0,function(){return Be(this,function(u){return[2]})})},e.onreadystatechange=function(c){return Ae(void 0,void 0,void 0,function(){return Be(this,function(u){return e.readyState===4&&(e.response!==""?t(qa(e)):t(hn)),[2]})})},e.open(s,a,!0),Ha(e,o),e.send(r)})},Di=function(e,n,a,r,o){return n===void 0&&(n="POST"),new Promise(function(t,l){var s=["POST","PUT","PATCH"].includes(n.toUpperCase())?n:"POST";e.upload.onload=function(){},e.upload.ontimeout=function(){return t(Va)},e.upload.onabort=function(){t(hn)},e.onloadend=function(c){return Ae(void 0,void 0,void 0,function(){return Be(this,function(u){return[2]})})},e.onreadystatechange=function(c){return Ae(void 0,void 0,void 0,function(){return Be(this,function(u){return e.readyState===4&&(e.response!==""?t(qa(e)):t(hn)),[2]})})},e.open(s,a,!0),Ha(e,o),e.send(r)})},Ri=function(e,n,a,r,o,t,l){return Ae(void 0,void 0,void 0,function(){return Be(this,function(s){return[2,new Promise(function(c,u){return Ae(void 0,void 0,void 0,function(){var d,f,m,p,b,v,g;return Be(this,function(x){switch(x.label){case 0:return x.trys.push([0,5,,6]),d=e.xhr,d?(f=e.uploadUrl||(a==null?void 0:a(e))||n,f==null||f.length==0?(c(Si(e)),[2]):(m=r||"POST",p=e.file,b=new FormData,b.append(t||"file",p),v=C({},e.extraUploadData),wi(b,v),g=void 0,l?[4,Mi(d,m,f,p,o||{})]:[3,2])):(c(Ci(e)),[2]);case 1:return g=x.sent(),[3,4];case 2:return[4,Di(d,m,f,b,o||{})];case 3:g=x.sent(),x.label=4;case 4:return g.success?c(Ni(e,g)):c(Da(e,g)),[3,6];case 5:return x.sent(),c(Da(e,zi)),[3,6];case 6:return[2]}})})})]})})},Li=function(e){return C(C({},e),{uploadMessage:"Unexpected error",uploadStatus:"error",serverResponse:{success:!1,message:"Error on upload: unexpected error ",payload:{}}})},Ra=function(e){return e?e.map(function(n){return C(C({},n),{xhr:new XMLHttpRequest})}):[]},Ai=function(e){return e.uploadStatus==="preparing"?(e.uploadStatus="uploading",C(C({},e),{uploadStatus:"uploading"})):e},Gn=function(e){return e===void 0&&(e=1500),new Promise(function(n,a){setTimeout(function(){n(!0)},e)})},be=function(e){return e.filter(function(n){var a;return!(!((a=n.extraData)===null||a===void 0)&&a.deleted)}).map(function(n){return n.uploadStatus==="aborted"&&!n.uploadMessage&&(n.uploadMessage="Upload aborted by user"),gn.toExtFile(n)})},Bi=function(e,n){var a=e.uploadStatus,r=n.uploadStatus;a==="preparing"&&["aborted",void 0].includes(r)?(e.uploadStatus=void 0,e.uploadMessage=n.uploadMessage):a==="uploading"&&["aborted",void 0].includes(r)&&(e.uploadStatus="aborted",e.uploadMessage=n.uploadMessage)},La={indianred:"#CD5C5C",lightcoral:"#F08080",salmon:"#FA8072",darksalmon:"#E9967A",lightsalmon:"#FFA07A",crimson:"#DC143C",red:"#FF0000",firebrick:"#B22222",darkred:"#8B0000",pink:"#FFC0CB",lightpink:"#FFB6C1",hotpink:"#FF69B4",deeppink:"#FF1493",mediumvioletred:"#C71585",palevioletred:"#DB7093",coral:"#FF7F50",tomato:"#FF6347",orangered:"#FF4500",darkorange:"#FF8C00",orange:"#FFA500",gold:"#FFD700",yellow:"#FFFF00",lightyellow:"#FFFFE0",lemonchiffon:"#FFFACD",lightgoldenrodyellow:"#FAFAD2",papayawhip:"#FFEFD5",moccasin:"#FFE4B5",peachpuff:"#FFDAB9",palegoldenrod:"#EEE8AA",khaki:"#F0E68C",darkkhaki:"#BDB76B",lavender:"#E6E6FA",thistle:"#D8BFD8",plum:"#DDA0DD",violet:"#EE82EE",orchid:"#DA70D6",fuchsia:"#FF00FF",magenta:"#FF00FF",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",rebeccapurple:"#663399",blueviolet:"#8A2BE2",darkviolet:"#9400D3",darkorchid:"#9932CC",darkmagenta:"#8B008B",purple:"#800080",indigo:"#4B0082",slateblue:"#6A5ACD",darkslateblue:"#483D8B",mediumslateblue:"#7B68EE",greenyellow:"#ADFF2F",chartreuse:"#7FFF00",lawngreen:"#7CFC00",lime:"#00FF00",limegreen:"#32CD32",palegreen:"#98FB98",lightgreen:"#90EE90",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",mediumseagreen:"#3CB371",seagreen:"#2E8B57",forestgreen:"#228B22",green:"#008000",darkgreen:"#006400",yellowgreen:"#9ACD32",olivedrab:"#6B8E23",olive:"#808000",darkolivegreen:"#556B2F",mediumaquamarine:"#66CDAA",darkseagreen:"#8FBC8B",lightseagreen:"#20B2AA",darkcyan:"#008B8B",teal:"#008080",aqua:"#00FFFF",cyan:"#00FFFF",lightcyan:"#E0FFFF",paleturquoise:"#AFEEEE",aquamarine:"#7FFFD4",turquoise:"#40E0D0",mediumturquoise:"#48D1CC",darkturquoise:"#00CED1",cadetblue:"#5F9EA0",steelblue:"#4682B4",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",lightblue:"#ADD8E6",skyblue:"#87CEEB",lightskyblue:"#87CEFA",deepskyblue:"#00BFFF",dodgerblue:"#1E90FF",cornflowerblue:"#6495ED",royalblue:"#4169E1",blue:"#0000FF",mediumblue:"#0000CD",darkblue:"#00008B",navy:"#000080",midnightblue:"#191970",cornsilk:"#FFF8DC",blanchedalmond:"#FFEBCD",bisque:"#FFE4C4",navajowhite:"#FFDEAD",wheat:"#F5DEB3",burlywood:"#DEB887",tan:"#D2B48C",rosybrown:"#BC8F8F",sandybrown:"#F4A460",goldenrod:"#DAA520",darkgoldenrod:"#B8860B",peru:"#CD853F",chocolate:"#D2691E",saddlebrown:"#8B4513",sienna:"#A0522D",brown:"#A52A2A",maroon:"#800000",white:"#FFFFFF",snow:"#FFFAFA",honeydew:"#F0FFF0",mintcream:"#F5FFFA",azure:"#F0FFFF",aliceblue:"#F0F8FF",ghostwhite:"#F8F8FF",whitesmoke:"#F5F5F5",seashell:"#FFF5EE",beige:"#F5F5DC",oldlace:"#FDF5E6",floralwhite:"#FFFAF0",ivory:"#FFFFF0",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lavenderblush:"#FFF0F5",mistyrose:"#FFE4E1",gainsboro:"#DCDCDC",lightgray:"#D3D3D3",silver:"#C0C0C0",darkgray:"#A9A9A9",gray:"#808080",dimgray:"#696969",lightslategray:"#778899",slategray:"#708090",darkslategray:"#2F4F4F",black:"#000000"},Ui=function(e,n){n===void 0&&(n=25);var a="",r=(100-n)/100,o=0,t=0,l=0;if(Ga(yn(e)))o=Q(e.charAt(1))*16+Q(e.charAt(2)),t=Q(e.charAt(3))*16+Q(e.charAt(4)),l=Q(e.charAt(5))*16+Q(e.charAt(6)),a="rgb(".concat(o*r,", ").concat(t*r,",").concat(l*r,")");else if(e.includes("rgba")){var s=e.replace("rgba(",""),c=s.split(",");a="rgb(".concat(parseInt(c[0],10)*r,", ").concat(parseInt(c[1],10)*r,",").concat(parseInt(c[2],10)*r,")")}else if(e.includes("rgb")){var s=e.replace("rgb(",""),c=s.split(",");a="rgb(".concat(parseInt(c[0],10)*r,", ").concat(parseInt(c[1],10)*r,",").concat(parseInt(c[2],10)*r,")")}return a},Za=function(e,n,a){n===void 0&&(n=0);var r=a||"rgba(255, 255, 255, 0.6)";if(!e)return r;var o=e.toUpperCase();if(o.includes("RGBA"))return o;if(o.includes("RGB"))return o.replace("RGB","rgba").replace(")",", ".concat(n,")"));if(!Ga(yn(o)))return r;var t="",l=0,s=0,c=0;return l=Q(o.charAt(1))*16+Q(o.charAt(2)),s=Q(o.charAt(3))*16+Q(o.charAt(4)),c=Q(o.charAt(5))*16+Q(o.charAt(6)),t="rgba(".concat(l,", ").concat(s,",").concat(c," , ").concat(n,")"),t},Ga=function(e){if(e.charAt(0)!=="#"||e.length!==7)return!1;for(var n=1;n<e.length;n++)if(!$n.includes(e.charAt(n)))return!1;return!0};function yn(e){return e?La[e.toLocaleLowerCase()]!==void 0?La[e.toLocaleLowerCase()]:e:""}var $n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],_i=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],Q=function(e){return $n.includes(e)?_i[$n.indexOf(e)]:0},Wa=function(e){return e!==void 0&&e!==""?e:Ii},T=function(e,n){return n===void 0&&(n=1),Za(Wa(yn(e)),n)},Ii="#646c7f";function Xa(e,n){return e?h(h({},n),e):n}var Ti=function(e){var n=e.onChange,a=e.inputRef,r=e.accept,o=e.multiple;return i.createElement(i.Fragment,null,i.createElement("input",{"aria-label":"fui-hidden-input",style:{display:"none"},ref:a,onChange:n,type:"file",accept:r,multiple:o}))},ji={clickable:!0,behaviour:"add",disabled:!1,dropOnLayer:!0,uploadConfig:{},actionButtons:{},header:!0,footer:!0,value:[]},Ee="8px";B(`.files-ui-dropzone-children-container {
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 5px 0;
}`);var Oi=function(e){var n=e.children,a=e.label,r=e.localization,o=Array.isArray(n)&&n.length===0,t=We(r);return n&&!o?i.createElement("div",{className:"files-ui-dropzone-children-container"},n):i.createElement("div",{className:"files-ui-dropzone-children-container"},i.createElement("label",null," ",a||t.defaultLabel))},Qn=function(e){e.stopPropagation(),e.preventDefault()},Jn=function(e){e.dataTransfer.dropEffect="link",Qn(e)};function ie(e){e.preventDefault(),e.stopPropagation()}var Pi=function(e){e&&e.click()},$a=function(e){return T(e,.4)};function Hi(e,n,a){if(!(!n||!e)){e.style.display="block";var r=document.createElement("span");r.id="filesui-ripple",r.className="ripple";var o=Math.max(n.clientWidth,n.clientHeight);r.style.width=r.style.height="".concat(o,"px"),r.style.backgroundColor=$a(a),n.appendChild(r),setTimeout(function(){e.style.display="none",r==null||r.remove()},501)}}function Vi(e,n,a){var r=e.currentTarget,o=document.createElement("span"),t=Math.max(r.clientWidth,r.clientHeight);o.style.width=o.style.height="".concat(t,"px"),o.classList.add("ripple"),n!=="contained"?o.style.backgroundColor=$a(a):o.style.backgroundColor=Za("#ffffff",.4),r.appendChild(o),setTimeout(function(){o==null||o.remove()},501)}B(`.filesui-disabled-root {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.38);
}`);var qi=function(e){var n=e.open,a=e.className,r=e.style;function o(c){ie(c)}var t=function(c){Jn(c)},l=function(c){return Re(void 0,void 0,void 0,function(){return Le(this,function(u){return Qn(c),[2]})})},s=re("filesui-disabled-root",a);return n?i.createElement("div",{style:r,className:s,onDrop:l,onDragOver:t,onClick:o}):i.createElement(i.Fragment,null)};B(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.fui-dropzone-root {
  width: 100%;
  min-width: 150px;
  min-height: 180px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0 8px;
  text-rendering: optimizeLegibility;
  font-size: 1.5em;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.02857em;
  box-sizing: border-box;
  word-break: normal;
  /*  &.fui-dropzone-border {
    box-sizing: border-box;

    border: 1px dashed #0c2358;
    border-radius: 10px;
    &.fui-hide-border {
      border: none;
    }
  } */
}
@media (max-width: 600px) {
  .fui-dropzone-root {
    font-size: 1.3em;
  }
}
.fui-dropzone-root.clickable {
  cursor: pointer;
}

.files-ui-header {
  min-height: 23px;
  /*  height: 22px;
  position: absolute; 
  top: 0;
  */
  cursor: text;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-family: inherit;
  font-size: 1rem;
}
@media (max-width: 960px) {
  .files-ui-header {
    font-size: 0.8rem;
  }
}

.files-ui-footer {
  /*   border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px; */
  box-sizing: border-box;
  cursor: text;
  /* height: 23px;
  position: absolute;
  bottom: 0;
  left: 0; */
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; */
  font-family: inherit;
  padding-left: 10px;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: left;
}
@media (max-width: 960px) {
  .files-ui-footer {
    padding-left: 1px;
    font-size: 0.9rem;
  }
}`);B(`.filesui-base-ripple-absolute {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
}
.filesui-base-ripple-absolute .filesui-base-ripple-relative {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.filesui-base-ripple-absolute .filesui-base-ripple-relative span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 500ms linear;
  background-color: rgba(255, 255, 255, 0.7);
}
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}`);var V=function(e){if(typeof e=="number")return e;switch(e){case"micro":return 8;case"small":return 15;case"semi-medium":return 18;case"medium":return 25;case"large":return 28;case"extra-large":return 32;default:return 24}},Ja=function(e){var n=e.size,a=e.color,r=e.colorFill,o=e.onClick,t=e.style,l=e.className,s=V(n),c=t||{};return i.createElement("svg",{style:o?h({},h({cursor:"pointer"},c)):c,onClick:function(u){ie(u),o==null||o(u)},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",className:l||""},i.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",opacity:".87"}),i.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",fill:r||"none",opacity:".5"}),i.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"}))},Ka=function(e){var n=e.size,a=e.color,r=e.colorFill,o=e.onClick,t=e.style,l=e.className,s=V(n),c=t||{};return S.createElement("svg",{className:l||"",style:o?h({},h({cursor:"pointer"},c)):c,onClick:function(){return o==null?void 0:o()},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000"},S.createElement("path",{d:"M0 0h24v24H0z",fill:r||"none"}),S.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))},Zi=function(e){var n=e.size,a=e.color,r=e.onClick,o=e.style,t=e.className,l=V(n),s=o||{};return S.createElement("svg",{className:t||"",style:r?h({},h({cursor:"pointer"},s)):s,onClick:function(){return r==null?void 0:r()},xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:l?"".concat(l,"px"):"24px",viewBox:"0 0 24 24",width:l?"".concat(l,"px"):"24px",fill:a||"#000000"},S.createElement("g",null,S.createElement("rect",{fill:"none",height:l||"24",width:l||"24"})),S.createElement("g",null,S.createElement("g",null,S.createElement("path",{d:"M16,11h-1V3c0-1.1-0.9-2-2-2h-2C9.9,1,9,1.9,9,3v8H8c-2.76,0-5,2.24-5,5v7h18v-7C21,13.24,18.76,11,16,11z M11,3h2v8h-2V3 z M19,21h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H9v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H5 v-5c0-1.65,1.35-3,3-3h8c1.65,0,3,1.35,3,3V21z"}))))},Xe=function(e){var n=e.size,a=e.color,r=e.colorFill,o=e.onClick,t=e.style,l=e.className,s=V(n),c=t||{};return i.createElement("svg",{className:l||"",style:o?h({cursor:"pointer"},c):c,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){ie(u),o==null||o(u)}},i.createElement("path",{d:"M0 0h24v24H0V0z",fill:r||"none"}),i.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}))},Gi=function(e){var n=e.size,a=e.color,r=e.colorFill,o=e.onClick,t=e.style,l=e.className,s=V(n),c=t||{};return i.createElement("svg",{className:l||"",style:o?h({cursor:"pointer"},c):c,enableBackground:"new 0 0 24 24",xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){ie(u),o==null||o(u)}},i.createElement("path",{d:"M0 0h24v24H0V0z",fill:r||"none"}),i.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-9-3.82l-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z"}))},Ya=function(e){var n=e.size,a=e.color,r=e.onClick,o=e.style,t=e.className,l=V(n),s=o||{};return S.createElement("svg",{className:t||"",style:r?h({},h({cursor:"pointer"},s)):s,onClick:function(){return r==null?void 0:r()},xmlns:"http://www.w3.org/2000/svg",height:l?"".concat(l,"px"):"24px",viewBox:"0 0 24 24",width:l?"".concat(l,"px"):"24px",fill:a||"#000000"},S.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),S.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z",opacity:".4"}),S.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"}))},Wi=function(e){var n=e.size,a=e.color,r=e.colorFill,o=e.onClick,t=e.style,l=e.className,s=V(n),c=t||{};return i.createElement("svg",{className:l||"",style:o?h({cursor:"pointer"},c):c,enableBackground:"new 0 0 24 24",xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){ie(u),o==null||o(u)}},i.createElement("g",null,i.createElement("rect",{fill:r||"none",height:s,width:s})),i.createElement("g",null,i.createElement("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"})))},Xi=function(e){var n=e.size,a=e.color,r=e.onClick,o=e.style,t=e.className,l=V(n)-2,s=o||{};return i.createElement("svg",{className:t||"",style:r?h({cursor:"pointer"},s):s,"aria-hidden":"true","aria-label":"info",fill:a||"#000000",role:"img",transform:"",version:"1.1",viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",height:"".concat(l,"px"),width:"".concat(l,"px"),onClick:function(c){ie(c),r==null||r(c)}},i.createElement("path",{d:"M22.378 0c2.412 0 3.618 1.642 3.618 3.523 0 2.349-2.095 4.522-4.822 4.522-2.284 0-3.616-1.35-3.553-3.582 0-1.877 1.586-4.462 4.757-4.462zM14.956 36c-1.904 0-3.299-1.174-1.967-6.343l2.185-9.166c0.38-1.465 0.443-2.054 0-2.054-0.571 0-3.040 1.012-4.504 2.011l-0.95-1.584c4.63-3.935 9.956-6.241 12.242-6.241 1.903 0 2.219 2.291 1.269 5.814l-2.504 9.634c-0.443 1.701-0.254 2.288 0.191 2.288 0.571 0 2.443-0.706 4.282-2.173l1.080 1.465c-4.504 4.585-9.423 6.349-11.324 6.349z"}))},$i=function(e){var n=e.size,a=e.color,r=e.colorFill,o=e.onClick,t=e.style,l=e.className,s=V(n),c=t||{};return S.createElement("svg",{className:l||"",style:o?h({cursor:"pointer"},c):c,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){ie(u),o==null||o(u)}},S.createElement("path",{d:"M0 0h24v24H0V0z",opacity:".9",fill:r||"none"}),S.createElement("path",{d:"M8 5v14l11-7L8 5z"}))},Ji=function(e){var n=e.size,a=e.color,r=e.colorFill,o=e.onClick,t=e.style,l=e.className,s=V(n),c=t||{};return S.createElement("svg",{style:o?h({},h({cursor:"pointer"},c)):c,onClick:function(){return o==null?void 0:o()},xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",className:l||""},S.createElement("g",null,S.createElement("rect",{fill:r||"none",height:n||"24",width:n||"24"})),S.createElement("g",null,S.createElement("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z"})))},Ki=function(e){var n=e.size,a=e.color,r=e.colorFill,o=e.onClick,t=e.style,l=e.className,s=V(n),c=t||{};return S.createElement("svg",{className:l||"",style:o?h({},h({cursor:"pointer"},c)):c,onClick:function(){return o==null?void 0:o()},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000"},S.createElement("rect",{fill:r||"none",height:s,width:s}),S.createElement("path",{d:"M18,15.17V15h2v2.17L18,15.17z M15.41,12.59L17,11l-1.41-1.41L14,11.17L15.41,12.59z M13,10.17V4h-2v4.17L13,10.17z M21.19,21.19l-1.78-1.78L2.81,2.81L1.39,4.22l6.19,6.19L7,11l5,5l0.59-0.59L15.17,18H6v-3H4v3c0,1.1,0.9,2,2,2h11.17l2.61,2.61 L21.19,21.19z"}))};B(`@keyframes filesui-rotate-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.filesui-rotate {
  cursor: default;
}

@media (prefers-reduced-motion: no-preference) {
  .filesui-rotate {
    animation: filesui-rotate-spin infinite 2s linear;
  }
}`);var Yi=function(e){var n=e.size,a=e.color,r=e.onClick,o=e.style,t=e.className,l=e.spin,s=V(n),c=o||{},u=t||"";return u+=l?"filesui-rotate":"",S.createElement("svg",{className:u,style:r?h({},h({cursor:"pointer"},c)):c,onClick:function(){return r==null?void 0:r()},xmlns:"http://www.w3.org/2000/svg",height:s?"".concat(s,"px"):"24px",viewBox:"0 0 24 24",width:s?"".concat(s,"px"):"24px",fill:a||"#000000"},S.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),S.createElement("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}))},Qi=function(e){var n=e.size,a=e.color,r=e.colorFill,o=e.onClick,t=e.style,l=e.className,s=V(n),c=t||{};return S.createElement("svg",{className:l||"",style:o?h({cursor:"pointer"},c):c,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){ie(u),o==null||o(u)}},S.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),S.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z",fill:r||"none"}),S.createElement("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}))},eo=function(e){var n=e.maxFileSize,a=e.numberOfValidFiles,r=e.onReset,o=e.onClean,t=e.maxFiles,l=e.onUploadStart,s=e.isUploading,c=e.urlPresent,u=e.localization,d=e.borderRadius,f=e.style,m=e.className,p=m===void 0?"":m,b=e.resetStyles,v=e.color,g=e.firstClassName,x=g===void 0?"":g,w=We(u).header,N=function(){o==null||o()},E=function(){l==null||l()},k=function(){var z=[];l&&c&&a&&(s?z.push(i.createElement(Yi,{spin:!0,color:v})):z.push(i.createElement(i.Fragment,null,i.createElement(i.Fragment,null,w.uploadFilesMessage),i.createElement(Ji,{color:v,onClick:E}))),z.push(i.createElement(i.Fragment,null,","," ")));var A=w.maxSizeMessage,j=ce(n);j&&(z.push(A(j)),z.push(i.createElement(i.Fragment,null,","," ")));var U=w.validFilesMessage;return t&&(z.push(U(a,t)),z.push(i.createElement(i.Fragment,null,","," "))),o&&z.push(i.createElement(Zi,{color:v,onClick:N,size:"semi-medium"})),r&&z.push(i.createElement(Ja,{color:v,onClick:function(){return r==null?void 0:r()}})),z};function M(z){z.stopPropagation()}var F=b?p:re("files-ui-header "+x,p),R=b?f:h(h({},f),{borderTopLeftRadius:d,borderTopRightRadius:d});return i.createElement("div",{className:F,onClick:M,style:R},k().map(function(z,A){return i.createElement("span",{key:A,style:{display:"flex"}},z)}))},no=function(e){var n=e.accept,a=e.message,r=e.localization,o=e.borderRadius,t=e.style,l=e.className,s=l===void 0?"":l,c=e.resetStyles,u=c===void 0?!1:c,d=e.allowedTypesLabel,f=d===void 0?!0:d,m=e.customMessage,p=m===void 0?void 0:m,b=e.firstClassName,v=b===void 0?"":b,g=We(r).footer,x=g.acceptCustom;function w(k){ie(k)}var N=u?s:re("files-ui-footer ".concat(v),s),E=u?t:h(h({},t),{borderBotomLeftRadius:o,borderBotomRightRadius:o});return i.createElement("div",{className:N,onClick:w,style:E},p?i.createElement(i.Fragment,null,p):i.createElement(i.Fragment,null,a||(n?x(n):f?g.acceptAll:void 0)))},te;(function(e){function n(l){var s="";if(typeof window>"u"||typeof l>"u"||l===null)return"";if(document.getElementById(l.id))return l.id;s=l.id;var c=document.createElement("style");c.id=s,c.setAttribute("type","text/css");var u=Ba(l.sheetRules||[])+l.raw||"";c.textContent=u;var d=document.head.appendChild(c);return d?s:""}e.insertStyleSheet=n;function a(l,s){var c="";if(typeof window>"u"||typeof l>"u"||l===null||s===null)return"";var u=document.getElementById(l);return u?(u.textContent=Ba(s),c):""}e.editStyleSheet=a;function r(l){var s="";if(!l)return"";var c=document.getElementById(l);return c&&(document.head.removeChild(c),s=l),s}e.removeStyleSheet=r;function o(l){if(typeof l>"u"||l===null)return!1;var s=document.getElementById(l);return!!s}e.existStyleSheet=o;function t(l){return typeof l>"u"||l===null?null:l}e.makeStyleSheet=t})(te||(te={}));function ao(e){return e?!/[a-z]/.test(e)&&/[A-Z]/.test(e):!1}function Aa(e){for(var n="",a=" ",r=!1,o=0;o<e.length;o++){var t=e[o];if(ao(t)){a=t,r=!0;break}}if(r){var l=e.split(a);n="".concat(l[0],"-").concat(a.toLowerCase()).concat(l[1])}else n=e;return n}function to(e){return e?e.includes(":"):!1}function ro(e){var n="",a=e.trim().split(" ");if(a.length>1){for(var r=0;r<a.length;r++)n+=".".concat(a[r]);n+=`{
`}else n+=".".concat(e,`{
`);return n}function Ba(e){if(typeof e>"u"||e===null)return"";for(var n="",a=[],r=0;r<e.length;r++){var o=e[r],t="";t+=ro(o.className);for(var l=Object.keys(o.rules),s=0;s<l.length;s++){var c=l[s],u=Aa(c);if(to(u)){var d=o.className+u;a.push({className:d,rules:o.rules[u]})}else{var f=o.rules[c];t+="	".concat(u," : ").concat(f,`;
`)}}t+=`}
`,n+=t}for(var m=0;m<a.length;m++){var t="",o=a[m],l=Object.keys(o.rules);t+=".".concat(o.className,`{
`);for(var s=0;s<l.length;s++){var c=l[s],u=Aa(c),f=o.rules[c];t+="	".concat(u," : ").concat(f,`;
`)}t+=`}
`,n+=t}return n}var io=function(){function e(){}return e.getNextId=function(){return e.nextButtonClassNameNumber++,e.nextButtonClassNameNumber},e.nextButtonClassNameNumber=0,e.makeDynamicStyle=function(n,a,r,o,t,l){var s={id:"material-button-styles-".concat(n),sheetRules:[{className:"material-button.".concat(a,"-").concat(n),rules:{}},{className:"material-button-root.".concat(a,"-").concat(n),rules:{}}]},c=s.sheetRules;if(!r)switch(a){case"contained":c[0].rules={color:Wa(yn(t)),backgroundColor:T(o),textDecoration:l},c[1].rules={":hover":{backgroundColor:Ui(T(o))}};break;case"outlined":c[0].rules={border:"1px solid ".concat(T(o,.5)),color:T(o),backgroundColor:"transparent",textDecoration:l},c[1].rules={":hover":{border:"1px solid ".concat(T(o,1)),backgroundColor:T(o,.085)}};break;case"text":c[0].rules={color:T(o),backgroundColor:"transparent",textDecoration:l},c[1].rules={":hover":{backgroundColor:T(o,.085)}};break}return s.sheetRules=c,s},e}(),oo=function(e,n,a,r,o,t,l,s){var c="material-button-root material-button",u=i.useState(""),d=u[0],f=u[1],m=i.useState(!1),p=m[0],b=m[1],v=i.useState(void 0),g=v[0],x=v[1],w=function(E,k,M,F,R,z){var A=c,j=io.makeDynamicStyle(E,k,M,F,z,R),U="";if(p?te.editStyleSheet(d,j.sheetRules||[]):(U=te.insertStyleSheet(j),f(U),U!==""&&b(!0)),M?A+=" disabled":A+=" ".concat(k," ").concat(k,"-").concat(E),t&&t.length>0&&(A+=" ".concat(t)),R){var W=R&&["uppercase","capitalize","lowercase","none"].includes(R==null?void 0:R.toLowerCase())?R.toLowerCase():"uppercase";A+=" ".concat(W)}x(A)};i.useEffect(function(){s||w(l,e,n,a,o,r)},[e,n,a,o,r,t,l,s]);var N=function(E,k){E&&(te.removeStyleSheet(k),b(!1),f(""))};return i.useEffect(function(){return function(){return N(p,d)}},[p,d]),g};B(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.material-button-root {
  border: 0;
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  text-transform: none;
  color: white;
}

.material-button {
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  min-width: 64px;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.02857em;
}

.material-button.uppercase {
  text-transform: uppercase;
}

.material-button.lowercase {
  text-transform: lowercase;
}

.material-button.capitalize {
  text-transform: capitalize;
}

.material-button.contained {
  padding: 6px 16px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.material-button.outlined {
  padding: 5px 15px;
}

.material-button.text {
  padding: 5px 15px;
}

.material-button-root.contained:hover {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.material-button span.material-button-label {
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
}

span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 500ms linear;
  background-color: rgba(255, 255, 255, 0.7);
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
.material-button-root.disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.26);
  padding: 6px 16px;
}
.material-button-root.disabled.darkmode {
  background-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.3);
}

/* @media screen and (max-width: 600px) {
  .material-button {
    min-width: 30px;
    font-size: 0.78rem;
    line-height: 1.5;
    letter-spacing: 0.025em;
  }
  .material-button.contained {
    padding: 4px 13px;
  }
  .material-button.outlined {
    padding: 4px 12px;
  }
}
 */`);var ea=S.createContext({}),lo=function(e){var n=e.disabled,a=e.href,r=e.textTransform,o=e.variant,t=o===void 0?"contained":o,l=e.color,s=l===void 0?"#1976d2":l,c=e.textColor,u=c===void 0?"white":c,d=e.children,f=e.className,m=e.style,p=e.onClick,b=e.resetStyles,v=e.disableRipple,g=e.darkMode,x=e.id,w=xn(e,["disabled","href","textTransform","variant","color","textColor","children","className","style","onClick","resetStyles","disableRipple","darkMode","id"]),N=i.useContext(ea).darkMode,E=g!==void 0?g:N,k=i.useMemo(function(){return x||Yn.getNextId()+""},[x]),M=oo(t,n,s,u,r,f,k.replace(":","").replace(":",""),b),F=M&&E?re(M,"darkmode"):M;function R(z){z.preventDefault(),v||Vi(z,t,s),p==null||p(z)}return F!==void 0||b?i.createElement(a?"a":"button",h({className:b&&f?f:F,"data-testid":a?"dui-anchor":"dui-button",onClick:R,href:a,style:m,children:i.createElement("span",{className:"material-button-label"},d),disabled:n},w)):i.createElement(i.Fragment,null,"loading styes")};B(`.files-ui-buttons-container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  gap: 10px;
}
.files-ui-buttons-container.top {
  padding-bottom: 10px;
}
.files-ui-buttons-container.bottom {
  padding-top: 10px;
}`);var Ua=function(e){var n=e.cleanButton,a=e.abortButton,r=e.className,o=e.style,t=e.deleteButton,l=e.uploadButton,s=e.onAbort,c=e.onClean,u=e.onDelete,d=e.onUpload,f=e.top;e.disabled;var m=[n?h(h({},n),{label:n.label||"Clean",onClick:n.onClick||c}):void 0,t?h(h({},t),{label:t.label||"Delete",onClick:t.onClick||u}):void 0,l?h(h({},l),{label:l.label||"Upload",onClick:l.onClick||d}):void 0,a?h(h({},a),{label:a.label||"Abort",onClick:a.onClick||s}):void 0].filter(function(v){return v!==void 0}),p="".concat(f?" top":" bottom"),b=re("files-ui-buttons-container"+p,r);return i.createElement("div",{className:b,style:o},m.map(function(v,g){var x=v.disabled,w=v.children,N=v.label,E=v.resetStyles,k=v.className,M=v.style,F=v.onClick;return i.createElement(lo,{key:g,className:k,style:M,resetStyles:E,onClick:function(R){return F==null?void 0:F(R)},disabled:x},w||N)}))},so=function(e){var n=e.onDrop,a=e.onDragLeave,r=e.className,o=e.open,t=e.style;return i.createElement("div",{className:r,onDragLeave:a,onDrop:n,style:t||{display:o?void 0:"none"}})};function co(e,n,a,r,o){var t=a===void 0&&r===void 0&&o===void 0?"default":e.replace(":","_").replace(":","_"),l="fui-dropzone-root fui-dropzone-border",s=i.useState(""),c=s[0],u=s[1],d=i.useState(!1),f=d[0],m=d[1],p=i.useState(void 0),b=p[0],v=p[1],g=i.useState(void 0),x=g[0],w=g[1],N=i.useState(void 0),E=N[0],k=N[1],M=i.useState(void 0),F=M[0],R=M[1],z=function(A,j,U,W){var O=l,Z=uo(t,j,U,W),_="";f?te.editStyleSheet(c,Z.sheetRules||[]):(_=te.insertStyleSheet(Z),u(_),_!==""&&m(!0)),O+=" files-ui-dropzone-extra-".concat(t),A&&(O="".concat(O," ").concat(A)),v(O),w("files-ui-header-border-rd-".concat(t)),k("files-ui-footer-border-rd-top-bg-color-".concat(t)),R("files-ui-disabled-layer-color-".concat(t))};return i.useEffect(function(){z(n,a,r,o)},[n,a,r,o]),[b,x,E,F]}var uo=function(e,n,a,r){var o={className:"files-ui-dropzone-extra-".concat(e),rules:{color:T(n),border:"1px dashed ".concat(T(n)),borderRadius:Ee,background:a,minHeight:typeof r=="number"?"".concat(r,"px"):r}},t={className:"files-ui-root-border-hide",rules:{borderColor:"transparent"}},l={className:"files-ui-header-border-rd-".concat(e),rules:{"border-top-left-radius":Ee,"border-top-right-radius":Ee}},s={className:"files-ui-footer-border-rd-top-bg-color-".concat(e),rules:{"border-bottom-left-radius":Ee,"border-bottom-right-radius":Ee,background:T(n,.129),borderTop:"1px dotted ".concat(T(n))}},c={className:"files-ui-disabled-layer-color-".concat(e),rules:{borderRadius:Ee,background:T(n,.38)}},u=[o,t,l,s,c];return{id:"files-dropzone-ui-style-id-"+e,sheetRules:u}},fo=function(e,n,a,r,o,t,l,s,c){var u=i.useState([]),d=u[0],f=u[1],m=i.useState(0),p=m[0],b=m[1];return i.useEffect(function(){var v=Wn.getExtFileInstanceList(e);a?v&&v.forEach(function(g){var x=n.findIndex(function(N){return N.id===g.id});if(x===-1)g.extraData={deleted:!0};else{var w=n[x];Bi(g,w)}}):f(n)},[e,n]),i.useEffect(function(){if(!c){f(d.map(function(x){return h(h({},x),{valid:void 0})}));return}var v={maxFileSize:r,accept:o},g=Xn(d,t?t-p:1/0,v,l,t,s);f(g)},[c,r,o,t,s]),i.useEffect(function(){b(c?d.filter(function(v){return v.valid}).length:d.length)},[d,c]),[d,p,f]},mo=function(e,n){return{id:"files-ui-drop-layer-style-id-"+e,sheetRules:[{className:"dropzone-layer-".concat(e),rules:{backgroundColor:T(n,.4),borderRadius:Ee,position:"absolute",left:0,top:0,width:"0%",height:"0%",zIndex:20,border:"0px dashed ".concat(T(n))}},{className:"dropzone-layer-drag",rules:{width:"100%",height:"100%",borderWidth:"2px"}}]}},po=function(e,n,a){var r=i.useState(""),o=r[0],t=r[1],l=i.useState(!1),s=l[0],c=l[1],u=i.useState(""),d=u[0],f=u[1],m=n===void 0?"default":e.replace(":","_").replace(":","_");return i.useEffect(function(){var p=function(b){var v="",g=mo(m,b),x="";m==="default"&&!s?te.existStyleSheet("files-ui-drop-layer-style-id-"+m)?(c(!0),t("files-ui-drop-layer-style-id-"+m)):(x=te.insertStyleSheet(g),t(x),x!==""&&c(!0)):s?te.editStyleSheet(o,g.sheetRules||[]):(x=te.insertStyleSheet(g),t(x),x!==""&&c(!0)),v+="dropzone-layer-".concat(m),f(v)};a&&p(n)},[n,a]),d},vo=function(e,n,a,r,o,t,l,s,c){var u=i.useState(!1),d=u[0],f=u[1],m=i.useState(!1),p=m[0],b=m[1],v=i.useState(""),g=v[0],x=v[1],w=i.useState(void 0),N=w[0],E=w[1],k=i.useState(void 0),M=k[0],F=k[1],R=i.useState(!1),z=R[0],A=R[1],j=function(U,W,O,Z,_,ne,q,P,Fe,Ue){return Re(void 0,void 0,void 0,function(){var me,ue,pe;return Le(this,function(G){switch(G.label){case 0:return!U&&!W&&!O?[2]:(me=(U?ci(U,P):ui(W,O,P)).url,x(me),ne&&q?(b(!0),E(ne),F(q),A(!0),[2]):[3,1]);case 1:return ne?(f(!0),E(ne),A(!0),[2]):[3,2];case 2:return q?(b(!0),F(q),A(!0),[3,5]):[3,3];case 3:return ue=go(U,O),f(ue[0]==="image"),["mp4","ogg","webm"].includes(ue[1])&&b(ue[0]==="video"),_&&(Z||typeof Z>"u"||Z===null)&&ue[0]==="image"?(pe=void 0,U?[4,Ta(U)]:[3,5]):[3,5];case 4:pe=G.sent(),pe&&E(pe),G.label=5;case 5:return A(!0),[2]}})})};return i.useEffect(function(){return j(e,n,a,r,o||!1,t,l,s),function(){E(void 0),f(!1),b(!1),A(!1)}},[e,n,a,r,o,t,l,s]),[z,d,p,g,N,M]},go=function(e,n){if(e)if(e.type){var a=e.type.split("/");return[a[0],a[1]]}else return["octet","octet"];else{var a=n==null?void 0:n.split("/");return a&&a.length>1?[a[0],a[1]]:["octet","octet"]}},bo=function(e){var n=i.useState(!1),a=n[0],r=n[1],o=i.useState(e),t=o[0],l=o[1];return i.useEffect(function(){if(l(e),["uploading","preparing"].includes(t||"")&&["success","error","aborted"].includes(e||"")){setTimeout(function(){r(!1)},3500);return}else r(e==="preparing"||e==="uploading")},[e]),a},ho=function(e,n){var a=i.useState(void 0),r=a[0],o=a[1];return e!==void 0?r!==e&&o(e):n!=null&&n.upload.onprogress===null&&(n.upload.onprogress=function(t){o(t.loaded/t.total*100)},o(0)),r},xo=function(e,n,a){return gn.someValidUrl(a||[])||n!=null||e!=null&&e.length>0},To=function(e){var n=Xa(e,ji),a=n.onChange,r=n.value,o=r===void 0?[]:r,t=n.accept,l=n.maxFileSize,s=n.maxFiles,c=n.validator,u=n.cleanFiles,d=n.onClean,f=n.autoClean,m=n.uploadConfig,p=n.fakeUpload,b=n.groupUpload,v=n.onUploadStart,g=n.onUploadFinish,x=n.background,w=n.color,N=n.minHeight,E=n.style,k=n.className,M=n.label,F=n.localization,R=n.disableRipple,z=n.onDragEnter,A=n.onDragLeave,j=n.actionButtons,U=n.dropOnLayer,W=n.header,O=n.footer,Z=n.headerConfig,_=Z===void 0?{}:Z,ne=n.footerConfig,q=ne===void 0?{}:ne,P=n.disabled,Fe=n.clickable,Ue=n.behaviour,me=n.children,ue=xn(n,["onChange","value","accept","maxFileSize","maxFiles","validator","cleanFiles","onClean","autoClean","uploadConfig","fakeUpload","groupUpload","onUploadStart","onUploadFinish","background","color","minHeight","style","className","label","localization","disableRipple","onDragEnter","onDragLeave","actionButtons","dropOnLayer","header","footer","headerConfig","footerConfig","disabled","clickable","behaviour","children"]),pe=i.useContext(ea).localization,G=F!==void 0?F:pe,X=m,ze=X.url,$e=X.method,wn=X.headers,En=X.uploadLabel,Ce=X.cleanOnUpload,xe=Ce===void 0?!0:Ce,Je=X.preparingTime,kn=Je===void 0?1500:Je,Ke=X.autoUpload,$=Ke===void 0?!1:Ke,Ye=X.urlFromExtFile,Qe=X.asBlob,Fn=Qe===void 0?!1:Qe,oe=j,Se=oe.position,en=oe.abortButton,_e=oe.deleteButton,Ne=oe.uploadButton,ye=oe.cleanButton,Ie=oe.style,Te=oe.className,nn=E==null?void 0:E.borderRadius,je=_.cleanFiles,zn=je===void 0?!0:je,an=_.deleteFiles,Cn=an===void 0?!0:an,tn=_.maxFileSize,rn=tn===void 0?!0:tn,we=_.uploadFiles,Sn=we===void 0?!0:we,on=_.uploadingIcon,Nn=on===void 0?!0:on,ln=_.validFilesCount,Mn=ln===void 0?!0:ln,sn=_.customHeader,K=_.className,na=_.resetStyles,at=na===void 0?!1:na,tt=_.style,aa=q.customFooter,ta=q.noMissingFilesLabel,rt=ta===void 0?!0:ta,ra=q.uploadProgressMessage,ia=ra===void 0?!0:ra,oa=q.uploadResultMessage,it=oa===void 0?!0:oa,Oe=We(G),la=i.useRef(null),sa=i.useRef(null),Dn=i.useRef(null),ca=i.useState(!1),Rn=ca[0],Ln=ca[1],ua=i.useState(!1),H=ua[0],Pe=ua[1],da=i.useState(""),ot=da[0],He=da[1],Ve=i.useMemo(function(){return Yn.getNextId()+""},[]),ve=di(t,l,s,c),An=fo(Ve,o||[],H,l,t,s,c,G,ve),ge=An[0],Bn=An[1],qe=An[2],cn=xo(ze,Ye,ge),un=function(D){return Re(void 0,void 0,void 0,function(){var y,L,se,Me,xa,jn,ya,On,wa,Ea,Pn,fn,ae,De,Ze,mn,ka,Hn;return Le(this,function(I){switch(I.label){case 0:return Pe(!0),H||D.length===0||!cn?(Pe(!1),[2]):D.length===0?(He(Oe.noFilesMessage),setTimeout(function(){Pe(!1)},1500),[2]):(y=[],L=D.length,se=D.filter(function(J){return gi(J,ve)}).length,Me=0,xa=0,jn=Oe.uploadingMessage,se>0?(ia&&He(jn("".concat(se,"/").concat(L))),v==null||v(D),y=Wn.setFileListMapPreparing(Ve,D,ve,xe)||[],ya=he([],y,!0).map(function(J){return J.toExtFile()}),le(ya,!0),[4,fi(kn)]):(setTimeout(function(){rt&&He(Oe.noFilesMessage),Pe(!1)},1500),[2]));case 1:if(I.sent(),On=[],!b)return[3,6];wa=function(J,mt,Fa){y.forEach(function(qn){return qn.uploadStatus="uploading"}),le(be(y),!0);for(var za=new FormData,Vn=0;Vn<Fa.length;Vn++)za.append("files",Fa[Vn].file);return new Promise(function(qn,Ca){var Y=new XMLHttpRequest;Y.upload.onprogress=function(pn){y.forEach(function(pt){pt.progress=pn.loaded/pn.total*100}),le(be(y),!0)},Y.responseType="json",Y.onload=function(){Y.status>=200&&Y.status<300?(console.log(Y.response),console.log(typeof Y.response),qn(Y.response)):Ca(Y.response)},Y.onerror=function(pn){Ca(pn)},Y.open(J,mt),Y.send(za)})},I.label=2;case 2:return I.trys.push([2,4,,5]),[4,wa("POST",ze,y)];case 3:return Ea=I.sent(),y.forEach(function(J){return J.uploadStatus="success"}),y.forEach(function(J){return J.uploadMessage=Ea.message}),[3,5];case 4:return Pn=I.sent(),y.forEach(function(J){return J.uploadStatus="error"}),y.forEach(function(J){return J.uploadMessage=Pn.message}),console.log(Pn),[3,5];case 5:return le(be(y),!0),[3,21];case 6:fn=0,I.label=7;case 7:return fn<y.length?(ae=y[fn],ae.uploadStatus==="preparing"&&!(!((Hn=ae.extraData)===null||Hn===void 0)&&Hn.deleted)?[4,Gn()]:[3,19]):[3,21];case 8:return I.sent(),Ai(ae),ia&&He(jn("".concat(++xa,"/").concat(se))),le(be(y),!0),De=void 0,p?[4,mi(ae,Oe)]:[3,13];case 9:De=I.sent(),Ze=0,I.label=10;case 10:return Ze<100?(Ze+=pi(21,35),ae.progress=Ze>100?100:Ze,[4,Gn(1e3)]):[3,12];case 11:return I.sent(),le(be(y),!0),[3,10];case 12:return[3,16];case 13:return I.trys.push([13,15,,16]),[4,Ri(ae,ze,Ye,$e,wn,En,Fn)];case 14:return De=I.sent(),[3,16];case 15:return I.sent(),De=Li(ae.toExtFile()),[3,16];case 16:return mn=De,ae.uploadStatus=mn.uploadStatus,ae.uploadMessage=mn.uploadMessage,ae.uploadStatus==="aborted"?[3,18]:[4,Gn()];case 17:I.sent(),I.label=18;case 18:return le(be(y),!0),mn.uploadStatus==="error"&&Me++,On.push(De),[3,20];case 19:le(be(y),!0),I.label=20;case 20:return fn++,[3,7];case 21:return qe(be(y)),g==null||g(On),ka=Oe.uploadFinished,it&&He(ka(se-Me,Me)),setTimeout(function(){Pe(!1)},2e3),[2]}})})},fa=function(){var D=Wn.getExtFileInstanceList(Ve);D&&D.forEach(function(y){(y.uploadStatus==="uploading"||y.uploadStatus==="preparing")&&(y.xhr!==null&&y.xhr!==void 0&&y.xhr.abort(),y.uploadStatus="aborted",y.uploadMessage="Upload was aborted by user")})},dn=co(Ve,k,w,x,N),Un=dn[0],lt=dn[1],st=dn[2],ct=dn[3],ma=po(Ve,w,!z&&!A);i.useEffect(function(){var D={maxFileSize:l,accept:t},y=Xn(ge,s?s-Bn:1/0,D,c,s,G);qe(y)},[l,t,s,G]);var le=function(D,y){var L=he(Ue==="add"&&!y?he([],ge,!0):[],D,!0);a?a(L):qe(L),$&&!y&&un(L)},ut=function(D){var y=D.target.files,L=Ma(y);ve&&(L=pa(L),f&&(L=L.filter(function(se){return se.valid}))),cn&&(L=Ra(L)),vi(Dn.current),le(L)},pa=function(D){var y={maxFileSize:l,accept:t},L=Bn;Ue==="replace"&&(L=0);var se=Xn(D,s?s-L:1/0,y,c,s,G);return se};function dt(){!Fe||P||H||(ga(),Pi(Dn.current))}var ft=function(D){Jn(D),!P&&Ln(!0)},va=function(D){P||(Jn(D),Ln(!1))},ga=function(){Hi(la.current,sa.current,w)},ba=function(D){return Re(void 0,void 0,void 0,function(){var y,L;return Le(this,function(se){return Qn(D),P?[2]:H?[2]:(R||ga(),Ln(!1),y=D.dataTransfer.files,L=Ma(y),ve&&(L=pa(L),f&&(L=L.filter(function(Me){return Me.valid}))),cn&&(L=Ra(L)),le(L),[2])})})},_n=function(){a?a([]):qe([])},In=function(){d?d():a?a(ge.filter(function(D){return D.valid})):qe(ge.filter(function(D){return D.valid}))},Tn=Un?Rn&&U||P?re(Un,"files-ui-root-border-hide"):Un:void 0,ha=Tn?Fe&&!P?re(Tn,"clickable"):Tn:void 0;return ha?i.createElement(i.Fragment,null,Se==="before"&&i.createElement(Ua,{disabled:P,abortButton:H?en:void 0,onAbort:fa,deleteButton:_e,onDelete:H?void 0:_n,uploadButton:!H&&!$?Ne:void 0,onUpload:$?void 0:function(){return un(ge)},cleanButton:ve&&!H&&!f?ye:void 0,onClean:In,style:Ie,className:Te,top:!0}),i.createElement("div",h({style:E,className:ha},ue,{onClick:dt,onDragOver:ft,onDragLeave:U?void 0:va,onDrop:U?void 0:ba}),!R&&i.createElement("div",{ref:la,className:"filesui-base-ripple-absolute",style:{borderRadius:E==null?void 0:E.borderRadius}},i.createElement("div",{ref:sa,className:"filesui-base-ripple-relative"})),i.createElement(i.Fragment,null,W?i.createElement(i.Fragment,null,sn?i.createElement(i.Fragment,null,sn):i.createElement(eo,{firstClassName:lt,color:T(w),style:tt,className:K,resetStyles:at,borderRadius:nn,isUploading:H&&Nn,onReset:!H&&Cn?_n:void 0,maxFileSize:l&&rn?l:void 0,maxFiles:s&&Mn?s:void 0,localization:G,urlPresent:cn&&Sn,onUploadStart:!$&&!Ne?function(){return un(ge)}:void 0,numberOfValidFiles:Bn,onClean:!zn||H||ye||f?void 0:(u||d)&&ve?In:void 0})):i.createElement(i.Fragment,null)),i.createElement(Oi,{label:M,localization:G},me),i.createElement(i.Fragment,null,aa?i.createElement(i.Fragment,null,aa):i.createElement(i.Fragment,null,O&&i.createElement(no,h({firstClassName:st,borderRadius:nn,accept:t,message:H?ot:void 0,localization:G},q)))),U&&i.createElement(so,{open:Rn,className:Rn?"".concat(ma," dropzone-layer-drag"):ma,onDragLeave:va,onDrop:ba,style:{borderRadius:E==null?void 0:E.borderRadius}}),i.createElement(Ti,{multiple:s?s>1:!0,accept:t||"",inputRef:Dn,onChange:ut}),i.createElement(qi,{open:P,className:ct})),Se==="after"&&i.createElement(Ua,{disabled:P,abortButton:H?en:void 0,onAbort:fa,deleteButton:_e,onDelete:H?void 0:_n,uploadButton:!H&&!$?Ne:void 0,onUpload:$?void 0:function(){return un(ge)},cleanButton:ve&&!H&&!f?ye:void 0,onClean:In,style:Ie,className:Te,top:!1})):i.createElement(i.Fragment,null)};B(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.fui-avatar-main-container {
  width: 200px;
  height: 200px;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(128, 128, 128, 0.486);
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
}
.fui-avatar-main-container.square {
  border-radius: 0px;
}
.fui-avatar-main-container.circle {
  border-radius: 50%;
}
.fui-avatar-main-container .fui-avatar-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.fui-avatar-main-container:hover .fui-avatar-label.hide {
  display: flex;
}
.fui-avatar-main-container .fui-avatar-label {
  margin: 0;
  overflow: hidden;
  background-color: rgba(128, 128, 128, 0.486);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}
.fui-avatar-main-container .fui-avatar-label.hide {
  display: none;
}
.fui-avatar-main-container .fui-avatar-label:hover {
  background-color: rgba(71, 71, 71, 0.74);
  display: flex;
  cursor: pointer;
}`);var yo=function(e){var n=e.size,a=e.color,r=e.style,o=e.radius,t=e.x,l=e.y,s=e.width,c=o||46,u=t||50,d=l||50,f=V(n),m=r||{};return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"".concat(f,"px"),height:"".concat(f,"px"),style:m,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},i.createElement("circle",{cx:"".concat(u),cy:"".concat(d),r:"".concat(c),fill:"none",stroke:a||"#14ff00",strokeWidth:"".concat(s||8,"px"),strokeDasharray:"164.93361431346415 100.97787143782138"},i.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 ".concat(u," ").concat(u,";360 ").concat(u," ").concat(u),keyTimes:"0;1"})))};B(`.files-ui-loader-container {
  background-color: rgba(0, 0, 0, 0.41);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.files-ui-loader-container.clickable {
  cursor: pointer;
}
.files-ui-loader-container:hover {
  background-color: rgba(0, 0, 0, 0.61);
}`);var Qa=function(e){var n=e.children,a=e.className,r=e.style,o=e.size,t=e.onClick,l=o?V(o):void 0,s=t?"files-ui-loader-container clickable":"files-ui-loader-container",c=function(){t==null||t()};return i.createElement("div",{onClick:c,className:a?"".concat(s," ").concat(a):s,style:h(h({},r),{height:l,width:l})},n)},et=function(e){var n=e.onClick,a=e.size;return i.createElement(Qa,{onClick:n,size:a},i.createElement(i.Fragment,null,i.createElement(yo,{size:a}),i.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},n&&i.createElement(Xe,{color:"rgba(255,255,255,0.75)",size:45,onClick:n}))))};B(`.files-ui-layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}`);var Ge=function(e){var n=e.style,a=e.className,r=e.children,o=e.visible,t=xn(e,["style","className","children","visible"]),l=re(a||"","files-ui-layer");return o?i.createElement("div",h({className:l,style:n},t),r):i.createElement(i.Fragment,null)},wo={alt:"image-preview",smartImgFit:"orientation"};B(`.fui-image-preview {
  position: relative;
  border-radius: 10px;
}`);var _a=function(e){var n=Xa(e,wo),a=n.src,r=n.alt,o=n.width,t=n.height,l=n.onError,s=n.smartImgFit,c=n.style,u=n.className,d=i.useState([void 0,void 0]),f=d[0],m=f[0],p=f[1],b=d[1],v=i.useState(void 0),g=v[0],x=v[1],w=function(k){return Re(void 0,void 0,void 0,function(){var M;return Le(this,function(F){switch(F.label){case 0:return[4,Ta(k)];case 1:return M=F.sent(),N(M),[2]}})})},N=function(k){return Re(void 0,void 0,void 0,function(){var M,F,R;return Le(this,function(z){switch(z.label){case 0:return k===""||!k?[2]:(M=void 0,F=void 0,s?[3,1]:(F="100%",[3,4]));case 1:return z.trys.push([1,3,,4]),[4,Ot(k)];case 2:return R=z.sent(),R==="landscape"?s==="orientation"?(M=void 0,F="100%"):(M="100%",F=void 0):s==="center"?(M=void 0,F="100%"):(M="100%",F=void 0),[3,4];case 3:return z.sent(),l==null||l(),[3,4];case 4:return t&&(M=t),o&&(F=o),b([M,F]),x(k),[2]}})})};i.useEffect(function(){if(a)if(typeof a=="string")N(a);else{var k=a.type?a.type.split("/")[0]:"octet";k==="image"?w(a):l==null||l()}},[a]);var E=function(k){l==null||l()};return i.createElement(i.Fragment,null,a&&g&&(m||p)&&i.createElement("img",{style:c||{},onClick:function(k){k.preventDefault()},width:p,height:m,src:g,alt:r,className:u,onError:E}))};B(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.files-ui-file-card-main-container {
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.858);
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 100px;
  box-sizing: border-box;
  position: relative;
  font-size: 15px;
  font-weight: 400;
  width: 320px;
  font-family: "Poppins", sans-serif;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container {
  border-radius: 8px;
  overflow: hidden;
  width: 320px;
  box-sizing: border-box;
  height: 100px;
  box-sizing: border-box;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container {
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer {
  box-sizing: border-box;
  position: absolute;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer.blur img {
  filter: blur(4px);
  width: 200%;
  height: 200%;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-status-layer {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 5px;
  box-sizing: border-box;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data {
  padding-right: 10px;
  box-sizing: border-box;
  line-height: 19px;
  font-weight: 500;
  width: calc(100% - 100px);
  word-break: break-all;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data.dark-mode {
  color: rgba(255, 255, 255, 0.7);
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-size {
  font-weight: 400;
  font-size: 0.9rem;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-name {
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-name.not-allowed {
  background-color: rgba(180, 16, 16, 0.7);
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-upload-layer-container {
  cursor: default;
  display: flex;
  box-sizing: border-box;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.625), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container {
  cursor: default;
  display: flex;
  box-sizing: border-box;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info {
  width: calc(100% - 100px);
  height: 100px;
  text-align: left;
  scrollbar-width: thin;
  overflow: auto;
  scrollbar-color: rgba(100, 108, 127, 0.662745098) transparent;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar {
  width: 9px;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar-track {
  background: transparent;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar-thumb {
  background-color: rgba(100, 108, 127, 0.662745098);
  border-radius: 20px;
  border: transparent;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .files-ui-file-card-info-layer-header {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  /*  position: absolute;
  top: 5;
  right: 5; */
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .heading {
  font-weight: 600;
  padding: 0 5px;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .label {
  padding: 0 5px;
  font-weight: 399;
}
.files-ui-file-card-main-container.clickable {
  cursor: pointer;
}

/* .files-ui-file-icon {
  font-size: 0.7rem;
  min-width: 19px;
  min-height: 19px;
  margin: 0;
  padding: 2px 2px;
  border-radius: 50%;
  background-color: rgba(32, 33, 36, 0.65);
  word-break: break-word;
  box-sizing: content-box;
  &:hover {
    background-color: rgba(32, 33, 36, 0.85);
  }
  &.dark-mode {
    background-color: rgba(154, 160, 166, 0.65);
    &:hover {
      background-color: rgba(154, 160, 166, 0.85);
    }
  }
} */`);B(`.files-ui-file-icon {
  font-size: 0.7rem;
  min-width: 19px;
  min-height: 19px;
  margin: 0;
  padding: 2px 2px;
  border-radius: 50%;
  background-color: rgba(32, 33, 36, 0.65);
  word-break: break-word;
  box-sizing: content-box;
}
.files-ui-file-icon:hover {
  background-color: rgba(32, 33, 36, 0.85);
}
.files-ui-file-icon.dark-mode {
  background-color: rgba(154, 160, 166, 0.65);
}
.files-ui-file-icon.dark-mode:hover {
  background-color: rgba(154, 160, 166, 0.85);
}`);B(`.files-ui-file-card-main-container.dark-mode {
  color: rgba(255, 255, 255, 0.7);
  background-color: #121212;
}
.files-ui-file-card-main-container.dark-mode.elevation-0 {
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
}
.files-ui-file-card-main-container.dark-mode.elevation-1 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
}
.files-ui-file-card-main-container.dark-mode.elevation-2 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07));
}
.files-ui-file-card-main-container.dark-mode.elevation-3 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08));
}
.files-ui-file-card-main-container.dark-mode.elevation-4 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09));
}
.files-ui-file-card-main-container.dark-mode.elevation-5 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
}
.files-ui-file-card-main-container.dark-mode.elevation-6 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11));
}
.files-ui-file-card-main-container.dark-mode.elevation-7 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11));
}
.files-ui-file-card-main-container.dark-mode.elevation-8 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12));
}
.files-ui-file-card-main-container.dark-mode.elevation-9 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12));
}
.files-ui-file-card-main-container.dark-mode.elevation-10 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13));
}
.files-ui-file-card-main-container.dark-mode.elevation-11 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13));
}
.files-ui-file-card-main-container.dark-mode.elevation-12 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-13 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-14 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-15 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-16 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-17 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-18 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-19 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-20 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-21 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-22 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-23 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-24 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.elevation-0 {
  box-shadow: none;
}
.files-ui-file-card-main-container.elevation-1 {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-2 {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-3 {
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-4 {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-5 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-6 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-7 {
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-8 {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-9 {
  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-10 {
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-11 {
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-12 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-13 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-14 {
  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-15 {
  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-16 {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-17 {
  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-18 {
  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-19 {
  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-20 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-21 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-22 {
  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-23 {
  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-24 {
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
}`);B(`.file-card-right-layer-header {
  margin-top: 3px;
  margin-right: 3px;
  position: absolute;
  top: 0;
  right: 0;
  left: unset;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
}

.file-card-right-layer-footer {
  margin-bottom: 3px;
  margin-right: 3px;
  left: unset;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  bottom: 0;
  right: 0;
}`);var Eo=function(e){var n=e.localization,a=e.size,r=ke(n).status;return i.createElement(i.Fragment,null,i.createElement(Ya,{color:"#f44336",size:a||65}),i.createElement("span",null," ",r.aborted))},ko=function(e){var n=e.height,a=n?typeof n=="number"?"".concat(n,"px"):n:"132px";return i.createElement(i.Fragment,null,i.createElement("div",{style:{width:"100%",height:a}}))},Fo=function(e){var n=e.localization,a=e.size,r=ke(n).status;return i.createElement(i.Fragment,null,i.createElement(Xe,{color:"rgba(255,255,255,0.4)",style:{backgroundColor:"rgba(244, 67, 54, 0.8)",borderRadius:"50%"},size:a||65}),i.createElement("span",null," ",r.error))},zo=function(e){var n=e.onCancel,a=e.localization,r=e.size,o=ke(a).status;return i.createElement(i.Fragment,null,i.createElement(et,{onClick:n,size:r||65}),i.createElement("span",null,o.preparing))},Co=function(e){var n=e.localization,a=e.size,r=ke(n).status;return i.createElement(i.Fragment,null,i.createElement(Ka,{color:"#4caf50",size:a||65}),i.createElement("span",null," ",r.success))};B(`text.files-ui-text-dynamic-loader {
  text-anchor: middle;
  font-size: 1em;
  fill: aliceblue;
}`);var So=function(e){var n=e.size,a=e.color,r=e.style,o=e.percentage,t=e.hidePerncentage,l=e.radius,s=e.x,c=e.y,u=e.width,d=e.onClick,f=l||28,m=s||30,p=c||30,b=V(n),v=r||{},g=i.useRef(null);function x(w,N,E){N.style.strokeDashoffset="".concat(E*(1-w/100))}return i.useEffect(function(){var w=g.current;if(w!=null&&o!==void 0){var N=2*Math.PI*w.r.baseVal.value;w.style.strokeDasharray="".concat(N," 1000"),x(o>=100?100:o,w,N)}},[o]),o!==void 0?i.createElement(Qa,{size:n},i.createElement(i.Fragment,null,i.createElement("svg",{className:"dui_svg_circle_loader",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"".concat(b,"px"),height:"".concat(b,"px"),style:v},i.createElement("circle",{style:{transform:"rotate(-90deg)",transformOrigin:"center"},stroke:a||"#14ff00",cx:"".concat(m),cy:"".concat(p),r:"".concat(f),strokeWidth:"".concat(u||8,"px"),id:"circle",ref:g,fill:"none"}),!t&&o!==void 0&&i.createElement("text",{className:"files-ui-text-dynamic-loader",x:"".concat(m),y:"".concat(m*7/6)},"".concat(o.toFixed(0)," %"))),d&&i.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},i.createElement(Xe,{color:"rgba(255,255,255,0.75)",size:45,onClick:d})))):i.createElement(i.Fragment,null)};B(`.lds-colorbar {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}
.lds-colorbar .files-ui-text-default-loader {
  font-size: 1.5rem;
  font-weight: 400;
  text-anchor: middle;
}`);var No=function(e){var n=e.localization,a=e.size,r=e.onAbort,o=e.progress,t=ke(n).status;return i.createElement(i.Fragment,null,o!==void 0?i.createElement(So,{size:70,x:35,y:35,radius:32,percentage:o,width:6,hidePerncentage:o===void 0||r!==void 0,onClick:r}):i.createElement(et,{onClick:r,size:a||70}),i.createElement("span",null," ",t.uploading))};B(`.files-ui-file-card-upload-layer {
  width: 100px;
  height: 100%;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  position: relative;
  overflow: hidden;
}
.files-ui-file-card-upload-layer .elevation-list-card {
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.files-ui-file-card-upload-layer .elevation-list-card .elevation-item-card {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
}
.files-ui-file-card-upload-layer .elevation-list-card .elevation-item-card span {
  text-align: center;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}`);B(`.files-ui-tooltip {
  cursor: default;
  position: relative;
}
.files-ui-tooltip:hover {
  z-index: 2;
}
.files-ui-tooltip:hover .files-ui-tooltiptext {
  visibility: visible;
  opacity: 1;
  z-index: 2;
}
.files-ui-tooltip.card:hover {
  z-index: 2;
}
.files-ui-tooltip.card:hover .files-ui-tooltiptext {
  visibility: visible;
  opacity: 1;
  z-index: 2;
}
.files-ui-tooltip.card .files-ui-tooltiptext {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  visibility: hidden;
  width: 200px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 2px 2px;
  position: absolute;
  z-index: 2;
  left: calc(50% - 100px);
  left: 0;
  margin-top: 5px;
  top: 100%;
  opacity: 0;
  transition: opacity 1s;
}
.files-ui-tooltip.card .files-ui-tooltiptext.not-valid-error {
  background: linear-gradient(to top, #c62828, #d32f2f);
}
.files-ui-tooltip.card .files-ui-tooltiptext.not-valid-error::after {
  border-color: transparent transparent #d32f2f transparent;
}
.files-ui-tooltip.card .files-ui-tooltiptext.success {
  background: linear-gradient(to top, #1b5e20, #2e7d32);
}
.files-ui-tooltip.card .files-ui-tooltiptext.success::after {
  border-color: transparent transparent #2e7d32 transparent;
}
.files-ui-tooltip.card .files-ui-tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
}
.files-ui-tooltip .files-ui-tooltiptext {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  visibility: hidden;
  width: 132px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 2px 2px;
  position: absolute;
  z-index: 2;
  left: 0;
  opacity: 0;
  transition: opacity 1s;
}
.files-ui-tooltip .files-ui-tooltiptext.not-valid-error {
  background: linear-gradient(to top, #c62828, #d32f2f);
}
.files-ui-tooltip .files-ui-tooltiptext.not-valid-error::after {
  border-color: transparent transparent #d32f2f transparent;
}
.files-ui-tooltip .files-ui-tooltiptext.success {
  background: linear-gradient(to top, #1b5e20, #2e7d32);
}
.files-ui-tooltip .files-ui-tooltiptext.success::after {
  border-color: transparent transparent #2e7d32 transparent;
}
.files-ui-tooltip .files-ui-tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
}`);var Mo=function(e){var n=e.uploadStatus,a=e.valid,r=e.errors,o=e.uploadMessage,t=e.open,l=i.useState(void 0),s=l[0],c=l[1],u=i.useState(void 0),d=u[0],f=u[1],m=function(p,b){p!==void 0?(f(o),c(p==="success"?"success":"not-valid-error")):b!==void 0&&(b||(c("not-valid-error"),f(r?r.reduce(function(v,g){return v+="".concat(g,". "),v},""):"")))};return i.useEffect(function(){m(n,a)},[n,a]),i.createElement(i.Fragment,null,t&&d&&s&&i.createElement("span",{className:"files-ui-tooltiptext ".concat(s)},d))},Do=function(e){var n=e.downloadUrl,a=e.anchorRef,r=e.fileName;function o(t){t.stopPropagation()}return n?i.createElement("a",{ref:a,target:"_blank",href:n,download:r,hidden:!0,rel:"noopener noreferrer",onClick:o},"download_file"):i.createElement(i.Fragment,null)};B(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.files-ui-file-mosaic-main-container {
  width: 132px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 400;
  word-break: break-word;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container {
  width: 132px;
  height: 132px;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer.blur img {
  filter: blur(4px);
  width: 200%;
  height: 200%;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer .file-mosaic-footer-right {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: flex-end;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer .file-mosaic-footer-left {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: center;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer {
  position: absolute;
  left: 0;
  right: 0;
  text-align: left;
  scrollbar-width: thin;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  font-family: "Poppins", sans-serif;
  width: inherit;
  background-color: rgba(0, 0, 0, 0.85);
  word-break: break-word;
  height: 100%;
  width: 100%;
  font-size: 0.8rem;
  transition: all 0.5s ease 0s;
  overflow: auto;
  color: white;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar {
  width: 9px;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar-track {
  background: transparent;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar-thumb {
  background-color: rgba(100, 108, 127, 0.662745098);
  border-radius: 20px;
  border: transparent;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .files-ui-file-mosaic-info-layer-header {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .heading {
  font-weight: 600;
  padding: 0 5px;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .label {
  padding: 0 5px;
  font-weight: 399;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-file-name {
  margin-top: 1px;
  height: 31px;
  text-align: center;
  width: 100%;
  color: black;
  font-size: 0.95em;
  box-sizing: border-box;
  line-height: 15px;
  font-weight: 400;
  letter-spacing: 0.07rem;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  /*  display: flex;
   align-items: center;
   justify-content: center; */
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-file-name.dark-mode {
  color: rgba(255, 255, 255, 0.7);
}
.files-ui-file-mosaic-main-container.clickable {
  cursor: pointer;
}

/* .files-ui-file-icon {
  font-size: 0.7rem;
  min-width: 19px;
  min-height: 19px;
  margin: 0;
  padding: 2px 2px;
  border-radius: 50%;
  background-color: rgba(32, 33, 36, 0.65);
  word-break: break-word;
  box-sizing: content-box;
  &:hover {
    background-color: rgba(32, 33, 36, 0.85);
  }
  &.dark-mode {
    background-color: rgba(154, 160, 166, 0.65);
    &:hover {
      background-color: rgba(154, 160, 166, 0.85);
    }
  }
}
 */`);B(`.files-ui-layer-container {
  position: relative;
}`);var Ro=function(e){var n=e.style,a=e.className,r=e.children,o=re(a||"","files-ui-layer-container");return i.createElement("div",{className:o,style:n},r)},Lo=function(e){var n=e.fileName;return n?i.createElement("span",null,n):i.createElement(i.Fragment,null)};B(`.files-ui-file-mosaic-upload-layer {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  position: relative;
  overflow: hidden;
}
.files-ui-file-mosaic-upload-layer .elevation-list {
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.files-ui-file-mosaic-upload-layer .elevation-list .elevation-item {
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
}
.files-ui-file-mosaic-upload-layer .elevation-list .elevation-item span {
  text-align: center;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}`);var Ao=function(e){var n=e.uploadStatus,a=e.onCancel,r=e.onAbort,o=e.progress,t=e.localization,l=i.useRef(null),s=i.useRef(null),c=i.useState([void 0]),u=c[0],d=c[1];i.useEffect(function(){d(function(m){if(m[m.length-1]==="preparing"&&n==="uploading"){var p=he([],m,!0);return p[m.length-1]=n,he([],p,!0)}return he(he([],m,!0),[n],!1)})},[n]);var f=function(){var m=l.current,p=s.current;m===null||p===null||(p.style.top=0-(u.length-1)*132+"px")};return i.useEffect(function(){u.length>1&&f()},[u.length]),i.createElement("div",{className:"elevation-layer-container",ref:l},i.createElement("div",{className:"elevation-list",ref:s},u.map(function(m,p){switch(m){case"preparing":return i.createElement("div",{className:"elevation-item",key:p+1},i.createElement(zo,{onCancel:a,localization:t}));case"uploading":return i.createElement("div",{className:"elevation-item",key:p+1},i.createElement(No,{onAbort:r,progress:o,localization:t}));case"error":return i.createElement("div",{className:"elevation-item",key:p+1},i.createElement(Fo,{localization:t}));case"success":return i.createElement("div",{className:"elevation-item",key:p+1},i.createElement(Co,{localization:t}));case"aborted":return i.createElement("div",{className:"elevation-item",key:p+1},i.createElement(Eo,{localization:t}));default:return i.createElement("div",{className:"elevation-item",key:p+1},i.createElement(ko,null))}})))},Ia=function(e){var n=e.imageSource,a=e.url,r=e.fileName,o=e.card,t=e.isBlur,l=e.smartImgFit,s=i.useState(void 0),c=s[0],u=s[1],d=i.useState(!1),f=d[0],m=d[1];i.useEffect(function(){u(n||a)},[n,a]);var p=function(){m(!0),u(a)};return t?i.createElement(i.Fragment,null,!o&&!f&&n&&i.createElement(_a,{src:c,alt:"blur ".concat(r),smartImgFit:!1})):i.createElement(i.Fragment,null,i.createElement(_a,{onError:p,src:c,style:{borderRadius:"0px"},alt:"preview ".concat(r),smartImgFit:l}))};B(`.files-ui-file-item-status-container {
  text-align: center;
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
  padding: 0.5px;
  font-weight: 400;
}
.files-ui-file-item-status-container.file-status-error {
  color: #f44336;
}
.files-ui-file-item-status-container.file-status-ok {
  color: #5c7a1f;
}
.files-ui-file-item-status-container.file-status-loading {
  position: relative;
  display: flex;
  color: #8b6b10;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
}
.files-ui-file-item-status-container.file-status-loading.percentage {
  padding: 7px 4px 2px 5px;
}
.files-ui-file-item-status-container.file-status-loading .abort-button {
  position: absolute;
  right: -2px;
  top: -2px;
}
.files-ui-file-item-status-container.file-status-loading .uploading-text.up {
  margin-bottom: -22px;
}
.files-ui-file-item-status-container.file-status-loading .uploading-text.down {
  margin-top: -20px;
}
.files-ui-file-item-status-container.file-status-loading .uploading-text p.percentage {
  font-weight: 500;
}`);var nt=function(e){var n=e.valid,a=e.uploadStatus,r=e.localization,o=e.style,t=ke(r).status;return a==="success"?i.createElement("div",{className:"files-ui-file-item-status-container file-status-ok",style:o},i.createElement(Gi,{color:"#4caf50",size:"small",className:"status-icon"}),t.success):a==="error"||a==="aborted"?i.createElement("div",{className:"files-ui-file-item-status-container file-status-error",style:o},i.createElement(Ki,{color:"#f44336",size:"semi-medium",className:"status-icon"}),t.error):n!=null?n?i.createElement("div",{className:"files-ui-file-item-status-container file-status-ok",style:o},i.createElement(Ka,{color:"#4caf50",size:"small",className:"status-icon"}),t.valid):i.createElement("div",{className:"files-ui-file-item-status-container file-status-error",style:o},i.createElement(Ya,{color:"#f44336",size:"small",className:"status-icon"}),t.denied):i.createElement(i.Fragment,null)},Bo=function(e){var n=e.valid,a=e.localization,r=e.onCloseInfo,o=e.uploadStatus,t=e.localName,l=e.sizeFormatted,s=e.localType,c=ke(a),u=c.fullInfoLayer,d=u.name,f=u.size,m=u.type;return i.createElement(i.Fragment,null,i.createElement("div",{className:"files-ui-file-mosaic-info-layer-header"},i.createElement(Ja,{color:"rgba(255,255,255,0.8)",onClick:r,colorFill:"black"}),i.createElement(nt,{valid:n,uploadStatus:o,localization:a})),i.createElement("div",{className:"heading"},d),i.createElement("div",{className:"label"},t),i.createElement("div",{className:"heading"},f),i.createElement("div",{className:"label"},l),i.createElement("div",{className:"heading"},m),i.createElement("div",{className:"label"},s))};B(`.filesui-file-item-size {
  box-sizing: border-box;
  font-size: 0.7rem;
  border: 0.5px solid wheat;
  text-align: center;
  color: rgba(255, 255, 255, 0.89);
  padding: 2px 1.5px;
  border-radius: 7px;
  background-color: rgba(32, 33, 36, 0.75);
  min-width: 45px;
  word-break: break-word;
  font-family: inherit;
}
.filesui-file-item-size:hover {
  background-color: rgba(32, 33, 36, 0.85);
  color: rgba(255, 255, 255, 0.97);
}`);var Uo=function(e){var n=e.sizeFormatted;return i.createElement(i.Fragment,null,n&&i.createElement("div",{className:"filesui-file-item-size"},n))},_o=function(e){var n=e.darkMode,a=e.deleteIcon,r=e.downloadIcon,o=e.imageIcon,t=e.infoIcon,l=e.onDelete,s=e.onDownload,c=e.onOpenInfo,u=e.onSee,d=e.onWatch,f=e.sizeFormatted,m=e.valid,p=e.videoIcon,b=e.localization,v=e.uploadStatus,g=e.isActive;return i.createElement(i.Fragment,null,i.createElement("div",{className:"file-mosaic-main-layer-header"},g&&a&&i.createElement(Xe,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:l,size:"small",colorFill:"transparent"})),i.createElement("div",{className:"file-mosaic-main-layer-footer"},i.createElement("div",{className:"file-mosaic-footer-left"},i.createElement(nt,{valid:m,uploadStatus:v,localization:b}),g&&f&&i.createElement(Uo,{sizeFormatted:f})),i.createElement("div",{className:"file-mosaic-footer-right"},g&&i.createElement(i.Fragment,null,o&&i.createElement(Qi,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:u,size:"small"}),p&&i.createElement($i,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:d,size:"small"}),r&&i.createElement(Wi,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:s,size:"small"}),t&&i.createElement(Xi,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",onClick:c,color:n?"#121212":"rgba(255,255,255,0.851)",size:"micro"})))))},jo=function(e){var n=e.style,a=e.className,r=e.file,o=e.name,t=e.size,l=e.type,s=e.id,c=e.valid,u=e.errors,d=e.uploadStatus,f=e.uploadMessage,m=e.progress,p=e.xhr,b=e.localization,v=e.preview,g=e.imageUrl,x=e.videoUrl,w=e.info,N=e.backgroundBlurImage,E=N===void 0?!0:N,k=e.darkMode,M=e.alwaysActive,F=M===void 0?!0:M,R=e.resultOnTooltip,z=R===void 0?!0:R,A=e.downloadUrl,j=e.onDelete,U=e.onCancel,W=e.onAbort,O=e.onDownload,Z=e.onSee,_=e.onWatch,ne=e.onDoubleClick,q=e.onClick,P=e.onRightClick,Fe=e.smartImgFit,Ue=Fe===void 0?"orientation":Fe,me=i.useContext(ea),ue=me.darkMode,pe=me.icons,G=me.localization,X=b!==void 0?b:G,ze=k!==void 0?k:ue,$e=i.useRef(null),wn=re(re("files-ui-file-mosaic-main-container files-ui-tooltip",a),q?"clickable":void 0),En=ze?"files-ui-file-mosaic-file-name dark-mode":"files-ui-file-mosaic-file-name",Ce=bi(r,o,l,t),xe=Ce[0],Je=Ce[1],kn=Ce[2],Ke=ho(m,p),$=vo(r,o,l,c,v,g,x,pe),Ye=$[0],Qe=$[1],Fn=$[2],oe=$[3],Se=$[4],en=$[5],_e=ce(kn),Ne=i.useState(!1),ye=Ne[0],Ie=Ne[1],Te=i.useState(!1),nn=Te[0],je=Te[1],zn=function(){F||je(!0)},an=function(){F||je(!1)},Cn=function(){return j==null?void 0:j(s)},tn=function(){return Ie(!0)},rn=function(){return Ie(!1)},we=bo(d);i.useEffect(function(){we&&ye&&rn()},[we]);function Sn(K){K.stopPropagation(),q==null||q(K)}var on=function(K){K.preventDefault(),ne==null||ne(K)};function Nn(K){P==null||P(K)}var ln=function(){var K=$e.current;K&&K.click()},Mn=function(){O?O==null||O(s,A):typeof A=="string"&&ln()},sn=function(){p==null||p.abort(),W==null||W(s)};return Ye?i.createElement("div",{className:wn,style:n,onClick:Sn,onMouseEnter:zn,onMouseLeave:an,onDoubleClick:on,onContextMenu:Nn},i.createElement(Ro,{className:"files-ui-file-mosaic-icon-layer-container",style:n},i.createElement(Ge,{className:"files-ui-file-mosaic-image-layer blur",visible:E},i.createElement(Ia,{imageSource:Se,url:oe,fileName:xe,isBlur:!0,smartImgFit:!1})),i.createElement(Ge,{className:"files-ui-file-mosaic-image-layer",visible:!0},i.createElement(Ia,{imageSource:Se,url:oe,fileName:xe,isBlur:!1,smartImgFit:Ue})),i.createElement(Ge,{className:"files-ui-file-mosaic-main-layer",visible:!we&&!ye},i.createElement(_o,{deleteIcon:j!==void 0,onDelete:Cn,darkMode:ze,valid:c,uploadStatus:d,localization:X,sizeFormatted:_e,imageIcon:Qe&&Z!==void 0,onSee:function(){return Z==null?void 0:Z(Se)},videoIcon:Fn&&_!==void 0,onWatch:function(){return _==null?void 0:_(en)},downloadIcon:O!==void 0||A!==void 0,onDownload:Mn,infoIcon:w!==void 0,onOpenInfo:tn,isActive:F||nn})),i.createElement(Ge,{className:"files-ui-file-mosaic-info-layer",visible:ye,onClick:ie},i.createElement(Bo,{onCloseInfo:rn,valid:c,localization:X,localName:xe,sizeFormatted:_e,localType:Je})),i.createElement(Ge,{className:"files-ui-file-mosaic-upload-layer",visible:we,onClick:ie},i.createElement(Ao,{uploadStatus:d,progress:Ke,onCancel:U?function(){return U==null?void 0:U(s)}:void 0,onAbort:W?sn:void 0,localization:X}))),i.createElement("div",{className:En},i.createElement(Lo,{fileName:xe})),i.createElement(Mo,{open:z,uploadStatus:d,valid:c,errors:u,uploadMessage:f}),i.createElement(Do,{fileName:xe,anchorRef:$e,downloadUrl:A})):i.createElement(i.Fragment,null)};B(`.fui-fullscreen-container {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.734);
  transform: translate(100%);
  transition: transform 0.2s ease-in-out;
  margin: 0 !important;
  z-index: 4000;
  box-sizing: border-box;
}
.fui-fullscreen-container.show-fs {
  transform: translate(0);
}

.fui-fullscreen-relative-container {
  position: relative;
  width: 90%;
  height: 90%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /*   @media (max-width: 600px) {
    width: 80%;
    height: auto;
  }*/
}
.fui-fullscreen-relative-container img {
  height: 100%;
  width: auto;
}
.fui-fullscreen-relative-container video {
  height: 100%;
  width: auto;
}
@media (max-width: 960px) {
  .fui-fullscreen-relative-container {
    height: 90%;
    width: 100%;
  }
  .fui-fullscreen-relative-container video {
    height: auto;
    width: 100%;
  }
  .fui-fullscreen-relative-container img {
    height: auto;
    width: 100%;
  }
}

.button-full-screen {
  position: absolute;
  top: 0;
  right: 0;
}`);var Oo=function(e){var n=e.open,a=e.onClose,r=e.children;function o(t){t.stopPropagation(),a==null||a()}return i.useEffect(function(){var t=function(l){l.key==="Escape"&&(a==null||a())};return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}},[]),i.createElement("div",{className:n?"fui-fullscreen-container show-fs":"fui-fullscreen-container",onClick:o},n&&i.createElement("div",{className:"fui-fullscreen-relative-container",onClick:o},r),a&&i.createElement(Xe,{color:"rgba(255,255,255,0.8)",onClick:o,colorFill:"transparent",className:"button-full-screen",size:"extra-large"}))},Po=function(e){var n=e.src,a=e.style,r=e.className,o=xn(e,["src","style","className"]),t=i.useRef(null),l=i.useState(void 0),s=l[0],c=l[1];return i.useEffect(function(){if(n)if(typeof n=="string")c(n);else{var u=n.type?n.type.split("/")[0]:"octet",d=n.type?n.type.split("/")[1]:"octet";if(u==="video"&&["mp4","ogg","webm"].includes(d)){var f=URL.createObjectURL(n);c(f)}}},[n]),i.useEffect(function(){s&&t.current&&t.current.load()},[s]),i.createElement(i.Fragment,null,n&&s&&i.createElement("video",h({onClick:function(u){u.preventDefault()},id:"files-ui-video",ref:t,className:r||"filesui-video-preview",src:s,height:"100%",style:a},o),i.createElement("source",{type:"video/webm"}),i.createElement("source",{type:"video/ogg"}),i.createElement("source",{type:"video/mp4"})))};export{To as D,jo as F,_a as I,Po as V,Oo as a};
