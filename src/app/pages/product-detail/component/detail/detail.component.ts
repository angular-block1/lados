import { Component } from '@angular/core';
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  faUser = faUser;
  faCartShopping = faCartShopping;
}
