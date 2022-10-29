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
    public localStorageService: LocalStorageService
  ) {
    this.isAuthorized = this.isAuthorized;
    this.userName = this.userName;
  }

  updateUserName() {
    const login = this.localStorageService.getLogin();
    const password = this.localStorageService.getPassword();
    if (login && password) {
      this.userName = login;
      return login;
    }
    return this.userName
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
    this.isAuthorized = true;
    this.userName = this.localStorageService.getLogin() as string;
    this.router.navigate(['/videos']);
  }

  logOut() {
    localStorage.clear();
    this.isAuthorized = false;
    this.userName = 'Your Name';
    this.router.navigate(['/authorization']);
  }
}
