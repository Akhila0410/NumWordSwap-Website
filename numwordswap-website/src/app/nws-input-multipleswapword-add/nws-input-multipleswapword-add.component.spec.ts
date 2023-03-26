import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsInputMultipleswapwordAddComponent } from './nws-input-multipleswapword-add.component';

describe('NwsInputMultipleswapwordComponent', () => {
  let component: NwsInputMultipleswapwordAddComponent;
  let fixture: ComponentFixture<NwsInputMultipleswapwordAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NwsInputMultipleswapwordAddComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NwsInputMultipleswapwordAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
