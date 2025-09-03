import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomers } from './show-customers';

describe('ShowCustomers', () => {
  let component: ShowCustomers;
  let fixture: ComponentFixture<ShowCustomers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCustomers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCustomers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
