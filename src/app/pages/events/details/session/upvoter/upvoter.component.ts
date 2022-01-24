import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div (click)="onClick()" class="bg-dark p-2 rounded-3">
      <div class="d-block text-center">
        <div role="button">
          <i *ngIf="voted" class="bi bi-heart-fill"></i>
          <i *ngIf="!voted" class="bi bi-heart"></i>
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
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();

  onClick(): void {
    this.vote.emit({});
  }
}
