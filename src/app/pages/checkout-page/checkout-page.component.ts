import { Component } from "@angular/core";
import { CartService } from "app/services/cart.service";
import { OrderService } from "app/services/order.service";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SweetAlert2LoaderService } from "@sweetalert2/ngx-sweetalert2";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
	selector: "app-checkout-page",
	templateUrl: "./checkout-page.component.html",
	styleUrls: ["./checkout-page.component.scss"],
})
export class CheckoutPageComponent {
	cart = {
		products: [] as any,
		bill: 0,
	};
	total: number = 0;
	provinces: any = [];
	districts: any = [];
	wards: any = [];

	// validate form
	order: FormGroup;
	check: boolean = false;

	constructor(private _cart: CartService, private _order: OrderService, private fb: FormBuilder, private alert: SweetAlert2LoaderService, private router: Router) {
		this.cart = this._cart.getCart();
		this.total = this.cart.products.reduce((acc: number, product: any) => {
			return (acc += product.quantity);
		}, 0);

		this._order.getProvinces("/p").subscribe((data) => {
			this.provinces = data;
		});

		// inital value
		this.order = this.fb.group({
			email: ["", [Validators.required, Validators.email]],
			fullname: ["", [Validators.required]],
			phone: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
			address: ["", [Validators.required]],
			province: ["", [Validators.required]],
			district: ["", [Validators.required]],
			ward: ["", [Validators.required]],
			note: ["", [Validators.required]],
			payment: ["", [Validators.required]],
		});
	}

	formatNumber(str: any) {
		str = `${str}`;
		return str
			.split("")
			.reverse()
			.reduce((prev: any, next: any, index: any) => {
				return (index % 3 ? next : next + ".") + prev;
			});
	}

	handleDistricts(e: any) {
		let name = e.value;
		const province = this.provinces.find((item: any) => item.name == name);
		this._order.getProvinces(`/p/${province?.code}?depth=2`).subscribe((data: any) => (this.districts = data.districts));
	}

	handleWards(e: any) {
		let name = e.value;
		const district = this.districts.find((item: any) => item.name == name);
		this._order.getProvinces(`/d/${district?.code}?depth=2`).subscribe((data: any) => (this.wards = data.wards));
	}

	onSubmit() {
		this.check = true;

		if (this.order.invalid) return;

		const payload = {
			shipping: {
				fullname: this.order.value["fullname"],
				email: this.order.value["email"],
				phone: this.order.value["phone"],
				address: `${this.order.value["ward"]}, ${this.order.value["district"]}, ${this.order.value["province"]} | ${this.order.value["address"]}`,
				note: this.order.value["note"],
			},
			payment: {
				status: false,
				methods: this.order.value["payment"],
			},
			products: this.cart.products.map((product: any) => ({ _id: product.id, quantity: product.quantity })),
		};

		this._order.createOrder(payload).subscribe(
			() => {
				Swal.fire("Đặt hàng thành công", "", "success");
				this._cart.clearCart();
				this.router.navigate(["/"]);
			},
			(error) => Swal.fire("Có lỗi gì rồi :((", "", "error")
		);
	}
}
