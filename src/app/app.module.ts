import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { PickCityComponent } from './components/pick-city/pick-city.component';
import {AppRoutingModule, routedComponents} from './app-routing.module';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { CityFormComponent } from './components/city-form/city-form.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import {ForecastService} from "./services/forecast/forecast.service";
import { DayIconComponent } from './components/day-icon/day-icon.component';
import {HelperService} from "./services/helper/helper.service";
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PickCityComponent,
    routedComponents,
    MainHeaderComponent,
    CityFormComponent,
    ForecastComponent,
    DayIconComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ForecastService,
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
