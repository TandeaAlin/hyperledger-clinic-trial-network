import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AccountType } from '../model/ro.utcluj.vo';

@Component({
  selector: 'navbar-component',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {

  currentUser = "";

  constructor(
    private _authService : AuthService
  ){
  }

  isAgent(){
    return this._authService.getRole() == AccountType.AGENT.toLocaleString();
  }

  isSponsor(){
    return this._authService.getRole() == AccountType.SPONSOR.toLocaleString();
  }
  
  onClick(){
    console.log('Hello World!');
  }
  
}
