import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../event.model';
import { TOASTR_TOKEN, IToastr } from 'src/app/services';
import { AuthService } from 'src/app/modules/user/services/auth.service';

@Component({
  selector: 'event-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: IEvent | any = [];

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: IToastr
  ) {}

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
    this.events = this.route.snapshot.data['events'];
  }
}
