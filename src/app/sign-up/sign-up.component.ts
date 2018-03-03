import { LoginValidators } from './login.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private router: Router) {
    this.form = fb.group({
      login: ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          LoginValidators.cannotContainSpace
        ],
      ],
      password: ['', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100)
        ]
      ],
      passwordRepeat: ['', Validators.required],
      email: ['', [
          Validators.required,
          Validators.email
        ]
      ]
    })
  }

  register() {
    if (this.password.value !== this.passwordRepeat.value) {
      this.passwordRepeat.setErrors({ notMatch: true});
      return false;
    }
    
    this.router.navigate(['/login']);
  }

  get login() {
    return this.form.get('login');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordRepeat() {
    return this.form.get('passwordRepeat');
  }

  get email() {
    return this.form.get('email');
  }

}