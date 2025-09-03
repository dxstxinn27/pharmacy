import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProviders } from './update-providers';

describe('UpdateProviders', () => {
  let component: UpdateProviders;
  let fixture: ComponentFixture<UpdateProviders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProviders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProviders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
