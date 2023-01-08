"use strict";(self.webpackChunkpoliticz_fe=self.webpackChunkpoliticz_fe||[]).push([[576],{3576:(k,h,e)=>{e.r(h),e.d(h,{PartyModule:()=>b});var s,i,p=e(655),l=e(9867);(i=s||(s={})).Set=(()=>{class o{constructor(u){this.payload=u}}return o.type="[PoliticalParty] Set",o})(),i.LoadPoliticalPartyById=(()=>{class o{constructor(u){this.payload=u}}return o.type="[PoliticalParty] LoadPoliticalPartyById",o})(),i.RemovePolitician=(()=>{class o{constructor(u){this.payload=u}}return o.type="[PoliticalParty] Remove politician",o})();var t=e(4650),C=e(1027);let c=class{constructor(a){this.politicalPartyService=a}static getPoliticalParty(a){return a}loadPoliticalPartyById(a,{payload:n}){this.politicalPartyService.getPoliticalParty(n).subscribe(r=>a.dispatch(new s.Set(r)))}setPoliticalParty(a,{payload:n}){a.patchState(n)}removePolitician(a,{payload:n}){this.politicalPartyService.removePolitician(n.id).subscribe(()=>{const r=a.getState().politicians.filter(o=>o.id!==n.id);a.patchState({politicians:r})})}};c.\u0275fac=function(a){return new(a||c)(t.LFG(C.A))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac}),(0,p.gn)([(0,l.aU)(s.LoadPoliticalPartyById)],c.prototype,"loadPoliticalPartyById",null),(0,p.gn)([(0,l.aU)(s.Set)],c.prototype,"setPoliticalParty",null),(0,p.gn)([(0,l.aU)(s.RemovePolitician)],c.prototype,"removePolitician",null),(0,p.gn)([(0,l.Qf)()],c,"getPoliticalParty",null),c=(0,p.gn)([(0,l.ZM)({name:"politicalPartyState",defaults:{id:"",name:"kokodzina",image:{name:"",extension:""},politicians:[],tags:[]}})],c);var x=e(9541),y=e(6895),Z=e(39),f=e(8767),M=e(7392),P=e(8455),O=e(9203),_=e(9132),d=e(8377),S=e(1591),A=e(1296);function T(i,a){if(1&i&&(t.TgZ(0,"a",6),t._UZ(1,"img",7),t.qZA()),2&i){const n=t.oxw(2);t.Q6J("href",n.politician.facebookUrl,t.LSH)}}function U(i,a){if(1&i&&(t.TgZ(0,"a",6),t._UZ(1,"img",8),t.qZA()),2&i){const n=t.oxw(2);t.Q6J("href",n.politician.instagramUrl,t.LSH)}}function I(i,a){if(1&i&&(t.TgZ(0,"a",6),t._UZ(1,"img",9),t.qZA()),2&i){const n=t.oxw(2);t.Q6J("href",n.politician.twitterUrl,t.LSH)}}function F(i,a){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"mat-card",1)(2,"app-admin-quick-menu-actions",2),t.NdJ("actionClickEvt",function(o){t.CHM(n);const g=t.oxw();return t.KtG(g.handleActionEvent(o))}),t.qZA(),t.TgZ(3,"mat-card-header")(4,"mat-card-title"),t._uU(5),t.qZA(),t.TgZ(6,"mat-card-subtitle"),t._uU(7),t.ALo(8,"dateFormatter"),t.qZA()(),t._UZ(9,"img",3),t.TgZ(10,"mat-card-content",4),t.YNc(11,T,2,1,"a",5),t.YNc(12,U,2,1,"a",5),t.YNc(13,I,2,1,"a",5),t.qZA()(),t.BQk()}if(2&i){const n=t.oxw();t.xp6(5),t.Oqu(n.politician.fullName),t.xp6(2),t.Oqu(t.lcZ(8,5,n.politician.birthDate)),t.xp6(4),t.Q6J("ngIf",n.politician.facebookUrl),t.xp6(1),t.Q6J("ngIf",n.politician.instagramUrl),t.xp6(1),t.Q6J("ngIf",n.politician.twitterUrl)}}let L=(()=>{class i{constructor(n){this.store=n}handleActionEvent(n){switch(n.type){case _.U.EDIT:alert("Zedituju t\u011b more");break;case _.U.DELETE:this.store.dispatch(new s.RemovePolitician(this.politician))}}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(l.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-politician"]],inputs:{politician:"politician"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"politician-card","mat-elevation-z4"],[3,"actionClickEvt"],["mat-card-image","","src","assets/man-user-svgrepo-com.svg"],[1,"politician-card__media"],["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],["src","assets/icons/facebook.svg","aria-label","redirect to facebook profile of politic","alt","redirect to facebook profile of politic",1,"mat-elevation-z4"],["src","assets/icons/instagram.svg","aria-label","redirect to instagram profile of politic","alt","redirect to instagram profile of politic",1,"mat-elevation-z4"],["src","assets/icons/twitter.svg","aria-label","redirect to twitter profile of politic","alt","redirect to twitter profile of politic",1,"mat-elevation-z4"]],template:function(n,r){1&n&&t.YNc(0,F,14,7,"ng-container",0),2&n&&t.Q6J("ngIf",r.politician)},dependencies:[y.O5,d.S$,d.u7,d.Qi,d.mi,d._K,d.k0,S.i,A.l],styles:[".politician-card__media[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.politician-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3rem;transition:all .5s;border-radius:25%}.politician-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{scale:1.1}"]}),i})();var w=e(9383),z=e(4750),v=e(1176);let Q=(()=>{class i{constructor(n){this.store=n}transform(n,r){if(!r||null==n)return this.store.dispatch(new v.x.Set({politicianFilterCount:n.length})),n;const o=n.filter(g=>z.c.textIncludesSearchedValueCaseInsensitive(g.fullName,r));return this.store.dispatch(new v.x.Set({politicianFilterCount:o.length})),o}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(l.yh,16))},i.\u0275pipe=t.Yjl({name:"filterPoliticians",type:i,pure:!0}),i})();function B(i,a){1&i&&t._UZ(0,"app-politician",11),2&i&&t.Q6J("politician",a.$implicit)}function J(i,a){1&i&&(t.ynx(0),t.TgZ(1,"span",12),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.BQk()),2&i&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"no-result")))}function Y(i,a){if(1&i&&(t.ynx(0),t.TgZ(1,"h1",2),t._uU(2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"mat-form-field",5)(6,"mat-label"),t._uU(7),t.ALo(8,"translate"),t.qZA(),t._UZ(9,"input",6,7),t.TgZ(11,"mat-icon",8),t._uU(12,"search"),t.qZA()()(),t._UZ(13,"div",9),t.YNc(14,B,1,1,"app-politician",10),t.ALo(15,"filterPoliticians"),t.YNc(16,J,4,3,"ng-container",1),t.ALo(17,"async"),t.qZA(),t.BQk()),2&i){const n=a.ngIf,r=t.MAs(10),o=t.oxw();t.xp6(2),t.Oqu(n.name),t.xp6(5),t.Oqu(t.lcZ(8,4,"politician-search")),t.xp6(7),t.Q6J("ngForOf",t.xi3(15,6,n.politicians,r.value)),t.xp6(2),t.Q6J("ngIf",0===t.lcZ(17,9,o.politiciansCount))}}class m{constructor(a,n){this.route=a,this.store=n}ngOnInit(){this.route.queryParamMap.subscribe(a=>this.store.dispatch(new s.LoadPoliticalPartyById(a.get("id"))))}}m.\u0275fac=function(a){return new(a||m)(t.Y36(f.gz),t.Y36(l.yh))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-party"]],decls:3,vars:3,consts:[[1,"party"],[4,"ngIf"],[1,"party__heading"],[1,"party__politicians"],[1,"party__search"],["appearance","outline"],["type","text","matInput",""],["input",""],["color","primary","matSuffix",""],[1,"empty"],[3,"politician",4,"ngFor","ngForOf"],[3,"politician"],[1,"no-result"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0),t.YNc(1,Y,18,11,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.politicalParty$)))},dependencies:[y.sg,y.O5,M.Hw,P.v_,P.$V,P.nX,O.k0,L,y.Ov,w.X$,Q],styles:[".party[_ngcontent-%COMP%]{height:100%;padding:2rem 4rem}@media only screen and (max-width: 53.125em){.party[_ngcontent-%COMP%]{padding:2rem}}.party__heading[_ngcontent-%COMP%]{font-size:3rem;text-align:center;padding:1rem 0 2rem;letter-spacing:.1rem;word-spacing:.5rem;text-transform:uppercase;font-size:bold}@media only screen and (max-width: 75em){.party__heading[_ngcontent-%COMP%]{line-height:3.5rem}}.party__subheading[_ngcontent-%COMP%]{font-size:2rem}.party__politicians[_ngcontent-%COMP%]{display:grid;padding-bottom:2rem;grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));gap:3.3rem}@media only screen and (max-width: 53.125em){.party__politicians[_ngcontent-%COMP%]{gap:2rem}}@media only screen and (max-width: 37.5em){.party__politicians[_ngcontent-%COMP%]{grid-template-columns:1fr}}.party__search[_ngcontent-%COMP%]{justify-self:stretch;grid-column:1/span 1}.party__search[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%!important}.party[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{grid-column:2/-1}@media only screen and (max-width: 37.5em){.party[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]{grid-column:auto}}.no-result[_ngcontent-%COMP%]{font-size:3rem;grid-column:1/-1}@media only screen and (max-width: 53.125em){.no-result[_ngcontent-%COMP%]{line-height:4rem}}"]}),(0,p.gn)([(0,l.Ph)(Z.t.getPoliticianFilterCount)],m.prototype,"politiciansCount",void 0),(0,p.gn)([(0,l.Ph)(c)],m.prototype,"politicalParty$",void 0);const E=[{path:"",component:m}];let N=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[f.Bz.forChild(E),f.Bz]}),i})(),b=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[y.ez,N,x.m,l.$l.forFeature([c])]}),i})()}}]);