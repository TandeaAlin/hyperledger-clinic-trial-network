import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddFormData, CustomForm, FormValue } from '../../model/ro.utcluj.clinictrial.trial';
import { CustomFormService } from '../../service/CustomForm.service';
import { PatientService } from '../../service/patient.service';
import { TransactionService } from '../../service/transaction-service';
import { IdProviderService } from '../../utils/id-provider.service';
import { ResourceProvider } from '../../utils/resource-provider';
import { FormValueService } from '../../service/FormValue.service';
import { LoaderService } from '../loader/loader.service';

@Component({
    selector: 'custom-form',
    templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit, OnChanges {
    @Input() idPatient: string;
    @Input() idForm: string;
    @Input() disabled: boolean;
    @Input() idFormValue: string;
    customForm: CustomForm;
    isInitialised = false;
    title;
    customFormGroup;
    basicFormControl;

    constructor(
        private _patientService: PatientService,
        private _router: Router,
        private _customFormService: CustomFormService,
        private formBuilder: FormBuilder,
        private _transactionSevice: TransactionService,
        private _idProvider: IdProviderService,
        private _formValueService: FormValueService,
        private _loaderService: LoaderService
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
                this.title = this.customForm.name;
                if (this.disabled) {
                    this.title += ' - Preview Mode';
                    if (this.idFormValue) {
                        this._formValueService.getAsset(this.idFormValue).subscribe(
                            (res: FormValue) => {
                                this.customForm.formMeta = res.formMeta;
                                this.idPatient = res.patient.idPatient;
                            }
                        )
                    }
                }
                this.isInitialised = true;
            }
        )
    }


    viewPatient(idPatient: string){
        this._router.navigateByUrl('/view/'+idPatient);
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
        this._loaderService.show();
        var tx: AddFormData = new AddFormData();
        tx.formMeta = this.customForm.formMeta;
        tx.idFormData = this._idProvider.generateID();
        tx.customForm = ResourceProvider.newCustomFormResource(this.customForm.idForm);
        tx.patient = ResourceProvider.newPatientResource(this.idPatient);
        this._transactionSevice.addFormData(tx)
            .subscribe(
                (res) => {
                    this._router.navigate([this._router.url]);
                },
                (err)=>{
                    this._router.navigate([this._router.url]);
                }

            )

    }

    cancel() {
        this._router.navigate([this._router.url]);
    }

    generateTimestamp() {
        var date = new Date();
        return date.toLocaleDateString();
    }
}