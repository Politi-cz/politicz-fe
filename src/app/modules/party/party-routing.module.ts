import { EditPoliticianComponent } from './page/edit-politician/edit-politician.component';
import { PartyComponent } from './page/party.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPoliticianComponent } from './page/add-politician/add-politician.component';
import { EditPartyComponent } from './page/edit-party/edit-party.component';
import { AddPartyComponent } from './page/add-party/add-party.component';

const routes: Routes = [
  {
    path: '',
    component: PartyComponent,
    pathMatch: 'full',
  },
  {
    path: ':id/add-politician',
    component: AddPoliticianComponent,
  },
  {
    path: ':id/edit-politician/:politicianId',
    component: EditPoliticianComponent,
  },
  {
    path: 'add',
    component: AddPartyComponent,
  },
  {
    path: ':id/edit',
    component: EditPartyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartyRoutingModule {}
