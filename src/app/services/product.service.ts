import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ProductService {
	constructor(private _api: ApiService) { }

	getProducts(): Observable<any> {
		return this._api.getTypeRequest("/products");
	}

	getProduct(id: string): Observable<any> {
		return this._api.getTypeRequest("/products/" + id);
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
