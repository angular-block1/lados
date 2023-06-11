import { Injectable } from "@angular/core";
import { TokenStorageService } from "./token-storage.service";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class MyInterceptor implements HttpInterceptor {
	constructor(private _token: TokenStorageService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = this._token.getToken();
		const url = req.url;

		if (url.startsWith("https://provinces.open-api.vn/api")) return next.handle(req);

		if (!token) {
			return next.handle(req);
		}

		const req1 = req.clone({
			setHeaders: {
				Authorization: `Bearer ${token}`,
			},
		});

		return next.handle(req1);
	}
}
