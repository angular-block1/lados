import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.scss']
})
export class OrderManagerComponent {
  constructor(private router:Router){}

}
