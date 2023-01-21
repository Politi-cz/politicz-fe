import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoliticianComponent } from './add-politician.component';

describe('AddPoliticianComponent', () => {
  let component: AddPoliticianComponent;
  let fixture: ComponentFixture<AddPoliticianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPoliticianComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPoliticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
