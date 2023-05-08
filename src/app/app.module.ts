import { environment } from '../environments/environment';
import { SpinnerState } from './state/spinner.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { NgxsModule } from '@ngxs/store';
import { FiltersState } from './state/filters.state';
import { PoliticalPartyState } from './state/political-party.state';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, environment.assetsPath, '.json');
}
@NgModule({
  declarations: [AppComponent, ContentLayoutComponent, NavbarComponent, SidenavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    NgxsModule.forRoot([SpinnerState, FiltersState, PoliticalPartyState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
