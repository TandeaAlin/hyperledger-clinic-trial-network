import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomFormService } from '../../service/CustomForm.service';
import { PatientService } from '../../service/patient.service';
import { FormQueryService } from '../../service/queries/forms-query-service';
import { CustomForm, FormValue } from '../../model/ro.utcluj.clinictrial.trial';
import { MatTableDataSource } from '@angular/material';
import { FormValueQueryService } from '../../service/queries/form-value-query-service';

@Component({
    selector: 'records-component',
    templateUrl: 'records.component.html'
})
export class RecordsComponent implements OnInit, OnChanges {
    @Input() idTrial: string;
    @Input() idFormExternal: string;

    private NONE: string = "None";
    private idForm;
    private customForm;
    private customForms: CustomForm[] = [];
    private isInitialised = false;
    private displayTable = false;
    private selectedForm = this.NONE;
    private records: FormValue[] = [];
    private recordsDataSource: MatTableDataSource<FormValue>;

    private tableColumns = [];
    private dataColumns = [];

    constructor(
        private _patientService: PatientService,
        private _customFormService: CustomFormService,
        private _router: Router,
        private _formQueryService: FormQueryService,
        private _formValueQueryService: FormValueQueryService
    ) {

    }

    onSelect() {
        console.log("Display records for : " + this.selectedForm)
        this.tableColumns = [];
        this.dataColumns = [];
        if (this.selectedForm == this.NONE) {
            alert("Please select the data to display!")
            return;
        } else {
            this._formValueQueryService.findDataForCustomForm(this.selectedForm).subscribe(
                (res: FormValue[]) => {
                    console.log(res);
                    this.tableColumns.push("PatientID");
                    this.tableColumns.push("Date");
                    this.tableColumns.push("Time");
                    if (res.length > 0) {
                        var value = res[0];
                        for (let meta of value.formMeta) {
                            this.tableColumns.push(meta.entryName);
                            this.dataColumns.push(meta.entryName);
                        }
                    } else {
                        alert("No data to display");
                        return;
                    }
                    this.recordsDataSource = new MatTableDataSource<FormValue>(res);
                    this.displayTable = true;
                }


            )
        }
    }

    ngOnChanges() {
        console.log(this.idTrial)
    }

    ngOnInit() {
        if (this.idFormExternal) {
            this.idForm = this.idFormExternal;
            this.onSelect();
        } else {
            this._formQueryService.findCustomFormsByTrial(this.idTrial).subscribe(
                (res) => {
                    this.customForms = res;
                    console.log(res);
                    this.isInitialised = true;
                    this.displayTable = false;
                }
            )
        }

    }

    getCustomForm(idForm) {
        this._customFormService.getAsset(this.idForm).subscribe(
            (res) => {
                this.customForm = res;
            }
        )
    }



    cancel() {
        this._router.navigate([this._router.url]);
    }

}