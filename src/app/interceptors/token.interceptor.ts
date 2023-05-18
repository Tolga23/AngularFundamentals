import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // request işlemlerinde araya interceptor giriyor ve token bilgisini header içerisine ekliyor.

    const token = localStorage.getItem('accessToken');

    if (token != undefined) {

      // JWT kullanınca Bearer Authorization yöntemi ile header üzerinden access token taşıyoruz.
      const myHeaders = request.headers.append(
        'Authorization',
        `Bearer ${token}`
      );

      // request nesnesini klonluyoruz ve header bilgisini güncelliyoruz.
      request = request.clone({
        headers: myHeaders
      });

      console.log("Token: ", request);

      return next.handle(request);
    }

    console.log("TokenInterceptor.intercept() request: ", request);
    return next.handle(request);
  }
}
