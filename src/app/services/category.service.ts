import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _api: ApiService) { }
  getCategories(): Observable<any> {
    return this._api
      .getTypeRequest(`/categories`);
  }

  getCategory(id: string): Observable<any> {
    return this._api.getTypeRequest("/categories/" + id);
  }

  createCategory(payload: any): Observable<any> {
    return this._api.postTypeRequest("/categories/", payload);
  }

  updateCategory(id: string, payload: any): Observable<any> {
    return this._api.putTypeRequest("/categories/" + id, payload);
  }

  deleteCategory(id: string): Observable<any> {
    return this._api.deleteTypeRequest("/categories/" + id);
  }
}
