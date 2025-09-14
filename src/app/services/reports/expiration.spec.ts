import { TestBed } from '@angular/core/testing';

import { Expiration } from './expiration';

describe('Expiration', () => {
  let service: Expiration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Expiration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
