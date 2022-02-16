import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    const isloggedIn = this.authService.isloggedIn();
    if (!isloggedIn) this._router.navigate(['/auth/login']);
    return isloggedIn;
  }
}
