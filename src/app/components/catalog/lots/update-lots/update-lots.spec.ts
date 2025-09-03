import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLots } from './update-lots';

describe('UpdateLots', () => {
  let component: UpdateLots;
  let fixture: ComponentFixture<UpdateLots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLots);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
