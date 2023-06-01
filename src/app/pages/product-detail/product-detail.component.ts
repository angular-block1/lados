import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'app/interfaces/Product';
import { ProductService } from 'app/services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: IProduct = {

  } as IProduct
  images!: any[];

  constructor(private productService: ProductService, private router: ActivatedRoute) {
    this.router.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.productService.getOneProduct(id).subscribe(data => {
        this.product = data;
        this.images = data.imageProducts
      })
    })
  }

}
