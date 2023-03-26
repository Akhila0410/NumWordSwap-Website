import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsInputMaxnumberComponent } from './nws-input-maxnumber.component';

describe('NwsInputMaxnumberComponent', () => {
  let component: NwsInputMaxnumberComponent;
  let fixture: ComponentFixture<NwsInputMaxnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsInputMaxnumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NwsInputMaxnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
