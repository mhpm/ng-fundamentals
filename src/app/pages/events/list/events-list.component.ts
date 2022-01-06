import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ToastrService } from '../../../services/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../event.model';

@Component({
  selector: 'event-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: IEvent | any = [];

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
