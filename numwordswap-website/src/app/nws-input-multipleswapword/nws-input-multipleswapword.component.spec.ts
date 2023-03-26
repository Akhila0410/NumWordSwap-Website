import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsInputMultipleswapwordComponent } from './nws-input-multipleswapword.component';

describe('NwsInputMultipleswapwordComponent', () => {
  let component: NwsInputMultipleswapwordComponent;
  let fixture: ComponentFixture<NwsInputMultipleswapwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsInputMultipleswapwordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NwsInputMultipleswapwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
