import { FormControl } from '@angular/forms';

export function validControl(control: FormControl): boolean {
  return control.invalid && control.touched;
}
