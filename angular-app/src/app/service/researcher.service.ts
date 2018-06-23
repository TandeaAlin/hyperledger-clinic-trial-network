import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Researcher } from '../model/ro.utcluj.clinictrial.base';
import 'rxjs/Rx';
import { SystemService } from './system-service';

// Can be injected into a constructor
@Injectable()
export class ResearcherService {


  private NAMESPACE: string = 'Researcher';




  constructor(
    private dataService: DataService<Researcher>,
    private systemService: SystemService
  ) {
  };

  public getAll(): Observable<Researcher[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  public getparticipant(id: any): Observable<Researcher> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public getparticipantAdmin(id: any): Observable<Researcher> {
    return this.systemService.getSingle(this.NAMESPACE, id);

  }
  
  public addParticipant(itemToAdd: any): Observable<Researcher> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateParticipant(id: any, itemToUpdate: any): Observable<Researcher> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteParticipant(id: any): Observable<Researcher> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

}
