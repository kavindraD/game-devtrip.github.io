(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{jhQr:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),u=function(){return function(){}}(),i=e("pMnS"),r=e("ZYCi"),s=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),o=t.nb({encapsulation:0,styles:[[".cashier-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100vh;color:#666565}.cashier-main[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.cashier-menu[_ngcontent-%COMP%]{display:flex;justify-content:space-around;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cashier-menu-item[_ngcontent-%COMP%]{width:48%;max-width:200px;position:relative}.button[_ngcontent-%COMP%]{font-size:1.3rem;line-height:2.5;position:absolute;top:100%;height:1.25 * 3;width:100%;display:flex;justify-content:center;align-items:center;z-index:106;outline:0;cursor:pointer;border:none;border-radius:0 0 1.5rem 1.5rem;box-shadow:0 5px 50px #094060;transition:all .1s linear}.button[_ngcontent-%COMP%]:hover{background-color:darken(#d7f3f7,10%)}.button[_ngcontent-%COMP%]:active{-webkit-transform:translateY(-5px);transform:translateY(-5px);background-color:darken(#d6f0f5,10%);box-shadow:0 0 10px #f6f9fa}"]],data:{}});function a(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,13,"div",[["class","cashier-wrapper"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,10,"div",[["class","cashier-menu"]],null,null,null,null,null)),(n()(),t.pb(2,0,null,null,4,"div",[["class","cashier-menu-item"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,3,"div",[["class","button"],["routerLink","/home"]],null,[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.zb(n,4).onClick()&&u),u},null,null)),t.ob(4,16384,null,0,r.m,[r.l,r.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),(n()(),t.pb(5,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Home"])),(n()(),t.pb(7,0,null,null,4,"div",[["class","cashier-menu-item"]],null,null,null,null,null)),(n()(),t.pb(8,0,null,null,3,"div",[["class","button"],["routerLink","/game"]],null,[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.zb(n,9).onClick()&&u),u},null,null)),t.ob(9,16384,null,0,r.m,[r.l,r.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),(n()(),t.pb(10,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Game"])),(n()(),t.pb(12,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.ob(13,212992,null,0,r.o,[r.b,t.O,t.j,[8,null],t.h],null,null)],function(n,l){n(l,4,0,"/home"),n(l,9,0,"/game"),n(l,13,0)},null)}function c(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"app-cashier",[],null,null,null,a,o)),t.ob(1,114688,null,0,s,[],null,null)],function(n,l){n(l,1,0)},null)}var p=t.lb("app-cashier",s,c,{},{},[]),d=e("Ip0R"),b=e("gIcY"),m=e("N3s9"),h=e("RbBG"),g=e("F/XL"),f=e("xMyE"),A=e("9Z1F"),y=function(){function n(n){this._restService=n,this.appServerUrl="https://kavindraknit.000webhostapp.com/api/"}return n.prototype.registerPaymentRequest=function(n){return this._restService.getNonce("registerapp",n,"dtapps").pipe(Object(f.a)(function(n){return console.log("updated payment from here "+JSON.stringify(n))}),Object(A.a)(this.handleError("updatePayment",[])))},n.prototype.validatePayment=function(n){return this._restService.getNonce("getpaymentstatus",n,"dtapps").pipe(Object(f.a)(function(n){return console.log("updated payment from here "+JSON.stringify(n))}),Object(A.a)(this.handleError("updatePayment",[])))},n.prototype.requestPayment=function(n){return n.redirect_url=this.appServerUrl+"/dtapps/paymentReciept/?cookie="+n.cookie,n.webhook=this.appServerUrl+"/dtapps/addpaymentdata/?cookie="+n.cookie,this._restService.getNonce("raisePaymentRequest",n,"dtapps").pipe(Object(f.a)(function(n){return console.log("updated payment from here "+JSON.stringify(n))}),Object(A.a)(this.handleError("updatePayment",[])))},n.prototype.validatePaymentStatus=function(n){return this._restService.getNonce("validatepaymentstatus",n,"dtapps").pipe(Object(f.a)(function(n){return console.log("updated payment from here "+JSON.stringify(n))}),Object(A.a)(this.handleError("updatePayment",[])))},n.prototype.handleError=function(n,l){return void 0===n&&(n="operation"),function(e){return console.error(e),console.log(n+" failed: "+e.message),Object(g.a)(l)}},n.ngInjectableDef=t.S({factory:function(){return new n(t.W(h.a))},token:n,providedIn:"root"}),n}(),v=function(){function n(n,l,e){this._formBuilder=n,this._authService=l,this._paymentService=e,this.loading=!1,this.submitted=!1,this.displaymessage=""}return n.prototype.ngOnInit=function(){this.paymentForm=this._formBuilder.group({username:["",b.m.required],mobile:["",[b.m.required,b.m.minLength(10),b.m.maxLength(10)]]}),this.yesBtnVisible=!0,this.yesBtnCallback=this.onSubmit,this.displaymessage="Please fill the form and proceed to payment."},n.prototype.ngOnDestroy=function(){},Object.defineProperty(n.prototype,"f",{get:function(){return this.paymentForm.controls},enumerable:!0,configurable:!0}),n.prototype.onSubmit=function(){var n=this;if(this.submitted=!0,!this.paymentForm.invalid){this.loading=!0,this.displaymessage="Registering this request, with entered email and mobile number. Your future communication related top this payment, happen using these details. ",this.yesBtnVisible=!1,this.yesBtnCallback=this.setPurchaseState;var l=new Object;this.userEnteredEmail=this.f.username.value,this.userEnteredMobile=this.f.mobile.value,l.name="Devtrip Multiplayer Player Games",l.version="0.1.1",l.description="To get credit of 1000",l.userkey=this._authService.currentUser.cookie?this._authService.currentUser.cookie:"NA",l.useremail=this.f.username.value,l.useremobile=this.f.mobile.value,l.paymentstatus=2,l.raiserequestfromserver=!0,this._paymentService.registerPaymentRequest(l).subscribe(function(l){l.success?n.setPurchaseState(l):n.setRequestRegisterError(l)})}},n.prototype.setPurchaseState=function(n){var l=this;this.displaymessage="You will be redirected to our payment partner soon.";var e=new Object;e.purpose="To get credit of 1000 for Devtrip Multiplayer Player Games version 0.1.1",e.amount=1e3,e.buyer_name=this._authService.currentUser.name?this._authService.currentUser.name:"Guest",e.email=this.userEnteredEmail,e.phone=this.userEnteredMobile,e.send_email=!0,e.send_sms=!0,e.cookie=n.cookie,e.allow_repeated_payments=!1,this._paymentService.requestPayment(e).subscribe(function(n){n.success?l.setVerifyPaymentState(n):l.setRequestRegisterError(n)})},n.prototype.setVerifyPaymentState=function(n){this.loading=!1,this.displaymessage="Your payment process is initiated, you will redirected to our payment partner soon.. Please stay with us and after completing this payment, Return here and click on proceed to add credit with your account, within 5 minutes.",this.paymentInitResponse=n;var l=JSON.parse(n.response.body);window.open(l.payment_request.longurl,"_blank"),this.yesBtnVisible=!0,this.yesBtnCallback=this.onVerifyPaymentRequest},n.prototype.onVerifyPaymentRequest=function(){var n=this;this.loading=!0,this.displaymessage="Validating your payment, please stay with us. You will be auto redirected to account page after successful validation.",this.yesBtnVisible=!1;var l=new Object;this.paymentInitResponse?(l.id=JSON.parse(this.paymentInitResponse.response.body).payment_request.id,localStorage.setItem("paymentid",l.id)):localStorage.getItem("paymentid")&&(l.id=localStorage.getItem("paymentid")),this._paymentService.validatePaymentStatus(l).subscribe(function(l){l.response.payment_request&&"Credit"==l.response.payment_request.payments[0].status?n.setVerifiedPaymentState(l):n.setVrificationError(l)})},n.prototype.setVerifiedPaymentState=function(n){localStorage.setItem("paymentid",""),localStorage.clear(),this._authService.currentUser.usercredit=Number(this._authService.currentUser.usercredit)+1e3,this._authService.updateUser(this._authService.currentUser).subscribe(),this.loading=!1,this.displaymessage="Your payment is not processed successusfully and amount credited to your user account. Please continue with game play.",this.yesBtnVisible=!0,this.loading=!1},n.prototype.setVrificationError=function(n){this.loading=!1,this.displaymessage="Your payment is not processed as par our payment partener record. Please pay first either from email link or the link opened in new tab, and then select verify payment. Or send a mail to devtrip.dev@gmail.com if facing any issue.",this.yesBtnVisible=!0,this.yesBtnCallback=this.onVerifyPaymentRequest},n.prototype.setRequestRegisterError=function(n){this.displaymessage=n.ops?n.ops:n.error},n}(),k=t.nb({encapsulation:0,styles:[[".cashier-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100vh;color:#d6f0f5;justify-content:center;align-items:center}.form-group-btn[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input[_ngcontent-%COMP%]{width:200px;height:5vh}"]],data:{}});function C(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Email is required"]))],null,null)}function w(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,C)),t.ob(2,16384,null,0,d.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.component.f.username.errors.required)},null)}function I(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Mobile Number required"]))],null,null)}function S(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.Gb(-1,null,["Mobile Number is not valid"]))],null,null)}function P(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,4,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,I)),t.ob(2,16384,null,0,d.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,S)),t.ob(4,16384,null,0,d.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,e.f.mobile.errors.required),n(l,4,0,e.f.mobile.errors.minlength)},null)}function O(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,0,"img",[["src","data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="]],null,null,null,null,null))],null,null)}function x(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,40,"div",[["class","cashier-wrapper"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),t.Gb(2,null,["",""])),(n()(),t.pb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,36,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var u=!0,i=n.component;return"submit"===l&&(u=!1!==t.zb(n,6).onSubmit(e)&&u),"reset"===l&&(u=!1!==t.zb(n,6).onReset()&&u),"ngSubmit"===l&&(u=!1!==i.yesBtnCallback()&&u),u},null,null)),t.ob(5,16384,null,0,b.o,[],null,null),t.ob(6,540672,null,0,b.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Db(2048,null,b.b,null,[b.f]),t.ob(8,16384,null,0,b.k,[[4,b.b]],null,null),(n()(),t.pb(9,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),t.pb(10,0,null,null,7,"input",[["class","form-control"],["formControlName","username"],["placeholder","User Name (Email)"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var u=!0;return"input"===l&&(u=!1!==t.zb(n,13)._handleInput(e.target.value)&&u),"blur"===l&&(u=!1!==t.zb(n,13).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.zb(n,13)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.zb(n,13)._compositionEnd(e.target.value)&&u),u},null,null)),t.ob(11,278528,null,0,d.h,[t.s,t.t,t.k,t.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Bb(12,{"is-invalid":0}),t.ob(13,16384,null,0,b.c,[t.D,t.k,[2,b.a]],null,null),t.Db(1024,null,b.h,function(n){return[n]},[b.c]),t.ob(15,671744,null,0,b.e,[[3,b.b],[8,null],[8,null],[6,b.h],[2,b.q]],{name:[0,"name"]},null),t.Db(2048,null,b.i,null,[b.e]),t.ob(17,16384,null,0,b.j,[[4,b.i]],null,null),(n()(),t.gb(16777216,null,null,1,null,w)),t.ob(19,16384,null,0,d.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(20,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.pb(21,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),t.pb(22,0,null,null,7,"input",[["class","form-control"],["formControlName","mobile"],["placeholder","Mobile Number"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var u=!0;return"input"===l&&(u=!1!==t.zb(n,25)._handleInput(e.target.value)&&u),"blur"===l&&(u=!1!==t.zb(n,25).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.zb(n,25)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.zb(n,25)._compositionEnd(e.target.value)&&u),u},null,null)),t.ob(23,278528,null,0,d.h,[t.s,t.t,t.k,t.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Bb(24,{"is-invalid":0}),t.ob(25,16384,null,0,b.c,[t.D,t.k,[2,b.a]],null,null),t.Db(1024,null,b.h,function(n){return[n]},[b.c]),t.ob(27,671744,null,0,b.e,[[3,b.b],[8,null],[8,null],[6,b.h],[2,b.q]],{name:[0,"name"]},null),t.Db(2048,null,b.i,null,[b.e]),t.ob(29,16384,null,0,b.j,[[4,b.i]],null,null),(n()(),t.gb(16777216,null,null,1,null,P)),t.ob(31,16384,null,0,d.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(32,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.pb(33,0,null,null,7,"div",[["class","form-group-btn"]],[[8,"hidden",0]],null,null,null,null)),(n()(),t.pb(34,0,null,null,3,"button",[],[[8,"disabled",0]],null,null,null,null)),(n()(),t.Gb(-1,null,["Proceed "])),(n()(),t.gb(16777216,null,null,1,null,O)),t.ob(37,16384,null,0,d.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(38,0,null,null,2,"button",[["routerLink","/game"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.zb(n,39).onClick()&&u),u},null,null)),t.ob(39,16384,null,0,r.m,[r.l,r.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),(n()(),t.Gb(-1,null,["Cancel"]))],function(n,l){var e=l.component;n(l,6,0,e.paymentForm);var t=n(l,12,0,e.submitted&&e.f.username.errors);n(l,11,0,"form-control",t),n(l,15,0,"username"),n(l,19,0,e.submitted&&e.f.username.errors);var u=n(l,24,0,e.submitted&&e.f.mobile.errors);n(l,23,0,"form-control",u),n(l,27,0,"mobile"),n(l,31,0,e.submitted&&e.f.mobile.errors),n(l,37,0,e.loading),n(l,39,0,"/game")},function(n,l){var e=l.component;n(l,2,0,e.displaymessage),n(l,4,0,t.zb(l,8).ngClassUntouched,t.zb(l,8).ngClassTouched,t.zb(l,8).ngClassPristine,t.zb(l,8).ngClassDirty,t.zb(l,8).ngClassValid,t.zb(l,8).ngClassInvalid,t.zb(l,8).ngClassPending),n(l,10,0,t.zb(l,17).ngClassUntouched,t.zb(l,17).ngClassTouched,t.zb(l,17).ngClassPristine,t.zb(l,17).ngClassDirty,t.zb(l,17).ngClassValid,t.zb(l,17).ngClassInvalid,t.zb(l,17).ngClassPending),n(l,22,0,t.zb(l,29).ngClassUntouched,t.zb(l,29).ngClassTouched,t.zb(l,29).ngClassPristine,t.zb(l,29).ngClassDirty,t.zb(l,29).ngClassValid,t.zb(l,29).ngClassInvalid,t.zb(l,29).ngClassPending),n(l,33,0,e.yesBtnVisible),n(l,34,0,e.loading),n(l,38,0,e.loading)})}function z(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"app-cashierdashboard",[],null,null,null,x,k)),t.ob(1,245760,null,0,v,[b.d,m.a,y],null,null)],function(n,l){n(l,1,0)},null)}var _=t.lb("app-cashierdashboard",v,z,{},{},[]),E={},j=[{path:"",component:s,data:E,children:[{path:"",component:v}]}],M=function(){function n(){}return n.routes=j,n}();e.d(l,"CashierModuleNgFactory",function(){return D});var D=t.mb(u,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[i.a,p,_]],[3,t.j],t.x]),t.xb(4608,d.l,d.k,[t.u,[2,d.s]]),t.xb(4608,b.p,b.p,[]),t.xb(4608,b.d,b.d,[]),t.xb(1073742336,d.b,d.b,[]),t.xb(1073742336,r.n,r.n,[[2,r.t],[2,r.l]]),t.xb(1073742336,M,M,[]),t.xb(1073742336,b.n,b.n,[]),t.xb(1073742336,b.g,b.g,[]),t.xb(1073742336,b.l,b.l,[]),t.xb(1073742336,u,u,[]),t.xb(1024,r.j,function(){return[[{path:"",component:s,data:E,children:[{path:"",component:v}]}]]},[])])})}}]);