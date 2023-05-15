import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { Spinner } from 'src/app/core/action/spinner.action';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  // Implement adding headers to request
  constructor(private _store: Store) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Workaround for expression changed after it was checked error
    setTimeout(() => {
      this._store.dispatch(new Spinner.Set(true));
    });

    const modifiedRequest = request.clone({ body: this.removeEmptyAttributes(request.body) });

    return next.handle(modifiedRequest).pipe(
      finalize(() => {
        this._store.dispatch(new Spinner.Set(false));
      }),
    );
  }

  private removeEmptyAttributes(requestBody: any): object {
    const body = { ...requestBody };

    return JSON.parse(
      JSON.stringify(body, (key: any, value: any) => {
        if (value === null || value === undefined || value === '') {
          return undefined;
        }

        return value;
      }),
    );
  }
}
