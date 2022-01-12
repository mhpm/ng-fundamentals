import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../event.model';
import { TOASTR_TOKEN, IToastr } from 'src/app/services';

@Component({
  selector: 'event-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: IEvent | any = [];

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    @Inject(TOASTR_TOKEN) private toastr: IToastr
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
