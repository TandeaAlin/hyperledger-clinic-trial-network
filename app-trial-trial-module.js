(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-trial-trial-module"],{

/***/ "./node_modules/file-saver/FileSaver.js":
/*!**********************************************!*\
  !*** ./node_modules/file-saver/FileSaver.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") !== null) && (__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return saveAs;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/ReplaySubject.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/ReplaySubject.js ***!
  \*********************************************************/
/*! exports provided: ReplaySubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]; });


//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/app/model/ro.utcluj.trial.vo.ts":
/*!*********************************************!*\
  !*** ./src/app/model/ro.utcluj.trial.vo.ts ***!
  \*********************************************/
/*! exports provided: TrialVO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialVO", function() { return TrialVO; });
var TrialVO = /** @class */ (function () {
    function TrialVO() {
    }
    //defines the name of th research site resource => used to define relationships
    TrialVO.RESEARCH_SITE = "ro.utcluj.clinictrial.organisation.ResearchSite#";
    TrialVO.TRIAL = "ro.utcluj.clinictrial.trial.Trial#";
    TrialVO.TRIAL_QUERY = "ro.utcluj.clinictrial.trial.Trial%23";
    TrialVO.RESOURCE_REF = "resource%3A";
    return TrialVO;
}());



/***/ }),

/***/ "./src/app/service/queries/patient-query-service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/queries/patient-query-service.ts ***!
  \**********************************************************/
/*! exports provided: PatientQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientQueryService", function() { return PatientQueryService; });
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
var PatientQueryService = /** @class */ (function () {
    function PatientQueryService(_queryService) {
        this._queryService = _queryService;
    }
    PatientQueryService.prototype.selectPatientsForTrial = function (idTrial) {
        var trial = _utils_resource_provider__WEBPACK_IMPORTED_MODULE_3__["ResourceProvider"].newTrialQueryResource(idTrial);
        return this._queryService.get("selectPatientsForTrial?trial=", trial);
    };
    PatientQueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_query_service__WEBPACK_IMPORTED_MODULE_1__["QueryService"]])
    ], PatientQueryService);
    return PatientQueryService;
}());



/***/ }),

/***/ "./src/app/trial/new-page/trial-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/trial/new-page/trial-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{title}}</h3>\n<div *ngIf=\"isInitialised\">\n    <form [formGroup]=\"trialForm\" (ngSubmit)=\"onSubmit()\">\n        <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" formControlName=\"name\" placeholder=\"Clinical study name\" [(value)]=\"this.trial.studyName\">\n            <mat-error *ngIf=\"nameControl.errors\n                                  && (nameControl.touched || nameControl.dirty)\">\n                Field is required and must have at least 2 characters</mat-error>\n        </mat-form-field>\n        <table>\n            <td>\n                <input matInput type=\"text\" placeholder=\"Search a research center\" [(value)]=\"searchQuery\">\n            </td>\n            <td>\n                <a mat-button (click)=\"search()\">Search</a>\n            </td>\n        </table>\n        <div *ngIf=\"searchActivate\">\n            <table class=\"highlight\">\n                <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Select</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let res of researchSites\">\n                        <td>\n                            {{res.orgName}}\n                        </td>\n                        <td>\n                            <a mat-button (click)=\"onSelect(res)\">Select</a>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div *ngIf=\"selectionActivate\">\n            <table>\n                <tbody>\n                    <tr>\n                        <td>\n                            <h5>Organisation {{researchSiteSelection.orgName}} selected</h5>\n                        </td>\n                        <td>\n                            <a mat-button (click)=\"onCancel()\">Cancel selection</a>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <!--Submit button-->\n        <div style=\"margin-bottom: 1em\">\n            <button type=\"submit\" class=\"btn btn-success\" \n            [disabled]=\"trialForm.valid\">Save</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/trial/new-page/trial-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/trial/new-page/trial-form.component.ts ***!
  \********************************************************/
/*! exports provided: TrialFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialFormComponent", function() { return TrialFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_ro_utcluj_trial_vo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/ro.utcluj.trial.vo */ "./src/app/model/ro.utcluj.trial.vo.ts");
/* harmony import */ var _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/ro.utcluj.vo */ "./src/app/model/ro.utcluj.vo.ts");
/* harmony import */ var _service_research_site_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/research-site.service */ "./src/app/service/research-site.service.ts");
/* harmony import */ var _service_trial_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/trial.service */ "./src/app/service/trial.service.ts");
/* harmony import */ var _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/id-provider.service */ "./src/app/utils/id-provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TrialFormComponent = /** @class */ (function () {
    function TrialFormComponent(formBuilder, _router, _route, _trialService, _researchSiteService, _idProvider) {
        this.formBuilder = formBuilder;
        this._router = _router;
        this._route = _route;
        this._trialService = _trialService;
        this._researchSiteService = _researchSiteService;
        this._idProvider = _idProvider;
        this.trial = new _model_ro_utcluj_trial_vo__WEBPACK_IMPORTED_MODULE_3__["TrialVO"]();
        this.researchSites = [];
        // display the form after the initialisation is done
        this.isInitialised = false;
        this.searchActivate = false;
        this.selectionActivate = false;
        this.searchQuery = "";
        this.initBindings();
        this.buildForm();
        this.isInitialised = true;
    }
    TrialFormComponent.prototype.buildForm = function () {
        this.trialForm = this.formBuilder.group({
            name: this.formBuilder.
                control(this.trial.studyName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            orgResource: this.formBuilder.
                control(this.trial.organiser, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)])
        });
        this.nameControl = this.trialForm.get('name');
        this.orgResourceControl = this.trialForm.get('orgResource');
    };
    TrialFormComponent.prototype.search = function () {
        var _this = this;
        this._researchSiteService.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (participant) {
                var org = new _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_4__["OrganisationVO"]();
                org.orgID = participant.idResearchSite;
                org.orgName = participant.name;
                org.orgInternalAddress = participant.orgAddress.city + ', ' + participant.orgAddress.street;
                org.orgType = "RESEARCH SITE";
                _this.researchSites.push(org);
            });
            //display the search result
            _this.searchActivate = true;
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
    TrialFormComponent.prototype.onSelect = function (userSelection) {
        this.researchSiteSelection = userSelection;
        //build the string needed by the REST api in order to create a new
        //relationship between two objects
        this.trial.organiser = _model_ro_utcluj_trial_vo__WEBPACK_IMPORTED_MODULE_3__["TrialVO"].RESEARCH_SITE + this.researchSiteSelection.orgID;
        this.searchActivate = false;
        this.selectionActivate = true;
    };
    TrialFormComponent.prototype.onCancel = function () {
        this.researchSites = null;
        this.searchActivate = true;
        this.selectionActivate = false;
    };
    TrialFormComponent.prototype.ngOnInit = function () {
    };
    TrialFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.trialForm.value);
        //fetch values from form
        this.trial.studyName = this.trialForm.value.name;
        //generate a random id
        this.trial.idTrial = this._idProvider.generateID();
        console.log(JSON.stringify(this.trial));
        this._trialService.addAsset(this.trial)
            .subscribe(function (res) {
            _this._router.navigate(["trial"]);
        }, function (err) {
            alert("Could not save asset. Please try again!");
        });
    };
    TrialFormComponent.prototype.initBindings = function () {
        this.trial.studyName = "";
        this.trial.organiser = "";
    };
    TrialFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trial-form-component',
            template: __webpack_require__(/*! ./trial-form.component.html */ "./src/app/trial/new-page/trial-form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_trial_service__WEBPACK_IMPORTED_MODULE_6__["TrialService"],
            _service_research_site_service__WEBPACK_IMPORTED_MODULE_5__["ResearchSiteService"],
            _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_7__["IdProviderService"]])
    ], TrialFormComponent);
    return TrialFormComponent;
}());



/***/ }),

/***/ "./src/app/trial/overview-page/trial-view.component.html":
/*!***************************************************************!*\
  !*** ./src/app/trial/overview-page/trial-view.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab label=\"Overview\">\n        <ng-template matTabContent>\n            <br/>\n            <div class=\"center-div\">\n                <mat-card class=\"description-card\">\n                    <mat-card-header>\n                        <h2>\n                            Clinical study description\n                        </h2>\n                    </mat-card-header>\n                    <mat-card-content>\n                        <div *ngIf=\"!editMode\" style=\"white-space: pre-wrap;\">\n                            {{trial.description}}\n                        </div>\n                        <br/>\n                        <a mat-button (click)=\"editMode =! editMode\" color=\"primary\" *ngIf=\"!editMode\">\n                            <i class=\"material-icons\">edit</i>&nbsp; Edit\n                        </a>\n                        <div *ngIf=\"editMode\">\n                            <mat-form-field class=\"input-field-width\">\n                                <textarea matInput rows=10 style=\"white-space: pre-wrap;\" placeholder=\"Description\" [(ngModel)]=\"trial.description\" ngDefaultControl></textarea>\n                            </mat-form-field>\n                        </div>\n                        <a mat-button (click)=\"onDescriptionChange()\" color=\"primary\" *ngIf=\"editMode\">\n                            Save\n                        </a>\n                        &nbsp;\n                        <a mat-button (click)=\"editMode =! editMode\" color=\"primary\" *ngIf=\"editMode\">\n                            Cancel\n                        </a>\n                    </mat-card-content>\n                </mat-card>\n            </div>\n            <br/>\n            <div class=\"center-div\">\n                <mat-card class=\"description-card\">\n                    <mat-card-header>\n                        <h2>\n                            Latest protocol version\n                        </h2>\n                    </mat-card-header>\n                    <mat-card-content>\n                        testing content\n                    </mat-card-content>\n                </mat-card>\n            </div>\n            <br/>\n            <div class=\"center-div\">\n                <mat-card class=\"description-card\">\n                    <mat-card-header>\n                        <h2>\n                            TODO List\n                        </h2>\n                    </mat-card-header>\n                    <mat-card-content>\n                        testing content\n                    </mat-card-content>\n                </mat-card>\n            </div>\n            <br/>\n        </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Protocol\">\n        <ng-template matTabContent>\n            <div *ngIf=\"uploadCardActivate\">\n                <div class=\"center-div\">\n                    <mat-card class=\"description-card-small\">\n                        <mat-card-header>\n                            <h2>\n                                Upload new protocol...\n                            </h2>\n                        </mat-card-header>\n                        <mat-card-content>\n                            <mat-list>\n                                <table>\n                                    <tr>\n\n                                        <td>\n                                            <h4>Name:</h4>\n                                        </td>\n                                        <td>\n                                            {{fileToUpload.name}}\n                                        </td>\n                                    </tr>\n                                </table>\n                                <mat-divider></mat-divider>\n                                <table>\n                                    <tr>\n\n                                        <td>\n                                            <h4>File size:</h4>\n                                        </td>\n                                        <td>\n                                            {{fileSize}}\n                                        </td>\n                                    </tr>\n                                </table>\n                                <mat-divider></mat-divider>\n                                <mat-list-item>Item 3</mat-list-item>\n                                <mat-divider></mat-divider>\n                                <div class=\"center-div\">\n                                    <mat-list-item>\n                                        <table>\n                                            <tr>\n                                                <td>\n                                                    <button mat-raised-button color color=\"primary\" (click)=\"upload()\">\n                                                        Upload\n                                                    </button>\n                                                </td>\n                                                <td>\n                                                    <button mat-raised-button color color=\"primary\" (click)=\"cancelUpload()\">\n                                                        Cancel\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </mat-list-item>\n                                </div>\n                            </mat-list>\n                        </mat-card-content>\n                    </mat-card>\n                </div>\n            </div>\n            <br/>\n            <div class=\"table-container mat-elevation-z8\">\n                <mat-table #table [dataSource]=\"allFilesDataSource\">\n\n                    <!-- File ID column -->\n                    <ng-container matColumnDef=\"FileID\">\n                        <mat-header-cell *matHeaderCellDef> FileID </mat-header-cell>\n                        <mat-cell *matCellDef=\"let file\"> {{file.fileID}} </mat-cell>\n                    </ng-container>\n\n                    <!-- File version column -->\n                    <ng-container matColumnDef=\"FileVersion\">\n                        <mat-header-cell *matHeaderCellDef> File Version </mat-header-cell>\n                        <mat-cell *matCellDef=\"let file\"> {{file.fileVersion}} </mat-cell>\n                    </ng-container>\n\n                    <!-- File version column -->\n                    <ng-container matColumnDef=\"FileDate\">\n                        <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>\n                        <mat-cell *matCellDef=\"let file\"> {{file.fileTimestamp}} </mat-cell>\n                    </ng-container>\n\n                    <!-- Download link column -->\n                    <ng-container matColumnDef=\"Download\">\n                        <mat-header-cell *matHeaderCellDef> Download </mat-header-cell>\n                        <mat-cell *matCellDef=\"let file\">\n                            <a (click)=\"downloadFile(file)\">\n                                <i class=\"material-icons\">cloud_download</i>\n                            </a>\n                        </mat-cell>\n                    </ng-container>\n\n                    <!-- Delete link column -->\n                    <ng-container matColumnDef=\"Delete\">\n                        <mat-header-cell *matHeaderCellDef> Delete </mat-header-cell>\n                        <mat-cell *matCellDef=\"let file\">\n                            <a (click)=\"deleteFile(file)\">\n                                <i class=\"material-icons\">delete_sweep</i>\n                            </a>\n                        </mat-cell>\n                    </ng-container>\n\n                    <mat-header-row *matHeaderRowDef=\"fileColumns\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: fileColumns;\"></mat-row>\n                </mat-table>\n                <div class=\"floating-button\">\n                    <button mat-fab color=\"primary\" (click)=\"fileInput.click()\">\n                        <mat-icon aria-label=\"Upload a file\">cloud_upload</mat-icon>\n                        <input #fileInput type=\"file\" ngf-select=\"\" ng-model=\"selectedFile\" name=\"file\" ngf-accept=\"'*'\" required=\"\" (change)=\"handleFileInput($event.target.files)\"\n                            style=\"display:none;\">\n                    </button>\n                </div>\n            </div>\n        </ng-template>\n    </mat-tab>\n\n\n\n    <mat-tab label=\"Forms\">\n        <ng-template matTabContent>\n            <br/>\n            <div *ngIf=\"!enableViewForm\">\n                <div *ngIf=\"!formBuilder\">\n                    <mat-table #table [dataSource]=\"allCustomFormsDataSource\">\n                        <!-- Form name column -->\n                        <ng-container matColumnDef=\"FormName\">\n                            <mat-header-cell *matHeaderCellDef> Form Name </mat-header-cell>\n                            <mat-cell *matCellDef=\"let form\"> {{form.name}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Form last modified column -->\n                        <ng-container matColumnDef=\"LastModified\">\n                            <mat-header-cell *matHeaderCellDef> Last Modified </mat-header-cell>\n                            <mat-cell *matCellDef=\"let form\"> {{form.dateCreated}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Edit link column -->\n                        <ng-container matColumnDef=\"Edit\">\n                            <mat-header-cell *matHeaderCellDef> View </mat-header-cell>\n                            <mat-cell *matCellDef=\"let form\">\n                                <a mat-button (click)=\"viewForm(form)\" color=\"primary\">\n                                    <i class=\"material-icons\">pageview</i>\n                                </a>\n                            </mat-cell>\n                        </ng-container>\n\n                        <!-- Delete link column -->\n                        <ng-container matColumnDef=\"Delete\">\n                            <mat-header-cell *matHeaderCellDef> Delete </mat-header-cell>\n                            <mat-cell *matCellDef=\"let form\">\n                                <a (click)=\"deleteForm(form)\">\n                                    <i class=\"material-icons\">delete_sweep</i>\n                                </a>\n                            </mat-cell>\n                        </ng-container>\n\n\n                        <mat-header-row *matHeaderRowDef=\"customFormColumns\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: customFormColumns;\"></mat-row>\n                    </mat-table>\n\n                </div>\n                <div class=\"floating-button\" *ngIf=\"!formBuilder\">\n                    <button mat-fab color=\"primary\" (click)=\" formBuilder = !formBuilder\">\n                        <mat-icon aria-label=\"New Custom Form\">note_add</mat-icon>\n                    </button>\n                </div>\n                <div *ngIf=\"formBuilder\">\n                    <crf-component></crf-component>\n                </div>\n            </div>\n            <div *ngIf=\"enableViewForm\">\n                <custom-form [idForm]=\"selectedForm.idForm\" [disabled] = \"true\"></custom-form>\n            </div>\n        </ng-template>\n    </mat-tab>\n\n    <mat-tab label=\"Patients\">\n\n        <ng-template matTabContent>\n            <br/>\n            <div *ngIf=\"patientSelect\">\n                <patient-page [idTrial]=\"idTrial\"></patient-page>\n            </div>\n            <div *ngIf=\"!patientSelect\">\n                <patient-table [allPatientsDataSource]=\"allPatientsDataSource\" [adminMode]=false [idTrial]=\"trial.idTrial\"></patient-table>\n                <div class=\"floating-button\">\n\n                    <button mat-fab color=\"primary\" (click)=\"patientSelection()\">\n                        <mat-icon aria-label=\"Add\">add</mat-icon>\n                    </button>\n                </div>\n            </div>\n        </ng-template>\n    </mat-tab>\n\n    <mat-tab label=\"Records\">\n        <ng-template matTabContent>\n            <br/>\n            <records-component [idTrial]=\"idTrial\"></records-component>\n        </ng-template>\n    </mat-tab>\n\n    <mat-tab label=\"Users\">\n        <ng-template matTabContent>\n            <br/>\n            <user-manager [idTrial]=\"idTrial\"></user-manager>\n        </ng-template>\n    </mat-tab>\n    <mat-tab label=\"Settings\">\n        <ng-template matTabContent>\n\n        </ng-template>\n    </mat-tab>\n\n\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/trial/overview-page/trial-view.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/trial/overview-page/trial-view.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trial/overview-page/trial-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/trial/overview-page/trial-view.component.ts ***!
  \*************************************************************/
/*! exports provided: TrialViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialViewComponent", function() { return TrialViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_ro_utcluj_clinictrial_trial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/ro.utcluj.clinictrial.trial */ "./src/app/model/ro.utcluj.clinictrial.trial.ts");
/* harmony import */ var _model_ro_utcluj_trial_vo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/ro.utcluj.trial.vo */ "./src/app/model/ro.utcluj.trial.vo.ts");
/* harmony import */ var _service_trial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/trial.service */ "./src/app/service/trial.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/ro.utcluj.vo */ "./src/app/model/ro.utcluj.vo.ts");
/* harmony import */ var _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/id-provider.service */ "./src/app/utils/id-provider.service.ts");
/* harmony import */ var _service_ProtocolFile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/ProtocolFile.service */ "./src/app/service/ProtocolFile.service.ts");
/* harmony import */ var rxjs_ReplaySubject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/ReplaySubject */ "./node_modules/rxjs-compat/_esm5/ReplaySubject.js");
/* harmony import */ var _service_queries_files_query_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/queries/files-query-service */ "./src/app/service/queries/files-query-service.ts");
/* harmony import */ var _service_queries_forms_query_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/queries/forms-query-service */ "./src/app/service/queries/forms-query-service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/loader/loader.service */ "./src/app/components/loader/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var TrialViewComponent = /** @class */ (function () {
    function TrialViewComponent(_trialService, _router, _route, _idProvider, _protocolService, _fileQueryService, _formQueryService, _loaderService) {
        var _this = this;
        this._trialService = _trialService;
        this._router = _router;
        this._route = _route;
        this._idProvider = _idProvider;
        this._protocolService = _protocolService;
        this._fileQueryService = _fileQueryService;
        this._formQueryService = _formQueryService;
        this._loaderService = _loaderService;
        this.trial = new _model_ro_utcluj_clinictrial_trial__WEBPACK_IMPORTED_MODULE_1__["Trial"]();
        this.idTrialLoaded = false;
        this.fileToUpload = null;
        this.uploadCardActivate = false;
        this.protocolFile = new _model_ro_utcluj_vo__WEBPACK_IMPORTED_MODULE_6__["FileVO"]();
        this.formBuilder = false;
        this.patientSelect = false;
        this.editMode = false;
        this.fileColumns = ['FileID', 'FileVersion', 'FileDate', 'Download', 'Delete'];
        this.customFormColumns = ['FormName', 'LastModified', 'Edit', 'Delete'];
        this.patientColumns = ['PatientID', 'Name', 'View', 'Remove'];
        this.enableViewForm = false;
        this.units = [
            'bytes',
            'KB',
            'MB',
            'GB',
            'TB',
            'PB'
        ];
        this._loaderService.show();
        this.navigationSubscription = this._router.events.subscribe(function (e) {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                console.log("loading table data....");
                //reset the tab components
                _this.formBuilder = false;
                _this.patientSelect = false;
                _this.editMode = false;
                _this.uploadCardActivate = false;
                _this.enableViewForm = false;
                _this.loadTableData();
            }
        });
        var id = this._route.params
            .subscribe(function (params) {
            var id = params['idTrial'];
            _this.idTrial = id;
            console.log("Selected trial with ID: " + _this.idTrial);
            if (!id) {
                alert("Something went wrong! Please try again!");
            }
            _this.loadTableData();
            _this.idTrialLoaded = true;
        });
    }
    TrialViewComponent.prototype.loadTableData = function () {
        var _this = this;
        this._trialService.getAsset(this.idTrial)
            .subscribe(function (res) {
            console.log("Received from server: ");
            _this.trial = res;
            _this.allPatientsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.participants);
            console.log(_this.trial);
            _this._loaderService.hide();
        });
        this._fileQueryService.findFileByTrial(this.idTrial)
            .subscribe(function (res) {
            console.log(res);
            _this.allFilesDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res);
        });
        this._formQueryService.findCustomFormsByTrial(this.idTrial)
            .subscribe(function (res) {
            console.log(res);
            _this.allCustomFormsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res);
        });
    };
    TrialViewComponent.prototype.displayFormBuilder = function () {
        this.formBuilder = true;
    };
    TrialViewComponent.prototype.hideFormBuilder = function () {
        this.formBuilder = false;
    };
    TrialViewComponent.prototype.viewForm = function (form) {
        this.selectedForm = form;
        this.enableViewForm = true;
    };
    TrialViewComponent.prototype.hideForm = function () {
        this.selectedForm = null;
        this.enableViewForm = false;
    };
    TrialViewComponent.prototype.patientSelection = function () {
        console.log(this.idTrial);
        this.patientSelect = true;
    };
    TrialViewComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        this.fileToUpload = files.item(0);
        console.log("File selected by user: ");
        console.log(this.fileToUpload);
        //var base64content = text.substr(text.indexOf(',') + 1)
        var obs = this.readFile(this.fileToUpload);
        obs.subscribe(function (res) {
            var fileExtension = _this.getFileExtension(_this.fileToUpload.name);
            var date = new Date();
            var timestamp = date.toLocaleDateString();
            console.log("File extension is: " + fileExtension);
            _this.fileSize = _this.transform(_this.fileToUpload.size);
            console.log("File size is : " + _this.fileSize);
            _this.uploadCardActivate = true;
            _this.protocolFile.fileID = _this._idProvider.generateID();
            _this.protocolFile.fileContent = res.toString().substr(res.toString().indexOf(',') + 1);
            _this.protocolFile.fileType = fileExtension;
            // this.protocolFile.fileVersion = "";
            _this.protocolFile.trial = _model_ro_utcluj_trial_vo__WEBPACK_IMPORTED_MODULE_2__["TrialVO"].TRIAL + _this.idTrial;
            _this.protocolFile.fileTimestamp = _this.generateTimestamp();
        });
    };
    TrialViewComponent.prototype.readFile = function (fileToRead) {
        var base64Observable = new rxjs_ReplaySubject__WEBPACK_IMPORTED_MODULE_9__["ReplaySubject"](1);
        var fileReader = new FileReader();
        fileReader.onloadend = function (event) {
            base64Observable.next(fileReader.result);
        };
        fileReader.readAsDataURL(fileToRead);
        return base64Observable;
    };
    TrialViewComponent.prototype.getFileExtension = function (fileName) {
        return fileName.split('.').pop();
    };
    TrialViewComponent.prototype.cancelUpload = function () {
        this.uploadCardActivate = false;
        this.fileToUpload = null;
    };
    TrialViewComponent.prototype.generateTimestamp = function () {
        var date = new Date();
        return date.toLocaleDateString();
    };
    TrialViewComponent.prototype.upload = function () {
        var _this = this;
        console.log("Uploading ...");
        console.log(JSON.stringify(this.protocolFile));
        this._protocolService.addAsset(this.protocolFile).subscribe(function (res) {
            _this._router.navigate([_this._router.url]);
        });
    };
    TrialViewComponent.prototype.downloadFile = function (file) {
        var bin = atob(file.fileContent);
        var byteNumbers = new Array(bin.length);
        for (var i = 0; i < bin.length; i++) {
            byteNumbers[i] = bin.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var blob = new Blob([byteArray], { type: 'application/pdf' });
        file_saver__WEBPACK_IMPORTED_MODULE_12__["saveAs"](blob, this.trial.studyName + '_' + file.fileTimestamp);
    };
    TrialViewComponent.prototype.ngOnInit = function () {
    };
    TrialViewComponent.prototype.transform = function (bytes, precision) {
        if (bytes === void 0) { bytes = 0; }
        if (precision === void 0) { precision = 2; }
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes))
            return '?';
        var unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    };
    TrialViewComponent.prototype.onDescriptionChange = function () {
        var _this = this;
        var id = this.trial.idTrial;
        this.trial.idTrial = "";
        this._trialService.getAssetUnresolved(id).subscribe(function (res) {
            res.description = _this.trial.description;
            console.log(res);
            _this._trialService.updateAsset(res.idTrial, res).subscribe(function (result) {
                _this._router.navigate([_this._router.url]);
            }, function (err) {
                _this._router.navigate([_this._router.url]);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@.disabled'),
        __metadata("design:type", Object)
    ], TrialViewComponent.prototype, "navigationSubscription", void 0);
    TrialViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trial-view-component',
            template: __webpack_require__(/*! ./trial-view.component.html */ "./src/app/trial/overview-page/trial-view.component.html"),
            styles: [__webpack_require__(/*! ./trial-view.component.scss */ "./src/app/trial/overview-page/trial-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_trial_service__WEBPACK_IMPORTED_MODULE_3__["TrialService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_7__["IdProviderService"],
            _service_ProtocolFile_service__WEBPACK_IMPORTED_MODULE_8__["ProtocolFileService"],
            _service_queries_files_query_service__WEBPACK_IMPORTED_MODULE_10__["FilesQueryService"],
            _service_queries_forms_query_service__WEBPACK_IMPORTED_MODULE_11__["FormQueryService"],
            _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_13__["LoaderService"]])
    ], TrialViewComponent);
    return TrialViewComponent;
}());



/***/ }),

/***/ "./src/app/trial/trial.component.html":
/*!********************************************!*\
  !*** ./src/app/trial/trial.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"center-div\">\n    <mat-card class=\"description-card\">\n      <mat-card-header>\n        <h2 class=\"marginAutoLR\">My trials</h2>\n      </mat-card-header>\n    </mat-card>\n\n\n</div>\n\n<br/>\n<div class=\"floating-button\">\n  <a mat-fab routerLink=\"new\" color=\"primary\">\n    <mat-icon aria-label=\"New Custom Form\">add</mat-icon>\n  </a>\n</div>\n<div class=\"table-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"allTrialsDataSource\">\n\n    <!-- Trial ID column -->\n    <ng-container matColumnDef=\"StudyID\">\n      <mat-header-cell *matHeaderCellDef> StudyID </mat-header-cell>\n      <mat-cell *matCellDef=\"let trial\"> {{trial.idTrial}} </mat-cell>\n    </ng-container>\n\n    <!-- Name column -->\n    <ng-container matColumnDef=\"Name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let trial\"> {{trial.studyName}} </mat-cell>\n    </ng-container>\n\n    <!-- Institute column -->\n    <ng-container matColumnDef=\"Institute\">\n      <mat-header-cell *matHeaderCellDef> Institute </mat-header-cell>\n      <mat-cell *matCellDef=\"let trial\"> {{trial.organiser.name}}</mat-cell>\n    </ng-container>\n\n    <!-- Birthdate column -->\n    <ng-container matColumnDef=\"Status\">\n      <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\n      <mat-cell *matCellDef=\"let trial\"> {{trial.status}}</mat-cell>\n    </ng-container>\n\n    <!-- View link column -->\n    <ng-container matColumnDef=\"Access\">\n      <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n      <mat-cell *matCellDef=\"let trial\">\n        <a mat-button [routerLink]=\"['/trial/view',trial.idTrial]\" color=\"primary\">\n          <i class=\"material-icons\">pageview</i>\n        </a>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"trialColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: trialColumns;\"></mat-row>\n\n  </mat-table>\n</div>"

/***/ }),

/***/ "./src/app/trial/trial.component.scss":
/*!********************************************!*\
  !*** ./src/app/trial/trial.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".component-page-header {\n  display: flex;\n  align-items: center; }\n  @media (max-width: 720px) {\n    .component-page-header {\n      padding-left: 0; } }\n  h1 {\n  outline: none; }\n  @media (max-width: 720px) {\n    h1 {\n      padding: 24px 8px;\n      font-size: 20px; } }\n"

/***/ }),

/***/ "./src/app/trial/trial.component.ts":
/*!******************************************!*\
  !*** ./src/app/trial/trial.component.ts ***!
  \******************************************/
/*! exports provided: TrialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialComponent", function() { return TrialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_trial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/trial.service */ "./src/app/service/trial.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loader/loader.service */ "./src/app/components/loader/loader.service.ts");
/* harmony import */ var _service_historian_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/historian.service */ "./src/app/service/historian.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrialComponent = /** @class */ (function () {
    function TrialComponent(_trialService, _loaderService, _historianService) {
        this._trialService = _trialService;
        this._loaderService = _loaderService;
        this._historianService = _historianService;
        this.trials = [];
        this.trialColumns = ['StudyID', 'Name', 'Institute', 'Status', 'Access'];
        _loaderService.show();
    }
    TrialComponent.prototype.ngOnInit = function () {
        this.loadAll();
        console.log(this.trials);
    };
    TrialComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        this._historianService.getAll().subscribe(function (res) {
            console.log(res);
        });
        this._trialService.getAll().subscribe(function (result) {
            _this.errorMessage = null;
            result.forEach(function (asset) {
                console.log(asset);
                tempList.push(asset);
            });
            _this.trials = tempList;
            _this.allTrialsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.trials);
            _this._loaderService.hide();
        }, function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
            alert(_this.errorMessage);
            _this._loaderService.hide();
        });
    };
    TrialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trial-component',
            template: __webpack_require__(/*! ./trial.component.html */ "./src/app/trial/trial.component.html"),
            styles: [__webpack_require__(/*! ./trial.component.scss */ "./src/app/trial/trial.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_trial_service__WEBPACK_IMPORTED_MODULE_1__["TrialService"],
            _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _service_historian_service__WEBPACK_IMPORTED_MODULE_4__["HistorianService"]])
    ], TrialComponent);
    return TrialComponent;
}());



/***/ }),

/***/ "./src/app/trial/trial.module.ts":
/*!***************************************!*\
  !*** ./src/app/trial/trial.module.ts ***!
  \***************************************/
/*! exports provided: TrialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialModule", function() { return TrialModule; });
/* harmony import */ var _trial_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trial.component */ "./src/app/trial/trial.component.ts");
/* harmony import */ var _overview_page_trial_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview-page/trial-view.component */ "./src/app/trial/overview-page/trial-view.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _trial_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trial.routing */ "./src/app/trial/trial.routing.ts");
/* harmony import */ var _service_trial_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/trial.service */ "./src/app/service/trial.service.ts");
/* harmony import */ var _service_research_site_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/research-site.service */ "./src/app/service/research-site.service.ts");
/* harmony import */ var _trial_new_page_trial_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../trial/new-page/trial-form.component */ "./src/app/trial/new-page/trial-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/id-provider.service */ "./src/app/utils/id-provider.service.ts");
/* harmony import */ var _crf_crf_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../crf/crf.module */ "./src/app/crf/crf.module.ts");
/* harmony import */ var _service_queries_patient_query_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/queries/patient-query-service */ "./src/app/service/queries/patient-query-service.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/component.module */ "./src/app/components/component.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var TrialModule = /** @class */ (function () {
    function TrialModule() {
    }
    TrialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
                _trial_routing__WEBPACK_IMPORTED_MODULE_5__["TrialRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _crf_crf_module__WEBPACK_IMPORTED_MODULE_11__["CRFModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_13__["ComponentModule"]
            ],
            providers: [
                _service_trial_service__WEBPACK_IMPORTED_MODULE_6__["TrialService"],
                _service_research_site_service__WEBPACK_IMPORTED_MODULE_7__["ResearchSiteService"],
                _utils_id_provider_service__WEBPACK_IMPORTED_MODULE_10__["IdProviderService"],
                _service_queries_patient_query_service__WEBPACK_IMPORTED_MODULE_12__["PatientQueryService"]
            ],
            declarations: [
                _trial_component__WEBPACK_IMPORTED_MODULE_0__["TrialComponent"],
                _trial_new_page_trial_form_component__WEBPACK_IMPORTED_MODULE_8__["TrialFormComponent"],
                _overview_page_trial_view_component__WEBPACK_IMPORTED_MODULE_1__["TrialViewComponent"],
            ]
        })
    ], TrialModule);
    return TrialModule;
}());



/***/ }),

/***/ "./src/app/trial/trial.routing.ts":
/*!****************************************!*\
  !*** ./src/app/trial/trial.routing.ts ***!
  \****************************************/
/*! exports provided: TrialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialRoutingModule", function() { return TrialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trial.component */ "./src/app/trial/trial.component.ts");
/* harmony import */ var _new_page_trial_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-page/trial-form.component */ "./src/app/trial/new-page/trial-form.component.ts");
/* harmony import */ var _overview_page_trial_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overview-page/trial-view.component */ "./src/app/trial/overview-page/trial-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _trial_component__WEBPACK_IMPORTED_MODULE_2__["TrialComponent"] },
    { path: 'new', component: _new_page_trial_form_component__WEBPACK_IMPORTED_MODULE_3__["TrialFormComponent"] },
    { path: 'view/:idTrial', component: _overview_page_trial_view_component__WEBPACK_IMPORTED_MODULE_4__["TrialViewComponent"] },
];
var TrialRoutingModule = /** @class */ (function () {
    function TrialRoutingModule() {
    }
    TrialRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TrialRoutingModule);
    return TrialRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-trial-trial-module.js.map