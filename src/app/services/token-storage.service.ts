import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class TokenStorageService {
	constructor() {}

	TOKEN = "token";
	USER = "user";

	getToken() {
		return JSON.parse(localStorage.getItem(this.TOKEN) as any);
	}

	setToken(token: string): void {
		localStorage.removeItem(this.TOKEN);
		localStorage.setItem(this.TOKEN, token);
	}

	getUser() {
		return JSON.parse(localStorage.getItem(this.USER) as any);
	}

	setUser(user: any): void {
		localStorage.removeItem(this.USER);
		localStorage.setItem(this.USER, JSON.stringify(user));
	}

	clearLocalstorage() {
		localStorage.clear();
	}
}
