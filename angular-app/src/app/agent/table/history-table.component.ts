import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/table';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { HistorianVO } from '../agent.component';
import { Router } from '@angular/router';

@Component({
    selector: 'history-table',
    templateUrl: 'history-table.component.html',
    styleUrls: ['history-table.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
            state('expanded', style({ height: '*', visibility: 'visible' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class HistoryTable implements OnInit, OnChanges {

    constructor(
        private _router: Router
    ) {

    }

    @Input() historyData: HistorianVO[];

    displayTable = false;
    tableColumns = ['TransactionType', 'Date', 'InvokingUserID', 'Trial'];
    isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
    expandedElement: any;
    historyDataSource;
    ngOnInit() {
        this.historyDataSource = new HistoryDataSource(this.historyData);
        this.displayTable = true;
    }

    ngOnChanges() {
        this.historyDataSource = new HistoryDataSource(this.historyData);

    }

    expand(row) {

        if (this.expandedElement && this.expandedElement === row) {
            this.expandedElement = null;
        } else {
            this.expandedElement = row
        }

    }

    viewTrial(idTrial) {
        this._router.navigateByUrl('/trial/view/' + idTrial);
    }

}

export class HistoryDataSource extends DataSource<any> {
    constructor(
        private historyEntries: any[]
    ) {
        super();
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Element[]> {
        const rows = [];
        this.historyEntries.forEach(element => rows.push(element, { detailRow: true, element }));
        console.log(rows);
        return Observable.of(rows);
    }

    disconnect() { }
}
