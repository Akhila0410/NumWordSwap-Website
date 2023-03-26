import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsInputMultipleswapwordEditComponent } from './nws-input-multipleswapword-edit.component';

describe('NwsInputMultipleswapwordEditComponent', () => {
  let component: NwsInputMultipleswapwordEditComponent;
  let fixture: ComponentFixture<NwsInputMultipleswapwordEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsInputMultipleswapwordEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NwsInputMultipleswapwordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
