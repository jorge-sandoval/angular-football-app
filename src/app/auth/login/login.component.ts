import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/notification/notification.setvice';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  onLogin(): void {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value)
        .subscribe(
          () => {
            this.notificationService.openSnackBar('Log in successful!', 'success');
          },
          (error) => {
            this.notificationService.openSnackBar(error, 'error');
          }
        )
    }
  }
}
