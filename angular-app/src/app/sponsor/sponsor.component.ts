import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HistorianRecord } from '../model/org.hyperledger.composer.system';
import { Trial } from '../model/ro.utcluj.clinictrial.trial';
import { HistorianService } from '../service/historian.service';
import { TrialService } from '../service/trial.service';

@Component({
    selector: 'sponsor',
    templateUrl: 'sponsor.component.html'
})
export class SponsorComponent implements OnInit {

    myControl = new FormControl();

    private isInitialised = false;
    private allHistory: HistorianRecord[] = [];
    private allProcessedHistory: HistorianVO[] = [];
    private filteredHistory: HistorianVO[] = [];
    private trials: Trial[] = [];
    private historyDataSource: MatTableDataSource<HistorianVO>;
    private trialInput = "";
    filteredOptions: Observable<Trial[]>;
    private trialFilteredHistory: HistorianVO[] = [];

    selectedTransaction = 'None';
    transactionTypes = [
        'CreateCustomForm',
        'AddResearcherToTrial',
        'RemoveResearcherFromTrial'
    ]

    constructor(
        private _historianService: HistorianService,
        private _trialService: TrialService
    ) {
        this.isInitialised = false;
    }

    ngOnInit() {
        this.loadHistorian();

    }

    private _filter(value: string): Trial[] {
        const filterValue = value.toLowerCase();

        return this.trials.filter(option => option.studyName.toLowerCase().indexOf(filterValue) === 0);
    }


    loadHistorian() {
        this._historianService.getAll().subscribe(
            (res) => {
                console.log(res);
                this.allHistory = res;
                this.processHistorian(this.allHistory);
            }
        )
        this._trialService.getAll().subscribe(
            (res) => {
                this.trials = res;
                this.filteredOptions = this.myControl.valueChanges
                    .pipe(
                        startWith<string | Trial>(''),
                        map(value => typeof value === 'string' ? value : value.studyName),
                        map(name => name ? this._filter(name) : this.trials.slice())
                    );
            }
        )
    }

    displayFn(trial?: Trial): string | undefined {
        return trial ? trial.studyName : undefined;
    }

    processHistorian(historian: HistorianRecord[]) {
        for (let entry of historian) {
            let target = new HistorianVO();
            switch (entry.transactionType) {
                case 'ro.utcluj.clinictrial.trial.CreateCustomForm': {
                    target.transactionType = 'CreateCustomForm';
                    target.transactionTimestamp = entry.transactionTimestamp.toLocaleString().replace('T', ' ').replace('Z', ' ').split('.')[0];
                    target.participantInvoking = this.getParticipant(entry.participantInvoking);
                    target.trial = entry.eventsEmitted[0].trial.idTrial;
                    target.eventsEmitted = entry.eventsEmitted;
                    target.customFormID = entry.eventsEmitted[0].form.idForm;
                    this.allProcessedHistory.push(target);
                } break;

                case 'ro.utcluj.clinictrial.trial.AddResearcherToTrial': {
                    target.transactionType = 'AddResearcherToTrial';
                    target.transactionTimestamp = entry.transactionTimestamp.toLocaleString().replace('T', ' ').replace('Z', ' ').split('.')[0];
                    target.participantInvoking = this.getParticipant(entry.participantInvoking);
                    target.trial = entry.eventsEmitted[0].trial.idTrial;
                    target.researcher = entry.eventsEmitted[0].researcher.idResearcher;
                    this.allProcessedHistory.push(target);
                } break;

                case 'ro.utcluj.clinictrial.trial.RemoveResearcherFromTrial': {
                    target.transactionType = 'RemoveResearcherFromTrial';
                    target.transactionTimestamp = entry.transactionTimestamp.toLocaleString().replace('T', ' ').replace('Z', ' ').split('.')[0];
                    target.participantInvoking = this.getParticipant(entry.participantInvoking);
                    target.trial = entry.eventsEmitted[0].trial.idTrial;
                    target.researcher = entry.eventsEmitted[0].researcher.idResearcher;
                    this.allProcessedHistory.push(target);
                }


            }
        }
        console.log(this.allProcessedHistory);
        this.historyDataSource = new MatTableDataSource<HistorianVO>(this.allProcessedHistory);
        this.isInitialised = true;
    }

    private getParticipant(participantString): string {
        let splitString: string[] = participantString.toLocaleString().split('.');
        return splitString[splitString.length - 1];
    }

    private onTransactionSelect() {
        if (this.selectedTransaction == 'None') {
            alert("Please select a transaction type");
        } else {
            console.log(this.selectedTransaction);
            this.filteredHistory = this.allProcessedHistory.filter(
                (entry) => entry.transactionType == this.selectedTransaction
            );
        }
    }

    private onTrialSelect(){   
        this.trialFilteredHistory = this.allProcessedHistory.filter(
            (entry) => 
                entry.trial == this.myControl.value.idTrial
            )
        console.log(this.trialFilteredHistory);
    }

    private filterByTransactionType(src, target): boolean {
        return src == target;
    }
}



export class HistorianVO {
    transactionId: string;
    transactionType: string;
    participantInvoking: any;
    identityUsed: string;
    eventsEmitted: Event[];
    transactionTimestamp: string;
    trial: string;
    customFormID: string;
    researcher: string;
}