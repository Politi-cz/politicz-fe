import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyRoutingModule } from './party-routing.module';
import { PartyComponent } from './page/party.component';
import { PoliticianComponent } from './page/politician/politician.component';
import { AddPoliticianComponent } from './page/add-politician/add-politician.component';
import { PoliticianFormComponent } from './forms/politician-form/politician-form.component';
import { EditPoliticianComponent } from './page/edit-politician/edit-politician.component';
import { EditPartyComponent } from './page/edit-party/edit-party.component';
import { AddPartyComponent } from './page/add-party/add-party.component';
import { PartyFormComponent } from './forms/party-form/party-form.component';

@NgModule({
  declarations: [
    PartyComponent,
    PoliticianComponent,
    AddPoliticianComponent,
    PoliticianFormComponent,
    EditPoliticianComponent,
    EditPartyComponent,
    AddPartyComponent,
    PartyFormComponent,
  ],
  imports: [CommonModule, PartyRoutingModule, SharedModule],
})
export class PartyModule {}
