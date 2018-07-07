import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/Rx';
import { Researcher } from '../model/ro.utcluj.clinictrial.base';
import { AccountType, AuthenticationVO } from '../model/ro.utcluj.vo';
import { IdProviderService } from '../utils/id-provider.service';
import { Utils } from '../utils/utils';
import { Configuration } from './configuration';
import { ResearcherService } from './researcher.service';



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

    private user: AuthenticationVO;

    constructor(
        private http: HttpClient,
        private _configuration: Configuration,
        private _idProvider: IdProviderService,
        private _researcherService: ResearcherService

    ) {
        this.actionUrl = _configuration.AdminServerWithApiUrl;
        this.userUrl = _configuration.ServerWithApiUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    getUser() {
        var user = localStorage.getItem(Utils.USERNAME);
        //console.log(user);
        return user;
    }

    storeUserInfo(user: string) {
        if (user.includes('Researcher')) {
            localStorage.setItem(Utils.USER_ROLE, AccountType.RESEARCHER.toLocaleString())
            var uid = user.replace(this.RESEARCHER_NAMESPACE, "");
            localStorage.setItem(Utils.UID, uid)
            this._researcherService.getparticipant(uid).subscribe(
                (res: Researcher) => {
                    var displayName = res.person.firstName + " " + res.person.lastName;
                    localStorage.setItem(Utils.USERNAME, displayName);
                }
            )

        }
    }

    clearUserInfo(){
        localStorage.removeItem(Utils.USERNAME);
        localStorage.removeItem(Utils.USER_ROLE);
        localStorage.removeItem(Utils.UID);
    }

    getCurrentUserData() {
        return this.http.get(this.userUrl + this.PING_API, { withCredentials: true });
    }

    logout() {
        return this.http.get("http://localhost:3000/auth/logout", { withCredentials: true }).subscribe(
            (res) => {
                console.log("Logged out... Clearing cookies...");
                this.clearUserInfo();
            },
            (err) => {
                console.log("Logged out... Clearing cookies...");
                this.clearUserInfo();
            }
        )
    }
}