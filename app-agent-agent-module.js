(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-agent-agent-module"],{

/***/ "./src/app/agent/agent.component.html":
/*!********************************************!*\
  !*** ./src/app/agent/agent.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab label=\"All Transactions\">\n\n        <ng-template matTabContent>\n            <br/>\n            <br/>\n            <history-table [historyData]=\"allProcessedHistory\" *ngIf=\"isInitialised\"></history-table>\n        </ng-template>\n    </mat-tab>\n\n    <mat-tab label=\"Transactions for Trial\">\n        <ng-template matTabContent>\n            <br/>\n            <form>\n                <mat-form-field style=\"width: 75%;\">\n                    <input type=\"text\" [formControl]=\"myControl\" matInput [matAutocomplete]=\"auto\">\n                    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n                        <mat-option *ngFor=\"let trial of filteredOptions | async\" [value]=\"trial\">{{trial.studyName}}</mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>&nbsp;&nbsp;\n                <button mat-raised-button (click)=\"onTrialSelect()\" color=\"primary\">Select</button>\n            </form>\n            <history-table [historyData]=\"trialFilteredHistory\" *ngIf=\"isInitialised\"></history-table>\n        </ng-template>\n    </mat-tab>\n\n    <mat-tab label=\"Transactions by Type\">\n\n        <ng-template matTabContent>\n            <br/>\n            <mat-form-field style=\"width: 75%\">\n                <mat-select placeholder=\"Select a transaction type\" [(value)]=\"selectedTransaction\">\n                    <mat-option value='None'> - </mat-option>\n                    <mat-option *ngFor=\"let entry of transactionTypes\" [value]=\"entry\">\n                        {{ entry }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>&nbsp;&nbsp;\n            <button mat-raised-button (click)=\"onTransactionSelect()\" color=\"primary\">Select</button>\n\n            <history-table [historyData]=\"filteredHistory\" *ngIf=\"isInitialised\"></history-table>\n        </ng-template>\n    </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/agent/agent.component.ts":
/*!******************************************!*\
  !*** ./src/app/agent/agent.component.ts ***!
  \******************************************/
/*! exports provided: AgentComponent, HistorianVO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentComponent", function() { return AgentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorianVO", function() { return HistorianVO; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_historian_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/historian.service */ "./src/app/service/historian.service.ts");
/* harmony import */ var _service_trial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/trial.service */ "./src/app/service/trial.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AgentComponent = /** @class */ (function () {
    function AgentComponent(_historianService, _trialService) {
        this._historianService = _historianService;
        this._trialService = _trialService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.isInitialised = false;
        this.allHistory = [];
        this.allProcessedHistory = [];
        this.filteredHistory = [];
        this.trials = [];
        this.trialInput = "";
        this.trialFilteredHistory = [];
        this.selectedTransaction = 'None';
        this.transactionTypes = [
            'CreateCustomForm',
            'AddResearcherToTrial',
            'RemoveResearcherFromTrial'
        ];
        this.isInitialised = false;
    }
    AgentComponent.prototype.ngOnInit = function () {
        this.loadHistorian();
    };
    AgentComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.trials.filter(function (option) { return option.studyName.toLowerCase().indexOf(filterValue) === 0; });
    };
    AgentComponent.prototype.loadHistorian = function () {
        var _this = this;
        this._historianService.getAll().subscribe(function (res) {
            console.log(res);
            _this.allHistory = res;
            _this.processHistorian(_this.allHistory);
        });
        this._trialService.getAll().subscribe(function (res) {
            _this.trials = res;
            _this.filteredOptions = _this.myControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return typeof value === 'string' ? value : value.studyName; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) { return name ? _this._filter(name) : _this.trials.slice(); }));
        });
    };
    AgentComponent.prototype.displayFn = function (trial) {
        return trial ? trial.studyName : undefined;
    };
    AgentComponent.prototype.processHistorian = function (historian) {
        for (var _i = 0, historian_1 = historian; _i < historian_1.length; _i++) {
            var entry = historian_1[_i];
            var target = new HistorianVO();
            switch (entry.transactionType) {
                case 'ro.utcluj.clinictrial.trial.CreateCustomForm':
                    {
                        target.transactionType = 'CreateCustomForm';
                        target.transactionTimestamp = entry.transactionTimestamp.toLocaleString().replace('T', ' ').replace('Z', ' ').split('.')[0];
                        target.participantInvoking = this.getParticipant(entry.participantInvoking);
                        target.trial = entry.eventsEmitted[0].trial.idTrial;
                        target.eventsEmitted = entry.eventsEmitted;
                        target.customFormID = entry.eventsEmitted[0].form.idForm;
                        this.allProcessedHistory.push(target);
                    }
                    break;
                case 'ro.utcluj.clinictrial.trial.AddResearcherToTrial':
                    {
                        target.transactionType = 'AddResearcherToTrial';
                        target.transactionTimestamp = entry.transactionTimestamp.toLocaleString().replace('T', ' ').replace('Z', ' ').split('.')[0];
                        target.participantInvoking = this.getParticipant(entry.participantInvoking);
                        target.trial = entry.eventsEmitted[0].trial.idTrial;
                        target.researcher = entry.eventsEmitted[0].researcher.idResearcher;
                        this.allProcessedHistory.push(target);
                    }
                    break;
                case 'ro.utcluj.clinictrial.trial.RemoveResearcherFromTrial': {
                    target.transactionType = 'RemoveResearcherFromTrial';
                    target.transactionTimestamp = entry.transactionTimestamp.toLocaleString().replace('T', ' ').replace('Z', ' ').split('.')[0];
                    target.participantInvoking = this.getParticipant(entry.participantInvoking);
                    target.trial = entry.eventsEmitted[0].trial.idTrial;
                    target.researcher = entry.eventsEmitted[0].researcher.idResearcher;
                    this.allProcessedHistory.push(target);
                }
            }
        }
        console.log(this.allProcessedHistory);
        this.historyDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allProcessedHistory);
        this.isInitialised = true;
    };
    AgentComponent.prototype.getParticipant = function (participantString) {
        var splitString = participantString.toLocaleString().split('.');
        return splitString[splitString.length - 1];
    };
    AgentComponent.prototype.onTransactionSelect = function () {
        var _this = this;
        if (this.selectedTransaction == 'None') {
            alert("Please select a transaction type");
        }
        else {
            console.log(this.selectedTransaction);
            this.filteredHistory = this.allProcessedHistory.filter(function (entry) { return entry.transactionType == _this.selectedTransaction; });
        }
    };
    AgentComponent.prototype.onTrialSelect = function () {
        var _this = this;
        this.trialFilteredHistory = this.allProcessedHistory.filter(function (entry) {
            return entry.trial == _this.myControl.value.idTrial;
        });
        console.log(this.trialFilteredHistory);
    };
    AgentComponent.prototype.filterByTransactionType = function (src, target) {
        return src == target;
    };
    AgentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'agent',
            template: __webpack_require__(/*! ./agent.component.html */ "./src/app/agent/agent.component.html")
        }),
        __metadata("design:paramtypes", [_service_historian_service__WEBPACK_IMPORTED_MODULE_4__["HistorianService"],
            _service_trial_service__WEBPACK_IMPORTED_MODULE_5__["TrialService"]])
    ], AgentComponent);
    return AgentComponent;
}());

var HistorianVO = /** @class */ (function () {
    function HistorianVO() {
    }
    return HistorianVO;
}());



/***/ }),

/***/ "./src/app/agent/agent.module.ts":
/*!***************************************!*\
  !*** ./src/app/agent/agent.module.ts ***!
  \***************************************/
/*! exports provided: AgentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentModule", function() { return AgentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _agent_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agent.routing */ "./src/app/agent/agent.routing.ts");
/* harmony import */ var _service_historian_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/historian.service */ "./src/app/service/historian.service.ts");
/* harmony import */ var _agent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agent.component */ "./src/app/agent/agent.component.ts");
/* harmony import */ var _table_history_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table/history-table.component */ "./src/app/agent/table/history-table.component.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/component.module */ "./src/app/components/component.module.ts");
/* harmony import */ var _service_trial_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/trial.service */ "./src/app/service/trial.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AgentModule = /** @class */ (function () {
    function AgentModule() {
    }
    AgentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _agent_routing__WEBPACK_IMPORTED_MODULE_4__["AgentRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_8__["ComponentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _agent_component__WEBPACK_IMPORTED_MODULE_6__["AgentComponent"],
                _table_history_table_component__WEBPACK_IMPORTED_MODULE_7__["HistoryTable"]
            ],
            exports: [
                _table_history_table_component__WEBPACK_IMPORTED_MODULE_7__["HistoryTable"]
            ],
            providers: [
                _service_historian_service__WEBPACK_IMPORTED_MODULE_5__["HistorianService"],
                _service_trial_service__WEBPACK_IMPORTED_MODULE_9__["TrialService"]
            ]
        })
    ], AgentModule);
    return AgentModule;
}());



/***/ }),

/***/ "./src/app/agent/agent.routing.ts":
/*!****************************************!*\
  !*** ./src/app/agent/agent.routing.ts ***!
  \****************************************/
/*! exports provided: AgentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentRoutingModule", function() { return AgentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agent.component */ "./src/app/agent/agent.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _agent_component__WEBPACK_IMPORTED_MODULE_2__["AgentComponent"] }
];
var AgentRoutingModule = /** @class */ (function () {
    function AgentRoutingModule() {
    }
    AgentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AgentRoutingModule);
    return AgentRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/table/history-table.component.html":
/*!**********************************************************!*\
  !*** ./src/app/agent/table/history-table.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayTable\">\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table #table [dataSource]=\"historyDataSource\">\n\n            <!-- Patient ID column -->\n            <ng-container matColumnDef=\"TransactionType\">\n                <mat-header-cell *matHeaderCellDef> TransactionType </mat-header-cell>\n                <mat-cell *matCellDef=\"let entry\"> {{entry.transactionType}} </mat-cell>\n            </ng-container>\n\n            <!-- Patient ID column -->\n            <ng-container matColumnDef=\"Date\">\n                <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>\n                <mat-cell *matCellDef=\"let entry\"> {{entry.transactionTimestamp}} </mat-cell>\n            </ng-container>\n\n            <!-- Patient ID column -->\n            <ng-container matColumnDef=\"InvokingUserID\">\n                <mat-header-cell *matHeaderCellDef> Invoking User ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let entry\"> {{entry.participantInvoking}} </mat-cell>\n            </ng-container>\n\n            <!-- Patient ID column -->\n            <ng-container matColumnDef=\"Trial\">\n                <mat-header-cell *matHeaderCellDef> Trial </mat-header-cell>\n                <mat-cell *matCellDef=\"let entry\">\n                    {{entry.trial}} &nbsp;&nbsp;&nbsp;\n                    <a mat-button (click)=\"viewTrial(entry.trial)\" color=\"primary\">\n                        Go to trial {{entry.trial}}\n                    </a>\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"expandedDetail\">\n                <mat-cell *matCellDef=\"let detail\">\n                    <div class=\"marginAutoLR\" *ngIf=\"(detail.element.transactionType == 'CreateCustomForm')\">\n                        <mat-card style=\"width:75vh; height: 30%\">\n                            <mat-card-header>\n                                <mat-card-title>\n                                    <h2>Custom Form with ID = {{detail.element.customFormID}} was created by user {{detail.element.participantInvoking}}\n                                        for trial with ID = {{detail.element.trial}}</h2>\n                                </mat-card-title>\n\n                            </mat-card-header>\n                            <mat-card-content>\n                                <custom-form [idForm]=\"detail.element.customFormID\" [disabled]=\"true\"></custom-form>\n                            </mat-card-content>\n                        </mat-card>\n                    </div>\n                    <div class=\"marginAutoLR\" *ngIf=\"(detail.element.transactionType == 'AddResearcherToTrial') || (detail.element.transactionType == 'RemoveResearcherFromTrial')\">\n                        <mat-card style=\"width:75vh; height: 30%\">\n                            <mat-card-header>\n                                <mat-card-title>\n                                    <h2 *ngIf=\"(detail.element.transactionType == 'AddResearcherToTrial')\">User {{detail.element.participantInvoking}} granted acces to participant Researcher#{{detail.element.researcher}}\n                                        for trial with ID = {{detail.element.trial}}</h2>\n                                    <h2 *ngIf=\"(detail.element.transactionType == 'RemoveResearcherFromTrial')\">User {{detail.element.participantInvoking}} revoked acces to participant Researcher#{{detail.element.researcher}}\n                                        for trial with ID = {{detail.element.trial}}</h2>\n                                </mat-card-title>\n\n                            </mat-card-header>\n                            <mat-card-content>\n                            </mat-card-content>\n                        </mat-card>\n                    </div>\n                    <br/>\n                </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"tableColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: tableColumns;\" matRipple class=\"element-row\" [class.expanded]=\"expandedElement == row\"\n                (click)=\"expand(row)\"></mat-row>\n            <mat-row *matRowDef=\"let row; columns: ['expandedDetail']; when: isExpansionDetailRow\" [@detailExpand]=\"row.element == expandedElement ? 'expanded' : 'collapsed'\"\n                style=\"overflow: hidden\">\n            </mat-row>\n        </mat-table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/agent/table/history-table.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/agent/table/history-table.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  min-width: 300px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 85vh; }\n\n.element-row {\n  position: relative; }\n\n.element-row:not(.expanded) {\n  cursor: pointer; }\n\n.element-row:not(.expanded):hover {\n  background: gray; }\n\n.element-row.expanded {\n  border-bottom-color: transparent; }\n"

/***/ }),

/***/ "./src/app/agent/table/history-table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/agent/table/history-table.component.ts ***!
  \********************************************************/
/*! exports provided: HistoryTable, HistoryDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryTable", function() { return HistoryTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDataSource", function() { return HistoryDataSource; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoryTable = /** @class */ (function () {
    function HistoryTable(_router) {
        this._router = _router;
        this.displayTable = false;
        this.tableColumns = ['TransactionType', 'Date', 'InvokingUserID', 'Trial'];
        this.isExpansionDetailRow = function (i, row) { return row.hasOwnProperty('detailRow'); };
    }
    HistoryTable.prototype.ngOnInit = function () {
        this.historyDataSource = new HistoryDataSource(this.historyData);
        this.displayTable = true;
    };
    HistoryTable.prototype.ngOnChanges = function () {
        this.historyDataSource = new HistoryDataSource(this.historyData);
    };
    HistoryTable.prototype.expand = function (row) {
        if (this.expandedElement && this.expandedElement === row) {
            this.expandedElement = null;
        }
        else {
            this.expandedElement = row;
        }
    };
    HistoryTable.prototype.viewTrial = function (idTrial) {
        this._router.navigateByUrl('/trial/view/' + idTrial);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Array)
    ], HistoryTable.prototype, "historyData", void 0);
    HistoryTable = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'history-table',
            template: __webpack_require__(/*! ./history-table.component.html */ "./src/app/agent/table/history-table.component.html"),
            styles: [__webpack_require__(/*! ./history-table.component.scss */ "./src/app/agent/table/history-table.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', visibility: 'visible' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HistoryTable);
    return HistoryTable;
}());

var HistoryDataSource = /** @class */ (function (_super) {
    __extends(HistoryDataSource, _super);
    function HistoryDataSource(historyEntries) {
        var _this = _super.call(this) || this;
        _this.historyEntries = historyEntries;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    HistoryDataSource.prototype.connect = function () {
        var rows = [];
        this.historyEntries.forEach(function (element) { return rows.push(element, { detailRow: true, element: element }); });
        console.log(rows);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(rows);
    };
    HistoryDataSource.prototype.disconnect = function () { };
    return HistoryDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ })

}]);
//# sourceMappingURL=app-agent-agent-module.js.map