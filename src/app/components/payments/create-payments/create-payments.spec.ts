import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayments } from './create-payments';

describe('CreatePayments', () => {
  let component: CreatePayments;
  let fixture: ComponentFixture<CreatePayments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePayments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePayments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
