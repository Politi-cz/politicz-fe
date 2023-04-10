import { AdminSectionComponent } from './shared/component/admin-section/admin-section.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureGuard } from './core/guard/feature.guard';
import { Permission } from './data/schema/permission.enum';

const routes: Routes = [
  {
    path: 'news',
    loadChildren: () => import('./modules/home/home.module').then((m: any) => m.HomeModule),
  },
  {
    path: 'political-party',
    loadChildren: () => import('./modules/party/party.module').then((m: any) => m.PartyModule),
  },
  {
    path: 'admin',
    component: AdminSectionComponent,
    canActivate: [FeatureGuard],
    data: { permission: Permission.ModifyPartiesPoliticians },
  },
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: '**', redirectTo: '/news', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
