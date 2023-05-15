import { IPoliticianForm } from 'src/app/data/schema/politician';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPoliticalParty, IPoliticalPartyForm } from '../../../../data/schema/political-party';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractFormComponent } from '../../../../shared/forms/abstractForm';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { Utils } from '../../../../shared/utils/utils';
import { politicianAgeValidator } from '../../../../shared/forms/validators/politician-age-validator';

@Component({
  selector: 'app-party-form',
  templateUrl: './party-form.component.html',
  styleUrls: ['./party-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartyFormComponent extends AbstractFormComponent implements OnInit {
  @Input()
  public set party(value: IPoliticalParty | null) {
    if (value) {
      this._party = value;
      this.initializeFormData();
    }
  }

  public get party(): IPoliticalParty {
    return this._party;
  }

  public partyForm = this._fb.group<IPoliticalPartyForm>({
    name: this._fb.nonNullable.control('', { validators: Validators.required }),
    imageUrl: this._fb.nonNullable.control('', {
      validators: [Validators.required, Validators.pattern(Utils.URL_PATTERN)],
    }),
    tags: this._fb.nonNullable.control([''], Validators.required),
    politicians: this._fb.array<FormGroup<IPoliticianForm>>([]),
  });

  public tags: string[] = [];

  public addOnBlur = true;

  public readonly separatorKeysCodes = [ENTER, COMMA] as const;

  private _party: IPoliticalParty;

  constructor(private _fb: FormBuilder) {
    super();
  }

  public ngOnInit(): void {
    this.initializeFormData();
  }

  public get politiciansFormArray(): FormArray<FormGroup<IPoliticianForm>> | null {
    return this.partyForm?.controls.politicians ?? null;
  }

  public override submit(): void {
    if (this.partyForm.valid) {
      this.partyForm.patchValue({
        tags: [...this.tags], //Make sure that tags control has current tags, mat-chips behavior is odd
      });
      this.submitEvent.emit(this.partyForm.value);
    }
  }

  public addPolitician(): void {
    const politicianForm = this._fb.group<IPoliticianForm>({
      fullName: this._fb.control('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      birthDate: this._fb.control('', {
        nonNullable: true,
        validators: [Validators.required, politicianAgeValidator()],
      }),
      imageUrl: this._fb.control('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(Utils.URL_PATTERN)],
      }),
      facebookUrl: this._fb.control('', Validators.pattern(Utils.URL_PATTERN)),
      instagramUrl: this._fb.control('', Validators.pattern(Utils.URL_PATTERN)),
      twitterUrl: this._fb.control('', Validators.pattern(Utils.URL_PATTERN)),
    });

    if (this.politiciansFormArray) {
      this.politiciansFormArray.push(politicianForm);
    }
  }

  public removePolitician(index: number): void {
    if (this.politiciansFormArray) {
      this.politiciansFormArray.removeAt(index);
    }
  }

  public addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }

  public removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  public editTag(tag: string, event: MatChipEditedEvent): void {
    const value = event.value.trim();

    if (!value) {
      this.removeTag(tag);

      return;
    }

    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags[index] = value;
    }
  }

  private initializeFormData(): void {
    this.addPolitician(); //Start politicians formArray with 1 politician

    if (this.party) {
      this.partyForm.removeControl('politicians');
      this.tags = [...this.party.tags]; //If user didn't trigger blur event in mat-chips, the latest values are not added.

      this.partyForm.patchValue({
        name: this.party.name,
        imageUrl: this.party.imageUrl,
        tags: [...this.party.tags],
      });
    }

  }
}
