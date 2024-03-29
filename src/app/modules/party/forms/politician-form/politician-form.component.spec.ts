import { IPolitician } from '../../../../data/schema/politician';
import { FormBuilder } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianFormComponent } from './politician-form.component';
import { TranslateModule } from '@ngx-translate/core';

describe('PoliticianFormComponent', () => {
  const politician: IPolitician = {
    birthDate: new Date('1976-01-01'),
    fullName: 'Tomio Okamura',
    imageUrl: 'https://profile.cz',
    facebookUrl: 'https://fb.com',
    instagramUrl: 'https://ig.com',
    twitterUrl: 'https://twitter.com',
  };

  const emptyPoliticianFormValues = {
    fullName: '',
    birthDate: '',
    imageUrl: '',
    instagramUrl: '',
    twitterUrl: '',
    facebookUrl: '',
  };

  const politicianWithEmptyNotRequiredUrls: IPolitician = {
    birthDate: new Date('1976-01-01'),
    fullName: 'Tomio Okamura',
    imageUrl: 'https://profile.cz',
    facebookUrl: '',
    instagramUrl: '',
    twitterUrl: '',
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

    const fullNameControl = component.politicianForm.get('fullName');
    const birthDateControl = component.politicianForm.get('birthDate');
    const imageUrl = component.politicianForm.get('imageUrl');

    fullNameControl?.setValue('Karel Novak');
    imageUrl?.setValue('https://google.com');

    fixture.detectChanges();

    expect(component.politicianForm.invalid).toBeTruthy();
    expect(component.submitEvent.emit).not.toHaveBeenCalled();
    expect(component.politicianForm.valid).toBeFalsy();
    expect(birthDateControl?.valid).toBeFalsy();
  });

  it('Should not submit form when politician age is below 21', () => {
    fixture.detectChanges();

    jest.spyOn(component.submitEvent, 'emit');

    const birthDateControl = component.politicianForm.get('birthDate');

    birthDateControl?.setValue(new Date());

    fixture.detectChanges();

    expect(component.politicianForm.invalid).toBeTruthy();
    expect(component.submitEvent.emit).not.toHaveBeenCalled();
    expect(birthDateControl?.valid).toBeFalsy();
  });

  it('Should not send form when imageUrl is not in valid format', () => {
    component.politician = { ...politicianWithEmptyNotRequiredUrls, imageUrl: 'invalid' };
    fixture.detectChanges();

    jest.spyOn(component.submitEvent, 'emit');

    component.submit(component.politicianForm);
    fixture.detectChanges();

    expect(component.submitEvent.emit).not.toHaveBeenCalled();
    expect(component.politicianForm.valid).toBeFalsy();
  });

  it('Should not send form when optional urls are not in valid format', () => {
    component.politician = {
      ...politicianWithEmptyNotRequiredUrls,
      instagramUrl: 'invalidUrl',
      facebookUrl: 'invalidUrl',
      twitterUrl: 'invalidUrl',
    };
    fixture.detectChanges();

    jest.spyOn(component.submitEvent, 'emit');

    component.submit(component.politicianForm);
    fixture.detectChanges();

    expect(component.submitEvent.emit).not.toHaveBeenCalled();
    expect(component.politicianForm.valid).toBeFalsy();
  });
});
