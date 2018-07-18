import { Component, OnInit, Input } from '@angular/core';
import { TrialService } from '../../service/trial.service';
import { Trial } from '../../model/ro.utcluj.clinictrial.trial';
import { MatTableDataSource } from '@angular/material';
import { Researcher } from '../../model/ro.utcluj.clinictrial.base';
import { ResearcherService } from '../../service/researcher.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'user-manager',
    templateUrl: 'user-manager.component.html'
})
export class UserManagerComponent implements OnInit {

    @Input() idTrial;
    trial: Trial;
    usersDataSource: MatTableDataSource<Researcher>;
    displayTable: boolean;
    searchQuery = "";
    allUsersDataSource: MatTableDataSource<Researcher>;
    navigationSubscription;

    constructor(
        private _trialService: TrialService,
        private _researcherService: ResearcherService,
        private _router: Router
    ) {
        this.navigationSubscription = this._router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
                console.log("loading table data....")
                this._trialService.getAsset(this.idTrial).subscribe(
                    (res) => {
                        this.trial = res;
                        this.usersDataSource = new MatTableDataSource<Researcher>(this.trial.responsibles);
                        this.search();
                        this.displayTable = true;
                    }
                )
            }
        });

    }

    ngOnInit() {
        this._trialService.getAsset(this.idTrial).subscribe(
            (res) => {
                this.trial = res;
                this.usersDataSource = new MatTableDataSource<Researcher>(this.trial.responsibles);
                this.search();
                this.displayTable = true;
            }
        )
    }

    search() {
        this._researcherService.getAll().subscribe(
            (res) => {
                let filterResult = res.filter(
                    (user) => {
                        return !this.trial.responsibles.some(
                            (responsible) => {
                                return (responsible.idResearcher == user.idResearcher);
                            }
                        )
                    }
                )
                if (this.searchQuery.trim() == "") {
                    this.allUsersDataSource = new MatTableDataSource<Researcher>(filterResult);
                } else {
                    filterResult.filter(
                        (user) => {
                            let name = user.person.firstName + user.person.lastName;
                            return (name.toLowerCase().trim().includes(this.searchQuery.toLowerCase().trim()))
                        }
                    )
                    this.allUsersDataSource = new MatTableDataSource<Researcher>(filterResult);
                }
            }
        )
    }
}