import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient, Person, Gender, BirthDetails, Address, ContactDetails } from '../model/ro.utcluj.clinictrial.base';
import { PatientService } from '../service/patient.service'


@Component({
  selector: 'patient-form',
  templateUrl: 'patient-form.component.html'
})
export class PatientFormComponent implements OnInit{

    //two way binding objects
    patient : Patient = new Patient();
    patientForm : FormGroup;

    //form controls
    firstNameControl;
    lastNameControl;
    placeOfBirthControl;
    pickerControl;
    emailControl;
    phoneControl;
    cityControl;
    countryControl;
    regionControl;
    streetControl;


    constructor(        
      private formBuilder: FormBuilder,
      private _router : Router,
      private _route : ActivatedRoute,
      private _patientService : PatientService
    ){
        this.buildForm();
    }

    buildForm(){
      this.patientForm = this.formBuilder.group({
        firstName: this.formBuilder.
              control(null, [Validators.required, Validators.minLength(2)]),
        lastName: this.formBuilder.
              control(null, [Validators.required, Validators.minLength(2)]),
        placeOfBirth: this.formBuilder.
              control(null, [Validators.required, Validators.minLength(2)]),
        picker: this.formBuilder.
              control(null, [Validators.required]),
        email: this.formBuilder.
              control(null, [Validators.required, Validators.email]),
        phone: this.formBuilder.
              control(null, [Validators.required, Validators.minLength(10),
              Validators.maxLength(10), Validators.pattern('[0-9]{10}')]),
        city: this.formBuilder.
              control(null, [Validators.required, Validators.minLength(2)]),
        country: this.formBuilder.
              control(null, [Validators.required, Validators.minLength(2)]),
        region: this.formBuilder.
              control(null, [Validators.required, Validators.minLength(2)]),
        street: this.formBuilder.
              control(null, [Validators.required, Validators.minLength(2)]),              
      })
      this.firstNameControl = this.patientForm.get('firstName');
      this.lastNameControl = this.patientForm.get('lastName');
      this.placeOfBirthControl = this.patientForm.get('placeOfBirth');
      this.pickerControl = this.patientForm.get('picker');
      this.emailControl = this.patientForm.get('email');
      this.phoneControl = this.patientForm.get('phone');
      this.cityControl = this.patientForm.get('city');
      this.countryControl = this.patientForm.get('country');
      this.regionControl = this.patientForm.get('region');
      this.streetControl = this.patientForm.get('street');
    }

    ngOnInit(){
      this.initBindings();
      
    }

    onSubmit(){
      this.fillObject(this.patientForm.value);
      this.patient.idPatient = this.generatePatientID();
      console.log("Saving object... :");
      console.log(this.patient);
      this._patientService.addAsset(this.patient).
        subscribe(
            //saved succesfully - go back to administration
            (data) => {
              this._router.navigate(['administration'])
            },
            //error - notify user
            (err) => {
              alert("Error while saving. Please try again.")
            }
        );
    }


    generatePatientID() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    fillObject(values){
      this.patient.person.firstName = values.firstName;
      this.patient.person.lastName = values.lastName;
      this.patient.person.contactDetails.email =  values.email;
      this.patient.person.contactDetails.mobilePhone = values.phone;
      this.patient.person.birthDetails.dateOfBirth = values.picker;
      this.patient.person.birthDetails.placeOfBirth = values.placeOfBirth;
      this.patient.person.contactDetails.address.city = values.city;
      this.patient.person.contactDetails.address.country = values.country;
      this.patient.person.contactDetails.address.region = values.region;
      this.patient.person.contactDetails.address.street = values.street;
    }

    initBindings(){
      this.patient.person = new Person();
      this.patient.person.firstName = "";
      this.patient.person.lastName = "";
      this.patient.person.contactDetails = new ContactDetails();
      this.patient.person.contactDetails.email = "";
      this.patient.person.contactDetails.mobilePhone = "";
      this.patient.person.birthDetails = new BirthDetails();
      this.patient.person.birthDetails.placeOfBirth = "";
      this.patient.person.contactDetails.address = new Address();
      this.patient.person.contactDetails.address.city = "";
      this.patient.person.contactDetails.address.country = "";
      this.patient.person.contactDetails.address.region = "";
      this.patient.person.contactDetails.address.street = "";
    }
}
