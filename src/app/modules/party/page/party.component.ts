import { IPolitician } from './../../../data/schema/politician';
import { PoliticalPartyState } from '../state/political-party.state';
import { FiltersState } from './../../../state/filters.state';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IPoliticalParty } from './../../../data/schema/political-party';
import { PoliticalParty } from '../action/political-party.action';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss'],
})
export class PartyComponent implements OnInit {
  @Select(FiltersState.getPoliticianFilterCount) politiciansCount: Observable<number>;

  @Select(PoliticalPartyState) politicalParty$: Observable<IPoliticalParty>;

  @Select(PoliticalPartyState.getPoliticians) politicians$: Observable<IPolitician[]>;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      return this.store.dispatch(new PoliticalParty.GetPoliticalParty(params.get('id')));
    });
  }
}
