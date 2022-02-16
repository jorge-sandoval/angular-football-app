import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  statusChanged$ = new BehaviorSubject(this.isloggedIn());

  private registeredUsers = [
    { username: 'admin', password: 'admin' },
    { username: 'user', password: '1234' }
  ];

  constructor(
    private router: Router
  ) {}

  login(loginData: any) {
    const isValid = this.registeredUsers.find(
        user => user.username === loginData.username && user.password === loginData.password
    );
    if(isValid){
        localStorage.setItem('loggedIn', loginData.username );
        this.statusChanged$.next(true);
        this.router.navigate(['/dashboard']);
        return of(isValid)

    } else {
        return throwError(() => new Error('invalid credentials'));
    }
  }

  isloggedIn() {
    return !!localStorage.getItem('loggedIn');
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.statusChanged$.next(false);
    this.router.navigate(['/auth/login']);
  }
}
