import { FiltersState } from './../../../state/filters.state';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, switchMap, tap } from 'rxjs';
import { IPoliticalParty } from './../../../data/schema/political-party';
import { PoliticalPartiesService } from './../../../data/service/political-parties.service';
import { Filters } from 'src/app/action/filters.action';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss'],
})
export class PartyComponent implements OnInit {
  @Select(FiltersState.getPoliticianFilterCount) politiciansCount: Observable<number>;

  politicalParty$: Observable<IPoliticalParty>;
  filteredPoliticalParty$: Observable<IPoliticalParty>;

  constructor(private route: ActivatedRoute, private partiesService: PoliticalPartiesService, private store: Store) {}

  ngOnInit(): void {
    this.politicalParty$ = this.route.queryParamMap.pipe(
      switchMap(params => {
        return this.partiesService
          .getPoliticalParty(params.get('id'))
          .pipe(tap(data => this.store.dispatch(new Filters.Set({ politicianFilterCount: data.politicians.length }))));
      })
    );
  }
}
