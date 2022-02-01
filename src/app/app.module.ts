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
  SearchInputComponent,
  ModalComponent,
} from './components';

import {
  FormValidationService,
  TOASTR_TOKEN,
  IToastr,
  JQ_TOKEN,
} from './services';
import { AboutComponent } from './pages/about/about.component';

import {
  CreateEventComponent,
  EventDetailComponent,
  EventsListComponent,
  CreateSessionComponent,
  EventListResolver,
  EventThumbnailComponent,
  EventService,
  UpVoterComponent,
  VoteService,
  EventResolver,
} from './pages/events';
import { SessionListComponent } from './pages/events/details/session/list/session-list.component';
import { AuthService } from './modules/user/services/auth.service';
import { DurationPipe } from './shared';

import { HttpClientModule } from '@angular/common/http';

declare let toastr: IToastr;
declare let jQuery: Object;

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
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
    SearchInputComponent,
    ModalComponent,
    AboutComponent,
    UpVoterComponent,
    Error404Component,
    DurationPipe,
  ],
  providers: [
    EventListResolver,
    EventService,
    VoteService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    AuthService,
    FormValidationService,
    EventResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
