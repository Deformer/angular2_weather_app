import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class WeatherService {
  weather: Object;
  key: String = '81a09f91016cb1280b4c9870d94ba6ef';

  constructor(private http: Http) {
  }

  private makeUrl(city): string {
    return `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${this.key}`;
  }

  getWeatherList(city): Promise<Object> {
    return this.http.get(this.makeUrl(city))
      .toPromise()
      .then(response => {
        return response.json();
      });
  }

  getWeatherForDay(city, day): Promise<Object> {
    if (day > 6) {
      return new Promise((resolve, reject) => {
        reject(new Error('Допустимый диапазон дней недели - от 0 до 6'));
      });
    }
    return this.http.get(this.makeUrl(city))
      .toPromise()
      .then(response => {
        return response.json().list[day];
      });
  }

}
