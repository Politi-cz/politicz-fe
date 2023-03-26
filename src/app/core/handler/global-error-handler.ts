import { NotificationService } from '../../shared/service/notification.service';
import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorResponse } from '../../data/schema/error-response';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private notificationService: NotificationService) {}

  public handleError(httpError: HttpErrorResponse): void {
    const structuredError = httpError.error as ErrorResponse;
    let errorMessage = httpError.message;

    if (structuredError.message || structuredError.errors) {
      const errorMessages = [];

      if (structuredError.errors && Object.keys(structuredError.errors).length > 0) {
        for (const [key, value] of Object.entries(structuredError.errors)) {
          errorMessages.push(key + ' ' + value[0].toLowerCase());
        }

        errorMessage = errorMessages.join('\n ');
      }
    }

    this.notificationService.showError(errorMessage!);
    console.error(httpError);
  }
}
