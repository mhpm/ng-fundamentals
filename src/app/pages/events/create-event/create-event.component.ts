import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '..';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.scss'],
})
export class CreateEventComponent implements OnInit {
  event: any;
  isDirty = true;

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {
    this.event = {
      id: 100,
      name: 'ng-pitt',
      date: new Date('2/10/2037'),
      time: '9:00 am',
      price: 400.0,
      imageUrl: '/assets/images/ng-vegas.png',
      location: {
        address: '434 5th ave',
        city: 'Pitt, PA',
        country: 'USA',
      },
      sessions: [
        {
          id: 1,
          name: 'Gambling with Angular',
          presenter: 'John Papa',
          duration: 1,
          level: 'Intermediate',
          abstract: `No, this talk isn't about slot machines. We all know that 
          Angular is used in most waiter-bots and coke vending machines, but
          did you know that was also used to write the core engine in the majority
          of voting machines? This talk will look at how all presidential elections
          are now determined by Angular code.`,
          voters: ['bradgreen', 'igorminar'],
        },
        {
          id: 2,
          name: 'Angular 4 in 60ish Minutes',
          presenter: 'Dan Wahlin',
          duration: 2,
          level: 'Beginner',
          abstract: `Get the skinny on Angular 4 for anyone new to this great new technology.
          Dan Wahlin will show you how you can get started with Angular in 60ish minutes, 
          guaranteed!`,
          voters: ['bradgreen', 'igorminar', 'johnpapa'],
        },
      ],
    };
  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/events']);
  }
}
