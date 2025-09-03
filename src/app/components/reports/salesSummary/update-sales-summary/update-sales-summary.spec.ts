import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSalesSummary } from './update-sales-summary';

describe('UpdateSalesSummary', () => {
  let component: UpdateSalesSummary;
  let fixture: ComponentFixture<UpdateSalesSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSalesSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSalesSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
