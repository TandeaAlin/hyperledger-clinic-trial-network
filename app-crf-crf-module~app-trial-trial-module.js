(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-crf-crf-module~app-trial-trial-module"],{

/***/ "./src/app/crf/crf.component.css":
/*!***************************************!*\
  !*** ./src/app/crf/crf.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max-width {\n    width: 100%;\n  }"

/***/ }),

/***/ "./src/app/crf/crf.component.html":
/*!****************************************!*\
  !*** ./src/app/crf/crf.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-div\">\n    <mat-card class=\"description-card\">\n        <mat-card-header>\n            <div class=\"marginAutoLR\">\n                <h1>\n                    Form builder\n                </h1>\n            </div>\n            <br/>\n        </mat-card-header>\n        <mat-card-content>\n            <mat-divider></mat-divider>\n            <mat-divider></mat-divider>\n            <br/>\n            <mat-form-field class=\"input-field-full-width\">\n                <input matInput placeholder=\"Enter a name for the custom form...\" [(ngModel)]=\"customForm.name\">\n            </mat-form-field>\n            <mat-divider></mat-divider>\n            <mat-divider></mat-divider>\n            <div align=\"center\">\n                <h3>\n                    Form fields:\n                </h3>\n            </div>\n            <mat-divider></mat-divider>\n            <br/>\n            <div style=\"display: table; margin: 0 auto; width: 75%\">\n                <div *ngFor=\"let formEntry of formFields\">\n                    <mat-divider></mat-divider>\n                    <div *ngIf=\"formEntry.entryType == 0\">\n                        <mat-form-field class=\"input-field-width\">\n                            <input matInput placeholder=\"{{formEntry.entryName}}\">\n\n                        </mat-form-field>&nbsp;\n                        <button mat-button (click)=\"removeField(formEntry)\">Remove</button>\n                    </div>\n                    <div *ngIf=\"formEntry.entryType == 1\">\n                        <mat-radio-group class=\"input-field-width\">\n                            <table>\n                                <thead>{{formEntry.entryName}}</thead>\n                                \n                                <tbody>\n                                    <tr>\n                                        <div>\n                                            <td *ngFor=\"let option of formEntry.entryOptions\">\n                                                <mat-radio-button value=\"{{option}}\">{{option}}</mat-radio-button>\n                                            </td>\n                                            <td>\n                                            <button mat-button (click)=\"removeField(formEntry)\">Remove</button>\n                                        </td>\n                                        </div>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </mat-radio-group>\n                    </div>\n                    <div *ngIf=\"formEntry.entryType == 2\">\n                        <mat-form-field class=\"input-field-width\">\n                            <mat-select placeholder=\"{{formEntry.entryName}}\" [(ngModel)]=\"formEntry.value\">\n                                <mat-option *ngFor=\"let option of formEntry.entryOptions\" [value]=\"option\">\n                                    {{option}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>&nbsp;\n                        <button mat-button (click)=\"removeField(formEntry)\">Remove</button>\n                        \n                    </div>\n                </div>\n                <mat-divider></mat-divider>\n            </div>\n\n            <br/>\n            <div *ngIf=\"displayFormField\">\n\n                <mat-vertical-stepper [linear]=\"true\" #stepper>\n                    <mat-step>\n                        <form [formGroup]=\"fieldNameFormGroup\">\n                            <ng-template matStepLabel>\n                                Enter the new field name:\n                            </ng-template>\n                            <mat-form-field class=\"input-field-small\">\n                                <input matInput placeholder=\"New field name\" [(ngModel)]=\"formField.entryName\" [ngModelOptions]=\"{standalone: true}\" required>\n                            </mat-form-field>\n                            <div>\n                                <button mat-button matStepperNext>Next</button>\n                                <button mat-button (click)=\"stepper.reset()  ; clearFormEntry()\">Cancel</button>\n                            </div>\n                        </form>\n\n                    </mat-step>\n                    <mat-step *ngIf=\"(displayChoice || displaySelector)\">\n                        <form [formGroup]=\"fieldNameFormGroup\">\n                            <ng-template matStepLabel>\n                                Enter the new field options:\n                            </ng-template>\n                            <mat-form-field class=\"max-width\">\n                                <mat-chip-list #chipList>\n                                    <mat-chip *ngFor=\"let header of dataHeaders\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(header)\">\n                                        {{header}}\n                                        <mat-icon matChipRemove>cancel</mat-icon>\n                                    </mat-chip>\n                                    <input placeholder=\"Possible values for choice...\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                        [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\" />\n                                </mat-chip-list>\n                            </mat-form-field>\n                            <div>\n                                <button mat-button matStepperPrevious>Back</button>&nbsp;\n                                <button mat-button matStepperNext>Next</button>&nbsp;\n                                <button mat-button (click)=\"stepper.reset() ; clearFormEntry()\">Cancel</button>\n\n                            </div>\n                        </form>\n                    </mat-step>\n                    <mat-step *ngIf=\"formField\">\n                        <ng-template matStepLabel>Preview</ng-template>\n                        <h5>This is a preview of the field that will be added to the form:</h5>\n                        <div *ngIf=\"formField.entryType == 0\">\n                            <mat-form-field class=\"input-field-small\">\n                                <input matInput placeholder=\"{{formField.entryName}}\">\n                            </mat-form-field>\n                        </div>\n                        <div *ngIf=\"formField.entryType == 1\">\n                            <mat-radio-group>\n                                <table>\n                                    <thead>{{formField.entryName}}</thead>\n                                    <tbody>\n                                        <tr>\n                                            <div>\n                                                <td *ngFor=\"let option of dataHeaders\">\n                                                    <mat-radio-button value=\"{{option}}\">{{option}}</mat-radio-button>\n                                                </td>\n                                            </div>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </mat-radio-group>\n                        </div>\n                        <div *ngIf=\"formField.entryType == 2\">\n                            <mat-form-field>\n                                <mat-select placeholder=\"{{formField.entryName}}\" [(ngModel)]=\"formField.value\">\n                                    <mat-option *ngFor=\"let option of dataHeaders\" [value]=\"option\">\n                                        {{option}}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                        <mat-divider></mat-divider>\n                        <br/>\n                        <div>\n                            <button mat-button matStepperPrevious>Back</button>&nbsp;\n                            <button mat-button (click)=\"stepper.reset() ;  clearFormEntry()\">Cancel</button>\n                            &nbsp;\n                            <button mat-button (click)=\"addField()\"> Add</button>\n                        </div>\n                    </mat-step>\n                </mat-vertical-stepper>\n            </div>\n            <br/>\n            <div align=\"center\">\n                <h4>\n                    Choose the type of the new field\n                </h4>\n            </div>\n\n\n            <!-- Container with the types of form fields -->\n            <div align=\"center\">\n                <button mat-raised-button [matMenuTriggerFor]=\"menu\" color=\"primary\">New input field</button>\n                <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item (click)=\"formFieldSelect()\">Text Field</button>\n                    <button mat-menu-item (click)=\"choiceSelect()\">Choice</button>\n                    <button mat-menu-item (click)=\"selectorSelect()\">Selector</button>\n                </mat-menu>\n            </div>\n        </mat-card-content>\n    </mat-card>\n</div>\n<br/>\n<div>\n\n</div>\n<div>\n    <table>\n        <tbody>\n            <tr>\n                <td>\n                    <button mat-raised-button (click)=\"saveForm()\" style=\"float: right, top;\" color=\"primary\">Save</button>\n                </td>\n                <td>\n                    <button mat-raised-button (click)=\"cancelForm()\" style=\"float: right, top;\" color=\"primary\">Cancel</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n</div>"

/***/ }),

/***/ "./src/app/crf/crf.component.ts":
/*!**************************************!*\
  !*** ./src/app/crf/crf.component.ts ***!
  \**************************************/
/*! exports provided: CRFComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRFComponent", function() { return CRFComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_ro_utcluj_clinictrial_trial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/ro.utcluj.clinictrial.trial */ "./src/app/model/ro.utcluj.clinictrial.trial.ts");
/* harmony import */ var _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/ro.utcluj.vo */ "./src/app/model/ro.utcluj.vo.ts");
/* harmony import */ var _service_CustomForm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/CustomForm.service */ "./src/app/service/CustomForm.service.ts");
/* harmony import */ var _service_transaction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/transaction-service */ "./src/app/service/transaction-service.ts");
/* harmony import */ var _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/id-provider.service */ "./src/app/utils/id-provider.service.ts");
/* harmony import */ var _utils_resource_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/resource-provider */ "./src/app/utils/resource-provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CRFComponent = /** @class */ (function () {
    function CRFComponent(_idProvider, _customFormService, _router, _route, _location, _formBuilder, _transactionService) {
        var _this = this;
        this._idProvider = _idProvider;
        this._customFormService = _customFormService;
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this._formBuilder = _formBuilder;
        this._transactionService = _transactionService;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.dataHeaders = [];
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        this.formFields = [];
        this.formField = new _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_6__["FormVO"]();
        this.customForm = new _model_ro_utcluj_clinictrial_trial__WEBPACK_IMPORTED_MODULE_5__["CustomForm"]();
        this.createFormTransaction = new _model_ro_utcluj_clinictrial_trial__WEBPACK_IMPORTED_MODULE_5__["CreateCustomForm"]();
        this.displayFormField = false;
        this.displayChoice = false;
        this.displaySelector = false;
        this.previewForm = false;
        var id = this._route.params
            .subscribe(function (params) {
            var id = params['idTrial'];
            _this.idTrial = id;
            console.log("Building form for trial = " + _this.idTrial);
        });
    }
    CRFComponent.prototype.ngOnInit = function () {
        this.clearFormEntry();
        this.nameFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.fieldNameFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.fieldOptionsFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    CRFComponent.prototype.formFieldSelect = function () {
        console.log("form field selected");
        this.displayFormField = true;
        this.formField.entryType = _model_ro_utcluj_clinictrial_trial__WEBPACK_IMPORTED_MODULE_5__["EntryType"].FORM_FIELD;
    };
    CRFComponent.prototype.choiceSelect = function () {
        console.log("Choice selected");
        this.displayFormField = true;
        this.displayChoice = true;
        this.formField.entryType = _model_ro_utcluj_clinictrial_trial__WEBPACK_IMPORTED_MODULE_5__["EntryType"].CHOICE_FIELD;
    };
    CRFComponent.prototype.selectorSelect = function () {
        this.displayFormField = true;
        this.displaySelector = true;
        this.formField.entryType = _model_ro_utcluj_clinictrial_trial__WEBPACK_IMPORTED_MODULE_5__["EntryType"].SELECTOR_FIELD;
    };
    CRFComponent.prototype.addField = function () {
        this.formField.entryOptions = this.dataHeaders;
        this.formField.value = "";
        this.formFields.push(this.formField);
        console.log(this.formField);
        this.clearFormEntry();
        this.hideInputs();
        console.log(this.formFields);
    };
    CRFComponent.prototype.removeField = function (formEntry) {
        var index = this.formFields.indexOf(formEntry);
        this.formFields.splice(index, 1);
    };
    CRFComponent.prototype.clearFormEntry = function () {
        this.displayFormField = false;
        this.displayChoice = false;
        this.displaySelector = false;
        this.formField = new _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_6__["FormVO"]();
        this.formField.entryName = "";
        this.formField.entryOptions = [];
        this.dataHeaders = [];
        this.formField.value = "";
    };
    CRFComponent.prototype.hideInputs = function () {
        this.displayFormField = false;
        this.displayChoice = false;
        this.displaySelector = false;
    };
    CRFComponent.prototype.saveForm = function () {
        var _this = this;
        var formEntries = [];
        for (var _i = 0, _a = this.formFields; _i < _a.length; _i++) {
            var entry = _a[_i];
            formEntries.push(entry);
        }
        this.createFormTransaction.formMeta = formEntries;
        this.createFormTransaction.idForm = this._idProvider.generateID();
        this.createFormTransaction.trial = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_10__["ResourceProvider"].newTrialResource(this.idTrial);
        this.createFormTransaction.dateCreated = this.generateTimestamp();
        this.createFormTransaction.name = this.customForm.name;
        console.log(JSON.stringify(this.createFormTransaction));
        this._transactionService.createCustomForm(this.createFormTransaction)
            .subscribe(function (res) {
            _this._router.navigate([_this._router.url]);
        });
    };
    CRFComponent.prototype.cancelForm = function () {
        this._router.navigate([this._router.url]);
    };
    CRFComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        console.log(value);
        if ((value || '').trim()) {
            this.dataHeaders.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
    };
    CRFComponent.prototype.remove = function (header) {
        var index = this.dataHeaders.indexOf(header);
        if (index >= 0) {
            this.dataHeaders.splice(index, 1);
        }
    };
    CRFComponent.prototype.generateTimestamp = function () {
        var date = new Date();
        return date.toLocaleDateString();
    };
    CRFComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'crf-component',
            template: __webpack_require__(/*! ./crf.component.html */ "./src/app/crf/crf.component.html"),
            styles: [__webpack_require__(/*! ./crf.component.css */ "./src/app/crf/crf.component.css")]
        }),
        __metadata("design:paramtypes", [_utils_id_provider_service__WEBPACK_IMPORTED_MODULE_9__["IdProviderService"],
            _service_CustomForm_service__WEBPACK_IMPORTED_MODULE_7__["CustomFormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _service_transaction_service__WEBPACK_IMPORTED_MODULE_8__["TransactionService"]])
    ], CRFComponent);
    return CRFComponent;
}());



/***/ }),

/***/ "./src/app/crf/crf.module.ts":
/*!***********************************!*\
  !*** ./src/app/crf/crf.module.ts ***!
  \***********************************/
/*! exports provided: CRFModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRFModule", function() { return CRFModule; });
/* harmony import */ var _crf_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crf.component */ "./src/app/crf/crf.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _crf_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crf.routing */ "./src/app/crf/crf.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/id-provider.service */ "./src/app/utils/id-provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CRFModule = /** @class */ (function () {
    function CRFModule() {
    }
    CRFModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                _crf_routing__WEBPACK_IMPORTED_MODULE_4__["CRFRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [
                _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_6__["IdProviderService"]
            ],
            declarations: [
                _crf_component__WEBPACK_IMPORTED_MODULE_0__["CRFComponent"]
            ],
            exports: [
                _crf_component__WEBPACK_IMPORTED_MODULE_0__["CRFComponent"]
            ]
        })
    ], CRFModule);
    return CRFModule;
}());



/***/ }),

/***/ "./src/app/crf/crf.routing.ts":
/*!************************************!*\
  !*** ./src/app/crf/crf.routing.ts ***!
  \************************************/
/*! exports provided: CRFRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRFRoutingModule", function() { return CRFRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crf_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crf.component */ "./src/app/crf/crf.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _crf_component__WEBPACK_IMPORTED_MODULE_2__["CRFComponent"] },
];
var CRFRoutingModule = /** @class */ (function () {
    function CRFRoutingModule() {
    }
    CRFRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CRFRoutingModule);
    return CRFRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-crf-crf-module~app-trial-trial-module.js.map