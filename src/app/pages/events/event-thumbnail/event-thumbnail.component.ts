import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.css'],
})
export class EventThumbnailComponent {
  //Receive data from parent to children (props)
  @Input() event: any;

  //Return data from children to parent
  @Output() eventClick = new EventEmitter();

  getStyle() {
    if (this.event.id === 1) return 'bg-light text-dark';
    else return 'bg-dark';
  }
}
