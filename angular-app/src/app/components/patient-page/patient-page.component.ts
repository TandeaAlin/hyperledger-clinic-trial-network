import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Patient } from '../../model/ro.utcluj.clinictrial.base';
import { PatientService } from '../../service/patient.service';
import { TrialService } from '../../service/trial.service';

@Component({
    selector: 'patient-page',
    templateUrl: 'patient-page.component.html'
})
export class PatientPageComponent implements OnInit, OnChanges {
    @Input() idTrial: string;

    allPatients: Patient[] = [];
    trialPatients: Patient[] = [];

    allPatientsDataSource: MatTableDataSource<Patient>;
    searchQuery = "";

    constructor(
        private _patientService: PatientService,
        private _router: Router,
        private _trialService: TrialService
    ) {

    }

    ngOnChanges() {
        this.ngOnInit();

    }
    ngOnInit() {
        this._trialService.getAsset(this.idTrial).subscribe(
            (res) => {
                console.log(res);
                if (res.participants) {
                    this.trialPatients = res.participants;
                }
            }
        )
    }

    cancel() {
        this._router.navigate([this._router.url]);
    }

    search() {
        console.log("Searching for ... " + this.searchQuery);
        this._patientService.getAll()
            .subscribe(
                (res) => {
                    let filteredPatients = res.filter(
                        (patient) => {
                            return !this.trialPatients.some(
                                (participant) => {
                                    return (patient.idPatient == participant.idPatient);
                                }
                            )
                        }
                    )
                    if (this.searchQuery.trim() == "") {
                        this.allPatientsDataSource = new MatTableDataSource<Patient>(filteredPatients);
                    } else {
                        filteredPatients = filteredPatients.filter(
                            (patient) => {
                                let name = patient.person.firstName + patient.person.lastName;
                                return name.toLowerCase().trim().includes(this.searchQuery.toLowerCase().trim())
                            }
                        )
                        this.allPatientsDataSource = new MatTableDataSource<Patient>(filteredPatients);
                    }
                },
                (err) => {
                    alert("Something went wrong while searching! Please try again");
                }
            )
    }

}