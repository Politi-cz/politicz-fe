import { GlobalErrorHandler } from './handler/global-error-handler';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestInterceptor } from './interceptor/request.interceptor';
import { FeatureGuard } from './guard/feature.guard';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    FeatureGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
})
export class CoreModule {}
