import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { politicalPartyState } from './../../state/political-party.state';
import { IPoliticianRequest } from './../../../../data/schema/politician-request';
import { NotificationService } from './../../../../shared/service/notification.service';
import { AddPoliticianForm } from './../../../../data/schema/add-politician-form';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { PoliticalParty } from '../../action/political-party.action';

@Component({
  selector: 'app-add-politician',
  templateUrl: './add-politician.component.html',
  styleUrls: ['./add-politician.component.scss'],
})
export class AddPoliticianComponent implements OnInit {
  public politicianForm: FormGroup<AddPoliticianForm>;
  public politicalPartyId: string;

  constructor(
    private _fb: FormBuilder,
    private _notificationService: NotificationService,
    private _store: Store,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.politicianForm = this._fb.group<AddPoliticianForm>({
      name: this._fb.control('', { nonNullable: true, validators: [Validators.required] }),
      birthDate: this._fb.control('', { nonNullable: true, validators: [Validators.required] }),
      profileImageUrl: this._fb.control('', { nonNullable: true, validators: [Validators.required] }),
      facebookUrl: this._fb.control(null),
      instagramUrl: this._fb.control(null),
      twitterUrl: this._fb.control(null),
    });

    this._route.paramMap.subscribe(params => (this.politicalPartyId = params.get('id')!));
  }

  public onSubmit() {
    if (this.politicianForm.invalid) {
      this._notificationService.showError('form is invalid');
      return;
    }

    const request: IPoliticianRequest = {
      name: this.politicianForm.get('name')!.value,
      birthDate: new Date(this.politicianForm.get('birthDate')!.value),
      profileImageUrl: this.politicianForm.get('profileImageUrl')!.value,
      facebookUrl: this.politicianForm.get('facebookUrl')?.value ?? undefined,
      instagramUrl: this.politicianForm.get('instagramUrl')?.value ?? undefined,
      twitterUrl: this.politicianForm.get('twitterUrl')?.value ?? undefined,
    };

    this._store.dispatch(new PoliticalParty.AddPolitician(request));
    this.navigateBack();
  }

  public navigateBack() {
    this._router.navigate(['/political-party'], { queryParams: { id: this.politicalPartyId } });
  }
}
