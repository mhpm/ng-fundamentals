import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
    });
  }

  onListSession() {
    this.addMode = false;
  }

  onCreateSession() {
    this.addMode = true;
  }

  saveSession(session: ISession) {
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelSession() {
    this.addMode = false;
  }
}
