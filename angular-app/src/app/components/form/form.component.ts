import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Patient } from '../../model/ro.utcluj.clinictrial.base';
import { CustomForm, FormValue, FormEntry } from '../../model/ro.utcluj.clinictrial.trial';
import { CustomFormService } from '../../service/CustomForm.service';
import { PatientService } from '../../service/patient.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
        private formBuilder: FormBuilder
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
        var value: FormValue = new FormValue();
        var entries: string[] = []
        for (let meta of this.customForm.formMeta) {
            entries.push(meta.value);
            meta.value = "";
        }
        value.data = entries;
        console.log(this.customForm);
        this.customForm.formValues.push(value);
        this._customFormService.updateAsset(this.customForm.idForm, this.customForm).subscribe(
            (res) => {
                this._router.navigate([this._router.url])
            }
        )
    }
}