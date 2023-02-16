import { PoliticalPartiesService } from './../../../../data/service/political-parties.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IPoliticalParty } from './../../../../data/schema/political-party';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-party',
  templateUrl: './edit-party.component.html',
  styleUrls: ['./edit-party.component.scss'],
})
export class EditPartyComponent implements OnInit {
  public politicalParty$: Observable<IPoliticalParty>;
  public politicalPartyId: string;

  constructor(
    private _route: ActivatedRoute,
    private _politicalPartiesService: PoliticalPartiesService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    //TODO Retreive party from store
    this.politicalParty$ = this._route.paramMap.pipe(
      switchMap(params => {
        this.politicalPartyId = params.get('id')!;
        console.log(this.politicalPartyId);
        return this._politicalPartiesService.getPoliticalParty(this.politicalPartyId);
      })
    );
  }

  public onSubmit(party: IPoliticalParty) {
    this._politicalPartiesService
      .editPoliticalParty({ ...party, id: this.politicalPartyId })
      .subscribe(() => this.navigateBack(this.politicalPartyId));
  }

  public navigateBack(id: string) {
    this._router.navigate(['/political-party'], { queryParams: { id: id } });
  }
}
