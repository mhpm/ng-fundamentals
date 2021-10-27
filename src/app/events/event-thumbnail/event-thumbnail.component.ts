import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [ngClass]="getStyle()" class="p-4 mt-4 thumnail">
      <h2>
        {{ event?.name }}
      </h2>
      <div>Date: {{ event?.date }}</div>
      <div>Time: {{ event?.time }}</div>
      <div>Price: \${{ event?.price }}</div>
      <div *ngIf="event.location">
        <span> Location: {{ event?.location.address }} </span>
        <span>
          {{ event?.location.city }}
        </span>
        <span> , {{ event?.location.country }} </span>
      </div>
      <div *ngIf="event.onlineUrl">
        On line URl: <span> , {{ event?.onlineUrl }} </span>
      </div>
    </div>
  `,
  styles: [
    `
      .thumnail {
        min-height: 250px;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  //Receive data from parent to children (props)
  @Input() event: any;

  //Return data from children to parent
  @Output() eventClick = new EventEmitter();

  handleClick() {
    this.eventClick.emit(this.event.name);
  }

  logFoo() {
    console.log('Foo');
  }

  getStyle() {
    if (this.event.id === 1) return 'bg-light text-dark';
    else return 'bg-dark';
  }
}
