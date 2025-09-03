import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalesDetail } from './create-sales-detail';

describe('CreateSalesDetail', () => {
  let component: CreateSalesDetail;
  let fixture: ComponentFixture<CreateSalesDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSalesDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSalesDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
