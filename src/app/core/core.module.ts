import { GlobalErrorHandler } from './handler/global-error-handler';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './guard/auth.guard';
import { RequestInterceptor } from './interceptor/request.interceptor';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AuthGuard,
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
