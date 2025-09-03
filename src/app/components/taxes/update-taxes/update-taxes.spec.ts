import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaxes } from './update-taxes';

describe('UpdateTaxes', () => {
  let component: UpdateTaxes;
  let fixture: ComponentFixture<UpdateTaxes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTaxes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTaxes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
