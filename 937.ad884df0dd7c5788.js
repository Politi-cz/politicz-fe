"use strict";(self.webpackChunkpoliticz_fe=self.webpackChunkpoliticz_fe||[]).push([[937],{6937:(Ut,T,c)=>{c.r(T),c.d(T,{PartyModule:()=>Ct});var w=c(6417),m=c(6895),d=c(2751),h=c(9797),t=c(4650),p=c(8767),J=c(1027),u=c(8426);let U=(()=>{class i{constructor(){this.submitEvent=new t.vpe,this.cancelEvent=new t.vpe}submit(n){n.valid&&this.submitEvent.emit(n.value)}cancel(){this.cancelEvent.emit()}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],outputs:{submitEvent:"submitEvent",cancelEvent:"cancelEvent"},decls:0,vars:0,template:function(n,a){},encapsulation:2}),i})();var r=c(4006),_=c(4750),M=c(1764),Y=c.n(M);function q(){return i=>{const o=new Date(i.value);return Y()((new Date).setHours(0,0,0,0)).diff(o,"year",!0)>=21?null:{bellowMinimumAge:!0}}}var b=c(4859),P=c(4144),s=c(9549),Z=c(9602),f=c(9383);function Q(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-date")))}function R(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-minimum-age")))}function B(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-required")))}function S(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-bad-url-pattern")))}let O=(()=>{class i extends U{constructor(n){super(),this._fb=n,this.politicianForm=this._fb.group({fullName:this._fb.control("",{nonNullable:!0,validators:[r.kI.required]}),birthDate:this._fb.control("",{nonNullable:!0,validators:[r.kI.required,q()]}),imageUrl:this._fb.control("",{nonNullable:!0,validators:[r.kI.required,r.kI.pattern(_.c.URL_PATTERN)]}),facebookUrl:this._fb.control("",r.kI.pattern(_.c.URL_PATTERN)),instagramUrl:this._fb.control("",r.kI.pattern(_.c.URL_PATTERN)),twitterUrl:this._fb.control("",r.kI.pattern(_.c.URL_PATTERN))})}ngOnInit(){this.politician&&this.politicianForm.patchValue({fullName:this.politician.fullName,birthDate:this.politician.birthDate,facebookUrl:this.politician.facebookUrl,instagramUrl:this.politician.instagramUrl,imageUrl:this.politician.imageUrl,twitterUrl:this.politician.twitterUrl})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(r.qu))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-politician-form"]],inputs:{politician:"politician"},features:[t.qOj],decls:61,vars:48,consts:[[1,"form-content",3,"formGroup","ngSubmit"],["appearance","outline",1,"span-6"],["matInput","","formControlName","fullName"],["matInput","","formControlName","birthDate",3,"matDatepicker"],[4,"ngIf"],["matIconSuffix","",3,"for"],["startView","multi-year"],["picker",""],["appearance","outline",1,"span-12"],["matInput","","formControlName","imageUrl"],["matInput","","formControlName","twitterUrl"],["matInput","","formControlName","instagramUrl"],["matInput","","formControlName","facebookUrl"],[1,"form-footer","span-12"],["type","button","mat-raised-button","",1,"button-add",3,"click"],["type","submit","mat-raised-button","","color","primary",1,"button-add"]],template:function(n,a){if(1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return a.submit(a.politicianForm)}),t.TgZ(1,"mat-form-field",1)(2,"mat-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"input",2),t.TgZ(6,"mat-error"),t._uU(7),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"input",3),t.YNc(14,Q,3,3,"mat-error",4),t.YNc(15,R,3,3,"mat-error",4),t.TgZ(16,"mat-hint"),t._uU(17),t.ALo(18,"translate"),t.qZA(),t._UZ(19,"mat-datepicker-toggle",5)(20,"mat-datepicker",6,7),t.qZA(),t.TgZ(22,"mat-form-field",8)(23,"mat-label"),t._uU(24),t.ALo(25,"translate"),t.qZA(),t._UZ(26,"input",9),t.YNc(27,B,3,3,"mat-error",4),t.YNc(28,S,3,3,"mat-error",4),t.qZA(),t.TgZ(29,"mat-form-field",8)(30,"mat-label"),t._uU(31),t.ALo(32,"translate"),t.qZA(),t._UZ(33,"input",10),t.TgZ(34,"mat-error"),t._uU(35),t.ALo(36,"translate"),t.qZA()(),t.TgZ(37,"mat-form-field",8)(38,"mat-label"),t._uU(39),t.ALo(40,"translate"),t.qZA(),t._UZ(41,"input",11),t.TgZ(42,"mat-error"),t._uU(43),t.ALo(44,"translate"),t.qZA()(),t.TgZ(45,"mat-form-field",8)(46,"mat-label"),t._uU(47),t.ALo(48,"translate"),t.qZA(),t._UZ(49,"input",12),t.TgZ(50,"mat-error"),t._uU(51),t.ALo(52,"translate"),t.qZA()(),t.TgZ(53,"div",13)(54,"button",14),t.NdJ("click",function(){return a.cancel()}),t._uU(55),t.ALo(56,"translate"),t.qZA(),t.TgZ(57,"button",15),t._uU(58),t.ALo(59,"translate"),t.ALo(60,"translate"),t.qZA()()()),2&n){const e=t.MAs(21);t.Q6J("formGroup",a.politicianForm),t.xp6(3),t.Oqu(t.lcZ(4,20,"politician-name")),t.xp6(4),t.Oqu(t.lcZ(8,22,"form-required")),t.xp6(4),t.Oqu(t.lcZ(12,24,"birthday")),t.xp6(2),t.Q6J("matDatepicker",e),t.xp6(1),t.Q6J("ngIf",a.politicianForm.controls.birthDate.hasError("required")),t.xp6(1),t.Q6J("ngIf",a.politicianForm.controls.birthDate.hasError("bellowMinimumAge")),t.xp6(2),t.Oqu(t.lcZ(18,26,"year-format")),t.xp6(2),t.Q6J("for",e),t.xp6(5),t.Oqu(t.lcZ(25,28,"politician-profileImageUrl")),t.xp6(3),t.Q6J("ngIf",a.politicianForm.controls.imageUrl.hasError("required")),t.xp6(1),t.Q6J("ngIf",a.politicianForm.controls.imageUrl.hasError("pattern")),t.xp6(3),t.Oqu(t.lcZ(32,30,"politician-twitterUrl")),t.xp6(4),t.Oqu(t.lcZ(36,32,"form-bad-url-pattern")),t.xp6(4),t.Oqu(t.lcZ(40,34,"politician-instagramUrl")),t.xp6(4),t.Oqu(t.lcZ(44,36,"form-bad-url-pattern")),t.xp6(4),t.Oqu(t.lcZ(48,38,"politician-facebookUrl")),t.xp6(4),t.Oqu(t.lcZ(52,40,"form-bad-url-pattern")),t.xp6(4),t.hij(" ",t.lcZ(56,42,"back")," "),t.xp6(3),t.hij(" ",a.politician?t.lcZ(59,44,"update"):t.lcZ(60,46,"create")," ")}},dependencies:[m.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,b.lW,P.Nt,s.KE,s.hX,s.bx,s.TO,s.R9,Z.Mq,Z.hl,Z.nW,f.X$]}),i})();function D(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"app-politician-form",3),t.NdJ("cancelEvent",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.navigateBack())})("submitEvent",function(e){t.CHM(n);const l=t.oxw();return t.KtG(l.onSubmit(e))}),t.qZA()}2&i&&t.Q6J("politician",o.ngIf)}let K=(()=>{class i{constructor(n,a,e,l){this._route=n,this._router=a,this._politicalPartiesService=e,this._store=l}ngOnInit(){this._route.paramMap.subscribe(n=>{this.politicalPartyId=n.get("id"),this.politicianId=n.get("politicianId"),this._store.dispatch(new d.K.GetPoliticalParty(this.politicalPartyId)),this.politician$=this._store.select(h.k.getPoliticianById(this.politicianId))})}onSubmit(n){const a={id:this.politicianId,...n};this._store.dispatch(new d.K.EditPolitician(a)).subscribe(()=>this.navigateBack())}navigateBack(){this._router.navigate(["/political-party/detail/"+this.politicalPartyId])}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(p.gz),t.Y36(p.F0),t.Y36(J.A),t.Y36(u.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-edit-politician"]],decls:7,vars:6,consts:[[1,"container"],[1,"container__content"],[3,"politician","cancelEvent","submitEvent",4,"ngIf"],[3,"politician","cancelEvent","submitEvent"]],template:function(n,a){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.YNc(5,D,1,1,"app-politician-form",2),t.ALo(6,"async"),t.qZA()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,2,"politician-edit")),t.xp6(2),t.Q6J("ngIf",t.lcZ(6,4,a.politician$)))},dependencies:[m.O5,O,m.Ov,f.X$]}),i})();var x=c(655),j=c(39),y=c(5412);let I=(()=>{class i{constructor(n,a){this.dialogRef=n,this.data=a}cancel(){this.dialogRef.close()}confirm(){this.dialogRef.close(!0)}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(y.so),t.Y36(y.WI))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-confirm-dialog"]],decls:15,vars:12,consts:[["mat-dialog-title",""],[1,"mat-typography"],["align","end"],["mat-flat-button","",3,"click"],["mat-flat-button","","cdkFocusInitial","","color","primary",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"h2",0),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.TgZ(3,"mat-dialog-content",1)(4,"h3")(5,"b"),t._uU(6),t.ALo(7,"translate"),t.qZA()()(),t.TgZ(8,"mat-dialog-actions",2)(9,"button",3),t.NdJ("click",function(){return a.cancel()}),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"button",4),t.NdJ("click",function(){return a.confirm()}),t._uU(13),t.ALo(14,"translate"),t.qZA()()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,4,a.data.title)),t.xp6(5),t.Oqu(t.lcZ(7,6,a.data.content)),t.xp6(4),t.Oqu(t.lcZ(11,8,a.data.closeButtonText)),t.xp6(3),t.hij(" ",t.lcZ(14,10,a.data.confirmButtonText),""))},dependencies:[y.uh,y.xY,y.H8,b.lW,f.X$]}),i})();var F=c(7392),E=c(9132),A=c(3546),$=c(1591),G=c(1296);function H(i,o){if(1&i&&(t.TgZ(0,"a",7),t._UZ(1,"img",8),t.qZA()),2&i){const n=t.oxw(2);t.Q6J("href",n.politician.facebookUrl,t.LSH)}}function X(i,o){if(1&i&&(t.TgZ(0,"a",7),t._UZ(1,"img",9),t.qZA()),2&i){const n=t.oxw(2);t.Q6J("href",n.politician.instagramUrl,t.LSH)}}function z(i,o){if(1&i&&(t.TgZ(0,"a",7),t._UZ(1,"img",10),t.qZA()),2&i){const n=t.oxw(2);t.Q6J("href",n.politician.twitterUrl,t.LSH)}}function V(i,o){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"mat-card",1)(2,"app-admin-quick-menu-actions",2),t.NdJ("actionClickEvt",function(e){t.CHM(n);const l=t.oxw();return t.KtG(l.handleActionEvent(e))}),t.qZA(),t.TgZ(3,"mat-card-header")(4,"mat-card-title",3),t._uU(5),t.qZA(),t.TgZ(6,"mat-card-subtitle"),t._uU(7),t.ALo(8,"dateFormatter"),t.qZA()(),t._UZ(9,"img",4),t.TgZ(10,"mat-card-content",5),t.YNc(11,H,2,1,"a",6),t.YNc(12,X,2,1,"a",6),t.YNc(13,z,2,1,"a",6),t.qZA()(),t.BQk()}if(2&i){const n=t.oxw();t.xp6(5),t.Oqu(n.politician.fullName),t.xp6(2),t.Oqu(t.lcZ(8,6,n.politician.birthDate)),t.xp6(2),t.Q6J("src",n.politician.imageUrl?n.politician.imageUrl:"assets/man-user-svgrepo-com.svg",t.LSH),t.xp6(2),t.Q6J("ngIf",n.politician.facebookUrl),t.xp6(1),t.Q6J("ngIf",n.politician.instagramUrl),t.xp6(1),t.Q6J("ngIf",n.politician.twitterUrl)}}let W=(()=>{class i{constructor(n,a,e){this._store=n,this._router=a,this._dialog=e}handleActionEvent(n){const a=this._store.selectSnapshot(h.k.getPoliticalPartyId);switch(n.type){case E.U.EDIT:this._router.navigate(["/political-party/detail",a,"edit-politician",this.politician.id]);break;case E.U.DELETE:this.openDialogAndRemovePolitician()}}openDialogAndRemovePolitician(){this._dialog.open(I,{data:{title:"dialog-remove",content:"remove-politician-content",confirmButtonText:"remove-politician",closeButtonText:"dialog-action-cancel"}}).afterClosed().subscribe(e=>{e&&this._store.dispatch(new d.K.RemovePolitician(this.politician))})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(u.yh),t.Y36(p.F0),t.Y36(y.uw))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-politician"]],inputs:{politician:"politician"},decls:1,vars:1,consts:[[4,"ngIf"],["appearance","outlined",1,"politician-card","mat-elevation-z2"],[3,"actionClickEvt"],[1,"politician-card__title"],["alt","politician_image","mat-card-image","",1,"politician-card__image",3,"src"],[1,"politician-card__media"],["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],["src","assets/icons/facebook.svg","aria-label","redirect to facebook profile of politic","alt","redirect to facebook profile of politic",1,"mat-elevation-z4"],["src","assets/icons/instagram.svg","aria-label","redirect to instagram profile of politic","alt","redirect to instagram profile of politic",1,"mat-elevation-z4"],["src","assets/icons/twitter.svg","aria-label","redirect to twitter profile of politic","alt","redirect to twitter profile of politic",1,"mat-elevation-z4"]],template:function(n,a){1&n&&t.YNc(0,V,14,8,"ng-container",0),2&n&&t.Q6J("ngIf",a.politician)},dependencies:[m.O5,A.a8,A.dn,A.dk,A.G2,A.$j,A.n5,$.i,G.l],styles:[".politician-card__title[_ngcontent-%COMP%]{margin-right:3rem}.politician-card__image[_ngcontent-%COMP%]{display:block!important;height:200px!important;object-fit:cover}.politician-card__media[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;margin-top:1rem;height:4rem}.politician-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3rem;transition:all .5s;border-radius:25%}.politician-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{scale:1.1}"]}),i})();var N=c(1176);let tt=(()=>{class i{constructor(n){this.store=n}transform(n,a){if(!a||null==n)return this.store.dispatch(new N.x.Set({politicianFilterCount:n.length})),n;const e=n.filter(l=>_.c.textIncludesSearchedValueCaseInsensitive(l.fullName,a));return this.store.dispatch(new N.x.Set({politicianFilterCount:e.length})),e}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(u.yh,16))},i.\u0275pipe=t.Yjl({name:"filterPoliticians",type:i,pure:!0}),i})();function nt(i,o){1&i&&t._UZ(0,"app-politician",15),2&i&&t.Q6J("politician",o.$implicit)}function it(i,o){1&i&&(t.ynx(0),t.TgZ(1,"span",16),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.BQk()),2&i&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"no-result")))}function at(i,o){if(1&i&&(t.ynx(0),t.TgZ(1,"div",13),t.YNc(2,nt,1,1,"app-politician",14),t.ALo(3,"filterPoliticians"),t.YNc(4,it,4,3,"ng-container",1),t.ALo(5,"async"),t.qZA(),t.BQk()),2&i){const n=o.ngIf;t.oxw();const a=t.MAs(11),e=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.xi3(3,2,n,a.value)),t.xp6(2),t.Q6J("ngIf",0===t.lcZ(5,5,e.politiciansCount))}}const ot=function(i){return["/political-party/detail",i,"edit"]},et=function(i){return["/political-party/detail",i,"add-politician"]};function rt(i,o){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",2)(2,"h1",3),t._uU(3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"mat-form-field",6)(7,"mat-label"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t._UZ(10,"input",7,8),t.TgZ(12,"mat-icon",9),t._uU(13,"search"),t.qZA()()(),t.TgZ(14,"div",10)(15,"button",11)(16,"mat-icon"),t._uU(17,"edit"),t.qZA(),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"button",12),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.openDialogAndRemoveParty())}),t.TgZ(21,"mat-icon"),t._uU(22,"delete_forever"),t.qZA(),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.TgZ(25,"button",11),t._uU(26),t.ALo(27,"translate"),t.TgZ(28,"mat-icon"),t._uU(29,"add"),t.qZA()()()()(),t.YNc(30,at,6,7,"ng-container",1),t.ALo(31,"async"),t.BQk()}if(2&i){const n=o.ngIf,a=t.oxw();t.xp6(3),t.Oqu(n.name),t.xp6(5),t.Oqu(t.lcZ(9,8,"politician-search")),t.xp6(7),t.Q6J("routerLink",t.VKq(18,ot,n.id)),t.xp6(3),t.hij(" ",t.lcZ(19,10,"edit-party")," "),t.xp6(5),t.hij(" ",t.lcZ(24,12,"remove-party")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(20,et,n.id)),t.xp6(1),t.hij(" ",t.lcZ(27,14,"politician-add")," "),t.xp6(4),t.Q6J("ngIf",t.lcZ(31,16,a.politicians$))}}class g{constructor(o,n,a,e){this.route=o,this.store=n,this._router=a,this.dialog=e}ngOnInit(){this.route.paramMap.subscribe(o=>this.store.dispatch(new d.K.GetPoliticalParty(o.get("id"))))}openDialogAndRemoveParty(){this.dialog.open(I,{data:{title:"dialog-remove",content:"remove-party-content",confirmButtonText:"remove-party",closeButtonText:"dialog-action-cancel"}}).afterClosed().subscribe(a=>{a&&this.removeParty()})}removeParty(){const o=this.store.selectSnapshot(h.k.getPoliticalPartyId);o&&this.store.dispatch(new d.K.RemovePoliticalParty(o)).subscribe(()=>this._router.navigate(["/news"]))}}g.\u0275fac=function(o){return new(o||g)(t.Y36(p.gz),t.Y36(u.yh),t.Y36(p.F0),t.Y36(y.uw))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-party"]],decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"party"],[1,"party__heading"],[1,"party__actions"],[1,"party__actions__search"],["appearance","outline"],["type","text","matInput",""],["input",""],["color","primary","matSuffix",""],[1,"party__actions__admin-buttons"],["mat-raised-button","","color","primary",1,"button-add",3,"routerLink"],["mat-raised-button","","color","primary",1,"button-add",3,"click"],[1,"politicians"],[3,"politician",4,"ngFor","ngForOf"],[3,"politician"],[1,"no-result"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0),t.YNc(1,rt,32,22,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.politicalParty$)))},dependencies:[m.sg,m.O5,p.rH,b.lW,F.Hw,P.Nt,s.KE,s.hX,s.R9,W,m.Ov,f.X$,tt],styles:[".party[_ngcontent-%COMP%]{height:100%;grid-column:center-start/center-end}.party__heading[_ngcontent-%COMP%]{font-size:3rem;text-align:center;padding:1rem 0 2rem;letter-spacing:.1rem;word-spacing:.5rem;text-transform:uppercase}@media only screen and (max-width: 75em){.party__heading[_ngcontent-%COMP%]{line-height:3.5rem}}.party__subheading[_ngcontent-%COMP%]{font-size:2rem}.party__actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:3rem;gap:1.5rem}@media only screen and (max-width: 37.5em){.party__actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}}.party__actions__search[_ngcontent-%COMP%]{align-self:center}.party__actions__search[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%!important}.party__actions__admin-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem 0}.party[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{grid-column:2/-1}@media only screen and (max-width: 37.5em){.party[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{grid-column:auto}}.politicians[_ngcontent-%COMP%]{grid-column:center-start/center-end;display:grid;padding-bottom:2rem;grid-template-columns:repeat(3,minmax(22rem,32rem));gap:3rem}@media only screen and (max-width: 62.5em){.politicians[_ngcontent-%COMP%]{grid-template-columns:[center-start] repeat(2,minmax(20rem,1fr)) [center-end]}}@media only screen and (max-width: 37.5em){.politicians[_ngcontent-%COMP%]{grid-template-columns:[center-start] 1fr [center-end];gap:2rem}}.no-result[_ngcontent-%COMP%]{font-size:3rem;grid-column:1/-1}@media only screen and (max-width: 53.125em){.no-result[_ngcontent-%COMP%]{line-height:4rem}}"]}),(0,x.gn)([(0,u.Ph)(j.t.getPoliticianFilterCount)],g.prototype,"politiciansCount",void 0),(0,x.gn)([(0,u.Ph)(h.k.getPoliticalParty)],g.prototype,"politicalParty$",void 0),(0,x.gn)([(0,u.Ph)(h.k.getPoliticians)],g.prototype,"politicians$",void 0);let ct=(()=>{class i{constructor(n,a,e){this._store=n,this._router=a,this._route=e}ngOnInit(){this._route.paramMap.subscribe(n=>this.politicalPartyId=n.get("id"))}onSubmit(n){this._store.dispatch(new d.K.AddPolitician(n)).subscribe(()=>this.navigateBack())}navigateBack(){this._router.navigate(["/political-party/detail/"+this.politicalPartyId])}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(u.yh),t.Y36(p.F0),t.Y36(p.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-politician"]],decls:6,vars:3,consts:[[1,"container"],[1,"container__content"],[3,"submitEvent","cancelEvent"]],template:function(n,a){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-politician-form",2),t.NdJ("submitEvent",function(l){return a.onSubmit(l)})("cancelEvent",function(){return a.navigateBack()}),t.qZA()()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"politician-new")))},dependencies:[O,f.X$]}),i})();var lt=c(7579),k=c(9521),v=c(7331);function pt(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-required")))}function st(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-bad-url-pattern")))}function mt(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"mat-chip-row",13),t.NdJ("removed",function(){const l=t.CHM(n).$implicit,C=t.oxw();return t.KtG(C.removeTag(l))})("edited",function(e){const C=t.CHM(n).$implicit,Tt=t.oxw();return t.KtG(Tt.editTag(C,e))}),t._uU(1),t.TgZ(2,"button",14)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&i){const n=o.$implicit;t.Q6J("editable",!0),t.xp6(1),t.hij(" ",n," "),t.xp6(1),t.uIk("aria-label","remove "+n)}}function ut(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-date")))}function _t(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-minimum-age")))}function dt(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-required")))}function ft(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-bad-url-pattern")))}function gt(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"div",32)(1,"button",33),t.NdJ("click",function(){t.CHM(n);const e=t.oxw().index,l=t.oxw(2);return t.KtG(l.removePolitician(e))}),t.TgZ(2,"mat-icon"),t._uU(3,"clear"),t.qZA()()()}}function ht(i,o){if(1&i&&(t.ynx(0,20),t.TgZ(1,"h3",21),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"mat-form-field",22)(5,"mat-label"),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._UZ(8,"input",23),t.TgZ(9,"mat-error"),t._uU(10),t.ALo(11,"translate"),t.qZA()(),t.TgZ(12,"mat-form-field",22)(13,"mat-label"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._UZ(16,"input",24),t.YNc(17,ut,3,3,"mat-error",4),t.YNc(18,_t,3,3,"mat-error",4),t.TgZ(19,"mat-hint"),t._uU(20),t.ALo(21,"translate"),t.qZA(),t._UZ(22,"mat-datepicker-toggle",25)(23,"mat-datepicker",26,27),t.qZA(),t.TgZ(25,"mat-form-field",1)(26,"mat-label"),t._uU(27),t.ALo(28,"translate"),t.qZA(),t._UZ(29,"input",3),t.YNc(30,dt,3,3,"mat-error",4),t.YNc(31,ft,3,3,"mat-error",4),t.qZA(),t.TgZ(32,"mat-form-field",1)(33,"mat-label"),t._uU(34),t.ALo(35,"translate"),t.qZA(),t._UZ(36,"input",28),t.TgZ(37,"mat-error"),t._uU(38),t.ALo(39,"translate"),t.qZA()(),t.TgZ(40,"mat-form-field",1)(41,"mat-label"),t._uU(42),t.ALo(43,"translate"),t.qZA(),t._UZ(44,"input",29),t.TgZ(45,"mat-error"),t._uU(46),t.ALo(47,"translate"),t.qZA()(),t.TgZ(48,"mat-form-field",1)(49,"mat-label"),t._uU(50),t.ALo(51,"translate"),t.qZA(),t._UZ(52,"input",30),t.TgZ(53,"mat-error"),t._uU(54),t.ALo(55,"translate"),t.qZA()(),t.YNc(56,gt,4,0,"div",31),t.BQk()),2&i){const n=o.$implicit,a=o.index,e=t.MAs(24);t.Q6J("formGroupName",a),t.xp6(2),t.AsE("",a+1+". "," ",t.lcZ(3,21,"politician"),""),t.xp6(4),t.Oqu(t.lcZ(7,23,"politician-name")),t.xp6(4),t.Oqu(t.lcZ(11,25,"form-required")),t.xp6(4),t.Oqu(t.lcZ(15,27,"birthday")),t.xp6(2),t.Q6J("matDatepicker",e),t.xp6(1),t.Q6J("ngIf",n.controls.birthDate.hasError("required")),t.xp6(1),t.Q6J("ngIf",n.controls.birthDate.hasError("bellowMinimumAge")),t.xp6(2),t.Oqu(t.lcZ(21,29,"year-format")),t.xp6(2),t.Q6J("for",e),t.xp6(5),t.Oqu(t.lcZ(28,31,"politician-profileImageUrl")),t.xp6(3),t.Q6J("ngIf",n.controls.imageUrl.hasError("required")),t.xp6(1),t.Q6J("ngIf",n.controls.imageUrl.hasError("pattern")),t.xp6(3),t.Oqu(t.lcZ(35,33,"politician-twitterUrl")),t.xp6(4),t.Oqu(t.lcZ(39,35,"form-bad-url-pattern")),t.xp6(4),t.Oqu(t.lcZ(43,37,"politician-instagramUrl")),t.xp6(4),t.Oqu(t.lcZ(47,39,"form-bad-url-pattern")),t.xp6(4),t.Oqu(t.lcZ(51,41,"politician-facebookUrl")),t.xp6(4),t.Oqu(t.lcZ(55,43,"form-bad-url-pattern")),t.xp6(2),t.Q6J("ngIf",a>0)}}function yt(i,o){if(1&i){const n=t.EpF();t.ynx(0,15),t.TgZ(1,"h2",16),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.YNc(4,ht,57,45,"ng-container",17),t.TgZ(5,"div",18)(6,"button",19),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.addPolitician())}),t.TgZ(7,"mat-icon"),t._uU(8,"add"),t.qZA()()(),t.BQk()}if(2&i){const n=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"politician-add")),t.xp6(2),t.Q6J("ngForOf",null==n.politiciansFormArray?null:n.politiciansFormArray.controls)}}let L=(()=>{class i extends U{constructor(n){super(),this._fb=n,this.partyForm=this._fb.group({name:this._fb.nonNullable.control("",{validators:r.kI.required}),imageUrl:this._fb.nonNullable.control("",{validators:[r.kI.required,r.kI.pattern(_.c.URL_PATTERN)]}),tags:this._fb.nonNullable.control([""],r.kI.required),politicians:this._fb.array([])}),this.tags=[],this.addOnBlur=!0,this.separatorKeysCodes=[k.K5,k.OC]}ngOnInit(){this.addPolitician(),this.party&&(this.partyForm.removeControl("politicians"),this.tags=[...this.party.tags],this.partyForm.patchValue({name:this.party.name,imageUrl:this.party.imageUrl,tags:[...this.party.tags]}))}get politiciansFormArray(){return this.partyForm?.controls.politicians??null}submit(){this.partyForm.valid&&(this.partyForm.patchValue({tags:[...this.tags]}),this.submitEvent.emit(this.partyForm.value))}addPolitician(){const n=this._fb.group({fullName:this._fb.control("",{nonNullable:!0,validators:[r.kI.required]}),birthDate:this._fb.control("",{nonNullable:!0,validators:[r.kI.required,q()]}),imageUrl:this._fb.control("",{nonNullable:!0,validators:[r.kI.required,r.kI.pattern(_.c.URL_PATTERN)]}),facebookUrl:this._fb.control("",r.kI.pattern(_.c.URL_PATTERN)),instagramUrl:this._fb.control("",r.kI.pattern(_.c.URL_PATTERN)),twitterUrl:this._fb.control("",r.kI.pattern(_.c.URL_PATTERN))});this.politiciansFormArray&&this.politiciansFormArray.push(n)}removePolitician(n){this.politiciansFormArray&&this.politiciansFormArray.removeAt(n)}addTag(n){const a=(n.value||"").trim();a&&this.tags.push(a),n.chipInput.clear()}removeTag(n){const a=this.tags.indexOf(n);a>=0&&this.tags.splice(a,1)}editTag(n,a){const e=a.value.trim();if(!e)return void this.removeTag(n);const l=this.tags.indexOf(n);l>=0&&(this.tags[l]=e)}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(r.qu))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-party-form"]],inputs:{party:"party"},features:[t.qOj],decls:40,vars:37,consts:[[1,"form-content",3,"formGroup","ngSubmit"],["appearance","outline",1,"span-12"],["matInput","","formControlName","name"],["matInput","","formControlName","imageUrl"],[4,"ngIf"],["formControlName","tags"],["chipGrid",""],[3,"editable","removed","edited",4,"ngFor","ngForOf"],[3,"placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["formArrayName","politicians",4,"ngIf"],[1,"form-footer","span-12"],["type","button","mat-raised-button","",1,"button-add",3,"click"],["type","submit","mat-raised-button","","color","primary",1,"button-add"],[3,"editable","removed","edited"],["matChipRemove",""],["formArrayName","politicians"],[1,"span-12"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"span-12","add-politician-container"],["type","button","mat-fab","","color","primary",3,"click"],[3,"formGroupName"],[1,"span-12","politician-number"],["appearance","outline",1,"span-6"],["matInput","","formControlName","fullName"],["matInput","","formControlName","birthDate",3,"matDatepicker"],["matIconSuffix","",3,"for"],["startView","multi-year"],["picker",""],["matInput","","formControlName","twitterUrl"],["matInput","","formControlName","instagramUrl"],["matInput","","formControlName","facebookUrl"],["class","span-12 delete-politician",4,"ngIf"],[1,"span-12","delete-politician"],["type","button","mat-fab","","color","warn",3,"click"]],template:function(n,a){if(1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return a.submit()}),t.TgZ(1,"mat-form-field",1)(2,"mat-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"input",2),t.TgZ(6,"mat-error"),t._uU(7),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"input",3),t.YNc(14,pt,3,3,"mat-error",4),t.YNc(15,st,3,3,"mat-error",4),t.qZA(),t.TgZ(16,"mat-form-field",1)(17,"mat-label"),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"mat-chip-grid",5,6),t.YNc(22,mt,5,3,"mat-chip-row",7),t.TgZ(23,"input",8),t.NdJ("matChipInputTokenEnd",function(l){return a.addTag(l)}),t.ALo(24,"translate"),t.qZA()(),t.TgZ(25,"mat-hint"),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"mat-error"),t._uU(29),t.ALo(30,"translate"),t.qZA()(),t.YNc(31,yt,9,4,"ng-container",9),t.TgZ(32,"div",10)(33,"button",11),t.NdJ("click",function(){return a.cancel()}),t._uU(34),t.ALo(35,"translate"),t.qZA(),t.TgZ(36,"button",12),t._uU(37),t.ALo(38,"translate"),t.ALo(39,"translate"),t.qZA()()()),2&n){const e=t.MAs(21);t.Q6J("formGroup",a.partyForm),t.xp6(3),t.Oqu(t.lcZ(4,17,"party-name")),t.xp6(4),t.Oqu(t.lcZ(8,19,"form-required")),t.xp6(4),t.Oqu(t.lcZ(12,21,"party-image")),t.xp6(3),t.Q6J("ngIf",a.partyForm.controls.imageUrl.hasError("required")),t.xp6(1),t.Q6J("ngIf",a.partyForm.controls.imageUrl.hasError("pattern")),t.xp6(3),t.Oqu(t.lcZ(19,23,"party-tags")),t.xp6(4),t.Q6J("ngForOf",a.tags),t.xp6(1),t.Q6J("placeholder",t.lcZ(24,25,"party-tag-placeholder"))("matChipInputFor",e)("matChipInputSeparatorKeyCodes",a.separatorKeysCodes)("matChipInputAddOnBlur",a.addOnBlur),t.xp6(3),t.Oqu(t.lcZ(27,27,"chips-hint")),t.xp6(3),t.Oqu(t.lcZ(30,29,"chips-required")),t.xp6(2),t.Q6J("ngIf",!a.party),t.xp6(3),t.hij(" ",t.lcZ(35,31,"back")," "),t.xp6(3),t.hij(" ",a.party?t.lcZ(38,33,"update"):t.lcZ(39,35,"create")," ")}},dependencies:[m.sg,m.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE,b.lW,b.cs,v.RA,v.oH,v.qH,v.z3,F.Hw,P.Nt,s.KE,s.hX,s.bx,s.TO,s.R9,Z.Mq,Z.hl,Z.nW,f.X$],styles:[".politician-number[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700}.add-politician-container[_ngcontent-%COMP%], .delete-politician[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),i})();function Zt(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"app-party-form",4),t.NdJ("submitEvent",function(e){t.CHM(n);const l=t.oxw(2);return t.KtG(l.onSubmit(e))})("cancelEvent",function(){t.CHM(n);const e=t.oxw().ngIf,l=t.oxw();return t.KtG(l.navigateBack(e.id))}),t.qZA()}if(2&i){const n=t.oxw().ngIf;t.Q6J("party",n)}}function At(i,o){if(1&i&&(t.ynx(0),t.TgZ(1,"h1"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.YNc(4,Zt,1,1,"app-party-form",3),t.BQk()),2&i){const n=o.ngIf;t.xp6(2),t.Oqu(t.lcZ(3,2,"admin-party-edit")),t.xp6(2),t.Q6J("ngIf",n.id)}}let bt=(()=>{class i{constructor(n,a,e){this._route=n,this._router=a,this._store=e,this.destroy$=new lt.x}ngOnInit(){this._route.paramMap.subscribe(n=>{this._store.dispatch(new d.K.GetPoliticalParty(n.get("id"))),this.politicalParty$=this._store.select(h.k.getPoliticalParty)})}ngOnDestroy(){this.destroy$.next()}onSubmit(n){const a=this._store.selectSnapshot(h.k.getPoliticalParty);this._store.dispatch(new d.K.UpdatePoliticalParty({...n,id:a.id,politicians:[...a.politicians]})).subscribe(()=>this.navigateBack(a.id))}navigateBack(n){this._router.navigate(["/political-party/detail/"+n])}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(p.gz),t.Y36(p.F0),t.Y36(u.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-edit-party"]],decls:4,vars:3,consts:[[1,"container"],[1,"container__content"],[4,"ngIf"],[3,"party","submitEvent","cancelEvent",4,"ngIf"],[3,"party","submitEvent","cancelEvent"]],template:function(n,a){1&n&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,At,5,4,"ng-container",2),t.ALo(3,"async"),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,a.politicalParty$)))},dependencies:[m.O5,L,m.Ov,f.X$]}),i})();var vt=c(929);const Pt=[{path:"",redirectTo:"/news",pathMatch:"full"},{path:"add",component:(()=>{class i{constructor(n,a,e){this._router=n,this._notificationService=a,this._store=e}onSubmit(n){n.politicians.length<1?this._notificationService.showError("error-politician-required"):this._store.dispatch(new d.K.CreatePoliticalParty(n)).subscribe(()=>this.navigateBack())}navigateBack(){this._router.navigate(["/news"])}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(p.F0),t.Y36(vt.g),t.Y36(u.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-party"]],decls:6,vars:3,consts:[[1,"container"],[1,"container__content"],[3,"submitEvent","cancelEvent"]],template:function(n,a){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-party-form",2),t.NdJ("submitEvent",function(l){return a.onSubmit(l)})("cancelEvent",function(){return a.navigateBack()}),t.qZA()()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"admin-party-add")))},dependencies:[L,f.X$]}),i})()},{path:"detail/:id",component:g},{path:"detail/:id/add-politician",component:ct},{path:"detail/:id/edit-politician/:politicianId",component:K},{path:"detail/:id/edit",component:bt}];let xt=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(Pt),p.Bz]}),i})(),Ct=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.ez,xt,w.m]}),i})()}}]);