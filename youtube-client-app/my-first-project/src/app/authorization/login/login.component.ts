import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: string = '';
  password: string = '';

  constructor(public authService: AuthService) {}

  updateLocalStorage() {
    if (this.login.length > 0 && this.password.length > 0) {
      localStorage.setItem('login', this.login);
      localStorage.setItem('password', this.password);
    }
  }
}
