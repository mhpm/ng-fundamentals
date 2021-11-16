import { Routes } from '@angular/router';
import { Error404Component } from '../components/errors/404.component';
import { AboutComponent } from '../pages/about/about.component';
import { CreateEventComponent } from '../pages/events/create-event/create-event.component';
import { EventDEtailComponent } from '../pages/events/event-details/event-detail.component';
import { EventsListComponent } from '../pages/events/events-list.component';
import { EventListResolver } from '../pages/events/services/event-list.resolve.service';
import { EventRouteActivator } from '../pages/events/services/event-route-activator.service';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    //canDeactivate: ['canDeactivateCreateEvent'], // function to prevent user leave
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver }, // service for preload data before active the route
  },
  {
    path: 'events/:id',
    component: EventDEtailComponent,
    canActivate: [EventRouteActivator], // guard for prevent user access
  },
  { path: 'about', component: AboutComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
