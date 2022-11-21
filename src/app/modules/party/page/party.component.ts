import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IPoliticalParty } from './../../../data/schema/political-party';
import { PoliticalPartiesService } from './../../../data/service/political-parties.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss'],
})
export class PartyComponent implements OnInit {
  politicalParty$: Observable<IPoliticalParty>;

  constructor(private route: ActivatedRoute, private partiesService: PoliticalPartiesService) {}

  ngOnInit(): void {
    this.politicalParty$ = this.route.queryParamMap.pipe(
      switchMap(params => {
        return this.partiesService.getPoliticalParty(params.get('id'));
      })
    );
  }
}
