import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { QueryService } from './query-service';
import { Patient } from '../../model/ro.utcluj.clinictrial.base'
import 'rxjs/Rx';
import { ResourceProvider } from '../../utils/resource-provider';

// Can be injected into a constructor
@Injectable()
export class PatientQueryService {
    constructor(
        private _queryService: QueryService<Patient>,
    ) {

    }

    public selectPatientsForTrial(idTrial: string): Observable<Patient[]> {
        var trial = ResourceProvider.newTrialQueryResource(idTrial);
        return this._queryService.get("selectPatientsForTrial?trial=", trial);
    }
}
