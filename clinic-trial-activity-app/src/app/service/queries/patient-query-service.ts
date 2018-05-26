import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { QueryService } from './query-service';
import { Patient } from '../../model/ro.utcluj.clinictrial.base'
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class PatientQueryService {
    constructor(
        private _queryService: QueryService<Patient>,
    ) {

    }

    public selectPatientsForTrial(trial: string): Observable<Patient[]> {
        return this._queryService.get("selectPatientsForTrial?trial=", trial);
    }
}
