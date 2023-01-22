import { PoliticalPartiesService } from './../../../../data/service/political-parties.service';
import { IPolitician } from './../../../../data/schema/politician';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-politician',
  templateUrl: './edit-politician.component.html',
  styleUrls: ['./edit-politician.component.scss'],
})
export class EditPoliticianComponent implements OnInit {
  politician$: Observable<IPolitician>;

  constructor(private _route: ActivatedRoute, private _politicalPartiesService: PoliticalPartiesService) {}

  ngOnInit(): void {
    this.politician$ = this._route.paramMap.pipe(
      switchMap(params => this._politicalPartiesService.getPolitician(params.get('politicianId')!))
    );
  }
}
