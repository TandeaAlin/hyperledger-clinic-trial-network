import { Component, Input, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Patient } from '../../model/ro.utcluj.clinictrial.base';
import { EnrolPatientTransaction } from '../../model/transaction';
import { PatientService } from '../../service/patient.service';
import { TransactionService } from '../../service/transaction-service';
import { ResourceProvider } from '../../utils/resource-provider';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormQueryService } from '../../service/queries/forms-query-service';
import { Utils } from '../../utils/utils';
import { LoaderService } from '../loader/loader.service';

@Component({
    selector: 'patient-table',
    templateUrl: 'patient-table.component.html'
})
export class PatientTableComponent implements OnInit {
    private errorMessage;
    navigationSubscription;
    allPatients: Patient[] = [];
    enrolPatientTransaction: EnrolPatientTransaction;
    forms: any[] = [];
    formSelection;
    patientSelection;

    displayTable = true;
    displayForm = false;

    @Input() allPatientsDataSource: MatTableDataSource<Patient>;
    @Input() adminMode: boolean;
    @Input() idTrial: string;
    @Input() enrol: boolean;
    adminDisplayedColumns = ['PatientID', 'Name', 'Gender', 'Birthdate', 'Actions'];
    userDisplayedColumns = ['PatientID', 'Name', 'Gender', 'Birthdate', 'Actions'];
    displayedColumns: string[] = [];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(
        private _patientService: PatientService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _transactionService: TransactionService,
        private dialog: MatDialog,
        private _formQueryService: FormQueryService,
        private _loaderService: LoaderService
    ) {
        this.navigationSubscription = this._router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
                console.log("Loading table patient data....")
                console.log(this.allPatientsDataSource);
                this.displayTable = true;
                this.displayForm = false;
            }
        });
    }

    ngOnInit() {
        console.log(this.idTrial)
        this._formQueryService.findCustomFormsByTrial(this.idTrial)
            .subscribe(
                (res) => {
                    this.forms = res;
                }
            )
        if (this.adminMode) {
            this.displayedColumns = this.adminDisplayedColumns;
        } else {
            this.displayedColumns = this.userDisplayedColumns;
            if (this.enrol) {
                this.displayedColumns.push('Enroll');
            }
        }
    }

    formatDate(date) {
        return Utils.formatDate(date);
    }

    ngOnChanges() {

    }

    ngAfterViewInit() {
        //  this.allPatientsDataSource.paginator = this.paginator;
    }

    enrollPatient(patient: Patient) {
        if (confirm("Are you sure you want to enrol patient with ID = " + patient.idPatient + " into trial with ID = " + this.idTrial + " ?")) {
            this._loaderService.show();
            this.enrolPatientTransaction = new EnrolPatientTransaction();
            this.enrolPatientTransaction.patient = ResourceProvider.newPatientResource(patient.idPatient);
            this.enrolPatientTransaction.trial = ResourceProvider.newTrialResource(this.idTrial);
            this._transactionService.enrolPatientTransaction(this.enrolPatientTransaction).subscribe(
                (res) => this._router.navigate([this._router.url]),
                (err) => this._router.navigate([this._router.url])
            )
        }
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

    openFormSelection(patient): void {
        console.log('Opening dialog')
        console.log(this.forms);
        let dialogRef = this.dialog.open(CustomFormSelectDialog, {
            width: '25%',
            data: { forms: this.forms }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            this.formSelection = result;
            this.patientSelection = patient.idPatient;
            this.onFormSelect();
        });

    }

    onFormSelect() {
        if (this.formSelection) {
            this.displayForm = true;
            this.displayTable = false;
        }
    }
}

@Component({
    selector: 'custom-from-select-dialog',
    templateUrl: 'custom-from-select-dialog.html',
})
export class CustomFormSelectDialog {

    constructor(
        public dialogRef: MatDialogRef<CustomFormSelectDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        console.log(data.forms);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}

