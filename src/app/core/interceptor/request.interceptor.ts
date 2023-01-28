import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { Spinner } from 'src/app/action/spinner.action';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  // Implement adding headers to request
  constructor(private store: Store) {}

  //TODO delete null/undefined attributes from request
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Workaround for expression changed after it was checked error
    setTimeout(() => {
      this.store.dispatch(new Spinner.Set(true));
    });

    return next.handle(request).pipe(
      finalize(() => {
        this.store.dispatch(new Spinner.Set(false));
      })
    );
  }
}
