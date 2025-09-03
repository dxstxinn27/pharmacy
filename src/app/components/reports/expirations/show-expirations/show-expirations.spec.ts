import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExpirations } from './show-expirations';

describe('ShowExpirations', () => {
  let component: ShowExpirations;
  let fixture: ComponentFixture<ShowExpirations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowExpirations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowExpirations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
