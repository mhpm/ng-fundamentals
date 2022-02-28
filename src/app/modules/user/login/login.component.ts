import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userName = '';
  password = '';
  mouseOverLogin = false;
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(formValues: any) {
    this.authService
      .onLogin(formValues.userName, formValues.password)
      .subscribe((resp) => {
        if (!resp) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['events']);
        }
      });
  }

  onCancel() {
    this.router.navigate(['events']);
  }
}
