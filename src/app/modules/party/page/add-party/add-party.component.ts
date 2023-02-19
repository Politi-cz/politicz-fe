import { Store } from '@ngxs/store';
import { NotificationService } from './../../../../shared/service/notification.service';
import { Router } from '@angular/router';
import { IPoliticalParty } from './../../../../data/schema/political-party';
import { Component } from '@angular/core';
import { PoliticalParty } from '../../action/political-party.action';

@Component({
  selector: 'app-add-party',
  templateUrl: './add-party.component.html',
  styleUrls: ['./add-party.component.scss'],
})
export class AddPartyComponent {
  constructor(
    private _router: Router,
    private _notificationService: NotificationService,
    private _store: Store,
  ) {}

  public onSubmit(party: IPoliticalParty): void {
    if (party.politicians.length < 1) {
      this._notificationService.showError('error-politician-required');

      return;
    }
    this._store
      .dispatch(new PoliticalParty.CreatePoliticalParty(party))
      .subscribe(() => this.navigateBack());
  }

  public navigateBack(): void {
    this._router.navigate(['/news']);
  }
}
