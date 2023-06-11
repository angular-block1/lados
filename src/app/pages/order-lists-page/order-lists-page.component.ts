import { Component } from "@angular/core";
import { OrderService } from "app/services/order.service";
import * as moment from "moment";
import Swal from "sweetalert2";

@Component({
	selector: "app-order-lists-page",
	templateUrl: "./order-lists-page.component.html",
	styleUrls: ["./order-lists-page.component.scss"],
})
export class OrderListsPageComponent {
	orders: any = [];

	constructor(private _order: OrderService) {
		this._order.getOrderByUser().subscribe(({ data }) => (this.orders = data));
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

	checkShowButtom(order: any) {
		let check = true;
		const currentTime = new Date(); // Thời gian hiện tại
		const pastTime = new Date(order.createdAt); // Thời gian cần so sánh
		// Thêm 15 phút vào thời gian đã trôi qua
		const fifteenMinutesLater = new Date(pastTime.getTime() + 15 * 60 * 1000);

		// Vượt quá thời gian 15 phút
		if (currentTime > fifteenMinutesLater || order.payment?.status) {
			check = false;
		}

		return check;
	}

	cancelledOrder(id: string) {
		this._order.cancelOrder(id).subscribe(
			({ data }) =>
				(this.orders = this.orders.map((order: any) => {
					if (order._id == id) {
						order.status = "cancelled";
					}
					return order;
				}))
		);
	}
}
