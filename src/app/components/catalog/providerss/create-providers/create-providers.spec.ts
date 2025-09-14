import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProviders } from './create-providers';

describe('CreateProviders', () => {
  let component: CreateProviders;
  let fixture: ComponentFixture<CreateProviders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProviders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProviders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
