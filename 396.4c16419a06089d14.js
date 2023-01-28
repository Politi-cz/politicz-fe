"use strict";(self.webpackChunkpoliticz_fe=self.webpackChunkpoliticz_fe||[]).push([[396],{5396:(V,A,e)=>{e.r(A),e.d(A,{PartyModule:()=>W});var m,n,s=e(655),p=e(8426);(n=m||(m={})).GetPoliticalParty=(()=>{class l{constructor(P){this.payload=P}}return l.type="[PoliticalParty] LoadPoliticalPartyById",l})(),n.AddPolitician=(()=>{class l{constructor(P){this.payload=P}}return l.type="[PoliticalParty] Add politician",l})(),n.EditPolitician=(()=>{class l{constructor(P){this.payload=P}}return l.type="[PoliticalParty] Edit politician",l})(),n.RemovePolitician=(()=>{class l{constructor(P){this.payload=P}}return l.type="[PoliticalParty] Remove politician",l})();var C=e(8505),t=e(4650),x=e(1027);let r=class{constructor(a){this.politicalPartyService=a}static getPoliticalParty(a){return a}static getPoliticalPartyId(a){return a.id}static getPoliticians(a){return a.politicians}getPoliticalParty(a,{payload:i}){return this.politicalPartyService.getPoliticalParty(i).pipe((0,C.b)(o=>a.setState(o)))}addPolitician(a,{payload:i}){return this.politicalPartyService.addPolitician(a.getState().id,i)}editPolitician(a,{payload:i}){return this.politicalPartyService.editPolitician(i)}removePolitician(a,{payload:i}){return this.politicalPartyService.removePolitician(i.id).pipe((0,C.b)(()=>{const o=a.getState().politicians.filter(c=>c.id!==i.id);a.patchState({politicians:o})}))}};r.\u0275fac=function(a){return new(a||r)(t.LFG(x.A))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac}),(0,s.gn)([(0,p.aU)(m.GetPoliticalParty,{cancelUncompleted:!0})],r.prototype,"getPoliticalParty",null),(0,s.gn)([(0,p.aU)(m.AddPolitician)],r.prototype,"addPolitician",null),(0,s.gn)([(0,p.aU)(m.EditPolitician)],r.prototype,"editPolitician",null),(0,s.gn)([(0,p.aU)(m.RemovePolitician)],r.prototype,"removePolitician",null),(0,s.gn)([(0,p.Qf)()],r,"getPoliticalParty",null),(0,s.gn)([(0,p.Qf)()],r,"getPoliticalPartyId",null),(0,s.gn)([(0,p.Qf)()],r,"getPoliticians",null),r=(0,s.gn)([(0,p.ZM)({name:"politicalPartyState",defaults:{id:"",name:"kokodzina",image:{name:"",extension:""},politicians:[],tags:[]}})],r);var E=e(5901),_=e(6895),q=e(3900),d=e(8767),u=e(4006),b=e(4859),U=e(4144),f=e(9549),v=e(9602),y=e(9383);let T=(()=>{class n{constructor(i){this._fb=i,this.submitEvent=new t.vpe,this.cancelEvent=new t.vpe}ngOnInit(){this.politicianForm=this._fb.group({fullName:this._fb.control(this.politician?.fullName,{nonNullable:!0,validators:[u.kI.required]}),birthDate:this._fb.control(this.politician?.birthDate,{nonNullable:!0,validators:[u.kI.required]}),profileImageUrl:this._fb.control(this.politician?.profileImageUrl,{nonNullable:!0,validators:[u.kI.required]}),facebookUrl:this._fb.control(this.politician?.facebookUrl??null),instagramUrl:this._fb.control(this.politician?.instagramUrl??null),twitterUrl:this._fb.control(this.politician?.twitterUrl??null)})}submit(){this.politicianForm.valid&&this.submitEvent.emit(this.politicianForm.value)}cancel(){this.cancelEvent.emit()}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(u.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-politician-form"]],inputs:{politician:"politician"},outputs:{submitEvent:"submitEvent",cancelEvent:"cancelEvent"},decls:52,vars:37,consts:[[1,"form-content",3,"formGroup","ngSubmit"],["appearance","outline",1,"span-6"],["matInput","","formControlName","fullName"],["matInput","","formControlName","birthDate",3,"matDatepicker"],["matIconSuffix","",3,"for"],["touchUi","","startView","multi-year"],["picker",""],["appearance","outline",1,"span-12"],["matInput","","formControlName","profileImageUrl"],["matInput","","formControlName","twitterUrl"],["matInput","","formControlName","instagramUrl"],["matInput","","formControlName","facebookUrl"],[1,"form-footer","span-12"],["type","button","mat-raised-button","",1,"button-add",3,"click"],["type","submit","mat-raised-button","","color","primary",1,"button-add",3,"disabled"]],template:function(i,o){if(1&i&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"mat-form-field",1)(2,"mat-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"input",2),t.TgZ(6,"mat-error"),t._uU(7),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"input",3),t.TgZ(14,"mat-error"),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"mat-hint"),t._uU(18,"DD/MM/YYYY"),t.qZA(),t._UZ(19,"mat-datepicker-toggle",4)(20,"mat-datepicker",5,6),t.qZA(),t.TgZ(22,"mat-form-field",7)(23,"mat-label"),t._uU(24),t.ALo(25,"translate"),t.qZA(),t._UZ(26,"input",8),t.TgZ(27,"mat-error"),t._uU(28),t.ALo(29,"translate"),t.qZA()(),t.TgZ(30,"mat-form-field",7)(31,"mat-label"),t._uU(32),t.ALo(33,"translate"),t.qZA(),t._UZ(34,"input",9),t.qZA(),t.TgZ(35,"mat-form-field",7)(36,"mat-label"),t._uU(37),t.ALo(38,"translate"),t.qZA(),t._UZ(39,"input",10),t.qZA(),t.TgZ(40,"mat-form-field",7)(41,"mat-label"),t._uU(42),t.ALo(43,"translate"),t.qZA(),t._UZ(44,"input",11),t.qZA(),t.TgZ(45,"div",12)(46,"button",13),t.NdJ("click",function(){return o.cancel()}),t._uU(47),t.ALo(48,"translate"),t.qZA(),t.TgZ(49,"button",14),t._uU(50),t.ALo(51,"translate"),t.qZA()()()),2&i){const c=t.MAs(21);t.Q6J("formGroup",o.politicianForm),t.xp6(3),t.Oqu(t.lcZ(4,15,"politician-name")),t.xp6(4),t.Oqu(t.lcZ(8,17,"form-required")),t.xp6(4),t.Oqu(t.lcZ(12,19,"birthday")),t.xp6(2),t.Q6J("matDatepicker",c),t.xp6(2),t.Oqu(t.lcZ(16,21,"form-date")),t.xp6(4),t.Q6J("for",c),t.xp6(5),t.Oqu(t.lcZ(25,23,"politician-profileImageUrl")),t.xp6(4),t.Oqu(t.lcZ(29,25,"form-required")),t.xp6(4),t.Oqu(t.lcZ(33,27,"politician-twitterUrl")),t.xp6(5),t.Oqu(t.lcZ(38,29,"politician-instagramUrl")),t.xp6(5),t.Oqu(t.lcZ(43,31,"politician-facebookUrl")),t.xp6(5),t.hij(" ",t.lcZ(48,33,"back")," "),t.xp6(2),t.Q6J("disabled",!o.politicianForm.valid),t.xp6(1),t.hij(" ",t.lcZ(51,35,"create")," ")}},dependencies:[u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,b.lW,U.Nt,f.KE,f.hX,f.bx,f.TO,f.R9,v.Mq,v.hl,v.nW,y.X$]}),n})();function M(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"app-politician-form",3),t.NdJ("cancelEvent",function(){t.CHM(i);const c=t.oxw();return t.KtG(c.navigateBack())})("submitEvent",function(c){t.CHM(i);const l=t.oxw();return t.KtG(l.onSubmit(c))}),t.qZA()}2&n&&t.Q6J("politician",a.ngIf)}let F=(()=>{class n{constructor(i,o,c,l){this._route=i,this._router=o,this._politicalPartiesService=c,this._store=l}ngOnInit(){this.politician$=this._route.paramMap.pipe((0,q.w)(i=>(this.politicalPartyId=i.get("id"),this.politicianId=i.get("politicianId"),this._politicalPartiesService.getPolitician(this.politicianId))))}onSubmit(i){const o={id:this.politicianId,...i};this._store.dispatch(new m.EditPolitician(o)),this.navigateBack()}navigateBack(){this._router.navigate(["/political-party"],{queryParams:{id:this.politicalPartyId}})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(d.gz),t.Y36(d.F0),t.Y36(x.A),t.Y36(p.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-politician"]],decls:7,vars:6,consts:[[1,"container"],[1,"container__content"],[3,"politician","cancelEvent","submitEvent",4,"ngIf"],[3,"politician","cancelEvent","submitEvent"]],template:function(i,o){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.YNc(5,M,1,1,"app-politician-form",2),t.ALo(6,"async"),t.qZA()()),2&i&&(t.xp6(3),t.Oqu(t.lcZ(4,2,"politician-edit")),t.xp6(2),t.Q6J("ngIf",t.lcZ(6,4,o.politician$)))},dependencies:[_.O5,T,_.Ov,y.X$]}),n})();var S=e(39),L=e(7392),I=e(9132),h=e(3546),w=e(1591),N=e(1296);function k(n,a){if(1&n&&(t.TgZ(0,"a",6),t._UZ(1,"img",7),t.qZA()),2&n){const i=t.oxw(2);t.Q6J("href",i.politician.facebookUrl,t.LSH)}}function J(n,a){if(1&n&&(t.TgZ(0,"a",6),t._UZ(1,"img",8),t.qZA()),2&n){const i=t.oxw(2);t.Q6J("href",i.politician.instagramUrl,t.LSH)}}function Y(n,a){if(1&n&&(t.TgZ(0,"a",6),t._UZ(1,"img",9),t.qZA()),2&n){const i=t.oxw(2);t.Q6J("href",i.politician.twitterUrl,t.LSH)}}function Q(n,a){if(1&n){const i=t.EpF();t.ynx(0),t.TgZ(1,"mat-card",1)(2,"app-admin-quick-menu-actions",2),t.NdJ("actionClickEvt",function(c){t.CHM(i);const l=t.oxw();return t.KtG(l.handleActionEvent(c))}),t.qZA(),t.TgZ(3,"mat-card-header")(4,"mat-card-title"),t._uU(5),t.qZA(),t.TgZ(6,"mat-card-subtitle"),t._uU(7),t.ALo(8,"dateFormatter"),t.qZA()(),t._UZ(9,"img",3),t.TgZ(10,"mat-card-content",4),t.YNc(11,k,2,1,"a",5),t.YNc(12,J,2,1,"a",5),t.YNc(13,Y,2,1,"a",5),t.qZA()(),t.BQk()}if(2&n){const i=t.oxw();t.xp6(5),t.Oqu(i.politician.fullName),t.xp6(2),t.Oqu(t.lcZ(8,5,i.politician.birthDate)),t.xp6(4),t.Q6J("ngIf",i.politician.facebookUrl),t.xp6(1),t.Q6J("ngIf",i.politician.instagramUrl),t.xp6(1),t.Q6J("ngIf",i.politician.twitterUrl)}}let z=(()=>{class n{constructor(i,o){this._store=i,this._router=o}handleActionEvent(i){const o=this._store.selectSnapshot(r.getPoliticalPartyId);switch(i.type){case I.U.EDIT:this._router.navigate(["/political-party",o,"edit",this.politician.id]);break;case I.U.DELETE:this._store.dispatch(new m.RemovePolitician(this.politician))}}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(p.yh),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-politician"]],inputs:{politician:"politician"},decls:1,vars:1,consts:[[4,"ngIf"],["appearance","outlined",1,"politician-card","mat-elevation-z2"],[3,"actionClickEvt"],["mat-card-image","","src","assets/man-user-svgrepo-com.svg"],[1,"politician-card__media"],["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],["src","assets/icons/facebook.svg","aria-label","redirect to facebook profile of politic","alt","redirect to facebook profile of politic",1,"mat-elevation-z4"],["src","assets/icons/instagram.svg","aria-label","redirect to instagram profile of politic","alt","redirect to instagram profile of politic",1,"mat-elevation-z4"],["src","assets/icons/twitter.svg","aria-label","redirect to twitter profile of politic","alt","redirect to twitter profile of politic",1,"mat-elevation-z4"]],template:function(i,o){1&i&&t.YNc(0,Q,14,7,"ng-container",0),2&i&&t.Q6J("ngIf",o.politician)},dependencies:[_.O5,h.a8,h.dn,h.dk,h.G2,h.$j,h.n5,w.i,N.l],styles:[".politician-card__media[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;margin-top:1rem}.politician-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3.5rem;transition:all .5s;border-radius:25%}.politician-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{scale:1.1}"]}),n})();var B=e(4750),O=e(1176);let $=(()=>{class n{constructor(i){this.store=i}transform(i,o){if(!o||null==i)return this.store.dispatch(new O.x.Set({politicianFilterCount:i.length})),i;const c=i.filter(l=>B.c.textIncludesSearchedValueCaseInsensitive(l.fullName,o));return this.store.dispatch(new O.x.Set({politicianFilterCount:c.length})),c}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(p.yh,16))},n.\u0275pipe=t.Yjl({name:"filterPoliticians",type:n,pure:!0}),n})();function G(n,a){1&n&&t._UZ(0,"app-politician",13),2&n&&t.Q6J("politician",a.$implicit)}function R(n,a){1&n&&(t.ynx(0),t.TgZ(1,"span",14),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.BQk()),2&n&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"no-result")))}function X(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",11),t.YNc(2,G,1,1,"app-politician",12),t.ALo(3,"filterPoliticians"),t.YNc(4,R,4,3,"ng-container",1),t.ALo(5,"async"),t.qZA(),t.BQk()),2&n){const i=a.ngIf;t.oxw();const o=t.MAs(11),c=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.xi3(3,2,i,o.value)),t.xp6(2),t.Q6J("ngIf",0===t.lcZ(5,5,c.politiciansCount))}}const j=function(n){return["/political-party",n,"add"]};function D(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",2)(2,"h1",3),t._uU(3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"mat-form-field",6)(7,"mat-label"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t._UZ(10,"input",7,8),t.TgZ(12,"mat-icon",9),t._uU(13,"search"),t.qZA()()(),t.TgZ(14,"button",10)(15,"mat-icon"),t._uU(16,"add"),t.qZA(),t._uU(17),t.ALo(18,"translate"),t.qZA()()(),t.YNc(19,X,6,7,"ng-container",1),t.ALo(20,"async"),t.BQk()),2&n){const i=a.ngIf,o=t.oxw();t.xp6(3),t.Oqu(i.name),t.xp6(5),t.Oqu(t.lcZ(9,5,"politician-search")),t.xp6(6),t.Q6J("routerLink",t.VKq(11,j,i.id)),t.xp6(3),t.hij(" ",t.lcZ(18,7,"add-politician")," "),t.xp6(2),t.Q6J("ngIf",t.lcZ(20,9,o.politicians$))}}class g{constructor(a,i){this.route=a,this.store=i}ngOnInit(){this.route.queryParamMap.subscribe(a=>this.store.dispatch(new m.GetPoliticalParty(a.get("id"))))}}g.\u0275fac=function(a){return new(a||g)(t.Y36(d.gz),t.Y36(p.yh))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-party"]],decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"party"],[1,"party__heading"],[1,"party__actions"],[1,"party__actions__search"],["appearance","outline"],["type","text","matInput",""],["input",""],["color","primary","matSuffix",""],["mat-raised-button","","color","primary",1,"button-add",3,"routerLink"],[1,"politicians"],[3,"politician",4,"ngFor","ngForOf"],[3,"politician"],[1,"no-result"]],template:function(a,i){1&a&&(t.TgZ(0,"section",0),t.YNc(1,D,21,13,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,i.politicalParty$)))},dependencies:[_.sg,_.O5,d.rH,b.lW,L.Hw,U.Nt,f.KE,f.hX,f.R9,z,_.Ov,y.X$,$],styles:[".party[_ngcontent-%COMP%]{height:100%;grid-column:center-start/center-end}.party__heading[_ngcontent-%COMP%]{font-size:3rem;text-align:center;padding:1rem 0 2rem;letter-spacing:.1rem;word-spacing:.5rem;text-transform:uppercase;font-size:bold}@media only screen and (max-width: 75em){.party__heading[_ngcontent-%COMP%]{line-height:3.5rem}}.party__subheading[_ngcontent-%COMP%]{font-size:2rem}.party__actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:3rem;gap:1.5rem}@media only screen and (max-width: 37.5em){.party__actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}}.party__actions__search[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%!important}.party[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{grid-column:2/-1}@media only screen and (max-width: 37.5em){.party[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{grid-column:auto}}.politicians[_ngcontent-%COMP%]{grid-column:center-start/center-end;display:grid;padding-bottom:2rem;grid-template-columns:repeat(auto-fit,minmax(17rem,1fr));gap:3.3rem}@media only screen and (max-width: 53.125em){.politicians[_ngcontent-%COMP%]{gap:2rem}}@media only screen and (max-width: 37.5em){.politicians[_ngcontent-%COMP%]{grid-template-columns:1fr}}.no-result[_ngcontent-%COMP%]{font-size:3rem;grid-column:1/-1}@media only screen and (max-width: 53.125em){.no-result[_ngcontent-%COMP%]{line-height:4rem}}"]}),(0,s.gn)([(0,p.Ph)(S.t.getPoliticianFilterCount)],g.prototype,"politiciansCount",void 0),(0,s.gn)([(0,p.Ph)(r)],g.prototype,"politicalParty$",void 0),(0,s.gn)([(0,p.Ph)(r.getPoliticians)],g.prototype,"politicians$",void 0);const H=[{path:"",component:g,pathMatch:"full"},{path:":id/add",component:(()=>{class n{constructor(i,o,c){this._store=i,this._router=o,this._route=c}ngOnInit(){this._route.paramMap.subscribe(i=>this.politicalPartyId=i.get("id"))}onSubmit(i){this._store.dispatch(new m.AddPolitician(i)),this.navigateBack()}navigateBack(){this._router.navigate(["/political-party"],{queryParams:{id:this.politicalPartyId}})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(p.yh),t.Y36(d.F0),t.Y36(d.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-politician"]],decls:6,vars:3,consts:[[1,"container"],[1,"container__content"],[3,"submitEvent","cancelEvent"]],template:function(i,o){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-politician-form",2),t.NdJ("submitEvent",function(l){return o.onSubmit(l)})("cancelEvent",function(){return o.navigateBack()}),t.qZA()()()),2&i&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"politician-new")))},dependencies:[T,y.X$]}),n})()},{path:":id/edit/:politicianId",component:F}];let K=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(H),d.Bz]}),n})(),W=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[_.ez,K,E.m,p.$l.forFeature([r])]}),n})()}}]);