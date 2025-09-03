import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSalesDetail } from './update-sales-detail';

describe('UpdateSalesDetail', () => {
  let component: UpdateSalesDetail;
  let fixture: ComponentFixture<UpdateSalesDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSalesDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSalesDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
