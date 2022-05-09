import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TosterService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  timeDuration = 3000;

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  displaySnackBar(message: string, type: 'info' | 'error' | 'warning' | 'success', duration: number = this.timeDuration): void {
    let msg = message;

    this.snackBar.open(msg, 'X', {
      duration: duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: [type + '-snackbar'],
    });
  }
}
