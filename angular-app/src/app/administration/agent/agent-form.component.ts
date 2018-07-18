import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address, Agent, BirthDetails, ContactDetails, Person } from '../../model/ro.utcluj.clinictrial.base';
import { AgentService } from '../../service/Agent.service';
import { IdProviderService } from '../../utils/id-provider.service';

@Component({
  selector: 'agent-form',
  templateUrl: 'agent-form.component.html'
})
export class AgentFormComponent implements OnInit {

  agent: Agent = new Agent();
  agentForm: FormGroup;
  idAgent;
  title;

  // display the form after the initialisation is done
  isInitialised = false;

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
    private idProvider: IdProviderService,
    private _agentService: AgentService
  ) {
    //check if this is an update operation or a create one
    var id = this._route.params
      .subscribe(params => {
        var id = params['idAgent'];
        this.idAgent = id;
        console.log(id);
        //decide if the user wants to edit an existing agent or add a new one
        this.title = id ? 'Edit agent info' : 'New agent'
        if (!id) {
          //instantiate the agent binding object
          this.initBindings();
          //create the form and it's validators
          this.buildForm();
          this.isInitialised = true;
          return;
        }
        //update an existing agent => fetch it from data service
        this._agentService.getparticipant(id)
          .subscribe(
            (res) => {
              this.agent = res;
              this.buildForm();
              this.isInitialised = true;
              console.log(this.agent)
              console.log(res);
            }
          )

      });
  }

  buildForm() {
    this.agentForm = this.formBuilder.group({
      firstName: this.formBuilder.
        control(this.agent.person.firstName,
          [Validators.required, Validators.minLength(2)]),
      lastName: this.formBuilder.
        control(this.agent.person.lastName,
          [Validators.required, Validators.minLength(2)]),
      placeOfBirth: this.formBuilder.
        control(this.agent.person.birthDetails.placeOfBirth,
          [Validators.required, Validators.minLength(2)]),
      picker: this.formBuilder.
        control(this.agent.person.birthDetails.dateOfBirth,
          [Validators.required]),
      email: this.formBuilder.
        control(this.agent.person.contactDetails.email,
          [Validators.required, Validators.email]),
      phone: this.formBuilder.
        control(this.agent.person.contactDetails.mobilePhone,
          [Validators.required, Validators.minLength(10),
          Validators.maxLength(10), Validators.pattern('[0-9]{10}')]),
      city: this.formBuilder.
        control(this.agent.person.contactDetails.address.city,
          [Validators.required, Validators.minLength(2)]),
      country: this.formBuilder.
        control(this.agent.person.contactDetails.address.country,
          [Validators.required, Validators.minLength(2)]),
      region: this.formBuilder.
        control(this.agent.person.contactDetails.address.region,
          [Validators.required, Validators.minLength(2)]),
      street: this.formBuilder.
        control(this.agent.person.contactDetails.address.street,
          [Validators.required, Validators.minLength(2)]),
    })
    this.firstNameControl = this.agentForm.get('firstName');
    this.lastNameControl = this.agentForm.get('lastName');
    this.placeOfBirthControl = this.agentForm.get('placeOfBirth');
    this.pickerControl = this.agentForm.get('picker');
    this.emailControl = this.agentForm.get('email');
    this.phoneControl = this.agentForm.get('phone');
    this.cityControl = this.agentForm.get('city');
    this.countryControl = this.agentForm.get('country');
    this.regionControl = this.agentForm.get('region');
    this.streetControl = this.agentForm.get('street');
  }

  ngOnInit() {
    this.initBindings();
  }

  onSubmit() {
    this.fillObject(this.agentForm.value);
    console.log("Saving object... :");
    console.log(this.agent);
    var result;
    if (this.idAgent) {
      this.agent.idAgent = null;
      console.log(this.agent);
      let participant = {
        $class: 'ro.utcluj.clinictrial.base.Agent',
        'person': this.agent.person
      };
      result = this._agentService.updateParticipant(this.idAgent, participant);
    } else {
      this.agent.idAgent = this.idProvider.generateID();
      result = this._agentService.addParticipant(this.agent);
    }
    result.subscribe(
      //saved succesfully - go back to administration
      (data) => {
        this._router.navigate(['administration'])
      },
      //error - notify user
      (err) => {
        this._router.navigate(['administration'])
      }
    );
  }


  fillObject(values) {
    this.agent.person.firstName = values.firstName;
    this.agent.person.lastName = values.lastName;
    this.agent.person.contactDetails.email = values.email;
    this.agent.person.contactDetails.mobilePhone = values.phone;
    this.agent.person.birthDetails.dateOfBirth = values.picker;
    this.agent.person.birthDetails.placeOfBirth = values.placeOfBirth;
    this.agent.person.contactDetails.address.city = values.city;
    this.agent.person.contactDetails.address.country = values.country;
    this.agent.person.contactDetails.address.region = values.region;
    this.agent.person.contactDetails.address.street = values.street;
  }

  initBindings() {
    this.agent.person = new Person();
    this.agent.person.firstName = "";
    this.agent.person.lastName = "";
    this.agent.person.contactDetails = new ContactDetails();
    this.agent.person.contactDetails.email = "";
    this.agent.person.contactDetails.mobilePhone = "";
    this.agent.person.birthDetails = new BirthDetails();
    this.agent.person.birthDetails.placeOfBirth = "";
    this.agent.person.contactDetails.address = new Address();
    this.agent.person.contactDetails.address.city = "";
    this.agent.person.contactDetails.address.country = "";
    this.agent.person.contactDetails.address.region = "";
    this.agent.person.contactDetails.address.street = "";
  }
}
