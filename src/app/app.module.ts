import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { NavbarCompoent, Error404Component } from './components';

import { ToastrService } from './services';
import { AboutComponent } from './pages/about/about.component';

import {
  CreateEventComponent,
  EventDetailComponent,
  EventsListComponent,
  EventListResolver,
  EventRouteActivator,
  EventThumbnailComponent,
  EventService,
} from './pages/events';
import { AuthService } from './pages/user/services/auth.service';

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
    CreateEventComponent,
    AboutComponent,
    Error404Component,
  ],
  providers: [
    EventListResolver,
    EventService,
    ToastrService,
    AuthService,
    EventRouteActivator,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
