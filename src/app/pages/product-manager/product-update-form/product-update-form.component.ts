import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    slug: "",
    description: ""
  }
  categories: ICategory[] = []
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id')
      if (id) {
        this.productService.getProduct(id).subscribe(response => this.product = response.data)
      }

    })
    this.categoryService.getCategories().subscribe(response => this.categories = response.data)
  }
  handleSubmit() {
    this.productService.updateProduct(this.product._id as string, this.product).subscribe(() => {
      this.router.navigateByUrl("admin/products")
    })
  }
  updateSlug() {
    this.product.slug = slugify(this.product.name as string, "-")
  }
}
