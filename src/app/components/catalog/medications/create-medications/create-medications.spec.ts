import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedications } from './create-medications';

describe('CreateMedications', () => {
  let component: CreateMedications;
  let fixture: ComponentFixture<CreateMedications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMedications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMedications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
