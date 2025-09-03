import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSales } from './update-sales';

describe('UpdateSales', () => {
  let component: UpdateSales;
  let fixture: ComponentFixture<UpdateSales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
