import { IPolitician } from './../../../../data/schema/politician';
import { FormBuilder } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianFormComponent } from './politician-form.component';
import { TranslateModule } from '@ngx-translate/core';

describe('PoliticianFormComponent', () => {
  const politician: IPolitician = {
    birthDate: new Date(),
    fullname: 'Tomio Okamura',
    profileImageUrl: 'https://profile.cz',
    facebookUrl: 'https://fb.com',
    instagramUrl: 'https://ig.com',
    twitterUrl: 'https://twitter.com',
  };

  const emptyPoliticianFormValues = {
    fullname: '',
    birthDate: '',
    profileImageUrl: '',
    instagramUrl: '',
    twitterUrl: '',
    facebookUrl: '',
  };

  let component: PoliticianFormComponent;
  let fixture: ComponentFixture<PoliticianFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoliticianFormComponent],
      imports: [TranslateModule.forRoot()],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticianFormComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should be initialized with values', () => {
    component.politician = { ...politician };
    fixture.detectChanges();

    expect(component.politicianForm.value).toEqual(politician);
  });

  it('Form should be submitted', () => {
    component.politician = { ...politician };
    fixture.detectChanges();

    jest.spyOn(component.submitEvent, 'emit');

    component.submit(component.politicianForm);
    fixture.detectChanges();

    expect(component.submitEvent.emit).toHaveBeenCalled();
    expect(component.submitEvent.emit).toHaveBeenCalledTimes(1);
    expect(component.politicianForm.valid).toBeTruthy();
    expect(component.politicianForm.value).toEqual(politician);
  });

  it('Form should not be submitted if politician hasnt been passed', () => {
    fixture.detectChanges();
    jest.spyOn(component.submitEvent, 'emit');
    component.submit(component.politicianForm);

    fixture.detectChanges();

    expect(component.submitEvent.emit).not.toHaveBeenCalled();
    expect(component.politicianForm.value).toEqual(emptyPoliticianFormValues);
    expect(component.politicianForm.valid).toBeFalsy();
  });

  it('Form shouldnt be submitted when required birthDate value not filled', () => {
    fixture.detectChanges();

    jest.spyOn(component.submitEvent, 'emit');

    const fullNameControl = component.politicianForm.get('fullname');
    const birthDateControl = component.politicianForm.get('birthDateControl');
    const profileImageUrl = component.politicianForm.get('profileImageUrl');

    fullNameControl?.setValue('Karel Novak');
    profileImageUrl?.setValue('https://google.com');

    fixture.detectChanges();

    expect(component.politicianForm.invalid).toBeTruthy();
    expect(component.submitEvent.emit).not.toHaveBeenCalled();
    expect(component.politicianForm.valid).toBeFalsy();
    expect(birthDateControl?.valid).toBeFalsy();
  });
});
