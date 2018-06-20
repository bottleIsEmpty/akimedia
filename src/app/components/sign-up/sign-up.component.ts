import { AuthService } from './../../services/auth.service';
import { LoginValidators } from './login.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  form: FormGroup;
  imgSrc = 'assets/no-photo.png';
  incorrect = false;

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) {
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
    });
  }

  register() {
    if (this.password.value !== this.passwordRepeat.value) {
      this.passwordRepeat.setErrors({ notMatch: true});
      return false;
    }

    this.authService.register(this.form.value)
      .subscribe(result => {
        this.snackBar.open('Вы успешно зарегистрированы в системе',  null, { duration: 2000 });
        this.router.navigate(['/login']);
      }, error => {
        this.incorrect = true;
      });
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
