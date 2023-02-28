import { EditPoliticianComponent } from './page/edit-politician/edit-politician.component';
import { PartyComponent } from './page/party.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPoliticianComponent } from './page/add-politician/add-politician.component';
import { EditPartyComponent } from './page/edit-party/edit-party.component';
import { AddPartyComponent } from './page/add-party/add-party.component';

const routes: Routes = [
  {
    // For now redirect to news
    path: '',
    redirectTo: '/news',
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddPartyComponent,
  },
  {
    path: 'detail/:id',
    component: PartyComponent,
  },
  {
    path: 'detail/:id/add-politician',
    component: AddPoliticianComponent,
  },
  {
    path: 'detail/:id/edit-politician/:politicianId',
    component: EditPoliticianComponent,
  },
  {
    path: 'detail/:id/edit',
    component: EditPartyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartyRoutingModule {}
