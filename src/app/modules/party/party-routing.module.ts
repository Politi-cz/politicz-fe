import { EditPoliticianComponent } from './page/edit-politician/edit-politician.component';
import { PartyComponent } from './page/party.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPoliticianComponent } from './page/add-politician/add-politician.component';

const routes: Routes = [
  {
    path: '',
    component: PartyComponent,
    pathMatch: 'full',
  },
  {
    path: ':id/add',
    component: AddPoliticianComponent,
  },
  {
    path: ':id/edit/:politicianId',
    component: EditPoliticianComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartyRoutingModule {}
