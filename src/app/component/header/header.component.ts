import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from "app/services/cart.service";
import { CategoryService } from "app/services/category.service";
import { TokenStorageService } from "app/services/token-storage.service";
import { BehaviorSubject } from "rxjs";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	cart = {};
	search: string = ""
	cates: any[] = []
	total = 0;
	user = {
		name: "",
	};

	cartObs = new BehaviorSubject(this.cart);
	constructor(private _cart: CartService, private _token: TokenStorageService, private cateService: CategoryService, private router: Router, private route: ActivatedRoute) {
		this.cateService.getCategories().subscribe(({ data }) => {
			const arr = data.filter((item: any) => item.name != "Không xác định")
			this.cates = arr
		})
		this.cart = this._cart.getCart();
		this.cartObs.next({ ...this.cart });
		this.cartObs.subscribe((cart: any) => {
			this.total = cart.products.reduce((acc: number, product: any) => {
				return (acc += product.quantity);
			}, 0);
		});
		this.user = this._token.getUser();
	}
	onHandlesubmit() {
		this.router.navigate(
			['/products'],
			{
				relativeTo: this.route,
				queryParams: { search: this.search },
				queryParamsHandling: 'merge'
			});
	}
	logOut() {
		this._token.clearLocalstorage()
	}
}
