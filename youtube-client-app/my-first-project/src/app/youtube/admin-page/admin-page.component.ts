import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/core/forms/custom-validators';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      discription: new FormControl('', [Validators.maxLength(255)]),
      imgLink: new FormControl('', [
        Validators.required,
        CustomValidators.urlValidity,
      ]),
      videoLink: new FormControl('', [
        Validators.required,
        CustomValidators.urlValidity,
      ]),
      date: new FormControl('', [
        Validators.required,
        CustomValidators.actualDate,
      ]),
    });
  }
}
