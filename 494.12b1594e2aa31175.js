"use strict";(self.webpackChunkpoliticz_fe=self.webpackChunkpoliticz_fe||[]).push([[494],{3494:(It,E,c)=>{c.r(E),c.d(E,{PartyModule:()=>Ft});var u,n,d=c(655),O=c(1585),s=c(8426);(n=u||(u={})).GetPoliticalParty=(()=>{class m{constructor(g){this.payload=g}}return m.type="[PoliticalParty] LoadPoliticalPartyById",m})(),n.CreatePoliticalParty=(()=>{class m{constructor(g){this.payload=g}}return m.type="[Politicalparty] Create political party",m})(),n.UpdatePoliticalParty=(()=>{class m{constructor(g){this.payload=g}}return m.type="[Politicalparty] Update political party",m})(),n.RemovePoliticalParty=(()=>{class m{constructor(g){this.id=g}}return m.type="[PoliticalParty] Remove political party",m})(),n.AddPolitician=(()=>{class m{constructor(g){this.payload=g}}return m.type="[PoliticalParty] Add politician",m})(),n.EditPolitician=(()=>{class m{constructor(g){this.payload=g}}return m.type="[PoliticalParty] Edit politician",m})(),n.RemovePolitician=(()=>{class m{constructor(g){this.payload=g}}return m.type="[PoliticalParty] Remove politician",m})();var A=c(8505),t=c(4650),L=c(1027),N=c(929);let p=class{constructor(a,i){this.politicalPartyService=a,this.notificationService=i}static getPoliticalParty(a){return a}static getPoliticalPartyId(a){return a.id}static getPoliticians(a){return a.politicians}getPoliticalParty(a,{payload:i}){return this.politicalPartyService.getPoliticalParty(i).pipe((0,A.b)(e=>a.setState(e)))}createPoliticalParty(a,{payload:i}){return this.politicalPartyService.createPoliticalParty(i).pipe((0,A.b)(e=>{a.patchState({...e}),a.dispatch(new O.t.GetSidenavParties),this.notificationService.showSuccess("party-create-success")}))}updatePoliticalParty(a,{payload:i}){return this.politicalPartyService.editPoliticalParty(i).pipe((0,A.b)(e=>{a.patchState({...e}),a.dispatch(new O.t.GetSidenavParties),this.notificationService.showSuccess("party-edit-success")}))}removePoliticalParty(a,{id:i}){return this.politicalPartyService.removePoliticalParty(i).pipe((0,A.b)(()=>{a.dispatch(new O.t.GetSidenavParties),this.notificationService.showSuccess("party-remove-success")}))}addPolitician(a,{payload:i}){return this.politicalPartyService.addPolitician(a.getState().id,i).pipe((0,A.b)(e=>{a.patchState({politicians:[...a.getState().politicians,e]}),this.notificationService.showSuccess("politician-create-success")}))}editPolitician(a,{payload:i}){return this.politicalPartyService.editPolitician(i.id,i).pipe((0,A.b)(e=>{let o=[...a.getState().politicians];const l=o.findIndex(P=>P.id===e.id);-1!==l?(o[l]={...e},a.patchState({politicians:[...o]}),this.notificationService.showSuccess("politician-edit-success")):this.notificationService.showError("Wrong politician id")}))}removePolitician(a,{payload:i}){return this.politicalPartyService.removePolitician(i.id).pipe((0,A.b)(()=>{const e=a.getState().politicians.filter(o=>o.id!==i.id);a.patchState({politicians:e}),this.notificationService.showSuccess("politician-remove-success")}))}};p.\u0275fac=function(a){return new(a||p)(t.LFG(L.A),t.LFG(N.g))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac}),(0,d.gn)([(0,s.aU)(u.GetPoliticalParty,{cancelUncompleted:!0})],p.prototype,"getPoliticalParty",null),(0,d.gn)([(0,s.aU)(u.CreatePoliticalParty)],p.prototype,"createPoliticalParty",null),(0,d.gn)([(0,s.aU)(u.UpdatePoliticalParty)],p.prototype,"updatePoliticalParty",null),(0,d.gn)([(0,s.aU)(u.RemovePoliticalParty)],p.prototype,"removePoliticalParty",null),(0,d.gn)([(0,s.aU)(u.AddPolitician)],p.prototype,"addPolitician",null),(0,d.gn)([(0,s.aU)(u.EditPolitician)],p.prototype,"editPolitician",null),(0,d.gn)([(0,s.aU)(u.RemovePolitician)],p.prototype,"removePolitician",null),(0,d.gn)([(0,s.Qf)()],p,"getPoliticalParty",null),(0,d.gn)([(0,s.Qf)()],p,"getPoliticalPartyId",null),(0,d.gn)([(0,s.Qf)()],p,"getPoliticians",null),p=(0,d.gn)([(0,s.ZM)({name:"PoliticalPartyState",defaults:{id:"",name:"kokodzina",imageUrl:"",politicians:[],tags:[]}})],p);var D=c(6417),h=c(6895),G=c(3900),_=c(8767);let w=(()=>{class n{constructor(){this.submitEvent=new t.vpe,this.cancelEvent=new t.vpe}submit(i){i.valid&&this.submitEvent.emit(i.value)}cancel(){this.cancelEvent.emit()}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],outputs:{submitEvent:"submitEvent",cancelEvent:"cancelEvent"},decls:0,vars:0,template:function(i,e){},encapsulation:2}),n})();var r=c(4006),y=c(4750),j=c(1764),$=c.n(j);function k(){return n=>{const a=new Date(n.value);return $()((new Date).setHours(0,0,0,0)).diff(a,"year",!0)>=21?null:{bellowMinimumAge:!0}}}var U=c(4859),F=c(4144),f=c(9549),C=c(9602),Z=c(9383);function H(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-date")))}function X(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-minimum-age")))}function z(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-required")))}function K(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-bad-url-pattern")))}let S=(()=>{class n extends w{constructor(i){super(),this._fb=i,this.politicianForm=this._fb.group({fullName:this._fb.control("",{nonNullable:!0,validators:[r.kI.required]}),birthDate:this._fb.control("",{nonNullable:!0,validators:[r.kI.required,k()]}),imageUrl:this._fb.control("",{nonNullable:!0,validators:[r.kI.required,r.kI.pattern(y.c.URL_PATTERN)]}),facebookUrl:this._fb.control("",r.kI.pattern(y.c.URL_PATTERN)),instagramUrl:this._fb.control("",r.kI.pattern(y.c.URL_PATTERN)),twitterUrl:this._fb.control("",r.kI.pattern(y.c.URL_PATTERN))})}ngOnInit(){this.politician&&this.politicianForm.patchValue({fullName:this.politician.fullName,birthDate:this.politician.birthDate,facebookUrl:this.politician.facebookUrl,instagramUrl:this.politician.instagramUrl,imageUrl:this.politician.imageUrl,twitterUrl:this.politician.twitterUrl})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(r.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-politician-form"]],inputs:{politician:"politician"},features:[t.qOj],decls:61,vars:48,consts:[[1,"form-content",3,"formGroup","ngSubmit"],["appearance","outline",1,"span-6"],["matInput","","formControlName","fullName"],["matInput","","formControlName","birthDate",3,"matDatepicker"],[4,"ngIf"],["matIconSuffix","",3,"for"],["startView","multi-year"],["picker",""],["appearance","outline",1,"span-12"],["matInput","","formControlName","imageUrl"],["matInput","","formControlName","twitterUrl"],["matInput","","formControlName","instagramUrl"],["matInput","","formControlName","facebookUrl"],[1,"form-footer","span-12"],["type","button","mat-raised-button","",1,"button-add",3,"click"],["type","submit","mat-raised-button","","color","primary",1,"button-add"]],template:function(i,e){if(1&i&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return e.submit(e.politicianForm)}),t.TgZ(1,"mat-form-field",1)(2,"mat-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"input",2),t.TgZ(6,"mat-error"),t._uU(7),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"input",3),t.YNc(14,H,3,3,"mat-error",4),t.YNc(15,X,3,3,"mat-error",4),t.TgZ(16,"mat-hint"),t._uU(17),t.ALo(18,"translate"),t.qZA(),t._UZ(19,"mat-datepicker-toggle",5)(20,"mat-datepicker",6,7),t.qZA(),t.TgZ(22,"mat-form-field",8)(23,"mat-label"),t._uU(24),t.ALo(25,"translate"),t.qZA(),t._UZ(26,"input",9),t.YNc(27,z,3,3,"mat-error",4),t.YNc(28,K,3,3,"mat-error",4),t.qZA(),t.TgZ(29,"mat-form-field",8)(30,"mat-label"),t._uU(31),t.ALo(32,"translate"),t.qZA(),t._UZ(33,"input",10),t.TgZ(34,"mat-error"),t._uU(35),t.ALo(36,"translate"),t.qZA()(),t.TgZ(37,"mat-form-field",8)(38,"mat-label"),t._uU(39),t.ALo(40,"translate"),t.qZA(),t._UZ(41,"input",11),t.TgZ(42,"mat-error"),t._uU(43),t.ALo(44,"translate"),t.qZA()(),t.TgZ(45,"mat-form-field",8)(46,"mat-label"),t._uU(47),t.ALo(48,"translate"),t.qZA(),t._UZ(49,"input",12),t.TgZ(50,"mat-error"),t._uU(51),t.ALo(52,"translate"),t.qZA()(),t.TgZ(53,"div",13)(54,"button",14),t.NdJ("click",function(){return e.cancel()}),t._uU(55),t.ALo(56,"translate"),t.qZA(),t.TgZ(57,"button",15),t._uU(58),t.ALo(59,"translate"),t.ALo(60,"translate"),t.qZA()()()),2&i){const o=t.MAs(21);t.Q6J("formGroup",e.politicianForm),t.xp6(3),t.Oqu(t.lcZ(4,20,"politician-name")),t.xp6(4),t.Oqu(t.lcZ(8,22,"form-required")),t.xp6(4),t.Oqu(t.lcZ(12,24,"birthday")),t.xp6(2),t.Q6J("matDatepicker",o),t.xp6(1),t.Q6J("ngIf",e.politicianForm.controls.birthDate.hasError("required")),t.xp6(1),t.Q6J("ngIf",e.politicianForm.controls.birthDate.hasError("bellowMinimumAge")),t.xp6(2),t.Oqu(t.lcZ(18,26,"year-format")),t.xp6(2),t.Q6J("for",o),t.xp6(5),t.Oqu(t.lcZ(25,28,"politician-profileImageUrl")),t.xp6(3),t.Q6J("ngIf",e.politicianForm.controls.imageUrl.hasError("required")),t.xp6(1),t.Q6J("ngIf",e.politicianForm.controls.imageUrl.hasError("pattern")),t.xp6(3),t.Oqu(t.lcZ(32,30,"politician-twitterUrl")),t.xp6(4),t.Oqu(t.lcZ(36,32,"form-bad-url-pattern")),t.xp6(4),t.Oqu(t.lcZ(40,34,"politician-instagramUrl")),t.xp6(4),t.Oqu(t.lcZ(44,36,"form-bad-url-pattern")),t.xp6(4),t.Oqu(t.lcZ(48,38,"politician-facebookUrl")),t.xp6(4),t.Oqu(t.lcZ(52,40,"form-bad-url-pattern")),t.xp6(4),t.hij(" ",t.lcZ(56,42,"back")," "),t.xp6(3),t.hij(" ",e.politician?t.lcZ(59,44,"update"):t.lcZ(60,46,"create")," ")}},dependencies:[h.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,U.lW,F.Nt,f.KE,f.hX,f.bx,f.TO,f.R9,C.Mq,C.hl,C.nW,Z.X$]}),n})();function V(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"app-politician-form",3),t.NdJ("cancelEvent",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.navigateBack())})("submitEvent",function(o){t.CHM(i);const l=t.oxw();return t.KtG(l.onSubmit(o))}),t.qZA()}2&n&&t.Q6J("politician",a.ngIf)}let W=(()=>{class n{constructor(i,e,o,l){this._route=i,this._router=e,this._politicalPartiesService=o,this._store=l}ngOnInit(){this.politician$=this._route.paramMap.pipe((0,G.w)(i=>(this.politicalPartyId=i.get("id"),this.politicianId=i.get("politicianId"),this._store.dispatch(new u.GetPoliticalParty(this.politicalPartyId)),this._politicalPartiesService.getPolitician(this.politicianId))))}onSubmit(i){const e={id:this.politicianId,...i};this._store.dispatch(new u.EditPolitician(e)).subscribe(()=>this.navigateBack())}navigateBack(){this._router.navigate(["/political-party/detail/"+this.politicalPartyId])}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(_.gz),t.Y36(_.F0),t.Y36(L.A),t.Y36(s.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-politician"]],decls:7,vars:6,consts:[[1,"container"],[1,"container__content"],[3,"politician","cancelEvent","submitEvent",4,"ngIf"],[3,"politician","cancelEvent","submitEvent"]],template:function(i,e){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.YNc(5,V,1,1,"app-politician-form",2),t.ALo(6,"async"),t.qZA()()),2&i&&(t.xp6(3),t.Oqu(t.lcZ(4,2,"politician-edit")),t.xp6(2),t.Q6J("ngIf",t.lcZ(6,4,e.politician$)))},dependencies:[h.O5,S,h.Ov,Z.X$]}),n})();var tt=c(39),b=c(5412);let J=(()=>{class n{constructor(i,e){this.dialogRef=i,this.data=e}cancel(){this.dialogRef.close()}confirm(){this.dialogRef.close(!0)}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(b.so),t.Y36(b.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-confirm-dialog"]],decls:15,vars:12,consts:[["mat-dialog-title",""],[1,"mat-typography"],["align","end"],["mat-flat-button","",3,"click"],["mat-flat-button","","cdkFocusInitial","","color","primary",3,"click"]],template:function(i,e){1&i&&(t.TgZ(0,"h2",0),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.TgZ(3,"mat-dialog-content",1)(4,"h3")(5,"b"),t._uU(6),t.ALo(7,"translate"),t.qZA()()(),t.TgZ(8,"mat-dialog-actions",2)(9,"button",3),t.NdJ("click",function(){return e.cancel()}),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"button",4),t.NdJ("click",function(){return e.confirm()}),t._uU(13),t.ALo(14,"translate"),t.qZA()()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,4,e.data.title)),t.xp6(5),t.Oqu(t.lcZ(7,6,e.data.content)),t.xp6(4),t.Oqu(t.lcZ(11,8,e.data.closeButtonText)),t.xp6(3),t.hij(" ",t.lcZ(14,10,e.data.confirmButtonText),""))},dependencies:[b.uh,b.xY,b.H8,U.lW,Z.X$]}),n})();var M=c(7392),Y=c(9132),T=c(3546),it=c(1591),nt=c(1296);function at(n,a){if(1&n&&(t.TgZ(0,"a",7),t._UZ(1,"img",8),t.qZA()),2&n){const i=t.oxw(2);t.Q6J("href",i.politician.facebookUrl,t.LSH)}}function et(n,a){if(1&n&&(t.TgZ(0,"a",7),t._UZ(1,"img",9),t.qZA()),2&n){const i=t.oxw(2);t.Q6J("href",i.politician.instagramUrl,t.LSH)}}function ot(n,a){if(1&n&&(t.TgZ(0,"a",7),t._UZ(1,"img",10),t.qZA()),2&n){const i=t.oxw(2);t.Q6J("href",i.politician.twitterUrl,t.LSH)}}function rt(n,a){if(1&n){const i=t.EpF();t.ynx(0),t.TgZ(1,"mat-card",1)(2,"app-admin-quick-menu-actions",2),t.NdJ("actionClickEvt",function(o){t.CHM(i);const l=t.oxw();return t.KtG(l.handleActionEvent(o))}),t.qZA(),t.TgZ(3,"mat-card-header")(4,"mat-card-title",3),t._uU(5),t.qZA(),t.TgZ(6,"mat-card-subtitle"),t._uU(7),t.ALo(8,"dateFormatter"),t.qZA()(),t._UZ(9,"img",4),t.TgZ(10,"mat-card-content",5),t.YNc(11,at,2,1,"a",6),t.YNc(12,et,2,1,"a",6),t.YNc(13,ot,2,1,"a",6),t.qZA()(),t.BQk()}if(2&n){const i=t.oxw();t.xp6(5),t.Oqu(i.politician.fullName),t.xp6(2),t.Oqu(t.lcZ(8,6,i.politician.birthDate)),t.xp6(2),t.Q6J("src",i.politician.imageUrl?i.politician.imageUrl:"assets/man-user-svgrepo-com.svg",t.LSH),t.xp6(2),t.Q6J("ngIf",i.politician.facebookUrl),t.xp6(1),t.Q6J("ngIf",i.politician.instagramUrl),t.xp6(1),t.Q6J("ngIf",i.politician.twitterUrl)}}let ct=(()=>{class n{constructor(i,e,o){this._store=i,this._router=e,this._dialog=o}handleActionEvent(i){const e=this._store.selectSnapshot(p.getPoliticalPartyId);switch(i.type){case Y.U.EDIT:this._router.navigate(["/political-party/detail",e,"edit-politician",this.politician.id]);break;case Y.U.DELETE:this.openDialogAndRemovePolitician()}}openDialogAndRemovePolitician(){this._dialog.open(J,{data:{title:"dialog-remove",content:"remove-politician-content",confirmButtonText:"remove-politician",closeButtonText:"dialog-action-cancel"}}).afterClosed().subscribe(o=>{o&&this._store.dispatch(new u.RemovePolitician(this.politician))})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(s.yh),t.Y36(_.F0),t.Y36(b.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-politician"]],inputs:{politician:"politician"},decls:1,vars:1,consts:[[4,"ngIf"],["appearance","outlined",1,"politician-card","mat-elevation-z2"],[3,"actionClickEvt"],[1,"politician-card__title"],["alt","politician_image","mat-card-image","",1,"politician-card__image",3,"src"],[1,"politician-card__media"],["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],["src","assets/icons/facebook.svg","aria-label","redirect to facebook profile of politic","alt","redirect to facebook profile of politic",1,"mat-elevation-z4"],["src","assets/icons/instagram.svg","aria-label","redirect to instagram profile of politic","alt","redirect to instagram profile of politic",1,"mat-elevation-z4"],["src","assets/icons/twitter.svg","aria-label","redirect to twitter profile of politic","alt","redirect to twitter profile of politic",1,"mat-elevation-z4"]],template:function(i,e){1&i&&t.YNc(0,rt,14,8,"ng-container",0),2&i&&t.Q6J("ngIf",e.politician)},dependencies:[h.O5,T.a8,T.dn,T.dk,T.G2,T.$j,T.n5,it.i,nt.l],styles:[".politician-card[_ngcontent-%COMP%]{max-width:30rem}@media only screen and (max-width: 37.5em){.politician-card[_ngcontent-%COMP%]{width:35rem}}.politician-card__title[_ngcontent-%COMP%]{margin-right:3rem}.politician-card__image[_ngcontent-%COMP%]{display:block!important;height:200px!important;object-fit:cover}.politician-card__media[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;margin-top:1rem;height:4rem}.politician-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3rem;transition:all .5s;border-radius:25%}.politician-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{scale:1.1}"]}),n})();var Q=c(1176);let lt=(()=>{class n{constructor(i){this.store=i}transform(i,e){if(!e||null==i)return this.store.dispatch(new Q.x.Set({politicianFilterCount:i.length})),i;const o=i.filter(l=>y.c.textIncludesSearchedValueCaseInsensitive(l.fullName,e));return this.store.dispatch(new Q.x.Set({politicianFilterCount:o.length})),o}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(s.yh,16))},n.\u0275pipe=t.Yjl({name:"filterPoliticians",type:n,pure:!0}),n})();function pt(n,a){1&n&&t._UZ(0,"app-politician",15),2&n&&t.Q6J("politician",a.$implicit)}function st(n,a){1&n&&(t.ynx(0),t.TgZ(1,"span",16),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.BQk()),2&n&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"no-result")))}function mt(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",13),t.YNc(2,pt,1,1,"app-politician",14),t.ALo(3,"filterPoliticians"),t.YNc(4,st,4,3,"ng-container",1),t.ALo(5,"async"),t.qZA(),t.BQk()),2&n){const i=a.ngIf;t.oxw();const e=t.MAs(11),o=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.xi3(3,2,i,e.value)),t.xp6(2),t.Q6J("ngIf",0===t.lcZ(5,5,o.politiciansCount))}}const ut=function(n){return["/political-party/detail",n,"edit"]},dt=function(n){return["/political-party/detail",n,"add-politician"]};function _t(n,a){if(1&n){const i=t.EpF();t.ynx(0),t.TgZ(1,"div",2)(2,"h1",3),t._uU(3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"mat-form-field",6)(7,"mat-label"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t._UZ(10,"input",7,8),t.TgZ(12,"mat-icon",9),t._uU(13,"search"),t.qZA()()(),t.TgZ(14,"div",10)(15,"button",11)(16,"mat-icon"),t._uU(17,"edit"),t.qZA(),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"button",12),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.openDialogAndRemoveParty())}),t.TgZ(21,"mat-icon"),t._uU(22,"delete_forever"),t.qZA(),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.TgZ(25,"button",11),t._uU(26),t.ALo(27,"translate"),t.TgZ(28,"mat-icon"),t._uU(29,"add"),t.qZA()()()()(),t.YNc(30,mt,6,7,"ng-container",1),t.ALo(31,"async"),t.BQk()}if(2&n){const i=a.ngIf,e=t.oxw();t.xp6(3),t.Oqu(i.name),t.xp6(5),t.Oqu(t.lcZ(9,8,"politician-search")),t.xp6(7),t.Q6J("routerLink",t.VKq(18,ut,i.id)),t.xp6(3),t.hij(" ",t.lcZ(19,10,"edit-party")," "),t.xp6(5),t.hij(" ",t.lcZ(24,12,"remove-party")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(20,dt,i.id)),t.xp6(1),t.hij(" ",t.lcZ(27,14,"politician-add")," "),t.xp6(4),t.Q6J("ngIf",t.lcZ(31,16,e.politicians$))}}class v{constructor(a,i,e,o){this.route=a,this.store=i,this._router=e,this.dialog=o}ngOnInit(){this.route.paramMap.subscribe(a=>this.store.dispatch(new u.GetPoliticalParty(a.get("id"))))}openDialogAndRemoveParty(){this.dialog.open(J,{data:{title:"dialog-remove",content:"remove-party-content",confirmButtonText:"remove-party",closeButtonText:"dialog-action-cancel"}}).afterClosed().subscribe(e=>{e&&this.removeParty()})}removeParty(){const a=this.store.selectSnapshot(p.getPoliticalPartyId);a&&this.store.dispatch(new u.RemovePoliticalParty(a)).subscribe(()=>this._router.navigate(["/news"]))}}v.\u0275fac=function(a){return new(a||v)(t.Y36(_.gz),t.Y36(s.yh),t.Y36(_.F0),t.Y36(b.uw))},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-party"]],decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"party"],[1,"party__heading"],[1,"party__actions"],[1,"party__actions__search"],["appearance","outline"],["type","text","matInput",""],["input",""],["color","primary","matSuffix",""],[1,"party__actions__admin-buttons"],["mat-raised-button","","color","primary",1,"button-add",3,"routerLink"],["mat-raised-button","","color","primary",1,"button-add",3,"click"],[1,"politicians"],[3,"politician",4,"ngFor","ngForOf"],[3,"politician"],[1,"no-result"]],template:function(a,i){1&a&&(t.TgZ(0,"section",0),t.YNc(1,_t,32,22,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,i.politicalParty$)))},dependencies:[h.sg,h.O5,_.rH,U.lW,M.Hw,F.Nt,f.KE,f.hX,f.R9,ct,h.Ov,Z.X$,lt],styles:[".party[_ngcontent-%COMP%]{height:100%;grid-column:center-start/center-end}.party__heading[_ngcontent-%COMP%]{font-size:3rem;text-align:center;padding:1rem 0 2rem;letter-spacing:.1rem;word-spacing:.5rem;text-transform:uppercase}@media only screen and (max-width: 75em){.party__heading[_ngcontent-%COMP%]{line-height:3.5rem}}.party__subheading[_ngcontent-%COMP%]{font-size:2rem}.party__actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:3rem;gap:1.5rem}@media only screen and (max-width: 37.5em){.party__actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}}.party__actions__search[_ngcontent-%COMP%]{align-self:center}.party__actions__search[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%!important}.party__actions__admin-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem 0}.party[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{grid-column:2/-1}@media only screen and (max-width: 37.5em){.party[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{grid-column:auto}}.politicians[_ngcontent-%COMP%]{grid-column:center-start/center-end;display:grid;padding-bottom:2rem;grid-template-columns:repeat(auto-fit,minmax(22rem,1fr));gap:3.3rem}@media only screen and (max-width: 53.125em){.politicians[_ngcontent-%COMP%]{gap:2rem}}@media only screen and (max-width: 37.5em){.politicians[_ngcontent-%COMP%]{grid-template-columns:1fr;justify-items:center}}.no-result[_ngcontent-%COMP%]{font-size:3rem;grid-column:1/-1}@media only screen and (max-width: 53.125em){.no-result[_ngcontent-%COMP%]{line-height:4rem}}"]}),(0,d.gn)([(0,s.Ph)(tt.t.getPoliticianFilterCount)],v.prototype,"politiciansCount",void 0),(0,d.gn)([(0,s.Ph)(p)],v.prototype,"politicalParty$",void 0),(0,d.gn)([(0,s.Ph)(p.getPoliticians)],v.prototype,"politicians$",void 0);let ft=(()=>{class n{constructor(i,e,o){this._store=i,this._router=e,this._route=o}ngOnInit(){this._route.paramMap.subscribe(i=>this.politicalPartyId=i.get("id"))}onSubmit(i){this._store.dispatch(new u.AddPolitician(i)).subscribe(()=>this.navigateBack())}navigateBack(){this._router.navigate(["/political-party/detail/"+this.politicalPartyId])}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(s.yh),t.Y36(_.F0),t.Y36(_.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-politician"]],decls:6,vars:3,consts:[[1,"container"],[1,"container__content"],[3,"submitEvent","cancelEvent"]],template:function(i,e){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-politician-form",2),t.NdJ("submitEvent",function(l){return e.onSubmit(l)})("cancelEvent",function(){return e.navigateBack()}),t.qZA()()()),2&i&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"politician-new")))},dependencies:[S,Z.X$]}),n})();var gt=c(7579),R=c(9521),q=c(7331);function ht(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-required")))}function yt(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-bad-url-pattern")))}function Pt(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"mat-chip-row",13),t.NdJ("removed",function(){const l=t.CHM(i).$implicit,P=t.oxw();return t.KtG(P.removeTag(l))})("edited",function(o){const P=t.CHM(i).$implicit,I=t.oxw();return t.KtG(I.editTag(P,o))}),t._uU(1),t.TgZ(2,"button",14)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&n){const i=a.$implicit;t.Q6J("editable",!0),t.xp6(1),t.hij(" ",i," "),t.xp6(1),t.uIk("aria-label","remove "+i)}}function Zt(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-date")))}function vt(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-minimum-age")))}function At(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-required")))}function bt(n,a){1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"form-bad-url-pattern")))}function Ct(n,a){if(1&n){const i=t.EpF();t.ynx(0,20),t.TgZ(1,"h3",21),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"mat-form-field",22)(5,"mat-label"),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._UZ(8,"input",23),t.TgZ(9,"mat-error"),t._uU(10),t.ALo(11,"translate"),t.qZA()(),t.TgZ(12,"mat-form-field",22)(13,"mat-label"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._UZ(16,"input",24),t.YNc(17,Zt,3,3,"mat-error",4),t.YNc(18,vt,3,3,"mat-error",4),t.TgZ(19,"mat-hint"),t._uU(20),t.ALo(21,"translate"),t.qZA(),t._UZ(22,"mat-datepicker-toggle",25)(23,"mat-datepicker",26,27),t.qZA(),t.TgZ(25,"mat-form-field",1)(26,"mat-label"),t._uU(27),t.ALo(28,"translate"),t.qZA(),t._UZ(29,"input",3),t.YNc(30,At,3,3,"mat-error",4),t.YNc(31,bt,3,3,"mat-error",4),t.qZA(),t.TgZ(32,"mat-form-field",1)(33,"mat-label"),t._uU(34),t.ALo(35,"translate"),t.qZA(),t._UZ(36,"input",28),t.TgZ(37,"mat-error"),t._uU(38),t.ALo(39,"translate"),t.qZA()(),t.TgZ(40,"mat-form-field",1)(41,"mat-label"),t._uU(42),t.ALo(43,"translate"),t.qZA(),t._UZ(44,"input",29),t.TgZ(45,"mat-error"),t._uU(46),t.ALo(47,"translate"),t.qZA()(),t.TgZ(48,"mat-form-field",1)(49,"mat-label"),t._uU(50),t.ALo(51,"translate"),t.qZA(),t._UZ(52,"input",30),t.TgZ(53,"mat-error"),t._uU(54),t.ALo(55,"translate"),t.qZA()(),t.TgZ(56,"div",31)(57,"button",32),t.NdJ("click",function(){const l=t.CHM(i).index,P=t.oxw(2);return t.KtG(P.removePolitician(l))}),t.TgZ(58,"mat-icon"),t._uU(59,"clear"),t.qZA()()(),t.BQk()}if(2&n){const i=a.$implicit,e=a.index,o=t.MAs(24);t.Q6J("formGroupName",e),t.xp6(2),t.AsE("",e+1+". "," ",t.lcZ(3,20,"politician"),""),t.xp6(4),t.Oqu(t.lcZ(7,22,"politician-name")),t.xp6(4),t.Oqu(t.lcZ(11,24,"form-required")),t.xp6(4),t.Oqu(t.lcZ(15,26,"birthday")),t.xp6(2),t.Q6J("matDatepicker",o),t.xp6(1),t.Q6J("ngIf",i.controls.birthDate.hasError("required")),t.xp6(1),t.Q6J("ngIf",i.controls.birthDate.hasError("bellowMinimumAge")),t.xp6(2),t.Oqu(t.lcZ(21,28,"year-format")),t.xp6(2),t.Q6J("for",o),t.xp6(5),t.Oqu(t.lcZ(28,30,"politician-profileImageUrl")),t.xp6(3),t.Q6J("ngIf",i.controls.imageUrl.hasError("required")),t.xp6(1),t.Q6J("ngIf",i.controls.imageUrl.hasError("pattern")),t.xp6(3),t.Oqu(t.lcZ(35,32,"politician-twitterUrl")),t.xp6(4),t.Oqu(t.lcZ(39,34,"form-bad-url-pattern")),t.xp6(4),t.Oqu(t.lcZ(43,36,"politician-instagramUrl")),t.xp6(4),t.Oqu(t.lcZ(47,38,"form-bad-url-pattern")),t.xp6(4),t.Oqu(t.lcZ(51,40,"politician-facebookUrl")),t.xp6(4),t.Oqu(t.lcZ(55,42,"form-bad-url-pattern"))}}function Tt(n,a){if(1&n){const i=t.EpF();t.ynx(0,15),t.TgZ(1,"h2",16),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.YNc(4,Ct,60,44,"ng-container",17),t.TgZ(5,"div",18)(6,"button",19),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.addPolitician())}),t.TgZ(7,"mat-icon"),t._uU(8,"add"),t.qZA()()(),t.BQk()}if(2&n){const i=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"politician-add")),t.xp6(2),t.Q6J("ngForOf",null==i.politiciansFormArray?null:i.politiciansFormArray.controls)}}let B=(()=>{class n extends w{constructor(i){super(),this._fb=i,this.partyForm=this._fb.group({name:this._fb.nonNullable.control("",{validators:r.kI.required}),imageUrl:this._fb.nonNullable.control("",{validators:[r.kI.required,r.kI.pattern(y.c.URL_PATTERN)]}),tags:this._fb.nonNullable.control([""],r.kI.required),politicians:this._fb.array([])}),this.tags=[],this.addOnBlur=!0,this.separatorKeysCodes=[R.K5,R.OC]}ngOnInit(){this.addPolitician(),this.party&&(this.partyForm.removeControl("politicians"),this.tags=[...this.party.tags],this.partyForm.patchValue({name:this.party.name,imageUrl:this.party.imageUrl,tags:[...this.party.tags]}))}get politiciansFormArray(){return this.partyForm?.controls.politicians??null}submit(){this.partyForm.valid&&(this.partyForm.patchValue({tags:[...this.tags]}),this.submitEvent.emit(this.partyForm.value))}addPolitician(){const i=this._fb.group({fullName:this._fb.control("",{nonNullable:!0,validators:[r.kI.required]}),birthDate:this._fb.control("",{nonNullable:!0,validators:[r.kI.required,k()]}),imageUrl:this._fb.control("",{nonNullable:!0,validators:[r.kI.required,r.kI.pattern(y.c.URL_PATTERN)]}),facebookUrl:this._fb.control("",r.kI.pattern(y.c.URL_PATTERN)),instagramUrl:this._fb.control("",r.kI.pattern(y.c.URL_PATTERN)),twitterUrl:this._fb.control("",r.kI.pattern(y.c.URL_PATTERN))});this.politiciansFormArray&&this.politiciansFormArray.push(i)}removePolitician(i){this.politiciansFormArray&&this.politiciansFormArray.removeAt(i)}addTag(i){const e=(i.value||"").trim();e&&this.tags.push(e),i.chipInput.clear()}removeTag(i){const e=this.tags.indexOf(i);e>=0&&this.tags.splice(e,1)}editTag(i,e){const o=e.value.trim();if(!o)return void this.removeTag(i);const l=this.tags.indexOf(i);l>=0&&(this.tags[l]=o)}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(r.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-party-form"]],inputs:{party:"party"},features:[t.qOj],decls:40,vars:37,consts:[[1,"form-content",3,"formGroup","ngSubmit"],["appearance","outline",1,"span-12"],["matInput","","formControlName","name"],["matInput","","formControlName","imageUrl"],[4,"ngIf"],["formControlName","tags"],["chipGrid",""],[3,"editable","removed","edited",4,"ngFor","ngForOf"],[3,"placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["formArrayName","politicians",4,"ngIf"],[1,"form-footer","span-12"],["type","button","mat-raised-button","",1,"button-add",3,"click"],["type","submit","mat-raised-button","","color","primary",1,"button-add"],[3,"editable","removed","edited"],["matChipRemove",""],["formArrayName","politicians"],[1,"span-12"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"span-12","add-politician-container"],["type","button","mat-fab","","color","primary",3,"click"],[3,"formGroupName"],[1,"span-12","politician-number"],["appearance","outline",1,"span-6"],["matInput","","formControlName","fullName"],["matInput","","formControlName","birthDate",3,"matDatepicker"],["matIconSuffix","",3,"for"],["startView","multi-year"],["picker",""],["matInput","","formControlName","twitterUrl"],["matInput","","formControlName","instagramUrl"],["matInput","","formControlName","facebookUrl"],[1,"span-12","delete-politician"],["type","button","mat-fab","","color","warn",3,"click"]],template:function(i,e){if(1&i&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return e.submit()}),t.TgZ(1,"mat-form-field",1)(2,"mat-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"input",2),t.TgZ(6,"mat-error"),t._uU(7),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"input",3),t.YNc(14,ht,3,3,"mat-error",4),t.YNc(15,yt,3,3,"mat-error",4),t.qZA(),t.TgZ(16,"mat-form-field",1)(17,"mat-label"),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"mat-chip-grid",5,6),t.YNc(22,Pt,5,3,"mat-chip-row",7),t.TgZ(23,"input",8),t.NdJ("matChipInputTokenEnd",function(l){return e.addTag(l)}),t.ALo(24,"translate"),t.qZA()(),t.TgZ(25,"mat-hint"),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"mat-error"),t._uU(29),t.ALo(30,"translate"),t.qZA()(),t.YNc(31,Tt,9,4,"ng-container",9),t.TgZ(32,"div",10)(33,"button",11),t.NdJ("click",function(){return e.cancel()}),t._uU(34),t.ALo(35,"translate"),t.qZA(),t.TgZ(36,"button",12),t._uU(37),t.ALo(38,"translate"),t.ALo(39,"translate"),t.qZA()()()),2&i){const o=t.MAs(21);t.Q6J("formGroup",e.partyForm),t.xp6(3),t.Oqu(t.lcZ(4,17,"party-name")),t.xp6(4),t.Oqu(t.lcZ(8,19,"form-required")),t.xp6(4),t.Oqu(t.lcZ(12,21,"party-image")),t.xp6(3),t.Q6J("ngIf",e.partyForm.controls.imageUrl.hasError("required")),t.xp6(1),t.Q6J("ngIf",e.partyForm.controls.imageUrl.hasError("pattern")),t.xp6(3),t.Oqu(t.lcZ(19,23,"party-tags")),t.xp6(4),t.Q6J("ngForOf",e.tags),t.xp6(1),t.Q6J("placeholder",t.lcZ(24,25,"party-tag-placeholder"))("matChipInputFor",o)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes)("matChipInputAddOnBlur",e.addOnBlur),t.xp6(3),t.Oqu(t.lcZ(27,27,"chips-hint")),t.xp6(3),t.Oqu(t.lcZ(30,29,"chips-required")),t.xp6(2),t.Q6J("ngIf",!e.party),t.xp6(3),t.hij(" ",t.lcZ(35,31,"back")," "),t.xp6(3),t.hij(" ",e.party?t.lcZ(38,33,"update"):t.lcZ(39,35,"create")," ")}},dependencies:[h.sg,h.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE,U.lW,U.cs,q.RA,q.oH,q.qH,q.z3,M.Hw,F.Nt,f.KE,f.hX,f.bx,f.TO,f.R9,C.Mq,C.hl,C.nW,Z.X$],styles:[".politician-number[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700}.add-politician-container[_ngcontent-%COMP%], .delete-politician[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),n})();function xt(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"app-party-form",4),t.NdJ("submitEvent",function(o){t.CHM(i);const l=t.oxw(2);return t.KtG(l.onSubmit(o))})("cancelEvent",function(){t.CHM(i);const o=t.oxw().ngIf,l=t.oxw();return t.KtG(l.navigateBack(o.id))}),t.qZA()}if(2&n){const i=t.oxw().ngIf;t.Q6J("party",i)}}function Ut(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"h1"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.YNc(4,xt,1,1,"app-party-form",3),t.BQk()),2&n){const i=a.ngIf;t.xp6(2),t.Oqu(t.lcZ(3,2,"admin-party-edit")),t.xp6(2),t.Q6J("ngIf",i.id)}}const qt=[{path:"",redirectTo:"/news",pathMatch:"full"},{path:"add",component:(()=>{class n{constructor(i,e,o){this._router=i,this._notificationService=e,this._store=o}onSubmit(i){i.politicians.length<1?this._notificationService.showError("error-politician-required"):this._store.dispatch(new u.CreatePoliticalParty(i)).subscribe(()=>this.navigateBack())}navigateBack(){this._router.navigate(["/news"])}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(_.F0),t.Y36(N.g),t.Y36(s.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-party"]],decls:6,vars:3,consts:[[1,"container"],[1,"container__content"],[3,"submitEvent","cancelEvent"]],template:function(i,e){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-party-form",2),t.NdJ("submitEvent",function(l){return e.onSubmit(l)})("cancelEvent",function(){return e.navigateBack()}),t.qZA()()()),2&i&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"admin-party-add")))},dependencies:[B,Z.X$]}),n})()},{path:"detail/:id",component:v},{path:"detail/:id/add-politician",component:ft},{path:"detail/:id/edit-politician/:politicianId",component:W},{path:"detail/:id/edit",component:(()=>{class n{constructor(i,e,o){this._route=i,this._router=e,this._store=o,this.destroy$=new gt.x}ngOnInit(){this._route.paramMap.subscribe(i=>{this._store.dispatch(new u.GetPoliticalParty(i.get("id"))),this.politicalParty$=this._store.select(p.getPoliticalParty)})}ngOnDestroy(){this.destroy$.next()}onSubmit(i){const e=this._store.selectSnapshot(p);this._store.dispatch(new u.UpdatePoliticalParty({...i,id:e.id})).subscribe(()=>this.navigateBack(e.id))}navigateBack(i){this._router.navigate(["/political-party/detail/"+i])}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(_.gz),t.Y36(_.F0),t.Y36(s.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-party"]],decls:4,vars:3,consts:[[1,"container"],[1,"container__content"],[4,"ngIf"],[3,"party","submitEvent","cancelEvent",4,"ngIf"],[3,"party","submitEvent","cancelEvent"]],template:function(i,e){1&i&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,Ut,5,4,"ng-container",2),t.ALo(3,"async"),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,e.politicalParty$)))},dependencies:[h.O5,B,h.Ov,Z.X$]}),n})()}];let Ot=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[_.Bz.forChild(qt),_.Bz]}),n})(),Ft=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.ez,Ot,D.m,s.$l.forFeature([p])]}),n})()}}]);