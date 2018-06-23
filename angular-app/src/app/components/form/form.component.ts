import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Patient } from '../../model/ro.utcluj.clinictrial.base';
import { CustomForm, FormValue, FormEntry, AddFormData } from '../../model/ro.utcluj.clinictrial.trial';
import { CustomFormService } from '../../service/CustomForm.service';
import { PatientService } from '../../service/patient.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ResourceProvider } from '../../utils/resource-provider';
import { IdProviderService } from '../../utils/id-provider.service';
import { ResourceLoader } from '@angular/compiler';
import { TransactionService } from '../../service/transaction-service';

@Component({
    selector: 'custom-form',
    templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit, OnChanges {
    @Input() idPatient: string;
    @Input() idForm: string;
    customForm: CustomForm;
    isInitialised = false;

    customFormGroup;
    basicFormControl;

    constructor(
        private _patientService: PatientService,
        private _router: Router,
        private _customFormService: CustomFormService,
        private formBuilder: FormBuilder,
        private _transactionSevice: TransactionService,
        private _idProvider: IdProviderService
    ) {

    }

    ngOnChanges() {
    }
    ngOnInit() {
        console.log('Patient : ' + this.idPatient);
        console.log('Form : ' + this.idForm);
        this._customFormService.getAsset(this.idForm).subscribe(
            (res) => {
                this.customForm = res;
                this.buildForm();
                this.isInitialised = true;
            }
        )
    }



    buildForm() {
        this.customFormGroup = this.formBuilder.group({
            basicFormControl: this.formBuilder.
                control("",
                    [Validators.required]),
        })
        this.basicFormControl = this.customFormGroup.get('basicFormControl');
    }

    save() {
        var tx: AddFormData = new AddFormData();
        tx.formMeta = this.customForm.formMeta;
        tx.idFormData = this._idProvider.generateID();
        tx.customForm = ResourceProvider.newCustomFormResource(this.customForm.idForm);
        tx.patient = ResourceProvider.newPatientResource(this.idPatient);
        this._transactionSevice.addFormData(tx)
            .subscribe(
                (res) => {
                    this._router.navigate([this._router.url]);
                }
            )
     
    }

    generateTimestamp() {
        var date = new Date();
        return date.toLocaleDateString();
    }
}