import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ForecastService {
  weather: Object;
  key: String = '81a09f91016cb1280b4c9870d94ba6ef';
  constructor(private http: Http) {}

  private makeUrl(city): string {
    return `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${this.key}`;
  }

  getWeather(city): Promise<Object> {
      return this.http.get(this.makeUrl(city))
        .toPromise()
        .then(response => {
          return response.json();
        });
  }

}
