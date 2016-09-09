"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var InfoComponent_1 = require('./InfoComponent');
var MainComponent_1 = require('./MainComponent');
var WatchComponent_1 = require('./WatchComponent');
var AppComponent = (function () {
    function AppComponent(ro) {
        this.ro = ro;
        this.data = "";
    }
    AppComponent.prototype.tema = function () {
        this.ro.navigate(['Search', { key: this.data }]);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'main-app',
            templateUrl: 'app/app.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, WatchComponent_1.WatchComponent]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/bax/:id', component: WatchComponent_1.WatchComponent, name: 'Watch' },
            { path: '/haqqimizda', component: InfoComponent_1.InfoComponent, name: 'Info' },
            { path: '/axtar/:key', component: MainComponent_1.MainComponent, name: 'Search' },
            { path: '/axtar/:key/:sehi', component: MainComponent_1.MainComponent, name: 'SearchPlus' },
            { path: '/sehife/:seh', component: MainComponent_1.MainComponent, name: 'Page' },
            { path: '/', component: MainComponent_1.MainComponent, name: 'Main' }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=AppComponent.js.map