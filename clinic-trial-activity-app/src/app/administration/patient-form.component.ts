import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Patient, Person, Gender, BirthDetails, Address, ContactDetails } from '../model/ro.utcluj.clinictrial.base';

@Component({
  selector: 'patient-form',
  templateUrl: 'patient-form.component.html'
})
export class PatientFormComponent implements OnInit{

    //two way binding objects
    patient : Patient = new Patient();
    person : Person = new Person();
    contactDetails : ContactDetails = new ContactDetails();
    birthDetails : BirthDetails = new BirthDetails();
    address : Address = new Address();

    email = new FormControl('', [Validators.required, Validators.email]);



    ngOnInit(){
      this.initBindings();
    }

    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
             this.email.hasError('email') ? 'Not a valid email' :
             '';
    }

    onSubmit(){
      this.contactDetails.address = this.address;
      this.person.contactDetails = this.contactDetails;
      this.person.birthDetails = this.birthDetails;
      this.patient.person = this.person;
      this.patient.idPatient = this.generatePatientID();
      console.log(this.patient);
    }


    generatePatientID() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    initBindings(){
      this.person.firstName = "";
      this.person.lastName = "";
      this.contactDetails.email = "";
      this.contactDetails.mobilePhone = "";
      this.birthDetails.placeOfBirth = "";
      this.address.city = "";
      this.address.country = "";
      this.address.region = "";
      this.address.street = "";
    }
}
