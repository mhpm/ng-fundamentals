import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ToastrService } from '../services/toastr.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleEventClicked(data: any) {
    this.toastr.success(data, 'Event');
  }
}
