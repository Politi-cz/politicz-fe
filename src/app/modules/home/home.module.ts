import { NewsState } from './state/news.state';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '../../shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home/home.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';
import { NewsComponent } from './page/home/news/news.component';
import { NewsDetailComponent } from './page/home/news-detail/news-detail.component';
import { NewsFormComponent } from './forms/news-form/news-form.component';
import { AddNewsComponent } from './page/home/add-news/add-news.component';
import { EditNewsComponent } from './page/home/edit-news/edit-news.component';
import { FormActionsComponent } from '../../shared/component/form-actions/form-actions.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, environment.assetsPath, '.json');
}

@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    NewsDetailComponent,
    NewsFormComponent,
    AddNewsComponent,
    EditNewsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgxsModule.forFeature([NewsState]),
    TranslateModule.forChild({
      defaultLanguage: 'cz',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: true,
    }),
    FormActionsComponent,
  ],
})
export class HomeModule {}
