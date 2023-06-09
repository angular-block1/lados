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
    this.productService.getProducts({}).subscribe(response => this.products = response.data)
    console.log(this.products)
  }
  onRemove(_id: any) {
    if (window.confirm("Bạn chắc chắn muốn xóa chứ?")) {
      this.productService.deteProduct(_id).subscribe(() => {
        this.products = this.products.filter(data => data._id != _id)
      })
    }

  }
}
