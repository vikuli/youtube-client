import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getLogin() {
    return localStorage.getItem('login');
  }

  getPassword() {
    return localStorage.getItem('password');
  }
}
