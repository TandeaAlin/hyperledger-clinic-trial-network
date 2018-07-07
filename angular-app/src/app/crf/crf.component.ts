import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateCustomForm, CustomForm, EntryType } from '../model/ro.utcluj.clinictrial.trial';
import { FormVO } from '../model/ro.utcluj.vo';
import { CustomFormService } from '../service/CustomForm.service';
import { TransactionService } from '../service/transaction-service';
import { IdProviderService } from '../utils/id-provider.service';
import { ResourceProvider } from '../utils/resource-provider';

@Component({
  selector: 'crf-component',
  templateUrl: 'crf.component.html',
  styleUrls: ['./crf.component.css']
})
export class CRFComponent implements OnInit {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;


  dataHeaders = [];
  separatorKeysCodes = [ENTER, COMMA];

  formFields: FormVO[] = [];
  formField: FormVO = new FormVO();
  customForm = new CustomForm();
  createFormTransaction = new CreateCustomForm();

  displayFormField = false;
  displayChoice = false;
  displaySelector = false;
  previewForm = false;

  nameFormGroup;
  fieldNameFormGroup;
  fieldOptionsFormGroup;
  idTrial;

  constructor(
    private _idProvider: IdProviderService,
    private _customFormService: CustomFormService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location,
    private _formBuilder: FormBuilder,
    private _transactionService: TransactionService
  ) {
    var id = this._route.params
      .subscribe(params => {
        var id = params['idTrial'];
        this.idTrial = id;
        console.log("Building form for trial = " + this.idTrial);
      })
  }

  ngOnInit() {
    this.clearFormEntry();
    this.nameFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.fieldNameFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.fieldOptionsFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  formFieldSelect() {
    console.log("form field selected")
    this.displayFormField = true;
    this.formField.entryType = EntryType.FORM_FIELD;
  }

  choiceSelect() {
    console.log("Choice selected")
    this.displayFormField = true;
    this.displayChoice = true;
    this.formField.entryType = EntryType.CHOICE_FIELD;
  }

  selectorSelect() {
    this.displayFormField = true;
    this.displaySelector = true;
    this.formField.entryType = EntryType.SELECTOR_FIELD;
  }

  addField() {
    this.formField.entryOptions = this.dataHeaders;
    this.formField.value = "";
    this.formFields.push(this.formField);
    console.log(this.formField);
    this.clearFormEntry();
    this.hideInputs();
    console.log(this.formFields);
  }
  removeField(formEntry:FormVO){
    var index = this.formFields.indexOf(formEntry);
    this.formFields.splice(index, 1);
  }

  clearFormEntry() {
    this.displayFormField = false;
    this.displayChoice = false;
    this.displaySelector = false;
    this.formField = new FormVO();
    this.formField.entryName = "";
    this.formField.entryOptions = []
    this.dataHeaders = [];
    this.formField.value = "";
  }

  hideInputs() {
    this.displayFormField = false;
    this.displayChoice = false;
    this.displaySelector = false;
  }

  saveForm() {

    var formEntries: any[] = [];
    for (let entry of this.formFields) {
      formEntries.push(entry);
    }

    this.createFormTransaction.formMeta = formEntries;
    this.createFormTransaction.idForm = this._idProvider.generateID();
    this.createFormTransaction.trial = ResourceProvider.newTrialResource(this.idTrial);
    this.createFormTransaction.dateCreated = this.generateTimestamp();
    this.createFormTransaction.name = this.customForm.name;
    console.log(JSON.stringify(this.createFormTransaction));
    this._transactionService.createCustomForm(this.createFormTransaction)
      .subscribe(
        (res) => {
          this._router.navigate([this._router.url]);
        }
      )
  }

  cancelForm() {
    this._router.navigate([this._router.url]);
  }

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;
    console.log(value);
    if ((value || '').trim()) {
      this.dataHeaders.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  remove(header: any): void {
    let index = this.dataHeaders.indexOf(header);
    if (index >= 0) {
      this.dataHeaders.splice(index, 1);
    }
  }

  generateTimestamp() {
    var date = new Date();
    return date.toLocaleDateString();
  }
}
