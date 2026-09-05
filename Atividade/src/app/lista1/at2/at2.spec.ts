import { ComponentFixture, TestBed } from '@angular/core/testing';

import { At2 } from './at2';

describe('At2', () => {
  let component: At2;
  let fixture: ComponentFixture<At2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [At2],
    }).compileComponents();

    fixture = TestBed.createComponent(At2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
