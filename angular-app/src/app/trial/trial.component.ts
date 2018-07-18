import { Component, OnInit } from '@angular/core';
import { Trial } from '../model/ro.utcluj.clinictrial.trial'
import { TrialService } from '../service/trial.service'
import { ResearchSiteService } from '../service/research-site.service'
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { LoaderService } from '../components/loader/loader.service';
import { HistorianService } from '../service/historian.service';

@Component({
    selector: 'trial-component',
    templateUrl: 'trial.component.html',
    styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {
    trials: Trial[] = [];
    errorMessage;
    trialColumns = ['StudyID', 'Name', 'Institute', 'Status', 'Access'];
    allTrialsDataSource: MatTableDataSource<Trial>;
    constructor(
        private _trialService: TrialService,
        private _loaderService: LoaderService
    ) {
    }

    ngOnInit() {
        this._loaderService.show(); 
        this.loadAll();
        console.log(this.trials);
    }

    loadAll() {
        let tempList = [];
        this._trialService.getAll().subscribe(
            (result) => {
                this.errorMessage = null;
                result.forEach(asset => {
                    console.log(asset)
                    tempList.push(asset);
                });
                this.trials = tempList;
                this._loaderService.hide();
                this.allTrialsDataSource = new MatTableDataSource(this.trials);
                
            },

            (error) => {
                if (error == 'Server error') {
                    this.errorMessage = "Could not connect to REST server. Please check your configuration details";
                }
                else if (error == '404 - Not Found') {
                    this.errorMessage = "404 - Could not find API route. Please check your available APIs."
                }
                else {
                    this.errorMessage = error;
                }
                alert(this.errorMessage);
                this._loaderService.hide();
            }
        )
    }

}