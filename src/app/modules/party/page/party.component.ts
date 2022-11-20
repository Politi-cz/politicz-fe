import { IPoliticalParty } from './../../../data/schema/political-party';
import { Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { PoliticalPartiesService } from './../../../data/service/political-parties.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss'],
})
export class PartyComponent implements OnInit, OnDestroy {
  politicalParty!: IPoliticalParty;

  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private partiesService: PoliticalPartiesService) {}

  ngOnInit(): void {
    this.registerRouteSub();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private registerRouteSub() {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const id = params['id'];

      this.partiesService
        .getPoliticalParty(id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(party => (this.politicalParty = party));
    });
  }
}
