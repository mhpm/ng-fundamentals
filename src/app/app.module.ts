import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarCompoent } from './components/navbar/navbar.component';

import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { EventsListComponent } from './pages/events/events-list.component';
import { EventService } from './services/event.service';
import { ToastrService } from './services/toastr.service';
import { EventDEtailComponent } from './pages/events/event-details/event-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    NavbarCompoent,
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDEtailComponent,
    AboutComponent,
  ],
  providers: [EventService, ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
