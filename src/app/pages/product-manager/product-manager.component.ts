import { Component } from '@angular/core';
import { IProduct } from 'app/interfaces/Product';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent {
  products: IProduct[] = []
  constructor(private productService: ProductService) {
    this.productService.getProducts({}).subscribe(data => this.products = data)
  }
  onRemove(id: any) {
    if (window.confirm("Bạn chắc chắn muốn xóa chứ?")) {
      this.productService.deteProduct(id).subscribe(() => {
        this.products = this.products.filter(data => data.id != id)
      })
    }

  }
}
