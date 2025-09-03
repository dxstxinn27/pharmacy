import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLots } from './show-lots';

describe('ShowLots', () => {
  let component: ShowLots;
  let fixture: ComponentFixture<ShowLots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowLots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLots);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
