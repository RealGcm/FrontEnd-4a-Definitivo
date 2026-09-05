import { ComponentFixture, TestBed } from '@angular/core/testing';
import { At1Component } from './at1';

describe('At1Component', () => {
  let component: At1Component;
  let fixture: ComponentFixture<At1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ At1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(At1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});