import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarCompoent } from './navbar/navbar.component';

import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  declarations: [
    NavbarCompoent,
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
