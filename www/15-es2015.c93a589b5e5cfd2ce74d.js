(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{HfOC:function(e,t,i){"use strict";i.r(t),i.d(t,"OtherPageModule",(function(){return E}));var o=i("TEn/"),n=i("ofXK"),r=i("3Pt+"),s=i("9B/o"),c=i("fXoL"),a=i("H+bZ"),l=i("tk/3");let b=(()=>{class e{constructor(e,t){this.apiService=e,this.http=t}get(e=""){return this.apiService.get("posts/page"+e)}getById(e){return this.apiService.get("posts/"+e)}create(e){return this.apiService.post("posts",e)}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(a.a),c.Ob(l.a))},e.\u0275prov=c.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=i("Oh/B"),u=i("tyNb"),h=i("mrSG"),p=i("AytR"),g=i("3LUQ"),f=i("e8h1");function m(e,t){if(1&e&&(c.Kb(0,"ion-item",14),c.Kb(1,"ion-label"),c.hc(2),c.Jb(),c.Jb()),2&e){const e=t.$implicit;c.Yb("routerLink","/tabs/settings/details/",e.id,""),c.xb(2),c.ic(e.post_title)}}let v=(()=>{class e{constructor(e,t,i,o,n,r,s){this.pageService=e,this.router=t,this.alertService=i,this.alerts=o,this.config=n,this.storage=r,this.postsService=s,this.Facebook=p.a.Facebook,this.Youtube=p.a.Youtube,this.posts=[],this.total=[],this.categories=[],this.loading=!1}ngOnInit(){this.ios="ios"===this.config.get("mode"),this.loadData(),this.getfontSize(),this.fontsize=this.storage.get("fontsize")?this.newFontsize:"20"}openBrowser(e){this.postsService.oBrowser(e)}getfontSize(){return Object(h.a)(this,void 0,void 0,(function*(){return this.storage.get("fontsize").then(e=>{this.fontsize=e||"20"})}))}loadData(){this.urlParams="?type=page",this.pageService.get(this.urlParams).subscribe(e=>{this.posts=e.posts,this.siteUrl=e.url,this.categories=e.categories})}onChange(e){this.fontsize=e.detail.value,console.log(this.fontsize),this.storage.set("fontsize",this.fontsize)}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(b),c.Hb(u.g),c.Hb(o.b),c.Hb(g.a),c.Hb(o.c),c.Hb(f.b),c.Hb(d.a))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-home"]],decls:32,vars:4,consts:[[3,"translucent"],["color","primary",2,"padding-top","10px"],[1,"ion-text-center"],[3,"fullscreen"],["collapse","condense"],["size","large"],["routerLink","/tabs/settings/iwitness"],[3,"click"],["value","20","okText","Okay","cancelText","Dismiss",3,"ngModel","ngModelChange","ionChange"],["value","20"],["value","18"],["value","16"],["value","24"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(e,t){1&e&&(c.Kb(0,"ion-header",0),c.Kb(1,"ion-toolbar",1),c.Kb(2,"ion-title",2),c.hc(3," Options "),c.Jb(),c.Jb(),c.Jb(),c.Kb(4,"ion-content",3),c.Kb(5,"ion-header",4),c.Kb(6,"ion-toolbar"),c.Kb(7,"ion-title",5),c.hc(8,"Settings"),c.Jb(),c.Jb(),c.Jb(),c.Kb(9,"ion-list"),c.Kb(10,"ion-item",6),c.Kb(11,"ion-label"),c.hc(12,"iWitness"),c.Jb(),c.Jb(),c.Kb(13,"ion-item"),c.Kb(14,"ion-label",7),c.Sb("click",(function(){return t.openBrowser(t.Youtube)})),c.hc(15,"Youtube"),c.Jb(),c.Jb(),c.Kb(16,"ion-item"),c.Kb(17,"ion-label",7),c.Sb("click",(function(){return t.openBrowser(t.Facebook)})),c.hc(18,"Facebook"),c.Jb(),c.Jb(),c.Kb(19,"ion-item"),c.Kb(20,"ion-label"),c.hc(21,"Font Size"),c.Jb(),c.Kb(22,"ion-select",8),c.Sb("ngModelChange",(function(e){return t.fontsize=e}))("ionChange",(function(e){return t.onChange(e)})),c.Kb(23,"ion-select-option",9),c.hc(24,"Default"),c.Jb(),c.Kb(25,"ion-select-option",10),c.hc(26,"Medium"),c.Jb(),c.Kb(27,"ion-select-option",11),c.hc(28,"Small"),c.Jb(),c.Kb(29,"ion-select-option",12),c.hc(30,"Large"),c.Jb(),c.Jb(),c.Jb(),c.gc(31,m,3,2,"ion-item",13),c.Jb(),c.Jb()),2&e&&(c.Xb("translucent",!0),c.xb(4),c.Xb("fullscreen",!0),c.xb(18),c.Xb("ngModel",t.fontsize),c.xb(9),c.Xb("ngForOf",t.posts))},directives:[o.o,o.K,o.J,o.l,o.v,o.t,o.R,u.h,o.u,o.C,o.S,r.g,r.i,o.D,n.h],styles:["ion-col[_ngcontent-%COMP%]{line-height:28px}.error[_ngcontent-%COMP%], ion-col[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]{font-family:hts}.error[_ngcontent-%COMP%]{color:#e22c2c;font-size:14px;font-weight:400;margin-left:5px}video[_ngcontent-%COMP%]{max-width:100vw;max-height:40vh}.video-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.uploading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}"]}),e})();var J=i("jhN1");const K=["class","details"];function x(e,t){if(1&e&&c.Ib(0,"img",10),2&e){const e=c.Ub();c.Xb("src",e.siteUrl+"/public/uploads/"+e.post.post_image,c.dc)}}function y(e,t){1&e&&c.Ib(0,"img",11)}let S=(()=>{class e{constructor(e,t,i,o,n,r,s){this.pageService=e,this.router=t,this.alertService=i,this.alerts=o,this.route=n,this.config=r,this.sanitizer=s,this.post=[]}ngOnInit(){this.ios="ios"===this.config.get("mode");const e=this.route.snapshot.paramMap.get("id");this.loadData(e)}loadData(e){this.pageService.getById(e).subscribe(e=>{this.post=e.posts,this.siteUrl=e.url})}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(b),c.Hb(u.g),c.Hb(o.b),c.Hb(g.a),c.Hb(u.a),c.Hb(o.c),c.Hb(J.b))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-other",8,"details"]],attrs:K,decls:16,vars:6,consts:[[1,"ion-no-border",3,"translucent"],["color","primary",2,"padding-top","10px"],["slot","start"],[1,"ion-text-center"],[3,"fullscreen"],[2,"padding","0","margin-top","-15px"],["alt","","style","width: 100%",3,"src",4,"ngIf"],["src","assets/images/default.jpg","alt","","style","width: 100%",4,"ngIf"],[1,"ion-padding-start",2,"margin-top","5px"],[2,"font-size","20px",3,"innerHTML"],["alt","",2,"width","100%",3,"src"],["src","assets/images/default.jpg","alt","",2,"width","100%"]],template:function(e,t){1&e&&(c.Kb(0,"ion-header",0),c.Kb(1,"ion-toolbar",1),c.Kb(2,"ion-buttons",2),c.Ib(3,"ion-back-button"),c.Jb(),c.Kb(4,"ion-title",3),c.hc(5," Options "),c.Jb(),c.Jb(),c.Jb(),c.Kb(6,"ion-content",4),c.Kb(7,"ion-row"),c.Kb(8,"ion-col",5),c.gc(9,x,1,1,"img",6),c.gc(10,y,1,0,"img",7),c.Jb(),c.Jb(),c.Kb(11,"ion-row"),c.Kb(12,"ion-col",8),c.Kb(13,"h2"),c.hc(14),c.Jb(),c.Ib(15,"p",9),c.Jb(),c.Jb(),c.Jb()),2&e&&(c.Xb("translucent",!0),c.xb(6),c.Xb("fullscreen",!0),c.xb(3),c.Xb("ngIf",t.post.post_image),c.xb(1),c.Xb("ngIf",!t.post.post_image),c.xb(4),c.ic(t.post.post_title),c.xb(1),c.Xb("innerHTML",t.post.post_description,c.bc))},directives:[o.o,o.K,o.h,o.e,o.f,o.J,o.l,o.z,o.k,n.i],styles:["ion-col[_ngcontent-%COMP%]{line-height:28px}.error[_ngcontent-%COMP%], ion-col[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]{font-family:hts}.error[_ngcontent-%COMP%]{color:#e22c2c;font-size:14px;font-weight:400;margin-left:5px}video[_ngcontent-%COMP%]{max-width:100vw;max-height:40vh}.video-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.uploading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}"]}),e})();var I=i("B7Vy"),w=i("KqBo"),O=i("B7Rs");function P(e,t){1&e&&(c.Kb(0,"h5",3),c.hc(1,"Select Image/Video to upload below"),c.Jb())}function C(e,t){1&e&&(c.Kb(0,"span",13),c.hc(1," Enter a title for your story "),c.Jb())}function k(e,t){1&e&&(c.Kb(0,"span",13),c.hc(1," Please tell us more about your story "),c.Jb())}function M(e,t){if(1&e&&(c.Kb(0,"div"),c.Kb(1,"ion-item"),c.Ib(2,"ion-input",10),c.Jb(),c.gc(3,C,2,0,"span",11),c.Kb(4,"ion-item"),c.Ib(5,"ion-textarea",12),c.Jb(),c.gc(6,k,2,0,"span",11),c.Jb()),2&e){const e=c.Ub();c.xb(3),c.Xb("ngIf",e.submitted&&(null==e.f.title.errors?null:e.f.title.errors.required)),c.xb(3),c.Xb("ngIf",e.submitted&&(null==e.f.description.errors?null:e.f.description.errors.required))}}function U(e,t){if(1&e&&(c.Kb(0,"ion-grid",3),c.Kb(1,"ion-row"),c.Kb(2,"ion-col"),c.Ib(3,"img",14),c.Jb(),c.Jb(),c.Kb(4,"ion-row"),c.Kb(5,"ion-col"),c.Kb(6,"ion-button",15),c.hc(7,"Upload"),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&e){const e=c.Ub();c.xb(3),c.Xb("src",e.base64Image,c.dc)}}function _(e,t){1&e&&(c.Kb(0,"span",13),c.hc(1," Enter a title for your story "),c.Jb())}function X(e,t){1&e&&(c.Kb(0,"span",13),c.hc(1," Please tell us more about your story "),c.Jb())}function H(e,t){if(1&e&&(c.Kb(0,"div"),c.Kb(1,"ion-item"),c.Ib(2,"ion-input",10),c.Jb(),c.gc(3,_,2,0,"span",11),c.Kb(4,"ion-item"),c.Ib(5,"ion-textarea",12),c.Jb(),c.gc(6,X,2,0,"span",11),c.Jb()),2&e){const e=c.Ub();c.xb(3),c.Xb("ngIf",e.submitted&&(null==e.f.title.errors?null:e.f.title.errors.required)),c.xb(3),c.Xb("ngIf",e.submitted&&(null==e.f.description.errors?null:e.f.description.errors.required))}}function L(e,t){if(1&e&&(c.Kb(0,"ion-row"),c.Kb(1,"ion-col"),c.Ib(2,"video",16),c.Jb(),c.Jb()),2&e){const e=c.Ub();c.xb(2),c.Xb("src",e.selectedVideo,c.dc)}}function F(e,t){if(1&e){const e=c.Lb();c.Kb(0,"ion-row"),c.Kb(1,"ion-col"),c.Kb(2,"ion-button",17),c.Sb("click",(function(){return c.ac(e),c.Ub().cancelSelection()})),c.hc(3,"Cancel"),c.Jb(),c.Kb(4,"ion-button",15),c.hc(5,"Upload Video"),c.Jb(),c.Jb(),c.Jb()}}function T(e,t){if(1&e){const e=c.Lb();c.Kb(0,"ion-button",22),c.Sb("click",(function(){return c.ac(e),c.Ub(2).cancelSelection()})),c.hc(1,"Start Over"),c.Jb()}}function V(e,t){if(1&e){const e=c.Lb();c.Kb(0,"ion-row"),c.Kb(1,"ion-col"),c.Kb(2,"div",18),c.Kb(3,"p"),c.Ib(4,"ion-spinner",19),c.Jb(),c.Kb(5,"p"),c.hc(6,"Please wait while your video upload..."),c.Jb(),c.Jb(),c.Kb(7,"ion-button",20),c.Sb("click",(function(){return c.ac(e),c.Ub().cancelUpload()})),c.hc(8,"Cancel upload"),c.Jb(),c.gc(9,T,2,0,"ion-button",21),c.Jb(),c.Jb()}if(2&e){const e=c.Ub();c.xb(9),c.Xb("ngIf",e.uploadedVideo)}}function z(e,t){if(1&e){const e=c.Lb();c.Kb(0,"ion-toolbar",23),c.Kb(1,"ion-button",24),c.Sb("click",(function(){return c.ac(e),c.Ub().selectImage()})),c.hc(2,"Select Image"),c.Jb(),c.Kb(3,"ion-button",24),c.Sb("click",(function(){return c.ac(e),c.Ub().selectVideo()})),c.hc(4,"Select Video"),c.Jb(),c.Jb()}}const B=[{path:"",component:v},{path:"iwitness",component:(()=>{class e{constructor(e,t,i,o,n,r,s,c){this.file=e,this.pageService=t,this.camera=i,this.alertService=o,this.actionSheetController=n,this.transfer=r,this.formBuilder=s,this.router=c,this.apiUrl=p.a.apiUrl,this.isUploading=!1,this.uploadPercent=0,this.submitted=!1}ngOnInit(){this.submitForm=this.formBuilder.group({title:["",r.k.required],description:["",r.k.required]})}get f(){return this.submitForm.controls}pickImage(e){this.camera.getPicture({quality:80,sourceType:e,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,targetWidth:600,targetHeight:600}).then(e=>{this.base64Image="data:image/jpeg;base64,"+e},e=>{})}selectImage(){return Object(h.a)(this,void 0,void 0,(function*(){const e=yield this.actionSheetController.create({header:"Select Image source",buttons:[{text:"Load from Library",handler:()=>{this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY)}},{text:"Use Camera",handler:()=>{this.pickImage(this.camera.PictureSourceType.CAMERA)}},{text:"Cancel",role:"cancel"}]});yield e.present()}))}UploadImage(){if(this.submitted=!0,this.submitForm.invalid)this.alertService.errorAlert("Please provide all the required values!");else{const e={file:this.base64Image,title:this.submitForm.value.title,description:this.submitForm.value.description};this.alertService.showLoader(),this.pageService.create(e).subscribe(e=>{e.success?(this.alertService.hideLoader(),this.alertService.successAlert(e.message),this.router.navigate(["/tabs/settings"])):(this.alertService.hideLoader(),this.alertService.presentToast(e.message))},e=>{this.alertService.hideLoader(),console.log(e),this.alertService.presentToast("Something went wrong")})}}cancelSelection(){this.selectedVideo=null,this.uploadedVideo=null}selectVideo(){this.camera.getPicture({mediaType:this.camera.MediaType.VIDEO,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY}).then(e=>Object(h.a)(this,void 0,void 0,(function*(){if(e){this.alertService.showLoader(),this.uploadedVideo=null;const i=e.substr(e.lastIndexOf("/")+1),o=e.substr(0,e.lastIndexOf("/")+1),n=o.includes("file://")?o:"file://"+o;try{const e=yield this.file.resolveDirectoryUrl(n),t=yield this.file.getFile(e,i,{});t.file(e=>(this.alertService.hideLoader(),e.size>10485760?this.alertService.errorAlert("You cannot upload more than 10mb."):"video/mp4"!==e.type?this.alertService.errorAlert("Incorrect file type."):void(this.selectedVideo=t.nativeURL)))}catch(t){return this.alertService.hideLoader(),this.alertService.errorAlert("Something went wrong")}}})),e=>{console.log(e)})}uploadVideo(){if(this.submitted=!0,this.submitForm.invalid)this.alertService.errorAlert("Please provide all the required values!");else{const e=this.apiUrl+"video",t={fileName:this.selectedVideo.substr(this.selectedVideo.lastIndexOf("/")+1),fileKey:"video",mimeType:"multipart/form-data",chunkedMode:!0,params:{title:this.submitForm.value.title,description:this.submitForm.value.description}};this.videoFileUpload=this.transfer.create(),this.isUploading=!0,this.videoFileUpload.upload(this.selectedVideo,e,t).then(e=>(this.isUploading=!1,this.uploadPercent=0,JSON.parse(e.response))).then(e=>{this.uploadedVideo=e.url,this.alertService.successAlert("Video upload was successful."),this.router.navigate(["/tabs/settings"])}).catch(e=>{this.isUploading=!1,this.uploadPercent=0,this.alertService.errorAlert("Error uploading video.")}),this.videoFileUpload.onProgress(e=>{this.uploadPercent=Math.round(e.loaded/e.total*100)})}}cancelUpload(){this.videoFileUpload.abort(),this.uploadPercent=0}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(I.a),c.Hb(b),c.Hb(w.a),c.Hb(g.a),c.Hb(o.a),c.Hb(O.a),c.Hb(r.a),c.Hb(u.g))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-home"]],decls:20,vars:12,consts:[[1,"ion-no-border",3,"translucent"],["color","primary",2,"padding-top","10px"],["slot","start"],[1,"ion-text-center"],[3,"fullscreen"],[1,"ion-padding"],["class","ion-text-center",4,"ngIf"],["novalidate","",3,"formGroup","ngSubmit"],[4,"ngIf"],["color","primary","style","text-align: center",4,"ngIf"],["formControlName","title","placeholder","Enter title for your story here..."],["class","error ion-color-danger ion-padding",4,"ngIf"],["formControlName","description","rows","5","cols","20","placeholder","Enter information about your story here..."],[1,"error","ion-color-danger","ion-padding"],["alt","",2,"width","70%",3,"src"],["type","submit","expand","block","color","primary","size","large",1,"round"],["controls","",3,"src"],["color","danger",3,"click"],[1,"uploading"],["name","bubbles"],["expand","block","color","danger",3,"click"],["expand","block","color","primary","class","round",3,"click",4,"ngIf"],["expand","block","color","primary",1,"round",3,"click"],["color","primary",2,"text-align","center"],["fill","clear","color","light",3,"click"]],template:function(e,t){1&e&&(c.Kb(0,"ion-header",0),c.Kb(1,"ion-toolbar",1),c.Kb(2,"ion-buttons",2),c.Ib(3,"ion-back-button"),c.Jb(),c.Kb(4,"ion-title",3),c.hc(5," iWitness "),c.Jb(),c.Jb(),c.Jb(),c.Kb(6,"ion-content",4),c.Kb(7,"ion-list",5),c.gc(8,P,2,0,"h5",6),c.Kb(9,"form",7),c.Sb("ngSubmit",(function(){return t.UploadImage()})),c.gc(10,M,7,2,"div",8),c.gc(11,U,8,1,"ion-grid",6),c.Jb(),c.Kb(12,"form",7),c.Sb("ngSubmit",(function(){return t.uploadVideo()})),c.gc(13,H,7,2,"div",8),c.Kb(14,"ion-grid",3),c.gc(15,L,3,1,"ion-row",8),c.gc(16,F,6,0,"ion-row",8),c.gc(17,V,10,1,"ion-row",8),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Kb(18,"ion-footer"),c.gc(19,z,5,0,"ion-toolbar",9),c.Jb()),2&e&&(c.Xb("translucent",!0),c.xb(6),c.Xb("fullscreen",!0),c.xb(2),c.Xb("ngIf",!t.base64Image||!t.selectedVideo),c.xb(1),c.Xb("formGroup",t.submitForm),c.xb(1),c.Xb("ngIf",t.base64Image),c.xb(1),c.Xb("ngIf",t.base64Image),c.xb(1),c.Xb("formGroup",t.submitForm),c.xb(1),c.Xb("ngIf",t.selectedVideo),c.xb(2),c.Xb("ngIf",t.selectedVideo),c.xb(1),c.Xb("ngIf",t.selectedVideo&&!t.uploadedVideo&&!t.isUploading),c.xb(1),c.Xb("ngIf",t.isUploading),c.xb(2),c.Xb("ngIf",!t.base64Image||!t.selectedVideo))},directives:[o.o,o.K,o.h,o.e,o.f,o.J,o.l,o.v,n.i,r.l,r.h,r.c,o.n,o.m,o.t,o.s,o.T,r.g,r.b,o.I,o.z,o.k,o.g,o.E],styles:["ion-col[_ngcontent-%COMP%]{line-height:28px}.error[_ngcontent-%COMP%], ion-col[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]{font-family:hts}.error[_ngcontent-%COMP%]{color:#e22c2c;font-size:14px;font-weight:400;margin-left:5px}video[_ngcontent-%COMP%]{max-width:100vw;max-height:40vh}.video-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.uploading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}"]}),e})()},{path:"details/:id",component:S}];let A=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},imports:[[u.i.forChild(B)],u.i]}),e})(),E=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},providers:[b,d.a,s.a],imports:[[o.L,n.b,r.d,r.j,A]]}),e})()}}]);