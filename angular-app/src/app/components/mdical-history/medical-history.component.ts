import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MedicalRecord, MedicalHistory } from '../../model/ro.utcluj.clinictrial.trial';

@Component({
    selector: 'medical-history',
    templateUrl: 'medical-history.component.html'
})
export class MedicalHistoryComponent implements OnInit {

    @Input() idPatient: string;
    
    medicalRecordsDataSource: MatTableDataSource<MedicalRecord>;
    medicalHistory: MedicalHistory;

    

    ngOnInit(){

    }
}
