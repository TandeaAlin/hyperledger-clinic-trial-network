import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { QueryService } from './query-service';
import { CustomForm } from '../../model/ro.utcluj.clinictrial.trial'
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class FormQueryService {
    constructor(
        private _queryService: QueryService<CustomForm>,
    ) {

    }

    public findCustomFormsByTrial(trial: string): Observable<CustomForm[]> {
        return this._queryService.get("selectCustomFormsByTrial?trial=", trial);
    }
}
