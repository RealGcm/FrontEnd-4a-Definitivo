import { ComponentFixture, TestBed } from '@angular/core/testing';

import { At5 } from './at5';

describe('At5', () => {
  let component: At5;
  let fixture: ComponentFixture<At5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [At5],
    }).compileComponents();

    fixture = TestBed.createComponent(At5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
