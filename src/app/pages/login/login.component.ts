import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Iauth } from "app/interfaces/auth";
import { AuthService } from "app/services/auth.service";
import { TokenStorageService } from "app/services/token-storage.service";
import Swal from "sweetalert2";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
	account = this.fb.group({
		email: ["", [Validators.required, Validators.email]],
		password: ["", [Validators.required]],
	});

	check: boolean = false;

	constructor(
		private router: Router,
		private authservice: AuthService,
		private _token: TokenStorageService,
		private fb: FormBuilder
	) {}

	onHandleSubmit() {
		this.check = true;

		if (this.account.invalid) return;

		this.authservice.sigin(this.account.value).subscribe(
			(data: any) => {
				this._token.setToken(data.accessToken);
				this._token.setUser(data.data);
				this.router.navigate(["/"]);
				Swal.fire(`Xin chào: ${data.data.name} 🎉🎉🎉`, "Chào mừng bạn đến với thế giới đồ hiệu ", "success");
			},
			({ error }) => {
				console.log(error);
				Swal.fire("Thất bại :((", error.message, "error");
			}
		);
	}
}
