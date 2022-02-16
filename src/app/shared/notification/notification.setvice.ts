import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from './notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private durationInSeconds = 3;
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, type: string) {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: this.durationInSeconds*1000,
      data: { message, type },
      panelClass: [type ==='success' ? 'snackbar-success' : 'snackbar-error'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
