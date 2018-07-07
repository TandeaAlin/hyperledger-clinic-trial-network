import { Component } from '@angular/core';
import { LoaderService } from '../components/loader/loader.service';
import { AuthService } from '../service/auth.service';
@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styles: []
})
export class LoginComponent {
    constructor(
        private _loaderService: LoaderService,
        private _authService: AuthService
    ){
        _authService.clearUserInfo();
    }

    loginAnimation(){
        this._loaderService.show();
    }

}
