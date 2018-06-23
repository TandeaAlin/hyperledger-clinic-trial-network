import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

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

  
}
