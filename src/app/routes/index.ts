import { Routes } from '@angular/router';
import { Error404Component } from '../components/errors/404.component';
import { AboutComponent } from '../pages/about/about.component';

import {
  CreateEventComponent,
  EventDetailComponent,
  EventsListComponent,
  EventListResolver,
  EventRouteActivator,
  CreateSessionComponent,
} from '../pages/events';

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
    component: EventDetailComponent,
    canActivate: [EventRouteActivator], // guard for prevent user access
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent,
  },
  { path: 'about', component: AboutComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('../pages/user/user.module').then((m) => m.UserModule),
  },
];
