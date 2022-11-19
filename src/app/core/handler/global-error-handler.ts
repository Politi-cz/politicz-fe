import { NotificationService } from './../../shared/service/notification.service';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private notificationService: NotificationService) {}

  handleError(error: any): void {
    this.notificationService.showError(error?.message ?? 'error-undefined');
    console.error(error);
  }
}
