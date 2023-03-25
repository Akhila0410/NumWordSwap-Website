import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumSwapResultComponent } from './num-swap-result.component';

describe('NumSwapResultComponent', () => {
  let component: NumSwapResultComponent;
  let fixture: ComponentFixture<NumSwapResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumSwapResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumSwapResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
