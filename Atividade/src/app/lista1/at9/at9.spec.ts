import { ComponentFixture, TestBed } from '@angular/core/testing';

import { At9 } from './at9';

describe('At9', () => {
  let component: At9;
  let fixture: ComponentFixture<At9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [At9],
    }).compileComponents();

    fixture = TestBed.createComponent(At9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
