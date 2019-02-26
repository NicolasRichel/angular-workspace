import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _isAuth: boolean;
  get isAuth() { return this._isAuth; }

  constructor() {
    this._isAuth = false;
  }

  login() {
    this._isAuth = true;
  }

  logout() {
    this._isAuth = false;
  }
}
