import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'app/interfaces/Category';
import { IProduct } from 'app/interfaces/Product';
import { CategoryService } from 'app/services/category.service';
import { ProductService } from 'app/services/product.service';
import { UploadImageService } from 'app/services/upload-image.service';
import slugify from 'slugify'

@Component({
  selector: 'app-product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.scss']
})
export class ProductAddFormComponent {
  productForm: FormGroup
  categories: ICategory[] = []
  imageURLs: string[] = []
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private fb: FormBuilder,
    private _upload: UploadImageService
  ) {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      price: ["", [Validators.required, Validators.min(10000)]],
      category: ["", Validators.required],
      stock: ["", [Validators.required, Validators.min(1)]],
      slug: ["", Validators.required],
      description: ["", Validators.required],
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
