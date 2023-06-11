import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OrderService } from "app/services/order.service";
import * as moment from "moment";

@Component({
	selector: "app-user-order-detail-page",
	templateUrl: "./user-order-detail-page.component.html",
	styleUrls: ["./user-order-detail-page.component.scss"],
})
export class UserOrderDetailPageComponent {
	order: any = {};

	constructor(private _order: OrderService, private route: ActivatedRoute) {
		this.route.paramMap.subscribe((params) => {
			const id = String(params.get("id"));
			this._order.getOrder(id).subscribe(({ data }) => (this.order = data));
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

	formatDate(value: string) {
		return moment(value).format("DD-MM-YYYY HH:mm:ss");
	}

	handlePayment(): any {
		if (!this.order.payment.status) {
			switch (this.order?.payment?.methods) {
				case "VNPAY":
					return this._order
						.payVnpay({
							bill: this.order?.bill,
							order: this.order._id,
						})
						.subscribe(({ data }) => (window.location.href = data?.url));
				case "MOMO":
					return this._order
						.payMomo({
							bill: this.order?.bill,
							order: this.order._id,
						})
						.subscribe(({ data }) => (window.location.href = data?.url));
			}
		}
	}
}
