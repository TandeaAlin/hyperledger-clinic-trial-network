import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Configuration } from './configuration';
import { AuthenticationVO } from '../model/ro.utcluj.vo';



// Can be injected into a constructor
@Injectable()
export class SystemService {

    private resolveSuffix: string = '?resolve=true';
    private actionUrl: string;
    private headers: Headers;
    private userUrl;
    private IDENTITY_API = "system/identities/issue";
    private PING_API = "system/ping";
    private WALLET_API = "wallet";
    private WALLET_IMPORT_API = "wallet/import";


    constructor(private http: HttpClient, private _configuration: Configuration) {
        this.actionUrl = _configuration.AdminServerWithApiUrl;
        this.userUrl = _configuration.ServerWithApiUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    
    getCurrentUser() {
        return this.http.get(this.userUrl + this.PING_API, { withCredentials: true }).toPromise()
            .then((data) => {
                return data['participant'];
            });
    }

    checkWallet() {
        return this.http.get(this.userUrl + this.WALLET_API, { withCredentials: true }).toPromise();
    }

    bindIdentity(identity) {
        console.log("Issuing identity...");
        return this.http.post(this.actionUrl + this.IDENTITY_API, identity, { responseType: 'blob' })
            .toPromise().then(
                (identityCard) => {
                    console.log("Obtained identity card from server...");
                    console.log(identityCard);
                    const file = new File([identityCard], 'myCard.card', { type: 'application/octet-stream', lastModified: Date.now() });
                    console.log("Created card file...");
                    const formData = new FormData();
                    formData.append('card', file);

                    const headers = new HttpHeaders();
                    headers.set('Content-Type', 'multipart/form-data');
                    this.http.post(this.userUrl + this.WALLET_IMPORT_API, formData, {
                        withCredentials: true,
                        headers
                    }).subscribe(
                        (res)=>{
                            console.log("Card imported successfully...");
                        },
                        (err)=>{
                            console.log("Failed to import card");
                            alert("Failed to bind identity");
                        }
                    )
                }
            )
    }

    public getSingle(ns: string, id: string): Observable<any> {
        console.log('Admin GetSingle ' + ns);

        return this.http.get<any>(this.actionUrl + ns + '/' + id + this.resolveSuffix);
    }

    private add(ns: string, asset): Observable<any> {
        console.log('Add ' + ns);
        console.log('asset', asset);

        return this.http.post<any>(this.actionUrl + ns, asset);
    }
}