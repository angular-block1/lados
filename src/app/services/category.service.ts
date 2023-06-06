import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private _http: HttpClient, private _api: ApiService) { }

  getCategories(): Observable<any> {
    return this._api.getTypeRequest("/categories");
  }

  getCategory(slug: string): Observable<any> {
    return this._api.getTypeRequest(`/categories?slug=${slug}`);
  }

  createCategory(payload: any): Observable<any> {
    return this._api.postTypeRequest("/categories", payload);
  }

  updateCategory(id: string, payload: any): Observable<any> {
    return this._api.putTypeRequest(`/categories/${id}`, payload);
  }

  deleteCategory(id: string): Observable<any> {
    return this._api.deleteTypeRequest(`/categories/${id}`);
  }
}
