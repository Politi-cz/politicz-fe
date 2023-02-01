import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IPoliticalParty } from './../../../../data/schema/political-party';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractFormComponent } from '../../../../shared/forms/abstractForm';

@Component({
  selector: 'app-party-form',
  templateUrl: './party-form.component.html',
  styleUrls: ['./party-form.component.scss'],
})
export class PartyFormComponent extends AbstractFormComponent implements OnInit {
  @Input() party: IPoliticalParty | null;

  public partyForm: FormGroup = this._fb.group({
    name: this._fb.control('', Validators.required),
    image: this._fb.control('', Validators.required),
    tagsControl: this._fb.control(''),
    politicians: this._fb.control(''),
  });

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
}
