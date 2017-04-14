import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {
  city: String = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onButtonClick() {
    if (this.city) {
      this.router.navigate(['/forecast', this.city]);
      this.city = '';
    }
  }

}
