import { ComponentFixture, TestBed } from '@angular/core/testing';

import { At4 } from './at4';

describe('At4', () => {
  let component: At4;
  let fixture: ComponentFixture<At4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [At4],
    }).compileComponents();

    fixture = TestBed.createComponent(At4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
