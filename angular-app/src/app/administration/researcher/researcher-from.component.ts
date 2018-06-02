import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Researcher, Person, Address, ContactDetails, BirthDetails } from '../../model/ro.utcluj.clinictrial.base'
import { ResearcherService } from '../../service/researcher.service'
import { ResearchSiteService } from '../../service/research-site.service';
import { IdProviderService } from '../../utils/id-provider.service';

@Component({
    selector: 'researcher-form',
    templateUrl: 'researcher-form.component.html'
})
export class ResearcherFormComponent implements OnInit {

    researcher: Researcher = new Researcher();
    
    researcherForm: FormGroup;
    idResearcher;

    //title for the displayed form
    title;

    // display the form after the initialisation is done
    isInitialised = false;

    //form view controls
    searchActivate = false;
    selectionActivate = false;
    searchQuery = ""
    searchResult = [];

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
        private _router: Router,
        private _route: ActivatedRoute,
        private _researcherService: ResearcherService,
        private _researchSiteService : ResearchSiteService,
        private _idProvider : IdProviderService
    ) {
        //check if this is an update operation or a create one
        var id = this._route.params
            .subscribe(params => {
                var id = params['idResearcher'];
                this.idResearcher = id;
                console.log(id);
                //decide if the user wants to edit an existing researcher or add a new one
                this.title = id ? 'Edit researcher info' : 'New researcher'
                if (!id) {
                    //instantiate the researcher binding object
                    this.initBindings();
                    //create the form and it's validators
                    this.buildForm(); 
                    this.isInitialised = true;
                    return;
                }
                //update an existing researcher => fetch it from data service
                this._researcherService.getparticipant(id)
                    .subscribe(
                        (res) => {
                            this.researcher = res;
                            this.buildForm();
                            this.isInitialised = true;
                            console.log(this.researcher)
                            console.log(res);
                        }
                    )

            });
    }

    ngOnInit() {
        this.searchActivate = false;
    }

    search(){
        this._researchSiteService.getAll().toPromise()
            .then(
                (res) => {
                    this.searchResult = []; 
                    console.log(res)
                    res.forEach(part => {
                        this.searchResult.push(part);
                    });
                    this.searchActivate = true;
                (err)=>{
                    alert("Something went wrong while searching. Please try again!")
                }    
            })
    }

    onSelect(res){
        this.researcher.employer = res;
        this.searchActivate = false;
        this.selectionActivate = true;
    }

    onCancel(){
        this.researcher.employer = null;
        this.searchActivate = true;
        this.selectionActivate = false;
    }

    onSubmit(){
        this.fillObject(this.researcherForm.value);
        console.log("Saving object... :");
        console.log(this.researcher);
        var result;
        if (this.idResearcher){
        result = this._researcherService.updateParticipant(this.idResearcher, this.researcher);
        } else {
        this.researcher.idResearcher = this._idProvider.generateID();
        console.log(JSON.stringify(this.researcher));
        result = this._researcherService.addParticipant(this.researcher);
      }    
      result.subscribe(
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

    fillObject(values){
      this.researcher.person.firstName = values.firstName;
      this.researcher.person.lastName = values.lastName;
      this.researcher.person.contactDetails.email =  values.email;
      this.researcher.person.contactDetails.mobilePhone = values.phone;
      this.researcher.person.birthDetails.dateOfBirth = values.picker;
      this.researcher.person.birthDetails.placeOfBirth = values.placeOfBirth;
      this.researcher.person.contactDetails.address.city = values.city;
      this.researcher.person.contactDetails.address.country = values.country;
      this.researcher.person.contactDetails.address.region = values.region;
      this.researcher.person.contactDetails.address.street = values.street;
    }

    buildForm(){
        this.researcherForm = this.formBuilder.group({
          firstName: this.formBuilder.
                control(this.researcher.person.firstName, 
                  [Validators.required, Validators.minLength(2)]),
          lastName: this.formBuilder.
                control(this.researcher.person.lastName, 
                  [Validators.required, Validators.minLength(2)]),
          placeOfBirth: this.formBuilder.
                control(this.researcher.person.birthDetails.placeOfBirth, 
                  [Validators.required, Validators.minLength(2)]),
          picker: this.formBuilder.
                control(this.researcher.person.birthDetails.dateOfBirth,
                  [Validators.required]),
          email: this.formBuilder.
                control(this.researcher.person.contactDetails.email, 
                  [Validators.required, Validators.email]),
          phone: this.formBuilder.
                control(this.researcher.person.contactDetails.mobilePhone, 
                  [Validators.required, Validators.minLength(10),
                  Validators.maxLength(10), Validators.pattern('[0-9]{10}')]),
          city: this.formBuilder.
                control(this.researcher.person.contactDetails.address.city, 
                  [Validators.required, Validators.minLength(2)]),
          country: this.formBuilder.
                control(this.researcher.person.contactDetails.address.country, 
                  [Validators.required, Validators.minLength(2)]),
          region: this.formBuilder.
                control(this.researcher.person.contactDetails.address.region, 
                  [Validators.required, Validators.minLength(2)]),
          street: this.formBuilder.
                control(this.researcher.person.contactDetails.address.street, 
                  [Validators.required, Validators.minLength(2)]),              
        })
        this.firstNameControl = this.researcherForm.get('firstName');
        this.lastNameControl = this.researcherForm.get('lastName');
        this.placeOfBirthControl = this.researcherForm.get('placeOfBirth');
        this.pickerControl = this.researcherForm.get('picker');
        this.emailControl = this.researcherForm.get('email');
        this.phoneControl = this.researcherForm.get('phone');
        this.cityControl = this.researcherForm.get('city');
        this.countryControl = this.researcherForm.get('country');
        this.regionControl = this.researcherForm.get('region');
        this.streetControl = this.researcherForm.get('street');
      }

    initBindings(){
        this.researcher.person = new Person();
        this.researcher.person.firstName = "";
        this.researcher.person.lastName = "";
        this.researcher.person.contactDetails = new ContactDetails();
        this.researcher.person.contactDetails.email = "";
        this.researcher.person.contactDetails.mobilePhone = "";
        this.researcher.person.birthDetails = new BirthDetails();
        this.researcher.person.birthDetails.placeOfBirth = "";
        this.researcher.person.contactDetails.address = new Address();
        this.researcher.person.contactDetails.address.city = "";
        this.researcher.person.contactDetails.address.country = "";
        this.researcher.person.contactDetails.address.region = "";
        this.researcher.person.contactDetails.address.street = "";
      }
}  