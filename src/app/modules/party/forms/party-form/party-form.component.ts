import { IPoliticianForm } from 'src/app/data/schema/politician';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { IPoliticalParty, IPoliticalPartyForm } from '../../../../data/schema/political-party';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractFormComponent } from '../../../../shared/forms/abstractForm';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-party-form',
  templateUrl: './party-form.component.html',
  styleUrls: ['./party-form.component.scss'],
})
export class PartyFormComponent extends AbstractFormComponent implements OnInit {
  @Input() party: IPoliticalParty | null;

  public partyForm = this._fb.group<IPoliticalPartyForm>({
    name: this._fb.nonNullable.control('', { validators: Validators.required }),
    imageUrl: this._fb.nonNullable.control('', Validators.required),
    tags: this._fb.nonNullable.control([''], Validators.required),
    politicians: this._fb.array<FormGroup<IPoliticianForm>>([]),
  });

  public tags: string[] = [];

  public addOnBlur = true;

  public readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private _fb: FormBuilder) {
    super();
  }

  public ngOnInit(): void {
    if (this.party) {
      this.partyForm.removeControl('politicians');
      this.tags = [...this.party.tags]; //If user didn't triggers blur event in mat-chips, the latest values are not added.

      this.partyForm.patchValue({
        name: this.party.name,
        imageUrl: this.party.imageUrl,
        tags: [...this.party.tags],
      });
    }
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
      fullName: this._fb.control('', { nonNullable: true, validators: Validators.required }),
      birthDate: this._fb.control('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      imageUrl: this._fb.control('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      facebookUrl: this._fb.control(''),
      instagramUrl: this._fb.control(''),
      twitterUrl: this._fb.control(''),
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
}
