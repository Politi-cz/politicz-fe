import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './page/add-news/add-news.component';
import { HomeComponent } from './page/home.component';
import { NewsDetailComponent } from './page/news-detail/news-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'detail',
    component: NewsDetailComponent,
  },
  {
    path: 'add',
    component: AddNewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
