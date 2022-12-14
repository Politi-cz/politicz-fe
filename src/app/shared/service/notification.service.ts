import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _duration = 5000;
  private config = {
    horizontalPosition: 'center' as MatSnackBarHorizontalPosition,
    verticalPosition: 'top' as MatSnackBarVerticalPosition,
  };

  constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

  showSuccess(message: string, duration = this._duration) {
    this.zone.run(() => {
      this.snackBar.open(message, 'X', { panelClass: ['successNotification'], duration: duration, ...this.config });
    });
  }

  showError(message: string, duration = this._duration) {
    this.zone.run(() => {
      this.snackBar.open(message, 'X', { panelClass: ['errorNotification'], duration: duration, ...this.config });
    });
  }
}
