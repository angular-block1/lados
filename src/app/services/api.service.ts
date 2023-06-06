import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	private baseUrl = "http://localhost:3000";
	constructor(private _http: HttpClient) { }

	getTypeRequest(url: string): Observable<any> {
		return this._http.get(`${this.baseUrl}${url}`);
	}

	postTypeRequest(url: string, payload: any): Observable<any> {
		return this._http.post(`${this.baseUrl}${url}`, payload);
	}

	deleteTypeRequest(url: string): Observable<any> {
		return this._http.delete(`${this.baseUrl}${url}`);
	}

	putTypeRequest(url: string, payload: any): Observable<any> {
		return this._http.put(`${this.baseUrl}${url}`, payload);
	}
}
