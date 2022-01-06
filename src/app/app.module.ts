import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import {
  NavbarCompoent,
  Error404Component,
  CollapsibleComponent,
} from './components';

import { FormValidationService, ToastrService } from './services';
import { AboutComponent } from './pages/about/about.component';

import {
  CreateEventComponent,
  EventDetailComponent,
  EventsListComponent,
  CreateSessionComponent,
  EventListResolver,
  EventRouteActivator,
  EventThumbnailComponent,
  EventService,
} from './pages/events';
import { SessionListComponent } from './pages/events/details/session/list/session-list.component';
import { AuthService } from './modules/user/services/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    NavbarCompoent,
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    CreateSessionComponent,
    CreateEventComponent,
    SessionListComponent,
    CollapsibleComponent,
    AboutComponent,
    Error404Component,
  ],
  providers: [
    EventListResolver,
    EventService,
    ToastrService,
    AuthService,
    FormValidationService,
    EventRouteActivator,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
