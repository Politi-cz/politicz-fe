import { IPolitician } from './../../../../data/schema/politician';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-politician',
  templateUrl: './politician.component.html',
  styleUrls: ['./politician.component.scss'],
})
export class PoliticianComponent {
  @Input() politician: IPolitician;

  constructor() {}
}
