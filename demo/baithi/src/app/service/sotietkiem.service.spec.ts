import { TestBed } from '@angular/core/testing';

import { SotietkiemService } from './sotietkiem.service';

describe('SotietkiemService', () => {
  let service: SotietkiemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SotietkiemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
