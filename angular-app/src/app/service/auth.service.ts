import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/Rx';
import { Configuration } from './configuration';
import { IdProviderService } from '../utils/id-provider.service';
import { AuthenticationVO, AccountType } from '../model/ro.utcluj.vo';
import { ResearcherService } from './researcher.service';
import { Researcher } from '../model/ro.utcluj.clinictrial.base';
import { Utils } from '../utils/utils';



// Can be injected into a constructor
@Injectable()
export class AuthService {

    private resolveSuffix: string = '?resolve=true';
    private actionUrl: string;
    private headers: Headers;
    private userUrl;
    private IDENTITY_API = "system/identities/issue";
    private PING_API = "system/ping";
    private LOGOUT_API = "auth/logout"
    private WALLET_API = "wallet";
    private WALLET_IMPORT_API = "wallet/import";

    private RESEARCHER_NAMESPACE = "ro.utcluj.clinictrial.base.Researcher#";

    private user : AuthenticationVO;

    constructor(
        private http: HttpClient, 
        private _configuration: Configuration,
        private _idProvider : IdProviderService,
        private _researcherService: ResearcherService
    
    ) {
        this.actionUrl = _configuration.AdminServerWithApiUrl;
        this.userUrl = _configuration.ServerWithApiUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    getUser(){
        return localStorage.getItem(Utils.USERNAME);
    }

    storeUserInfo(user: string){
        if(user.includes('Researcher')){
            localStorage.setItem(Utils.USER_ROLE, AccountType.RESEARCHER.toLocaleString())
            var uid = user.replace(this.RESEARCHER_NAMESPACE, "");
            localStorage.setItem(Utils.UID, uid)
            this._researcherService.getparticipant(uid).subscribe(
                (res : Researcher) =>{
                    var displayName = res.person.firstName + " " + res.person.lastName ;
                    localStorage.setItem(Utils.USERNAME, displayName);
                }
            )
          
        }
    }

    getCurrentUserData() {
        return this.http.get(this.userUrl + this.PING_API, { withCredentials: true });
    }

    logout() {
        return this.http.get("http://localhost:3000/auth/logout", { withCredentials: true }).subscribe(
            (res) =>{
                console.log("Logged out... Clearing cookies...");
                localStorage.removeItem(Utils.UID)
                localStorage.removeItem(Utils.USER_ROLE)
                localStorage.removeItem(Utils.USERNAME)
            },
            (err) =>{
                console.log("Logged out... Clearing cookies...");
                localStorage.removeItem(Utils.UID)
                localStorage.removeItem(Utils.USER_ROLE)
                localStorage.removeItem(Utils.USERNAME)
            }
        )
    }
}