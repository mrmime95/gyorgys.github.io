"use strict";(self.webpackChunkstock_tracker=self.webpackChunkstock_tracker||[]).push([[6],{6:(x,l,s)=>{s.r(l),s.d(l,{StockDetailsModule:()=>Z});var a=s(808),t=s(223),i=s(459),p=s(188),m=s(850);let g=(()=>{class e{constructor(){this.months=["January","February","March","April","May","June","July","August","September","October","November","December"]}transform(n){return this.months[n-1]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"month",type:e,pure:!0}),e})(),u=(()=>{class e{transform(n){return n?`${n>0?"+":""}${n}`:""}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"numberSign",type:e,pure:!0}),e})();function h(e,o){if(1&e&&(t.TgZ(0,"div")(1,"p"),t._uU(2),t.ALo(3,"numberSign"),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"numberSign"),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.hij("Change: ",t.lcZ(3,2,n.change.change),""),t.xp6(3),t.hij("MSPR: ",t.lcZ(6,4,n.change.mspr),"")}}function f(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1," No data found "),t.qZA())}let d=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-stock-change"]],inputs:{change:"change"},decls:10,vars:6,consts:[[1,"flex"],[1,"content"],[4,"ngIf","ngIfElse"],["therIsNoData",""],[1,"flex","center"],[3,"value"]],template:function(n,c){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3),t.ALo(4,"month"),t.qZA(),t.YNc(5,h,7,6,"div",2),t.YNc(6,f,2,0,"ng-template",null,3,t.W1O),t.qZA(),t.TgZ(8,"div",4),t._UZ(9,"app-indicator",5),t.qZA()()),2&n){const r=t.MAs(7);t.xp6(3),t.Oqu(t.lcZ(4,4,c.change.month)),t.xp6(2),t.Q6J("ngIf",c.change.change&&c.change.mspr)("ngIfElse",r),t.xp6(4),t.Q6J("value",c.change.change)}},directives:[a.O5,m.d],pipes:[g,u],styles:[".content[_ngcontent-%COMP%]{padding:20px}"]}),e})();function S(e,o){1&e&&(t.TgZ(0,"div",5),t._uU(1," Loading stuff... "),t.qZA())}function k(e,o){1&e&&t._UZ(0,"app-stock-change",7),2&e&&t.Q6J("change",o.$implicit)}function y(e,o){if(1&e&&(t.TgZ(0,"div",5),t.YNc(1,k,1,1,"app-stock-change",6),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.changes)}}const v=[{path:"",component:(()=>{class e{constructor(n,c){this.route=n,this.stocksService=c,this.changes=[],this.isLoading=!0}ngOnInit(){this.symbol=this.route.snapshot.paramMap.get("symbol")||"",this.stocksService.getFirstStockBySymbol(this.symbol).subscribe(n=>{this.stockName=`${n.description} (${n.symbol})`}),this.stocksService.getLastYearChangesOfSymbol(this.symbol).subscribe(n=>{this.changes=n.slice(-3),this.isLoading=!1})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.gz),t.Y36(p.q))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-stock-details-home"]],inputs:{symbol:"symbol",changes:"changes"},decls:10,vars:4,consts:[[1,"container"],[1,"title","flex","space-between"],["class","flex space-between",4,"ngIf","ngIfElse"],["loaded",""],["routerLink","../.."],[1,"flex","space-between"],[3,"change",4,"ngFor","ngForOf"],[3,"change"]],template:function(n,c){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3),t.qZA()(),t.YNc(4,S,2,0,"div",2),t.YNc(5,y,2,1,"ng-template",null,3,t.W1O),t.qZA(),t.TgZ(7,"a",4)(8,"button"),t._uU(9),t.qZA()()),2&n){const r=t.MAs(6);t.xp6(3),t.Oqu(c.stockName||c.symbol),t.xp6(1),t.Q6J("ngIf",c.isLoading)("ngIfElse",r),t.xp6(5),t.Oqu("< Back to list of stocks")}},directives:[a.O5,a.sg,d,i.yS],styles:[".container[_ngcontent-%COMP%]{border:2px solid black;padding:15px;margin:15px}"]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.Bz.forChild(v)],i.Bz]}),e})();var C=s(181);let Z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,b,C.N]]}),e})()}}]);