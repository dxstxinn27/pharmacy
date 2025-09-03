import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaxes } from './create-taxes';

describe('CreateTaxes', () => {
  let component: CreateTaxes;
  let fixture: ComponentFixture<CreateTaxes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTaxes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTaxes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
