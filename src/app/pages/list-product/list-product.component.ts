import { Component } from "@angular/core";
import { ProductService } from "app/services/product.service";

@Component({
	selector: "app-list-product",
	templateUrl: "./list-product.component.html",
	styleUrls: ["./list-product.component.scss"],
})
export class ListProductComponent {
	constructor(private productService: ProductService) {
		this.productService.getProducts().subscribe((data) => console.log(data));
	}
}
