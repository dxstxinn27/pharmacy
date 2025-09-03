import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMedications } from './show-medications';

describe('ShowMedications', () => {
  let component: ShowMedications;
  let fixture: ComponentFixture<ShowMedications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMedications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMedications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
