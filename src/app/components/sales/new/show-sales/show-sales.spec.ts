import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSales } from './show-sales';

describe('ShowSales', () => {
  let component: ShowSales;
  let fixture: ComponentFixture<ShowSales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
