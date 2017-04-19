/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {DayIconComponent} from "./day-icon.component";

describe('DayIconComponent', () => {
  let component: DayIconComponent;
  let fixture: ComponentFixture<DayIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DayIconComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
