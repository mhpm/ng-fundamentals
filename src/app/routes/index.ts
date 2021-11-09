import { Routes } from '@angular/router';
import { EventDEtailComponent } from '../events/event-details/event-detail.component';
import { EventsListComponent } from '../events/events-list.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDEtailComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
