import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '../service/system-service'
import { ResearcherService } from '../service/researcher.service';
import { Researcher } from '../model/ro.utcluj.clinictrial.base';
import { AuthService } from '../service/auth.service';
import { LoaderService } from '../components/loader/loader.service';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  identityAdd = false;
  idParticipant = "";
  identityType: string;
  setIdentity;
  identities = [];
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _systemService: SystemService,
    private _researcherService: ResearcherService,
    private _authService: AuthService,
    private _loaderService: LoaderService
  ) {
    var result = this._route.params
      .subscribe(params => {
        var res = params['loggedIn'];

        this._systemService.checkWallet().then(
          (res) => {
            console.log(res);
            if (res['length'] == 0) {
              console.log("No identities defined in wallet. Asking for an identity")
              this.identityAdd = true;
              this._loaderService.hide();
              this.identities.concat(res);

            } else {
              this._systemService.getCurrentUser().then(
                (res) => {
                  console.log(res)
                  this._authService.storeUserInfo(res);
                  this.identityAdd = false;
                  this._loaderService.hide();
                }
              )
            }
          }
        )
      })
  }
  ngOnInit() {
    this.identityAdd = false;
  }

  onSubmit() {
    this._loaderService.show();
    this.idParticipant = this.idParticipant.trim();
    if (!this.identityType) {
      alert("Please choose the type of identity!")
      return;
    }
    if (this.idParticipant == "") {
      alert("Participant ID cannot be empty!");
      return;
    }
    console.log("Binding identity to account...");
    console.log(this.idParticipant);
    console.log(this.identityType)
    if (this.identityType == "researcher") {
      console.log("Selected researcher option")
      this._researcherService.getparticipantAdmin(this.idParticipant).subscribe(
        (participant) => {
          console.log("Found participant ...")
          console.log(participant);
          console.log("Biniding to wallet...")
          this._systemService
            .bindIdentity(this.createResearcherIdentity(participant)).then(
              (res) => {
                this._loaderService.hide();
                console.log("Checking if default identity is set...");
                this._systemService.getCurrentUser().then(
                  (res) => {
                    console.log("Seting cookies...")
                    this._authService.storeUserInfo(res);
                    console.log("Reinitializing...");
                    this._router.navigate([this._router.url])
                  }
                )
              }
            )
        },
        (err)=>{
          this._loaderService.hide();
          alert("Cannot bind identity");
        }
      )
    } else if (this.identityType == "agent") {

    } else if (this.identityType == "sponsor") {

    }

  }

  createResearcherIdentity(researcher: Researcher) {
    const identity = {
      participant: 'ro.utcluj.clinictrial.base.Researcher#' + researcher.idResearcher,
      userID: researcher.idResearcher,
      options: {}
    };
    return identity;
  }

  bindAccount() {
  }
}
