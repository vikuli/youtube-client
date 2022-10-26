import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthorized: boolean = false;

  userName: string = 'Your Name';

  constructor(private router: Router) {
    this.isAuthorized = this.isAuthorized;
    this.userName = this.userName;
  }

  updateUserName() {
    return localStorage.getItem('login') && localStorage.getItem('password')
      ? (this.userName = localStorage.getItem('login') as string)
      : this.userName;
  }

  showLogoutButton() {
    return localStorage.getItem('login') && localStorage.getItem('password')
      ? (this.isAuthorized = true)
      : this.isAuthorized;
  }

  logIn() {
    this.isAuthorized = this.isAuthorized;
    this.userName = this.userName;
    this.router.navigate(['/videos']);
  }

  logOut() {
    localStorage.clear();
    this.isAuthorized = false;
    this.userName = 'Your Name';
    this.router.navigate(['/authorization']);
  }
}
