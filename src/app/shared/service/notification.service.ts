import { Injectable, NgZone } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _duration = 5000;

  private config = {
    horizontalPosition: 'center' as MatSnackBarHorizontalPosition,
    verticalPosition: 'top' as MatSnackBarVerticalPosition,
  };

  constructor(
    private snackBar: MatSnackBar,
    private zone: NgZone,
    private translate: TranslateService,
  ) {}

  public showSuccess(message: string, duration = this._duration): void {
    this.zone.run(() => {
      this.snackBar.open(this.translate.instant(message), 'X', {
        panelClass: ['successNotification'],
        duration: duration,
        ...this.config,
      });
    });
  }

  public showError(message: string, duration = this._duration): void {
    this.zone.run(() => {
      this.snackBar.open(this.translate.instant(message), 'X', {
        panelClass: ['errorNotification'],
        duration: duration,
        ...this.config,
      });
    });
  }
}
