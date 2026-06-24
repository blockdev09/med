import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clinician } from './clinician';

describe('Clinician', () => {
  let component: Clinician;
  let fixture: ComponentFixture<Clinician>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clinician],
    }).compileComponents();

    fixture = TestBed.createComponent(Clinician);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
