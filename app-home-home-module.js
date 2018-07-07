(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-home-home-module"],{

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<br/>\n<br/>\n<div class=\"center-div\" *ngIf=\"identityAdd\">\n    <h2>No identity binded to the account wallet. Please enter a participation ID provided by your orgnisation</h2>\n</div>\n<br/>\n<div class=\"center-div\" *ngIf=\"identityAdd\">\n    <mat-form-field class=\"input-field-width\">\n        <input matInput type=\"text\" placeholder=\"ParticipantID\" [(ngModel)]=\"idParticipant\">\n    </mat-form-field>\n</div>\n<br/>\n<div class=\"center-div\" *ngIf=\"identityAdd\">\n    <h4>Choose the identity type:</h4>\n    <br/>\n</div>\n<div class=\"center-div\" *ngIf=\"identityAdd\">\n\n    <mat-radio-group [(ngModel)]=\"identityType\">\n        <mat-radio-button value=\"researcher\">Researcher </mat-radio-button>\n        <br/>\n        <mat-radio-button value=\"agent\">Regulatory Agent </mat-radio-button>\n        <br/>\n        <mat-radio-button value=\"sponsor\">Sponsor </mat-radio-button>\n        <br/>\n    </mat-radio-group>\n</div>\n<br/>\n<div class=\"center-div\" *ngIf=\"identityAdd\">\n    <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Bind</button>\n</div>\n\n\n<div class=\"center-div\" *ngIf=\"!identityAdd\">\n    <mat-card class=\"description-card-small\">\n        <mat-card-header>\n            <h2>\n                Current identity\n            </h2>\n        </mat-card-header>\n        <mat-card-content>\n            {{setIdentity}}\n        </mat-card-content>\n    </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/system-service */ "./src/app/service/system-service.ts");
/* harmony import */ var _service_researcher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/researcher.service */ "./src/app/service/researcher.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loader/loader.service */ "./src/app/components/loader/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(_router, _route, _systemService, _researcherService, _authService, _loaderService) {
        var _this = this;
        this._router = _router;
        this._route = _route;
        this._systemService = _systemService;
        this._researcherService = _researcherService;
        this._authService = _authService;
        this._loaderService = _loaderService;
        this.identityAdd = false;
        this.idParticipant = "";
        this.identities = [];
        var result = this._route.params
            .subscribe(function (params) {
            var res = params['loggedIn'];
            _this._systemService.checkWallet().then(function (res) {
                console.log(res);
                if (res['length'] == 0) {
                    console.log("No identities defined in wallet. Asking for an identity");
                    _this.identityAdd = true;
                    _this._loaderService.hide();
                    _this.identities.concat(res);
                }
                else {
                    _this._systemService.getCurrentUser().then(function (res) {
                        console.log(res);
                        _this._authService.storeUserInfo(res);
                        _this.identityAdd = false;
                        _this._loaderService.hide();
                    });
                }
            });
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.identityAdd = false;
    };
    HomeComponent.prototype.onSubmit = function () {
        var _this = this;
        this._loaderService.show();
        this.idParticipant = this.idParticipant.trim();
        if (!this.identityType) {
            alert("Please choose the type of identity!");
            return;
        }
        if (this.idParticipant == "") {
            alert("Participant ID cannot be empty!");
            return;
        }
        console.log("Binding identity to account...");
        console.log(this.idParticipant);
        console.log(this.identityType);
        if (this.identityType == "researcher") {
            console.log("Selected researcher option");
            this._researcherService.getparticipantAdmin(this.idParticipant).subscribe(function (participant) {
                console.log("Found participant ...");
                console.log(participant);
                console.log("Biniding to wallet...");
                _this._systemService
                    .bindIdentity(_this.createResearcherIdentity(participant)).then(function (res) {
                    _this._loaderService.hide();
                    console.log("Checking if default identity is set...");
                    _this._systemService.getCurrentUser().then(function (res) {
                        console.log("Seting cookies...");
                        _this._authService.storeUserInfo(res);
                        console.log("Reinitializing...");
                        _this._router.navigate([_this._router.url]);
                    });
                });
            }, function (err) {
                _this._loaderService.hide();
                alert("Cannot bind identity");
            });
        }
        else if (this.identityType == "agent") {
        }
        else if (this.identityType == "sponsor") {
        }
    };
    HomeComponent.prototype.createResearcherIdentity = function (researcher) {
        var identity = {
            participant: 'ro.utcluj.clinictrial.base.Researcher#' + researcher.idResearcher,
            userID: researcher.idResearcher,
            options: {}
        };
        return identity;
    };
    HomeComponent.prototype.bindAccount = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-component',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"],
            _service_researcher_service__WEBPACK_IMPORTED_MODULE_3__["ResearcherService"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _service_researcher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/researcher.service */ "./src/app/service/researcher.service.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.routing */ "./src/app/home/home.routing.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.component */ "./src/app/home/login.component.ts");
/* harmony import */ var _patient_view_patient_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patient-view/patient-view.component */ "./src/app/home/patient-view/patient-view.component.ts");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/patient.service */ "./src/app/service/patient.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _home_routing__WEBPACK_IMPORTED_MODULE_6__["HomeRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _patient_view_patient_view_component__WEBPACK_IMPORTED_MODULE_8__["PatientViewComponent"]
            ],
            providers: [
                _service_researcher_service__WEBPACK_IMPORTED_MODULE_4__["ResearcherService"],
                _service_patient_service__WEBPACK_IMPORTED_MODULE_9__["PatientService"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.routing.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.routing.ts ***!
  \**************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/home/login.component.ts");
/* harmony import */ var _patient_view_patient_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-view/patient-view.component */ "./src/app/home/patient-view/patient-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'view/:idPatient', component: _patient_view_patient_view_component__WEBPACK_IMPORTED_MODULE_4__["PatientViewComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/login.component.html":
/*!*******************************************!*\
  !*** ./src/app/home/login.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 10em 0;\">\n    <a style=\"display: table;\n    margin: 0 auto;\" (click)=\"loginAnimation()\" mat-raised-button href=\"http://localhost:3000/auth/github\">Sign in with GitHub</a>\n</div>"

/***/ }),

/***/ "./src/app/home/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/home/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loader/loader.service */ "./src/app/components/loader/loader.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loaderService, _authService) {
        this._loaderService = _loaderService;
        this._authService = _authService;
        _authService.clearUserInfo();
    }
    LoginComponent.prototype.loginAnimation = function () {
        this._loaderService.show();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/home/login.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_components_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/home/patient-view/patient-view.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/patient-view/patient-view.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isInitialised\">\n    <div class=\"center-div\">\n        <mat-card style= \"width:35%; height: 75vh;\">\n            <mat-card-header>\n                <mat-card-title><h1>Patient Overview</h1></mat-card-title>\n                <mat-card-subtitle><h2>{{patient.person.firstName}} {{patient.person.lastName}}</h2></mat-card-subtitle>\n\n            </mat-card-header>\n            <mat-card-content>\n                <mat-divider></mat-divider>\n                <br/>\n                Gender:&nbsp; {{patient.person.gender}}\n                <br/>\n                <br/>\n                <mat-divider></mat-divider><br/>\n                Address:&nbsp; {{patient.person.contactDetails.address.country}}, {{patient.person.contactDetails.address.city}}, {{patient.person.contactDetails.address.region}}, {{patient.person.contactDetails.address.street}}\n                <br/><br/>\n                <mat-divider></mat-divider><br/>\n                E-mail:&nbsp; {{patient.person.contactDetails.email}}\n                <br/><br/>\n                <mat-divider></mat-divider><br/>\n                Phone:&nbsp; {{patient.person.contactDetails.mobilePhone}}\n                <br/><br/>\n                <mat-divider></mat-divider><br/>\n                Birthdate:&nbsp; {{formattedBirthdate.toLocaleDateString()}}\n                <br/><br/>\n                <mat-divider></mat-divider><br/>\n                Age:&nbsp; {{age}}\n                <br/><br/>\n                <mat-divider></mat-divider><br/>\n                Place of birth:&nbsp; {{patient.person.birthDetails.placeOfBirth}}\n                <br/><br/>\n                <mat-divider></mat-divider>\n            </mat-card-content>\n        </mat-card>\n        &nbsp;\n        <mat-card style= \"width: 65%; height: 75vh;\">\n            <mat-card-header>\n                <mat-card-title><h2>Patient History</h2></mat-card-title>\n                \n            </mat-card-header>\n            <mat-card-content>\n\n            </mat-card-content>\n        </mat-card>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/home/patient-view/patient-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/patient-view/patient-view.component.ts ***!
  \*************************************************************/
/*! exports provided: PatientViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientViewComponent", function() { return PatientViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _service_queries_form_value_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/queries/form-value-query-service */ "./src/app/service/queries/form-value-query-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientViewComponent = /** @class */ (function () {
    function PatientViewComponent(_patientService, _router, _route, _dataQueryService) {
        var _this = this;
        this._patientService = _patientService;
        this._router = _router;
        this._route = _route;
        this._dataQueryService = _dataQueryService;
        this.isInitialised = false;
        this.formValues = [];
        var id = this._route.params
            .subscribe(function (params) {
            var id = params['idPatient'];
            _this.idPatient = id;
            console.log(id);
            //decide if the user wants to edit an existing patient or add a new one
            if (!id) {
                alert("Patient not found!");
                return;
            }
            else {
                _this._patientService.getAsset(_this.idPatient).subscribe(function (res) {
                    _this.patient = res;
                    _this.formattedBirthdate = new Date(_this.patient.person.birthDetails.dateOfBirth);
                    console.log(_this.formattedBirthdate);
                    _this.age = _this.getAge(_this.formattedBirthdate);
                    _this._dataQueryService.selectDataForPatient(_this.patient.idPatient).subscribe(function (values) {
                        console.log(values);
                        _this.formValues = values;
                    });
                    _this.isInitialised = true;
                    console.log(_this.patient);
                });
            }
        });
    }
    PatientViewComponent.prototype.ngOnInit = function () {
    };
    PatientViewComponent.prototype.getAge = function (birthday) {
        return ~~((Date.now() - birthday) / (31557600000));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PatientViewComponent.prototype, "idTrial", void 0);
    PatientViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'patient-view',
            template: __webpack_require__(/*! ./patient-view.component.html */ "./src/app/home/patient-view/patient-view.component.html")
        }),
        __metadata("design:paramtypes", [_service_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_queries_form_value_query_service__WEBPACK_IMPORTED_MODULE_3__["FormValueQueryService"]])
    ], PatientViewComponent);
    return PatientViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-home-home-module.js.map