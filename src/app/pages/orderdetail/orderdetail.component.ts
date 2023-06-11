import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OrderService } from "app/services/order.service";
import * as moment from "moment";

@Component({
	selector: "app-orderdetail",
	templateUrl: "./orderdetail.component.html",
	styleUrls: ["./orderdetail.component.scss"],
})
export class OrderdetailComponent {
	order: any = {};
	status: any = [];

	constructor(private _order: OrderService, private router: ActivatedRoute) {
		this.router.paramMap.subscribe((params) => {
			const id = String(params.get("id"));
			this._order.getOrder(id).subscribe(({ data }) => {
				this.order = data;
				this.status = [
					{
						name: "Đang xử lý",
						value: "processing",
						disabled: data.status !== "processing" ? true : false,
					},
					{
						name: "Xác nhận",
						value: "confirmed",
						disabled: data.status == "processing" ? false : true,
					},
					{
						name: "Đang vận chuyển",
						value: "delivering",
						disabled: data.status == "processing" || data.status == "confirmed" ? false : true,
					},
					{
						name: "Hủy",
						value: "cancelled",
						disabled: data.status == "processing" ? false : true,
					},
					{
						name: "Hoàn thành",
						value: "delivered",
						disabled:
							data.status == "processing" || data.status == "confirmed" || data.status == "delivering"
								? false
								: true,
					},
				];
			});

			console.log(this.order.status);
		});
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
					class: "btn--green",
					title: "Đã xác nhận",
				};
			case "delivering":
				return {
					class: "btn--blue",
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

	handleChangeOrderStatus(e: any) {
		const status = e.target.value;
		this._order
			.changerOrderStatus({ status }, this.order._id)
			.subscribe(({ data }) => (this.order.status = status));
	}
}
