import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyActionsComponent } from './party-actions.component';

describe('PartyActionsComponent', () => {
  let component: PartyActionsComponent;
  let fixture: ComponentFixture<PartyActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartyActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartyActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
