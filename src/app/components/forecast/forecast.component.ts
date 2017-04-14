import { Component, OnInit } from '@angular/core';
import {ForecastService} from "../../services/forecast/forecast.service";
import {ActivatedRoute, Params} from "@angular/router";
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

  constructor(
    private foreCastService: ForecastService,
    private route: ActivatedRoute,
    private helperService: HelperService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.city = params['city'];
      this.foreCastService.getWeather(this.city)
        .then(weather => this.weather = weather)
        .catch(error => this.error = error);
    });
  }

  formatDate(date): String {
    return this.helperService.formatHeaderFromDate(date);
  }

}