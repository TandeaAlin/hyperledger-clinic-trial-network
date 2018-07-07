import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Researcher } from '../model/ro.utcluj.clinictrial.base';
import 'rxjs/Rx';
import { SystemService } from './system-service';
import { HistorianRecord } from '../model/org.hyperledger.composer.system';

// Can be injected into a constructor
@Injectable()
export class HistorianService {


  private NAMESPACE: string = 'system/historian';




  constructor(
    private dataService: DataService<HistorianRecord>,
    private systemService: SystemService
  ) {
  };

  public getAll(): Observable<HistorianRecord[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }



}
