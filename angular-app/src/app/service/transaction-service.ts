/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { AddResearcherToTrial } from '../model/transaction';
import { EnrolPatientTransaction } from '../model/transaction';
import { RegisterTrialTransaction } from '../model/transaction';
import { RemoveResearcherFromTrial } from '../model/transaction';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class TransactionService {

    private ADD_RESEARCHER_TO_TRIAL = 'AddResearcherToTrial';
    private ENROL_PATIENT_TRANSACTION = 'EnrolPatientTransaction'
    private REGISTER_TRIAL_TRANSACTION = 'RegisterTrialTransaction';
    private REMOVE_RESEARCHER_FROM_TRIAL = 'RemoveResearcherFromTrial';

    constructor(private dataService: DataService<any>) {
    };

    public addResearcherToTrial(tx: any): Observable<AddResearcherToTrial> {
        return this.dataService.add(this.ADD_RESEARCHER_TO_TRIAL, tx);
    }

    public enrolPatientTransaction(tx: any): Observable<EnrolPatientTransaction> {
        return this.dataService.add(this.ENROL_PATIENT_TRANSACTION, tx);
    }

    public registerTrialTransaction(tx: any): Observable<RegisterTrialTransaction> {
        return this.dataService.add(this.REGISTER_TRIAL_TRANSACTION, tx);
    }

    public removeResearcherFromTrial(tx: any): Observable<RemoveResearcherFromTrial> {
        return this.dataService.add(this.REMOVE_RESEARCHER_FROM_TRIAL, tx);
    }
}

