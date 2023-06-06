import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'app/interfaces/Category';
import { IProduct } from 'app/interfaces/Product';
import { CategoryService } from 'app/services/category.service';
import { ProductService } from 'app/services/product.service';
import slugify from 'slugify';

@Component({
  selector: 'app-product-update-form',
  templateUrl: './product-update-form.component.html',
  styleUrls: ['./product-update-form.component.scss']
})
export class ProductUpdateFormComponent {
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
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id')
      if (id) {
        this.productService.getProduct(id).subscribe(data => this.product = data)
      }

    })
    this.categoryService.getCategories().subscribe(data => this.categories = data)
  }
  handleSubmit() {
    console.log(this.product)
  }
  updateSlug() {
    this.product.slug = slugify(this.product.name as string, "-")
  }
}
