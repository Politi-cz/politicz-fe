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

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Workaround for expression changed after it was checked error
    setTimeout(() => {
      this.store.dispatch(new Spinner.Set(true));
    });

    request = request.clone({ body: this.removeEmptyAttributes(request.body) });

    return next.handle(request).pipe(
      finalize(() => {
        this.store.dispatch(new Spinner.Set(false));
      })
    );
  }

  private removeEmptyAttributes(requestBody: any): object {
    const body = { ...requestBody };

    return JSON.parse(
      JSON.stringify(body, (key, value) => {
        if (value === null || value === undefined || value === '') {
          return undefined;
        }

        return value;
      })
    );
  }
}
