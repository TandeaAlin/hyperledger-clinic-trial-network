import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Researcher } from '../../model/ro.utcluj.clinictrial.base';
import { AddResearcherToTrial, RemoveResearcherFromTrial } from '../../model/transaction';
import { ResourceProvider } from '../../utils/resource-provider';
import { TransactionService } from '../../service/transaction-service';
import { Router } from '@angular/router';

@Component({
    selector: 'researcher-table',
    templateUrl: 'researcher-table.component.html'
})
export class ResearcherTableComponent implements OnInit {

    constructor(
        private _transactionService : TransactionService,
        private _router: Router
    ){

    }

    displayTable = false;

    @Input() dataSource: MatTableDataSource<Researcher>;
    @Input() activeMode: boolean;
    @Input() idTrial: string;

    private tableColumns = ['ResearcherID', 'Name', 'E-mail', 'Actions'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngOnInit() {
        this.displayTable = true;
    }

    addResearcher(res: Researcher) {
        var tx = new AddResearcherToTrial();
        tx.researcher = ResourceProvider.newResearcherResource(res.idResearcher);
        tx.trial = ResourceProvider.newTrialResource(this.idTrial);
        this._transactionService.addResearcherToTrial(tx).subscribe(
            (res) =>{
                this._router.navigate([this._router.url])
            },
            (err: Error)=>{
                alert(err.message);
            }
        );
    }

    removeResearcher(res: Researcher) {
        var tx = new RemoveResearcherFromTrial();
        tx.researcher = ResourceProvider.newResearcherResource(res.idResearcher);
        tx.trial = ResourceProvider.newTrialResource(this.idTrial);
        this._transactionService.removeResearcherFromTrial(tx).subscribe(
            (res) =>{
                this._router.navigate([this._router.url])
            },
            (err: Error)=>{
                alert(err.message);
            }
        );
    }

}

