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
var GetService_1 = require('./GetService');
var LastComponent_1 = require('./LastComponent');
// MainComponent is Here
var MainComponent = (function () {
    function MainComponent(gs, rp) {
        this.gs = gs;
        this.rp = rp;
        this.ax = true;
    }
    MainComponent.prototype.ngOnInit = function () {
        var plus;
        if (this.rp.get('sehi')) {
            this.keyy = this.rp.get('key');
            plus = 'axtar=' + this.keyy + ',page=' + this.rp.get('sehi');
            this.ax = false;
        }
        else {
            if (this.rp.get('seh')) {
                plus = 'npage=' + this.rp.get('seh');
                this.ax = true;
            }
            if (this.rp.get('key')) {
                this.keyy = this.rp.get('key');
                plus = 'axtar=' + this.rp.get('key');
                this.ax = false;
            }
        }
        this.gs.getData(plus);
    };
    MainComponent = __decorate([
        core_1.Component({
            templateUrl: 'include/main.html',
            providers: [GetService_1.GetService],
            directives: [LastComponent_1.LastComponent, router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [GetService_1.GetService, router_deprecated_1.RouteParams])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=MainComponent.js.map