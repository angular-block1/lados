import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";
import { FormBuilder, Validators } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
	selector: "app-sign-up-page",
	templateUrl: "./sign-up-page.component.html",
	styleUrls: ["./sign-up-page.component.scss"],
})
export class SignUpPageComponent {
	auth = this.fb.group({
		name: ["", [Validators.required]],
		email: ["", [Validators.required, Validators.email]],
		password: ["", [Validators.required]],
		confirmpassword: ["", [Validators.required]],
	});

	check: boolean = false;

	constructor(private authservice: AuthService, private router: Router, private fb: FormBuilder) {}
	onHandleSubmit() {
		this.check = true;

		if (this.auth.invalid) return;

		this.authservice.signup(this.auth.value).subscribe(
			() => {
				this.router.navigate(["/login"]);
				Swal.fire("Bạn đã đăng ký tài khoản thành công 🎉🎉🎉", "", "success");
			},
			({ error }) => {
				Swal.fire("Thất bại :((", error.message, "error");
			}
		);
	}
}
