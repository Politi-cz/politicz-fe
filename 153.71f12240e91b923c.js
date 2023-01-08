"use strict";(self.webpackChunkpoliticz_fe=self.webpackChunkpoliticz_fe||[]).push([[153],{2153:(H,h,i)=>{i.r(h),i.d(h,{HomeModule:()=>S,HttpLoaderFactory:()=>y});var c,t,d=i(655),a=i(9867);(t=c||(c={})).GetAll=(()=>{class s{}return s.type="[News] GetAll",s})(),t.Remove=(()=>{class s{constructor(u){this.payload=u}}return s.type="[News] Remove",s})();var e=i(4650),m=i(2340),f=i(529);let v=(()=>{class t{constructor(n){this.http=n}getAllNews(){return this.http.get(`${m.N.apiUrl}/news`)}getNewsById(n){return this.http.get(`${m.N.apiUrl}/news/${n}`)}deleteNews(n){return this.http.delete(`${m.N.apiUrl}/news/${n}`)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(f.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),r=class{constructor(o){this.newsService=o}getNews(o){this.newsService.getAllNews().subscribe(n=>o.setState(n))}removeNews(o,{payload:n}){this.newsService.deleteNews(n.id).subscribe(()=>o.setState(o.getState().filter(s=>s.id!==n.id)))}};r.\u0275fac=function(o){return new(o||r)(e.LFG(v))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),(0,d.gn)([(0,a.aU)(c.GetAll)],r.prototype,"getNews",null),(0,d.gn)([(0,a.aU)(c.Remove)],r.prototype,"removeNews",null),r=(0,d.gn)([(0,a.ZM)({name:"newsState",defaults:[]})],r);var C=i(9541),_=i(9383),p=i(6895),g=i(8767),x=i(9132),N=i(1591);let M=(()=>{class t{constructor(n,s){this.router=n,this.store=s}navigateToDetail(n){this.router.navigate(["/news/detail"],{queryParams:{id:n}})}handleActionEvent(n){switch(n.type){case x.U.EDIT:alert("Zedituju t\u011b more");break;case x.U.DELETE:this.store.dispatch(new c.Remove(this.news))}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.F0),e.Y36(a.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-news"]],inputs:{news:"news"},decls:8,vars:2,consts:[[1,"news",3,"click"],[3,"actionClickEvt"],["src","assets/polit.jpg"],[1,"news__text"],[1,"news__text__content"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return s.navigateToDetail(s.news.id)}),e.TgZ(1,"app-admin-quick-menu-actions",1),e.NdJ("actionClickEvt",function(u){return s.handleActionEvent(u)}),e.qZA(),e._UZ(2,"img",2),e.TgZ(3,"div",3)(4,"h3"),e._uU(5),e.qZA(),e.TgZ(6,"div",4),e._uU(7),e.qZA()()()),2&n&&(e.xp6(5),e.Oqu(s.news.heading),e.xp6(2),e.Oqu(s.news.content))},dependencies:[N.i],styles:[".news[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;cursor:pointer;box-shadow:#00000012 0 1px 1px,#00000012 0 2px 2px,#00000012 0 4px 4px,#00000012 0 8px 8px,#00000012 0 16px 16px;transition:box-shadow .1s}@media (hover: hover){.news[_ngcontent-%COMP%]:hover{box-shadow:0 0 34px -7px #0a0a0a;outline:3px solid rgb(41,121,255)}}.news[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:100%;height:30rem;display:block;transition:all .5s}.news__text[_ngcontent-%COMP%]{position:absolute;bottom:0;padding:1.5rem 1rem;color:#fff;background-color:#1d1c1cd4;display:grid;grid-template-columns:1fr;grid-template-rows:2.5rem;gap:1.5rem 0;align-items:center}.news__text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;letter-spacing:.1rem;margin:0;padding:0}.news__text__content[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-size:1.2rem;text-align:justify}"]}),t})();function O(t,o){if(1&t&&(e.ynx(0),e._UZ(1,"app-news",3),e.BQk()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("news",n)}}class l{constructor(o){this.store=o}ngOnInit(){this.getAllNews()}getAllNews(){this.store.dispatch(new c.GetAll)}}l.\u0275fac=function(o){return new(o||l)(e.Y36(a.yh))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-home"]],decls:4,vars:3,consts:[[1,"container"],[1,"news_container"],[4,"ngFor","ngForOf"],[3,"news"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"div",1),e.YNc(2,O,2,1,"ng-container",2),e.ALo(3,"async"),e.qZA()()),2&o&&(e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,1,n.newsList$)))},dependencies:[p.sg,M,p.Ov],styles:[".news_container[_ngcontent-%COMP%]{grid-column:center-start/center-end;display:grid;grid-template-columns:[center-start] repeat(3,minmax(20rem,32rem)) [center-end];justify-content:center;gap:3rem 2rem}@media only screen and (max-width: 62.5em){.news_container[_ngcontent-%COMP%]{grid-template-columns:[center-start] repeat(2,minmax(20rem,1fr)) [center-end]}}@media only screen and (max-width: 37.5em){.news_container[_ngcontent-%COMP%]{grid-template-columns:[center-start] 1fr [center-end];gap:2rem}}.news_container[_ngcontent-%COMP%]   app-news[_ngcontent-%COMP%]:nth-of-type(1){grid-column:center-start/center-end}"]}),(0,d.gn)([(0,a.Ph)(r)],l.prototype,"newsList$",void 0);var A=i(3900),Z=i(1296);function P(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"div",3)(2,"div",4)(3,"div",5)(4,"h1",6),e._uU(5),e.qZA(),e.TgZ(6,"p",7),e._uU(7),e.ALo(8,"dateFormatter"),e.qZA()()(),e._UZ(9,"div",8),e.qZA(),e.BQk()),2&t){const n=o.ngIf;e.xp6(5),e.Oqu(n.heading),e.xp6(2),e.Oqu(e.lcZ(8,3,n.publishDate)),e.xp6(2),e.Q6J("innerHTML",n.content,e.oJD)}}const b=[{path:"",component:l,pathMatch:"full"},{path:"detail",component:(()=>{class t{constructor(n,s){this.route=n,this.newsService=s}ngOnInit(){this.newsDetail$=this.route.queryParamMap.pipe((0,A.w)(n=>this.newsService.getNewsById(n.get("id"))))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.gz),e.Y36(v))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-news-detail"]],decls:4,vars:3,consts:[[1,"container"],[1,"container__content"],[4,"ngIf"],[1,"news"],[1,"news__header"],[1,"news__header__box"],[1,"news__header__box__heading"],[1,"news__header__box__date"],[1,"news__content",3,"innerHTML"]],template:function(n,s){1&n&&(e.TgZ(0,"section",0)(1,"div",1),e.YNc(2,P,10,5,"ng-container",2),e.ALo(3,"async"),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,1,s.newsDetail$)))},dependencies:[p.O5,p.Ov,Z.l],styles:[".news[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:column;box-shadow:#00000059 0 5px 15px;padding:3rem}.news__header[_ngcontent-%COMP%]{color:#fff;display:flex;align-items:center;width:100%}.news__header__box[_ngcontent-%COMP%]{flex-grow:1;border-bottom:10px solid rgb(41,121,255);display:flex;flex-direction:column;justify-content:center;position:relative;margin-bottom:1.5rem}.news__header__box__heading[_ngcontent-%COMP%]{align-self:center;justify-self:center;font-size:3.5rem;letter-spacing:.1rem;line-height:4rem;margin:1rem 0;color:#000}.news__header__box__date[_ngcontent-%COMP%]{text-align:right;margin:.5rem;font-size:1.5rem;color:#000}.news__content[_ngcontent-%COMP%]{font-size:1.35rem}"]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(b),g.Bz]}),t})();var F=i(9832);function y(t){return new F.w(t,m.N.assetsPath,".json")}let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,T,C.m,a.$l.forFeature([r]),_.aw.forChild({defaultLanguage:"cz",loader:{provide:_.Zw,useFactory:y,deps:[f.eN]},isolate:!0})]}),t})()}}]);