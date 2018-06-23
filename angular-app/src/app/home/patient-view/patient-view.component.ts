import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../model/ro.utcluj.clinictrial.base';
import { PatientService } from '../../service/patient.service';

@Component({
    selector: 'patient-view',
    templateUrl: 'patient-view.component.html'
})
export class PatientViewComponent implements OnInit {
    private idPatient: string;
    private patient: Patient;
    private isInitialised = false;
    constructor(
        private _patientService: PatientService,
        private _router: Router,
        private _route: ActivatedRoute,
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
                            this.isInitialised = true;
                            console.log(this.patient);
                        }
                    )
                }
            })
    }

    ngOnInit() {

    }
}