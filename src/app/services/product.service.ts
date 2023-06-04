import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = 'http://localhost:3000/products'
  constructor(private http: HttpClient) { }
  getProducts(options: string): Observable<any> {
    return this.http.get(this.baseURL + options)
  }
  getOneProduct(id:string | number):Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`)
  }
}
