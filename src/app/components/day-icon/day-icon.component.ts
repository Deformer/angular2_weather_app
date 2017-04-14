import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-day-icon',
  templateUrl: './day-icon.component.html',
  styleUrls: ['./day-icon.component.css']
})
export class DayIconComponent implements OnInit {
  @Input() header;
  @Input() imageUrl;
  constructor() { }

  ngOnInit() {
  }

}
