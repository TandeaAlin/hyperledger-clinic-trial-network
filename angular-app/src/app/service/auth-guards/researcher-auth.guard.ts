import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';
import { AccountType } from '../../model/ro.utcluj.vo';

@Injectable()
export class ResearcherAuthGuard implements CanActivate {
    private accType;
    constructor(
        private _router: Router,
        private _authService: AuthService
    ) { }

    canActivate() {

        var user = this._authService.getUser();
        var role = this._authService.getRole();
        console.log(user)
        console.log(role)
        if (user) {
            return true;
        }
        this._router.navigateByUrl('/login');
        return false;
    }
}