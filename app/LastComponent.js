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
var LastComponent = (function () {
    function LastComponent(gs, rp) {
        this.gs = gs;
        this.rp = rp;
    }
    LastComponent.prototype.ngOnInit = function () {
        var link;
        if (this.rp.get('id') != null) {
            link = 'limit=5';
        }
        else {
            link = 'limit=5,sort=visited';
        }
        this.gs.getFive(link);
    };
    LastComponent = __decorate([
        core_1.Component({
            selector: 'last-com',
            templateUrl: 'include/last.html',
            providers: [GetService_1.GetService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [GetService_1.GetService, router_deprecated_1.RouteParams])
    ], LastComponent);
    return LastComponent;
}());
exports.LastComponent = LastComponent;
//# sourceMappingURL=LastComponent.js.map