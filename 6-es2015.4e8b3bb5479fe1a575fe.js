(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{JNLe:function(e,t,i){"use strict";i.r(t);var r=i("ofXK"),n=i("3Pt+"),s=i("tyNb"),o=i("fXoL");let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Ib({type:e,selectors:[["app-cashier"]],decls:13,vars:0,consts:[[1,"cashier-wrapper"],[1,"cashier-menu"],[1,"cashier-menu-item"],["routerLink","/home",1,"button"],["routerLink","/game",1,"button"],[1,"cashier-footer"]],template:function(e,t){1&e&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"div",3),o.Tb(4,"span"),o.Cc(5,"Home"),o.Sb(),o.Sb(),o.Sb(),o.Tb(6,"div",2),o.Tb(7,"div",4),o.Tb(8,"span"),o.Cc(9,"Game"),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Pb(10,"router-outlet"),o.Tb(11,"div",5),o.Cc(12,"Powered by devtrip developers and contributors \xa9 www.devtrip.com 2012-2050"),o.Sb(),o.Sb())},directives:[s.d,s.f],styles:[".cashier-wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;height:100vh;color:#666565;overflow:auto}.cashier-footer[_ngcontent-%COMP%]{justify-content:space-around;align-content:center;position:relative;color:#515151;width:100%;bottom:0}.cashier-footer[_ngcontent-%COMP%], .cashier-main[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;text-align:center}.cashier-main[_ngcontent-%COMP%]{-webkit-box-pack:center;justify-content:center}.cashier-menu[_ngcontent-%COMP%]{display:-webkit-box;display:flex;justify-content:space-around;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cashier-menu-item[_ngcontent-%COMP%]{width:48%;max-width:200px;position:relative}.button[_ngcontent-%COMP%]{font-size:1.3rem;line-height:2.5;position:absolute;top:100%;height:1.25 * 3;width:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;z-index:106;outline:0;cursor:pointer;border:none;border-radius:0 0 1.5rem 1.5rem;box-shadow:0 5px 50px #094060;-webkit-transition:all .1s linear;transition:all .1s linear}.button[_ngcontent-%COMP%]:hover{background-color:darken(#d7f3f7,10%)}.button[_ngcontent-%COMP%]:active{-webkit-transform:translateY(-5px);transform:translateY(-5px);background-color:darken(#d6f0f5,10%);box-shadow:0 0 10px #f6f9fa}"]}),e})();var A=i("N3s9"),c=i("RbBG"),l=i("LRne"),u=i("vkgz"),d=i("JIr8");let m=(()=>{class e{constructor(e){this._restService=e,this.appServerUrl="https://dtdmapi.000webhostapp.com/api/"}registerPaymentRequest(e){return this._restService.getNonce("registerapp",e,"dtapps").pipe(Object(u.a)(e=>console.log("updated payment from here "+JSON.stringify(e))),Object(d.a)(this.handleError("updatePayment",[])))}validatePayment(e){return this._restService.getNonce("getpaymentstatus",e,"dtapps").pipe(Object(u.a)(e=>console.log("updated payment from here "+JSON.stringify(e))),Object(d.a)(this.handleError("updatePayment",[])))}requestPayment(e){return e.redirect_url=this.appServerUrl+"/dtapps/paymentReciept/?cookie="+e.cookie,e.webhook=this.appServerUrl+"/dtapps/addpaymentdata/?cookie="+e.cookie,this._restService.getNonce("raisePaymentRequest",e,"dtapps").pipe(Object(u.a)(e=>console.log("updated payment from here "+JSON.stringify(e))),Object(d.a)(this.handleError("updatePayment",[])))}validatePaymentStatus(e){return this._restService.getNonce("validatepaymentstatus",e,"dtapps").pipe(Object(u.a)(e=>console.log("updated payment from here "+JSON.stringify(e))),Object(d.a)(this.handleError("updatePayment",[])))}handleError(e="operation",t){return i=>(console.error(i),console.log(`${e} failed: ${i.message}`),Object(l.a)(t))}}return e.\u0275fac=function(t){return new(t||e)(o.bc(c.a))},e.\u0275prov=o.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function p(e,t){1&e&&(o.Tb(0,"div"),o.Cc(1,"Email is required"),o.Sb())}function b(e,t){if(1&e&&(o.Tb(0,"div",13),o.Ac(1,p,2,0,"div",14),o.Sb()),2&e){const e=o.hc();o.Bb(1),o.mc("ngIf",e.f.username.errors.required)}}function h(e,t){1&e&&(o.Tb(0,"div"),o.Cc(1,"Mobile Number required"),o.Sb())}function g(e,t){1&e&&(o.Tb(0,"div"),o.Cc(1,"Mobile Number is not valid"),o.Sb())}function f(e,t){if(1&e&&(o.Tb(0,"div",13),o.Ac(1,h,2,0,"div",14),o.Ac(2,g,2,0,"div",14),o.Sb()),2&e){const e=o.hc();o.Bb(1),o.mc("ngIf",e.f.mobile.errors.required),o.Bb(1),o.mc("ngIf",e.f.mobile.errors.minlength)}}function y(e,t){if(1&e&&(o.Tb(0,"option",15),o.Cc(1),o.Sb()),2&e){const e=t.$implicit;o.mc("value",e.value),o.Bb(1),o.Ec(" ",e.price," ")}}function w(e,t){1&e&&o.Pb(0,"img",16)}const v=function(e){return{"is-invalid":e}},C=[{path:"",component:a,data:{},children:[{path:"",component:(()=>{class e{constructor(e,t,i){this._formBuilder=e,this._authService=t,this._paymentService=i,this.loading=!1,this.submitted=!1,this.displaymessage="",this.amountValue="100",this.amounts=[{value:"100",price:"Inr 100"},{value:"200",price:"Inr 200"},{value:"500",price:"Inr 500"},{value:"100",price:"Inr 1000"},{value:"2000",price:"Inr 2000"},{value:"5000",price:"Inr 5000"},{value:"10000",price:"Inr 10000"}]}ngOnInit(){this.paymentForm=this._formBuilder.group({username:["",n.l.required],mobile:["",[n.l.required,n.l.minLength(10),n.l.maxLength(10)]]}),this.yesBtnVisible=!0,this.yesBtnCallback=this.onSubmit,this.displaymessage="Please fill the form and proceed to payment."}ngOnDestroy(){}get f(){return this.paymentForm.controls}amountChange(e){this.amountValue=e}onSubmit(){if(this.submitted=!0,this.paymentForm.invalid)return;this.loading=!0,this.displaymessage="Registering this request, with entered email and mobile number. Your future communication related top this payment, happen using these details. ",this.yesBtnVisible=!1,this.yesBtnCallback=this.setPurchaseState;let e=new Object;this.userEnteredEmail=this.f.username.value,this.userEnteredMobile=this.f.mobile.value,e.name="Devtrip Multiplayer Player Games",e.version="0.1.1",e.description="To get credit of "+this.amountValue,e.userkey=this._authService.currentUser.cookie?this._authService.currentUser.cookie:"NA",e.useremail=this.f.username.value,e.useremobile=this.f.mobile.value,e.paymentstatus=2,e.raiserequestfromserver=!0,this._paymentService.registerPaymentRequest(e).subscribe(e=>{e.success?this.setPurchaseState(e):this.setRequestRegisterError(e)})}setPurchaseState(e){this.displaymessage="You will be redirected to our payment partner soon.";var t=new Object;t.purpose="To get credit of "+this.amountValue+" for Devtrip Multiplayer Player Games version 0.1.1",t.amount=Number(this.amountValue),t.buyer_name=this._authService.currentUser.name?this._authService.currentUser.name:"Guest",t.email=this.userEnteredEmail,t.phone=this.userEnteredMobile,t.send_email=!0,t.send_sms=!0,t.cookie=e.cookie,t.allow_repeated_payments=!1,this._paymentService.requestPayment(t).subscribe(e=>{e.success?this.setVerifyPaymentState(e):this.setRequestRegisterError(e)})}setVerifyPaymentState(e){this.loading=!1,this.displaymessage="Your payment process is initiated, you will redirected to our payment partner soon.. Please stay with us and after completing this payment, Return here and click on proceed to add credit with your account, within 5 minutes.",this.paymentInitResponse=e;let t=JSON.parse(e.response.body);window.open(t.payment_request.longurl,"_blank"),this.yesBtnVisible=!0,this.yesBtnCallback=this.onVerifyPaymentRequest}onVerifyPaymentRequest(){this.loading=!0,this.displaymessage="Validating your payment, please stay with us. You will be auto redirected to account page after successful validation.",this.yesBtnVisible=!1;let e=new Object;this.paymentInitResponse?(e.id=JSON.parse(this.paymentInitResponse.response.body).payment_request.id,localStorage.setItem("paymentid",e.id)):localStorage.getItem("paymentid")&&(e.id=localStorage.getItem("paymentid")),this._paymentService.validatePaymentStatus(e).subscribe(e=>{e.response.payment_request&&"Credit"==e.response.payment_request.payments[0].status?this.setVerifiedPaymentState(e):this.setVrificationError(e)})}setVerifiedPaymentState(e){localStorage.setItem("paymentid",""),localStorage.clear(),this._authService.currentUser.usercredit=Number(this._authService.currentUser.usercredit)+Number(this.amountValue),this._authService.updateUser(this._authService.currentUser).subscribe(),this.loading=!1,this.displaymessage="Your payment is processed successusfully and amount credited to your user account. Please continue with game play.",this.yesBtnVisible=!0,this.loading=!1}setVrificationError(e){this.loading=!1,this.displaymessage="Your payment is not processed as par our payment partener record. Please pay first either from email link or the link opened in new tab, and then select verify payment. Or send a mail to devtrip.dev@gmail.com if facing any issue.",this.yesBtnVisible=!0,this.yesBtnCallback=this.onVerifyPaymentRequest}setRequestRegisterError(e){this.displaymessage=e.ops?e.ops:e.error}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(n.b),o.Ob(A.a),o.Ob(m))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-cashierdashboard"]],decls:24,vars:15,consts:[[1,"cashier-wrapper"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","formControlName","username","placeholder","User Name (Email)",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","mobile","placeholder","Mobile Number",1,"form-control",3,"ngClass"],["className","amount-value"],["id","entry_select",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"form-group-btn",3,"hidden"],[3,"disabled"],["src","data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==",4,"ngIf"],["routerLink","/game",3,"disabled"],[1,"invalid-feedback"],[4,"ngIf"],[3,"value"],["src","data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="]],template:function(e,t){1&e&&(o.Tb(0,"div",0),o.Tb(1,"label"),o.Cc(2),o.Sb(),o.Pb(3,"br"),o.Tb(4,"form",1),o.fc("ngSubmit",(function(e){return t.yesBtnCallback()})),o.Tb(5,"div",2),o.Pb(6,"input",3),o.Ac(7,b,2,1,"div",4),o.Sb(),o.Pb(8,"br"),o.Tb(9,"div",2),o.Pb(10,"input",5),o.Ac(11,f,3,2,"div",4),o.Sb(),o.Pb(12,"br"),o.Tb(13,"div",6),o.Cc(14,"Add Amount: "),o.Tb(15,"select",7),o.fc("change",(function(e){return t.amountChange(e.currentTarget.value)})),o.Ac(16,y,2,2,"option",8),o.Sb(),o.Sb(),o.Pb(17,"br"),o.Tb(18,"div",9),o.Tb(19,"button",10),o.Cc(20,"Proceed "),o.Ac(21,w,1,0,"img",11),o.Sb(),o.Tb(22,"button",12),o.Cc(23,"Cancel"),o.Sb(),o.Sb(),o.Sb(),o.Sb()),2&e&&(o.Bb(2),o.Dc(t.displaymessage),o.Bb(2),o.mc("formGroup",t.paymentForm),o.Bb(2),o.mc("ngClass",o.pc(11,v,t.submitted&&t.f.username.errors)),o.Bb(1),o.mc("ngIf",t.submitted&&t.f.username.errors),o.Bb(3),o.mc("ngClass",o.pc(13,v,t.submitted&&t.f.mobile.errors)),o.Bb(1),o.mc("ngIf",t.submitted&&t.f.mobile.errors),o.Bb(5),o.mc("ngForOf",t.amounts),o.Bb(2),o.mc("hidden",t.yesBtnVisible),o.Bb(1),o.mc("disabled",t.loading),o.Bb(2),o.mc("ngIf",t.loading),o.Bb(1),o.mc("disabled",t.loading))},directives:[n.n,n.i,n.d,n.a,n.h,n.c,r.i,r.k,r.j,s.d,n.j,n.m],styles:[".cashier-wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;height:94vh;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#000}.form-group-btn[_ngcontent-%COMP%]{-webkit-box-orient:horizontal;flex-direction:row}.form-group[_ngcontent-%COMP%], .form-group-btn[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-direction:normal;justify-content:space-around;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.form-group[_ngcontent-%COMP%]{-webkit-box-orient:vertical;flex-direction:column}input[_ngcontent-%COMP%]{width:200px;height:5vh}"]}),e})()}]}];let k=(()=>{class e{}return e.routes=C,e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({factory:function(t){return new(t||e)},imports:[[s.e.forChild(C)],s.e]}),e})();i.d(t,"CashierModule",(function(){return S}));let S=(()=>{class e{}return e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({factory:function(t){return new(t||e)},imports:[[r.b,k,n.e,n.k]]}),e})()}}]);