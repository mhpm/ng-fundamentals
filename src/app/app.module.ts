import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarCompoent } from './navbar/navbar.component';

import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventService } from './services/event.service';

@NgModule({
  declarations: [
    NavbarCompoent,
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
  ],
  providers: [EventService],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
