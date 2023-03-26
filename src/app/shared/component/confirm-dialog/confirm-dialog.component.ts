import { Component, Inject } from '@angular/core';
import { IConfirmDialogData } from '../../../data/schema/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IConfirmDialogData,
  ) {}

  public cancel(): void {
    this.dialogRef.close();
  }

  public confirm(): void {
    this.dialogRef.close(true);
  }
}
