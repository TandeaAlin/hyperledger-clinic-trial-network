import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TrialVO } from '../../model/ro.utcluj.trial.vo';
import { Patient } from '../../model/ro.utcluj.clinictrial.base'
import { TrialService } from '../../service/trial.service'
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResearchSiteService } from '../../service/research-site.service';
import { IdProviderService } from '../../utils/id-provider.service';
import { PatientService } from '../../service/patient.service'

@Component({
    selector: 'patient-page',
    templateUrl: 'patient-page.component.html'
})
export class PatientPageComponent implements OnInit, OnChanges {
    @Input() idTrial: string;

    allPatients: Patient[] = [];

    allPatientsDataSource: MatTableDataSource<Patient>;
    searchQuery = "";

    constructor(
        private _patientService: PatientService,
        private _router: Router
    ) {

    }

    ngOnChanges() {
        console.log(this.idTrial)
    }
    ngOnInit() {

    }

    cancel() {
        this._router.navigate([this._router.url]);
    }

    search() {
        console.log("Searching for ... " + this.searchQuery);
        if (this.searchQuery == "") {
            this._patientService.getAll()
                .subscribe(
                    (res) => {
                        this.allPatientsDataSource = new MatTableDataSource<Patient>(res);
                    },
                    (err) => {
                        alert("Something went wrong while searching! Please try again");
                    }
                )
        }
    }
}