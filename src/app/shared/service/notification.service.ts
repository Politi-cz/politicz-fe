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
  private _duration = 10000;

  private _config = {
    horizontalPosition: 'center' as MatSnackBarHorizontalPosition,
    verticalPosition: 'top' as MatSnackBarVerticalPosition,
  };

  constructor(
    private _snackBar: MatSnackBar,
    private _zone: NgZone,
    private _translate: TranslateService,
  ) {}

  public showSuccess(message: string, duration: number = this._duration): void {
    this._zone.run(() => {
      this._snackBar.open(this._translate.instant(message), 'X', {
        panelClass: ['successNotification'],
        duration: duration,
        ...this._config,
      });
    });
  }

  public showError(message: string, duration: number = this._duration): void {
    this._zone.run(() => {
      this._snackBar.open(this._translate.instant(message), 'X', {
        panelClass: ['errorNotification'],
        duration: duration,
        ...this._config,
      });
    });
  }
}
