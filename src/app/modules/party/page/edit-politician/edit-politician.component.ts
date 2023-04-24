import { PoliticalPartiesService } from '../../../../data/service/political-parties.service';
import { IPolitician } from '../../../../data/schema/politician';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { PoliticalParty } from '../../action/political-party.action';

@Component({
  selector: 'app-edit-politician',
  templateUrl: './edit-politician.component.html',
  styleUrls: ['./edit-politician.component.scss'],
})
export class EditPoliticianComponent implements OnInit {
  politician$: Observable<IPolitician>;

  private _politicalPartyId: string;

  private _politicianId: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _politicalPartiesService: PoliticalPartiesService,
    private _store: Store,
  ) {}

  public ngOnInit(): void {
    this.politician$ = this._route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this._politicalPartyId = params.get('id')!;
        this._politicianId = params.get('politicianId')!;
        this._store.dispatch(new PoliticalParty.GetPoliticalParty(this._politicalPartyId));

        return this._politicalPartiesService.getPolitician(this._politicianId);
      }),
    );
  }

  public onSubmit(politician: IPolitician): void {
    const request = { id: this._politicianId, ...politician } as IPolitician;
    this._store
      .dispatch(new PoliticalParty.EditPolitician(request))
      .subscribe(() => this.navigateBack());
  }

  public navigateBack(): void {
    this._router.navigate(['/political-party/detail/' + this._politicalPartyId]);
  }
}
