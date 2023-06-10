import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OrderService } from "app/services/order.service";

@Component({
	selector: "app-thanks-page",
	templateUrl: "./thanks-page.component.html",
	styleUrls: ["./thanks-page.component.scss"],
})
export class ThanksPageComponent {
	constructor(private _route: ActivatedRoute, private router: Router, private _order: OrderService) {
		this._route.queryParams.subscribe((params: any) => {
			this._order.updateOrder(params, params._id).subscribe(() => router.navigate(["/orders/" + params._id]));
		});
	}
}
