import { NotificationService } from './../../../../shared/service/notification.service';
import { Router } from '@angular/router';
import { PoliticalPartiesService } from './../../../../data/service/political-parties.service';
import { IPoliticalParty } from './../../../../data/schema/political-party';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-party',
  templateUrl: './add-party.component.html',
  styleUrls: ['./add-party.component.scss'],
})
export class AddPartyComponent {
  constructor(
    private _partiesService: PoliticalPartiesService,
    private _router: Router,
    private _notificationService: NotificationService
  ) {}

  public onSubmit(party: IPoliticalParty) {
    if (party.politicians.length < 1) {
      this._notificationService.showError('error-politician-required');
      return;
    }
    this._partiesService.createPoliticalParty(party).subscribe(() => this.navigateBack());
  }

  public navigateBack() {
    this._router.navigate(['/news']);
  }
}
