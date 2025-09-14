import { TestBed } from '@angular/core/testing';

import { Taxe } from './taxe';

describe('Taxe', () => {
  let service: Taxe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Taxe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
