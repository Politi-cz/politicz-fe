import { NotificationService } from '../../shared/service/notification.service';
import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorResponse } from '../../data/schema/error-response';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private _notificationService: NotificationService) {}

  public handleError(httpError: HttpErrorResponse | any): void {
    const error = httpError?.error;

    if (this.isErrorResponse(error)) {
      const structuredError = error;
      let errorMessage = error.message;

      if (Object.keys(structuredError.errors).length > 0) {
        const errorMessages = [];

        if (structuredError.errors && Object.keys(structuredError.errors).length > 0) {
          for (const [key, value] of Object.entries(structuredError.errors)) {
            errorMessages.push(key + ' ' + value[0].toLowerCase());
          }

          errorMessage = errorMessages.join('\n ');
        }
      }

      this._notificationService.showError(errorMessage);
    } else if (httpError.message) {
      this._notificationService.showError(httpError?.message);
    } else {
      this._notificationService.showError('Unknown error has occurred');
    }

    console.error(httpError);
  }

  private isErrorResponse(error: ErrorResponse | HttpErrorResponse): error is ErrorResponse {
    return (
      (error as ErrorResponse)?.message !== undefined &&
      (error as ErrorResponse)?.errors !== undefined
    );
  }
}
