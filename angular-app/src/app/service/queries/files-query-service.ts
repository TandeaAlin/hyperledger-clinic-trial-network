import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';  
import { QueryService } from './query-service';
import { ProtocolFile } from '../../model/ro.utcluj.clinictrial.trial'
import 'rxjs/Rx';
import { ResourceProvider } from '../../utils/resource-provider';

// Can be injected into a constructor
@Injectable()
export class FilesQueryService {
    constructor(
        private _queryService : QueryService<ProtocolFile>,
    ){

    }

    public findFileByTrial(idTrial: string): Observable<ProtocolFile[]>{
        var trial = ResourceProvider.newTrialQueryResource(idTrial);
        return this._queryService.get("selectFilesByTrial?trial=", trial);
    }
}
