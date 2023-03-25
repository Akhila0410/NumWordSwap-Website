import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumSwapInputComponent } from './num-swap-input.component';

describe('NumSwapInputComponent', () => {
  let component: NumSwapInputComponent;
  let fixture: ComponentFixture<NumSwapInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumSwapInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumSwapInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
