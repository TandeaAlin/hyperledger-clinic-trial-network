import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Patient } from '../../model/ro.utcluj.clinictrial.base';
import { PatientService } from '../../service/patient.service';

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