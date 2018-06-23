import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Patient, Researcher } from '../model/ro.utcluj.clinictrial.base';
import { OrganisationVO } from '../model/ro.utcluj.vo';
import { PatientService } from '../service/patient.service';
import { ResearchSiteService } from '../service/research-site.service';
import { ResearcherService } from '../service/researcher.service';
import { SupplyOrganisationService } from '../service/supply-organisation.service';

@Component({
  selector: 'administration-component',
  templateUrl: 'administration.component.html'
})
export class AdministrationComponent implements OnInit {
  //disable some annoying animations
  @HostBinding('@.disabled')
  private allPatients: Patient[] = [];
  private allOrg: OrganisationVO[] = [];
  private allResearchers: Researcher[] = [];
  private errorMessage;
  navigationSubscription;
  allPatientsDataSource: MatTableDataSource<Patient>;
  allOrganisationsDataSource: MatTableDataSource<OrganisationVO>;
  allResearchersDataSource: MatTableDataSource<Researcher>;
  displayedColumns = ['PatientID', 'Name', 'Gender', 'Birthdate', 'View', 'Edit', 'Delete'];
  organisationColumns = ['OrganisationID', 'Name', 'Address', 'Type', 'Actions'];
  researcherColumns = ['ResearcherID', 'Name', 'Gender', 'Birthdate', 'Action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private _patientService: PatientService,
    private _researchSiteService: ResearchSiteService,
    private _supplyOrganisationService: SupplyOrganisationService,
    private _researcerService: ResearcherService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.navigationSubscription = this._router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        console.log("loading table data....")
        this.loadAllPatients();
        this.loadAllOrganisations();
        this.loadAllResearchers();
        console.log(this.allOrg);
      }
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  ngAfterViewInit() {
    //  this.allPatientsDataSource.paginator = this.paginator;
  }

  loadAllResearchers() {
    return this._researcerService.getAll()
      .toPromise()
      .then((result) => {
        this.allResearchers = [];
        this.errorMessage = null;
        console.log(result)
        result.forEach(participant => {
          this.allResearchers.push(participant);
        });
        this.allResearchersDataSource = new MatTableDataSource<Researcher>(this.allResearchers);
      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if (error == '404 - Not Found') {
          this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else {
          this.errorMessage = error;
        }
      });
  }

  loadAllOrganisations() {
    this.allOrg = [];
    this.loadAllReasearchSites();

  }

  loadAllSupplyOrgs() {
    return this._supplyOrganisationService.getAll()
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        result.forEach(participant => {
          let org = new OrganisationVO();
          org.orgID = participant.idSupplyOrganisation;
          org.orgName = participant.name;
          if (participant.orgAddress) {
            org.orgInternalAddress = participant.orgAddress.city + ', ' + participant.orgAddress.street;
          }
          org.orgType = "SUPPLIER";
          this.allOrg.push(org);
        });
        // build the table data source
        this.allOrganisationsDataSource = new MatTableDataSource<OrganisationVO>(this.allOrg);
      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if (error == '404 - Not Found') {
          this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else {
          this.errorMessage = error;
        }
      });
  }

  loadAllReasearchSites(): Promise<any> {
    return this._researchSiteService.getAll()
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        for (let participant of result) {
          let org = new OrganisationVO();
          org.orgID = participant.idResearchSite;
          org.orgName = participant.name;
          if (participant.orgAddress) {
            org.orgInternalAddress = participant.orgAddress.city + ', ' + participant.orgAddress.street;
          }
          org.orgType = "RESEARCH SITE";
          this.allOrg.push(org);
        }
        //load suppliers after all research sites have been added
        this.loadAllSupplyOrgs();

        this.allOrganisationsDataSource = new MatTableDataSource<OrganisationVO>(this.allOrg);
      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if (error == '404 - Not Found') {
          this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else {
          this.errorMessage = error;
        }
      });
  }

  loadAllPatients(): Promise<any> {
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
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if (error == '404 - Not Found') {
          this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else {
          this.errorMessage = error;
        }
      });
  }

  deletePatient(patient) {
    console.log(patient.idPatient);
    this._patientService.deleteAsset(patient.idPatient)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
        this._router.navigate(['administration'])
      })
      .catch((error) => {
        if (error == 'Server error') {
          alert("Could not connect to REST server. Please check your configuration details")
        }
        else if (error == '404 - Not Found') {
          alert("404 - Could not find API route. Please check your available APIs.")
        }
        else {
          alert(error);
        }
      });
  }


}

