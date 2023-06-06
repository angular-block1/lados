import { Component } from '@angular/core';
import { ICategory } from 'app/interfaces/Category';
import { IProduct } from 'app/interfaces/Product';
import { CategoryService } from 'app/services/category.service';
import { ProductService } from 'app/services/product.service';
import slugify from 'slugify'

@Component({
  selector: 'app-product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.scss']
})
export class ProductAddFormComponent {
  product: IProduct = {
    name: "",
    price: 0,
    images: [""],
    category: "",
    stock: 0,
    slug: ""
  }
  categories: ICategory[] = []
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.categoryService.getCategories().subscribe(data => this.categories = data)
  }
  handleSubmit() {
    this.productService.createProduct(this.product).subscribe((data) => {
      console.log(data)
    })
  }
  updateSlug() {
    this.product.slug = slugify(this.product.name as string, "-")
  }
}
