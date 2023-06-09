import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Iauth } from 'app/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _api: ApiService) { }
  
  sigin(payload: any): Observable<Iauth> {
    return this._api.postTypeRequest("/auth/signin", payload);
  }
  signup(payload: any): Observable<any> {
    return this._api.postTypeRequest("/auth/signup", payload);
  }
}
