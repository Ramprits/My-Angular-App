import { Component } from '@angular/core';

@Component({
  selector: 'yo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yo works!';
  onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }
}
