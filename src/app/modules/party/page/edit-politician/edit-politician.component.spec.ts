import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPoliticianComponent } from './edit-politician.component';

describe('EditPoliticianComponent', () => {
  let component: EditPoliticianComponent;
  let fixture: ComponentFixture<EditPoliticianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPoliticianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPoliticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
