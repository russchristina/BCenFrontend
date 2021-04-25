import { TestBed } from '@angular/core/testing';

import { ResponsibilityService } from './responsibility.service';

describe('ResponsibilityService', () => {
  let service: ResponsibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
