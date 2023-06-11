import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { OrderService } from "app/services/order.service";
import * as moment from "moment";

@Component({
	selector: "app-order-manager",
	templateUrl: "./order-manager.component.html",
	styleUrls: ["./order-manager.component.scss"],
})
export class OrderManagerComponent {
	orders: any = [];

	constructor(private router: Router, private _order: OrderService) {
		this._order.getAllOrders().subscribe(({ data }) => (this.orders = data));
	}

	formatDate(value: string) {
		return moment(value).format("DD-MM-YYYY HH:mm:ss");
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

	checkOrderStatus(status: string): any {
		switch (status) {
			case "processing":
				return {
					class: "btn--yellow",
					title: "Đang xử lý",
				};
			case "confirmed":
				return {
					class: "btn--blue",
					title: "Đã xác nhận",
				};
			case "delivering":
				return {
					class: "btn--green",
					title: "Đang vận chuyển",
				};
			case "delivered":
				return {
					class: "btn--green",
					title: "Hoàn thành",
				};
			case "cancelled":
				return {
					class: "btn--red",
					title: "Đã hủy",
				};
		}
	}
}
