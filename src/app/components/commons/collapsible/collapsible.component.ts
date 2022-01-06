import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsible',
  template: `
    <div (click)="toggleContent()" class="bg-dark mb-4 p-3">
      <div class="d-flex justify-content-between align-items-center">
        <ng-content select="[title]"></ng-content>
        <i *ngIf="visible" class="bi bi-chevron-down " role="button"></i>
        <i
          *ngIf="!visible"
          class="bi bi-chevron-double-down "
          role="button"
        ></i>
      </div>
      <ng-content *ngIf="visible" select="[body]"></ng-content>
    </div>
  `,
})
export class CollapsibleComponent {
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
