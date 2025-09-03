import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePayments } from './update-payments';

describe('UpdatePayments', () => {
  let component: UpdatePayments;
  let fixture: ComponentFixture<UpdatePayments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePayments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePayments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
