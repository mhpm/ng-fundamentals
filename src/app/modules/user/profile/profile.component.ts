import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, IToastr } from 'src/app/services';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToastr
  ) {}

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser?.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);
    this.lastName = new FormControl(
      this.authService.currentUser?.lastName,
      Validators.required
    );

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  onSubmit(formValues: any) {
    if (this.profileForm.valid) {
      this.authService
        .updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success('Profile saved');
        });
    }
  }

  onLogOut() {
    this.authService.logOut().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }

  onCancel() {
    this.router.navigate(['events']);
  }
}
