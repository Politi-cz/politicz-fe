import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActionsComponent } from './form-actions.component';

describe('FormActionsComponent', () => {
  let component: FormActionsComponent;
  let fixture: ComponentFixture<FormActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormActionsComponent],
    });
    fixture = TestBed.createComponent(FormActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
