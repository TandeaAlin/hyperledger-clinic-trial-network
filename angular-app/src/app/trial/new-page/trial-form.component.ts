import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrialVO } from '../../model/ro.utcluj.trial.vo';
import { OrganisationVO } from '../../model/ro.utcluj.vo';
import { ResearchSiteService } from '../../service/research-site.service';
import { TrialService } from '../../service/trial.service';
import { IdProviderService } from '../../utils/id-provider.service';
import { RegisterTrialTransaction } from '../../model/ro.utcluj.clinictrial.trial';
import { AuthService } from '../../service/auth.service';
import { ResourceProvider } from '../../utils/resource-provider';
import { TransactionService } from '../../service/transaction-service';
import { SupplyOrganisationService } from '../../service/supply-organisation.service';
import { SupplyOrganisation } from '../../model/ro.utcluj.clinictrial.organisation';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
    selector: 'trial-form-component',
    templateUrl: 'trial-form.component.html'
})
export class TrialFormComponent implements OnInit {
    trial: TrialVO = new TrialVO();
    researchSites: OrganisationVO[] = [];
    researchSiteSelection: OrganisationVO;

    sponsors: OrganisationVO[] = [];
    selectedSponsors: OrganisationVO[] = [];

    filteredOptions: Observable<OrganisationVO[]>;

    // display the form after the initialisation is done
    isInitialised = false;
    searchActivate = false;
    selectionActivate = false;

    errorMessage;
    searchQuery = "";

    //formControls
    nameControl;
    descriptionControl;
    orgResourceControl;

    myControl = new FormControl();

    //trialForm
    trialForm: FormGroup;


    constructor(
        private formBuilder: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _trialService: TrialService,
        private _researchSiteService: ResearchSiteService,
        private _idProvider: IdProviderService,
        private _authService: AuthService,
        private _transactionService: TransactionService,
        private _sponsorService: SupplyOrganisationService
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
                    [Validators.required, Validators.minLength(2)]),
            description: this.formBuilder.
                control(this.trial.description,
                    [Validators.required, Validators.minLength(2)])
        })
        this.nameControl = this.trialForm.get('name');
        this.orgResourceControl = this.trialForm.get('orgResource');
        this.descriptionControl = this.trialForm.get('description');
    }

    search(searchQuery) {
        this._researchSiteService.getAll()
            .subscribe((result) => {
                this.errorMessage = null;
                result.forEach(participant => {
                    let org = new OrganisationVO();
                    org.orgID = participant.idResearchSite;
                    org.orgName = participant.name;
                    org.orgType = "RESEARCH SITE";
                    this.researchSites.push(org);
                });
                console.log(this.researchSites)
                this.researchSites = this.researchSites.filter(
                    (res) => {
                        return res.orgName.toLowerCase().includes(this.searchQuery.toLowerCase());
                    }
                )
                this.searchActivate = true;
            })
    }

    searchSupplier() {

    }
    private _filter(value: string): OrganisationVO[] {
        const filterValue = value.toLowerCase();

        return this.sponsors.filter(option => option.orgName.toLowerCase().indexOf(filterValue) === 0);
    }

    displayFn(org?: OrganisationVO): string | undefined {
        return org ? org.orgName : undefined;
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
        this.researchSites = [];
        this.searchActivate = false;
        this.selectionActivate = false;
    }

    ngOnInit() {
        this._sponsorService.getAll().subscribe(
            (res) => {
                res.forEach(participant => {
                    let org = new OrganisationVO();
                    org.orgID = participant.idSupplyOrganisation;
                    org.orgName = participant.name;
                    org.orgType = "RESEARCH SITE";
                    this.sponsors.push(org);
                });
                this.filteredOptions = this.myControl.valueChanges
                    .pipe(
                        startWith<string | OrganisationVO>(''),
                        map(value => typeof value === 'string' ? value : value.orgName),
                        map(name => name ? this._filter(name) : this.sponsors.slice())
                    );
            }
        )
    }

    addSponsor(){
        this.selectedSponsors.push(this.myControl.value);
        console.log(this.myControl.value)
        console.log(this.selectedSponsors)
    }
    removeSponsor(sponsor){
        this.selectedSponsors.slice(this.selectedSponsors.indexOf(sponsor), 1);
    }

    onSubmit() {
        console.log(this.trialForm.value)
        let tx = new RegisterTrialTransaction()
        tx.organiser = this.trial.organiser
        tx.idTrial = this._idProvider.generateID();
        tx.studyName = this.trialForm.value.name;
        tx.organiser = this.trial.organiser;
        tx.responsibles = [];
        tx.responsibles.push(ResourceProvider.newResearcherResource(this._authService.getUID()));
        tx.sponsors = [];
        for(let sponsor of this.selectedSponsors){
            tx.sponsors.push(ResourceProvider.newSponsorResource(sponsor.orgID))
        }
        console.log(JSON.stringify(tx))
        this._transactionService.registerTrialTransaction(tx).subscribe(
            (res) => {
                this._router.navigate(["trial"]);
            },
            (err) => {
                alert("Transaction failed! Please check the input data and try again.");
            }
        )
    }

    initBindings() {
        this.trial.studyName = "";
        this.trial.organiser = "";
        this.trial.description = "";
    }
}