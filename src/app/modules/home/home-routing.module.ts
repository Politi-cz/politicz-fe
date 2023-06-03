import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NewsDetailComponent } from './page/home/news-detail/news-detail.component';
import { AddNewsComponent } from './page/home/add-news/add-news.component';
import { EditNewsComponent } from './page/home/edit-news/edit-news.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddNewsComponent,
  },
  {
    path: 'edit/:id',
    component: EditNewsComponent,
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
