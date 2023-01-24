import { Router, ActivatedRoute } from '@angular/router';
import { IPoliticianRequest } from './../../../../data/schema/politician-request';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { PoliticalParty } from '../../action/political-party.action';

@Component({
  selector: 'app-add-politician',
  templateUrl: './add-politician.component.html',
  styleUrls: ['./add-politician.component.scss'],
})
export class AddPoliticianComponent implements OnInit {
  public politicalPartyId: string;

  constructor(private _store: Store, private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => (this.politicalPartyId = params.get('id')!));
  }

  public onSubmit(politician: IPoliticianRequest) {
    this._store.dispatch(new PoliticalParty.AddPolitician(politician));
    this.navigateBack();
  }

  public navigateBack() {
    this._router.navigate(['/political-party'], { queryParams: { id: this.politicalPartyId } });
  }
}
