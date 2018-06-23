
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient }from '@angular/common/http';


import { Configuration } from '../configuration';

@Injectable()
export class QueryService<Type> {
    private resolveSuffix: string = '?resolve=true';
    private actionUrl: string;
    private headers: Headers;

    constructor(private http: HttpClient, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }


    public get(query: string, param: string): Observable<Type[]> {
        console.log("Executing query ... ")
        console.log("param: " + param)
        console.log(`${this.actionUrl}queries/${query}${param}`) 
        return this.http.get<Type[]>(`${this.actionUrl}queries/${query}${param}`,{ withCredentials: true });
    }
}
