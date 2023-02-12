import { AbstractFormComponent } from '../../../../shared/forms/abstractForm';
import { IPolitician } from './../../../../data/schema/politician';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddPoliticianForm } from './../../../../data/schema/add-politician-form';

@Component({
  selector: 'app-politician-form',
  templateUrl: './politician-form.component.html',
  styleUrls: ['./politician-form.component.scss'],
})
export class PoliticianFormComponent extends AbstractFormComponent implements OnInit {
  @Input() politician: IPolitician | undefined;

  public politicianForm: FormGroup<AddPoliticianForm>; //TODO Refactor

  constructor(private _fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.politicianForm = this._fb.group<AddPoliticianForm>({
      fullName: this._fb.control(this.politician?.fullName, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      birthDate: this._fb.control(this.politician?.birthDate, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      profileImageUrl: this._fb.control(this.politician?.profileImageUrl, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      facebookUrl: this._fb.control(this.politician?.facebookUrl ?? null),
      instagramUrl: this._fb.control(this.politician?.instagramUrl ?? null),
      twitterUrl: this._fb.control(this.politician?.twitterUrl ?? null),
    });
  }
}
