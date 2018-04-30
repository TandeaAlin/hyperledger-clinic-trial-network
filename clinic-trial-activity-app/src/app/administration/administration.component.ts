import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Patient } from '../model/ro.utcluj.clinictrial.base';
import { ResearchSite, SupplyOrganisation } from '../model/ro.utcluj.clinictrial.organisation';
import { OrganisationVO } from '../model/ro.utcluj.vo';
import { PatientService } from '../service/patient.service';
import { ResearchSiteService } from '../service/research-site.service';
import { SupplyOrganisationService } from '../service/supply-organisation.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'administration-component',
  templateUrl: 'administration.component.html'
})
export class AdministrationComponent implements OnInit{

  private allPatients : Patient[] = [];
  private allOrg : OrganisationVO[] = [];
  private errorMessage;
  navigationSubscription;
  allPatientsDataSource : MatTableDataSource<Patient>;
  allOrganisationsDataSource : MatTableDataSource<OrganisationVO>;
  displayedColumns = ['PatientID', 'Name', 'Gender', 'Birthdate', 'View', 'Edit', 'Delete'];
  organisationColumns = ['OrganisationID','Name','Address'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private _patientService : PatientService,
    private _researchSiteService : ResearchSiteService,
    private _supplyOrganisationService: SupplyOrganisationService,
    private _router : Router,
    private _route : ActivatedRoute,
  ){
    this.navigationSubscription = this._router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.loadAllPatients();
        this.loadAllOrganisations();
        console.log(this.allOrg);
      }
    });
  }

  ngOnInit(){
  }

  ngOnChanges(){

  }

  ngAfterViewInit() {
  //  this.allPatientsDataSource.paginator = this.paginator;
  }

  loadAllOrganisations(){
    this.loadAllReasearchSites();
  }

  loadAllReasearchSites(): Promise<any> {
    return this._researchSiteService.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(participant => {
        let org = new OrganisationVO();
        org.orgID = participant.idResearchSite;
        org.orgName = participant.name;
        org.orgAddress = participant.orgAddress.city + ', ' + participant.orgAddress.street; 
        this.allOrg.push(org);
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

  loadAllPatients() :  Promise<any> {
    return this._patientService.getAll()
      .toPromise()
      .then((result) => {
      this.allPatients = []; 
			this.errorMessage = null;
      console.log(result)
      result.forEach(asset => {
          this.allPatients.push(asset);
      });
      this.allPatientsDataSource = new MatTableDataSource<Patient>(this.allPatients);
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

  deletePatient(patient){
    console.log(patient.idPatient);
    this._patientService.deleteAsset(patient.idPatient)
      .toPromise()
		  .then(() => {
        this.errorMessage = null;
        this._router.navigate(['administration'])		  
      })
		  .catch((error) => {
        if(error == 'Server error'){
				    alert("Could not connect to REST server. Please check your configuration details")
			  }
			  else if(error == '404 - Not Found'){
				  alert("404 - Could not find API route. Please check your available APIs.")
			  }
			  else{
				  alert(error);
			  }
    });
  }


}

