import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoaderService {

    private loaderSubject = new Subject<any>();
    loaderState = this.loaderSubject.asObservable();
    constructor() { }
    show() {
        this.loaderSubject.next(<any>true);
    }
    hide() {
        this.loaderSubject.next(<any>false);
    }
}