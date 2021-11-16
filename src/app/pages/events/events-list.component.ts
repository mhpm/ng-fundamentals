import { Component, OnInit } from '@angular/core';
import { EventService } from './services/event.service';
import { ToastrService } from '../../services/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: any = [];

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked(data: any) {
    this.toastr.success(data, 'Event');
  }
}
