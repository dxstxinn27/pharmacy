import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipes } from './create-recipes';

describe('CreateRecipes', () => {
  let component: CreateRecipes;
  let fixture: ComponentFixture<CreateRecipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRecipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRecipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
