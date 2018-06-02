import { Component, OnInit } from '@angular/core';
import { TrialVO } from '../../model/ro.utcluj.trial.vo';
import { TrialService } from '../../service/trial.service'
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResearchSiteService } from '../../service/research-site.service';
import { OrganisationVO } from '../../model/ro.utcluj.vo'
import { IdProviderService } from '../../utils/id-provider.service';

@Component({
    selector: 'trial-form-component',
    templateUrl: 'trial-form.component.html'
})
export class TrialFormComponent implements OnInit {
    trial: TrialVO = new TrialVO();
    researchSites: OrganisationVO[] = [];
    researchSiteSelection: OrganisationVO;

    // display the form after the initialisation is done
    isInitialised = false;
    searchActivate = false;
    selectionActivate = false;

    errorMessage;
    searchQuery = "";

    //formControls
    nameControl;
    orgResourceControl;

    //trialForm
    trialForm: FormGroup;


    constructor(
        private formBuilder: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _trialService: TrialService,
        private _researchSiteService: ResearchSiteService,
        private _idProvider: IdProviderService
    ) {
        this.initBindings();
        this.buildForm();
        this.isInitialised = true;
    }

    buildForm() {
        this.trialForm = this.formBuilder.group({
            name: this.formBuilder.
                control(this.trial.studyName,
                    [Validators.required, Validators.minLength(2)]),
            orgResource: this.formBuilder.
                control(this.trial.organiser,
                    [Validators.required, Validators.minLength(2)])
        })
        this.nameControl = this.trialForm.get('name');
        this.orgResourceControl = this.trialForm.get('orgResource');
    }

    search() {
        this._researchSiteService.getAll()
            .toPromise()
            .then((result) => {
                this.errorMessage = null;
                result.forEach(participant => {
                    let org = new OrganisationVO();
                    org.orgID = participant.idResearchSite;
                    org.orgName = participant.name;
                    org.orgInternalAddress = participant.orgAddress.city + ', ' + participant.orgAddress.street;
                    org.orgType = "RESEARCH SITE";
                    this.researchSites.push(org);
                });
                //display the search result
                this.searchActivate = true;
            })
            .catch((error) => {
                if (error == 'Server error') {
                    this.errorMessage = "Could not connect to REST server. Please check your configuration details";
                }
                else if (error == '404 - Not Found') {
                    this.errorMessage = "404 - Could not find API route. Please check your available APIs."
                }
                else {
                    this.errorMessage = error;
                }
            });
    }

    onSelect(userSelection) {
        this.researchSiteSelection = userSelection;
        //build the string needed by the REST api in order to create a new
        //relationship between two objects
        this.trial.organiser = TrialVO.RESEARCH_SITE + this.researchSiteSelection.orgID;
        this.searchActivate = false;
        this.selectionActivate = true;

    }

    onCancel() {
        this.researchSites = null;
        this.searchActivate = true;
        this.selectionActivate = false;
    }

    ngOnInit() {

    }

    onSubmit() {
        console.log(this.trialForm.value)
        //fetch values from form
        this.trial.studyName = this.trialForm.value.name;
        //generate a random id
        this.trial.idTrial = this._idProvider.generateID();
        console.log(JSON.stringify(this.trial))
        this._trialService.addAsset(this.trial)
            .subscribe(
                (res) => {
                    this._router.navigate(["trial"]);
                },
                (err) => {
                    alert("Could not save asset. Please try again!");
                }
            )
    }

    initBindings() {
        this.trial.studyName = "";
        this.trial.organiser = "";
    }
}