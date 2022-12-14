import { politicalPartyState } from './state/political-party.state';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyRoutingModule } from './party-routing.module';
import { PartyComponent } from './page/party.component';
import { PoliticianComponent } from './page/politician/politician.component';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [PartyComponent, PoliticianComponent],
  imports: [CommonModule, PartyRoutingModule, SharedModule, NgxsModule.forFeature([politicalPartyState])],
})
export class PartyModule {}
