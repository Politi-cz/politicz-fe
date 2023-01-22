import { IPoliticianRequest } from './../../../../data/schema/politician-request';
import { PoliticalPartiesService } from './../../../../data/service/political-parties.service';
import { IPolitician } from './../../../../data/schema/politician';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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

  private politicalPartyId: string;
  private politicianId: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _politicalPartiesService: PoliticalPartiesService,
    private _store: Store
  ) {}

  ngOnInit(): void {
    this.politician$ = this._route.paramMap.pipe(
      switchMap(params => {
        this.politicalPartyId = params.get('id')!;
        this.politicianId = params.get('politicianId')!;
        return this._politicalPartiesService.getPolitician(this.politicianId);
      })
    );
  }

  public onSubmit(politician: IPoliticianRequest) {
    const request = { id: this.politicianId, ...politician } as IPoliticianRequest;
    this._store.dispatch(new PoliticalParty.EditPolitician(request));
    this.navigateBack();
  }

  public navigateBack() {
    this._router.navigate(['/political-party'], { queryParams: { id: this.politicalPartyId } });
  }
}
