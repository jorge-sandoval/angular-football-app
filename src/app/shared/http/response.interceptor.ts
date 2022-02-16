import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../notification/notification.setvice';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(
      private notificationService: NotificationService,
      private router: Router
    ) {}

    intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse | any) => {
          const errorMessage = error?.message;
          switch (error.status) {
            case 404:
              this.notificationService.openSnackBar('404 Error. Not found', 'error');
              this.router.navigate(['/not-found']);
              break;
            case 401:
              this.notificationService.openSnackBar('401 Error. Unauthorized', 'error');
              this.router.navigate(['/unauthorized']);
              break;
            case 403:
              this.notificationService.openSnackBar('403 Error. Forbidden', 'error');
              this.router.navigate(['/dashboard']);
              break;
            default:
              this.notificationService.openSnackBar(errorMessage, 'error');
              break;
          }
          return throwError(() => new Error(errorMessage));
        })
      );
    }
}
  