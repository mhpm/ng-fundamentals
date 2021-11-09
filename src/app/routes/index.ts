import { Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { EventDEtailComponent } from '../pages/events/event-details/event-detail.component';
import { EventsListComponent } from '../pages/events/events-list.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDEtailComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
