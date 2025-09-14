import { TestBed } from '@angular/core/testing';

import { SalesSummary } from './sales-summary';

describe('SalesSummary', () => {
  let service: SalesSummary;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesSummary);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
