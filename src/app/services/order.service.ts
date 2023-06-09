import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _api: ApiService) { }
  getAllOrders() {

  }
  getBill(){
    return this._api.getTypeRequest("/order/ds")
  }
}
