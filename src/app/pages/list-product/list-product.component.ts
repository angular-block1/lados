import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IProduct } from "app/interfaces/Product";
import { CategoryService } from "app/services/category.service";
import { ProductService } from "app/services/product.service";

@Component({
	selector: "app-list-product",
	templateUrl: "./list-product.component.html",
	styleUrls: ["./list-product.component.scss"],
})
export class ListProductComponent {
	products:any[]=[]
	productDetail:any[]=[]
	cates:any[]=[]
	constructor(private productService: ProductService, private router:Router,private cate:CategoryService) {
		this.productService.getProducts({}).subscribe((data) =>{
			this.products=data.data
			
		} );
		
		this.cate.getCategories().subscribe(({data})=>{
			const arr =data.filter((item:any)=>item.name!="Không xác định")
			console.log(arr);
			this.cates= arr
		})
	}
	all(){
		this.productService.getProducts({}).subscribe((data) =>{
			this.products=data.data
			
		} );
	}
	nextpage(slug:string){
		this.router.navigate([`product/${slug}`])
	}
	findCate(id:any){
		this.productService.getProducts({_category:id}).subscribe((data) =>{
			this.products=data.data
			
		} );
	}
}
