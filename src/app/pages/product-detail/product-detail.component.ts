
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'app/interfaces/Product';
import { ProductService } from 'app/services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: "app-product-detail",
	templateUrl: "./product-detail.component.html",
	styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent {

  product: IProduct = {

  } as IProduct
  products:any[]=[]



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


  constructor(private productService: ProductService, private router: ActivatedRoute, private route:Router) {
    this.router.paramMap.subscribe(params => {
      const slug = String(params.get('slug'));
      
      this.productService.getProduct(slug).subscribe(data => {
        this.product=data.data
        
        this.productService.getProducts({_category:data.data.category._id}).subscribe(({data})=>this.products=data)
      }) 
    })
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
  nextpage(slug:string){
		this.route.navigate([`product/${slug}`])
	}
  

}
