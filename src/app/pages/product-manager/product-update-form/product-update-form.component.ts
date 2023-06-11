import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'app/interfaces/Category';
import { CategoryService } from 'app/services/category.service';
import { ProductService } from 'app/services/product.service';
import { UploadImageService } from 'app/services/upload-image.service';
import slugify from 'slugify';

@Component({
  selector: 'app-product-update-form',
  templateUrl: './product-update-form.component.html',
  styleUrls: ['./product-update-form.component.scss']
})
export class ProductUpdateFormComponent {
  currentCategory: any
  categories: ICategory[] = []
  imageURLs: string[] = []
  productForm = this.fb.group({
    name: ['', Validators.required],
    price: ["", [Validators.required, Validators.min(10000)]],
    category: [{}, Validators.required],
    stock: ["", [Validators.required, Validators.min(1)]],
    slug: ["", Validators.required],
    description: ["", Validators.required],
  })
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private _upload: UploadImageService
  ) {

    this.route.paramMap.subscribe(param => {
      const slug = param.get('slug')
      if (slug) {
        this.productService.getProduct(slug).subscribe(({ data }) => {
          this.productForm?.get('name')?.setValue(data.name, { emitEvent: false })
          this.productForm?.get('price')?.setValue(data.price, { emitEvent: false })
          this.productForm?.get('slug')?.setValue(data.slug, { emitEvent: false })
          this.productForm?.get('stock')?.setValue(data.stock, { emitEvent: false })
          this.productForm?.get('description')?.setValue(data.description, { emitEvent: false })
          this.productForm?.get('category')?.setValue(data.category, { emitEvent: false })
          this.currentCategory = data.category._id
        })
      }
    })

    this.categoryService.getCategories().subscribe(response => this.categories = response.data)
  }

  handleUpload(events: any) {
    const formData = new FormData();
    if (events.target.files.length > 0) {
      for (const file of events.target.files) {
        formData.append('images', file);
      }
    }
    this._upload.uploadImage(formData).subscribe(({ urls }) => this.imageURLs = [...urls])
  }
  handleSubmit() {
    if (this.productForm.invalid) return
    this.productService.createProduct({ ...this.productForm.value, images: [...this.imageURLs] }).subscribe(() => {
      this.router.navigateByUrl("admin/products")
    })
  }
  updateSlug(event: any) {
    this.productForm?.get('slug')?.setValue(slugify(event.target.value, "-"), { emitEvent: false })
  }
}
