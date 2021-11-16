import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarCompoent } from './components/navbar/navbar.component';

import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { EventsListComponent } from './pages/events/events-list.component';
import { EventService } from './pages/events/services/event.service';
import { ToastrService } from './services/toastr.service';
import { EventDEtailComponent } from './pages/events/event-details/event-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AboutComponent } from './pages/about/about.component';
import { CreateEventComponent } from './pages/events/create-event/create-event.component';
import { Error404Component } from './components/errors/404.component';
import { EventRouteActivator } from './pages/events/services/event-route-activator.service';
import { EventListResolver } from './pages/events/services/event-list.resolve.service';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    NavbarCompoent,
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDEtailComponent,
    CreateEventComponent,
    AboutComponent,
    Error404Component,
  ],
  providers: [
    EventListResolver,
    EventService,
    ToastrService,
    EventRouteActivator,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
