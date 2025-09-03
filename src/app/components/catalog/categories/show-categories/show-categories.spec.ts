import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategories } from './show-categories';

describe('ShowCategories', () => {
  let component: ShowCategories;
  let fixture: ComponentFixture<ShowCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
