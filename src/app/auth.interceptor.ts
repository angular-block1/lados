import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './services/token-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _token: TokenStorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this._token.getToken();
    if (!accessToken) return next.handle(request);

    const modifyReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return next.handle(modifyReq);
  }
}