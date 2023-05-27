import { IPolitician } from '../../../../data/schema/politician';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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

  public ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      // TODO Improve! When ID is undefined or not found, redirect to home page
      this.politicalPartyId = params.get('id')!;
      this._store.dispatch(new PoliticalParty.GetPoliticalParty(this.politicalPartyId));
    });
  }

  public onSubmit(politician: IPolitician): void {
    this._store
      .dispatch(new PoliticalParty.AddPolitician(politician))
      .subscribe(() => this.navigateBack());
  }

  public navigateBack(): void {
    this._router.navigate(['/political-party/detail/' + this.politicalPartyId]);
  }
}
