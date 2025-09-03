import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomers } from './create-customers';

describe('CreateCustomers', () => {
  let component: CreateCustomers;
  let fixture: ComponentFixture<CreateCustomers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCustomers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
