import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/core/forms/custom-validators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        CustomValidators.letterCase,
        CustomValidators.existenceNumbers,
        CustomValidators.existenceSpecCharacter,
      ]),
    });
  }

  updateLocalStorage() {
    if (
      this.form.value.email.length > 0 &&
      this.form.value.password.length > 0
    ) {
      localStorage.setItem('login', this.form.value.email);
      localStorage.setItem('password', this.form.value.password);
    }
    console.log(this.form);
  }
}
