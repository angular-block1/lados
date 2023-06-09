import { Component } from "@angular/core";
import { CartService } from "app/services/cart.service";
import { BehaviorSubject } from "rxjs";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	cart = {};
	total = 0;

	cartObs = new BehaviorSubject(this.cart);
	constructor(private _cart: CartService) {
		this.cart = this._cart.getCart();
		this.cartObs.next({ ...this.cart });
		this.cartObs.subscribe((cart: any) => {
			this.total = cart.products.reduce((acc: number, product: any) => {
				return (acc += product.quantity);
			}, 0);
		});
	}
}
