import { AdminSectionComponent } from './shared/component/admin-section/admin-section.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  },
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: '**', redirectTo: '/news', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
