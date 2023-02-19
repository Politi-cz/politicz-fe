"use strict";(self.webpackChunkpoliticz_fe=self.webpackChunkpoliticz_fe||[]).push([[42],{42:(ft,q,r)=>{r.r(q),r.d(q,{PartyModule:()=>_t});var u,n,d=r(655),O=r(1585),s=r(8426);(n=u||(u={})).GetPoliticalParty=(()=>{class m{constructor(y){this.payload=y}}return m.type="[PoliticalParty] LoadPoliticalPartyById",m})(),n.CreatePoliticalParty=(()=>{class m{constructor(y){this.payload=y}}return m.type="[Politicalparty] Create political party",m})(),n.UpdatePoliticalParty=(()=>{class m{constructor(y){this.payload=y}}return m.type="[Politicalparty] Update political party",m})(),n.AddPolitician=(()=>{class m{constructor(y){this.payload=y}}return m.type="[PoliticalParty] Add politician",m})(),n.EditPolitician=(()=>{class m{constructor(y){this.payload=y}}return m.type="[PoliticalParty] Edit politician",m})(),n.RemovePolitician=(()=>{class m{constructor(y){this.payload=y}}return m.type="[PoliticalParty] Remove politician",m})();var Z=r(8505),t=r(4650),I=r(1027),F=r(929);let p=class{constructor(a,i){this.politicalPartyService=a,this.notificationService=i}static getPoliticalParty(a){return a}static getPoliticalPartyId(a){return a.id}static getPoliticians(a){return a.politicians}getPoliticalParty(a,{payload:i}){return this.politicalPartyService.getPoliticalParty(i).pipe((0,Z.b)(e=>a.setState(e)))}createPoliticalParty(a,{payload:i}){return this.politicalPartyService.createPoliticalParty(i).pipe((0,Z.b)(e=>{a.patchState({...e}),a.dispatch(new O.t.GetSidenavParties)}))}updatePoliticalParty(a,{payload:i}){return this.politicalPartyService.editPoliticalParty(i).pipe((0,Z.b)(e=>{a.patchState({...e}),a.dispatch(new O.t.GetSidenavParties)}))}addPolitician(a,{payload:i}){return this.politicalPartyService.addPolitician(a.getState().id,i).pipe((0,Z.b)(e=>a.patchState({politicians:[...a.getState().politicians,e]})))}editPolitician(a,{payload:i}){return this.politicalPartyService.editPolitician(i.id,i).pipe((0,Z.b)(e=>{let o=[...a.getState().politicians];const c=o.findIndex(h=>h.id===e.id);if(-1!==c)return o[c]={...e},a.patchState({politicians:[...o]});this.notificationService.showError("Wrong politician id")}))}removePolitician(a,{payload:i}){return this.politicalPartyService.removePolitician(i.id).pipe((0,Z.b)(()=>{const e=a.getState().politicians.filter(o=>o.id!==i.id);a.patchState({politicians:e})}))}};p.\u0275fac=function(a){return new(a||p)(t.LFG(I.A),t.LFG(F.g))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac}),(0,d.gn)([(0,s.aU)(u.GetPoliticalParty,{cancelUncompleted:!0})],p.prototype,"getPoliticalParty",null),(0,d.gn)([(0,s.aU)(u.CreatePoliticalParty)],p.prototype,"createPoliticalParty",null),(0,d.gn)([(0,s.aU)(u.UpdatePoliticalParty)],p.prototype,"updatePoliticalParty",null),(0,d.gn)([(0,s.aU)(u.AddPolitician)],p.prototype,"addPolitician",null),(0,d.gn)([(0,s.aU)(u.EditPolitician)],p.prototype,"editPolitician",null),(0,d.gn)([(0,s.aU)(u.RemovePolitician)],p.prototype,"removePolitician",null),(0,d.gn)([(0,s.Qf)()],p,"getPoliticalParty",null),(0,d.gn)([(0,s.Qf)()],p,"getPoliticalPartyId",null),(0,d.gn)([(0,s.Qf)()],p,"getPoliticians",null),p=(0,d.gn)([(0,s.ZM)({name:"PoliticalPartyState",defaults:{id:"",name:"kokodzina",image:"",politicians:[],tags:[]}})],p);var J=r(6417),g=r(6895),Q=r(3900),f=r(8767);let E=(()=>{class n{constructor(){this.submitEvent=new t.vpe,this.cancelEvent=new t.vpe}submit(i){i.valid&&this.submitEvent.emit(i.value)}cancel(){this.cancelEvent.emit()}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],outputs:{submitEvent:"submitEvent",cancelEvent:"cancelEvent"},decls:0,vars:0,template:function(i,e){},encapsulation:2}),n})();var l=r(4006),x=r(4859),T=r(4144),_=r(9549),v=r(9602),C=r(9383);let k=(()=>{class n extends E{constructor(i){super(),this._fb=i,this.politicianForm=this._fb.group({fullname:this._fb.control("",{nonNullable:!0,validators:[l.kI.required]}),birthDate:this._fb.control("",{nonNullable:!0,validators:[l.kI.required]}),profileImageUrl:this._fb.control("",{nonNullable:!0,validators:[l.kI.required]}),facebookUrl:this._fb.control(""),instagramUrl:this._fb.control(""),twitterUrl:this._fb.control("")})}ngOnInit(){this.politician&&this.politicianForm.patchValue({fullname:this.politician.fullname,birthDate:this.politician.birthDate,facebookUrl:this.politician.facebookUrl,instagramUrl:this.politician.instagramUrl,profileImageUrl:this.politician.profileImageUrl,twitterUrl:this.politician.twitterUrl})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(l.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-politician-form"]],inputs:{politician:"politician"},features:[t.qOj],decls:54,vars:41,consts:[[1,"form-content",3,"formGroup","ngSubmit"],["appearance","outline",1,"span-6"],["matInput","","formControlName","fullname"],["matInput","","formControlName","birthDate",3,"matDatepicker"],["matIconSuffix","",3,"for"],["startView","multi-year"],["picker",""],["appearance","outline",1,"span-12"],["matInput","","formControlName","profileImageUrl"],["matInput","","formControlName","twitterUrl"],["matInput","","formControlName","instagramUrl"],["matInput","","formControlName","facebookUrl"],[1,"form-footer","span-12"],["type","button","mat-raised-button","",1,"button-add",3,"click"],["type","submit","mat-raised-button","","color","primary",1,"button-add"]],template:function(i,e){if(1&i&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return e.submit(e.politicianForm)}),t.TgZ(1,"mat-form-field",1)(2,"mat-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"input",2),t.TgZ(6,"mat-error"),t._uU(7),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"input",3),t.TgZ(14,"mat-error"),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"mat-hint"),t._uU(18),t.ALo(19,"translate"),t.qZA(),t._UZ(20,"mat-datepicker-toggle",4)(21,"mat-datepicker",5,6),t.qZA(),t.TgZ(23,"mat-form-field",7)(24,"mat-label"),t._uU(25),t.ALo(26,"translate"),t.qZA(),t._UZ(27,"input",8),t.TgZ(28,"mat-error"),t._uU(29),t.ALo(30,"translate"),t.qZA()(),t.TgZ(31,"mat-form-field",7)(32,"mat-label"),t._uU(33),t.ALo(34,"translate"),t.qZA(),t._UZ(35,"input",9),t.qZA(),t.TgZ(36,"mat-form-field",7)(37,"mat-label"),t._uU(38),t.ALo(39,"translate"),t.qZA(),t._UZ(40,"input",10),t.qZA(),t.TgZ(41,"mat-form-field",7)(42,"mat-label"),t._uU(43),t.ALo(44,"translate"),t.qZA(),t._UZ(45,"input",11),t.qZA(),t.TgZ(46,"div",12)(47,"button",13),t.NdJ("click",function(){return e.cancel()}),t._uU(48),t.ALo(49,"translate"),t.qZA(),t.TgZ(50,"button",14),t._uU(51),t.ALo(52,"translate"),t.ALo(53,"translate"),t.qZA()()()),2&i){const o=t.MAs(22);t.Q6J("formGroup",e.politicianForm),t.xp6(3),t.Oqu(t.lcZ(4,15,"politician-name")),t.xp6(4),t.Oqu(t.lcZ(8,17,"form-required")),t.xp6(4),t.Oqu(t.lcZ(12,19,"birthday")),t.xp6(2),t.Q6J("matDatepicker",o),t.xp6(2),t.Oqu(t.lcZ(16,21,"form-date")),t.xp6(3),t.Oqu(t.lcZ(19,23,"year-format")),t.xp6(2),t.Q6J("for",o),t.xp6(5),t.Oqu(t.lcZ(26,25,"politician-profileImageUrl")),t.xp6(4),t.Oqu(t.lcZ(30,27,"form-required")),t.xp6(4),t.Oqu(t.lcZ(34,29,"politician-twitterUrl")),t.xp6(5),t.Oqu(t.lcZ(39,31,"politician-instagramUrl")),t.xp6(5),t.Oqu(t.lcZ(44,33,"politician-facebookUrl")),t.xp6(5),t.hij(" ",t.lcZ(49,35,"back")," "),t.xp6(3),t.hij(" ",e.politician?t.lcZ(52,37,"update"):t.lcZ(53,39,"create")," ")}},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,x.lW,T.Nt,_.KE,_.hX,_.bx,_.TO,_.R9,v.Mq,v.hl,v.nW,C.X$]}),n})();function Y(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"app-politician-form",3),t.NdJ("cancelEvent",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.navigateBack())})("submitEvent",function(o){t.CHM(i);const c=t.oxw();return t.KtG(c.onSubmit(o))}),t.qZA()}2&n&&t.Q6J("politician",a.ngIf)}let B=(()=>{class n{constructor(i,e,o,c){this._route=i,this._router=e,this._politicalPartiesService=o,this._store=c}ngOnInit(){this.politician$=this._route.paramMap.pipe((0,Q.w)(i=>(this.politicalPartyId=i.get("id"),this.politicianId=i.get("politicianId"),this._store.dispatch(new u.GetPoliticalParty(this.politicalPartyId)),this._politicalPartiesService.getPolitician(this.politicianId))))}onSubmit(i){const e={id:this.politicianId,...i};this._store.dispatch(new u.EditPolitician(e)),this.navigateBack()}navigateBack(){this._router.navigate(["/political-party"],{queryParams:{id:this.politicalPartyId}})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(f.gz),t.Y36(f.F0),t.Y36(I.A),t.Y36(s.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-politician"]],decls:7,vars:6,consts:[[1,"container"],[1,"container__content"],[3,"politician","cancelEvent","submitEvent",4,"ngIf"],[3,"politician","cancelEvent","submitEvent"]],template:function(i,e){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.YNc(5,Y,1,1,"app-politician-form",2),t.ALo(6,"async"),t.qZA()()),2&i&&(t.xp6(3),t.Oqu(t.lcZ(4,2,"politician-edit")),t.xp6(2),t.Q6J("ngIf",t.lcZ(6,4,e.politician$)))},dependencies:[g.O5,k,g.Ov,C.X$]}),n})();var G=r(39),w=r(7392),L=r(9132),A=r(3546),z=r(1591),$=r(1296);function j(n,a){if(1&n&&(t.TgZ(0,"a",6),t._UZ(1,"img",7),t.qZA()),2&n){const i=t.oxw(2);t.Q6J("href",i.politician.facebookUrl,t.LSH)}}function K(n,a){if(1&n&&(t.TgZ(0,"a",6),t._UZ(1,"img",8),t.qZA()),2&n){const i=t.oxw(2);t.Q6J("href",i.politician.instagramUrl,t.LSH)}}function H(n,a){if(1&n&&(t.TgZ(0,"a",6),t._UZ(1,"img",9),t.qZA()),2&n){const i=t.oxw(2);t.Q6J("href",i.politician.twitterUrl,t.LSH)}}function X(n,a){if(1&n){const i=t.EpF();t.ynx(0),t.TgZ(1,"mat-card",1)(2,"app-admin-quick-menu-actions",2),t.NdJ("actionClickEvt",function(o){t.CHM(i);const c=t.oxw();return t.KtG(c.handleActionEvent(o))}),t.qZA(),t.TgZ(3,"mat-card-header")(4,"mat-card-title"),t._uU(5),t.qZA(),t.TgZ(6,"mat-card-subtitle"),t._uU(7),t.ALo(8,"dateFormatter"),t.qZA()(),t._UZ(9,"img",3),t.TgZ(10,"mat-card-content",4),t.YNc(11,j,2,1,"a",5),t.YNc(12,K,2,1,"a",5),t.YNc(13,H,2,1,"a",5),t.qZA()(),t.BQk()}if(2&n){const i=t.oxw();t.xp6(5),t.Oqu(i.politician.fullname),t.xp6(2),t.Oqu(t.lcZ(8,5,i.politician.birthDate)),t.xp6(4),t.Q6J("ngIf",i.politician.facebookUrl),t.xp6(1),t.Q6J("ngIf",i.politician.instagramUrl),t.xp6(1),t.Q6J("ngIf",i.politician.twitterUrl)}}let D=(()=>{class n{constructor(i,e){this._store=i,this._router=e}handleActionEvent(i){const e=this._store.selectSnapshot(p.getPoliticalPartyId);switch(i.type){case L.U.EDIT:this._router.navigate(["/political-party",e,"edit-politician",this.politician.id]);break;case L.U.DELETE:this._store.dispatch(new u.RemovePolitician(this.politician))}}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(s.yh),t.Y36(f.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-politician"]],inputs:{politician:"politician"},decls:1,vars:1,consts:[[4,"ngIf"],["appearance","outlined",1,"politician-card","mat-elevation-z2"],[3,"actionClickEvt"],["mat-card-image","","src","assets/man-user-svgrepo-com.svg",1,"politician-card__image"],[1,"politician-card__media"],["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],["src","assets/icons/facebook.svg","aria-label","redirect to facebook profile of politic","alt","redirect to facebook profile of politic",1,"mat-elevation-z4"],["src","assets/icons/instagram.svg","aria-label","redirect to instagram profile of politic","alt","redirect to instagram profile of politic",1,"mat-elevation-z4"],["src","assets/icons/twitter.svg","aria-label","redirect to twitter profile of politic","alt","redirect to twitter profile of politic",1,"mat-elevation-z4"]],template:function(i,e){1&i&&t.YNc(0,X,14,7,"ng-container",0),2&i&&t.Q6J("ngIf",e.politician)},dependencies:[g.O5,A.a8,A.dn,A.dk,A.G2,A.$j,A.n5,z.i,$.l],styles:[".politician-card[_ngcontent-%COMP%]{width:17rem}.politician-card__image[_ngcontent-%COMP%]{display:block!important;max-height:15rem!important}.politician-card__media[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;margin-top:1rem}.politician-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3rem;transition:all .5s;border-radius:25%}.politician-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{scale:1.1}"]}),n})();var R=r(4750),N=r(1176);let V=(()=>{class n{constructor(i){this.store=i}transform(i,e){if(!e||null==i)return this.store.dispatch(new N.x.Set({politicianFilterCount:i.length})),i;const o=i.filter(c=>R.c.textIncludesSearchedValueCaseInsensitive(c.fullname,e));return this.store.dispatch(new N.x.Set({politicianFilterCount:o.length})),o}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(s.yh,16))},n.\u0275pipe=t.Yjl({name:"filterPoliticians",type:n,pure:!0}),n})();function W(n,a){1&n&&t._UZ(0,"app-politician",14),2&n&&t.Q6J("politician",a.$implicit)}function tt(n,a){1&n&&(t.ynx(0),t.TgZ(1,"span",15),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.BQk()),2&n&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"no-result")))}function it(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",12),t.YNc(2,W,1,1,"app-politician",13),t.ALo(3,"filterPoliticians"),t.YNc(4,tt,4,3,"ng-container",1),t.ALo(5,"async"),t.qZA(),t.BQk()),2&n){const i=a.ngIf;t.oxw();const e=t.MAs(11),o=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.xi3(3,2,i,e.value)),t.xp6(2),t.Q6J("ngIf",0===t.lcZ(5,5,o.politiciansCount))}}const nt=function(n){return["/political-party",n,"edit"]},at=function(n){return["/political-party",n,"add-politician"]};function et(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",2)(2,"h1",3),t._uU(3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"mat-form-field",6)(7,"mat-label"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t._UZ(10,"input",7,8),t.TgZ(12,"mat-icon",9),t._uU(13,"search"),t.qZA()()(),t.TgZ(14,"div",10)(15,"button",11)(16,"mat-icon"),t._uU(17,"edit"),t.qZA(),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"button",11),t._uU(21),t.ALo(22,"translate"),t.TgZ(23,"mat-icon"),t._uU(24,"add"),t.qZA()()()()(),t.YNc(25,it,6,7,"ng-container",1),t.ALo(26,"async"),t.BQk()),2&n){const i=a.ngIf,e=t.oxw();t.xp6(3),t.Oqu(i.name),t.xp6(5),t.Oqu(t.lcZ(9,7,"politician-search")),t.xp6(7),t.Q6J("routerLink",t.VKq(15,nt,i.id)),t.xp6(3),t.hij(" ",t.lcZ(19,9,"edit-party")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(17,at,i.id)),t.xp6(1),t.hij(" ",t.lcZ(22,11,"politician-add")," "),t.xp6(4),t.Q6J("ngIf",t.lcZ(26,13,e.politicians$))}}class P{constructor(a,i){this.route=a,this.store=i}ngOnInit(){this.route.paramMap.subscribe(a=>this.store.dispatch(new u.GetPoliticalParty(a.get("id"))))}}P.\u0275fac=function(a){return new(a||P)(t.Y36(f.gz),t.Y36(s.yh))},P.\u0275cmp=t.Xpm({type:P,selectors:[["app-party"]],decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"party"],[1,"party__heading"],[1,"party__actions"],[1,"party__actions__search"],["appearance","outline"],["type","text","matInput",""],["input",""],["color","primary","matSuffix",""],[1,"party__actions__admin-buttons"],["mat-raised-button","","color","primary",1,"button-add",3,"routerLink"],[1,"politicians"],[3,"politician",4,"ngFor","ngForOf"],[3,"politician"],[1,"no-result"]],template:function(a,i){1&a&&(t.TgZ(0,"section",0),t.YNc(1,et,27,19,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,i.politicalParty$)))},dependencies:[g.sg,g.O5,f.rH,x.lW,w.Hw,T.Nt,_.KE,_.hX,_.R9,D,g.Ov,C.X$,V],styles:[".party[_ngcontent-%COMP%]{height:100%;grid-column:center-start/center-end}.party__heading[_ngcontent-%COMP%]{font-size:3rem;text-align:center;padding:1rem 0 2rem;letter-spacing:.1rem;word-spacing:.5rem;text-transform:uppercase;font-size:bold}@media only screen and (max-width: 75em){.party__heading[_ngcontent-%COMP%]{line-height:3.5rem}}.party__subheading[_ngcontent-%COMP%]{font-size:2rem}.party__actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:3rem;gap:1.5rem}@media only screen and (max-width: 37.5em){.party__actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}}.party__actions__search[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%!important}.party__actions__admin-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem 0}.party[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{grid-column:2/-1}@media only screen and (max-width: 37.5em){.party[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{grid-column:auto}}.politicians[_ngcontent-%COMP%]{grid-column:center-start/center-end;display:grid;padding-bottom:2rem;grid-template-columns:repeat(auto-fit,minmax(17rem,1fr));gap:3.3rem}@media only screen and (max-width: 53.125em){.politicians[_ngcontent-%COMP%]{gap:2rem}}@media only screen and (max-width: 37.5em){.politicians[_ngcontent-%COMP%]{grid-template-columns:1fr}}.no-result[_ngcontent-%COMP%]{font-size:3rem;grid-column:1/-1}@media only screen and (max-width: 53.125em){.no-result[_ngcontent-%COMP%]{line-height:4rem}}"]}),(0,d.gn)([(0,s.Ph)(G.t.getPoliticianFilterCount)],P.prototype,"politiciansCount",void 0),(0,d.gn)([(0,s.Ph)(p)],P.prototype,"politicalParty$",void 0),(0,d.gn)([(0,s.Ph)(p.getPoliticians)],P.prototype,"politicians$",void 0);let ot=(()=>{class n{constructor(i,e,o){this._store=i,this._router=e,this._route=o}ngOnInit(){this._route.paramMap.subscribe(i=>this.politicalPartyId=i.get("id"))}onSubmit(i){this._store.dispatch(new u.AddPolitician(i)),this.navigateBack()}navigateBack(){this._router.navigate(["/political-party"],{queryParams:{id:this.politicalPartyId}})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(s.yh),t.Y36(f.F0),t.Y36(f.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-politician"]],decls:6,vars:3,consts:[[1,"container"],[1,"container__content"],[3,"submitEvent","cancelEvent"]],template:function(i,e){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-politician-form",2),t.NdJ("submitEvent",function(c){return e.onSubmit(c)})("cancelEvent",function(){return e.navigateBack()}),t.qZA()()()),2&i&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"politician-new")))},dependencies:[k,C.X$]}),n})();var rt=r(7579),S=r(9521),U=r(7331);function ct(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"mat-chip-row",12),t.NdJ("removed",function(){const c=t.CHM(i).$implicit,h=t.oxw();return t.KtG(h.removeTag(c))})("edited",function(o){const h=t.CHM(i).$implicit,m=t.oxw();return t.KtG(m.editTag(h,o))}),t._uU(1),t.TgZ(2,"button",13)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&n){const i=a.$implicit;t.Q6J("editable",!0),t.xp6(1),t.hij(" ",i," "),t.xp6(1),t.uIk("aria-label","remove "+i)}}function lt(n,a){if(1&n){const i=t.EpF();t.ynx(0,19),t.TgZ(1,"h3",20),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"mat-form-field",21)(5,"mat-label"),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._UZ(8,"input",22),t.TgZ(9,"mat-error"),t._uU(10),t.ALo(11,"translate"),t.qZA()(),t.TgZ(12,"mat-form-field",21)(13,"mat-label"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._UZ(16,"input",23),t.TgZ(17,"mat-error"),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"mat-hint"),t._uU(21),t.ALo(22,"translate"),t.qZA(),t._UZ(23,"mat-datepicker-toggle",24)(24,"mat-datepicker",25,26),t.qZA(),t.TgZ(26,"mat-form-field",1)(27,"mat-label"),t._uU(28),t.ALo(29,"translate"),t.qZA(),t._UZ(30,"input",27),t.TgZ(31,"mat-error"),t._uU(32),t.ALo(33,"translate"),t.qZA()(),t.TgZ(34,"mat-form-field",1)(35,"mat-label"),t._uU(36),t.ALo(37,"translate"),t.qZA(),t._UZ(38,"input",28),t.qZA(),t.TgZ(39,"mat-form-field",1)(40,"mat-label"),t._uU(41),t.ALo(42,"translate"),t.qZA(),t._UZ(43,"input",29),t.qZA(),t.TgZ(44,"mat-form-field",1)(45,"mat-label"),t._uU(46),t.ALo(47,"translate"),t.qZA(),t._UZ(48,"input",30),t.qZA(),t.TgZ(49,"div",31)(50,"button",32),t.NdJ("click",function(){const c=t.CHM(i).index,h=t.oxw(2);return t.KtG(h.removePolitician(c))}),t.TgZ(51,"mat-icon"),t._uU(52,"clear"),t.qZA()()(),t.BQk()}if(2&n){const i=a.index,e=t.MAs(25);t.Q6J("formGroupName",i),t.xp6(2),t.Oqu(t.lcZ(3,14,i+1+". Politician")),t.xp6(4),t.Oqu(t.lcZ(7,16,"politician-name")),t.xp6(4),t.Oqu(t.lcZ(11,18,"form-required")),t.xp6(4),t.Oqu(t.lcZ(15,20,"birthday")),t.xp6(2),t.Q6J("matDatepicker",e),t.xp6(2),t.Oqu(t.lcZ(19,22,"form-date")),t.xp6(3),t.Oqu(t.lcZ(22,24,"year-format")),t.xp6(2),t.Q6J("for",e),t.xp6(5),t.Oqu(t.lcZ(29,26,"politician-profileImageUrl")),t.xp6(4),t.Oqu(t.lcZ(33,28,"form-required")),t.xp6(4),t.Oqu(t.lcZ(37,30,"politician-twitterUrl")),t.xp6(5),t.Oqu(t.lcZ(42,32,"politician-instagramUrl")),t.xp6(5),t.Oqu(t.lcZ(47,34,"politician-facebookUrl"))}}function pt(n,a){if(1&n){const i=t.EpF();t.ynx(0,14),t.TgZ(1,"h2",15),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.YNc(4,lt,53,36,"ng-container",16),t.TgZ(5,"div",17)(6,"button",18),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.addPolitician())}),t.TgZ(7,"mat-icon"),t._uU(8,"add"),t.qZA()()(),t.BQk()}if(2&n){const i=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"politician-add")),t.xp6(2),t.Q6J("ngForOf",null==i.politiciansFormArray?null:i.politiciansFormArray.controls)}}let M=(()=>{class n extends E{constructor(i){super(),this._fb=i,this.partyForm=this._fb.group({name:this._fb.nonNullable.control("",{validators:l.kI.required}),image:this._fb.nonNullable.control("",l.kI.required),tags:this._fb.nonNullable.control([""],l.kI.required),politicians:this._fb.array([])}),this.tags=[],this.addOnBlur=!0,this.separatorKeysCodes=[S.K5,S.OC]}ngOnInit(){this.party&&(this.partyForm.removeControl("politicians"),this.tags=[...this.party.tags],this.partyForm.patchValue({name:this.party.name,image:this.party.image,tags:[...this.party.tags]}))}get politiciansFormArray(){return this.partyForm?.controls.politicians??null}submit(){this.partyForm.valid&&(this.partyForm.patchValue({tags:[...this.tags]}),this.submitEvent.emit(this.partyForm.value))}addPolitician(){const i=this._fb.group({fullname:this._fb.control("",{nonNullable:!0,validators:l.kI.required}),birthDate:this._fb.control("",{nonNullable:!0,validators:[l.kI.required]}),profileImageUrl:this._fb.control("",{nonNullable:!0,validators:[l.kI.required]}),facebookUrl:this._fb.control(""),instagramUrl:this._fb.control(""),twitterUrl:this._fb.control("")});this.politiciansFormArray&&this.politiciansFormArray.push(i)}removePolitician(i){this.politiciansFormArray&&this.politiciansFormArray.removeAt(i)}addTag(i){const e=(i.value||"").trim();e&&this.tags.push(e),i.chipInput.clear()}removeTag(i){const e=this.tags.indexOf(i);e>=0&&this.tags.splice(e,1)}editTag(i,e){const o=e.value.trim();if(!o)return void this.removeTag(i);const c=this.tags.indexOf(i);c>=0&&(this.tags[c]=o)}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(l.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-party-form"]],inputs:{party:"party"},features:[t.qOj],decls:41,vars:38,consts:[[1,"form-content",3,"formGroup","ngSubmit"],["appearance","outline",1,"span-12"],["matInput","","formControlName","name"],["matInput","","formControlName","image"],["formControlName","tags"],["chipGrid",""],[3,"editable","removed","edited",4,"ngFor","ngForOf"],[3,"placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["formArrayName","politicians",4,"ngIf"],[1,"form-footer","span-12"],["type","button","mat-raised-button","",1,"button-add",3,"click"],["type","submit","mat-raised-button","","color","primary",1,"button-add"],[3,"editable","removed","edited"],["matChipRemove",""],["formArrayName","politicians"],[1,"span-12"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"span-12","add-politician-container"],["type","button","mat-fab","","color","primary",3,"click"],[3,"formGroupName"],[1,"span-12","politician-number"],["appearance","outline",1,"span-6"],["matInput","","formControlName","fullname"],["matInput","","formControlName","birthDate",3,"matDatepicker"],["matIconSuffix","",3,"for"],["startView","multi-year"],["picker",""],["matInput","","formControlName","profileImageUrl"],["matInput","","formControlName","twitterUrl"],["matInput","","formControlName","instagramUrl"],["matInput","","formControlName","facebookUrl"],[1,"span-12","delete-politician"],["type","button","mat-fab","","color","warn",3,"click"]],template:function(i,e){if(1&i&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return e.submit()}),t.TgZ(1,"mat-form-field",1)(2,"mat-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"input",2),t.TgZ(6,"mat-error"),t._uU(7),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"input",3),t.TgZ(14,"mat-error"),t._uU(15),t.ALo(16,"translate"),t.qZA()(),t.TgZ(17,"mat-form-field",1)(18,"mat-label"),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.TgZ(21,"mat-chip-grid",4,5),t.YNc(23,ct,5,3,"mat-chip-row",6),t.TgZ(24,"input",7),t.NdJ("matChipInputTokenEnd",function(c){return e.addTag(c)}),t.ALo(25,"translate"),t.qZA()(),t.TgZ(26,"mat-hint"),t._uU(27),t.ALo(28,"translate"),t.qZA(),t.TgZ(29,"mat-error"),t._uU(30),t.ALo(31,"translate"),t.qZA()(),t.YNc(32,pt,9,4,"ng-container",8),t.TgZ(33,"div",9)(34,"button",10),t.NdJ("click",function(){return e.cancel()}),t._uU(35),t.ALo(36,"translate"),t.qZA(),t.TgZ(37,"button",11),t._uU(38),t.ALo(39,"translate"),t.ALo(40,"translate"),t.qZA()()()),2&i){const o=t.MAs(22);t.Q6J("formGroup",e.partyForm),t.xp6(3),t.Oqu(t.lcZ(4,16,"party-name")),t.xp6(4),t.Oqu(t.lcZ(8,18,"form-required")),t.xp6(4),t.Oqu(t.lcZ(12,20,"party-image")),t.xp6(4),t.Oqu(t.lcZ(16,22,"form-required")),t.xp6(4),t.Oqu(t.lcZ(20,24,"party-tags")),t.xp6(4),t.Q6J("ngForOf",e.tags),t.xp6(1),t.Q6J("placeholder",t.lcZ(25,26,"party-tag-placeholder"))("matChipInputFor",o)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes)("matChipInputAddOnBlur",e.addOnBlur),t.xp6(3),t.Oqu(t.lcZ(28,28,"chips-hint")),t.xp6(3),t.Oqu(t.lcZ(31,30,"chips-required")),t.xp6(2),t.Q6J("ngIf",!e.party),t.xp6(3),t.hij(" ",t.lcZ(36,32,"back")," "),t.xp6(3),t.hij(" ",e.party?t.lcZ(39,34,"update"):t.lcZ(40,36,"create")," ")}},dependencies:[g.sg,g.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,l.x0,l.CE,x.lW,x.cs,U.RA,U.oH,U.qH,U.z3,w.Hw,T.Nt,_.KE,_.hX,_.bx,_.TO,_.R9,v.Mq,v.hl,v.nW,C.X$],styles:[".politician-number[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700}.add-politician-container[_ngcontent-%COMP%], .delete-politician[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),n})();function st(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"app-party-form",4),t.NdJ("submitEvent",function(o){t.CHM(i);const c=t.oxw(2);return t.KtG(c.onSubmit(o))})("cancelEvent",function(){t.CHM(i);const o=t.oxw().ngIf,c=t.oxw();return t.KtG(c.navigateBack(o.id))}),t.qZA()}if(2&n){const i=t.oxw().ngIf;t.Q6J("party",i)}}function mt(n,a){if(1&n&&(t.ynx(0),t.YNc(1,st,1,1,"app-party-form",3),t.BQk()),2&n){const i=a.ngIf;t.xp6(1),t.Q6J("ngIf",i.id)}}const ut=[{path:"",redirectTo:"/news",pathMatch:"full"},{path:"add",component:(()=>{class n{constructor(i,e,o){this._router=i,this._notificationService=e,this._store=o}onSubmit(i){i.politicians.length<1?this._notificationService.showError("error-politician-required"):this._store.dispatch(new u.CreatePoliticalParty(i)).subscribe(()=>this.navigateBack())}navigateBack(){this._router.navigate(["/news"])}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(f.F0),t.Y36(F.g),t.Y36(s.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-party"]],decls:3,vars:0,consts:[[1,"container"],[1,"container__content"],[3,"submitEvent","cancelEvent"]],template:function(i,e){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"app-party-form",2),t.NdJ("submitEvent",function(c){return e.onSubmit(c)})("cancelEvent",function(){return e.navigateBack()}),t.qZA()()())},dependencies:[M]}),n})()},{path:":id",component:P},{path:":id/add-politician",component:ot},{path:":id/edit-politician/:politicianId",component:B},{path:":id/edit",component:(()=>{class n{constructor(i,e,o){this._route=i,this._router=e,this._store=o,this.destroy$=new rt.x}ngOnInit(){this._route.paramMap.subscribe(i=>{this._store.dispatch(new u.GetPoliticalParty(i.get("id"))),this.politicalParty$=this._store.select(p.getPoliticalParty)})}ngOnDestroy(){this.destroy$.next()}onSubmit(i){const e=this._store.selectSnapshot(p);this._store.dispatch(new u.UpdatePoliticalParty({...i,id:e.id})).subscribe(()=>this.navigateBack(e.id))}navigateBack(i){this._router.navigate(["/political-party/"+i])}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(f.gz),t.Y36(f.F0),t.Y36(s.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-party"]],decls:4,vars:3,consts:[[1,"container"],[1,"container__content"],[4,"ngIf"],[3,"party","submitEvent","cancelEvent",4,"ngIf"],[3,"party","submitEvent","cancelEvent"]],template:function(i,e){1&i&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,mt,2,1,"ng-container",2),t.ALo(3,"async"),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,e.politicalParty$)))},dependencies:[g.O5,M,g.Ov]}),n})()}];let dt=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[f.Bz.forChild(ut),f.Bz]}),n})(),_t=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,dt,J.m,s.$l.forFeature([p])]}),n})()}}]);