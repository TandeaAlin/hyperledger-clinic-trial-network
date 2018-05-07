import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResearchSite, SupplyOrganisation, Organisation } from '../../model/ro.utcluj.clinictrial.organisation';
import { OrganisationVO } from '../../model/ro.utcluj.vo';
import { ResearchSiteService } from '../../service/research-site.service';
import { SupplyOrganisationService } from '../../service/supply-organisation.service';
import { Address } from '../../model/ro.utcluj.clinictrial.base';

@Component({
    selector: 'organisation-form',
    templateUrl: 'organisation-form.component.html'
  })
  export class OrganisationFormComponent implements OnInit{
    
    researchSite : ResearchSite = new ResearchSite();
    supplyOrg : SupplyOrganisation = new SupplyOrganisation();
    internalVO : OrganisationVO = new OrganisationVO();
    organisationForm : FormGroup;
    idOrg;
    title;

    // display the form after the initialisation is done
    isInitialised = false;

    //formControls
    nameControl;
    cityControl;
    countryControl;
    regionControl;
    streetControl;
    orgTypeControl;

    constructor(
      private formBuilder: FormBuilder,
      private _router : Router,
      private _route : ActivatedRoute,
      private _researchSiteService : ResearchSiteService,
      private _supplyOrganisationService: SupplyOrganisationService,
    ){
      //check if this is an update operation or a create one
      var id = this._route.params
      .subscribe(params =>{
          var id = params['idOrg'];
          this.idOrg = id;
          console.log(id);
          //decide if the user wants to edit an existing patient or add a new one
          this.title = id ? 'Edit patient info' : 'New patient'
          if(!id){
            //instantiate the patient binding object
            this.initBindings();
            //create the form and validators
            this.buildForm(); 
            this.isInitialised = true;
            console.log("Org form initialised")
            return;
          }
          //fetch organisation from data service
          this._researchSiteService.getparticipant(id)
              .subscribe(
                  (res) =>{    
                      this.researchSite = res;
                      this.fillVO(this.researchSite);
                      this.internalVO.orgType = "RESEARCH";
                      this.buildForm();
                      this.isInitialised = true;
                      console.log(this.researchSite)
                      console.log(res);
                  }) ;
          this._supplyOrganisationService.getparticipant(id)
              .subscribe(
                  (res) =>{     
                      this.supplyOrg = res;
                      this.fillVO(this.supplyOrg);
                      this.internalVO.orgType = "SUPPLIER";
                      this.buildForm();
                      this.isInitialised = true;
                      console.log(this.supplyOrg)
                      console.log(res);
                  }
              )     
      });
    }

    ngOnInit(){

    }

    onSubmit(){
      var type = this.organisationForm.value.orgType;
      this.fillObject(this.organisationForm.value, this.organisationForm.value.orgType);
      var result;
      if(type == "SUPPLIER"){
        if(this.idOrg){
          result = this._supplyOrganisationService
                  .updateParticipant(this.idOrg, this.supplyOrg);
        }else{
          this.supplyOrg.idSupplyOrganisation = this.generateID();
          result = this._supplyOrganisationService
                  .addParticipant(this.supplyOrg);
        }
      }else if(type == "RESEARCH"){
        if(this.idOrg){
          result = this._researchSiteService
                  .updateParticipant(this.idOrg, this.researchSite);
        }else{
          this.researchSite.idResearchSite = this.generateID();
          result = this._researchSiteService
                  .addParticipant(this.researchSite);
        }
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

    //generate a random id for new patients
    generateID() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    fillVO(org){
      this.internalVO.orgName = org.name;
        this.internalVO.city = org.orgAddress.city;
        this.internalVO.country = org.orgAddress.country;
        this.internalVO.region = org.orgAddress.region;
        this.internalVO.street =  org.orgAddress.street;
    }

    fillObject(org, orgType){
      if(orgType == "SUPPLIER"){
        this.supplyOrg.name = org.orgName;
        this.supplyOrg.orgAddress.city = org.city;
        this.supplyOrg.orgAddress.country = org.country;
        this.supplyOrg.orgAddress.region = org.region;
        this.supplyOrg.orgAddress.street = org.street;
        console.log("building supplier");
        console.log(this.supplyOrg);
      }else{
        this.researchSite.idResearchSite = this.generateID();
        this.researchSite.name = org.orgName;
        this.researchSite.orgAddress.city = org.city;
        this.researchSite.orgAddress.country = org.country;
        this.researchSite.orgAddress.region = org.region;
        this.researchSite.orgAddress.street = org.street;
        console.log("building research site");
        console.log(this.researchSite)
      }
      
    }

    buildForm(){
      this.organisationForm = this.formBuilder.group({
        orgName: this.formBuilder.
              control(this.internalVO.orgName, 
                [Validators.required, Validators.minLength(2)]),
        orgType: this.formBuilder.
              control(this.internalVO.orgType, 
                [Validators.required]),
        city: this.formBuilder.
              control(this.internalVO.city, 
                [Validators.required, Validators.minLength(2)]),
        country: this.formBuilder.
              control(this.internalVO.country, 
                [Validators.required, Validators.minLength(2)]),
        region: this.formBuilder.
              control(this.internalVO.region, 
                [Validators.required, Validators.minLength(2)]),
        street: this.formBuilder.
              control(this.internalVO.street, 
                [Validators.required, Validators.minLength(2)]),
      })
      this.nameControl = this.organisationForm.get('orgName');
      this.orgTypeControl = this.organisationForm.get('orgType');
      this.cityControl = this.organisationForm.get('city');
      this.countryControl = this.organisationForm.get('country');
      this.regionControl = this.organisationForm.get('region');
      this.streetControl = this.organisationForm.get('street');
  }

    initBindings(){
      this.internalVO.orgName = "";
      this.internalVO.orgType = "";
      this.internalVO.city = "";
      this.internalVO.country = "";
      this.internalVO.locality = "";
      this.internalVO.postalCode = "";
      this.internalVO.region = "";
      this.internalVO.street = "";
      this.researchSite.orgAddress = new Address();
      this.supplyOrg.orgAddress = new Address();
    }
  }