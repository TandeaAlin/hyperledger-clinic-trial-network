import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Patient, Researcher } from '../../model/ro.utcluj.clinictrial.base';
import { PatientService } from '../../service/patient.service';
import { PatientQueryService } from '../../service/queries/patient-query-service'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { OnChanges } from '@angular/core';
import { TrialVO } from '../../model/ro.utcluj.trial.vo';


@Component({
    selector: 'patient-table',
    templateUrl: 'patient-table.component.html'
})
export class PatientTableComponent implements OnInit {
    private errorMessage;
    navigationSubscription;
    allPatients: Patient[] = [];

    @Input() allPatientsDataSource: MatTableDataSource<Patient>;
    @Input() adminMode: boolean;
    @Input() idTrial: string;
    adminDisplayedColumns = ['PatientID', 'Name', 'Gender', 'Birthdate', 'View', 'Edit', 'Delete'];
    userDisplayedColumns = ['PatientID', 'Name', 'Gender', 'Birthdate', 'View'];
    displayedColumns: string[] = [];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(
        private _patientService: PatientService,
        private _router: Router,
        private _route: ActivatedRoute,
    ) {
        this.navigationSubscription = this._router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
                console.log("Loading table patient data....")
                console.log(this.allPatientsDataSource);
            }
        });
    }

    ngOnInit() {
        console.log(this.idTrial)
        if(this.adminMode){
            this.displayedColumns = this.adminDisplayedColumns;
        }else{
            this.displayedColumns = this.userDisplayedColumns;
            if(this.idTrial != null){
                this.displayedColumns.push('Enroll');
            }
        }
    }

    ngOnChanges() {

    }

    ngAfterViewInit() {
        //  this.allPatientsDataSource.paginator = this.paginator;
    }

    enrollPatient(patient: Patient){
        patient.trial = TrialVO.TRIAL + this.idTrial;
        console.log(patient.trial);
        this._patientService.updateAsset(patient.idPatient, patient).subscribe(
            (res) => this._router.navigate([this._router.url])
        )
    }

    deletePatient(patient) {
        console.log(patient.idPatient);
        this._patientService.deleteAsset(patient.idPatient)
            .toPromise()
            .then(() => {
                this.errorMessage = null;
                this._router.navigate(['administration'])
            })
            .catch((error) => {
                if (error == 'Server error') {
                    alert("Could not connect to REST server. Please check your configuration details")
                }
                else if (error == '404 - Not Found') {
                    alert("404 - Could not find API route. Please check your available APIs.")
                }
                else {
                    alert(error);
                }
            });
    }


}

