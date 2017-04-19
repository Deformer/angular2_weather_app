import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./components/app/app.component";
import {PickCityComponent} from "./components/pick-city/pick-city.component";
import {AppRoutingModule, routedComponents} from "./app-routing.module";
import {MainHeaderComponent} from "./components/main-header/main-header.component";
import {CityFormComponent} from "./components/city-form/city-form.component";
import {ForecastComponent} from "./components/forecast/forecast.component";
import {WeatherService} from "./services/weather/weather.service";
import {DayIconComponent} from "./components/day-icon/day-icon.component";
import {HelperService} from "./services/helper/helper.service";
import {DetailComponent} from "./components/detail/detail.component";
import {ErrorComponent} from "./components/error/error.component";

@NgModule({
  declarations: [
    AppComponent,
    PickCityComponent,
    routedComponents,
    MainHeaderComponent,
    CityFormComponent,
    ForecastComponent,
    DayIconComponent,
    DetailComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WeatherService,
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
