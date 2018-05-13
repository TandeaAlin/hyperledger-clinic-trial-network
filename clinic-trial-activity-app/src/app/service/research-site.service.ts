import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { ResearchSite } from '../model/ro.utcluj.clinictrial.organisation';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ResearchSiteService {

	
		private NAMESPACE: string = 'ResearchSite';
	



    constructor(private dataService: DataService<ResearchSite>) {
    };

    public getAll(): Observable<ResearchSite[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getparticipant(id: any): Observable<ResearchSite> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addParticipant(itemToAdd: any): Observable<ResearchSite> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateParticipant(id: any, itemToUpdate: any): Observable<ResearchSite> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteParticipant(id: any): Observable<ResearchSite> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
