import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "app/interfaces/Product";
import { ProductService } from "app/services/product.service";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
	selector: "app-product-detail",
	templateUrl: "./product-detail.component.html",
	styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent {
	product: IProduct = {} as IProduct;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

	constructor(private productService: ProductService, private router: ActivatedRoute) {
		this.router.paramMap.subscribe((params) => {
			const slug = String(params.get("slug"));
			this.productService.getProduct(slug).subscribe((data) => {
				this.product = data.data[0];
			});
		});
	}
}
