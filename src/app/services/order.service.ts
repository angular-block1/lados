import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class OrderService {
	constructor(private _http: HttpClient, private _api: ApiService) {}
	getAllOrders(): Observable<any> {
		return this._api.getTypeRequest("/order");
	}

	getOrder(id: string): Observable<any> {
		return this._api.getTypeRequest("/order/" + id);
	}

	getBill(): Observable<any> {
		return this._api.getTypeRequest("/order/ds");
	}

	getProvinces(query: string) {
		return this._http.get(`https://provinces.open-api.vn/api${query}`);
	}

	createOrder(payload: any): Observable<any> {
		return this._api.postTypeRequest("/order", payload);
	}

	getOrders(): Observable<any> {
		return this._api.getTypeRequest("/order");
	}

	getOrderByUser(): Observable<any> {
		return this._api.getTypeRequest("/order/me");
	}

	cancelOrder(id: string): Observable<any> {
		return this._api.deleteTypeRequest("/order/" + id);
	}

	changerOrderStatus(payload: any, id: string): Observable<any> {
		return this._api.patchTypeRequest("/order/" + id, payload);
	}

	payMomo(payload: any): Observable<any> {
		return this._api.postTypeRequest("/order/pay-momo", payload);
	}

	payVnpay(payload: any): Observable<any> {
		return this._api.postTypeRequest("/order/pay-vnpay", payload);
	}

	updateOrder(payload: any, id: string): Observable<any> {
		return this._api.putTypeRequest("/order/" + id, payload);
	}
}
