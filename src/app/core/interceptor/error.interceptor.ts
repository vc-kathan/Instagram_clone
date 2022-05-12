import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    // .pipe(
    //   catchError((err: HttpErrorResponse) => {
    //     let status = err.status
    //     if (status == 500) {
    //       console.log("internal Server Error");
    //     }
    //     return of()
    //   })
    // );
  }
}
