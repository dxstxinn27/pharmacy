import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpirations } from './create-expirations';

describe('CreateExpirations', () => {
  let component: CreateExpirations;
  let fixture: ComponentFixture<CreateExpirations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateExpirations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateExpirations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
