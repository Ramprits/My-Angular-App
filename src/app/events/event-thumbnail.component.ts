import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  template: `
  <div class="card col-md-4">
  <!--<img class="card-img-top" data-src="holder.js/100%x180/" alt="">-->
    <div class="card-block">
      <div class="text-primary">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
          <span>Location: {{event.location.address}}</span>
          <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
      </div>
      </div>
</div>
   
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent {
  @Input() event: any;

  // tslint:disable-next-line:eofline
}