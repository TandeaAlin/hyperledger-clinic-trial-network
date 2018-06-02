import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Trial } from '../model/ro.utcluj.clinictrial.trial';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class TrialService {

	
		private NAMESPACE: string = 'Trial';
	



    constructor(private dataService: DataService<Trial>) {
    };

    public getAll(): Observable<Trial[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Trial> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Trial> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Trial> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Trial> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
