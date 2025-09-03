import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecipes } from './show-recipes';

describe('ShowRecipes', () => {
  let component: ShowRecipes;
  let fixture: ComponentFixture<ShowRecipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowRecipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRecipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
