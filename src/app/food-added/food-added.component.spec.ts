import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAddedComponent } from './food-added.component';

describe('FoodAddedComponent', () => {
  let component: FoodAddedComponent;
  let fixture: ComponentFixture<FoodAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodAddedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
