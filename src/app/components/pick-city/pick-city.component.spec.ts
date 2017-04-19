/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {PickCityComponent} from "./pick-city.component";

describe('PickCityComponent', () => {
  let component: PickCityComponent;
  let fixture: ComponentFixture<PickCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PickCityComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
