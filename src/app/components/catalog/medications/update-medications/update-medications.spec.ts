import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedications } from './update-medications';

describe('UpdateMedications', () => {
  let component: UpdateMedications;
  let fixture: ComponentFixture<UpdateMedications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMedications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMedications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
