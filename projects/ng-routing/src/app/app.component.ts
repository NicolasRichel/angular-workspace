import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {}

  get isAuth(): boolean {
    return this._authService.isAuth;
  }

  logout() {
    setTimeout(() => {
      this._authService.logout();
      this._router.navigate(['login']);
    }, 1000);
  }

}
