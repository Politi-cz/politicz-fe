import { IPoliticianForm } from './../../../../data/schema/politician';
import { AbstractFormComponent } from '../../../../shared/forms/abstractForm';
import { IPolitician } from './../../../../data/schema/politician';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-politician-form',
  templateUrl: './politician-form.component.html',
  styleUrls: ['./politician-form.component.scss'],
})
export class PoliticianFormComponent extends AbstractFormComponent implements OnInit {
  @Input() politician: IPolitician | undefined;

  public politicianForm = this._fb.group<IPoliticianForm>({
    fullName: this._fb.control('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    birthDate: this._fb.control('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    profileImageUrl: this._fb.control('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    facebookUrl: this._fb.control(''),
    instagramUrl: this._fb.control(''),
    twitterUrl: this._fb.control(''),
  });

  constructor(private _fb: FormBuilder) {
    super();
  }

  public ngOnInit(): void {
    if (this.politician) {
      this.politicianForm.patchValue({
        fullName: this.politician.fullName,
        birthDate: this.politician.birthDate,
        facebookUrl: this.politician.facebookUrl,
        instagramUrl: this.politician.instagramUrl,
        profileImageUrl: this.politician.profileImageUrl,
        twitterUrl: this.politician.twitterUrl,
      });
    }
  }
}
