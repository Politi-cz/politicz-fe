import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NewsDetailComponent } from './page/home/news-detail/news-detail.component';
import { AddNewsComponent } from './page/home/add-news/add-news.component';
import { EditNewsComponent } from './page/home/edit-news/edit-news.component';
import { FeatureGuard } from '../../core/guard/feature.guard';
import { Permission } from '../../data/schema/permission.enum';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddNewsComponent,
    canActivate: [FeatureGuard],
    data: { permission: Permission.ModifyNews },
  },
  {
    path: 'edit/:id',
    component: EditNewsComponent,
    canActivate: [FeatureGuard],
    data: { permission: Permission.ModifyNews },
  },
  {
    path: 'detail/:id',
    component: NewsDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
