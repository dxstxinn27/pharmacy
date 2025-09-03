import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSalesDetail } from './show-sales-detail';

describe('ShowSalesDetail', () => {
  let component: ShowSalesDetail;
  let fixture: ComponentFixture<ShowSalesDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSalesDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSalesDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
