import {Component, OnInit} from "@angular/core";
import {WeatherService} from "../../services/weather/weather.service";
import {ActivatedRoute, Params} from "@angular/router";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private city: String;
  private weatherDetail;
  private error: Object;

  constructor(private weatherService: WeatherService,
              private activatedRoute: ActivatedRoute,
              private helperService: HelperService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.city = params['city'];
      const index = params['index'];
      this.weatherService.getWeatherForDay(this.city, index)
        .then(weather => {
          this.weatherDetail = weather;
        })
        .catch(error => this.error = error);
    });
  }
}
