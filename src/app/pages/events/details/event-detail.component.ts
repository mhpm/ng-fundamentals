import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/pages/events/services/event.service';
import { IEvent, ISession } from '..';

@Component({
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.css'],
})
export class EventDetailComponent implements OnInit {
  event: IEvent | any;
  addMode = false;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  onListSession() {
    this.addMode = false;
  }

  onCreateSession() {
    this.addMode = true;
  }

  saveSession(session: ISession) {
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelSession() {
    this.addMode = false;
  }
}
