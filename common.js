(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/service/research-site.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/research-site.service.ts ***!
  \**************************************************/
/*! exports provided: ResearchSiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchSiteService", function() { return ResearchSiteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Can be injected into a constructor
var ResearchSiteService = /** @class */ (function () {
    function ResearchSiteService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'ResearchSite';
    }
    ;
    ResearchSiteService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    ResearchSiteService.prototype.getparticipant = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    ResearchSiteService.prototype.addParticipant = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    ResearchSiteService.prototype.updateParticipant = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    ResearchSiteService.prototype.deleteParticipant = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    ResearchSiteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ResearchSiteService);
    return ResearchSiteService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map