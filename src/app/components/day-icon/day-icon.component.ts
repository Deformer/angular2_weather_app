import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-day-icon',
  templateUrl: './day-icon.component.html',
  styleUrls: ['./day-icon.component.css']
})
export class DayIconComponent {
  @Input() header;
  @Input() imageUrl;

  constructor() {
  }
}
