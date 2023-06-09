import { Component, Input } from "@angular/core";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { IProduct } from "app/interfaces/Product";
import { CartService } from "app/services/cart.service";

@Component({
	selector: "app-detail",
	templateUrl: "./detail.component.html",
	styleUrls: ["./detail.component.scss"],
})
export class DetailComponent {
	@Input() product: any;
	faUser = faUser;
	faCartShopping = faCartShopping;
	quantity = 1;

	constructor(private _cart: CartService) {}

	increaseQuantity() {
		return (this.quantity += 1);
	}

	prevQuantity() {
		if (this.quantity <= 1) return (this.quantity = 1);
		return (this.quantity -= 1);
	}

	addToCart(): void {
		this._cart.addToCart(this.product, this.quantity);
	}
}
