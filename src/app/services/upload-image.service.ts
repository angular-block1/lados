import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  headers = new HttpHeaders();

  constructor(private _api: ApiService,) { }
  uploadImage(payload: any) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('enctype', 'multipart/form-data');
    return this._api.postTypeRequest("/upload/images/upload", payload, { headers: this.headers })
  }
}
