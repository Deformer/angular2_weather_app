import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
  private days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor() { }

  formatHeaderFromDate(time_sec): String {
    const date = new Date(time_sec * 1000),
      day = this.days[date.getDay()],
      month = date.toString().split(' ')[1],
      day_of_month = date.getDate();
    return `${day}, ${month} ${day_of_month}`;
  }

  formatTemp(temp): Number {
    return Math.round((temp - 273) * 100) / 100;
  }

}
