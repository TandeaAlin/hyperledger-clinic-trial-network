
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Configuration } from './configuration';

@Injectable()
export class DataService<Type> {
    private resolveSuffix: string = '?resolve=true';
    private includeSuffix: string = '?filter={"include":"resolve"}';
    private actionUrl: string;
    private headers: HttpHeaders;

    constructor(private http: HttpClient, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl;
        this.headers = new HttpHeaders();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

    }

    public getAll(ns: string): Observable<Type[]> {
        console.log('GetAll ' + ns + ' to ' + this.actionUrl + ns, this.headers);
        return this.http.get<Type[]>(`${this.actionUrl}${ns}` + this.includeSuffix,{ withCredentials: true });
    }

    public getSingle(ns: string, id: string): Observable<Type> {
        console.log('GetSingle ' + ns);

        return this.http.get<Type>(this.actionUrl + ns + '/' + id + this.includeSuffix, { withCredentials: true });
    }

    public getSingleUnresolved(ns: string, id: string): Observable<Type> {
        console.log('GetSingle ' + ns);

        return this.http.get<Type>(this.actionUrl + ns + '/' + id, { withCredentials: true });
    }

    public add(ns: string, asset: Type): Observable<Type> {
        console.log('Entered DataService add');
        console.log('Add ' + ns);
        console.log('asset', asset);

        return this.http.post<Type>(this.actionUrl + ns, asset, { withCredentials: true });
    }

    public update(ns: string, id: string, itemToUpdate: Type): Observable<Type> {
        console.log('Update ' + ns);
        console.log('what is the id?', id);
        console.log('what is the updated item?', itemToUpdate);
        console.log('what is the updated item?', JSON.stringify(itemToUpdate));
        return this.http.put<Type>(`${this.actionUrl}${ns}/${id}`, itemToUpdate, { withCredentials: true });
    }

    public delete(ns: string, id: string): Observable<Type> {
        console.log('Delete ' + ns);

        return this.http.delete<Type>(this.actionUrl + ns + '/' + id, { withCredentials: true });
    }

    private handleError(error: any): Observable<string> {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return observableThrowError(errMsg);
    }

    private extractData(res: Response): any {
        return res.json();
    }

}
