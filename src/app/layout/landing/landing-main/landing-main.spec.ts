import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMain } from './landing-main';

describe('LandingMain', () => {
  let component: LandingMain;
  let fixture: ComponentFixture<LandingMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingMain],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
