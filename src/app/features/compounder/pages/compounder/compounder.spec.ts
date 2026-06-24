import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compounder } from './compounder';

describe('Compounder', () => {
  let component: Compounder;
  let fixture: ComponentFixture<Compounder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compounder],
    }).compileComponents();

    fixture = TestBed.createComponent(Compounder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
