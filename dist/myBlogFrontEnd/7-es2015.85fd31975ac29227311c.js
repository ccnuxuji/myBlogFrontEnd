(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4P1z":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var o=u("pMnS"),e=u("iInd"),s=u("SVse"),c=u("quSY");class r{constructor(l,n,u,t){this.topicService=l,this.router=n,this.route=u,this.authService=t,this.topics=[],this.isAdminLogin=!1,this.subscription=new c.a}ngOnInit(){this.topics=this.topicService.getTopics(),this.subscription=this.topicService.topicsChanged.subscribe(l=>{this.topics=l}),this.subscription=this.authService.user.subscribe(l=>{this.isAdminLogin=!!l&&"ccnuxuji"===l.name})}onNewTopic(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}var a=u("iArq"),b=u("qXBG"),p=t.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,6,"a",[["class","list-group-item"],["routerLinkActive","active"],["style","cursor: pointer"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Bb(l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&i),i},null,null)),t.ob(1,671744,[[4,4]],0,e.n,[e.k,e.a,s.g],{routerLink:[0,"routerLink"]},null),t.Cb(2,1),t.ob(3,1720320,null,2,e.m,[e.k,t.k,t.B,[2,e.l],[2,e.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Fb(603979776,3,{links:1}),t.Fb(603979776,4,{linksWithHrefs:1}),(l()(),t.Hb(6,null,[""," "]))],function(l,n){var u=l(n,2,0,n.context.$implicit.id);l(n,1,0,u),l(n,3,0,"active")},function(l,n){l(n,0,0,t.Bb(n,1).target,t.Bb(n,1).href),l(n,6,0,n.context.$implicit.name)})}function g(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onNewTopic()&&t),t},null,null)),(l()(),t.Hb(-1,null,["New Topic"]))],null,null)}function h(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,10,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,9,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,6,"a",[["class","list-group-item disabled"],["routerLinkActive","active"],["style","color: #428BCA"]],null,null,null,null,null)),t.ob(4,1720320,null,2,e.m,[e.k,t.k,t.B,[2,e.l],[2,e.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Fb(603979776,1,{links:1}),t.Fb(603979776,2,{linksWithHrefs:1}),(l()(),t.pb(7,0,null,null,0,"span",[["class","glyphicon glyphicon-list"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,1,"span",[["style","color: black"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" All Topics"])),(l()(),t.eb(16777216,null,null,1,null,d)),t.ob(11,278528,null,0,s.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(12,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(13,0,null,null,2,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,g)),t.ob(15,16384,null,0,s.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,4,0,"active"),l(n,11,0,u.topics),l(n,15,0,u.isAdminLogin)},null)}class m{constructor(){}ngOnInit(){}}var v=t.nb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"app-topic-list",[],null,null,null,h,p)),t.ob(3,245760,null,0,r,[a.a,e.k,e.a,b.a],null,null),(l()(),t.pb(4,0,null,null,2,"div",[["class","col-md-10"]],null,null,null,null,null)),(l()(),t.pb(5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.ob(6,212992,null,0,e.p,[e.b,t.M,t.j,[8,null],t.h],null,null)],function(l,n){l(n,3,0),l(n,6,0)},null)}function B(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-topic",[],null,null,null,f,v)),t.ob(1,114688,null,0,m,[],null,null)],function(l,n){l(n,1,0)},null)}var C=t.lb("app-topic",m,B,{},{},[]);class k{constructor(l,n,u,t){this.route=l,this.router=n,this.authService=u,this.sanitizer=t,this.isFromStartPage=!1,this.isAdminLogin=!1,this.userSub=new c.a}ngOnInit(){this.userSub=this.authService.user.subscribe(l=>{this.isAdminLogin=!!l&&"ccnuxuji"===l.name}),this.route.params.subscribe(l=>{l.topicId||(this.isFromStartPage=!0)})}assembleHTML(l){return this.sanitizer.bypassSecurityTrustHtml(l)}onEdit(){this.router.navigate([this.product.id],{relativeTo:this.route})}ngOnDestroy(){this.userSub.unsubscribe()}}var y=u("cUpR"),I=t.nb({encapsulation:0,styles:[["h2[_ngcontent-%COMP%]{margin-top:10px}a[_ngcontent-%COMP%]{margin-bottom:10px;height:120px}#div1[_ngcontent-%COMP%]{color:#bbb;border-radius:30px}a[_ngcontent-%COMP%]:hover{text-decoration:none}"]],data:{}});function S(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onEdit()&&t),t},null,null)),(l()(),t.Hb(-1,null,["Eidt"]))],null,null)}function w(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,15,"div",[["class","col-xs-6 col-md-3"],["id","div1"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,12,"div",[["class","caption"],["routerLinkActive","active"],["style","cursor: pointer;"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Bb(l,2).onClick()&&i),i},null,null)),t.ob(2,16384,[[1,4]],0,e.l,[e.k,e.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Cb(3,2),t.ob(4,1720320,null,2,e.m,[e.k,t.k,t.B,[2,e.l],[2,e.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Fb(603979776,1,{links:1}),t.Fb(603979776,2,{linksWithHrefs:1}),(l()(),t.pb(7,0,null,null,6,"a",[["class","thumbnail module"],["style","border-radius:15px; background-color: #dff0d8"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,1,"div",[["class","pull-right"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.pb(10,0,null,null,1,"h4",[["class","list-group-item-heading"]],null,null,null,null,null)),(l()(),t.Hb(11,null,["",""])),(l()(),t.pb(12,0,null,null,1,"p",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(13,null,["",""])),(l()(),t.eb(16777216,null,null,1,null,S)),t.ob(15,16384,null,0,s.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component,t=l(n,3,0,"/product/",u.product.id);l(n,2,0,t),l(n,4,0,"active"),l(n,15,0,u.isAdminLogin&&!u.isFromStartPage)},function(l,n){var u=n.component;l(n,9,0,u.assembleHTML(u.product.thumbnail)),l(n,11,0,u.product.name),l(n,13,0,u.product.description)})}class T{constructor(l,n){this.topicService=l,this.productService=n,this.topics=[],this.products=[]}ngOnInit(){this.topics=this.topicService.getTopics(),this.products=this.productService.getProducts(),console.log(this.products)}getProductsByTopic(l){return this.productService.getProductsByTopic(l)}}var x=u("Y0Vt"),P=t.nb({encapsulation:0,styles:[["#head[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}p[_ngcontent-%COMP%]{margin:0;padding-top:7px;text-align:center}"]],data:{}});function F(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-product-item",[],null,null,null,w,I)),t.ob(1,245760,null,0,k,[e.a,e.k,b.a,y.b],{product:[0,"product"]},null)],function(l,n){l(n,1,0,n.context.$implicit)},null)}function E(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,9,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,5,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,4,"div",[["id","head"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,3,"div",[["style","float: left; color: #428BCA"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,0,"span",[["class","glyphicon glyphicon-list"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,1,"span",[["style","color: black"]],null,null,null,null,null)),(l()(),t.Hb(6,null,[" ",""])),(l()(),t.pb(7,0,null,null,2,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,F)),t.ob(9,278528,null,0,s.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,9,0,n.component.getProductsByTopic(n.context.$implicit))},function(l,n){l(n,6,0,n.context.$implicit.name)})}function _(l){return t.Ib(0,[(l()(),t.eb(16777216,null,null,1,null,E)),t.ob(1,278528,null,0,s.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0,n.component.topics)},null)}function H(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-topic-start",[],null,null,null,_,P)),t.ob(1,114688,null,0,T,[a.a,x.a],null,null)],function(l,n){l(n,1,0)},null)}var M=t.lb("app-topic-start",T,H,{},{},[]),z=u("s7LF");class A{constructor(l,n,u){this.id=l,this.ord=n,this.name=u,this.id=l||null,this.ord=n||null,this.name=u||null}}class O{constructor(l,n,u){this.route=l,this.router=n,this.topicService=u,this.editMode=!1}ngOnInit(){this.route.params.subscribe(l=>{this.topicId=+l.topicId,this.editMode=null!=l.topicId,this.initForm()})}onSubmit(){this.editMode?this.topicService.updateTopic(this.topicForm.value).subscribe(l=>{this.topicService.fetchTopics().subscribe(),this.onCancel()}):this.topicService.addTopic(this.topicForm.value).subscribe(l=>{this.topicService.fetchTopics().subscribe(),this.onCancel()})}onDelete(){this.topicService.deleteTopic(this.topicId).subscribe(l=>{this.topicService.fetchTopics().subscribe(),this.onCancel()})}onCancel(){this.router.navigate(["../../"],{relativeTo:this.route})}initForm(){let l=new A;this.editMode&&this.topicService.getTopic(this.topicId).subscribe(n=>{this.topicForm=new z.g({id:new z.e((l=n.data).id),name:new z.e(l.name,z.u.required),ord:new z.e(l.ord,z.u.required)})}),this.topicForm=new z.g({id:new z.e(l.id),name:new z.e(l.name,z.u.required),ord:new z.e(l.ord,z.u.required)})}}var L=t.nb({encapsulation:0,styles:[[""]],data:{}});function D(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,49,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,48,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,47,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,46,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var i=!0,o=l.component;return"submit"===n&&(i=!1!==t.Bb(l,5).onSubmit(u)&&i),"reset"===n&&(i=!1!==t.Bb(l,5).onReset()&&i),"ngSubmit"===n&&(i=!1!==o.onSubmit()&&i),i},null,null)),t.ob(4,16384,null,0,z.y,[],null,null),t.ob(5,540672,null,0,z.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Eb(2048,null,z.b,null,[z.h]),t.ob(7,16384,null,0,z.o,[[4,z.b]],null,null),(l()(),t.pb(8,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,6,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,1,"button",[["class","btn btn-success"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Hb(-1,null,["Save"])),(l()(),t.pb(12,0,null,null,1,"button",[["class","btn btn-info"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onCancel()&&t),t},null,null)),(l()(),t.Hb(-1,null,["Cancel"])),(l()(),t.pb(14,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onDelete()&&t),t},null,null)),(l()(),t.Hb(-1,null,["Delete"])),(l()(),t.pb(16,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,9,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Topic Id"])),(l()(),t.pb(21,0,null,null,5,"input",[["class","form-control"],["formControlName","id"],["id","id"],["readonly",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Bb(l,22)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Bb(l,22).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Bb(l,22)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Bb(l,22)._compositionEnd(u.target.value)&&i),i},null,null)),t.ob(22,16384,null,0,z.c,[t.B,t.k,[2,z.a]],null,null),t.Eb(1024,null,z.l,function(l){return[l]},[z.c]),t.ob(24,671744,null,0,z.f,[[3,z.b],[8,null],[8,null],[6,z.l],[2,z.x]],{name:[0,"name"]},null),t.Eb(2048,null,z.m,null,[z.f]),t.ob(26,16384,null,0,z.n,[[4,z.m]],null,null),(l()(),t.pb(27,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(28,0,null,null,9,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.pb(29,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(30,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Topic Name"])),(l()(),t.pb(32,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Bb(l,33)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Bb(l,33).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Bb(l,33)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Bb(l,33)._compositionEnd(u.target.value)&&i),i},null,null)),t.ob(33,16384,null,0,z.c,[t.B,t.k,[2,z.a]],null,null),t.Eb(1024,null,z.l,function(l){return[l]},[z.c]),t.ob(35,671744,null,0,z.f,[[3,z.b],[8,null],[8,null],[6,z.l],[2,z.x]],{name:[0,"name"]},null),t.Eb(2048,null,z.m,null,[z.f]),t.ob(37,16384,null,0,z.n,[[4,z.m]],null,null),(l()(),t.pb(38,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(39,0,null,null,10,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.pb(40,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(41,0,null,null,1,"label",[["for","rank"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Topic Rank"])),(l()(),t.pb(43,0,null,null,6,"input",[["class","form-control"],["formControlName","ord"],["id","rank"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Bb(l,44)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Bb(l,44).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Bb(l,44)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Bb(l,44)._compositionEnd(u.target.value)&&i),"change"===n&&(i=!1!==t.Bb(l,45).onChange(u.target.value)&&i),"input"===n&&(i=!1!==t.Bb(l,45).onChange(u.target.value)&&i),"blur"===n&&(i=!1!==t.Bb(l,45).onTouched()&&i),i},null,null)),t.ob(44,16384,null,0,z.c,[t.B,t.k,[2,z.a]],null,null),t.ob(45,16384,null,0,z.r,[t.B,t.k],null,null),t.Eb(1024,null,z.l,function(l,n){return[l,n]},[z.c,z.r]),t.ob(47,671744,null,0,z.f,[[3,z.b],[8,null],[8,null],[6,z.l],[2,z.x]],{name:[0,"name"]},null),t.Eb(2048,null,z.m,null,[z.f]),t.ob(49,16384,null,0,z.n,[[4,z.m]],null,null)],function(l,n){l(n,5,0,n.component.topicForm),l(n,24,0,"id"),l(n,35,0,"name"),l(n,47,0,"ord")},function(l,n){var u=n.component;l(n,3,0,t.Bb(n,7).ngClassUntouched,t.Bb(n,7).ngClassTouched,t.Bb(n,7).ngClassPristine,t.Bb(n,7).ngClassDirty,t.Bb(n,7).ngClassValid,t.Bb(n,7).ngClassInvalid,t.Bb(n,7).ngClassPending),l(n,10,0,!u.topicForm.valid),l(n,14,0,!u.editMode),l(n,21,0,t.Bb(n,26).ngClassUntouched,t.Bb(n,26).ngClassTouched,t.Bb(n,26).ngClassPristine,t.Bb(n,26).ngClassDirty,t.Bb(n,26).ngClassValid,t.Bb(n,26).ngClassInvalid,t.Bb(n,26).ngClassPending),l(n,32,0,t.Bb(n,37).ngClassUntouched,t.Bb(n,37).ngClassTouched,t.Bb(n,37).ngClassPristine,t.Bb(n,37).ngClassDirty,t.Bb(n,37).ngClassValid,t.Bb(n,37).ngClassInvalid,t.Bb(n,37).ngClassPending),l(n,43,0,t.Bb(n,49).ngClassUntouched,t.Bb(n,49).ngClassTouched,t.Bb(n,49).ngClassPristine,t.Bb(n,49).ngClassDirty,t.Bb(n,49).ngClassValid,t.Bb(n,49).ngClassInvalid,t.Bb(n,49).ngClassPending)})}function N(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-topic-edit",[],null,null,null,D,L)),t.ob(1,114688,null,0,O,[e.a,e.k,a.a],null,null)],function(l,n){l(n,1,0)},null)}var q=t.lb("app-topic-edit",O,N,{},{},[]),j=u("OPu6");class V{constructor(l,n,u,t,i){this.router=l,this.route=n,this.productService=u,this.topicService=t,this.authService=i,this.userSub=new c.a,this.isAdminLogin=!1,this.topic=new A,this.products=[],this.productNew=new j.a(null,null,null,"","Click To Add New","")}ngOnInit(){this.route.params.subscribe(l=>{this.topicId=+l.topicId,this.products=this.route.snapshot.data.products,this.topicService.getTopic(this.topicId).subscribe(l=>{this.topic=l.data})}),this.userSub=this.authService.user.subscribe(l=>{this.isAdminLogin=!!l&&"ccnuxuji"===l.name})}onClick(){this.router.navigate(["edit"],{relativeTo:this.route})}newProduct(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.userSub.unsubscribe()}}var U=t.nb({encapsulation:0,styles:[["button[_ngcontent-%COMP%]{float:right;font-size:14px}#head[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}p[_ngcontent-%COMP%]{margin:0;padding-top:7px;text-align:center}a[_ngcontent-%COMP%]:hover{text-decoration:none}"]],data:{}});function J(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClick()&&t),t},null,null)),(l()(),t.Hb(-1,null,["Edit"]))],null,null)}function R(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-product-item",[],null,null,null,w,I)),t.ob(1,245760,null,0,k,[e.a,e.k,b.a,y.b],{product:[0,"product"]},null)],function(l,n){l(n,1,0,n.context.$implicit)},null)}function $(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,8,"div",[["class","caption"],["routerLinkActive","active"],["style","cursor: pointer"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.newProduct()&&t),t},null,null)),t.ob(1,1720320,null,2,e.m,[e.k,t.k,t.B,[2,e.l],[2,e.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Fb(603979776,1,{links:1}),t.Fb(603979776,2,{linksWithHrefs:1}),(l()(),t.pb(4,0,null,null,4,"a",[["class","thumbnail module"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Hb(6,null,["",""])),(l()(),t.pb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(8,null,["",""]))],function(l,n){l(n,1,0,"active")},function(l,n){var u=n.component;l(n,6,0,u.productNew.name),l(n,8,0,u.productNew.description)})}function K(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,15,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,8,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,7,"div",[["id","head"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,3,"div",[["style","float: left; color: #428BCA"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,0,"span",[["class","glyphicon glyphicon-list"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,1,"span",[["style","color: black"]],null,null,null,null,null)),(l()(),t.Hb(6,null,[" ",""])),(l()(),t.pb(7,0,null,null,2,"div",[["style","float: right"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,J)),t.ob(9,16384,null,0,s.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(10,0,null,null,5,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,R)),t.ob(12,278528,null,0,s.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(13,0,null,null,2,"div",[["class","col-xs-6 col-md-3"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,$)),t.ob(15,16384,null,0,s.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,9,0,u.isAdminLogin),l(n,12,0,u.products),l(n,15,0,u.isAdminLogin)},function(l,n){l(n,6,0,n.component.topic.name)})}function W(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-product-detail",[],null,null,null,K,U)),t.ob(1,245760,null,0,V,[e.k,e.a,x.a,a.a,b.a],null,null)],function(l,n){l(n,1,0)},null)}var X=t.lb("app-product-detail",V,W,{},{},[]);class Y{constructor(l,n,u){this.router=l,this.route=n,this.productService=u,this.editMode=!1}ngOnInit(){this.route.params.subscribe(l=>{this.productId=+l.productId,this.topicId=+l.topicId,this.editMode="new"!==l.productId,this.initForm()})}onSubmit(){this.editMode?this.productService.updateProduct(this.productForm.value).subscribe(l=>{this.productService.fetchProductsByTopic(this.topicId).subscribe(),this.onCancel()}):(console.log(this.productForm.value),this.productService.addProduct(this.productForm.value).subscribe(l=>{this.productService.fetchProductsByTopic(this.topicId).subscribe(),this.onCancel()}))}onDelete(){this.productService.deleteProduct(this.productId).subscribe(l=>{this.productService.fetchProductsByTopic(this.topicId).subscribe(),this.onCancel()})}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}initForm(){let l=new j.a;l.tid=this.topicId,this.editMode&&this.productService.getProduct(this.productId).subscribe(n=>{(l=n.data).tid=this.topicId,this.productForm=new z.g({id:new z.e(l.id),name:new z.e(l.name,z.u.required),tid:new z.e(l.tid,z.u.required),ord:new z.e(l.ord,z.u.required),thumbnail:new z.e(l.thumbnail),description:new z.e(l.description)})}),this.productForm=new z.g({id:new z.e(l.id),name:new z.e(l.name,z.u.required),tid:new z.e(l.tid,z.u.required),ord:new z.e(l.ord,z.u.required),thumbnail:new z.e(l.thumbnail),description:new z.e(l.description)})}ngOnDestroy(){}}var G=t.nb({encapsulation:0,styles:[[""]],data:{}});function Q(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,84,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,83,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,82,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,81,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var i=!0,o=l.component;return"submit"===n&&(i=!1!==t.Bb(l,5).onSubmit(u)&&i),"reset"===n&&(i=!1!==t.Bb(l,5).onReset()&&i),"ngSubmit"===n&&(i=!1!==o.onSubmit()&&i),i},null,null)),t.ob(4,16384,null,0,z.y,[],null,null),t.ob(5,540672,null,0,z.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Eb(2048,null,z.b,null,[z.h]),t.ob(7,16384,null,0,z.o,[[4,z.b]],null,null),(l()(),t.pb(8,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,6,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,1,"button",[["class","btn btn-success"],["type","submit"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Save"])),(l()(),t.pb(12,0,null,null,1,"button",[["class","btn btn-info"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onCancel()&&t),t},null,null)),(l()(),t.Hb(-1,null,["Cancel"])),(l()(),t.pb(14,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onDelete()&&t),t},null,null)),(l()(),t.Hb(-1,null,["Delete"])),(l()(),t.pb(16,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,10,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,1,"label",[["for","tid"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Product Id"])),(l()(),t.pb(21,0,null,null,6,"input",[["class","form-control"],["formControlName","id"],["id","id"],["readonly",""],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Bb(l,22)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Bb(l,22).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Bb(l,22)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Bb(l,22)._compositionEnd(u.target.value)&&i),"change"===n&&(i=!1!==t.Bb(l,23).onChange(u.target.value)&&i),"input"===n&&(i=!1!==t.Bb(l,23).onChange(u.target.value)&&i),"blur"===n&&(i=!1!==t.Bb(l,23).onTouched()&&i),i},null,null)),t.ob(22,16384,null,0,z.c,[t.B,t.k,[2,z.a]],null,null),t.ob(23,16384,null,0,z.r,[t.B,t.k],null,null),t.Eb(1024,null,z.l,function(l,n){return[l,n]},[z.c,z.r]),t.ob(25,671744,null,0,z.f,[[3,z.b],[8,null],[8,null],[6,z.l],[2,z.x]],{name:[0,"name"]},null),t.Eb(2048,null,z.m,null,[z.f]),t.ob(27,16384,null,0,z.n,[[4,z.m]],null,null),(l()(),t.pb(28,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(29,0,null,null,10,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.pb(30,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(31,0,null,null,1,"label",[["for","tid"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Tid"])),(l()(),t.pb(33,0,null,null,6,"input",[["class","form-control"],["formControlName","tid"],["id","tid"],["readonly",""],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Bb(l,34)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Bb(l,34).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Bb(l,34)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Bb(l,34)._compositionEnd(u.target.value)&&i),"change"===n&&(i=!1!==t.Bb(l,35).onChange(u.target.value)&&i),"input"===n&&(i=!1!==t.Bb(l,35).onChange(u.target.value)&&i),"blur"===n&&(i=!1!==t.Bb(l,35).onTouched()&&i),i},null,null)),t.ob(34,16384,null,0,z.c,[t.B,t.k,[2,z.a]],null,null),t.ob(35,16384,null,0,z.r,[t.B,t.k],null,null),t.Eb(1024,null,z.l,function(l,n){return[l,n]},[z.c,z.r]),t.ob(37,671744,null,0,z.f,[[3,z.b],[8,null],[8,null],[6,z.l],[2,z.x]],{name:[0,"name"]},null),t.Eb(2048,null,z.m,null,[z.f]),t.ob(39,16384,null,0,z.n,[[4,z.m]],null,null),(l()(),t.pb(40,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(41,0,null,null,9,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.pb(42,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(43,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Product Name"])),(l()(),t.pb(45,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Bb(l,46)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Bb(l,46).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Bb(l,46)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Bb(l,46)._compositionEnd(u.target.value)&&i),i},null,null)),t.ob(46,16384,null,0,z.c,[t.B,t.k,[2,z.a]],null,null),t.Eb(1024,null,z.l,function(l){return[l]},[z.c]),t.ob(48,671744,null,0,z.f,[[3,z.b],[8,null],[8,null],[6,z.l],[2,z.x]],{name:[0,"name"]},null),t.Eb(2048,null,z.m,null,[z.f]),t.ob(50,16384,null,0,z.n,[[4,z.m]],null,null),(l()(),t.pb(51,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(52,0,null,null,9,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.pb(53,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(54,0,null,null,1,"label",[["for","description"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Product Description"])),(l()(),t.pb(56,0,null,null,5,"input",[["class","form-control"],["formControlName","description"],["id","description"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Bb(l,57)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Bb(l,57).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Bb(l,57)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Bb(l,57)._compositionEnd(u.target.value)&&i),i},null,null)),t.ob(57,16384,null,0,z.c,[t.B,t.k,[2,z.a]],null,null),t.Eb(1024,null,z.l,function(l){return[l]},[z.c]),t.ob(59,671744,null,0,z.f,[[3,z.b],[8,null],[8,null],[6,z.l],[2,z.x]],{name:[0,"name"]},null),t.Eb(2048,null,z.m,null,[z.f]),t.ob(61,16384,null,0,z.n,[[4,z.m]],null,null),(l()(),t.pb(62,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(63,0,null,null,9,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.pb(64,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(65,0,null,null,1,"label",[["for","thumbnail"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Thumbnail"])),(l()(),t.pb(67,0,null,null,5,"input",[["class","form-control"],["formControlName","thumbnail"],["id","thumbnail"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Bb(l,68)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Bb(l,68).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Bb(l,68)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Bb(l,68)._compositionEnd(u.target.value)&&i),i},null,null)),t.ob(68,16384,null,0,z.c,[t.B,t.k,[2,z.a]],null,null),t.Eb(1024,null,z.l,function(l){return[l]},[z.c]),t.ob(70,671744,null,0,z.f,[[3,z.b],[8,null],[8,null],[6,z.l],[2,z.x]],{name:[0,"name"]},null),t.Eb(2048,null,z.m,null,[z.f]),t.ob(72,16384,null,0,z.n,[[4,z.m]],null,null),(l()(),t.pb(73,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(74,0,null,null,10,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.pb(75,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(76,0,null,null,1,"label",[["for","rank"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Product Rank"])),(l()(),t.pb(78,0,null,null,6,"input",[["class","form-control"],["formControlName","ord"],["id","rank"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Bb(l,79)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Bb(l,79).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Bb(l,79)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Bb(l,79)._compositionEnd(u.target.value)&&i),"change"===n&&(i=!1!==t.Bb(l,80).onChange(u.target.value)&&i),"input"===n&&(i=!1!==t.Bb(l,80).onChange(u.target.value)&&i),"blur"===n&&(i=!1!==t.Bb(l,80).onTouched()&&i),i},null,null)),t.ob(79,16384,null,0,z.c,[t.B,t.k,[2,z.a]],null,null),t.ob(80,16384,null,0,z.r,[t.B,t.k],null,null),t.Eb(1024,null,z.l,function(l,n){return[l,n]},[z.c,z.r]),t.ob(82,671744,null,0,z.f,[[3,z.b],[8,null],[8,null],[6,z.l],[2,z.x]],{name:[0,"name"]},null),t.Eb(2048,null,z.m,null,[z.f]),t.ob(84,16384,null,0,z.n,[[4,z.m]],null,null)],function(l,n){l(n,5,0,n.component.productForm),l(n,25,0,"id"),l(n,37,0,"tid"),l(n,48,0,"name"),l(n,59,0,"description"),l(n,70,0,"thumbnail"),l(n,82,0,"ord")},function(l,n){l(n,3,0,t.Bb(n,7).ngClassUntouched,t.Bb(n,7).ngClassTouched,t.Bb(n,7).ngClassPristine,t.Bb(n,7).ngClassDirty,t.Bb(n,7).ngClassValid,t.Bb(n,7).ngClassInvalid,t.Bb(n,7).ngClassPending),l(n,21,0,t.Bb(n,27).ngClassUntouched,t.Bb(n,27).ngClassTouched,t.Bb(n,27).ngClassPristine,t.Bb(n,27).ngClassDirty,t.Bb(n,27).ngClassValid,t.Bb(n,27).ngClassInvalid,t.Bb(n,27).ngClassPending),l(n,33,0,t.Bb(n,39).ngClassUntouched,t.Bb(n,39).ngClassTouched,t.Bb(n,39).ngClassPristine,t.Bb(n,39).ngClassDirty,t.Bb(n,39).ngClassValid,t.Bb(n,39).ngClassInvalid,t.Bb(n,39).ngClassPending),l(n,45,0,t.Bb(n,50).ngClassUntouched,t.Bb(n,50).ngClassTouched,t.Bb(n,50).ngClassPristine,t.Bb(n,50).ngClassDirty,t.Bb(n,50).ngClassValid,t.Bb(n,50).ngClassInvalid,t.Bb(n,50).ngClassPending),l(n,56,0,t.Bb(n,61).ngClassUntouched,t.Bb(n,61).ngClassTouched,t.Bb(n,61).ngClassPristine,t.Bb(n,61).ngClassDirty,t.Bb(n,61).ngClassValid,t.Bb(n,61).ngClassInvalid,t.Bb(n,61).ngClassPending),l(n,67,0,t.Bb(n,72).ngClassUntouched,t.Bb(n,72).ngClassTouched,t.Bb(n,72).ngClassPristine,t.Bb(n,72).ngClassDirty,t.Bb(n,72).ngClassValid,t.Bb(n,72).ngClassInvalid,t.Bb(n,72).ngClassPending),l(n,78,0,t.Bb(n,84).ngClassUntouched,t.Bb(n,84).ngClassTouched,t.Bb(n,84).ngClassPristine,t.Bb(n,84).ngClassDirty,t.Bb(n,84).ngClassValid,t.Bb(n,84).ngClassInvalid,t.Bb(n,84).ngClassPending)})}function Z(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-product-edit",[],null,null,null,Q,G)),t.ob(1,245760,null,0,Y,[e.k,e.a,x.a],null,null)],function(l,n){l(n,1,0)},null)}var ll=t.lb("app-product-edit",Y,Z,{},{},[]),nl=u("IheW"),ul=u("alHs"),tl=u("PCNd"),il=u("ECN0"),ol=u("gpEQ"),el=u("c2um");let sl=(()=>{class l{constructor(l){this.productService=l}resolve(l,n){const u=n.url.split("/")[2];return console.log(n.url.split("/")),this.productService.fetchProductsByTopic(+u)}}return l.ngInjectableDef=t.Lb({factory:function(){return new l(t.Mb(x.a))},token:l,providedIn:"root"}),l})();class cl{}u.d(n,"TopicsModuleNgFactory",function(){return rl});var rl=t.mb(i,[],function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[o.a,C,M,q,X,ll]],[3,t.j],t.v]),t.zb(4608,s.l,s.k,[t.s,[2,s.w]]),t.zb(4608,z.w,z.w,[]),t.zb(4608,z.d,z.d,[]),t.zb(4608,nl.h,nl.n,[s.c,t.z,nl.l]),t.zb(4608,nl.o,nl.o,[nl.h,nl.m]),t.zb(5120,nl.a,function(l){return[l]},[nl.o]),t.zb(4608,nl.k,nl.k,[]),t.zb(6144,nl.i,null,[nl.k]),t.zb(4608,nl.g,nl.g,[nl.i]),t.zb(6144,nl.b,null,[nl.g]),t.zb(4608,nl.f,nl.j,[nl.b,t.p]),t.zb(4608,nl.c,nl.c,[nl.f]),t.zb(1073742336,s.b,s.b,[]),t.zb(1073742336,z.v,z.v,[]),t.zb(1073742336,z.i,z.i,[]),t.zb(1073742336,z.s,z.s,[]),t.zb(1073742336,ul.c,ul.c,[]),t.zb(1073742336,tl.a,tl.a,[]),t.zb(1073742336,nl.e,nl.e,[]),t.zb(1073742336,nl.d,nl.d,[]),t.zb(1073742336,e.o,e.o,[[2,e.t],[2,e.k]]),t.zb(1073742336,cl,cl,[]),t.zb(1073742336,i,i,[]),t.zb(256,ul.a,{modules:{syntax:!0,formula:!0,toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["formula"],["link","image","video"]]}},[]),t.zb(256,nl.l,"XSRF-TOKEN",[]),t.zb(256,nl.m,"X-XSRF-TOKEN",[]),t.zb(1024,e.i,function(){return[[{path:"",component:m,children:[{path:"",component:T,resolve:[il.a,ol.a],pathMatch:"full"},{path:"new",canActivate:[el.a],resolve:[il.a,ol.a],component:O},{path:":topicId",resolve:{TopicsResolverService:il.a,products:sl},component:V},{path:":topicId/edit",resolve:[il.a],canActivate:[el.a],component:O},{path:":topicId/:productId",canActivate:[el.a],component:Y},{path:":topicId/new",canActivate:[el.a],component:Y}]}]]},[])])})}}]);