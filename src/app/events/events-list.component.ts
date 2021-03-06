import { Component } from '@angular/core'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  template: `
  <div>
    <h5>Upcoming Angular 2 Events</h5>
    <hr/>
    <event-thumbnail [event]="event1"></event-thumbnail>
  </div>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/app/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
  // tslint:disable-next-line:eofline
}