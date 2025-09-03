import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInventory } from './show-inventory';

describe('ShowInventory', () => {
  let component: ShowInventory;
  let fixture: ComponentFixture<ShowInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowInventory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
