import { Component } from "@angular/core";
import { IProduct } from "app/interfaces/Product";
import { ProductService } from "app/services/product.service";

@Component({
	selector: "app-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
	products!: IProduct[];
	trousers:any[]=[]
	constructor(private productService: ProductService) {
		this.productService.getProducts({_limit:4}).subscribe((data) => (this.products = data.data));
		this.productService.getProducts({_limit:4, _category:"6480ad8472dca7a8efa902df" }).subscribe((data) => {
			(this.trousers = data.data)
		});
	}
}
