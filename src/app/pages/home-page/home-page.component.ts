import { Component } from '@angular/core';
import { IProduct } from 'app/interfaces/Product';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  products!: IProduct[]
  constructor(private productService: ProductService) {
    this.productService.getProducts('?limit=4').subscribe(data => {
      this.products = data
    })
  }
}
