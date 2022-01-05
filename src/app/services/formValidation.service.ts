import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class FormValidationService {
  validControl(control: FormControl): boolean {
    return control.invalid && control.touched;
  }
}
