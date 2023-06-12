import { Component } from '@angular/core';
import { IProduct } from 'app/interfaces/Product';
import { ProductService } from 'app/services/product.service';
import * as moment from 'moment';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent {
  products: IProduct[] = []
  totalPages: number = 1;
  currentPage: number = 1;
  isSortedByPrice: boolean = true
  constructor(private productService: ProductService) {
    this.productService.getProducts({ _page: this.currentPage }).subscribe(response => {
      this.products = response.data
      this.totalPages = response.totalPages
    })
  }
  sortByPrice() {
    let _order = this.isSortedByPrice ? "asc" : "desc"
    this.productService.getProducts({ _page: this.currentPage, _order, _sort: "price" }).subscribe(response => {
      this.products = response.data
      this.totalPages = response.totalPages
    })
    return this.isSortedByPrice = !this.isSortedByPrice
  }
  formatDate(value: any) {
    return moment(value).format("DD-MM-YYYY HH:mm:ss");
  }
  onRemove(_id: any) {
    if (window.confirm("Bạn chắc chắn muốn xóa chứ?")) {
      this.productService.deteProduct(_id).subscribe(() => {
        this.products = this.products.filter(data => data._id != _id)
      })
    }

  }
  getRange(num: number): number[] {
    return Array.from({ length: num }, (_, index) => index + 1);
  }
  changeCurrentPage(num: number) {
    this.productService.getProducts({ _page: num }).subscribe(response => {
      this.products = response.data
      this.currentPage = num
    })
  }
  prevPage() {
    if (this.currentPage > 1) this.currentPage--
    this.productService.getProducts({ _page: this.currentPage }).subscribe(response => {
      this.products = response.data
    })
  }
  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++
    this.productService.getProducts({ _page: this.currentPage }).subscribe(response => {
      this.products = response.data
    })
  }
}
