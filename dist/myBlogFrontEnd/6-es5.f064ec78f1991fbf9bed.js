(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4P1z":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=function(){return function(){}}(),o=u("pMnS"),e=u("ZYCi"),r=u("Ip0R"),c=u("pugT"),s=function(){function l(l,n,u,t){this.topicService=l,this.router=n,this.route=u,this.authService=t,this.topics=[],this.isAdminLogin=!1,this.subscription=new c.a}return l.prototype.ngOnInit=function(){var l=this;this.topics=this.topicService.getTopics(),this.subscription=this.topicService.topicsChanged.subscribe(function(n){l.topics=n}),this.subscription=this.authService.user.subscribe(function(n){l.isAdminLogin=!!n&&"ccnuxuji"===n.name})},l.prototype.onNewTopic=function(){this.router.navigate(["new"],{relativeTo:this.route})},l.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},l}(),a=u("iArq"),b=u("qXBG"),d=t.pb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,6,"a",[["class","list-group-item"],["routerLinkActive","active"],["style","cursor: pointer"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Db(l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&i),i},null,null)),t.qb(1,671744,[[4,4]],0,e.n,[e.k,e.a,r.g],{routerLink:[0,"routerLink"]},null),t.Eb(2,1),t.qb(3,1720320,null,2,e.m,[e.k,t.k,t.D,[2,e.l],[2,e.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Hb(603979776,3,{links:1}),t.Hb(603979776,4,{linksWithHrefs:1}),(l()(),t.Jb(6,null,[""," "]))],function(l,n){var u=l(n,2,0,n.context.$implicit.id);l(n,1,0,u),l(n,3,0,"active")},function(l,n){l(n,0,0,t.Db(n,1).target,t.Db(n,1).href),l(n,6,0,n.context.$implicit.name)})}function g(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onNewTopic()&&t),t},null,null)),(l()(),t.Jb(-1,null,["New Topic"]))],null,null)}function m(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,10,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,9,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,6,"a",[["class","list-group-item disabled"],["routerLinkActive","active"],["style","color: #428BCA"]],null,null,null,null,null)),t.qb(4,1720320,null,2,e.m,[e.k,t.k,t.D,[2,e.l],[2,e.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Hb(603979776,1,{links:1}),t.Hb(603979776,2,{linksWithHrefs:1}),(l()(),t.rb(7,0,null,null,0,"span",[["class","glyphicon glyphicon-list"]],null,null,null,null,null)),(l()(),t.rb(8,0,null,null,1,"span",[["style","color: black"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" All Topics"])),(l()(),t.gb(16777216,null,null,1,null,p)),t.qb(11,278528,null,0,r.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(12,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(13,0,null,null,2,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,g)),t.qb(15,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,4,0,"active"),l(n,11,0,u.topics),l(n,15,0,u.isAdminLogin)},null)}var h=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),v=t.pb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,1,"app-topic-list",[],null,null,null,m,d)),t.qb(3,245760,null,0,s,[a.a,e.k,e.a,b.a],null,null),(l()(),t.rb(4,0,null,null,2,"div",[["class","col-md-10"]],null,null,null,null,null)),(l()(),t.rb(5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.qb(6,212992,null,0,e.p,[e.b,t.O,t.j,[8,null],t.h],null,null)],function(l,n){l(n,3,0),l(n,6,0)},null)}function D(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-topic",[],null,null,null,f,v)),t.qb(1,114688,null,0,h,[],null,null)],function(l,n){l(n,1,0)},null)}var C=t.nb("app-topic",h,D,{},{},[]),y=function(){function l(l,n,u,t){this.route=l,this.router=n,this.authService=u,this.sanitizer=t,this.isFromStartPage=!1,this.isAdminLogin=!1,this.userSub=new c.a}return l.prototype.ngOnInit=function(){var l=this;this.userSub=this.authService.user.subscribe(function(n){l.isAdminLogin=!!n&&"ccnuxuji"===n.name}),this.route.params.subscribe(function(n){n.topicId||(l.isFromStartPage=!0)})},l.prototype.assembleHTML=function(l){return this.sanitizer.bypassSecurityTrustHtml(l)},l.prototype.onEdit=function(){this.router.navigate([this.product.id],{relativeTo:this.route})},l.prototype.ngOnDestroy=function(){this.userSub.unsubscribe()},l}(),k=u("ZYjt"),w=t.pb({encapsulation:0,styles:[["h2[_ngcontent-%COMP%]{margin-top:10px}a[_ngcontent-%COMP%]{margin-bottom:10px;height:120px}#div1[_ngcontent-%COMP%]{color:#bbb;border-radius:30px}a[_ngcontent-%COMP%]:hover{text-decoration:none}"]],data:{}});function q(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onEdit()&&t),t},null,null)),(l()(),t.Jb(-1,null,["Eidt"]))],null,null)}function S(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,15,"div",[["class","col-xs-6 col-md-3"],["id","div1"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,12,"div",[["class","caption"],["routerLinkActive","active"],["style","cursor: pointer;"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Db(l,2).onClick()&&i),i},null,null)),t.qb(2,16384,[[1,4]],0,e.l,[e.k,e.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Eb(3,2),t.qb(4,1720320,null,2,e.m,[e.k,t.k,t.D,[2,e.l],[2,e.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Hb(603979776,1,{links:1}),t.Hb(603979776,2,{linksWithHrefs:1}),(l()(),t.rb(7,0,null,null,6,"a",[["class","thumbnail module"],["style","border-radius:15px; background-color: #dff0d8"]],null,null,null,null,null)),(l()(),t.rb(8,0,null,null,1,"div",[["class","pull-right"]],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.rb(10,0,null,null,1,"h4",[["class","list-group-item-heading"]],null,null,null,null,null)),(l()(),t.Jb(11,null,["",""])),(l()(),t.rb(12,0,null,null,1,"p",[["class",""]],null,null,null,null,null)),(l()(),t.Jb(13,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,q)),t.qb(15,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component,t=l(n,3,0,"/product/",u.product.id);l(n,2,0,t),l(n,4,0,"active"),l(n,15,0,u.isAdminLogin&&!u.isFromStartPage)},function(l,n){var u=n.component;l(n,9,0,u.assembleHTML(u.product.thumbnail)),l(n,11,0,u.product.name),l(n,13,0,u.product.description)})}var I=function(){function l(l,n){this.topicService=l,this.productService=n,this.topics=[],this.products=[]}return l.prototype.ngOnInit=function(){this.topics=this.topicService.getTopics(),this.products=this.productService.getProducts(),console.log(this.products)},l.prototype.getProductsByTopic=function(l){return this.productService.getProductsByTopic(l)},l}(),T=u("Y0Vt"),x=t.pb({encapsulation:0,styles:[["#head[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}p[_ngcontent-%COMP%]{margin:0;padding-top:7px;text-align:center}"]],data:{}});function P(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-product-item",[],null,null,null,S,w)),t.qb(1,245760,null,0,y,[e.a,e.k,b.a,k.b],{product:[0,"product"]},null)],function(l,n){l(n,1,0,n.context.$implicit)},null)}function O(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,9,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,5,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,4,"div",[["id","head"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,3,"div",[["style","float: left; color: #428BCA"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,0,"span",[["class","glyphicon glyphicon-list"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,1,"span",[["style","color: black"]],null,null,null,null,null)),(l()(),t.Jb(6,null,[" ",""])),(l()(),t.rb(7,0,null,null,2,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,P)),t.qb(9,278528,null,0,r.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,9,0,n.component.getProductsByTopic(n.context.$implicit))},function(l,n){l(n,6,0,n.context.$implicit.name)})}function B(l){return t.Kb(0,[(l()(),t.gb(16777216,null,null,1,null,O)),t.qb(1,278528,null,0,r.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0,n.component.topics)},null)}function L(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-topic-start",[],null,null,null,B,x)),t.qb(1,114688,null,0,I,[a.a,T.a],null,null)],function(l,n){l(n,1,0)},null)}var _=t.nb("app-topic-start",I,L,{},{},[]),A=u("gIcY"),F=function(){return function(l,n,u){this.id=l,this.ord=n,this.name=u,this.id=l||null,this.ord=n||null,this.name=u||null}}(),J=function(){function l(l,n,u){this.route=l,this.router=n,this.topicService=u,this.editMode=!1}return l.prototype.ngOnInit=function(){var l=this;this.route.params.subscribe(function(n){l.topicId=+n.topicId,l.editMode=null!=n.topicId,l.initForm()})},l.prototype.onSubmit=function(){var l=this;this.editMode?this.topicService.updateTopic(this.topicForm.value).subscribe(function(n){l.topicService.fetchTopics().subscribe(),l.onCancel()}):this.topicService.addTopic(this.topicForm.value).subscribe(function(n){l.topicService.fetchTopics().subscribe(),l.onCancel()})},l.prototype.onDelete=function(){var l=this;this.topicService.deleteTopic(this.topicId).subscribe(function(n){l.topicService.fetchTopics().subscribe(),l.onCancel()})},l.prototype.onCancel=function(){this.router.navigate(["../../"],{relativeTo:this.route})},l.prototype.initForm=function(){var l=this,n=new F;this.editMode&&this.topicService.getTopic(this.topicId).subscribe(function(u){l.topicForm=new A.g({id:new A.e((n=u.data).id),name:new A.e(n.name,A.u.required),ord:new A.e(n.ord,A.u.required)})}),this.topicForm=new A.g({id:new A.e(n.id),name:new A.e(n.name,A.u.required),ord:new A.e(n.ord,A.u.required)})},l}(),M=t.pb({encapsulation:0,styles:[[""]],data:{}});function K(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,49,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,48,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,47,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,46,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var i=!0,o=l.component;return"submit"===n&&(i=!1!==t.Db(l,5).onSubmit(u)&&i),"reset"===n&&(i=!1!==t.Db(l,5).onReset()&&i),"ngSubmit"===n&&(i=!1!==o.onSubmit()&&i),i},null,null)),t.qb(4,16384,null,0,A.y,[],null,null),t.qb(5,540672,null,0,A.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Gb(2048,null,A.b,null,[A.h]),t.qb(7,16384,null,0,A.o,[[4,A.b]],null,null),(l()(),t.rb(8,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,6,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.rb(10,0,null,null,1,"button",[["class","btn btn-success"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Jb(-1,null,["Save"])),(l()(),t.rb(12,0,null,null,1,"button",[["class","btn btn-info"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onCancel()&&t),t},null,null)),(l()(),t.Jb(-1,null,["Cancel"])),(l()(),t.rb(14,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onDelete()&&t),t},null,null)),(l()(),t.Jb(-1,null,["Delete"])),(l()(),t.rb(16,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(17,0,null,null,9,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.rb(18,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(19,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Topic Id"])),(l()(),t.rb(21,0,null,null,5,"input",[["class","form-control"],["formControlName","id"],["id","id"],["readonly",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Db(l,22)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Db(l,22).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Db(l,22)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Db(l,22)._compositionEnd(u.target.value)&&i),i},null,null)),t.qb(22,16384,null,0,A.c,[t.D,t.k,[2,A.a]],null,null),t.Gb(1024,null,A.l,function(l){return[l]},[A.c]),t.qb(24,671744,null,0,A.f,[[3,A.b],[8,null],[8,null],[6,A.l],[2,A.x]],{name:[0,"name"]},null),t.Gb(2048,null,A.m,null,[A.f]),t.qb(26,16384,null,0,A.n,[[4,A.m]],null,null),(l()(),t.rb(27,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(28,0,null,null,9,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.rb(29,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(30,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Topic Name"])),(l()(),t.rb(32,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Db(l,33)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Db(l,33).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Db(l,33)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Db(l,33)._compositionEnd(u.target.value)&&i),i},null,null)),t.qb(33,16384,null,0,A.c,[t.D,t.k,[2,A.a]],null,null),t.Gb(1024,null,A.l,function(l){return[l]},[A.c]),t.qb(35,671744,null,0,A.f,[[3,A.b],[8,null],[8,null],[6,A.l],[2,A.x]],{name:[0,"name"]},null),t.Gb(2048,null,A.m,null,[A.f]),t.qb(37,16384,null,0,A.n,[[4,A.m]],null,null),(l()(),t.rb(38,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(39,0,null,null,10,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.rb(40,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(41,0,null,null,1,"label",[["for","rank"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Topic Rank"])),(l()(),t.rb(43,0,null,null,6,"input",[["class","form-control"],["formControlName","ord"],["id","rank"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Db(l,44)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Db(l,44).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Db(l,44)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Db(l,44)._compositionEnd(u.target.value)&&i),"change"===n&&(i=!1!==t.Db(l,45).onChange(u.target.value)&&i),"input"===n&&(i=!1!==t.Db(l,45).onChange(u.target.value)&&i),"blur"===n&&(i=!1!==t.Db(l,45).onTouched()&&i),i},null,null)),t.qb(44,16384,null,0,A.c,[t.D,t.k,[2,A.a]],null,null),t.qb(45,16384,null,0,A.r,[t.D,t.k],null,null),t.Gb(1024,null,A.l,function(l,n){return[l,n]},[A.c,A.r]),t.qb(47,671744,null,0,A.f,[[3,A.b],[8,null],[8,null],[6,A.l],[2,A.x]],{name:[0,"name"]},null),t.Gb(2048,null,A.m,null,[A.f]),t.qb(49,16384,null,0,A.n,[[4,A.m]],null,null)],function(l,n){l(n,5,0,n.component.topicForm),l(n,24,0,"id"),l(n,35,0,"name"),l(n,47,0,"ord")},function(l,n){var u=n.component;l(n,3,0,t.Db(n,7).ngClassUntouched,t.Db(n,7).ngClassTouched,t.Db(n,7).ngClassPristine,t.Db(n,7).ngClassDirty,t.Db(n,7).ngClassValid,t.Db(n,7).ngClassInvalid,t.Db(n,7).ngClassPending),l(n,10,0,!u.topicForm.valid),l(n,14,0,!u.editMode),l(n,21,0,t.Db(n,26).ngClassUntouched,t.Db(n,26).ngClassTouched,t.Db(n,26).ngClassPristine,t.Db(n,26).ngClassDirty,t.Db(n,26).ngClassValid,t.Db(n,26).ngClassInvalid,t.Db(n,26).ngClassPending),l(n,32,0,t.Db(n,37).ngClassUntouched,t.Db(n,37).ngClassTouched,t.Db(n,37).ngClassPristine,t.Db(n,37).ngClassDirty,t.Db(n,37).ngClassValid,t.Db(n,37).ngClassInvalid,t.Db(n,37).ngClassPending),l(n,43,0,t.Db(n,49).ngClassUntouched,t.Db(n,49).ngClassTouched,t.Db(n,49).ngClassPristine,t.Db(n,49).ngClassDirty,t.Db(n,49).ngClassValid,t.Db(n,49).ngClassInvalid,t.Db(n,49).ngClassPending)})}function N(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-topic-edit",[],null,null,null,K,M)),t.qb(1,114688,null,0,J,[e.a,e.k,a.a],null,null)],function(l,n){l(n,1,0)},null)}var G=t.nb("app-topic-edit",J,N,{},{},[]),E=u("OPu6"),j=function(){function l(l,n,u,t,i){this.router=l,this.route=n,this.productService=u,this.topicService=t,this.authService=i,this.userSub=new c.a,this.isAdminLogin=!1,this.topic=new F,this.products=[],this.productNew=new E.a(null,null,null,"","Click To Add New","")}return l.prototype.ngOnInit=function(){var l=this;this.route.params.subscribe(function(n){l.topicId=+n.topicId,l.products=l.route.snapshot.data.products,l.topicService.getTopic(l.topicId).subscribe(function(n){l.topic=n.data})}),this.userSub=this.authService.user.subscribe(function(n){l.isAdminLogin=!!n&&"ccnuxuji"===n.name})},l.prototype.onClick=function(){this.router.navigate(["edit"],{relativeTo:this.route})},l.prototype.newProduct=function(){this.router.navigate(["new"],{relativeTo:this.route})},l.prototype.ngOnDestroy=function(){this.userSub.unsubscribe()},l}(),H=t.pb({encapsulation:0,styles:[["button[_ngcontent-%COMP%]{float:right;font-size:14px}#head[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}p[_ngcontent-%COMP%]{margin:0;padding-top:7px;text-align:center}a[_ngcontent-%COMP%]:hover{text-decoration:none}"]],data:{}});function V(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClick()&&t),t},null,null)),(l()(),t.Jb(-1,null,["Edit"]))],null,null)}function U(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-product-item",[],null,null,null,S,w)),t.qb(1,245760,null,0,y,[e.a,e.k,b.a,k.b],{product:[0,"product"]},null)],function(l,n){l(n,1,0,n.context.$implicit)},null)}function R(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,8,"div",[["class","caption"],["routerLinkActive","active"],["style","cursor: pointer"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.newProduct()&&t),t},null,null)),t.qb(1,1720320,null,2,e.m,[e.k,t.k,t.D,[2,e.l],[2,e.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Hb(603979776,1,{links:1}),t.Hb(603979776,2,{linksWithHrefs:1}),(l()(),t.rb(4,0,null,null,4,"a",[["class","thumbnail module"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(6,null,["",""])),(l()(),t.rb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(8,null,["",""]))],function(l,n){l(n,1,0,"active")},function(l,n){var u=n.component;l(n,6,0,u.productNew.name),l(n,8,0,u.productNew.description)})}function $(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,15,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,8,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,7,"div",[["id","head"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,3,"div",[["style","float: left; color: #428BCA"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,0,"span",[["class","glyphicon glyphicon-list"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,1,"span",[["style","color: black"]],null,null,null,null,null)),(l()(),t.Jb(6,null,[" ",""])),(l()(),t.rb(7,0,null,null,2,"div",[["style","float: right"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,V)),t.qb(9,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(10,0,null,null,5,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,U)),t.qb(12,278528,null,0,r.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(13,0,null,null,2,"div",[["class","col-xs-6 col-md-3"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,R)),t.qb(15,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,9,0,u.isAdminLogin),l(n,12,0,u.products),l(n,15,0,u.isAdminLogin)},function(l,n){l(n,6,0,n.component.topic.name)})}function z(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-product-detail",[],null,null,null,$,H)),t.qb(1,245760,null,0,j,[e.k,e.a,T.a,a.a,b.a],null,null)],function(l,n){l(n,1,0)},null)}var W=t.nb("app-product-detail",j,z,{},{},[]),X=function(){function l(l,n,u){this.router=l,this.route=n,this.productService=u,this.editMode=!1}return l.prototype.ngOnInit=function(){var l=this;this.route.params.subscribe(function(n){l.productId=+n.productId,l.topicId=+n.topicId,l.editMode="new"!==n.productId,l.initForm()})},l.prototype.onSubmit=function(){var l=this;this.editMode?this.productService.updateProduct(this.productForm.value).subscribe(function(n){l.productService.fetchProductsByTopic(l.topicId).subscribe(),l.onCancel()}):(console.log(this.productForm.value),this.productService.addProduct(this.productForm.value).subscribe(function(n){l.productService.fetchProductsByTopic(l.topicId).subscribe(),l.onCancel()}))},l.prototype.onDelete=function(){var l=this;this.productService.deleteProduct(this.productId).subscribe(function(n){l.productService.fetchProductsByTopic(l.topicId).subscribe(),l.onCancel()})},l.prototype.onCancel=function(){this.router.navigate(["../"],{relativeTo:this.route})},l.prototype.initForm=function(){var l=this,n=new E.a;n.tid=this.topicId,this.editMode&&this.productService.getProduct(this.productId).subscribe(function(u){(n=u.data).tid=l.topicId,l.productForm=new A.g({id:new A.e(n.id),name:new A.e(n.name,A.u.required),tid:new A.e(n.tid,A.u.required),ord:new A.e(n.ord,A.u.required),thumbnail:new A.e(n.thumbnail),description:new A.e(n.description)})}),this.productForm=new A.g({id:new A.e(n.id),name:new A.e(n.name,A.u.required),tid:new A.e(n.tid,A.u.required),ord:new A.e(n.ord,A.u.required),thumbnail:new A.e(n.thumbnail),description:new A.e(n.description)})},l.prototype.ngOnDestroy=function(){},l}(),Y=t.pb({encapsulation:0,styles:[[""]],data:{}});function Z(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,84,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,83,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,82,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,81,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var i=!0,o=l.component;return"submit"===n&&(i=!1!==t.Db(l,5).onSubmit(u)&&i),"reset"===n&&(i=!1!==t.Db(l,5).onReset()&&i),"ngSubmit"===n&&(i=!1!==o.onSubmit()&&i),i},null,null)),t.qb(4,16384,null,0,A.y,[],null,null),t.qb(5,540672,null,0,A.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Gb(2048,null,A.b,null,[A.h]),t.qb(7,16384,null,0,A.o,[[4,A.b]],null,null),(l()(),t.rb(8,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,6,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.rb(10,0,null,null,1,"button",[["class","btn btn-success"],["type","submit"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Save"])),(l()(),t.rb(12,0,null,null,1,"button",[["class","btn btn-info"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onCancel()&&t),t},null,null)),(l()(),t.Jb(-1,null,["Cancel"])),(l()(),t.rb(14,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onDelete()&&t),t},null,null)),(l()(),t.Jb(-1,null,["Delete"])),(l()(),t.rb(16,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(17,0,null,null,10,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.rb(18,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(19,0,null,null,1,"label",[["for","tid"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Product Id"])),(l()(),t.rb(21,0,null,null,6,"input",[["class","form-control"],["formControlName","id"],["id","id"],["readonly",""],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Db(l,22)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Db(l,22).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Db(l,22)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Db(l,22)._compositionEnd(u.target.value)&&i),"change"===n&&(i=!1!==t.Db(l,23).onChange(u.target.value)&&i),"input"===n&&(i=!1!==t.Db(l,23).onChange(u.target.value)&&i),"blur"===n&&(i=!1!==t.Db(l,23).onTouched()&&i),i},null,null)),t.qb(22,16384,null,0,A.c,[t.D,t.k,[2,A.a]],null,null),t.qb(23,16384,null,0,A.r,[t.D,t.k],null,null),t.Gb(1024,null,A.l,function(l,n){return[l,n]},[A.c,A.r]),t.qb(25,671744,null,0,A.f,[[3,A.b],[8,null],[8,null],[6,A.l],[2,A.x]],{name:[0,"name"]},null),t.Gb(2048,null,A.m,null,[A.f]),t.qb(27,16384,null,0,A.n,[[4,A.m]],null,null),(l()(),t.rb(28,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(29,0,null,null,10,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.rb(30,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(31,0,null,null,1,"label",[["for","tid"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Tid"])),(l()(),t.rb(33,0,null,null,6,"input",[["class","form-control"],["formControlName","tid"],["id","tid"],["readonly",""],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Db(l,34)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Db(l,34).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Db(l,34)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Db(l,34)._compositionEnd(u.target.value)&&i),"change"===n&&(i=!1!==t.Db(l,35).onChange(u.target.value)&&i),"input"===n&&(i=!1!==t.Db(l,35).onChange(u.target.value)&&i),"blur"===n&&(i=!1!==t.Db(l,35).onTouched()&&i),i},null,null)),t.qb(34,16384,null,0,A.c,[t.D,t.k,[2,A.a]],null,null),t.qb(35,16384,null,0,A.r,[t.D,t.k],null,null),t.Gb(1024,null,A.l,function(l,n){return[l,n]},[A.c,A.r]),t.qb(37,671744,null,0,A.f,[[3,A.b],[8,null],[8,null],[6,A.l],[2,A.x]],{name:[0,"name"]},null),t.Gb(2048,null,A.m,null,[A.f]),t.qb(39,16384,null,0,A.n,[[4,A.m]],null,null),(l()(),t.rb(40,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(41,0,null,null,9,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.rb(42,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(43,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Product Name"])),(l()(),t.rb(45,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Db(l,46)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Db(l,46).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Db(l,46)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Db(l,46)._compositionEnd(u.target.value)&&i),i},null,null)),t.qb(46,16384,null,0,A.c,[t.D,t.k,[2,A.a]],null,null),t.Gb(1024,null,A.l,function(l){return[l]},[A.c]),t.qb(48,671744,null,0,A.f,[[3,A.b],[8,null],[8,null],[6,A.l],[2,A.x]],{name:[0,"name"]},null),t.Gb(2048,null,A.m,null,[A.f]),t.qb(50,16384,null,0,A.n,[[4,A.m]],null,null),(l()(),t.rb(51,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(52,0,null,null,9,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.rb(53,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(54,0,null,null,1,"label",[["for","description"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Product Description"])),(l()(),t.rb(56,0,null,null,5,"input",[["class","form-control"],["formControlName","description"],["id","description"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Db(l,57)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Db(l,57).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Db(l,57)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Db(l,57)._compositionEnd(u.target.value)&&i),i},null,null)),t.qb(57,16384,null,0,A.c,[t.D,t.k,[2,A.a]],null,null),t.Gb(1024,null,A.l,function(l){return[l]},[A.c]),t.qb(59,671744,null,0,A.f,[[3,A.b],[8,null],[8,null],[6,A.l],[2,A.x]],{name:[0,"name"]},null),t.Gb(2048,null,A.m,null,[A.f]),t.qb(61,16384,null,0,A.n,[[4,A.m]],null,null),(l()(),t.rb(62,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(63,0,null,null,9,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.rb(64,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(65,0,null,null,1,"label",[["for","thumbnail"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Thumbnail"])),(l()(),t.rb(67,0,null,null,5,"input",[["class","form-control"],["formControlName","thumbnail"],["id","thumbnail"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Db(l,68)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Db(l,68).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Db(l,68)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Db(l,68)._compositionEnd(u.target.value)&&i),i},null,null)),t.qb(68,16384,null,0,A.c,[t.D,t.k,[2,A.a]],null,null),t.Gb(1024,null,A.l,function(l){return[l]},[A.c]),t.qb(70,671744,null,0,A.f,[[3,A.b],[8,null],[8,null],[6,A.l],[2,A.x]],{name:[0,"name"]},null),t.Gb(2048,null,A.m,null,[A.f]),t.qb(72,16384,null,0,A.n,[[4,A.m]],null,null),(l()(),t.rb(73,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(74,0,null,null,10,"div",[["class","col-xs-4"]],null,null,null,null,null)),(l()(),t.rb(75,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(76,0,null,null,1,"label",[["for","rank"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Product Rank"])),(l()(),t.rb(78,0,null,null,6,"input",[["class","form-control"],["formControlName","ord"],["id","rank"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Db(l,79)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Db(l,79).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Db(l,79)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Db(l,79)._compositionEnd(u.target.value)&&i),"change"===n&&(i=!1!==t.Db(l,80).onChange(u.target.value)&&i),"input"===n&&(i=!1!==t.Db(l,80).onChange(u.target.value)&&i),"blur"===n&&(i=!1!==t.Db(l,80).onTouched()&&i),i},null,null)),t.qb(79,16384,null,0,A.c,[t.D,t.k,[2,A.a]],null,null),t.qb(80,16384,null,0,A.r,[t.D,t.k],null,null),t.Gb(1024,null,A.l,function(l,n){return[l,n]},[A.c,A.r]),t.qb(82,671744,null,0,A.f,[[3,A.b],[8,null],[8,null],[6,A.l],[2,A.x]],{name:[0,"name"]},null),t.Gb(2048,null,A.m,null,[A.f]),t.qb(84,16384,null,0,A.n,[[4,A.m]],null,null)],function(l,n){l(n,5,0,n.component.productForm),l(n,25,0,"id"),l(n,37,0,"tid"),l(n,48,0,"name"),l(n,59,0,"description"),l(n,70,0,"thumbnail"),l(n,82,0,"ord")},function(l,n){l(n,3,0,t.Db(n,7).ngClassUntouched,t.Db(n,7).ngClassTouched,t.Db(n,7).ngClassPristine,t.Db(n,7).ngClassDirty,t.Db(n,7).ngClassValid,t.Db(n,7).ngClassInvalid,t.Db(n,7).ngClassPending),l(n,21,0,t.Db(n,27).ngClassUntouched,t.Db(n,27).ngClassTouched,t.Db(n,27).ngClassPristine,t.Db(n,27).ngClassDirty,t.Db(n,27).ngClassValid,t.Db(n,27).ngClassInvalid,t.Db(n,27).ngClassPending),l(n,33,0,t.Db(n,39).ngClassUntouched,t.Db(n,39).ngClassTouched,t.Db(n,39).ngClassPristine,t.Db(n,39).ngClassDirty,t.Db(n,39).ngClassValid,t.Db(n,39).ngClassInvalid,t.Db(n,39).ngClassPending),l(n,45,0,t.Db(n,50).ngClassUntouched,t.Db(n,50).ngClassTouched,t.Db(n,50).ngClassPristine,t.Db(n,50).ngClassDirty,t.Db(n,50).ngClassValid,t.Db(n,50).ngClassInvalid,t.Db(n,50).ngClassPending),l(n,56,0,t.Db(n,61).ngClassUntouched,t.Db(n,61).ngClassTouched,t.Db(n,61).ngClassPristine,t.Db(n,61).ngClassDirty,t.Db(n,61).ngClassValid,t.Db(n,61).ngClassInvalid,t.Db(n,61).ngClassPending),l(n,67,0,t.Db(n,72).ngClassUntouched,t.Db(n,72).ngClassTouched,t.Db(n,72).ngClassPristine,t.Db(n,72).ngClassDirty,t.Db(n,72).ngClassValid,t.Db(n,72).ngClassInvalid,t.Db(n,72).ngClassPending),l(n,78,0,t.Db(n,84).ngClassUntouched,t.Db(n,84).ngClassTouched,t.Db(n,84).ngClassPristine,t.Db(n,84).ngClassDirty,t.Db(n,84).ngClassValid,t.Db(n,84).ngClassInvalid,t.Db(n,84).ngClassPending)})}function Q(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-product-edit",[],null,null,null,Z,Y)),t.qb(1,245760,null,0,X,[e.k,e.a,T.a],null,null)],function(l,n){l(n,1,0)},null)}var ll=t.nb("app-product-edit",X,Q,{},{},[]),nl=u("t/Na"),ul=u("Z+Mw"),tl=u("PCNd"),il=u("ECN0"),ol=u("gpEQ"),el=u("c2um"),rl=function(){function l(l){this.productService=l}return l.prototype.resolve=function(l,n){var u=n.url.split("/")[2];return console.log(n.url.split("/")),this.productService.fetchProductsByTopic(+u)},l.ngInjectableDef=t.Nb({factory:function(){return new l(t.Ob(T.a))},token:l,providedIn:"root"}),l}(),cl=function(){return function(){}}();u.d(n,"TopicsModuleNgFactory",function(){return sl});var sl=t.ob(i,[],function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[o.a,C,_,G,W,ll]],[3,t.j],t.x]),t.Bb(4608,r.l,r.k,[t.u,[2,r.w]]),t.Bb(4608,A.w,A.w,[]),t.Bb(4608,A.d,A.d,[]),t.Bb(4608,nl.h,nl.n,[r.c,t.B,nl.l]),t.Bb(4608,nl.o,nl.o,[nl.h,nl.m]),t.Bb(5120,nl.a,function(l){return[l]},[nl.o]),t.Bb(4608,nl.k,nl.k,[]),t.Bb(6144,nl.i,null,[nl.k]),t.Bb(4608,nl.g,nl.g,[nl.i]),t.Bb(6144,nl.b,null,[nl.g]),t.Bb(4608,nl.f,nl.j,[nl.b,t.q]),t.Bb(4608,nl.c,nl.c,[nl.f]),t.Bb(1073742336,r.b,r.b,[]),t.Bb(1073742336,A.v,A.v,[]),t.Bb(1073742336,A.i,A.i,[]),t.Bb(1073742336,A.s,A.s,[]),t.Bb(1073742336,ul.c,ul.c,[]),t.Bb(1073742336,tl.a,tl.a,[]),t.Bb(1073742336,nl.e,nl.e,[]),t.Bb(1073742336,nl.d,nl.d,[]),t.Bb(1073742336,e.o,e.o,[[2,e.t],[2,e.k]]),t.Bb(1073742336,cl,cl,[]),t.Bb(1073742336,i,i,[]),t.Bb(256,ul.a,{modules:{syntax:!0,formula:!0,toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["formula"],["link","image","video"]]}},[]),t.Bb(256,nl.l,"XSRF-TOKEN",[]),t.Bb(256,nl.m,"X-XSRF-TOKEN",[]),t.Bb(1024,e.i,function(){return[[{path:"",component:h,children:[{path:"",component:I,resolve:[il.a,ol.a],pathMatch:"full"},{path:"new",canActivate:[el.a],resolve:[il.a,ol.a],component:J},{path:":topicId",resolve:{TopicsResolverService:il.a,products:rl},component:j},{path:":topicId/edit",resolve:[il.a],canActivate:[el.a],component:J},{path:":topicId/:productId",canActivate:[el.a],component:X},{path:":topicId/new",canActivate:[el.a],component:X}]}]]},[])])})}}]);