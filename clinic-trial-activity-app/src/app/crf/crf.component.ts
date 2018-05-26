import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormVO } from '../model/ro.utcluj.vo';
import { FormEntry, CustomForm, EntryType } from '../model/ro.utcluj.clinictrial.trial'
import { IdProviderService } from '../utils/id-provider.service'
import { CustomFormService } from '../service/CustomForm.service'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { TrialVO } from '../model/ro.utcluj.trial.vo'

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

  displayFormField = false;
  displayChoice = false;
  displaySelector = false;
  previewForm = false;

  idTrial;

  constructor(
    private _idProvider: IdProviderService,
    private _customFormService: CustomFormService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location
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
    this.formFields.push(this.formField);
    console.log(this.formField);
    this.clearFormEntry();
    this.hideInputs();
    console.log(this.formFields);
  }

  clearFormEntry() {
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
    this.customForm.formMeta = formEntries;
    this.customForm.idForm = this._idProvider.generateID();
    this.customForm.trial = TrialVO.TRIAL + this.idTrial;
    this.customForm.dateCreated = this.generateTimestamp();
    console.log(JSON.stringify(this.customForm));
    this._customFormService.addAsset(this.customForm)
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
