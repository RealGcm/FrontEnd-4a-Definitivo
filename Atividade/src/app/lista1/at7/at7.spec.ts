import { ComponentFixture, TestBed } from '@angular/core/testing';

import { At7 } from './at7';

describe('At7', () => {
  let component: At7;
  let fixture: ComponentFixture<At7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [At7],
    }).compileComponents();

    fixture = TestBed.createComponent(At7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
