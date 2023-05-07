import { SidenavPartiesState } from './state/sidenav-parties.state';
import { environment } from '../environments/environment';
import { SpinnerState } from './state/spinner.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

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
import { AuthenticationState } from './state/authentication.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, environment.assetsPath, '.json');
}
// TODO update readme + dropdown menu for actions + divnej hover sidenav itemu
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
      defaultLanguage: 'cz',
    }),
    NgxsModule.forRoot([SpinnerState, FiltersState, SidenavPartiesState, AuthenticationState]),
    NgxsStoragePluginModule.forRoot({
      key: AuthenticationState,
    }),
    AuthModule.forRoot({
      ...environment.auth,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
