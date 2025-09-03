import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSalesSummary } from './show-sales-summary';

describe('ShowSalesSummary', () => {
  let component: ShowSalesSummary;
  let fixture: ComponentFixture<ShowSalesSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSalesSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSalesSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
