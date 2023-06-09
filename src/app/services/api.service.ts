import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	port = 4000;
	private baseUrl = `http://localhost:${this.port}/api`;
	constructor(private _http: HttpClient) { }

	getTypeRequest(url: string): Observable<any> {
		return this._http.get(`${this.baseUrl}${url}`);
	}

	postTypeRequest(url: string, payload: any, options: any = {}): Observable<any> {
		return this._http.post(`${this.baseUrl}${url}`, payload, options);
	}

	deleteTypeRequest(url: string): Observable<any> {
		return this._http.delete(`${this.baseUrl}${url}`);
	}

	putTypeRequest(url: string, payload: any): Observable<any> {
		return this._http.put(`${this.baseUrl}${url}`, payload);
	}

	patchTypeRequest(url: string, payload: any): Observable<any> {
		return this._http.patch(`${this.baseUrl}${url}`, payload);
	}
}
