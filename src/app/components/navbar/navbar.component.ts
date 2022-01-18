import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/user/services/auth.service';
import { EventService, ISession } from 'src/app/pages/events';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
})
export class NavbarCompoent {
  foundSessions: ISession[] = [];

  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {}

  searchSession(searchTerm: string) {
    this.eventService.searchSession(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
