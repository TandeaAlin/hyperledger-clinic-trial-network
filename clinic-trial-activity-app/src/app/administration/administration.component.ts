import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Patient } from '../model/ro.utcluj.clinictrial.base';
import { PatientService } from '../service/patient.service'


@Component({
  selector: 'administration-component',
  templateUrl: 'administration.component.html'
})
export class AdministrationComponent implements OnInit{

  private allPatients : Patient[] = [];
  private errorMessage;
  allPatientsDataSource : MatTableDataSource<Patient>;
  private displayedColumns = ['PatientID', 'Name', 'Gender', 'Birthdate'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private _patientService : PatientService
  ){}

  ngOnInit(){
    this.loadAllPatients();
  }

  ngAfterViewInit() {
  //  this.allPatientsDataSource.paginator = this.paginator;
  }

  loadAllPatients() :  Promise<any> {
    return this._patientService.getAll()
      .toPromise()
      .then((result) => {
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
}
