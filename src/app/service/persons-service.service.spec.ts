import { TestBed } from '@angular/core/testing';

import { PersonsServiceService } from './persons-service.service';

describe('PersonsServiceService', () => {
  let service: PersonsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
