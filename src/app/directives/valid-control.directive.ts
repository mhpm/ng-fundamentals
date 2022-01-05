import { Directive, ElementRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[error-form]',
})
export class ErrorFormDirective {
  @Input() control: FormControl;
  constructor(el: ElementRef) {}
}
