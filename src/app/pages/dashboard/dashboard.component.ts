import { Component,  AfterViewInit, ViewChild } from '@angular/core';
import { CategoryService } from 'app/services/category.service';
import { OrderService } from 'app/services/order.service';
import { ProductService } from 'app/services/product.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements  AfterViewInit{
  canvas: any;
  ctx: any;
  month:string[]=["January","February","March","April","May","June","July","August","September","October","November","December"]
  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };

  pieChart: any;
  data:number[]=[]
  products:any[]=[]
  cates:any[]=[]
  sales:any=0
  revenue:any[]=[]
  money=0
  orders:any[]=[]
  constructor(private orderBill:OrderService,private productService:ProductService, private cateservice:CategoryService) {
    this.orderBill.getBill().subscribe((item)=>{
      for(let i = 0 ;i<item.arr.length;i++){
         this.revenue.push(item.arr[i].reduce((acc:any, val:any) => acc + val, 0))
       }
      const date = new Date();
      const getMonth = date.getMonth();
        this.money=this.revenue[getMonth];
      const sale = (this.revenue[getMonth]-this.revenue[getMonth-1])/this.revenue[getMonth-1]*100
       if(isNaN(sale)){
        this.sales=0
       }else{
        this.sales=sale
       }
    })
    this.productService.getProducts({}).subscribe(({data})=>this.products=data)
    this.cateservice.getCategories().subscribe(({data})=>this.cates=data)
    this.orderBill.getAllOrders().subscribe(({data})=>this.orders=data)
  }

  ngAfterViewInit(): void {
    this.pieChartBrowser();
  }
  pieChartBrowser(): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.pieChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: this.month,
        datasets: [
          {
            backgroundColor: [
              '#2ecc71',
              '#3498db',
              '#95a5a6',
              '#9b59b6',
              '#f1c40f',
              '#e74c3c',
              '#FFCCFF',
              '#6600FF',
              '#993300',
              '#777777',
              '#222222',
            ],
            data: this.revenue,
          },
        ],
      },
    });
  }
  }
