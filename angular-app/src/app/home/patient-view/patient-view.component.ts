import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../model/ro.utcluj.clinictrial.base';
import { PatientService } from '../../service/patient.service';
import { FormValueQueryService } from '../../service/queries/form-value-query-service';
import { FormValue } from '../../model/ro.utcluj.clinictrial.trial';

@Component({
    selector: 'patient-view',
    templateUrl: 'patient-view.component.html'
})
export class PatientViewComponent implements OnInit {

    @Input() idTrial: string;

    private idPatient: string;
    private patient: Patient;
    private isInitialised = false;
    private formattedBirthdate: Date;
    private age;
    private formValues: FormValue[] = [];
    constructor(
        private _patientService: PatientService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _dataQueryService: FormValueQueryService
    ) {
        var id = this._route.params
            .subscribe(params => {
                var id = params['idPatient'];
                this.idPatient = id;
                console.log(id);
                //decide if the user wants to edit an existing patient or add a new one
                if (!id) {
                    alert("Patient not found!")
                    return;
                } else {
                    this._patientService.getAsset(this.idPatient).subscribe(
                        (res) => {
                            this.patient = res;
                            this.formattedBirthdate = new Date(this.patient.person.birthDetails.dateOfBirth);
                            console.log(this.formattedBirthdate);
                            this.age = this.getAge(this.formattedBirthdate);
                            this._dataQueryService.selectDataForPatient(this.patient.idPatient).subscribe(
                                (values)=>{
                                    console.log(values);
                                    this.formValues = values;
                                }
                            )
                            
                            this.isInitialised = true;
                            console.log(this.patient);

                        }
                    )


                }
            })
    }

    ngOnInit() {

    }

    getAge(birthday) {
        return ~~((Date.now() - birthday) / (31557600000));
    }
}