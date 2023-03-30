"use strict";(self.webpackChunkpoliticz_fe=self.webpackChunkpoliticz_fe||[]).push([[241],{7241:(Ot,O,c)=>{c.r(O),c.d(O,{PartyModule:()=>Ut});var M=c(6417),p=c(6895),d=c(2751),h=c(9797),t=c(4650),s=c(8767),J=c(1027),u=c(8426);let F=(()=>{class i{constructor(){this.submitEvent=new t.vpe,this.cancelEvent=new t.vpe}submit(n){n.valid&&this.submitEvent.emit(n.value)}cancel(){this.cancelEvent.emit()}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],outputs:{submitEvent:"submitEvent",cancelEvent:"cancelEvent"},decls:0,vars:0,template:function(n,o){},encapsulation:2}),i})();var r=c(4006),_=c(4750),Q=c(1764),Y=c.n(Q);function I(){return i=>{const e=new Date(i.value);return Y()((new Date).setHours(0,0,0,0)).diff(e,"year",!0)>=21?null:{bellowMinimumAge:!0}}}var A=c(4859),x=c(4144),m=c(9549),b=c(9602),f=c(9383);function R(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-date")))}function B(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-minimum-age")))}function D(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-required")))}function S(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-bad-url-pattern")))}let k=(()=>{class i extends F{constructor(n){super(),this._fb=n,this.politicianForm=this._fb.group({fullName:this._fb.control("",{nonNullable:!0,validators:[r.kI.required]}),birthDate:this._fb.control("",{nonNullable:!0,validators:[r.kI.required,I()]}),imageUrl:this._fb.control("",{nonNullable:!0,validators:[r.kI.required,r.kI.pattern(_.c.URL_PATTERN)]}),facebookUrl:this._fb.control("",r.kI.pattern(_.c.URL_PATTERN)),instagramUrl:this._fb.control("",r.kI.pattern(_.c.URL_PATTERN)),twitterUrl:this._fb.control("",r.kI.pattern(_.c.URL_PATTERN))})}ngOnInit(){this.politician&&this.politicianForm.patchValue({fullName:this.politician.fullName,birthDate:this.politician.birthDate,facebookUrl:this.politician.facebookUrl,instagramUrl:this.politician.instagramUrl,imageUrl:this.politician.imageUrl,twitterUrl:this.politician.twitterUrl})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(r.qu))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-politician-form"]],inputs:{politician:"politician"},features:[t.qOj],decls:61,vars:48,consts:[[1,"form-content",3,"formGroup","ngSubmit"],["appearance","outline",1,"span-6"],["matInput","","formControlName","fullName"],["matInput","","formControlName","birthDate",3,"matDatepicker"],[4,"ngIf"],["matIconSuffix","",3,"for"],["startView","multi-year"],["picker",""],["appearance","outline",1,"span-12"],["matInput","","formControlName","imageUrl"],["matInput","","formControlName","twitterUrl"],["matInput","","formControlName","instagramUrl"],["matInput","","formControlName","facebookUrl"],[1,"form-footer","span-12"],["type","button","mat-raised-button","",1,"button-add",3,"click"],["type","submit","mat-raised-button","","color","primary",1,"button-add"]],template:function(n,o){if(1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit(o.politicianForm)}),t.TgZ(1,"mat-form-field",1)(2,"mat-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"input",2),t.TgZ(6,"mat-error"),t._uU(7),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"input",3),t.YNc(14,R,3,3,"mat-error",4),t.YNc(15,B,3,3,"mat-error",4),t.TgZ(16,"mat-hint"),t._uU(17),t.ALo(18,"translate"),t.qZA(),t._UZ(19,"mat-datepicker-toggle",5)(20,"mat-datepicker",6,7),t.qZA(),t.TgZ(22,"mat-form-field",8)(23,"mat-label"),t._uU(24),t.ALo(25,"translate"),t.qZA(),t._UZ(26,"input",9),t.YNc(27,D,3,3,"mat-error",4),t.YNc(28,S,3,3,"mat-error",4),t.qZA(),t.TgZ(29,"mat-form-field",8)(30,"mat-label"),t._uU(31),t.ALo(32,"translate"),t.qZA(),t._UZ(33,"input",10),t.TgZ(34,"mat-error"),t._uU(35),t.ALo(36,"translate"),t.qZA()(),t.TgZ(37,"mat-form-field",8)(38,"mat-label"),t._uU(39),t.ALo(40,"translate"),t.qZA(),t._UZ(41,"input",11),t.TgZ(42,"mat-error"),t._uU(43),t.ALo(44,"translate"),t.qZA()(),t.TgZ(45,"mat-form-field",8)(46,"mat-label"),t._uU(47),t.ALo(48,"translate"),t.qZA(),t._UZ(49,"input",12),t.TgZ(50,"mat-error"),t._uU(51),t.ALo(52,"translate"),t.qZA()(),t.TgZ(53,"div",13)(54,"button",14),t.NdJ("click",function(){return o.cancel()}),t._uU(55),t.ALo(56,"translate"),t.qZA(),t.TgZ(57,"button",15),t._uU(58),t.ALo(59,"translate"),t.ALo(60,"translate"),t.qZA()()()),2&n){const a=t.MAs(21);t.Q6J("formGroup",o.politicianForm),t.xp6(3),t.Oqu(t.lcZ(4,20,"politician-name")),t.xp6(4),t.Oqu(t.lcZ(8,22,"form-required")),t.xp6(4),t.Oqu(t.lcZ(12,24,"birthday")),t.xp6(2),t.Q6J("matDatepicker",a),t.xp6(1),t.Q6J("ngIf",o.politicianForm.controls.birthDate.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.politicianForm.controls.birthDate.hasError("bellowMinimumAge")),t.xp6(2),t.Oqu(t.lcZ(18,26,"year-format")),t.xp6(2),t.Q6J("for",a),t.xp6(5),t.Oqu(t.lcZ(25,28,"politician-profileImageUrl")),t.xp6(3),t.Q6J("ngIf",o.politicianForm.controls.imageUrl.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.politicianForm.controls.imageUrl.hasError("pattern")),t.xp6(3),t.Oqu(t.lcZ(32,30,"politician-twitterUrl")),t.xp6(4),t.Oqu(t.lcZ(36,32,"form-bad-url-pattern")),t.xp6(4),t.Oqu(t.lcZ(40,34,"politician-instagramUrl")),t.xp6(4),t.Oqu(t.lcZ(44,36,"form-bad-url-pattern")),t.xp6(4),t.Oqu(t.lcZ(48,38,"politician-facebookUrl")),t.xp6(4),t.Oqu(t.lcZ(52,40,"form-bad-url-pattern")),t.xp6(4),t.hij(" ",t.lcZ(56,42,"back")," "),t.xp6(3),t.hij(" ",o.politician?t.lcZ(59,44,"update"):t.lcZ(60,46,"create")," ")}},dependencies:[p.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,A.lW,x.Nt,m.KE,m.hX,m.bx,m.TO,m.R9,b.Mq,b.hl,b.nW,f.X$]}),i})();function K(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"app-politician-form",3),t.NdJ("cancelEvent",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.navigateBack())})("submitEvent",function(a){t.CHM(n);const l=t.oxw();return t.KtG(l.onSubmit(a))}),t.qZA()}2&i&&t.Q6J("politician",e.ngIf)}let $=(()=>{class i{constructor(n,o,a,l){this._route=n,this._router=o,this._politicalPartiesService=a,this._store=l}ngOnInit(){this._route.paramMap.subscribe(n=>{this.politicalPartyId=n.get("id"),this.politicianId=n.get("politicianId"),this._store.dispatch(new d.K.GetPoliticalParty(this.politicalPartyId)),this.politician$=this._store.select(h.k.getPoliticianById(this.politicianId))})}onSubmit(n){const o={id:this.politicianId,...n};this._store.dispatch(new d.K.EditPolitician(o)).subscribe(()=>this.navigateBack())}navigateBack(){this._router.navigate(["/political-party/detail/"+this.politicalPartyId])}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(s.gz),t.Y36(s.F0),t.Y36(J.A),t.Y36(u.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-edit-politician"]],decls:7,vars:6,consts:[[1,"container"],[1,"container__content"],[3,"politician","cancelEvent","submitEvent",4,"ngIf"],[3,"politician","cancelEvent","submitEvent"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.YNc(5,K,1,1,"app-politician-form",2),t.ALo(6,"async"),t.qZA()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,2,"politician-edit")),t.xp6(2),t.Q6J("ngIf",t.lcZ(6,4,o.politician$)))},dependencies:[p.O5,k,p.Ov,f.X$]}),i})();var P=c(655),j=c(39),y=c(5412);let E=(()=>{class i{constructor(n,o){this.dialogRef=n,this.data=o}cancel(){this.dialogRef.close()}confirm(){this.dialogRef.close(!0)}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(y.so),t.Y36(y.WI))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-confirm-dialog"]],decls:15,vars:12,consts:[["mat-dialog-title",""],[1,"mat-typography"],["align","end"],["mat-flat-button","",3,"click"],["mat-flat-button","","cdkFocusInitial","","color","primary",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"h2",0),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.TgZ(3,"mat-dialog-content",1)(4,"h3")(5,"b"),t._uU(6),t.ALo(7,"translate"),t.qZA()()(),t.TgZ(8,"mat-dialog-actions",2)(9,"button",3),t.NdJ("click",function(){return o.cancel()}),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"button",4),t.NdJ("click",function(){return o.confirm()}),t._uU(13),t.ALo(14,"translate"),t.qZA()()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,4,o.data.title)),t.xp6(5),t.Oqu(t.lcZ(7,6,o.data.content)),t.xp6(4),t.Oqu(t.lcZ(11,8,o.data.closeButtonText)),t.xp6(3),t.hij(" ",t.lcZ(14,10,o.data.confirmButtonText),""))},dependencies:[y.uh,y.xY,y.H8,A.lW,f.X$]}),i})();var U=c(7392),v=c(9132),C=c(3546),q=c(8255);function H(i,e){if(1&i&&(t.TgZ(0,"div",4)(1,"button",5),t.NdJ("click",function(o){return o.stopPropagation()}),t.TgZ(2,"mat-icon"),t._uU(3,"more_vert"),t.qZA()()()),2&i){t.oxw();const n=t.MAs(2);t.xp6(1),t.Q6J("matMenuTriggerFor",n)}}function X(i,e){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",6),t.NdJ("click",function(){const l=t.CHM(n).$implicit,Z=t.oxw();return t.KtG(Z.onClick(l))}),t.TgZ(2,"mat-icon",7),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.BQk()}if(2&i){const n=e.$implicit;t.xp6(3),t.Oqu(n.icon),t.xp6(2),t.Oqu(t.lcZ(6,2,n.label))}}let G=(()=>{class i{constructor(){this.actionClickEvt=new t.vpe,this.menuActions=[{icon:"edit",label:"menu-action-edit",type:v.U.EDIT},{icon:"delete",label:"menu-action-delete",type:v.U.DELETE}],this.actionTypes=v.U}onClick(n){this.actionClickEvt.emit(n)}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-admin-quick-menu-actions"]],outputs:{actionClickEvt:"actionClickEvt"},decls:4,vars:2,consts:[["class","wrapper",4,"ngIf"],["xPosition","after"],["menu","matMenu"],[4,"ngFor","ngForOf"],[1,"wrapper"],["mat-icon-button","","aria-label","Example icon-button with a menu",1,"buttonek",3,"matMenuTriggerFor","click"],["mat-menu-item","",3,"click"],["color","primary"]],template:function(n,o){1&n&&(t.YNc(0,H,4,1,"div",0),t.TgZ(1,"mat-menu",1,2),t.YNc(3,X,7,4,"ng-container",3),t.qZA()),2&n&&(t.Q6J("ngIf",o.menuActions),t.xp6(3),t.Q6J("ngForOf",o.menuActions))},dependencies:[p.sg,p.O5,A.RK,U.Hw,q.VK,q.OP,q.p6,f.X$],styles:[".wrapper[_ngcontent-%COMP%]{background-color:#38333391;position:absolute;top:0;right:0}.buttonek[_ngcontent-%COMP%]{color:#fff}"]}),i})();var z=c(1296);function V(i,e){if(1&i&&(t.TgZ(0,"a",7),t._UZ(1,"img",8),t.qZA()),2&i){const n=t.oxw(2);t.Q6J("href",n.politician.facebookUrl,t.LSH)}}function W(i,e){if(1&i&&(t.TgZ(0,"a",7),t._UZ(1,"img",9),t.qZA()),2&i){const n=t.oxw(2);t.Q6J("href",n.politician.instagramUrl,t.LSH)}}function tt(i,e){if(1&i&&(t.TgZ(0,"a",7),t._UZ(1,"img",10),t.qZA()),2&i){const n=t.oxw(2);t.Q6J("href",n.politician.twitterUrl,t.LSH)}}function nt(i,e){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"mat-card",1)(2,"app-admin-quick-menu-actions",2),t.NdJ("actionClickEvt",function(a){t.CHM(n);const l=t.oxw();return t.KtG(l.handleActionEvent(a))}),t.qZA(),t.TgZ(3,"mat-card-header")(4,"mat-card-title",3),t._uU(5),t.qZA(),t.TgZ(6,"mat-card-subtitle"),t._uU(7),t.ALo(8,"dateFormatter"),t.qZA()(),t._UZ(9,"img",4),t.TgZ(10,"mat-card-content",5),t.YNc(11,V,2,1,"a",6),t.YNc(12,W,2,1,"a",6),t.YNc(13,tt,2,1,"a",6),t.qZA()(),t.BQk()}if(2&i){const n=t.oxw();t.xp6(5),t.Oqu(n.politician.fullName),t.xp6(2),t.Oqu(t.lcZ(8,6,n.politician.birthDate)),t.xp6(2),t.Q6J("src",n.politician.imageUrl?n.politician.imageUrl:"assets/man-user-svgrepo-com.svg",t.LSH),t.xp6(2),t.Q6J("ngIf",n.politician.facebookUrl),t.xp6(1),t.Q6J("ngIf",n.politician.instagramUrl),t.xp6(1),t.Q6J("ngIf",n.politician.twitterUrl)}}let it=(()=>{class i{constructor(n,o,a){this._store=n,this._router=o,this._dialog=a}handleActionEvent(n){const o=this._store.selectSnapshot(h.k.getPoliticalPartyId);switch(n.type){case v.U.EDIT:this._router.navigate(["/political-party/detail",o,"edit-politician",this.politician.id]);break;case v.U.DELETE:this.openDialogAndRemovePolitician()}}openDialogAndRemovePolitician(){this._dialog.open(E,{data:{title:"dialog-remove",content:"remove-politician-content",confirmButtonText:"remove-politician",closeButtonText:"dialog-action-cancel"}}).afterClosed().subscribe(a=>{a&&this._store.dispatch(new d.K.RemovePolitician(this.politician))})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(u.yh),t.Y36(s.F0),t.Y36(y.uw))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-politician"]],inputs:{politician:"politician"},decls:1,vars:1,consts:[[4,"ngIf"],["appearance","outlined",1,"politician-card","mat-elevation-z2"],[3,"actionClickEvt"],[1,"politician-card__title"],["alt","politician_image","mat-card-image","",1,"politician-card__image",3,"src"],[1,"politician-card__media"],["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],["src","assets/icons/facebook.svg","aria-label","redirect to facebook profile of politic","alt","redirect to facebook profile of politic",1,"mat-elevation-z4"],["src","assets/icons/instagram.svg","aria-label","redirect to instagram profile of politic","alt","redirect to instagram profile of politic",1,"mat-elevation-z4"],["src","assets/icons/twitter.svg","aria-label","redirect to twitter profile of politic","alt","redirect to twitter profile of politic",1,"mat-elevation-z4"]],template:function(n,o){1&n&&t.YNc(0,nt,14,8,"ng-container",0),2&n&&t.Q6J("ngIf",o.politician)},dependencies:[p.O5,C.a8,C.dn,C.dk,C.G2,C.$j,C.n5,G,z.l],styles:[".politician-card__title[_ngcontent-%COMP%]{margin-right:3rem}.politician-card__image[_ngcontent-%COMP%]{display:block!important;height:200px!important;object-fit:cover}.politician-card__media[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;margin-top:1rem;height:4rem}.politician-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3rem;transition:all .5s;border-radius:25%}.politician-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{scale:1.1}"]}),i})();var N=c(1176);let ot=(()=>{class i{constructor(n){this.store=n}transform(n,o){if(!o||null==n)return this.store.dispatch(new N.x.Set({politicianFilterCount:n.length})),n;const a=n.filter(l=>_.c.textIncludesSearchedValueCaseInsensitive(l.fullName,o));return this.store.dispatch(new N.x.Set({politicianFilterCount:a.length})),a}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(u.yh,16))},i.\u0275pipe=t.Yjl({name:"filterPoliticians",type:i,pure:!0}),i})();function et(i,e){1&i&&t._UZ(0,"app-politician",15),2&i&&t.Q6J("politician",e.$implicit)}function at(i,e){1&i&&(t.ynx(0),t.TgZ(1,"span",16),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.BQk()),2&i&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"no-result")))}function rt(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"div",13),t.YNc(2,et,1,1,"app-politician",14),t.ALo(3,"filterPoliticians"),t.YNc(4,at,4,3,"ng-container",1),t.ALo(5,"async"),t.qZA(),t.BQk()),2&i){const n=e.ngIf;t.oxw();const o=t.MAs(11),a=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.xi3(3,2,n,o.value)),t.xp6(2),t.Q6J("ngIf",0===t.lcZ(5,5,a.politiciansCount))}}const ct=function(i){return["/political-party/detail",i,"edit"]},lt=function(i){return["/political-party/detail",i,"add-politician"]};function pt(i,e){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",2)(2,"h1",3),t._uU(3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"mat-form-field",6)(7,"mat-label"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t._UZ(10,"input",7,8),t.TgZ(12,"mat-icon",9),t._uU(13,"search"),t.qZA()()(),t.TgZ(14,"div",10)(15,"button",11)(16,"mat-icon"),t._uU(17,"edit"),t.qZA(),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"button",12),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.openDialogAndRemoveParty())}),t.TgZ(21,"mat-icon"),t._uU(22,"delete_forever"),t.qZA(),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.TgZ(25,"button",11),t._uU(26),t.ALo(27,"translate"),t.TgZ(28,"mat-icon"),t._uU(29,"add"),t.qZA()()()()(),t.YNc(30,rt,6,7,"ng-container",1),t.ALo(31,"async"),t.BQk()}if(2&i){const n=e.ngIf,o=t.oxw();t.xp6(3),t.Oqu(n.name),t.xp6(5),t.Oqu(t.lcZ(9,8,"politician-search")),t.xp6(7),t.Q6J("routerLink",t.VKq(18,ct,n.id)),t.xp6(3),t.hij(" ",t.lcZ(19,10,"edit-party")," "),t.xp6(5),t.hij(" ",t.lcZ(24,12,"remove-party")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(20,lt,n.id)),t.xp6(1),t.hij(" ",t.lcZ(27,14,"politician-add")," "),t.xp6(4),t.Q6J("ngIf",t.lcZ(31,16,o.politicians$))}}class g{constructor(e,n,o,a){this.route=e,this.store=n,this._router=o,this.dialog=a}ngOnInit(){this.route.paramMap.subscribe(e=>this.store.dispatch(new d.K.GetPoliticalParty(e.get("id"))))}openDialogAndRemoveParty(){this.dialog.open(E,{data:{title:"dialog-remove",content:"remove-party-content",confirmButtonText:"remove-party",closeButtonText:"dialog-action-cancel"}}).afterClosed().subscribe(o=>{o&&this.removeParty()})}removeParty(){const e=this.store.selectSnapshot(h.k.getPoliticalPartyId);e&&this.store.dispatch(new d.K.RemovePoliticalParty(e)).subscribe(()=>this._router.navigate(["/news"]))}}g.\u0275fac=function(e){return new(e||g)(t.Y36(s.gz),t.Y36(u.yh),t.Y36(s.F0),t.Y36(y.uw))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-party"]],decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"party"],[1,"party__heading"],[1,"party__actions"],[1,"party__actions__search"],["appearance","outline"],["type","text","matInput",""],["input",""],["color","primary","matSuffix",""],[1,"party__actions__admin-buttons"],["mat-raised-button","","color","primary",1,"button-add",3,"routerLink"],["mat-raised-button","","color","primary",1,"button-add",3,"click"],[1,"politicians"],[3,"politician",4,"ngFor","ngForOf"],[3,"politician"],[1,"no-result"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0),t.YNc(1,pt,32,22,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.politicalParty$)))},dependencies:[p.sg,p.O5,s.rH,A.lW,U.Hw,x.Nt,m.KE,m.hX,m.R9,it,p.Ov,f.X$,ot],styles:[".party[_ngcontent-%COMP%]{height:100%;grid-column:center-start/center-end}.party__heading[_ngcontent-%COMP%]{font-size:3rem;text-align:center;padding:1rem 0 2rem;letter-spacing:.1rem;word-spacing:.5rem;text-transform:uppercase}@media only screen and (max-width: 75em){.party__heading[_ngcontent-%COMP%]{line-height:3.5rem}}.party__subheading[_ngcontent-%COMP%]{font-size:2rem}.party__actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:3rem;gap:1.5rem}@media only screen and (max-width: 37.5em){.party__actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}}.party__actions__search[_ngcontent-%COMP%]{align-self:center}.party__actions__search[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%!important}.party__actions__admin-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem 0}.party[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{grid-column:2/-1}@media only screen and (max-width: 37.5em){.party[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{grid-column:auto}}.politicians[_ngcontent-%COMP%]{grid-column:center-start/center-end;display:grid;padding-bottom:2rem;grid-template-columns:repeat(3,minmax(22rem,32rem));gap:3rem}@media only screen and (max-width: 62.5em){.politicians[_ngcontent-%COMP%]{grid-template-columns:[center-start] repeat(2,minmax(20rem,1fr)) [center-end]}}@media only screen and (max-width: 37.5em){.politicians[_ngcontent-%COMP%]{grid-template-columns:[center-start] 1fr [center-end];gap:2rem}}.no-result[_ngcontent-%COMP%]{font-size:3rem;grid-column:1/-1}@media only screen and (max-width: 53.125em){.no-result[_ngcontent-%COMP%]{line-height:4rem}}"]}),(0,P.gn)([(0,u.Ph)(j.t.getPoliticianFilterCount)],g.prototype,"politiciansCount",void 0),(0,P.gn)([(0,u.Ph)(h.k.getPoliticalParty)],g.prototype,"politicalParty$",void 0),(0,P.gn)([(0,u.Ph)(h.k.getPoliticians)],g.prototype,"politicians$",void 0);let st=(()=>{class i{constructor(n,o,a){this._store=n,this._router=o,this._route=a}ngOnInit(){this._route.paramMap.subscribe(n=>this.politicalPartyId=n.get("id"))}onSubmit(n){this._store.dispatch(new d.K.AddPolitician(n)).subscribe(()=>this.navigateBack())}navigateBack(){this._router.navigate(["/political-party/detail/"+this.politicalPartyId])}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(u.yh),t.Y36(s.F0),t.Y36(s.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-politician"]],decls:6,vars:3,consts:[[1,"container"],[1,"container__content"],[3,"submitEvent","cancelEvent"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-politician-form",2),t.NdJ("submitEvent",function(l){return o.onSubmit(l)})("cancelEvent",function(){return o.navigateBack()}),t.qZA()()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"politician-new")))},dependencies:[k,f.X$]}),i})();var mt=c(7579),L=c(9521),T=c(7331);function ut(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-required")))}function _t(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-bad-url-pattern")))}function dt(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"mat-chip-row",13),t.NdJ("removed",function(){const l=t.CHM(n).$implicit,Z=t.oxw();return t.KtG(Z.removeTag(l))})("edited",function(a){const Z=t.CHM(n).$implicit,qt=t.oxw();return t.KtG(qt.editTag(Z,a))}),t._uU(1),t.TgZ(2,"button",14)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&i){const n=e.$implicit;t.Q6J("editable",!0),t.xp6(1),t.hij(" ",n," "),t.xp6(1),t.uIk("aria-label","remove "+n)}}function ft(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-date")))}function gt(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-minimum-age")))}function ht(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-required")))}function yt(i,e){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-bad-url-pattern")))}function Zt(i,e){if(1&i){const n=t.EpF();t.ynx(0,20),t.TgZ(1,"h3",21),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"mat-form-field",22)(5,"mat-label"),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._UZ(8,"input",23),t.TgZ(9,"mat-error"),t._uU(10),t.ALo(11,"translate"),t.qZA()(),t.TgZ(12,"mat-form-field",22)(13,"mat-label"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._UZ(16,"input",24),t.YNc(17,ft,3,3,"mat-error",4),t.YNc(18,gt,3,3,"mat-error",4),t.TgZ(19,"mat-hint"),t._uU(20),t.ALo(21,"translate"),t.qZA(),t._UZ(22,"mat-datepicker-toggle",25)(23,"mat-datepicker",26,27),t.qZA(),t.TgZ(25,"mat-form-field",1)(26,"mat-label"),t._uU(27),t.ALo(28,"translate"),t.qZA(),t._UZ(29,"input",3),t.YNc(30,ht,3,3,"mat-error",4),t.YNc(31,yt,3,3,"mat-error",4),t.qZA(),t.TgZ(32,"mat-form-field",1)(33,"mat-label"),t._uU(34),t.ALo(35,"translate"),t.qZA(),t._UZ(36,"input",28),t.TgZ(37,"mat-error"),t._uU(38),t.ALo(39,"translate"),t.qZA()(),t.TgZ(40,"mat-form-field",1)(41,"mat-label"),t._uU(42),t.ALo(43,"translate"),t.qZA(),t._UZ(44,"input",29),t.TgZ(45,"mat-error"),t._uU(46),t.ALo(47,"translate"),t.qZA()(),t.TgZ(48,"mat-form-field",1)(49,"mat-label"),t._uU(50),t.ALo(51,"translate"),t.qZA(),t._UZ(52,"input",30),t.TgZ(53,"mat-error"),t._uU(54),t.ALo(55,"translate"),t.qZA()(),t.TgZ(56,"div",31)(57,"button",32),t.NdJ("click",function(){const l=t.CHM(n).index,Z=t.oxw(2);return t.KtG(Z.removePolitician(l))}),t.TgZ(58,"mat-icon"),t._uU(59,"clear"),t.qZA()()(),t.BQk()}if(2&i){const n=e.$implicit,o=e.index,a=t.MAs(24);t.Q6J("formGroupName",o),t.xp6(2),t.AsE("",o+1+". "," ",t.lcZ(3,20,"politician"),""),t.xp6(4),t.Oqu(t.lcZ(7,22,"politician-name")),t.xp6(4),t.Oqu(t.lcZ(11,24,"form-required")),t.xp6(4),t.Oqu(t.lcZ(15,26,"birthday")),t.xp6(2),t.Q6J("matDatepicker",a),t.xp6(1),t.Q6J("ngIf",n.controls.birthDate.hasError("required")),t.xp6(1),t.Q6J("ngIf",n.controls.birthDate.hasError("bellowMinimumAge")),t.xp6(2),t.Oqu(t.lcZ(21,28,"year-format")),t.xp6(2),t.Q6J("for",a),t.xp6(5),t.Oqu(t.lcZ(28,30,"politician-profileImageUrl")),t.xp6(3),t.Q6J("ngIf",n.controls.imageUrl.hasError("required")),t.xp6(1),t.Q6J("ngIf",n.controls.imageUrl.hasError("pattern")),t.xp6(3),t.Oqu(t.lcZ(35,32,"politician-twitterUrl")),t.xp6(4),t.Oqu(t.lcZ(39,34,"form-bad-url-pattern")),t.xp6(4),t.Oqu(t.lcZ(43,36,"politician-instagramUrl")),t.xp6(4),t.Oqu(t.lcZ(47,38,"form-bad-url-pattern")),t.xp6(4),t.Oqu(t.lcZ(51,40,"politician-facebookUrl")),t.xp6(4),t.Oqu(t.lcZ(55,42,"form-bad-url-pattern"))}}function At(i,e){if(1&i){const n=t.EpF();t.ynx(0,15),t.TgZ(1,"h2",16),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.YNc(4,Zt,60,44,"ng-container",17),t.TgZ(5,"div",18)(6,"button",19),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.addPolitician())}),t.TgZ(7,"mat-icon"),t._uU(8,"add"),t.qZA()()(),t.BQk()}if(2&i){const n=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"politician-add")),t.xp6(2),t.Q6J("ngForOf",null==n.politiciansFormArray?null:n.politiciansFormArray.controls)}}let w=(()=>{class i extends F{constructor(n){super(),this._fb=n,this.partyForm=this._fb.group({name:this._fb.nonNullable.control("",{validators:r.kI.required}),imageUrl:this._fb.nonNullable.control("",{validators:[r.kI.required,r.kI.pattern(_.c.URL_PATTERN)]}),tags:this._fb.nonNullable.control([""],r.kI.required),politicians:this._fb.array([])}),this.tags=[],this.addOnBlur=!0,this.separatorKeysCodes=[L.K5,L.OC]}ngOnInit(){this.addPolitician(),this.party&&(this.partyForm.removeControl("politicians"),this.tags=[...this.party.tags],this.partyForm.patchValue({name:this.party.name,imageUrl:this.party.imageUrl,tags:[...this.party.tags]}))}get politiciansFormArray(){return this.partyForm?.controls.politicians??null}submit(){this.partyForm.valid&&(this.partyForm.patchValue({tags:[...this.tags]}),this.submitEvent.emit(this.partyForm.value))}addPolitician(){const n=this._fb.group({fullName:this._fb.control("",{nonNullable:!0,validators:[r.kI.required]}),birthDate:this._fb.control("",{nonNullable:!0,validators:[r.kI.required,I()]}),imageUrl:this._fb.control("",{nonNullable:!0,validators:[r.kI.required,r.kI.pattern(_.c.URL_PATTERN)]}),facebookUrl:this._fb.control("",r.kI.pattern(_.c.URL_PATTERN)),instagramUrl:this._fb.control("",r.kI.pattern(_.c.URL_PATTERN)),twitterUrl:this._fb.control("",r.kI.pattern(_.c.URL_PATTERN))});this.politiciansFormArray&&this.politiciansFormArray.push(n)}removePolitician(n){this.politiciansFormArray&&this.politiciansFormArray.removeAt(n)}addTag(n){const o=(n.value||"").trim();o&&this.tags.push(o),n.chipInput.clear()}removeTag(n){const o=this.tags.indexOf(n);o>=0&&this.tags.splice(o,1)}editTag(n,o){const a=o.value.trim();if(!a)return void this.removeTag(n);const l=this.tags.indexOf(n);l>=0&&(this.tags[l]=a)}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(r.qu))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-party-form"]],inputs:{party:"party"},features:[t.qOj],decls:40,vars:37,consts:[[1,"form-content",3,"formGroup","ngSubmit"],["appearance","outline",1,"span-12"],["matInput","","formControlName","name"],["matInput","","formControlName","imageUrl"],[4,"ngIf"],["formControlName","tags"],["chipGrid",""],[3,"editable","removed","edited",4,"ngFor","ngForOf"],[3,"placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["formArrayName","politicians",4,"ngIf"],[1,"form-footer","span-12"],["type","button","mat-raised-button","",1,"button-add",3,"click"],["type","submit","mat-raised-button","","color","primary",1,"button-add"],[3,"editable","removed","edited"],["matChipRemove",""],["formArrayName","politicians"],[1,"span-12"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"span-12","add-politician-container"],["type","button","mat-fab","","color","primary",3,"click"],[3,"formGroupName"],[1,"span-12","politician-number"],["appearance","outline",1,"span-6"],["matInput","","formControlName","fullName"],["matInput","","formControlName","birthDate",3,"matDatepicker"],["matIconSuffix","",3,"for"],["startView","multi-year"],["picker",""],["matInput","","formControlName","twitterUrl"],["matInput","","formControlName","instagramUrl"],["matInput","","formControlName","facebookUrl"],[1,"span-12","delete-politician"],["type","button","mat-fab","","color","warn",3,"click"]],template:function(n,o){if(1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"mat-form-field",1)(2,"mat-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"input",2),t.TgZ(6,"mat-error"),t._uU(7),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"input",3),t.YNc(14,ut,3,3,"mat-error",4),t.YNc(15,_t,3,3,"mat-error",4),t.qZA(),t.TgZ(16,"mat-form-field",1)(17,"mat-label"),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"mat-chip-grid",5,6),t.YNc(22,dt,5,3,"mat-chip-row",7),t.TgZ(23,"input",8),t.NdJ("matChipInputTokenEnd",function(l){return o.addTag(l)}),t.ALo(24,"translate"),t.qZA()(),t.TgZ(25,"mat-hint"),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"mat-error"),t._uU(29),t.ALo(30,"translate"),t.qZA()(),t.YNc(31,At,9,4,"ng-container",9),t.TgZ(32,"div",10)(33,"button",11),t.NdJ("click",function(){return o.cancel()}),t._uU(34),t.ALo(35,"translate"),t.qZA(),t.TgZ(36,"button",12),t._uU(37),t.ALo(38,"translate"),t.ALo(39,"translate"),t.qZA()()()),2&n){const a=t.MAs(21);t.Q6J("formGroup",o.partyForm),t.xp6(3),t.Oqu(t.lcZ(4,17,"party-name")),t.xp6(4),t.Oqu(t.lcZ(8,19,"form-required")),t.xp6(4),t.Oqu(t.lcZ(12,21,"party-image")),t.xp6(3),t.Q6J("ngIf",o.partyForm.controls.imageUrl.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.partyForm.controls.imageUrl.hasError("pattern")),t.xp6(3),t.Oqu(t.lcZ(19,23,"party-tags")),t.xp6(4),t.Q6J("ngForOf",o.tags),t.xp6(1),t.Q6J("placeholder",t.lcZ(24,25,"party-tag-placeholder"))("matChipInputFor",a)("matChipInputSeparatorKeyCodes",o.separatorKeysCodes)("matChipInputAddOnBlur",o.addOnBlur),t.xp6(3),t.Oqu(t.lcZ(27,27,"chips-hint")),t.xp6(3),t.Oqu(t.lcZ(30,29,"chips-required")),t.xp6(2),t.Q6J("ngIf",!o.party),t.xp6(3),t.hij(" ",t.lcZ(35,31,"back")," "),t.xp6(3),t.hij(" ",o.party?t.lcZ(38,33,"update"):t.lcZ(39,35,"create")," ")}},dependencies:[p.sg,p.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE,A.lW,A.cs,T.RA,T.oH,T.qH,T.z3,U.Hw,x.Nt,m.KE,m.hX,m.bx,m.TO,m.R9,b.Mq,b.hl,b.nW,f.X$],styles:[".politician-number[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700}.add-politician-container[_ngcontent-%COMP%], .delete-politician[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),i})();function bt(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"app-party-form",4),t.NdJ("submitEvent",function(a){t.CHM(n);const l=t.oxw(2);return t.KtG(l.onSubmit(a))})("cancelEvent",function(){t.CHM(n);const a=t.oxw().ngIf,l=t.oxw();return t.KtG(l.navigateBack(a.id))}),t.qZA()}if(2&i){const n=t.oxw().ngIf;t.Q6J("party",n)}}function Ct(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"h1"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.YNc(4,bt,1,1,"app-party-form",3),t.BQk()),2&i){const n=e.ngIf;t.xp6(2),t.Oqu(t.lcZ(3,2,"admin-party-edit")),t.xp6(2),t.Q6J("ngIf",n.id)}}let vt=(()=>{class i{constructor(n,o,a){this._route=n,this._router=o,this._store=a,this.destroy$=new mt.x}ngOnInit(){this._route.paramMap.subscribe(n=>{this._store.dispatch(new d.K.GetPoliticalParty(n.get("id"))),this.politicalParty$=this._store.select(h.k.getPoliticalParty)})}ngOnDestroy(){this.destroy$.next()}onSubmit(n){const o=this._store.selectSnapshot(h.k.getPoliticalParty);this._store.dispatch(new d.K.UpdatePoliticalParty({...n,id:o.id,politicians:[...o.politicians]})).subscribe(()=>this.navigateBack(o.id))}navigateBack(n){this._router.navigate(["/political-party/detail/"+n])}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(s.gz),t.Y36(s.F0),t.Y36(u.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-edit-party"]],decls:4,vars:3,consts:[[1,"container"],[1,"container__content"],[4,"ngIf"],[3,"party","submitEvent","cancelEvent",4,"ngIf"],[3,"party","submitEvent","cancelEvent"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,Ct,5,4,"ng-container",2),t.ALo(3,"async"),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,o.politicalParty$)))},dependencies:[p.O5,w,p.Ov,f.X$]}),i})();var Tt=c(929);const xt=[{path:"",redirectTo:"/news",pathMatch:"full"},{path:"add",component:(()=>{class i{constructor(n,o,a){this._router=n,this._notificationService=o,this._store=a}onSubmit(n){n.politicians.length<1?this._notificationService.showError("error-politician-required"):this._store.dispatch(new d.K.CreatePoliticalParty(n)).subscribe(()=>this.navigateBack())}navigateBack(){this._router.navigate(["/news"])}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(s.F0),t.Y36(Tt.g),t.Y36(u.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-party"]],decls:6,vars:3,consts:[[1,"container"],[1,"container__content"],[3,"submitEvent","cancelEvent"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-party-form",2),t.NdJ("submitEvent",function(l){return o.onSubmit(l)})("cancelEvent",function(){return o.navigateBack()}),t.qZA()()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"admin-party-add")))},dependencies:[w,f.X$]}),i})()},{path:"detail/:id",component:g},{path:"detail/:id/add-politician",component:st},{path:"detail/:id/edit-politician/:politicianId",component:$},{path:"detail/:id/edit",component:vt}];let Pt=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[s.Bz.forChild(xt),s.Bz]}),i})(),Ut=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.ez,Pt,M.m]}),i})()}}]);