import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class CartService {
	cart = {
		products: [] as any,
		bill: 0,
	};

	cartObs = new BehaviorSubject(this.cart);

	constructor(private _api: ApiService) {
		const cartLocalstorage = JSON.parse(localStorage.getItem("cart") as any);
		if (cartLocalstorage) this.cart = cartLocalstorage;
		this.cartObs.next({ ...this.cart });
	}

	// check sản phẩm xem đã tồn tại tại trong giỏ hàng hay chưa
	isProductInCart(id: string): boolean {
		return this.cart.products.findIndex((product: any) => product.id == id) !== -1;
	}

	getTotalBill() {
		return this.cart.products.reduce((acc: number, product: any) => {
			return (acc += product.price * product.quantity);
		}, 0);
	}

	getCart() {
		return this.cart;
	}

	addToCart(product: any, quantity: number) {
		const { id } = product;

		if (!this.isProductInCart(id as string)) {
			if (quantity)
				this.cart.products.push({
					id: product.id,
					name: product.name,
					price: product.price,
					image: product.images[0],
					quantity,
				});
			else
				this.cart.products.push({
					id: product.id,
					name: product.name,
					price: product.price,
					image: product.images[0],
					quantity: 1,
				});
		} else {
			let products = [...this.cart.products];

			products = products.map((product) => {
				if (product.id == id) {
					if (quantity) product.quantity = quantity;
					else product.quantity += 1;
				}

				return product;
			});

			this.cart.products = products;
		}

		this.cart.bill = this.getTotalBill();
		this.cartObs.next({ ...this.cart });
		localStorage.setItem("cart", JSON.stringify(this.cart));
	}

	updateCart(id: string, quantity: number) {
		let products = [...this.cart.products];

		products = products.map((product) => {
			if (product.id == id) {
				if (quantity) product.quantity = quantity;
				else product.quantity += 1;
			}

			return product;
		});

		this.cart.products = products;
		this.cart.bill = this.getTotalBill();
		this.cartObs.next({ ...this.cart });
		localStorage.setItem("cart", JSON.stringify(this.cart));
	}

	removeCart(id: string) {
		let products = [...this.cart.products];

		products = products.filter((product) => product.id != id);

		this.cart.products = products;
		this.cart.bill = this.getTotalBill();
		localStorage.setItem("cart", JSON.stringify(this.cart));
	}

	clearCart() {
		this.cart = {
			products: [],
			bill: 0,
		};
		localStorage.setItem("cart", JSON.stringify(this.cart));
	}
}
