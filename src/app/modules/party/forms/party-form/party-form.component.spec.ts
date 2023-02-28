import { IPoliticalParty } from './../../../../data/schema/political-party';
import { FormBuilder } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PartyFormComponent } from './party-form.component';

describe('PartyFormComponent', () => {
  let component: PartyFormComponent;
  let fixture: ComponentFixture<PartyFormComponent>;

  const mockPoliticalParty: IPoliticalParty = {
    image: 'ss',
    name: 'test',
    id: '5',
    tags: ['brk', 'frk'],
    politicians: [
      {
        birthDate: new Date(),
        fullName: 'karel',
        profileImageUrl: 'ss',
        facebookUrl: 'dsds',
        id: '5',
        instagramUrl: 'dasdas',
        twitterUrl: 'dsdas',
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartyFormComponent],
      imports: [TranslateModule.forRoot()],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(PartyFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  it('Should contain politicians formArray when initialized', () => {
    fixture.detectChanges();

    expect(component.partyForm.controls.politicians).toBeDefined();
  });

  it('Should remove politicians formArray when political party is passed in input', () => {
    component.party = mockPoliticalParty;
    fixture.detectChanges();

    expect(component.partyForm.controls.politicians).toBeUndefined();
  });

  it('Should fill values in partyForm in controls when party is passed', () => {
    component.party = mockPoliticalParty;
    fixture.detectChanges();

    const partyControls = component.partyForm.controls;

    expect(partyControls.image.value).toBe(mockPoliticalParty.image);
    expect(partyControls.name.value).toBe(mockPoliticalParty.name);
    expect(partyControls.tags.value).toEqual(expect.arrayContaining(mockPoliticalParty.tags));
  });

  it('Should not submit form when required values not filled', () => {
    fixture.detectChanges();
    jest.spyOn(component.submitEvent, 'emit');
    component.submit();
    fixture.detectChanges();

    expect(component.submitEvent.emit).not.toHaveBeenCalled();
  });

  it('Should submit form', () => {
    component.party = mockPoliticalParty;
    fixture.detectChanges();
    jest.spyOn(component.submitEvent, 'emit');
    component.submit();
    fixture.detectChanges();

    expect(component.submitEvent.emit).toHaveBeenCalled();
    expect(component.submitEvent.emit).toHaveBeenCalledTimes(1);
  });
});
