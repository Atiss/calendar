import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendar';
  selected = new Date();

  onClick(hour: string) {
    alert(hour)
    console.log(hour)
  }
}
