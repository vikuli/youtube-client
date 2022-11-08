import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthorized: boolean = false;

  userName: string = 'Your Name';

  constructor(
    private router: Router,
    public localStorageService: LocalStorageService,
  ) {
    this.isAuthorized = this.showLogoutButton();
    this.userName = this.updateUserName();
  }

  updateUserName() {
    const login = this.localStorageService.getLogin();
    const password = this.localStorageService.getPassword();
    if (login && password) {
      const formattedLogin = login.split('@')[0];
      this.userName = formattedLogin;
      return formattedLogin;
    }
    return this.userName;
  }

  showLogoutButton() {
    const login = this.localStorageService.getLogin();
    const password = this.localStorageService.getPassword();
    if (login && password) {
      this.isAuthorized = true;
      return true;
    }
    return this.isAuthorized;
  }

  logIn() {
    const formattedLogin = (
      this.localStorageService.getLogin() as string
    ).split('@')[0];
    this.isAuthorized = true;
    this.userName = formattedLogin;
    this.router.navigate(['/videos']);
  }

  logOut() {
    localStorage.clear();
    this.isAuthorized = false;
    this.userName = 'Your Name';
    this.router.navigate(['/authorization']);
  }
}
