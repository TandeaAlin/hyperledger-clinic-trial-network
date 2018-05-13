import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { SupplyOrganisation } from '../model/ro.utcluj.clinictrial.organisation';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class SupplyOrganisationService {

	
		private NAMESPACE: string = 'SupplyOrganisation';
	



    constructor(private dataService: DataService<SupplyOrganisation>) {
    };

    public getAll(): Observable<SupplyOrganisation[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getparticipant(id: any): Observable<SupplyOrganisation> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addParticipant(itemToAdd: any): Observable<SupplyOrganisation> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateParticipant(id: any, itemToUpdate: any): Observable<SupplyOrganisation> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteParticipant(id: any): Observable<SupplyOrganisation> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
