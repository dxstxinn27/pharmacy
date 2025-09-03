import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalesSummary } from './create-sales-summary';

describe('CreateSalesSummary', () => {
  let component: CreateSalesSummary;
  let fixture: ComponentFixture<CreateSalesSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSalesSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSalesSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
