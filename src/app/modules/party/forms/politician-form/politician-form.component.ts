import { IPoliticianForm } from '../../../../data/schema/politician';
import { AbstractFormComponent } from '../../../../shared/forms/abstractForm';
import { IPolitician } from '../../../../data/schema/politician';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Utils } from '../../../../shared/utils/utils';

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
    imageUrl: this._fb.control('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(Utils.URL_PATTERN)],
    }),
    facebookUrl: this._fb.control('', Validators.pattern(Utils.URL_PATTERN)),
    instagramUrl: this._fb.control('', Validators.pattern(Utils.URL_PATTERN)),
    twitterUrl: this._fb.control('', Validators.pattern(Utils.URL_PATTERN)),
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
        imageUrl: this.politician.imageUrl,
        twitterUrl: this.politician.twitterUrl,
      });
    }
  }
}
