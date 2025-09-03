import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSales } from './create-sales';

describe('CreateSales', () => {
  let component: CreateSales;
  let fixture: ComponentFixture<CreateSales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
