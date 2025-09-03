import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpirations } from './update-expirations';

describe('UpdateExpirations', () => {
  let component: UpdateExpirations;
  let fixture: ComponentFixture<UpdateExpirations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateExpirations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateExpirations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
