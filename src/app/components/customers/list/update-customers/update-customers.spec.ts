import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomers } from './update-customers';

describe('UpdateCustomers', () => {
  let component: UpdateCustomers;
  let fixture: ComponentFixture<UpdateCustomers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCustomers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCustomers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
