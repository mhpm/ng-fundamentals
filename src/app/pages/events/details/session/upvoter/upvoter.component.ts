import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div (click)="onClick()" class="bg-dark p-2 rounded-3">
      <div class="d-block text-center">
        <div role="button">
          <i class="bi bi-heart-fill" [style.color]="iconColor"></i>
        </div>
        <div class="badge">
          <span>{{ count }}</span>
        </div>
      </div>
    </div>
  `,
})
export class UpVoterComponent {
  @Input() count: number;
  @Input() set voted(value: boolean) {
    this.iconColor = value ? 'tomato' : 'white';
  }
  @Output() vote = new EventEmitter();
  iconColor: string;
  onClick(): void {
    this.vote.emit({});
  }
}
