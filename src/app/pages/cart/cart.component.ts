import { Component } from "@angular/core";
import { IProduct } from "app/interfaces/Product";
import { CartService } from "app/services/cart.service";
import { BehaviorSubject } from "rxjs";

@Component({
	selector: "app-cart",
	templateUrl: "./cart.component.html",
	styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
	cart = {
		products: [] as any,
		bill: 0,
	};
	total: number = 0;
	quantity: number = 0;
	bill: number = 0;
	cartObs = new BehaviorSubject(this.cart);

	constructor(private _cart: CartService) {
		this.cart = this._cart.getCart();
		this.cartObs.next({ ...this.cart });
		this.total = this.cart.products.reduce((acc: number, product: any) => {
			return (acc += product.quantity);
		}, 0);
		this.bill = this.cart.bill;
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

	updateQuantity(id: any, event: any) {
		const quantity = Number(event.value);
		this._cart.updateCart(id, quantity);
		this.cartObs.subscribe((cart: any) => {
			this.cart = this._cart.getCart();
			this.total = cart.products.reduce((acc: number, product: any) => {
				return (acc += product.quantity);
			}, 0);
		});
		this.bill = this.cart.bill;
	}

	deleteCart(id: any) {
		this._cart.removeCart(id);
		this.cart.products = this.cart.products.filter((product: any) => product.id !== id);
		this.cartObs.next({ ...this.cart });
	}
}
