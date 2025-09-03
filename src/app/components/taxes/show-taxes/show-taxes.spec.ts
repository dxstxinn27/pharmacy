import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTaxes } from './show-taxes';

describe('ShowTaxes', () => {
  let component: ShowTaxes;
  let fixture: ComponentFixture<ShowTaxes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowTaxes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTaxes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
