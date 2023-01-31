import { IPoliticalParty } from './../../../../data/schema/political-party';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-party-form',
  templateUrl: './party-form.component.html',
  styleUrls: ['./party-form.component.scss'],
})
export class PartyFormComponent {
  @Input() party: IPoliticalParty | undefined;
}
