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
var http_1 = require('@angular/http');
require('./rxjsO');
var GetService = (function () {
    function GetService(_http) {
        this._http = _http;
        this.link = '/include/get.php?data=';
        this.video = {};
        this.five = Array();
        this.total = Array();
    }
    GetService.prototype.getData = function (plus) {
        var _this = this;
        if (plus === void 0) { plus = ''; }
        var aPromise = this._http.get(this.link + plus)
            .map(function (res) { return res.json(); }).toPromise();
        var response;
        aPromise.then(function (data) {
            _this.list = data.list;
            if (data.list.length == 0)
                _this.empty = true;
            else
                _this.empty = false;
            console.log(data.list);
            for (var i = 1; i <= Math.ceil(data.total / data.limit); i++) {
                _this.total.push(i);
            }
        });
    };
    GetService.prototype.getFive = function (link) {
        var _this = this;
        var url = this.link + link;
        var promise = this._http.get(url).map(function (response) { return response.json().list; }).toPromise();
        promise.then(function (data) {
            _this.five = data;
        });
    };
    GetService.prototype.getVideo = function (id) {
        var _this = this;
        var aPromise = this._http.get(this.link + 'id=' + id).map(function (response) { return response.json().list; }).toPromise();
        aPromise.then(function (data) {
            _this.video = data[0];
            document.title = data[0].title + " - Dubbing Show";
        });
    };
    GetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GetService);
    return GetService;
}());
exports.GetService = GetService;
//# sourceMappingURL=GetService.js.map