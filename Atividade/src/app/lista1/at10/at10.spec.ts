import { ComponentFixture, TestBed } from '@angular/core/testing';

import { At10 } from './at10';

describe('At10', () => {
  let component: At10;
  let fixture: ComponentFixture<At10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [At10],
    }).compileComponents();

    fixture = TestBed.createComponent(At10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
