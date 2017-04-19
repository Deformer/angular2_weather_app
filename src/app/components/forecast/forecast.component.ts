import {Component, OnInit} from "@angular/core";
import {WeatherService} from "../../services/weather/weather.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  weather: Object;
  city: String;
  error: Object;

  constructor(private forecastService: WeatherService,
              private activatedRoute: ActivatedRoute,
              private helperService: HelperService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.city = params['city'];
      this.forecastService.getWeatherList(this.city)
        .then(weather => this.weather = weather)
        .catch(error => this.error = error);
    });
  }

  goToDetail(index) {
    this.router.navigate(['/detail', this.city, index]);
  }

}
