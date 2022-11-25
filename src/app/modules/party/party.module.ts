import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyRoutingModule } from './party-routing.module';
import { PartyComponent } from './page/party.component';
import { PoliticianComponent } from './page/politician/politician.component';

@NgModule({
  declarations: [PartyComponent, PoliticianComponent],
  imports: [CommonModule, PartyRoutingModule, SharedModule],
})
export class PartyModule {}
