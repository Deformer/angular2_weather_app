import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent {
  city: String = '';

  constructor(private router: Router) {
  }

  onButtonClick() {
    if (this.city) {
      this.router.navigate(['/weather', this.city]);
      this.city = '';
    }
  }

}
