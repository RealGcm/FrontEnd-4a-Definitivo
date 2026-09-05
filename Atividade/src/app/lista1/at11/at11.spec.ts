import { ComponentFixture, TestBed } from '@angular/core/testing';

import { At11 } from './at11';

describe('At11', () => {
  let component: At11;
  let fixture: ComponentFixture<At11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [At11],
    }).compileComponents();

    fixture = TestBed.createComponent(At11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
