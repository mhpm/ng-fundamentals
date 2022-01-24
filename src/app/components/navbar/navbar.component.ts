import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private eventService: EventService,
    private router: Router
  ) {}

  searchSession(searchTerm: string) {
    this.eventService.searchSession(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
    });
  }

  selectedItem(item: any) {
    this.router.navigate(['/events', item.eventId]);
  }
}
