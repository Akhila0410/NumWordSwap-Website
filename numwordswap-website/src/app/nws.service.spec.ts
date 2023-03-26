import { TestBed } from '@angular/core/testing';

import { NwsService } from './nws.service';

describe('NwsService', () => {
  let service: NwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
