import { FormBuilder, Validators } from '@angular/forms';
import { IPoliticalParty } from './../../../../data/schema/political-party';
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

  public partyForm = this._fb.nonNullable.group({
    name: this._fb.control('', Validators.required),
    image: this._fb.control('', Validators.required),
    tagsControl: this._fb.control(''),
    politicians: this._fb.array([]),
  });
  public tags: string[] = [];
  public addOnBlur = true;
  public readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private _fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    if (this.party) {
      this.partyForm.patchValue({
        name: this.party.name,
        image: this.party.image,
      });
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  edit(tag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(tag);
      return;
    }

    // Edit existing fruit
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index] = value;
    }
  }
}
