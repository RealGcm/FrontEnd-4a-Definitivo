import { ComponentFixture, TestBed } from '@angular/core/testing';

import { At8 } from './at8';

describe('At8', () => {
  let component: At8;
  let fixture: ComponentFixture<At8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [At8],
    }).compileComponents();

    fixture = TestBed.createComponent(At8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
