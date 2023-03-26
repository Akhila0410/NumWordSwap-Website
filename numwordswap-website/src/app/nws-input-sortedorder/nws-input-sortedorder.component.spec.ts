import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsInputSortedorderComponent } from './nws-input-sortedorder.component';

describe('NwsInputSortedorderComponent', () => {
  let component: NwsInputSortedorderComponent;
  let fixture: ComponentFixture<NwsInputSortedorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwsInputSortedorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NwsInputSortedorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
