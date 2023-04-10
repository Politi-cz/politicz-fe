import { EditPoliticianComponent } from './page/edit-politician/edit-politician.component';
import { PartyComponent } from './page/party.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPoliticianComponent } from './page/add-politician/add-politician.component';
import { EditPartyComponent } from './page/edit-party/edit-party.component';
import { AddPartyComponent } from './page/add-party/add-party.component';
import { FeatureGuard } from '../../core/guard/feature.guard';
import { Permission } from '../../data/schema/permission.enum';

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
    canActivate: [FeatureGuard],
    data: { permission: Permission.ModifyPartiesPoliticians },
  },
  {
    path: 'detail/:id',
    component: PartyComponent,
  },
  {
    path: 'detail/:id/add-politician',
    component: AddPoliticianComponent,
    canActivate: [FeatureGuard],
    data: { permission: Permission.ModifyPartiesPoliticians },
  },
  {
    path: 'detail/:id/edit-politician/:politicianId',
    component: EditPoliticianComponent,
    canActivate: [FeatureGuard],
    data: { permission: Permission.ModifyPartiesPoliticians },
  },
  {
    path: 'detail/:id/edit',
    component: EditPartyComponent,
    canActivate: [FeatureGuard],
    data: { permission: Permission.ModifyPartiesPoliticians },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartyRoutingModule {}
