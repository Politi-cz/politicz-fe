import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPartyComponent } from './edit-party.component';

describe('EditPartyComponent', () => {
  let component: EditPartyComponent;
  let fixture: ComponentFixture<EditPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPartyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
