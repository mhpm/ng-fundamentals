import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarCompoent } from './components/navbar/navbar.component';

import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventService } from './services/event.service';
import { ToastrService } from './services/toastr.service';
import { EventDEtailComponent } from './events/event-details/event-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    NavbarCompoent,
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDEtailComponent,
  ],
  providers: [EventService, ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
