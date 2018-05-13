import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';  
import { QueryService } from './query-service';
import { ProtocolFile } from '../../model/ro.utcluj.clinictrial.trial'
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class FilesQueryService {
    constructor(
        private _queryService : QueryService<ProtocolFile>,
    ){

    }

    public findFileByTrial(trial: string): Observable<ProtocolFile[]>{
        return this._queryService.get("selectFilesByTrial?trial=", trial);
    }
}
