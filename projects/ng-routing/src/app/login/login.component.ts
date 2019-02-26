import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../auth.service';

@Component({
  selector: 'login-view',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {}

  login() {
    setTimeout(() => {
      this._authService.login();
      this._router.navigate(['main/home']);
    }, 1000);
  }

}
