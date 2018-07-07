(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/administration/administration.module": [
		"./src/app/administration/administration.module.ts",
		"common",
		"app-administration-administration-module"
	],
	"app/agent/agent.module": [
		"./src/app/agent/agent.module.ts",
		"app-agent-agent-module"
	],
	"app/crf/crf.module": [
		"./src/app/crf/crf.module.ts",
		"app-crf-crf-module~app-trial-trial-module",
		"common"
	],
	"app/home/home.module": [
		"./src/app/home/home.module.ts",
		"app-home-home-module"
	],
	"app/trial/trial.module": [
		"./src/app/trial/trial.module.ts",
		"app-crf-crf-module~app-trial-trial-module",
		"common",
		"app-trial-trial-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header _ngcontent-c0=\"\">\n    <navbar-component></navbar-component>\n</header>\n<div *ngIf=\"objLoaderStatus\" class=\"loading-indicator\">\n        <mat-spinner mode=\"indeterminate\"></mat-spinner>\n    </div>\n<router-outlet>\n\n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loader/loader.service */ "./src/app/components/loader/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(loaderService) {
        this.loaderService = loaderService;
        this.objLoaderStatus = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.loaderState.subscribe(function (val) {
            _this.objLoaderStatus = val;
            console.log(val);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [_components_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/id-provider.service */ "./src/app/utils/id-provider.service.ts");
/* harmony import */ var _service_ProtocolFile_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/ProtocolFile.service */ "./src/app/service/ProtocolFile.service.ts");
/* harmony import */ var _service_configuration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/configuration */ "./src/app/service/configuration.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _service_queries_files_query_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/queries/files-query-service */ "./src/app/service/queries/files-query-service.ts");
/* harmony import */ var _service_queries_forms_query_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/queries/forms-query-service */ "./src/app/service/queries/forms-query-service.ts");
/* harmony import */ var _service_queries_query_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/queries/query-service */ "./src/app/service/queries/query-service.ts");
/* harmony import */ var _service_CustomForm_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/CustomForm.service */ "./src/app/service/CustomForm.service.ts");
/* harmony import */ var _service_transaction_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/transaction-service */ "./src/app/service/transaction-service.ts");
/* harmony import */ var _service_system_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/system-service */ "./src/app/service/system-service.ts");
/* harmony import */ var _service_queries_form_value_query_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/queries/form-value-query-service */ "./src/app/service/queries/form-value-query-service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_researcher_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/researcher.service */ "./src/app/service/researcher.service.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/component.module */ "./src/app/components/component.module.ts");
/* harmony import */ var _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/loader/loader.service */ "./src/app/components/loader/loader.service.ts");
/* harmony import */ var _service_historian_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/historian.service */ "./src/app/service/historian.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["AppMaterialModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_22__["ComponentModule"],
            ],
            providers: [
                _service_configuration__WEBPACK_IMPORTED_MODULE_11__["Configuration"],
                _service_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"],
                _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_9__["IdProviderService"],
                _service_ProtocolFile_service__WEBPACK_IMPORTED_MODULE_10__["ProtocolFileService"],
                _service_queries_files_query_service__WEBPACK_IMPORTED_MODULE_13__["FilesQueryService"],
                _service_queries_query_service__WEBPACK_IMPORTED_MODULE_15__["QueryService"],
                _service_CustomForm_service__WEBPACK_IMPORTED_MODULE_16__["CustomFormService"],
                _service_queries_forms_query_service__WEBPACK_IMPORTED_MODULE_14__["FormQueryService"],
                _service_transaction_service__WEBPACK_IMPORTED_MODULE_17__["TransactionService"],
                _service_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                _service_queries_form_value_query_service__WEBPACK_IMPORTED_MODULE_19__["FormValueQueryService"],
                _service_system_service__WEBPACK_IMPORTED_MODULE_18__["SystemService"],
                _service_researcher_service__WEBPACK_IMPORTED_MODULE_21__["ResearcherService"],
                _service_historian_service__WEBPACK_IMPORTED_MODULE_24__["HistorianService"],
                _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_23__["LoaderService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'administration', loadChildren: 'app/administration/administration.module#AdministrationModule' },
    { path: 'crf', loadChildren: 'app/crf/crf.module#CRFModule' },
    { path: 'trial', loadChildren: 'app/trial/trial.module#TrialModule' },
    { path: 'agent', loadChildren: 'app/agent/agent.module#AgentModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/component.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/component.module.ts ***!
  \************************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_patient_page_patient_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/patient-page/patient-page.component */ "./src/app/components/patient-page/patient-page.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/id-provider.service */ "./src/app/utils/id-provider.service.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "./src/app/components/form/form.component.ts");
/* harmony import */ var _patient_patient_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patient/patient-table.component */ "./src/app/components/patient/patient-table.component.ts");
/* harmony import */ var _records_records_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./records/records.component */ "./src/app/components/records/records.component.ts");
/* harmony import */ var _utils_resource_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/resource-provider */ "./src/app/utils/resource-provider.ts");
/* harmony import */ var _user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-manager/user-manager.component */ "./src/app/components/user-manager/user-manager.component.ts");
/* harmony import */ var _researcher_table_researcher_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./researcher-table/researcher-table.component */ "./src/app/components/researcher-table/researcher-table.component.ts");
/* harmony import */ var _service_FormValue_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../service/FormValue.service */ "./src/app/service/FormValue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            providers: [
                _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_7__["IdProviderService"],
                _service_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"],
                _utils_resource_provider__WEBPACK_IMPORTED_MODULE_11__["ResourceProvider"],
                _service_FormValue_service__WEBPACK_IMPORTED_MODULE_14__["FormValueService"]
            ],
            declarations: [
                _patient_patient_table_component__WEBPACK_IMPORTED_MODULE_9__["PatientTableComponent"],
                _components_patient_page_patient_page_component__WEBPACK_IMPORTED_MODULE_4__["PatientPageComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                _patient_patient_table_component__WEBPACK_IMPORTED_MODULE_9__["CustomFormSelectDialog"],
                _user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_12__["UserManagerComponent"],
                _researcher_table_researcher_table_component__WEBPACK_IMPORTED_MODULE_13__["ResearcherTableComponent"],
                _records_records_component__WEBPACK_IMPORTED_MODULE_10__["RecordsComponent"]
            ],
            entryComponents: [
                _patient_patient_table_component__WEBPACK_IMPORTED_MODULE_9__["PatientTableComponent"],
                _patient_patient_table_component__WEBPACK_IMPORTED_MODULE_9__["CustomFormSelectDialog"]
            ],
            exports: [
                _patient_patient_table_component__WEBPACK_IMPORTED_MODULE_9__["PatientTableComponent"],
                _components_patient_page_patient_page_component__WEBPACK_IMPORTED_MODULE_4__["PatientPageComponent"],
                _user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_12__["UserManagerComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                _researcher_table_researcher_table_component__WEBPACK_IMPORTED_MODULE_13__["ResearcherTableComponent"],
                _patient_patient_table_component__WEBPACK_IMPORTED_MODULE_9__["CustomFormSelectDialog"],
                _records_records_component__WEBPACK_IMPORTED_MODULE_10__["RecordsComponent"]
            ]
        })
    ], ComponentModule);
    return ComponentModule;
}());



/***/ }),

/***/ "./src/app/components/form/form.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/form/form.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isInitialised\">\n\n  <div class=\"center-div\">\n        <mat-card class=\"description-card\">\n          <mat-card-header class=\"marginAutoLR\">\n            <mat-card-title><h2>{{title}}</h2></mat-card-title>\n            <mat-card-subtitle  *ngIf=\"idPatient\"><h3>Data colected for patient with ID = {{idPatient}}  <button mat-button color=\"primary\" (click)=\"viewPatient(idPatient)\"> View Patient </button></h3> \n             \n            </mat-card-subtitle>\n          </mat-card-header>\n        </mat-card>\n    \n    \n    </div>\n    <br/>\n    <div *ngFor=\"let formEntry of customForm.formMeta\">\n        <mat-divider></mat-divider>\n        <br/>\n        <br/>\n        <div *ngIf=\"formEntry.entryType == 0\">\n            <mat-form-field class=\"input-field-width\">\n                <input matInput placeholder=\"{{formEntry.entryName}}\" [(ngModel)]=\"formEntry.value\" ngDefaultControl>\n            </mat-form-field>\n        </div>\n        <div *ngIf=\"formEntry.entryType == 1\">\n            <mat-radio-group>\n                <table>\n                    <thead>{{formEntry.entryName}}</thead>\n                    <tbody>\n                        <tr>\n                            <div>\n                                <mat-radio-group [(ngModel)]=formEntry.value>\n                                    <td *ngFor=\"let option of formEntry.entryOptions\">\n                                        <mat-radio-button value=\"{{option}}\">{{option}}</mat-radio-button>\n                                    </td>\n                                </mat-radio-group>\n                            </div>\n                        </tr>\n                    </tbody>\n                </table>\n            </mat-radio-group>\n        </div>\n        <div *ngIf=\"formEntry.entryType == 2\">\n            <mat-form-field class=\"input-field-width\">\n                <mat-select placeholder=\"{{formEntry.entryName}}\" [(ngModel)]=\"formEntry.value\">\n                    <mat-option *ngFor=\"let option of formEntry.entryOptions\" [value]=\"option\">\n                        {{option}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </div>\n    <br/>\n    <table *ngIf=\"!disabled\">\n        <tbody>\n            <tr>\n                <td>\n                    <button mat-raised-button (click)=\"save()\" style=\"float: right, down;\" color=\"primary\">Save</button>\n                </td>\n                <td>\n                    <button mat-raised-button (click)=\"cancel()\" style=\"float: right, down;\" color=\"primary\">Cancel</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <div *ngIf=\"disabled\">\n            <button mat-raised-button (click)=\"cancel()\" style=\"float: right, down;\" color=\"primary\">Close</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_ro_utcluj_clinictrial_trial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/ro.utcluj.clinictrial.trial */ "./src/app/model/ro.utcluj.clinictrial.trial.ts");
/* harmony import */ var _service_CustomForm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/CustomForm.service */ "./src/app/service/CustomForm.service.ts");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _service_transaction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/transaction-service */ "./src/app/service/transaction-service.ts");
/* harmony import */ var _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/id-provider.service */ "./src/app/utils/id-provider.service.ts");
/* harmony import */ var _utils_resource_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/resource-provider */ "./src/app/utils/resource-provider.ts");
/* harmony import */ var _service_FormValue_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/FormValue.service */ "./src/app/service/FormValue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FormComponent = /** @class */ (function () {
    function FormComponent(_patientService, _router, _customFormService, formBuilder, _transactionSevice, _idProvider, _formValueService) {
        this._patientService = _patientService;
        this._router = _router;
        this._customFormService = _customFormService;
        this.formBuilder = formBuilder;
        this._transactionSevice = _transactionSevice;
        this._idProvider = _idProvider;
        this._formValueService = _formValueService;
        this.isInitialised = false;
    }
    FormComponent.prototype.ngOnChanges = function () {
    };
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Patient : ' + this.idPatient);
        console.log('Form : ' + this.idForm);
        this._customFormService.getAsset(this.idForm).subscribe(function (res) {
            _this.customForm = res;
            _this.buildForm();
            _this.title = _this.customForm.name;
            if (_this.disabled) {
                _this.title += ' - Preview Mode';
                if (_this.idFormValue) {
                    _this._formValueService.getAsset(_this.idFormValue).subscribe(function (res) {
                        _this.customForm.formMeta = res.formMeta;
                        _this.idPatient = res.patient.idPatient;
                    });
                }
            }
            _this.isInitialised = true;
        });
    };
    FormComponent.prototype.viewPatient = function (idPatient) {
        this._router.navigateByUrl('/view/' + idPatient);
    };
    FormComponent.prototype.buildForm = function () {
        this.customFormGroup = this.formBuilder.group({
            basicFormControl: this.formBuilder.
                control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.basicFormControl = this.customFormGroup.get('basicFormControl');
    };
    FormComponent.prototype.save = function () {
        var _this = this;
        var tx = new _model_ro_utcluj_clinictrial_trial__WEBPACK_IMPORTED_MODULE_3__["AddFormData"]();
        tx.formMeta = this.customForm.formMeta;
        tx.idFormData = this._idProvider.generateID();
        tx.customForm = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_8__["ResourceProvider"].newCustomFormResource(this.customForm.idForm);
        tx.patient = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_8__["ResourceProvider"].newPatientResource(this.idPatient);
        this._transactionSevice.addFormData(tx)
            .subscribe(function (res) {
            _this._router.navigate([_this._router.url]);
        });
    };
    FormComponent.prototype.cancel = function () {
        this._router.navigate([this._router.url]);
    };
    FormComponent.prototype.generateTimestamp = function () {
        var date = new Date();
        return date.toLocaleDateString();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FormComponent.prototype, "idPatient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FormComponent.prototype, "idForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FormComponent.prototype, "idFormValue", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/components/form/form.component.html")
        }),
        __metadata("design:paramtypes", [_service_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_CustomForm_service__WEBPACK_IMPORTED_MODULE_4__["CustomFormService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _service_transaction_service__WEBPACK_IMPORTED_MODULE_6__["TransactionService"],
            _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_7__["IdProviderService"],
            _service_FormValue_service__WEBPACK_IMPORTED_MODULE_9__["FormValueService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/loader/loader.service.ts ***!
  \*****************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this.loaderSubject.next(true);
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next(false);
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/components/patient-page/patient-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/patient-page/patient-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table width=\"100%\">\n    <tbody>\n        <tr>\n            <td width=\"60%\">\n                <mat-form-field class=\"input-field-full-width\">\n                    <input matInput placeholder=\"Search patients...\" [(ngModel)]=\"searchQuery\">\n                </mat-form-field>\n            </td>\n            <td width=\"40%\">\n                <button mat-raised-button (click)=\"search()\" color=\"primary\">Search</button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<br/>\n\n<patient-table [allPatientsDataSource]=\"allPatientsDataSource\" [adminMode]=false [idTrial]=\"idTrial\" [enrol]=true></patient-table>\n<br/>\n<button mat-raised-button (click)=\"cancel()\" style=\"float: right, down;\" color=\"primary\">Cancel</button>"

/***/ }),

/***/ "./src/app/components/patient-page/patient-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/patient-page/patient-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: PatientPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPageComponent", function() { return PatientPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/patient.service */ "./src/app/service/patient.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientPageComponent = /** @class */ (function () {
    function PatientPageComponent(_patientService, _router) {
        this._patientService = _patientService;
        this._router = _router;
        this.allPatients = [];
        this.searchQuery = "";
    }
    PatientPageComponent.prototype.ngOnChanges = function () {
        console.log(this.idTrial);
    };
    PatientPageComponent.prototype.ngOnInit = function () {
    };
    PatientPageComponent.prototype.cancel = function () {
        this._router.navigate([this._router.url]);
    };
    PatientPageComponent.prototype.search = function () {
        var _this = this;
        console.log("Searching for ... " + this.searchQuery);
        if (this.searchQuery == "") {
            this._patientService.getAll()
                .subscribe(function (res) {
                _this.allPatientsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
            }, function (err) {
                alert("Something went wrong while searching! Please try again");
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PatientPageComponent.prototype, "idTrial", void 0);
    PatientPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'patient-page',
            template: __webpack_require__(/*! ./patient-page.component.html */ "./src/app/components/patient-page/patient-page.component.html")
        }),
        __metadata("design:paramtypes", [_service_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PatientPageComponent);
    return PatientPageComponent;
}());



/***/ }),

/***/ "./src/app/components/patient/custom-from-select-dialog.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/patient/custom-from-select-dialog.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Select the form to complete:</h1>\n<mat-dialog-content>\n    <table>\n        <tbody>\n            <tr *ngFor=\"let form of data.forms\">\n                <td>\n                    {{form.name}}\n                </td>\n                <td>\n                 \n                        <button mat-button [mat-dialog-close]=\"form.idForm\">Select</button>\n                 \n                </td>\n            </tr>\n        </tbody>\n    </table>\n</mat-dialog-content>\n<mat-dialog-actions>\n<button mat-button (click)=\"onNoClick()\">Cancel</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/components/patient/patient-table.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/patient/patient-table.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayTable\">\n    <div class=\"table-container mat-elevation-z8\">\n        <mat-table #table [dataSource]=\"allPatientsDataSource\">\n\n            <!-- Patient ID column -->\n            <ng-container matColumnDef=\"PatientID\">\n                <mat-header-cell *matHeaderCellDef> PatientID </mat-header-cell>\n                <mat-cell *matCellDef=\"let patient\"> {{patient.idPatient}} </mat-cell>\n            </ng-container>\n\n            <!-- Name column -->\n            <ng-container matColumnDef=\"Name\">\n                <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let patient\"> {{patient.person.firstName}} {{patient.person.lastName}} </mat-cell>\n            </ng-container>\n\n            <!-- Gender column -->\n            <ng-container matColumnDef=\"Gender\">\n                <mat-header-cell *matHeaderCellDef> Gender </mat-header-cell>\n                <mat-cell *matCellDef=\"let patient\"> {{patient.person.gender}}</mat-cell>\n            </ng-container>\n\n            <!-- Birthdate column -->\n            <ng-container matColumnDef=\"Birthdate\">\n                <mat-header-cell *matHeaderCellDef> Birthdate </mat-header-cell>\n                <mat-cell *matCellDef=\"let patient\"> {{patient.person.birthDetails.dateOfBirth}}</mat-cell>\n            </ng-container>\n\n            <!-- View link column -->\n            <ng-container matColumnDef=\"Actions\">\n                <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\n                <mat-cell *matCellDef=\"let patient\">\n                    <a mat-button [routerLink]=\"['/view',patient.idPatient]\" color=\"primary\">\n                        <i class=\"material-icons\">pageview</i>\n                    </a>\n                    <a mat-button (click)=\"openFormSelection(patient)\" color=\"primary\" *ngIf=\"!adminMode\">\n                        <i class=\"material-icons\">assignment</i>\n                    </a>\n                    <a mat-button [routerLink]=\"['new',patient.idPatient]\" *ngIf=\"adminMode\" color=\"primary\">\n                        <i class=\"material-icons\">mode_edit</i>\n                    </a>\n                    <a mat-button (click)=\"deletePatient(patient)\" *ngIf=\"adminMode\" color=\"primary\">\n                        <i class=\"material-icons\">delete_sweep</i>\n                    </a>\n                </mat-cell>\n            </ng-container>\n\n            <!-- Enroll link column -->\n            <ng-container matColumnDef=\"Enroll\" *ngIf=\"enrol\">\n                <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\n                <mat-cell *matCellDef=\"let patient\">\n                    <button mat-raised-button color=\"primary\" (click)=\"enrollPatient(patient)\">\n                        Enrol\n                    </button>\n                </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n        </mat-table>\n    </div>\n</div>\n<div *ngIf=\"displayForm\">\n    <custom-form [idPatient]=\"patientSelection\" [idForm]=\"formSelection\"></custom-form>\n</div>"

/***/ }),

/***/ "./src/app/components/patient/patient-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/patient/patient-table.component.ts ***!
  \***************************************************************/
/*! exports provided: PatientTableComponent, CustomFormSelectDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientTableComponent", function() { return PatientTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormSelectDialog", function() { return CustomFormSelectDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/transaction */ "./src/app/model/transaction.ts");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _service_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/transaction-service */ "./src/app/service/transaction-service.ts");
/* harmony import */ var _utils_resource_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/resource-provider */ "./src/app/utils/resource-provider.ts");
/* harmony import */ var _service_queries_forms_query_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/queries/forms-query-service */ "./src/app/service/queries/forms-query-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var PatientTableComponent = /** @class */ (function () {
    function PatientTableComponent(_patientService, _router, _route, _transactionService, dialog, _formQueryService) {
        var _this = this;
        this._patientService = _patientService;
        this._router = _router;
        this._route = _route;
        this._transactionService = _transactionService;
        this.dialog = dialog;
        this._formQueryService = _formQueryService;
        this.allPatients = [];
        this.forms = [];
        this.displayTable = true;
        this.displayForm = false;
        this.adminDisplayedColumns = ['PatientID', 'Name', 'Gender', 'Birthdate', 'Actions'];
        this.userDisplayedColumns = ['PatientID', 'Name', 'Gender', 'Birthdate', 'Actions'];
        this.displayedColumns = [];
        this.navigationSubscription = this._router.events.subscribe(function (e) {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                console.log("Loading table patient data....");
                console.log(_this.allPatientsDataSource);
                _this.displayTable = true;
                _this.displayForm = false;
            }
        });
    }
    PatientTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.idTrial);
        this._formQueryService.findCustomFormsByTrial(this.idTrial)
            .subscribe(function (res) {
            _this.forms = res;
        });
        if (this.adminMode) {
            this.displayedColumns = this.adminDisplayedColumns;
        }
        else {
            this.displayedColumns = this.userDisplayedColumns;
            if (this.enrol) {
                this.displayedColumns.push('Enroll');
            }
        }
    };
    PatientTableComponent.prototype.ngOnChanges = function () {
    };
    PatientTableComponent.prototype.ngAfterViewInit = function () {
        //  this.allPatientsDataSource.paginator = this.paginator;
    };
    PatientTableComponent.prototype.enrollPatient = function (patient) {
        var _this = this;
        this.enrolPatientTransaction = new _model_transaction__WEBPACK_IMPORTED_MODULE_3__["EnrolPatientTransaction"]();
        this.enrolPatientTransaction.patient = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_6__["ResourceProvider"].newPatientResource(patient.idPatient);
        this.enrolPatientTransaction.trial = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_6__["ResourceProvider"].newTrialResource(this.idTrial);
        console.log(patient.trial);
        this._transactionService.enrolPatientTransaction(this.enrolPatientTransaction).subscribe(function (res) { return _this._router.navigate([_this._router.url]); });
    };
    PatientTableComponent.prototype.deletePatient = function (patient) {
        var _this = this;
        console.log(patient.idPatient);
        this._patientService.deleteAsset(patient.idPatient)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this._router.navigate(['administration']);
        })
            .catch(function (error) {
            if (error == 'Server error') {
                alert("Could not connect to REST server. Please check your configuration details");
            }
            else if (error == '404 - Not Found') {
                alert("404 - Could not find API route. Please check your available APIs.");
            }
            else {
                alert(error);
            }
        });
    };
    PatientTableComponent.prototype.openFormSelection = function (patient) {
        var _this = this;
        console.log('Opening dialog');
        console.log(this.forms);
        var dialogRef = this.dialog.open(CustomFormSelectDialog, {
            width: '25%',
            data: { forms: this.forms }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            _this.formSelection = result;
            _this.patientSelection = patient.idPatient;
            _this.onFormSelect();
        });
    };
    PatientTableComponent.prototype.onFormSelect = function () {
        if (this.formSelection) {
            this.displayForm = true;
            this.displayTable = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"])
    ], PatientTableComponent.prototype, "allPatientsDataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PatientTableComponent.prototype, "adminMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PatientTableComponent.prototype, "idTrial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PatientTableComponent.prototype, "enrol", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], PatientTableComponent.prototype, "paginator", void 0);
    PatientTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'patient-table',
            template: __webpack_require__(/*! ./patient-table.component.html */ "./src/app/components/patient/patient-table.component.html")
        }),
        __metadata("design:paramtypes", [_service_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_transaction_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _service_queries_forms_query_service__WEBPACK_IMPORTED_MODULE_7__["FormQueryService"]])
    ], PatientTableComponent);
    return PatientTableComponent;
}());

var CustomFormSelectDialog = /** @class */ (function () {
    function CustomFormSelectDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data.forms);
    }
    CustomFormSelectDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CustomFormSelectDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-from-select-dialog',
            template: __webpack_require__(/*! ./custom-from-select-dialog.html */ "./src/app/components/patient/custom-from-select-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], CustomFormSelectDialog);
    return CustomFormSelectDialog;
}());



/***/ }),

/***/ "./src/app/components/records/records.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/records/records.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isInitialised\">\n    <table *ngIf=\"!idFormExternal\">\n        <tbody>\n            <tr>\n                <td>\n                    <mat-form-field>\n                        <mat-select placeholder=\"Select records to view\" [(value)]=\"selectedForm\">\n                            <mat-option value='None'> - </mat-option>\n                            <mat-option *ngFor=\"let form of customForms\" [value]=\"form.idForm\">\n                                {{ form.name }}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </td>\n                <td>\n                    <button mat-raised-button (click)=\"onSelect()\" color=\"primary\">Select</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <div *ngIf=\"displayTable\">\n        <div class=\"table-container mat-elevation-z8\">\n            <mat-table #table [dataSource]=\"recordsDataSource\">\n                <ng-container matColumnDef=\"PatientID\">\n                    <mat-header-cell *matHeaderCellDef> PatientID </mat-header-cell>\n                    <mat-cell *matCellDef=\"let rec\"> test </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"Date\">\n                    <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>\n                    <mat-cell *matCellDef=\"let rec\"> {{rec.date}} </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"Time\">\n                    <mat-header-cell *matHeaderCellDef> Time </mat-header-cell>\n                    <mat-cell *matCellDef=\"let rec\"> {{rec.time}} </mat-cell>\n                </ng-container>\n\n                <!-- Records columns -->\n                <ng-container *ngFor=\"let col of dataColumns; let i = index\" [matColumnDef]=\"col\">\n                    <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>\n                    <mat-cell *matCellDef=\"let rec\"> {{rec.formMeta[i].value}} </mat-cell>\n                </ng-container>\n                <mat-header-row *matHeaderRowDef=\"tableColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: tableColumns;\"></mat-row>\n            </mat-table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/records/records.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/records/records.component.ts ***!
  \*********************************************************/
/*! exports provided: RecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsComponent", function() { return RecordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_CustomForm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/CustomForm.service */ "./src/app/service/CustomForm.service.ts");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _service_queries_forms_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/queries/forms-query-service */ "./src/app/service/queries/forms-query-service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_queries_form_value_query_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/queries/form-value-query-service */ "./src/app/service/queries/form-value-query-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecordsComponent = /** @class */ (function () {
    function RecordsComponent(_patientService, _customFormService, _router, _formQueryService, _formValueQueryService) {
        this._patientService = _patientService;
        this._customFormService = _customFormService;
        this._router = _router;
        this._formQueryService = _formQueryService;
        this._formValueQueryService = _formValueQueryService;
        this.NONE = "None";
        this.customForms = [];
        this.isInitialised = false;
        this.displayTable = false;
        this.selectedForm = this.NONE;
        this.records = [];
        this.tableColumns = [];
        this.dataColumns = [];
    }
    RecordsComponent.prototype.onSelect = function () {
        var _this = this;
        console.log("Display records for : " + this.selectedForm);
        this.tableColumns = [];
        this.dataColumns = [];
        if (this.selectedForm == this.NONE) {
            alert("Please select the data to display!");
            return;
        }
        else {
            this._formValueQueryService.findDataForCustomForm(this.selectedForm).subscribe(function (res) {
                console.log(res);
                _this.tableColumns.push("PatientID");
                _this.tableColumns.push("Date");
                _this.tableColumns.push("Time");
                if (res.length > 0) {
                    var value = res[0];
                    for (var _i = 0, _a = value.formMeta; _i < _a.length; _i++) {
                        var meta = _a[_i];
                        _this.tableColumns.push(meta.entryName);
                        _this.dataColumns.push(meta.entryName);
                    }
                }
                else {
                    alert("No data to display");
                    return;
                }
                _this.recordsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res);
                _this.displayTable = true;
            });
        }
    };
    RecordsComponent.prototype.ngOnChanges = function () {
        console.log(this.idTrial);
    };
    RecordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.idFormExternal) {
            this.idForm = this.idFormExternal;
            this.onSelect();
        }
        else {
            this._formQueryService.findCustomFormsByTrial(this.idTrial).subscribe(function (res) {
                _this.customForms = res;
                console.log(res);
                _this.isInitialised = true;
                _this.displayTable = false;
            });
        }
    };
    RecordsComponent.prototype.getCustomForm = function (idForm) {
        var _this = this;
        this._customFormService.getAsset(this.idForm).subscribe(function (res) {
            _this.customForm = res;
        });
    };
    RecordsComponent.prototype.cancel = function () {
        this._router.navigate([this._router.url]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecordsComponent.prototype, "idTrial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecordsComponent.prototype, "idFormExternal", void 0);
    RecordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'records-component',
            template: __webpack_require__(/*! ./records.component.html */ "./src/app/components/records/records.component.html")
        }),
        __metadata("design:paramtypes", [_service_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"],
            _service_CustomForm_service__WEBPACK_IMPORTED_MODULE_2__["CustomFormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_queries_forms_query_service__WEBPACK_IMPORTED_MODULE_4__["FormQueryService"],
            _service_queries_form_value_query_service__WEBPACK_IMPORTED_MODULE_6__["FormValueQueryService"]])
    ], RecordsComponent);
    return RecordsComponent;
}());



/***/ }),

/***/ "./src/app/components/researcher-table/researcher-table.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/researcher-table/researcher-table.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container mat-elevation-z8 \">\n    <div class=\"table-container \">\n        <mat-table #table [dataSource]=\"dataSource\" style=\"max-height: 50vh\">\n            <!-- Researcher ID column -->\n            <ng-container matColumnDef=\"ResearcherID\">\n                <mat-header-cell *matHeaderCellDef> ResearcherID </mat-header-cell>\n                <mat-cell *matCellDef=\"let res\"> {{res.idResearcher}} </mat-cell>\n            </ng-container>\n\n            <!-- Researcher name column -->\n            <ng-container matColumnDef=\"Name\">\n                <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let res\"> {{res.person.firstName}} {{res.person.lastName}} </mat-cell>\n            </ng-container>\n\n            <!-- Researcher email column -->\n            <ng-container matColumnDef=\"E-mail\">\n                <mat-header-cell *matHeaderCellDef> E-mail </mat-header-cell>\n                <mat-cell *matCellDef=\"let res\"> {{res.person.contactDetails.email}} </mat-cell>\n            </ng-container>\n\n            <!-- Actions column -->\n            <ng-container matColumnDef=\"Actions\" class=\"mat-column-Actions\">\n                <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n                <mat-cell *matCellDef=\"let res\">\n                    <a mat-button (click)=\"removeResearcher(res)\" color=\"primary\" *ngIf=\"activeMode\">\n                        <i class=\"material-icons\">clear</i>\n                    </a>\n\n                    <a mat-button (click)=\"addResearcher(res)\" color=\"primary\" *ngIf=\"!activeMode\">\n                        <i class=\"material-icons\">add</i>\n                    </a>\n                </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"tableColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: tableColumns;\"></mat-row>\n        </mat-table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/researcher-table/researcher-table.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/researcher-table/researcher-table.component.ts ***!
  \***************************************************************************/
/*! exports provided: ResearcherTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearcherTableComponent", function() { return ResearcherTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_transaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/transaction */ "./src/app/model/transaction.ts");
/* harmony import */ var _utils_resource_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/resource-provider */ "./src/app/utils/resource-provider.ts");
/* harmony import */ var _service_transaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/transaction-service */ "./src/app/service/transaction-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResearcherTableComponent = /** @class */ (function () {
    function ResearcherTableComponent(_transactionService, _router) {
        this._transactionService = _transactionService;
        this._router = _router;
        this.displayTable = false;
        this.tableColumns = ['ResearcherID', 'Name', 'E-mail', 'Actions'];
    }
    ResearcherTableComponent.prototype.ngOnInit = function () {
        this.displayTable = true;
    };
    ResearcherTableComponent.prototype.addResearcher = function (res) {
        var _this = this;
        var tx = new _model_transaction__WEBPACK_IMPORTED_MODULE_2__["AddResearcherToTrial"]();
        tx.researcher = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_3__["ResourceProvider"].newResearcherResource(res.idResearcher);
        tx.trial = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_3__["ResourceProvider"].newTrialResource(this.idTrial);
        this._transactionService.addResearcherToTrial(tx).subscribe(function (res) {
            _this._router.navigate([_this._router.url]);
        }, function (err) {
            alert(err.message);
        });
    };
    ResearcherTableComponent.prototype.removeResearcher = function (res) {
        var _this = this;
        var tx = new _model_transaction__WEBPACK_IMPORTED_MODULE_2__["RemoveResearcherFromTrial"]();
        tx.researcher = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_3__["ResourceProvider"].newResearcherResource(res.idResearcher);
        tx.trial = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_3__["ResourceProvider"].newTrialResource(this.idTrial);
        this._transactionService.removeResearcherFromTrial(tx).subscribe(function (res) {
            _this._router.navigate([_this._router.url]);
        }, function (err) {
            alert(err.message);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"])
    ], ResearcherTableComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ResearcherTableComponent.prototype, "activeMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ResearcherTableComponent.prototype, "idTrial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ResearcherTableComponent.prototype, "paginator", void 0);
    ResearcherTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'researcher-table',
            template: __webpack_require__(/*! ./researcher-table.component.html */ "./src/app/components/researcher-table/researcher-table.component.html")
        }),
        __metadata("design:paramtypes", [_service_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ResearcherTableComponent);
    return ResearcherTableComponent;
}());



/***/ }),

/***/ "./src/app/components/user-manager/user-manager.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-manager/user-manager.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayTable\">\n    <div class=\"center-div\">\n        <mat-card style=\"width:50%; height: 65vh;\">\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>Add users</h1>\n                </mat-card-title>\n                <mat-card-subtitle>\n                    <h2></h2>\n                </mat-card-subtitle>\n\n            </mat-card-header>\n            <mat-card-content>\n                <div>\n                    <table width=\"100%\">\n                        <tbody>\n                            <tr>\n                                <td width=\"60%\">\n                                    <mat-form-field class=\"input-field-full-width\">\n                                        <input matInput placeholder=\"Researcher name\" [(ngModel)]=\"searchQuery\">\n                                    </mat-form-field>\n                                </td>\n                                <td width=\"40%\">\n                                    <button mat-raised-button (click)=\"search()\" color=\"primary\">Search</button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <br/>\n                </div>\n                <researcher-table [dataSource] = \"allUsersDataSource\" [activeMode] = \"false\" [idTrial]=\"idTrial\"></researcher-table>\n            </mat-card-content>\n        </mat-card>\n        &nbsp;\n        <mat-card style=\"width: 50%; height: 65vh;\">\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>Active users</h1>\n                </mat-card-title>\n\n            </mat-card-header>\n            <mat-card-content>\n                <br/>\n                <br/>\n                <br/>\n                <br/>\n              <researcher-table [dataSource] = \"usersDataSource\" [activeMode] = \"true\" [idTrial]=\"idTrial\"></researcher-table>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-manager/user-manager.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-manager/user-manager.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerComponent", function() { return UserManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_trial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/trial.service */ "./src/app/service/trial.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_researcher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/researcher.service */ "./src/app/service/researcher.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserManagerComponent = /** @class */ (function () {
    function UserManagerComponent(_trialService, _researcherService, _router) {
        var _this = this;
        this._trialService = _trialService;
        this._researcherService = _researcherService;
        this._router = _router;
        this.searchQuery = "";
        this.navigationSubscription = this._router.events.subscribe(function (e) {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                console.log("loading table data....");
                _this._trialService.getAsset(_this.idTrial).subscribe(function (res) {
                    _this.trial = res;
                    _this.usersDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.trial.responsibles);
                    _this.displayTable = true;
                });
            }
        });
    }
    UserManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._trialService.getAsset(this.idTrial).subscribe(function (res) {
            _this.trial = res;
            _this.usersDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.trial.responsibles);
            _this.displayTable = true;
        });
    };
    UserManagerComponent.prototype.search = function () {
        var _this = this;
        this._researcherService.getAll().subscribe(function (res) {
            if (_this.searchQuery == "") {
                _this.allUsersDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserManagerComponent.prototype, "idTrial", void 0);
    UserManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-manager',
            template: __webpack_require__(/*! ./user-manager.component.html */ "./src/app/components/user-manager/user-manager.component.html")
        }),
        __metadata("design:paramtypes", [_service_trial_service__WEBPACK_IMPORTED_MODULE_1__["TrialService"],
            _service_researcher_service__WEBPACK_IMPORTED_MODULE_3__["ResearcherService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserManagerComponent);
    return UserManagerComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/model/org.hyperledger.composer.system.ts":
/*!**********************************************************!*\
  !*** ./src/app/model/org.hyperledger.composer.system.ts ***!
  \**********************************************************/
/*! exports provided: Asset, Participant, Transaction, Event, Registry, AssetRegistry, ParticipantRegistry, TransactionRegistry, Network, NetworkAdmin, HistorianRecord, RegistryTransaction, AssetTransaction, ParticipantTransaction, AddAsset, UpdateAsset, RemoveAsset, AddParticipant, UpdateParticipant, RemoveParticipant, IdentityState, Identity, IssueIdentity, BindIdentity, ActivateCurrentIdentity, RevokeIdentity, StartBusinessNetwork, ResetBusinessNetwork, SetLogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return Asset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Participant", function() { return Participant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registry", function() { return Registry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetRegistry", function() { return AssetRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantRegistry", function() { return ParticipantRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRegistry", function() { return TransactionRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkAdmin", function() { return NetworkAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorianRecord", function() { return HistorianRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryTransaction", function() { return RegistryTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetTransaction", function() { return AssetTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantTransaction", function() { return ParticipantTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAsset", function() { return AddAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAsset", function() { return UpdateAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveAsset", function() { return RemoveAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParticipant", function() { return AddParticipant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateParticipant", function() { return UpdateParticipant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveParticipant", function() { return RemoveParticipant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityState", function() { return IdentityState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return Identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueIdentity", function() { return IssueIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindIdentity", function() { return BindIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateCurrentIdentity", function() { return ActivateCurrentIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevokeIdentity", function() { return RevokeIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartBusinessNetwork", function() { return StartBusinessNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetBusinessNetwork", function() { return ResetBusinessNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLogLevel", function() { return SetLogLevel; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// export namespace org.hyperledger.composer.system{
var Asset = /** @class */ (function () {
    function Asset() {
    }
    return Asset;
}());

var Participant = /** @class */ (function () {
    function Participant() {
    }
    return Participant;
}());

var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    return Transaction;
}());

var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());

var Registry = /** @class */ (function (_super) {
    __extends(Registry, _super);
    function Registry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Registry;
}(Asset));

var AssetRegistry = /** @class */ (function (_super) {
    __extends(AssetRegistry, _super);
    function AssetRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AssetRegistry;
}(Registry));

var ParticipantRegistry = /** @class */ (function (_super) {
    __extends(ParticipantRegistry, _super);
    function ParticipantRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParticipantRegistry;
}(Registry));

var TransactionRegistry = /** @class */ (function (_super) {
    __extends(TransactionRegistry, _super);
    function TransactionRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TransactionRegistry;
}(Registry));

var Network = /** @class */ (function (_super) {
    __extends(Network, _super);
    function Network() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Network;
}(Asset));

var NetworkAdmin = /** @class */ (function (_super) {
    __extends(NetworkAdmin, _super);
    function NetworkAdmin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NetworkAdmin;
}(Participant));

var HistorianRecord = /** @class */ (function (_super) {
    __extends(HistorianRecord, _super);
    function HistorianRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HistorianRecord;
}(Asset));

var RegistryTransaction = /** @class */ (function (_super) {
    __extends(RegistryTransaction, _super);
    function RegistryTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RegistryTransaction;
}(Transaction));

var AssetTransaction = /** @class */ (function (_super) {
    __extends(AssetTransaction, _super);
    function AssetTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AssetTransaction;
}(RegistryTransaction));

var ParticipantTransaction = /** @class */ (function (_super) {
    __extends(ParticipantTransaction, _super);
    function ParticipantTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParticipantTransaction;
}(RegistryTransaction));

var AddAsset = /** @class */ (function (_super) {
    __extends(AddAsset, _super);
    function AddAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AddAsset;
}(AssetTransaction));

var UpdateAsset = /** @class */ (function (_super) {
    __extends(UpdateAsset, _super);
    function UpdateAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateAsset;
}(AssetTransaction));

var RemoveAsset = /** @class */ (function (_super) {
    __extends(RemoveAsset, _super);
    function RemoveAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RemoveAsset;
}(AssetTransaction));

var AddParticipant = /** @class */ (function (_super) {
    __extends(AddParticipant, _super);
    function AddParticipant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AddParticipant;
}(ParticipantTransaction));

var UpdateParticipant = /** @class */ (function (_super) {
    __extends(UpdateParticipant, _super);
    function UpdateParticipant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateParticipant;
}(ParticipantTransaction));

var RemoveParticipant = /** @class */ (function (_super) {
    __extends(RemoveParticipant, _super);
    function RemoveParticipant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RemoveParticipant;
}(ParticipantTransaction));

var IdentityState;
(function (IdentityState) {
    IdentityState[IdentityState["ISSUED"] = 0] = "ISSUED";
    IdentityState[IdentityState["BOUND"] = 1] = "BOUND";
    IdentityState[IdentityState["ACTIVATED"] = 2] = "ACTIVATED";
    IdentityState[IdentityState["REVOKED"] = 3] = "REVOKED";
})(IdentityState || (IdentityState = {}));
var Identity = /** @class */ (function (_super) {
    __extends(Identity, _super);
    function Identity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Identity;
}(Asset));

var IssueIdentity = /** @class */ (function (_super) {
    __extends(IssueIdentity, _super);
    function IssueIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IssueIdentity;
}(Transaction));

var BindIdentity = /** @class */ (function (_super) {
    __extends(BindIdentity, _super);
    function BindIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BindIdentity;
}(Transaction));

var ActivateCurrentIdentity = /** @class */ (function (_super) {
    __extends(ActivateCurrentIdentity, _super);
    function ActivateCurrentIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ActivateCurrentIdentity;
}(Transaction));

var RevokeIdentity = /** @class */ (function (_super) {
    __extends(RevokeIdentity, _super);
    function RevokeIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RevokeIdentity;
}(Transaction));

var StartBusinessNetwork = /** @class */ (function (_super) {
    __extends(StartBusinessNetwork, _super);
    function StartBusinessNetwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StartBusinessNetwork;
}(Transaction));

var ResetBusinessNetwork = /** @class */ (function (_super) {
    __extends(ResetBusinessNetwork, _super);
    function ResetBusinessNetwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ResetBusinessNetwork;
}(Transaction));

var SetLogLevel = /** @class */ (function (_super) {
    __extends(SetLogLevel, _super);
    function SetLogLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SetLogLevel;
}(Transaction));

// }


/***/ }),

/***/ "./src/app/model/ro.utcluj.clinictrial.trial.ts":
/*!******************************************************!*\
  !*** ./src/app/model/ro.utcluj.clinictrial.trial.ts ***!
  \******************************************************/
/*! exports provided: TrialStatus, TrialPhase, AgeGroup, Gender, Trial, TodoElement, RegisterTrialTransaction, RegisterTrialEvent, TableRow, CustomForm, CreateCustomForm, CreateCustomFormEvent, EntryType, FormValue, FormEntry, ProtocolFile, MedicalHistory, MedicalRecord, EnrolPatientTransaction, EnrolPatientEvent, RemoveResearcherFromTrial, RemoveResearcherEvent, AddResearcherToTrial, AddResearcherEvent, AddFormData, AddFormDataEvent, GetResponsibles, SetupMockData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialStatus", function() { return TrialStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialPhase", function() { return TrialPhase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgeGroup", function() { return AgeGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trial", function() { return Trial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoElement", function() { return TodoElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterTrialTransaction", function() { return RegisterTrialTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterTrialEvent", function() { return RegisterTrialEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomForm", function() { return CustomForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomForm", function() { return CreateCustomForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomFormEvent", function() { return CreateCustomFormEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryType", function() { return EntryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValue", function() { return FormValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEntry", function() { return FormEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolFile", function() { return ProtocolFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalHistory", function() { return MedicalHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalRecord", function() { return MedicalRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrolPatientTransaction", function() { return EnrolPatientTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrolPatientEvent", function() { return EnrolPatientEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveResearcherFromTrial", function() { return RemoveResearcherFromTrial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveResearcherEvent", function() { return RemoveResearcherEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddResearcherToTrial", function() { return AddResearcherToTrial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddResearcherEvent", function() { return AddResearcherEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFormData", function() { return AddFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFormDataEvent", function() { return AddFormDataEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetResponsibles", function() { return GetResponsibles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMockData", function() { return SetupMockData; });
/* harmony import */ var _org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./org.hyperledger.composer.system */ "./src/app/model/org.hyperledger.composer.system.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// export namespace ro.utcluj.clinictrial.trial{
var TrialStatus;
(function (TrialStatus) {
    TrialStatus[TrialStatus["REGISTERED"] = 0] = "REGISTERED";
    TrialStatus[TrialStatus["NOT_RECRUITING"] = 1] = "NOT_RECRUITING";
    TrialStatus[TrialStatus["RECRUITING"] = 2] = "RECRUITING";
    TrialStatus[TrialStatus["RECRUITING_INVITATION"] = 3] = "RECRUITING_INVITATION";
    TrialStatus[TrialStatus["APPROVED"] = 4] = "APPROVED";
    TrialStatus[TrialStatus["SUSPENDED"] = 5] = "SUSPENDED";
    TrialStatus[TrialStatus["REJECTED"] = 6] = "REJECTED";
    TrialStatus[TrialStatus["IN_PROGRES"] = 7] = "IN_PROGRES";
    TrialStatus[TrialStatus["FINISHED"] = 8] = "FINISHED";
})(TrialStatus || (TrialStatus = {}));
var TrialPhase;
(function (TrialPhase) {
    TrialPhase[TrialPhase["PHASE_1"] = 0] = "PHASE_1";
    TrialPhase[TrialPhase["PHASE_2"] = 1] = "PHASE_2";
    TrialPhase[TrialPhase["PHASE_3"] = 2] = "PHASE_3";
    TrialPhase[TrialPhase["PHASE_4"] = 3] = "PHASE_4";
})(TrialPhase || (TrialPhase = {}));
var AgeGroup;
(function (AgeGroup) {
    AgeGroup[AgeGroup["CHILD"] = 0] = "CHILD";
    AgeGroup[AgeGroup["ADULT"] = 1] = "ADULT";
    AgeGroup[AgeGroup["SENIOR"] = 2] = "SENIOR";
})(AgeGroup || (AgeGroup = {}));
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["ALL"] = 2] = "ALL";
})(Gender || (Gender = {}));
var Trial = /** @class */ (function (_super) {
    __extends(Trial, _super);
    function Trial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Trial;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Asset"]));

var TodoElement = /** @class */ (function () {
    function TodoElement() {
    }
    return TodoElement;
}());

var RegisterTrialTransaction = /** @class */ (function (_super) {
    __extends(RegisterTrialTransaction, _super);
    function RegisterTrialTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RegisterTrialTransaction;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Transaction"]));

var RegisterTrialEvent = /** @class */ (function (_super) {
    __extends(RegisterTrialEvent, _super);
    function RegisterTrialEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RegisterTrialEvent;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Event"]));

var TableRow = /** @class */ (function () {
    function TableRow() {
    }
    return TableRow;
}());

var CustomForm = /** @class */ (function (_super) {
    __extends(CustomForm, _super);
    function CustomForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomForm;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Asset"]));

var CreateCustomForm = /** @class */ (function (_super) {
    __extends(CreateCustomForm, _super);
    function CreateCustomForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreateCustomForm;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Transaction"]));

var CreateCustomFormEvent = /** @class */ (function (_super) {
    __extends(CreateCustomFormEvent, _super);
    function CreateCustomFormEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreateCustomFormEvent;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Event"]));

var EntryType;
(function (EntryType) {
    EntryType[EntryType["FORM_FIELD"] = 0] = "FORM_FIELD";
    EntryType[EntryType["CHOICE_FIELD"] = 1] = "CHOICE_FIELD";
    EntryType[EntryType["SELECTOR_FIELD"] = 2] = "SELECTOR_FIELD";
})(EntryType || (EntryType = {}));
var FormValue = /** @class */ (function (_super) {
    __extends(FormValue, _super);
    function FormValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FormValue;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Asset"]));

var FormEntry = /** @class */ (function () {
    function FormEntry() {
    }
    return FormEntry;
}());

var ProtocolFile = /** @class */ (function (_super) {
    __extends(ProtocolFile, _super);
    function ProtocolFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProtocolFile;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Asset"]));

var MedicalHistory = /** @class */ (function (_super) {
    __extends(MedicalHistory, _super);
    function MedicalHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MedicalHistory;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Asset"]));

var MedicalRecord = /** @class */ (function () {
    function MedicalRecord() {
    }
    return MedicalRecord;
}());

var EnrolPatientTransaction = /** @class */ (function (_super) {
    __extends(EnrolPatientTransaction, _super);
    function EnrolPatientTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnrolPatientTransaction;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Transaction"]));

var EnrolPatientEvent = /** @class */ (function (_super) {
    __extends(EnrolPatientEvent, _super);
    function EnrolPatientEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnrolPatientEvent;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Event"]));

var RemoveResearcherFromTrial = /** @class */ (function (_super) {
    __extends(RemoveResearcherFromTrial, _super);
    function RemoveResearcherFromTrial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RemoveResearcherFromTrial;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Transaction"]));

var RemoveResearcherEvent = /** @class */ (function (_super) {
    __extends(RemoveResearcherEvent, _super);
    function RemoveResearcherEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RemoveResearcherEvent;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Event"]));

var AddResearcherToTrial = /** @class */ (function (_super) {
    __extends(AddResearcherToTrial, _super);
    function AddResearcherToTrial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AddResearcherToTrial;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Transaction"]));

var AddResearcherEvent = /** @class */ (function (_super) {
    __extends(AddResearcherEvent, _super);
    function AddResearcherEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AddResearcherEvent;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Event"]));

var AddFormData = /** @class */ (function (_super) {
    __extends(AddFormData, _super);
    function AddFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AddFormData;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Transaction"]));

var AddFormDataEvent = /** @class */ (function (_super) {
    __extends(AddFormDataEvent, _super);
    function AddFormDataEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AddFormDataEvent;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Event"]));

var GetResponsibles = /** @class */ (function (_super) {
    __extends(GetResponsibles, _super);
    function GetResponsibles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GetResponsibles;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Transaction"]));

var SetupMockData = /** @class */ (function (_super) {
    __extends(SetupMockData, _super);
    function SetupMockData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SetupMockData;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Transaction"]));

// }


/***/ }),

/***/ "./src/app/model/ro.utcluj.vo.ts":
/*!***************************************!*\
  !*** ./src/app/model/ro.utcluj.vo.ts ***!
  \***************************************/
/*! exports provided: OrganisationVO, FileVO, EntryType, AccountType, FormVO, AuthenticationVO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationVO", function() { return OrganisationVO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileVO", function() { return FileVO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryType", function() { return EntryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormVO", function() { return FormVO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationVO", function() { return AuthenticationVO; });
var OrganisationVO = /** @class */ (function () {
    function OrganisationVO() {
    }
    return OrganisationVO;
}());

var FileVO = /** @class */ (function () {
    function FileVO() {
    }
    return FileVO;
}());

var EntryType;
(function (EntryType) {
    EntryType[EntryType["FORM_FIELD"] = 0] = "FORM_FIELD";
    EntryType[EntryType["CHOICE_FIELD"] = 1] = "CHOICE_FIELD";
    EntryType[EntryType["SELECTOR_FIELD"] = 2] = "SELECTOR_FIELD";
})(EntryType || (EntryType = {}));
var AccountType;
(function (AccountType) {
    AccountType[AccountType["RESEARCHER"] = 0] = "RESEARCHER";
    AccountType[AccountType["ADMIN"] = 1] = "ADMIN";
    AccountType[AccountType["AGENT"] = 2] = "AGENT";
    AccountType[AccountType["SPONSOR"] = 3] = "SPONSOR";
})(AccountType || (AccountType = {}));
var FormVO = /** @class */ (function () {
    function FormVO() {
    }
    return FormVO;
}());

var AuthenticationVO = /** @class */ (function () {
    function AuthenticationVO() {
    }
    return AuthenticationVO;
}());



/***/ }),

/***/ "./src/app/model/transaction.ts":
/*!**************************************!*\
  !*** ./src/app/model/transaction.ts ***!
  \**************************************/
/*! exports provided: EnrolPatientTransaction, RemoveResearcherFromTrial, AddResearcherToTrial, SetupMockData, RegisterTrialTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrolPatientTransaction", function() { return EnrolPatientTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveResearcherFromTrial", function() { return RemoveResearcherFromTrial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddResearcherToTrial", function() { return AddResearcherToTrial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMockData", function() { return SetupMockData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterTrialTransaction", function() { return RegisterTrialTransaction; });
/* harmony import */ var _org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./org.hyperledger.composer.system */ "./src/app/model/org.hyperledger.composer.system.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var EnrolPatientTransaction = /** @class */ (function (_super) {
    __extends(EnrolPatientTransaction, _super);
    function EnrolPatientTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnrolPatientTransaction;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Transaction"]));

var RemoveResearcherFromTrial = /** @class */ (function (_super) {
    __extends(RemoveResearcherFromTrial, _super);
    function RemoveResearcherFromTrial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RemoveResearcherFromTrial;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Transaction"]));

var AddResearcherToTrial = /** @class */ (function (_super) {
    __extends(AddResearcherToTrial, _super);
    function AddResearcherToTrial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AddResearcherToTrial;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Transaction"]));

var SetupMockData = /** @class */ (function (_super) {
    __extends(SetupMockData, _super);
    function SetupMockData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SetupMockData;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Transaction"]));

var RegisterTrialTransaction = /** @class */ (function (_super) {
    __extends(RegisterTrialTransaction, _super);
    function RegisterTrialTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RegisterTrialTransaction;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Transaction"]));



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar _ngcontent-c0=\"\" color=\"primary\">\n    <mat-toolbar-row _ngcontent-c0>\n        <span>\n            <a mat-button routerLink=\"/home\">Clinic Trials App</a>\n        </span>\n        <span>\n            <button mat-button [matMenuTriggerFor]=\"menu\">Menu\n                <mat-icon>arrow_drop_down</mat-icon>\n            </button>\n        </span>\n        <span class=\"flex-fill\"></span>\n        <div *ngIf=\"_authService.getUser()\">\n        <span>\n            <mat-icon>account_circle </mat-icon>\n            <br/> {{_authService.getUser()}}\n        </span>\n        <button mat-button (click)=\"_authService.logout()\">Log Out</button>\n    </div>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-menu #menu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/administration\">Administration</button>\n    <button mat-menu-item routerLink=\"/trial\">Trials</button>\n    <button mat-menu-item routerLink=\"/agent\">Agent</button>\n</mat-menu>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_authService) {
        this._authService = _authService;
        this.currentUser = "";
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar-component',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/service/CustomForm.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/CustomForm.service.ts ***!
  \***********************************************/
/*! exports provided: CustomFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormService", function() { return CustomFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
var CustomFormService = /** @class */ (function () {
    function CustomFormService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'CustomForm';
    }
    ;
    CustomFormService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    CustomFormService.prototype.getAsset = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    CustomFormService.prototype.addAsset = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    CustomFormService.prototype.updateAsset = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    CustomFormService.prototype.deleteAsset = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    CustomFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CustomFormService);
    return CustomFormService;
}());



/***/ }),

/***/ "./src/app/service/FormValue.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/FormValue.service.ts ***!
  \**********************************************/
/*! exports provided: FormValueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValueService", function() { return FormValueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
var FormValueService = /** @class */ (function () {
    function FormValueService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'FormValue';
    }
    ;
    FormValueService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    FormValueService.prototype.getAsset = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    FormValueService.prototype.addAsset = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    FormValueService.prototype.updateAsset = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    FormValueService.prototype.deleteAsset = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    FormValueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], FormValueService);
    return FormValueService;
}());



/***/ }),

/***/ "./src/app/service/ProtocolFile.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/ProtocolFile.service.ts ***!
  \*************************************************/
/*! exports provided: ProtocolFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolFileService", function() { return ProtocolFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
var ProtocolFileService = /** @class */ (function () {
    function ProtocolFileService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'ProtocolFile';
    }
    ;
    ProtocolFileService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    ProtocolFileService.prototype.getAsset = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    ProtocolFileService.prototype.addAsset = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    ProtocolFileService.prototype.updateAsset = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    ProtocolFileService.prototype.deleteAsset = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    ProtocolFileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ProtocolFileService);
    return ProtocolFileService;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ro.utcluj.vo */ "./src/app/model/ro.utcluj.vo.ts");
/* harmony import */ var _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/id-provider.service */ "./src/app/utils/id-provider.service.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./configuration */ "./src/app/service/configuration.ts");
/* harmony import */ var _researcher_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./researcher.service */ "./src/app/service/researcher.service.ts");
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
var AuthService = /** @class */ (function () {
    function AuthService(http, _configuration, _idProvider, _researcherService) {
        this.http = http;
        this._configuration = _configuration;
        this._idProvider = _idProvider;
        this._researcherService = _researcherService;
        this.resolveSuffix = '?resolve=true';
        this.IDENTITY_API = "system/identities/issue";
        this.PING_API = "system/ping";
        this.LOGOUT_API = "auth/logout";
        this.WALLET_API = "wallet";
        this.WALLET_IMPORT_API = "wallet/import";
        this.RESEARCHER_NAMESPACE = "ro.utcluj.clinictrial.base.Researcher#";
        this.actionUrl = _configuration.AdminServerWithApiUrl;
        this.userUrl = _configuration.ServerWithApiUrl;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    AuthService.prototype.getUser = function () {
        var user = localStorage.getItem(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].USERNAME);
        //console.log(user);
        return user;
    };
    AuthService.prototype.storeUserInfo = function (user) {
        if (user.includes('Researcher')) {
            localStorage.setItem(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].USER_ROLE, _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_4__["AccountType"].RESEARCHER.toLocaleString());
            var uid = user.replace(this.RESEARCHER_NAMESPACE, "");
            localStorage.setItem(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].UID, uid);
            this._researcherService.getparticipant(uid).subscribe(function (res) {
                var displayName = res.person.firstName + " " + res.person.lastName;
                localStorage.setItem(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].USERNAME, displayName);
            });
        }
    };
    AuthService.prototype.clearUserInfo = function () {
        localStorage.removeItem(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].USERNAME);
        localStorage.removeItem(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].USER_ROLE);
        localStorage.removeItem(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].UID);
    };
    AuthService.prototype.getCurrentUserData = function () {
        return this.http.get(this.userUrl + this.PING_API, { withCredentials: true });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get("http://localhost:3000/auth/logout", { withCredentials: true }).subscribe(function (res) {
            console.log("Logged out... Clearing cookies...");
            _this.clearUserInfo();
        }, function (err) {
            console.log("Logged out... Clearing cookies...");
            _this.clearUserInfo();
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _configuration__WEBPACK_IMPORTED_MODULE_7__["Configuration"],
            _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_5__["IdProviderService"],
            _researcher_service__WEBPACK_IMPORTED_MODULE_8__["ResearcherService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/configuration.ts":
/*!******************************************!*\
  !*** ./src/app/service/configuration.ts ***!
  \******************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Configuration = /** @class */ (function () {
    function Configuration() {
        this.ApiIP = "http://localhost";
        this.ApiPort = "3001";
        this.AdminApiPort = "3001";
        this.Server = this.ApiIP + ":" + this.ApiPort;
        this.AdminServer = this.ApiIP + ":" + this.AdminApiPort;
        this.ApiUrl = "/api/";
        this.ServerWithApiUrl = this.Server + this.ApiUrl;
        this.AdminServerWithApiUrl = this.AdminServer + this.ApiUrl;
    }
    Configuration = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Configuration);
    return Configuration;
}());



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "./src/app/service/configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http, _configuration) {
        this.http = http;
        this._configuration = _configuration;
        this.resolveSuffix = '?resolve=true';
        this.includeSuffix = '?filter={"include":"resolve"}';
        this.actionUrl = _configuration.ServerWithApiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    DataService.prototype.getAll = function (ns) {
        console.log('GetAll ' + ns + ' to ' + this.actionUrl + ns, this.headers);
        return this.http.get("" + this.actionUrl + ns + this.includeSuffix, { withCredentials: true });
    };
    DataService.prototype.getSingle = function (ns, id) {
        console.log('GetSingle ' + ns);
        return this.http.get(this.actionUrl + ns + '/' + id + this.includeSuffix, { withCredentials: true });
    };
    DataService.prototype.getSingleUnresolved = function (ns, id) {
        console.log('GetSingle ' + ns);
        return this.http.get(this.actionUrl + ns + '/' + id, { withCredentials: true });
    };
    DataService.prototype.add = function (ns, asset) {
        console.log('Entered DataService add');
        console.log('Add ' + ns);
        console.log('asset', asset);
        return this.http.post(this.actionUrl + ns, asset, { withCredentials: true });
    };
    DataService.prototype.update = function (ns, id, itemToUpdate) {
        console.log('Update ' + ns);
        console.log('what is the id?', id);
        console.log('what is the updated item?', itemToUpdate);
        console.log('what is the updated item?', JSON.stringify(itemToUpdate));
        return this.http.put("" + this.actionUrl + ns + "/" + id, itemToUpdate, { withCredentials: true });
    };
    DataService.prototype.delete = function (ns, id) {
        console.log('Delete ' + ns);
        return this.http.delete(this.actionUrl + ns + '/' + id, { withCredentials: true });
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errMsg);
    };
    DataService.prototype.extractData = function (res) {
        return res.json();
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/service/historian.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/historian.service.ts ***!
  \**********************************************/
/*! exports provided: HistorianService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorianService", function() { return HistorianService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-service */ "./src/app/service/system-service.ts");
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
var HistorianService = /** @class */ (function () {
    function HistorianService(dataService, systemService) {
        this.dataService = dataService;
        this.systemService = systemService;
        this.NAMESPACE = 'system/historian';
    }
    ;
    HistorianService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    HistorianService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"]])
    ], HistorianService);
    return HistorianService;
}());



/***/ }),

/***/ "./src/app/service/patient.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/patient.service.ts ***!
  \********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
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
var PatientService = /** @class */ (function () {
    function PatientService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'Patient';
    }
    ;
    PatientService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    PatientService.prototype.getAsset = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    PatientService.prototype.addAsset = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    PatientService.prototype.updateAsset = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    PatientService.prototype.deleteAsset = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    PatientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "./src/app/service/queries/files-query-service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/queries/files-query-service.ts ***!
  \********************************************************/
/*! exports provided: FilesQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesQueryService", function() { return FilesQueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-service */ "./src/app/service/queries/query-service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _utils_resource_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/resource-provider */ "./src/app/utils/resource-provider.ts");
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
var FilesQueryService = /** @class */ (function () {
    function FilesQueryService(_queryService) {
        this._queryService = _queryService;
    }
    FilesQueryService.prototype.findFileByTrial = function (idTrial) {
        var trial = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_3__["ResourceProvider"].newTrialQueryResource(idTrial);
        return this._queryService.get("selectFilesByTrial?trial=", trial);
    };
    FilesQueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_query_service__WEBPACK_IMPORTED_MODULE_1__["QueryService"]])
    ], FilesQueryService);
    return FilesQueryService;
}());



/***/ }),

/***/ "./src/app/service/queries/form-value-query-service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/queries/form-value-query-service.ts ***!
  \*************************************************************/
/*! exports provided: FormValueQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValueQueryService", function() { return FormValueQueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _utils_resource_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resource-provider */ "./src/app/utils/resource-provider.ts");
/* harmony import */ var _query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query-service */ "./src/app/service/queries/query-service.ts");
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
var FormValueQueryService = /** @class */ (function () {
    function FormValueQueryService(_queryService) {
        this._queryService = _queryService;
    }
    FormValueQueryService.prototype.findDataForCustomForm = function (idForm) {
        var customForm = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_2__["ResourceProvider"].newCustomFormQueryResource(idForm);
        return this._queryService.get("selectDataForCustomForm?customForm=", customForm);
    };
    FormValueQueryService.prototype.findDataForCustomFormAndPatient = function (idForm, idPatient) {
        var customForm = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_2__["ResourceProvider"].newCustomFormQueryResource(idForm);
        var patient = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_2__["ResourceProvider"].newPatientQueryResource(idPatient);
        return this._queryService.getWithDoubleParam("selectDataForCustomFormAndPatient?customForm=", customForm, patient);
    };
    FormValueQueryService.prototype.selectDataForPatient = function (idPatient) {
        var patient = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_2__["ResourceProvider"].newPatientQueryResource(idPatient);
        return this._queryService.get("selectDataForPatient?patient=", patient);
    };
    FormValueQueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_query_service__WEBPACK_IMPORTED_MODULE_3__["QueryService"]])
    ], FormValueQueryService);
    return FormValueQueryService;
}());



/***/ }),

/***/ "./src/app/service/queries/forms-query-service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/queries/forms-query-service.ts ***!
  \********************************************************/
/*! exports provided: FormQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormQueryService", function() { return FormQueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _utils_resource_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resource-provider */ "./src/app/utils/resource-provider.ts");
/* harmony import */ var _query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query-service */ "./src/app/service/queries/query-service.ts");
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
var FormQueryService = /** @class */ (function () {
    function FormQueryService(_queryService) {
        this._queryService = _queryService;
    }
    FormQueryService.prototype.findCustomFormsByTrial = function (idTrial) {
        var trial = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_2__["ResourceProvider"].newTrialQueryResource(idTrial);
        return this._queryService.get("selectCustomFormsByTrial?trial=", trial);
    };
    FormQueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_query_service__WEBPACK_IMPORTED_MODULE_3__["QueryService"]])
    ], FormQueryService);
    return FormQueryService;
}());



/***/ }),

/***/ "./src/app/service/queries/query-service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/queries/query-service.ts ***!
  \**************************************************/
/*! exports provided: QueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return QueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configuration */ "./src/app/service/configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QueryService = /** @class */ (function () {
    function QueryService(http, _configuration) {
        this.http = http;
        this._configuration = _configuration;
        this.resolveSuffix = '?resolve=true';
        this.actionUrl = _configuration.ServerWithApiUrl;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    QueryService.prototype.get = function (query, param) {
        console.log("Executing query ... ");
        console.log("param: " + param);
        console.log(this.actionUrl + "queries/" + query + param);
        return this.http.get(this.actionUrl + "queries/" + query + param, { withCredentials: true });
    };
    QueryService.prototype.getWithDoubleParam = function (query, param, secondParam) {
        console.log("Executing query ... ");
        console.log("param1: " + param);
        console.log("param1: " + secondParam);
        console.log(this.actionUrl + "queries/" + query + param + "&" + secondParam);
        return this.http.get(this.actionUrl + "queries/" + query + param + "&" + secondParam, { withCredentials: true });
    };
    QueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], QueryService);
    return QueryService;
}());



/***/ }),

/***/ "./src/app/service/researcher.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/researcher.service.ts ***!
  \***********************************************/
/*! exports provided: ResearcherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearcherService", function() { return ResearcherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-service */ "./src/app/service/system-service.ts");
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
var ResearcherService = /** @class */ (function () {
    function ResearcherService(dataService, systemService) {
        this.dataService = dataService;
        this.systemService = systemService;
        this.NAMESPACE = 'Researcher';
    }
    ;
    ResearcherService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    ResearcherService.prototype.getparticipant = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    ResearcherService.prototype.getparticipantAdmin = function (id) {
        return this.systemService.getSingle(this.NAMESPACE, id);
    };
    ResearcherService.prototype.addParticipant = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    ResearcherService.prototype.updateParticipant = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    ResearcherService.prototype.deleteParticipant = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    ResearcherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"]])
    ], ResearcherService);
    return ResearcherService;
}());



/***/ }),

/***/ "./src/app/service/system-service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/system-service.ts ***!
  \*******************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuration */ "./src/app/service/configuration.ts");
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
var SystemService = /** @class */ (function () {
    function SystemService(http, _configuration) {
        this.http = http;
        this._configuration = _configuration;
        this.resolveSuffix = '?resolve=true';
        this.IDENTITY_API = "system/identities/issue";
        this.PING_API = "system/ping";
        this.WALLET_API = "wallet";
        this.WALLET_IMPORT_API = "wallet/import";
        this.actionUrl = _configuration.AdminServerWithApiUrl;
        this.userUrl = _configuration.ServerWithApiUrl;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    SystemService.prototype.getCurrentUser = function () {
        return this.http.get(this.userUrl + this.PING_API, { withCredentials: true }).toPromise()
            .then(function (data) {
            return data['participant'];
        });
    };
    SystemService.prototype.checkWallet = function () {
        return this.http.get(this.userUrl + this.WALLET_API, { withCredentials: true }).toPromise();
    };
    SystemService.prototype.bindIdentity = function (identity) {
        var _this = this;
        console.log("Issuing identity...");
        return this.http.post(this.actionUrl + this.IDENTITY_API, identity, { responseType: 'blob' })
            .toPromise().then(function (identityCard) {
            console.log("Obtained identity card from server...");
            console.log(identityCard);
            var file = new File([identityCard], 'myCard.card', { type: 'application/octet-stream', lastModified: Date.now() });
            console.log("Created card file...");
            var formData = new FormData();
            formData.append('card', file);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            headers.set('Content-Type', 'multipart/form-data');
            _this.http.post(_this.userUrl + _this.WALLET_IMPORT_API, formData, {
                withCredentials: true,
                headers: headers
            }).subscribe(function (res) {
                console.log("Card imported successfully...");
            }, function (err) {
                console.log("Failed to import card");
                alert("Failed to bind identity");
            });
        });
    };
    SystemService.prototype.getSingle = function (ns, id) {
        console.log('Admin GetSingle ' + ns);
        return this.http.get(this.actionUrl + ns + '/' + id + this.resolveSuffix);
    };
    SystemService.prototype.add = function (ns, asset) {
        console.log('Add ' + ns);
        console.log('asset', asset);
        return this.http.post(this.actionUrl + ns, asset);
    };
    SystemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], SystemService);
    return SystemService;
}());



/***/ }),

/***/ "./src/app/service/transaction-service.ts":
/*!************************************************!*\
  !*** ./src/app/service/transaction-service.ts ***!
  \************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
var TransactionService = /** @class */ (function () {
    function TransactionService(dataService) {
        this.dataService = dataService;
        this.ADD_RESEARCHER_TO_TRIAL = 'AddResearcherToTrial';
        this.ENROL_PATIENT_TRANSACTION = 'EnrolPatientTransaction';
        this.REGISTER_TRIAL_TRANSACTION = 'RegisterTrialTransaction';
        this.REMOVE_RESEARCHER_FROM_TRIAL = 'RemoveResearcherFromTrial';
        this.ADD_FORM_DATA = 'AddFormData';
        this.CREATE_CUSTOM_FORM = 'CreateCustomForm';
    }
    ;
    TransactionService.prototype.addResearcherToTrial = function (tx) {
        return this.dataService.add(this.ADD_RESEARCHER_TO_TRIAL, tx);
    };
    TransactionService.prototype.enrolPatientTransaction = function (tx) {
        return this.dataService.add(this.ENROL_PATIENT_TRANSACTION, tx);
    };
    TransactionService.prototype.registerTrialTransaction = function (tx) {
        return this.dataService.add(this.REGISTER_TRIAL_TRANSACTION, tx);
    };
    TransactionService.prototype.removeResearcherFromTrial = function (tx) {
        return this.dataService.add(this.REMOVE_RESEARCHER_FROM_TRIAL, tx);
    };
    TransactionService.prototype.addFormData = function (tx) {
        return this.dataService.add(this.ADD_FORM_DATA, tx);
    };
    TransactionService.prototype.createCustomForm = function (tx) {
        return this.dataService.add(this.CREATE_CUSTOM_FORM, tx);
    };
    TransactionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TransactionService);
    return TransactionService;
}());



/***/ }),

/***/ "./src/app/service/trial.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/trial.service.ts ***!
  \******************************************/
/*! exports provided: TrialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialService", function() { return TrialService; });
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
var TrialService = /** @class */ (function () {
    function TrialService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'Trial';
    }
    ;
    TrialService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    TrialService.prototype.getAsset = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    TrialService.prototype.getAssetUnresolved = function (id) {
        return this.dataService.getSingleUnresolved(this.NAMESPACE, id);
    };
    TrialService.prototype.addAsset = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    TrialService.prototype.updateAsset = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    TrialService.prototype.deleteAsset = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    TrialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TrialService);
    return TrialService;
}());



/***/ }),

/***/ "./src/app/utils/id-provider.service.ts":
/*!**********************************************!*\
  !*** ./src/app/utils/id-provider.service.ts ***!
  \**********************************************/
/*! exports provided: IdProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdProviderService", function() { return IdProviderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IdProviderService = /** @class */ (function () {
    function IdProviderService() {
    }
    //generate a random id for new patients
    IdProviderService.prototype.generateID = function () {
        var id = "";
        for (var i = 0; i < 4; i++) {
            id += Math.random().toString(36).slice(-4);
        }
        return id;
    };
    IdProviderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], IdProviderService);
    return IdProviderService;
}());



/***/ }),

/***/ "./src/app/utils/resource-provider.ts":
/*!********************************************!*\
  !*** ./src/app/utils/resource-provider.ts ***!
  \********************************************/
/*! exports provided: ResourceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceProvider", function() { return ResourceProvider; });
var ResourceProvider = /** @class */ (function () {
    function ResourceProvider() {
    }
    ResourceProvider.newResearchSiteResource = function (idResearchSite) {
        return this.RESEARCH_SITE_RESOURCE + idResearchSite;
    };
    ResourceProvider.newTrialResource = function (idTrial) {
        return this.TRIAL_RESOURCE + idTrial;
    };
    ResourceProvider.newTrialQueryResource = function (idTrial) {
        return this.RESOURCE_QUERY_REF + this.TRIAL_QUERY + idTrial;
    };
    ResourceProvider.newPatientResource = function (idPatient) {
        return this.PATIENT_RESOURCE + idPatient;
    };
    ResourceProvider.newPatientQueryResource = function (idPatient) {
        return this.RESOURCE_QUERY_REF + this.PATIENT_QUERY_REF + idPatient;
    };
    ResourceProvider.newCustomFormResource = function (idForm) {
        return this.CUSTOM_FORM_RESOURCE + idForm;
    };
    ResourceProvider.newCustomFormQueryResource = function (idForm) {
        return this.RESOURCE_QUERY_REF + this.CUSTOM_FORM_QUERY + idForm;
    };
    ResourceProvider.newResearcherResource = function (idResearcher) {
        return this.RESEARCHER_RESORCE + idResearcher;
    };
    //defines the name of th research site resource => used to define relationships
    ResourceProvider.RESEARCH_SITE_RESOURCE = "ro.utcluj.clinictrial.organisation.ResearchSite#";
    ResourceProvider.TRIAL_RESOURCE = "ro.utcluj.clinictrial.trial.Trial#";
    ResourceProvider.CUSTOM_FORM_RESOURCE = "ro.utcluj.clinictrial.trial.CustomForm#";
    ResourceProvider.PATIENT_RESOURCE = "resource:ro.utcluj.clinictrial.base.Patient#";
    ResourceProvider.RESEARCHER_RESORCE = "resource:ro.utcluj.clinictrial.base.Researcher#";
    ResourceProvider.PATIENT_QUERY_REF = "ro.utcluj.clinictrial.base.Patient%23";
    ResourceProvider.TRIAL_QUERY = "ro.utcluj.clinictrial.trial.Trial%23";
    ResourceProvider.CUSTOM_FORM_QUERY = "ro.utcluj.clinictrial.trial.CustomForm%23";
    ResourceProvider.RESOURCE_QUERY_REF = "resource%3A";
    return ResourceProvider;
}());



/***/ }),

/***/ "./src/app/utils/utils.ts":
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.USERNAME = "username";
    Utils.UID = "uid";
    Utils.USER_ROLE = "role";
    return Utils;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alin/hyperledger-clinic-trial-network/angular-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map