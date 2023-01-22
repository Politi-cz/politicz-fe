import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianFormComponent } from './politician-form.component';

describe('PoliticianFormComponent', () => {
  let component: PoliticianFormComponent;
  let fixture: ComponentFixture<PoliticianFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticianFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticianFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
