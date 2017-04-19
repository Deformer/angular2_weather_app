import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PickCityComponent} from "./components/pick-city/pick-city.component";
import {ForecastComponent} from "./components/forecast/forecast.component";
import {DetailComponent} from "./components/detail/detail.component";


const routes: Routes = [
  {
    path: '',
    component: PickCityComponent
  },
  {
    path: 'weather/:city',
    component: ForecastComponent
  },
  {
    path: 'detail/:city/:index',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routedComponents = [];
