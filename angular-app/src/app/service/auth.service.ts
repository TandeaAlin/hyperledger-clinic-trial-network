import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/Rx';
import { Researcher, Agent, Supplier, Administrator } from '../model/ro.utcluj.clinictrial.base';
import { AccountType, AuthenticationVO } from '../model/ro.utcluj.vo';
import { IdProviderService } from '../utils/id-provider.service';
import { Utils } from '../utils/utils';
import { Configuration } from './configuration';
import { ResearcherService } from './researcher.service';
import { Router } from '@angular/router';
import { AgentService } from './Agent.service';
import { SupplierService } from './Supplier.service';
import { AdministratorService } from './administrator.service';



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
    private AGENT_NAMESPACE = "ro.utcluj.clinictrial.base.Agent#";
    private SUPPLIER_NAMESPACE = "ro.utcluj.clinictrial.base.Supplier#";
    private ADMIN_NAMESPACE = "ro.utcluj.clinictrial.base.Administrator#";

    private user: AuthenticationVO;

    constructor(
        private http: HttpClient,
        private _configuration: Configuration,
        private _idProvider: IdProviderService,
        private _researcherService: ResearcherService,
        private _agentService: AgentService,
        private _sponsorService: SupplierService,
        private _router: Router,
        private _administratorService: AdministratorService

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
    getRole() {
        var role = localStorage.getItem(Utils.USER_ROLE);
        //console.log(user);
        return role;
    }

    getUID() {
        var uid = localStorage.getItem(Utils.UID);
        //console.log(user);
        return uid;
    }


    storeUserInfo(user: string) {
        console.log(user);
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

        } else if (user.includes('Agent')) {
            localStorage.setItem(Utils.USER_ROLE, AccountType.AGENT.toLocaleString())
            var uid = user.replace(this.AGENT_NAMESPACE, "");
            localStorage.setItem(Utils.UID, uid)
            this._agentService.getparticipant(uid).subscribe(
                (res: Agent) => {
                    var displayName = res.person.firstName + " " + res.person.lastName;
                    localStorage.setItem(Utils.USERNAME, displayName);
                }
            )

        } else if (user.includes('Supplier')) {
            localStorage.setItem(Utils.USER_ROLE, AccountType.SPONSOR.toLocaleString())
            var uid = user.replace(this.SUPPLIER_NAMESPACE, "");
            localStorage.setItem(Utils.UID, uid)
            this._sponsorService.getparticipant(uid).subscribe(
                (res: Supplier) => {
                    var displayName = res.person.firstName + " " + res.person.lastName;
                    localStorage.setItem(Utils.USERNAME, displayName);
                }
            )
        } else if (user.includes('Administrator')) {
            localStorage.setItem(Utils.USER_ROLE, AccountType.ADMIN.toLocaleString())
            console.log(AccountType.ADMIN.toLocaleString())
            var uid = user.replace(this.ADMIN_NAMESPACE, "");
            localStorage.setItem(Utils.UID, uid)
            this._administratorService.getparticipant(uid).subscribe(
                (res: Administrator) => {
                    var displayName = res.person.firstName + " " + res.person.lastName;
                    localStorage.setItem(Utils.USERNAME, displayName);
                }
            )
        }
    }

    clearUserInfo() {
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
                this._router.navigateByUrl('/login');
            },
            (err) => {
                console.log("Logged out... Clearing cookies...");
                this.clearUserInfo();
                this._router.navigateByUrl('/login');
            }
        )
    }
}