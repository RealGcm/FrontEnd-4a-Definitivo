import { ComponentFixture, TestBed } from '@angular/core/testing';

import { At6 } from './at6';

describe('At6', () => {
  let component: At6;
  let fixture: ComponentFixture<At6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [At6],
    }).compileComponents();

    fixture = TestBed.createComponent(At6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
