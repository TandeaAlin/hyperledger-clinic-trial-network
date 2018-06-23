import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { CustomForm } from '../../model/ro.utcluj.clinictrial.trial';
import { ResourceProvider } from '../../utils/resource-provider';
import { QueryService } from './query-service';
import { FormValue } from '../../model/ro.utcluj.clinictrial.trial';

// Can be injected into a constructor
@Injectable()
export class FormValueQueryService {
    constructor(
        private _queryService: QueryService<FormValue>,
    ) {

    }


    public findDataForCustomForm(idForm: string): Observable<FormValue[]> {
        var customForm = ResourceProvider.newCustomFormQueryResource(idForm);
        return this._queryService.get("selectDataForCustomForm?customForm=", customForm);
    }
}
