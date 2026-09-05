import { ComponentFixture, TestBed } from '@angular/core/testing';

import { At3 } from './at3';

describe('At3', () => {
  let component: At3;
  let fixture: ComponentFixture<At3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [At3],
    }).compileComponents();

    fixture = TestBed.createComponent(At3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
