import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal',
  template: `
    <div class="card position-absolute w-100 text-dark mt-1">
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class ModalComponent {
  @Input() title: string;
}
