import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home/home.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';
import { NewsComponent } from './page/home/news/news.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.assetsPath, '.json');
}

@NgModule({
  declarations: [HomeComponent, NewsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule.forChild({
      defaultLanguage: 'cz',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
})
export class HomeModule {}
