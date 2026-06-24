import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateUi } from './state-ui';

describe('StateUi', () => {
  let component: StateUi;
  let fixture: ComponentFixture<StateUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateUi],
    }).compileComponents();

    fixture = TestBed.createComponent(StateUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
