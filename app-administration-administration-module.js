(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-administration-administration-module"],{

/***/ "./src/app/administration/administration.component.html":
/*!**************************************************************!*\
  !*** ./src/app/administration/administration.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Patients\">\n    <br/>\n\n    <!-- the new patient button -->\n    <div class=\"floating-button\">\n      <a mat-fab routerLink=\"new\" color=\"primary\">\n        <mat-icon aria-label=\"New Researcher\">add</mat-icon>\n      </a>\n    </div>\n    <patient-table [allPatientsDataSource]=\"allPatientsDataSource\" adminMode=\"true\"></patient-table>\n  </mat-tab>\n  <mat-tab label=\"Organisations\">\n    <br/>\n\n    <!-- the new organisation button -->\n    <div class=\"floating-button\">\n      <a mat-fab routerLink=\"neworg\" color=\"primary\">\n        <mat-icon aria-label=\"New Organisation\">add</mat-icon>\n      </a>\n    </div>\n    <div class=\"table-container mat-elevation-z8\">\n      <mat-table #table [dataSource]=\"allOrganisationsDataSource\">\n\n        <!-- Organisation ID column -->\n        <ng-container matColumnDef=\"OrganisationID\">\n          <mat-header-cell *matHeaderCellDef> OrganisationID </mat-header-cell>\n          <mat-cell *matCellDef=\"let organisation\"> {{organisation.orgID}} </mat-cell>\n        </ng-container>\n\n        <!-- Organisation Name column -->\n        <ng-container matColumnDef=\"Name\">\n          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let organisation\"> {{organisation.orgName}} </mat-cell>\n        </ng-container>\n\n        <!-- Organisation Address column -->\n        <ng-container matColumnDef=\"Address\">\n          <mat-header-cell *matHeaderCellDef> Organisation Address </mat-header-cell>\n          <mat-cell *matCellDef=\"let organisation\"> {{organisation.orgInternalAddress}} </mat-cell>\n        </ng-container>\n\n        <!-- Organisation Type column -->\n        <ng-container matColumnDef=\"Type\">\n          <mat-header-cell *matHeaderCellDef> Organisation Type </mat-header-cell>\n          <mat-cell *matCellDef=\"let organisation\"> {{organisation.orgType}} </mat-cell>\n        </ng-container>\n\n\n        <!-- Delete link column -->\n        <ng-container matColumnDef=\"Actions\">\n          <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n          <mat-cell *matCellDef=\"let organisation\">\n            <a mat-button (click)=\"deleteOrganisation(organisation)\" color=\"primary\">\n              <i class=\"material-icons\">delete_sweep</i>\n            </a>\n            <a mat-button [routerLink]=\"['neworg',organisation.orgID]\" color=\"primary\">\n              <i class=\"material-icons\">mode_edit</i>\n            </a>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"organisationColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: organisationColumns;\"></mat-row>\n      </mat-table>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Researchers\">\n    <br/>\n\n    <div class=\"floating-button\">\n      <a mat-fab routerLink=\"newres\" color=\"primary\">\n        <mat-icon aria-label=\"New Researcher\">add</mat-icon>\n      </a>\n    </div>\n    <div class=\"table-container mat-elevation-z8\">\n      <mat-table #table [dataSource]=\"allResearchersDataSource\">\n\n        <!-- Patient ID column -->\n        <ng-container matColumnDef=\"ResearcherID\">\n          <mat-header-cell *matHeaderCellDef> ResearcherID </mat-header-cell>\n          <mat-cell *matCellDef=\"let researcher\"> {{researcher.idResearcher}} </mat-cell>\n        </ng-container>\n\n        <!-- Name column -->\n        <ng-container matColumnDef=\"Name\">\n          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let researcher\"> {{researcher.person.firstName}} {{researcher.person.lastName}} </mat-cell>\n        </ng-container>\n\n        <!-- Gender column -->\n        <ng-container matColumnDef=\"Gender\">\n          <mat-header-cell *matHeaderCellDef> Gender </mat-header-cell>\n          <mat-cell *matCellDef=\"let researcher\"> {{researcher.person.gender}}</mat-cell>\n        </ng-container>\n\n        <!-- Birthdate column -->\n        <ng-container matColumnDef=\"Birthdate\">\n          <mat-header-cell *matHeaderCellDef> Birthdate </mat-header-cell>\n          <mat-cell *matCellDef=\"let researcher\"> {{researcher.person.birthDetails.dateOfBirth}}</mat-cell>\n        </ng-container>\n\n        <!-- Action link column -->\n        <ng-container matColumnDef=\"Action\">\n          <mat-header-cell *matHeaderCellDef></mat-header-cell>\n          <mat-cell *matCellDef=\"let researcher\">\n            <a mat-button [routerLink]=\"['/view',researcher.idPatient]\" color=\"primary\">\n              <i class=\"material-icons\">pageview</i>\n            </a>\n            <a mat-button [routerLink]=\"['newres',researcher.idResearcher]\" color=\"primary\">\n              <i class=\"material-icons\">mode_edit</i>\n            </a>\n            <a mat-button (click)=\"deleteResearcher(researcher)\" color=\"primary\">\n              <i class=\"material-icons\">delete_sweep</i>\n            </a>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"researcherColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: researcherColumns;\"></mat-row>\n\n      </mat-table>\n    </div>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/administration/administration.component.ts":
/*!************************************************************!*\
  !*** ./src/app/administration/administration.component.ts ***!
  \************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/ro.utcluj.vo */ "./src/app/model/ro.utcluj.vo.ts");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _service_research_site_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/research-site.service */ "./src/app/service/research-site.service.ts");
/* harmony import */ var _service_researcher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/researcher.service */ "./src/app/service/researcher.service.ts");
/* harmony import */ var _service_supply_organisation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/supply-organisation.service */ "./src/app/service/supply-organisation.service.ts");
/* harmony import */ var _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/loader/loader.service */ "./src/app/components/loader/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AdministrationComponent = /** @class */ (function () {
    function AdministrationComponent(_patientService, _researchSiteService, _supplyOrganisationService, _researcerService, _router, _route, _loaderService) {
        var _this = this;
        this._patientService = _patientService;
        this._researchSiteService = _researchSiteService;
        this._supplyOrganisationService = _supplyOrganisationService;
        this._researcerService = _researcerService;
        this._router = _router;
        this._route = _route;
        this._loaderService = _loaderService;
        //disable some annoying animations
        this.allPatients = [];
        this.allOrg = [];
        this.allResearchers = [];
        this.displayedColumns = ['PatientID', 'Name', 'Gender', 'Birthdate', 'View', 'Edit', 'Delete'];
        this.organisationColumns = ['OrganisationID', 'Name', 'Address', 'Type', 'Actions'];
        this.researcherColumns = ['ResearcherID', 'Name', 'Gender', 'Birthdate', 'Action'];
        this._loaderService.show();
        this.navigationSubscription = this._router.events.subscribe(function (e) {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                console.log("loading table data....");
                _this.loadAllPatients();
                _this.loadAllOrganisations();
                _this.loadAllResearchers();
                console.log(_this.allOrg);
            }
        });
    }
    AdministrationComponent.prototype.ngOnInit = function () {
    };
    AdministrationComponent.prototype.ngOnChanges = function () {
    };
    AdministrationComponent.prototype.ngAfterViewInit = function () {
        //  this.allPatientsDataSource.paginator = this.paginator;
    };
    AdministrationComponent.prototype.loadAllResearchers = function () {
        var _this = this;
        return this._researcerService.getAll()
            .toPromise()
            .then(function (result) {
            _this.allResearchers = [];
            _this.errorMessage = null;
            console.log(result);
            result.forEach(function (participant) {
                _this.allResearchers.push(participant);
            });
            _this.allResearchersDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.allResearchers);
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    AdministrationComponent.prototype.loadAllOrganisations = function () {
        this.allOrg = [];
        this.loadAllReasearchSites();
    };
    AdministrationComponent.prototype.loadAllSupplyOrgs = function () {
        var _this = this;
        return this._supplyOrganisationService.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (participant) {
                var org = new _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_3__["OrganisationVO"]();
                org.orgID = participant.idSupplyOrganisation;
                org.orgName = participant.name;
                if (participant.orgAddress) {
                    org.orgInternalAddress = participant.orgAddress.city + ', ' + participant.orgAddress.street;
                }
                org.orgType = "SUPPLIER";
                _this.allOrg.push(org);
            });
            // build the table data source
            _this.allOrganisationsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.allOrg);
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    AdministrationComponent.prototype.loadAllReasearchSites = function () {
        var _this = this;
        return this._researchSiteService.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var participant = result_1[_i];
                var org = new _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_3__["OrganisationVO"]();
                org.orgID = participant.idResearchSite;
                org.orgName = participant.name;
                if (participant.orgAddress) {
                    org.orgInternalAddress = participant.orgAddress.city + ', ' + participant.orgAddress.street;
                }
                org.orgType = "RESEARCH SITE";
                _this.allOrg.push(org);
            }
            //load suppliers after all research sites have been added
            _this.loadAllSupplyOrgs();
            _this.allOrganisationsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.allOrg);
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    AdministrationComponent.prototype.loadAllPatients = function () {
        var _this = this;
        return this._patientService.getAll()
            .toPromise()
            .then(function (result) {
            _this.allPatients = [];
            _this.errorMessage = null;
            console.log(result);
            result.forEach(function (asset) {
                _this.allPatients.push(asset);
            });
            _this.allPatientsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.allPatients);
            _this._loaderService.hide();
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
            _this._loaderService.hide();
        });
    };
    AdministrationComponent.prototype.deletePatient = function (patient) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@.disabled'),
        __metadata("design:type", Array)
    ], AdministrationComponent.prototype, "allPatients", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AdministrationComponent.prototype, "paginator", void 0);
    AdministrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'administration-component',
            template: __webpack_require__(/*! ./administration.component.html */ "./src/app/administration/administration.component.html")
        }),
        __metadata("design:paramtypes", [_service_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"],
            _service_research_site_service__WEBPACK_IMPORTED_MODULE_5__["ResearchSiteService"],
            _service_supply_organisation_service__WEBPACK_IMPORTED_MODULE_7__["SupplyOrganisationService"],
            _service_researcher_service__WEBPACK_IMPORTED_MODULE_6__["ResearcherService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"]])
    ], AdministrationComponent);
    return AdministrationComponent;
}());



/***/ }),

/***/ "./src/app/administration/administration.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/administration/administration.module.ts ***!
  \*********************************************************/
/*! exports provided: AdministrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationModule", function() { return AdministrationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/component.module */ "./src/app/components/component.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _service_research_site_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/research-site.service */ "./src/app/service/research-site.service.ts");
/* harmony import */ var _service_researcher_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/researcher.service */ "./src/app/service/researcher.service.ts");
/* harmony import */ var _service_supply_organisation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/supply-organisation.service */ "./src/app/service/supply-organisation.service.ts");
/* harmony import */ var _administration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./administration.component */ "./src/app/administration/administration.component.ts");
/* harmony import */ var _administration_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./administration.routing */ "./src/app/administration/administration.routing.ts");
/* harmony import */ var _organisation_organisation_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./organisation/organisation-form.component */ "./src/app/administration/organisation/organisation-form.component.ts");
/* harmony import */ var _patient_patient_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patient/patient-form.component */ "./src/app/administration/patient/patient-form.component.ts");
/* harmony import */ var _researcher_researcher_from_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./researcher/researcher-from.component */ "./src/app/administration/researcher/researcher-from.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AdministrationModule = /** @class */ (function () {
    function AdministrationModule() {
    }
    AdministrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _administration_routing__WEBPACK_IMPORTED_MODULE_10__["AdministrationRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_3__["ComponentModule"]
            ],
            providers: [
                _service_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"],
                _service_research_site_service__WEBPACK_IMPORTED_MODULE_6__["ResearchSiteService"],
                _service_supply_organisation_service__WEBPACK_IMPORTED_MODULE_8__["SupplyOrganisationService"],
                _service_researcher_service__WEBPACK_IMPORTED_MODULE_7__["ResearcherService"]
            ],
            declarations: [
                _administration_component__WEBPACK_IMPORTED_MODULE_9__["AdministrationComponent"],
                _patient_patient_form_component__WEBPACK_IMPORTED_MODULE_12__["PatientFormComponent"],
                _organisation_organisation_form_component__WEBPACK_IMPORTED_MODULE_11__["OrganisationFormComponent"],
                _researcher_researcher_from_component__WEBPACK_IMPORTED_MODULE_13__["ResearcherFormComponent"],
            ]
        })
    ], AdministrationModule);
    return AdministrationModule;
}());



/***/ }),

/***/ "./src/app/administration/administration.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/administration/administration.routing.ts ***!
  \**********************************************************/
/*! exports provided: AdministrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationRoutingModule", function() { return AdministrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _administration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administration.component */ "./src/app/administration/administration.component.ts");
/* harmony import */ var _organisation_organisation_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organisation/organisation-form.component */ "./src/app/administration/organisation/organisation-form.component.ts");
/* harmony import */ var _patient_patient_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient/patient-form.component */ "./src/app/administration/patient/patient-form.component.ts");
/* harmony import */ var _researcher_researcher_from_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./researcher/researcher-from.component */ "./src/app/administration/researcher/researcher-from.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _administration_component__WEBPACK_IMPORTED_MODULE_2__["AdministrationComponent"] },
    { path: 'new', component: _patient_patient_form_component__WEBPACK_IMPORTED_MODULE_4__["PatientFormComponent"] },
    { path: 'new/:idPatient', component: _patient_patient_form_component__WEBPACK_IMPORTED_MODULE_4__["PatientFormComponent"] },
    { path: 'neworg', component: _organisation_organisation_form_component__WEBPACK_IMPORTED_MODULE_3__["OrganisationFormComponent"] },
    { path: 'neworg/:idOrg', component: _organisation_organisation_form_component__WEBPACK_IMPORTED_MODULE_3__["OrganisationFormComponent"] },
    { path: 'newres', component: _researcher_researcher_from_component__WEBPACK_IMPORTED_MODULE_5__["ResearcherFormComponent"] },
    { path: 'newres/:idResearcher', component: _researcher_researcher_from_component__WEBPACK_IMPORTED_MODULE_5__["ResearcherFormComponent"] },
];
var AdministrationRoutingModule = /** @class */ (function () {
    function AdministrationRoutingModule() {
    }
    AdministrationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdministrationRoutingModule);
    return AdministrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/administration/organisation/organisation-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/administration/organisation/organisation-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{title}}</h3>\n<div *ngIf=\"isInitialised\">\n<form [formGroup] = \"organisationForm\" (ngSubmit)=\"onSubmit()\">\n    <table class=\"full-width\">\n        <tr>\n            <td>\n                <mat-form-field class=\"full-width\">\n                <input matInput type = \"text\" formControlName=\"orgName\" \n                placeholder=\"Organisation Name\" [(value)]=\"this.internalVO.orgName\">\n                <mat-error *ngIf=\"nameControl.errors\n                  && (nameControl.touched || nameControl.dirty)\">\n                Field is required and must have at least 2 characters</mat-error>\n                </mat-form-field>\n            </td>\n        </tr>\n        <tr>    \n            <td>\n                <mat-form-field>\n                <mat-select [(value)]=\"this.internalVO.orgType\" \n                    formControlName=\"orgType\"\n                    placeholder = \"Organisation type\">\n                    <mat-option value=\"RESEARCH\">Research Site</mat-option>\n                    <mat-option value=\"SUPPLIER\">Supplier</mat-option>\n                </mat-select>\n                </mat-form-field>\n            </td>\n        </tr>  \n        <tr>\n      <td>\n        <mat-form-field class=\"full-width\">\n            <input matInput type = \"text\" formControlName=\"city\"\n            placeholder=\"City\" [(value)]=\"this.internalVO.city\">\n            <mat-error *ngIf=\"cityControl.errors \n            && (cityControl.touched || cityControl.dirty)\">\n            Field is required and must have at least 2 characters</mat-error>\n        </mat-form-field>\n      </td>\n      <td>\n        <mat-form-field class=\"full-width\">\n            <input matInput type = \"text\" formControlName=\"country\"\n            placeholder=\"Country\" [(value)]=\"this.internalVO.country\">\n            <mat-error *ngIf=\"countryControl.errors \n            && (countryControl.touched || countryControl.dirty)\">\n            Field is required and must have at least 2 characters</mat-error>\n        </mat-form-field>\n      </td>\n      <td>\n        <mat-form-field class=\"full-width\">\n            <input matInput type = \"text\" formControlName=\"region\" \n            placeholder=\"Region\"  [(value)]=\"this.internalVO.region\">\n            <mat-error *ngIf=\"regionControl.errors \n            && (regionControl.touched || regionControl.dirty)\">\n            Field is required and must have at least 2 characters</mat-error>\n        </mat-form-field>\n      </td>\n      <td>\n        <mat-form-field class=\"full-width\">\n            <input matInput type = \"text\" formControlName=\"street\" \n            placeholder=\"Street\"  [(value)]=\"this.internalVO.street\">\n            <mat-error *ngIf=\"streetControl.errors \n            && (streetControl.touched || streetControl.dirty)\">\n            Field is required and must have at least 2 characters</mat-error>\n        </mat-form-field>\n      </td>\n    </tr>      \n    </table>\n\n    <!--Submit button-->\n    <div style=\"margin-bottom: 1em\">\n        <button type=\"submit\" class=\"btn btn-success\" \n        [disabled]=\"organisationForm.invalid\">Save</button>\n    </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/administration/organisation/organisation-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/administration/organisation/organisation-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrganisationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationFormComponent", function() { return OrganisationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_ro_utcluj_clinictrial_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/ro.utcluj.clinictrial.organisation */ "./src/app/model/ro.utcluj.clinictrial.organisation.ts");
/* harmony import */ var _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/ro.utcluj.vo */ "./src/app/model/ro.utcluj.vo.ts");
/* harmony import */ var _service_research_site_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/research-site.service */ "./src/app/service/research-site.service.ts");
/* harmony import */ var _service_supply_organisation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/supply-organisation.service */ "./src/app/service/supply-organisation.service.ts");
/* harmony import */ var _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/ro.utcluj.clinictrial.base */ "./src/app/model/ro.utcluj.clinictrial.base.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrganisationFormComponent = /** @class */ (function () {
    function OrganisationFormComponent(formBuilder, _router, _route, _researchSiteService, _supplyOrganisationService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this._router = _router;
        this._route = _route;
        this._researchSiteService = _researchSiteService;
        this._supplyOrganisationService = _supplyOrganisationService;
        this.researchSite = new _model_ro_utcluj_clinictrial_organisation__WEBPACK_IMPORTED_MODULE_3__["ResearchSite"]();
        this.supplyOrg = new _model_ro_utcluj_clinictrial_organisation__WEBPACK_IMPORTED_MODULE_3__["SupplyOrganisation"]();
        this.internalVO = new _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_4__["OrganisationVO"]();
        // display the form after the initialisation is done
        this.isInitialised = false;
        //check if this is an update operation or a create one
        var id = this._route.params
            .subscribe(function (params) {
            var id = params['idOrg'];
            _this.idOrg = id;
            console.log(id);
            //decide if the user wants to edit an existing patient or add a new one
            _this.title = id ? 'Edit patient info' : 'New patient';
            if (!id) {
                //instantiate the patient binding object
                _this.initBindings();
                //create the form and validators
                _this.buildForm();
                _this.isInitialised = true;
                console.log("Org form initialised");
                return;
            }
            //fetch organisation from data service
            _this._researchSiteService.getparticipant(id)
                .subscribe(function (res) {
                _this.researchSite = res;
                console.log(res);
                _this.fillVO(_this.researchSite);
                _this.internalVO.orgType = "RESEARCH";
                _this.buildForm();
                _this.isInitialised = true;
                console.log(_this.researchSite);
            });
            _this._supplyOrganisationService.getparticipant(id)
                .subscribe(function (res) {
                _this.supplyOrg = res;
                _this.fillVO(_this.supplyOrg);
                _this.internalVO.orgType = "SUPPLIER";
                _this.buildForm();
                _this.isInitialised = true;
                console.log(_this.supplyOrg);
                console.log(res);
            });
        });
    }
    OrganisationFormComponent.prototype.ngOnInit = function () {
    };
    OrganisationFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var type = this.organisationForm.value.orgType;
        this.fillObject(this.organisationForm.value, this.organisationForm.value.orgType);
        var result;
        if (type == "SUPPLIER") {
            if (this.idOrg) {
                this.supplyOrg.idSupplyOrganisation = "";
                result = this._supplyOrganisationService
                    .updateParticipant(this.idOrg, this.supplyOrg);
            }
            else {
                this.supplyOrg.idSupplyOrganisation = this.generateID();
                result = this._supplyOrganisationService
                    .addParticipant(this.supplyOrg);
            }
        }
        else if (type == "RESEARCH") {
            if (this.idOrg) {
                this.researchSite.idResearchSite = "";
                result = this._researchSiteService
                    .updateParticipant(this.idOrg, this.researchSite);
            }
            else {
                this.researchSite.idResearchSite = this.generateID();
                result = this._researchSiteService
                    .addParticipant(this.researchSite);
            }
        }
        result.subscribe(
        //saved succesfully - go back to administration
        function (data) {
            _this._router.navigate(['administration']);
        }, 
        //error - notify user
        function (err) {
            alert("Error while saving. Please try again.");
        });
    };
    //generate a random id for new patients
    OrganisationFormComponent.prototype.generateID = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    OrganisationFormComponent.prototype.fillVO = function (org) {
        this.internalVO.orgName = org.name;
        if (org.orgAddress) {
            this.internalVO.city = org.orgAddress.city;
            this.internalVO.country = org.orgAddress.country;
            this.internalVO.region = org.orgAddress.region;
            this.internalVO.street = org.orgAddress.street;
        }
        else {
            this.internalVO.city = "";
            this.internalVO.country = "";
            this.internalVO.region = "";
            this.internalVO.street = "";
            org.orgAddress = new _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_7__["Address"]();
        }
    };
    OrganisationFormComponent.prototype.fillObject = function (org, orgType) {
        if (orgType == "SUPPLIER") {
            this.supplyOrg.name = org.orgName;
            this.supplyOrg.orgAddress.city = org.city;
            this.supplyOrg.orgAddress.country = org.country;
            this.supplyOrg.orgAddress.region = org.region;
            this.supplyOrg.orgAddress.street = org.street;
            console.log("building supplier");
            console.log(this.supplyOrg);
        }
        else {
            this.researchSite.name = org.orgName;
            this.researchSite.orgAddress.city = org.city;
            this.researchSite.orgAddress.country = org.country;
            this.researchSite.orgAddress.region = org.region;
            this.researchSite.orgAddress.street = org.street;
            console.log("building research site");
            console.log(this.researchSite);
        }
    };
    OrganisationFormComponent.prototype.buildForm = function () {
        this.organisationForm = this.formBuilder.group({
            orgName: this.formBuilder.
                control(this.internalVO.orgName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            orgType: this.formBuilder.
                control(this.internalVO.orgType, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            city: this.formBuilder.
                control(this.internalVO.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            country: this.formBuilder.
                control(this.internalVO.country, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            region: this.formBuilder.
                control(this.internalVO.region, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            street: this.formBuilder.
                control(this.internalVO.street, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
        });
        this.nameControl = this.organisationForm.get('orgName');
        this.orgTypeControl = this.organisationForm.get('orgType');
        this.cityControl = this.organisationForm.get('city');
        this.countryControl = this.organisationForm.get('country');
        this.regionControl = this.organisationForm.get('region');
        this.streetControl = this.organisationForm.get('street');
    };
    OrganisationFormComponent.prototype.initBindings = function () {
        this.internalVO.orgName = "";
        this.internalVO.orgType = "";
        this.internalVO.city = "";
        this.internalVO.country = "";
        this.internalVO.locality = "";
        this.internalVO.postalCode = "";
        this.internalVO.region = "";
        this.internalVO.street = "";
        this.researchSite.orgAddress = new _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_7__["Address"]();
        this.supplyOrg.orgAddress = new _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_7__["Address"]();
    };
    OrganisationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'organisation-form',
            template: __webpack_require__(/*! ./organisation-form.component.html */ "./src/app/administration/organisation/organisation-form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_research_site_service__WEBPACK_IMPORTED_MODULE_5__["ResearchSiteService"],
            _service_supply_organisation_service__WEBPACK_IMPORTED_MODULE_6__["SupplyOrganisationService"]])
    ], OrganisationFormComponent);
    return OrganisationFormComponent;
}());



/***/ }),

/***/ "./src/app/administration/patient/patient-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/administration/patient/patient-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{title}}</h3>\n<div *ngIf=\"isInitialised\">\n<form [formGroup] = \"patientForm\" (ngSubmit)=\"onSubmit()\">\n  <table class=\"full-width\">\n    <tr>\n      <td>\n        <mat-form-field class=\"full-width\">\n          <input matInput type = \"text\" formControlName=\"firstName\" \n          placeholder=\"First name\" [(value)]=\"patient.person.firstName\">\n            <mat-error *ngIf=\"firstNameControl.errors\n                  && (firstNameControl.touched || firstNameControl.dirty)\">\n              Field is required and must have at least 2 characters</mat-error>\n        </mat-form-field>\n      </td>\n      <td>\n      <mat-form-field class=\"full-width\">\n          <input matInput type = \"text\" formControlName=\"lastName\" \n           placeholder=\"Last name\" [(value)]=\"patient.person.lastName\">\n          <mat-error *ngIf=\"lastNameControl.errors \n            && (lastNameControl.touched || lastNameControl.dirty)\">\n            Field is required and must have at least 2 characters</mat-error>  \n      </mat-form-field>\n      </td>\n    </tr>\n    <tr>\n      <td>\n      <mat-form-field>\n        <mat-select [(value)]=\"patient.person.gender\" placeholder = \"Gender\">\n          <mat-option value=\"MALE\">Male</mat-option>\n          <mat-option value=\"FEMALE\">Female</mat-option>\n        </mat-select>\n      </mat-form-field>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <mat-form-field class=\"full-width\">\n            <input matInput type = \"text\" formControlName=\"email\" \n            placeholder=\"E-mail\" [(value)]=\"patient.person.contactDetails.email\">\n        <mat-error *ngIf=\"emailControl.errors\n            && (emailControl.touched || emailControl.dirty)\">\n        Email is invalid</mat-error>      \n        </mat-form-field>\n      </td>\n      <td>\n        <mat-form-field class=\"full-width\">\n            <input matInput type = \"text\"  formControlName=\"phone\" \n             placeholder=\"Phone\" [(value)]=\"patient.person.contactDetails.mobilePhone\">\n        <mat-error *ngIf=\"phoneControl.errors\n            && (phoneControl.touched || phoneControl.dirty)\">\n        Phone number is invalid</mat-error>      \n       \n        </mat-form-field>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\"  formControlName=\"picker\"\n           placeholder=\"Birthdate\" [(value)]=\"patient.person.birthDetails.dateOfBirth\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"pickerControl.errors \n            && (pickerControl.touched || pickerControl.dirty)\">\n            Field is required</mat-error> \n        </mat-form-field>\n      </td>\n      <td>\n        <mat-form-field class=\"full-width\">\n            <input matInput type = \"text\" formControlName=\"placeOfBirth\"\n            placeholder=\"Place of birth\" [(value)]=\"patient.person.birthDetails.placeOfBirth\">\n            <mat-error *ngIf=\"placeOfBirthControl.errors \n            && (placeOfBirthControl.touched || placeOfBirthControl.dirty)\">\n            Field is required and must have at least 2 characters</mat-error> \n        </mat-form-field>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <mat-form-field class=\"full-width\">\n            <input matInput type = \"text\" formControlName=\"city\"\n            placeholder=\"City\" [(value)]=\"patient.person.contactDetails.address.city\">\n            <mat-error *ngIf=\"cityControl.errors \n            && (cityControl.touched || cityControl.dirty)\">\n            Field is required and must have at least 2 characters</mat-error>\n        </mat-form-field>\n      </td>\n      <td>\n        <mat-form-field class=\"full-width\">\n            <input matInput type = \"text\" formControlName=\"country\"\n            placeholder=\"Country\" [(value)]=\"patient.person.contactDetails.address.country\">\n            <mat-error *ngIf=\"countryControl.errors \n            && (countryControl.touched || countryControl.dirty)\">\n            Field is required and must have at least 2 characters</mat-error>\n        </mat-form-field>\n      </td>\n      <td>\n        <mat-form-field class=\"full-width\">\n            <input matInput type = \"text\" formControlName=\"region\" \n            placeholder=\"Region\"  [(value)]=\"patient.person.contactDetails.address.region\">\n            <mat-error *ngIf=\"regionControl.errors \n            && (regionControl.touched || regionControl.dirty)\">\n            Field is required and must have at least 2 characters</mat-error>\n        </mat-form-field>\n      </td>\n      <td>\n        <mat-form-field class=\"full-width\">\n            <input matInput type = \"text\" formControlName=\"street\" \n            placeholder=\"Street\"  [(value)]=\"patient.person.contactDetails.address.street\">\n            <mat-error *ngIf=\"streetControl.errors \n            && (streetControl.touched || streetControl.dirty)\">\n            Field is required and must have at least 2 characters</mat-error>\n        </mat-form-field>\n      </td>\n    </tr>\n  </table>\n  <div style=\"margin-bottom: 1em\">\n    <button type=\"submit\" class=\"btn btn-success\" \n      [disabled]=\"patientForm.invalid\">Save</button>\n  </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/administration/patient/patient-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/administration/patient/patient-form.component.ts ***!
  \******************************************************************/
/*! exports provided: PatientFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientFormComponent", function() { return PatientFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/ro.utcluj.clinictrial.base */ "./src/app/model/ro.utcluj.clinictrial.base.ts");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/patient.service */ "./src/app/service/patient.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientFormComponent = /** @class */ (function () {
    function PatientFormComponent(formBuilder, _router, _route, _patientService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this._router = _router;
        this._route = _route;
        this._patientService = _patientService;
        this.patient = new _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_3__["Patient"]();
        // display the form after the initialisation is done
        this.isInitialised = false;
        //check if this is an update operation or a create one
        var id = this._route.params
            .subscribe(function (params) {
            var id = params['idPatient'];
            _this.idPatient = id;
            console.log(id);
            //decide if the user wants to edit an existing patient or add a new one
            _this.title = id ? 'Edit patient info' : 'New patient';
            if (!id) {
                //instantiate the patient binding object
                _this.initBindings();
                //create the form and it's validators
                _this.buildForm();
                _this.isInitialised = true;
                return;
            }
            //update an existing patient => fetch it from data service
            _this._patientService.getAsset(id)
                .subscribe(function (res) {
                _this.patient = res;
                _this.buildForm();
                _this.isInitialised = true;
                console.log(_this.patient);
                console.log(res);
            });
        });
    }
    PatientFormComponent.prototype.buildForm = function () {
        this.patientForm = this.formBuilder.group({
            firstName: this.formBuilder.
                control(this.patient.person.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            lastName: this.formBuilder.
                control(this.patient.person.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            placeOfBirth: this.formBuilder.
                control(this.patient.person.birthDetails.placeOfBirth, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            picker: this.formBuilder.
                control(this.patient.person.birthDetails.dateOfBirth, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: this.formBuilder.
                control(this.patient.person.contactDetails.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            phone: this.formBuilder.
                control(this.patient.person.contactDetails.mobilePhone, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{10}')]),
            city: this.formBuilder.
                control(this.patient.person.contactDetails.address.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            country: this.formBuilder.
                control(this.patient.person.contactDetails.address.country, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            region: this.formBuilder.
                control(this.patient.person.contactDetails.address.region, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            street: this.formBuilder.
                control(this.patient.person.contactDetails.address.street, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
        });
        this.firstNameControl = this.patientForm.get('firstName');
        this.lastNameControl = this.patientForm.get('lastName');
        this.placeOfBirthControl = this.patientForm.get('placeOfBirth');
        this.pickerControl = this.patientForm.get('picker');
        this.emailControl = this.patientForm.get('email');
        this.phoneControl = this.patientForm.get('phone');
        this.cityControl = this.patientForm.get('city');
        this.countryControl = this.patientForm.get('country');
        this.regionControl = this.patientForm.get('region');
        this.streetControl = this.patientForm.get('street');
    };
    PatientFormComponent.prototype.ngOnInit = function () {
        this.initBindings();
    };
    PatientFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.fillObject(this.patientForm.value);
        console.log("Saving object... :");
        console.log(this.patient);
        var result;
        if (this.idPatient) {
            this.patient.idPatient = "";
            console.log(this.patient);
            result = this._patientService.updateAsset(this.idPatient, this.patient);
        }
        else {
            this.patient.idPatient = this.generatePatientID();
            result = this._patientService.addAsset(this.patient);
        }
        result.subscribe(
        //saved succesfully - go back to administration
        function (data) {
            _this._router.navigate(['administration']);
        }, 
        //error - notify user
        function (err) {
            alert("Error while saving. Please try again.");
        });
    };
    //generate a random id for new patients
    PatientFormComponent.prototype.generatePatientID = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    PatientFormComponent.prototype.fillObject = function (values) {
        this.patient.person.firstName = values.firstName;
        this.patient.person.lastName = values.lastName;
        this.patient.person.contactDetails.email = values.email;
        this.patient.person.contactDetails.mobilePhone = values.phone;
        this.patient.person.birthDetails.dateOfBirth = values.picker;
        this.patient.person.birthDetails.placeOfBirth = values.placeOfBirth;
        this.patient.person.contactDetails.address.city = values.city;
        this.patient.person.contactDetails.address.country = values.country;
        this.patient.person.contactDetails.address.region = values.region;
        this.patient.person.contactDetails.address.street = values.street;
    };
    PatientFormComponent.prototype.initBindings = function () {
        this.patient.person = new _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_3__["Person"]();
        this.patient.person.firstName = "";
        this.patient.person.lastName = "";
        this.patient.person.contactDetails = new _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_3__["ContactDetails"]();
        this.patient.person.contactDetails.email = "";
        this.patient.person.contactDetails.mobilePhone = "";
        this.patient.person.birthDetails = new _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_3__["BirthDetails"]();
        this.patient.person.birthDetails.placeOfBirth = "";
        this.patient.person.contactDetails.address = new _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_3__["Address"]();
        this.patient.person.contactDetails.address.city = "";
        this.patient.person.contactDetails.address.country = "";
        this.patient.person.contactDetails.address.region = "";
        this.patient.person.contactDetails.address.street = "";
    };
    PatientFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'patient-form',
            template: __webpack_require__(/*! ./patient-form.component.html */ "./src/app/administration/patient/patient-form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"]])
    ], PatientFormComponent);
    return PatientFormComponent;
}());



/***/ }),

/***/ "./src/app/administration/researcher/researcher-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/administration/researcher/researcher-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{title}}</h3>\n<div *ngIf=\"isInitialised\">\n  <form [formGroup]=\"researcherForm\" (ngSubmit)=\"onSubmit()\">\n    <table class=\"full-width\">\n      <tr>\n        <td>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" formControlName=\"firstName\" placeholder=\"First name\" [(value)]=\"researcher.person.firstName\">\n            <mat-error *ngIf=\"firstNameControl.errors\n                  && (firstNameControl.touched || firstNameControl.dirty)\">\n              Field is required and must have at least 2 characters</mat-error>\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" formControlName=\"lastName\" placeholder=\"Last name\" [(value)]=\"researcher.person.lastName\">\n            <mat-error *ngIf=\"lastNameControl.errors \n            && (lastNameControl.touched || lastNameControl.dirty)\">\n              Field is required and must have at least 2 characters</mat-error>\n          </mat-form-field>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <mat-form-field>\n            <mat-select [(value)]=\"researcher.person.gender\" placeholder=\"Gender\">\n              <mat-option value=\"MALE\">Male</mat-option>\n              <mat-option value=\"FEMALE\">Female</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" formControlName=\"email\" placeholder=\"E-mail\" [(value)]=\"researcher.person.contactDetails.email\">\n            <mat-error *ngIf=\"emailControl.errors\n            && (emailControl.touched || emailControl.dirty)\">\n              Email is invalid</mat-error>\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" formControlName=\"phone\" placeholder=\"Phone\" [(value)]=\"researcher.person.contactDetails.mobilePhone\">\n            <mat-error *ngIf=\"phoneControl.errors\n            && (phoneControl.touched || phoneControl.dirty)\">\n              Phone number is invalid</mat-error>\n\n          </mat-form-field>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" formControlName=\"picker\" placeholder=\"Birthdate\" [(value)]=\"researcher.person.birthDetails.dateOfBirth\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n            <mat-error *ngIf=\"pickerControl.errors \n            && (pickerControl.touched || pickerControl.dirty)\">\n              Field is required</mat-error>\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" formControlName=\"placeOfBirth\" placeholder=\"Place of birth\" [(value)]=\"researcher.person.birthDetails.placeOfBirth\">\n            <mat-error *ngIf=\"placeOfBirthControl.errors \n            && (placeOfBirthControl.touched || placeOfBirthControl.dirty)\">\n              Field is required and must have at least 2 characters</mat-error>\n          </mat-form-field>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" formControlName=\"city\" placeholder=\"City\" [(value)]=\"researcher.person.contactDetails.address.city\">\n            <mat-error *ngIf=\"cityControl.errors \n            && (cityControl.touched || cityControl.dirty)\">\n              Field is required and must have at least 2 characters</mat-error>\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" formControlName=\"country\" placeholder=\"Country\" [(value)]=\"researcher.person.contactDetails.address.country\">\n            <mat-error *ngIf=\"countryControl.errors \n            && (countryControl.touched || countryControl.dirty)\">\n              Field is required and must have at least 2 characters</mat-error>\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" formControlName=\"region\" placeholder=\"Region\" [(value)]=\"researcher.person.contactDetails.address.region\">\n            <mat-error *ngIf=\"regionControl.errors \n            && (regionControl.touched || regionControl.dirty)\">\n              Field is required and must have at least 2 characters</mat-error>\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" formControlName=\"street\" placeholder=\"Street\" [(value)]=\"researcher.person.contactDetails.address.street\">\n            <mat-error *ngIf=\"streetControl.errors \n            && (streetControl.touched || streetControl.dirty)\">\n              Field is required and must have at least 2 characters</mat-error>\n          </mat-form-field>\n        </td>\n      </tr>\n      <!-- Search input for research centers -->\n      <tr>\n        <td>\n          <input matInput type=\"text\" placeholder=\"Search a research center\" [(value)]=\"searchQuery\">\n        </td>\n        <td>\n          <a mat-button (click)=\"search()\">Search</a>\n        </td>\n      </tr>\n    </table>\n    <br/>\n    <!-- table that displays the search result -->\n    <div *ngIf=\"searchActivate\">\n      <table class=\"highlight\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Select</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let res of searchResult\">\n            <td>\n              {{res.name}}\n            </td>\n            <td>\n              <a mat-button (click)=\"onSelect(res)\">Select</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div *ngIf=\"selectionActivate\">\n      <table>\n        <tbody>\n          <tr>\n            <td>\n              <h5>Organisation {{orgName}} selected</h5>\n            </td>\n            <td>\n              <a mat-button (click)=\"onCancel()\">Cancel selection</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div style=\"margin-bottom: 1em\">\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"researcherForm.invalid\">Save</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/administration/researcher/researcher-from.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/administration/researcher/researcher-from.component.ts ***!
  \************************************************************************/
/*! exports provided: ResearcherFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearcherFormComponent", function() { return ResearcherFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/ro.utcluj.clinictrial.base */ "./src/app/model/ro.utcluj.clinictrial.base.ts");
/* harmony import */ var _service_researcher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/researcher.service */ "./src/app/service/researcher.service.ts");
/* harmony import */ var _service_research_site_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/research-site.service */ "./src/app/service/research-site.service.ts");
/* harmony import */ var _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/id-provider.service */ "./src/app/utils/id-provider.service.ts");
/* harmony import */ var _utils_resource_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/resource-provider */ "./src/app/utils/resource-provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResearcherFormComponent = /** @class */ (function () {
    function ResearcherFormComponent(formBuilder, _router, _route, _researcherService, _researchSiteService, _idProvider) {
        var _this = this;
        this.formBuilder = formBuilder;
        this._router = _router;
        this._route = _route;
        this._researcherService = _researcherService;
        this._researchSiteService = _researchSiteService;
        this._idProvider = _idProvider;
        this.researcher = new _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_3__["Researcher"]();
        // display the form after the initialisation is done
        this.isInitialised = false;
        //form view controls
        this.searchActivate = false;
        this.selectionActivate = false;
        this.searchQuery = "";
        this.orgName = "";
        this.searchResult = [];
        //check if this is an update operation or a create one
        var id = this._route.params
            .subscribe(function (params) {
            var id = params['idResearcher'];
            _this.idResearcher = id;
            console.log(id);
            //decide if the user wants to edit an existing researcher or add a new one
            _this.title = id ? 'Edit researcher info' : 'New researcher';
            if (!id) {
                //instantiate the researcher binding object
                _this.initBindings();
                //create the form and it's validators
                _this.buildForm();
                _this.isInitialised = true;
                return;
            }
            //update an existing researcher => fetch it from data service
            _this._researcherService.getparticipant(id)
                .subscribe(function (res) {
                _this.researcher = res;
                _this.buildForm();
                _this.isInitialised = true;
                console.log(_this.researcher);
                console.log(res);
            });
        });
    }
    ResearcherFormComponent.prototype.ngOnInit = function () {
        this.searchActivate = false;
    };
    ResearcherFormComponent.prototype.search = function () {
        var _this = this;
        this._researchSiteService.getAll().toPromise()
            .then(function (res) {
            _this.searchResult = [];
            console.log(res);
            res.forEach(function (part) {
                _this.searchResult.push(part);
            });
            _this.searchActivate = true;
            (function (err) {
                alert("Something went wrong while searching. Please try again!");
            });
        });
    };
    ResearcherFormComponent.prototype.onSelect = function (res) {
        this.orgName = res.name;
        this.researcher.employer = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_7__["ResourceProvider"].newResearchSiteResource(res.idResearchSite);
        this.searchActivate = false;
        this.selectionActivate = true;
    };
    ResearcherFormComponent.prototype.onCancel = function () {
        this.orgName = "";
        this.researcher.employer = null;
        this.searchActivate = true;
        this.selectionActivate = false;
    };
    ResearcherFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.fillObject(this.researcherForm.value);
        console.log("Saving object... :");
        console.log(this.researcher);
        var result;
        if (this.idResearcher) {
            this.researcher.idResearcher = "";
            result = this._researcherService.updateParticipant(this.idResearcher, this.researcher);
        }
        else {
            this.researcher.idResearcher = this._idProvider.generateID();
            console.log(JSON.stringify(this.researcher));
            result = this._researcherService.addParticipant(this.researcher);
        }
        result.subscribe(
        //saved succesfully - go back to administration
        function (data) {
            _this._router.navigate(['administration']);
        }, 
        //error - notify user
        function (err) {
            alert("Error while saving. Please try again.");
        });
    };
    ResearcherFormComponent.prototype.fillObject = function (values) {
        this.researcher.person.firstName = values.firstName;
        this.researcher.person.lastName = values.lastName;
        this.researcher.person.contactDetails.email = values.email;
        this.researcher.person.contactDetails.mobilePhone = values.phone;
        this.researcher.person.birthDetails.dateOfBirth = values.picker;
        this.researcher.person.birthDetails.placeOfBirth = values.placeOfBirth;
        this.researcher.person.contactDetails.address.city = values.city;
        this.researcher.person.contactDetails.address.country = values.country;
        this.researcher.person.contactDetails.address.region = values.region;
        this.researcher.person.contactDetails.address.street = values.street;
    };
    ResearcherFormComponent.prototype.buildForm = function () {
        this.researcherForm = this.formBuilder.group({
            firstName: this.formBuilder.
                control(this.researcher.person.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            lastName: this.formBuilder.
                control(this.researcher.person.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            placeOfBirth: this.formBuilder.
                control(this.researcher.person.birthDetails.placeOfBirth, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            picker: this.formBuilder.
                control(this.researcher.person.birthDetails.dateOfBirth, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: this.formBuilder.
                control(this.researcher.person.contactDetails.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            phone: this.formBuilder.
                control(this.researcher.person.contactDetails.mobilePhone, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{10}')]),
            city: this.formBuilder.
                control(this.researcher.person.contactDetails.address.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            country: this.formBuilder.
                control(this.researcher.person.contactDetails.address.country, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            region: this.formBuilder.
                control(this.researcher.person.contactDetails.address.region, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            street: this.formBuilder.
                control(this.researcher.person.contactDetails.address.street, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
        });
        this.firstNameControl = this.researcherForm.get('firstName');
        this.lastNameControl = this.researcherForm.get('lastName');
        this.placeOfBirthControl = this.researcherForm.get('placeOfBirth');
        this.pickerControl = this.researcherForm.get('picker');
        this.emailControl = this.researcherForm.get('email');
        this.phoneControl = this.researcherForm.get('phone');
        this.cityControl = this.researcherForm.get('city');
        this.countryControl = this.researcherForm.get('country');
        this.regionControl = this.researcherForm.get('region');
        this.streetControl = this.researcherForm.get('street');
    };
    ResearcherFormComponent.prototype.initBindings = function () {
        this.researcher.person = new _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_3__["Person"]();
        this.researcher.person.firstName = "";
        this.researcher.person.lastName = "";
        this.researcher.person.contactDetails = new _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_3__["ContactDetails"]();
        this.researcher.person.contactDetails.email = "";
        this.researcher.person.contactDetails.mobilePhone = "";
        this.researcher.person.birthDetails = new _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_3__["BirthDetails"]();
        this.researcher.person.birthDetails.placeOfBirth = "";
        this.researcher.person.contactDetails.address = new _model_ro_utcluj_clinictrial_base__WEBPACK_IMPORTED_MODULE_3__["Address"]();
        this.researcher.person.contactDetails.address.city = "";
        this.researcher.person.contactDetails.address.country = "";
        this.researcher.person.contactDetails.address.region = "";
        this.researcher.person.contactDetails.address.street = "";
    };
    ResearcherFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'researcher-form',
            template: __webpack_require__(/*! ./researcher-form.component.html */ "./src/app/administration/researcher/researcher-form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_researcher_service__WEBPACK_IMPORTED_MODULE_4__["ResearcherService"],
            _service_research_site_service__WEBPACK_IMPORTED_MODULE_5__["ResearchSiteService"],
            _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_6__["IdProviderService"]])
    ], ResearcherFormComponent);
    return ResearcherFormComponent;
}());



/***/ }),

/***/ "./src/app/model/ro.utcluj.clinictrial.base.ts":
/*!*****************************************************!*\
  !*** ./src/app/model/ro.utcluj.clinictrial.base.ts ***!
  \*****************************************************/
/*! exports provided: Gender, Person, ContactDetails, BirthDetails, DeathDetails, Address, ParticipantPerson, Researcher, Supplier, Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetails", function() { return ContactDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthDetails", function() { return BirthDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathDetails", function() { return DeathDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantPerson", function() { return ParticipantPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Researcher", function() { return Researcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return Supplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
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


// export namespace ro.utcluj.clinictrial.base{
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["ALL"] = 2] = "ALL";
})(Gender || (Gender = {}));
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());

var ContactDetails = /** @class */ (function () {
    function ContactDetails() {
    }
    return ContactDetails;
}());

var BirthDetails = /** @class */ (function () {
    function BirthDetails() {
    }
    return BirthDetails;
}());

var DeathDetails = /** @class */ (function () {
    function DeathDetails() {
    }
    return DeathDetails;
}());

var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());

var ParticipantPerson = /** @class */ (function (_super) {
    __extends(ParticipantPerson, _super);
    function ParticipantPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParticipantPerson;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Participant"]));

var Researcher = /** @class */ (function (_super) {
    __extends(Researcher, _super);
    function Researcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Researcher;
}(ParticipantPerson));

var Supplier = /** @class */ (function (_super) {
    __extends(Supplier, _super);
    function Supplier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Supplier;
}(ParticipantPerson));

var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Patient;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Asset"]));

// }


/***/ }),

/***/ "./src/app/model/ro.utcluj.clinictrial.organisation.ts":
/*!*************************************************************!*\
  !*** ./src/app/model/ro.utcluj.clinictrial.organisation.ts ***!
  \*************************************************************/
/*! exports provided: Organisation, ResearchSite, SupplyOrganisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organisation", function() { return Organisation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchSite", function() { return ResearchSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyOrganisation", function() { return SupplyOrganisation; });
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

// export namespace ro.utcluj.clinictrial.organisation{
var Organisation = /** @class */ (function (_super) {
    __extends(Organisation, _super);
    function Organisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Organisation;
}(_org_hyperledger_composer_system__WEBPACK_IMPORTED_MODULE_0__["Participant"]));

var ResearchSite = /** @class */ (function (_super) {
    __extends(ResearchSite, _super);
    function ResearchSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ResearchSite;
}(Organisation));

var SupplyOrganisation = /** @class */ (function (_super) {
    __extends(SupplyOrganisation, _super);
    function SupplyOrganisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SupplyOrganisation;
}(Organisation));

// }


/***/ }),

/***/ "./src/app/service/supply-organisation.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/supply-organisation.service.ts ***!
  \********************************************************/
/*! exports provided: SupplyOrganisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyOrganisationService", function() { return SupplyOrganisationService; });
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
var SupplyOrganisationService = /** @class */ (function () {
    function SupplyOrganisationService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'SupplyOrganisation';
    }
    ;
    SupplyOrganisationService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    SupplyOrganisationService.prototype.getparticipant = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    SupplyOrganisationService.prototype.addParticipant = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    SupplyOrganisationService.prototype.updateParticipant = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    SupplyOrganisationService.prototype.deleteParticipant = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    SupplyOrganisationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SupplyOrganisationService);
    return SupplyOrganisationService;
}());



/***/ })

}]);
//# sourceMappingURL=app-administration-administration-module.js.map