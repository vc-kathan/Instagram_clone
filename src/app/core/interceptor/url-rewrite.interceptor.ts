import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UrlRewriteInterceptor implements HttpInterceptor {
  baseUrl = environment.baseServerUrl;
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let cloneReq: any;
    if (!request.url.includes('assets')) {
      cloneReq = request.clone({
        url: this.baseUrl + request.url
      })
      console.log(cloneReq);
    } else {
      cloneReq = request.clone({})
    }
    // request = request.clone({
    //   url: this.baseUrl + request.url
    // })
    // console.log(cloneReq);


    return next.handle(cloneReq).pipe(map((event: HttpEvent<any>) => {
      // console.log("response =>", event);
      return event;
    }));
  }
}
