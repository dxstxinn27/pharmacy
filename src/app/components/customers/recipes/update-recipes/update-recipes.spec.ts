import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecipes } from './update-recipes';

describe('UpdateRecipes', () => {
  let component: UpdateRecipes;
  let fixture: ComponentFixture<UpdateRecipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRecipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRecipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
