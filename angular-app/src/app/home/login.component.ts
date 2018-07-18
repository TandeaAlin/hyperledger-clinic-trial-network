import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../components/loader/loader.service';
import { AuthService } from '../service/auth.service';
@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styles: []
})
export class LoginComponent implements OnInit{
    constructor(
        private _loaderService: LoaderService,
        private _authService: AuthService
    ){
        _authService.clearUserInfo();
        this._loaderService.hide();
    }

    ngOnInit(){
        this._authService.clearUserInfo();
        this._loaderService.hide();
    }

    loginAnimation(){
        this._loaderService.show();
    }

}
