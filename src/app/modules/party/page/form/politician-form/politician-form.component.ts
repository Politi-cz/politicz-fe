import { IPolitician } from './../../../../../data/schema/politician';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddPoliticianForm } from './../../../../../data/schema/add-politician-form';

@Component({
  selector: 'app-politician-form',
  templateUrl: './politician-form.component.html',
  styleUrls: ['./politician-form.component.scss'],
})
export class PoliticianFormComponent implements OnInit {
  @Input() politician: IPolitician;

  @Output() submitEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();

  public politicianForm: FormGroup<AddPoliticianForm>;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.politicianForm = this._fb.group<AddPoliticianForm>({
      fullName: this._fb.control(this.politician?.fullName, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      birthDate: this._fb.control(this.politician?.birthDate, {
        //TODO: Date in czech locale format, czech months
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

  submit() {
    if (this.politicianForm.valid) {
      this.submitEvent.emit(this.politicianForm.value);
    }
  }

  cancel() {
    this.cancelEvent.emit();
  }
}
