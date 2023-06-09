import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ProductService {
	constructor(private _api: ApiService) {}


	getProducts({_category="", _limit = 10, _page = 1, _order = "asc", _sort = "createdAt" }): Observable<any> {
		return this._api
			.getTypeRequest(`/products?_category=${_category}&_limit=${_limit}&_order=${_order}&_sort=${_sort}&_page=${_page}`);
	}
	getProduct(slug: string): Observable<any> {
		return this._api.getTypeRequest("/products/" + slug);
	}
	searchProduct({_search=""}): Observable<any> {
		return this._api.getTypeRequest(`/products/search?_search=${_search}`);
	}
	getPrice({_price=""}):Observable<any>{
		return this._api
			.getTypeRequest(`/products/price?_price=${_price}`);
	}

	createProduct(payload: any): Observable<any> {
		return this._api.postTypeRequest("/products/", payload);
	}

	updateProduct(id: string, payload: any): Observable<any> {
		return this._api.putTypeRequest("/products/" + id, payload);
	}

	deteProduct(id: string): Observable<any> {
		return this._api.deleteTypeRequest("/products/" + id);
	}
}

