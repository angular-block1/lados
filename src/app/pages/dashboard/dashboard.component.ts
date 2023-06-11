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
       console.log(this.revenue);
       
      const date = new Date();
      const getMonth = date.getMonth();
        this.money=this.revenue[getMonth];
        const sale = (this.revenue[getMonth]-this.revenue[getMonth-1])/(this.revenue[getMonth-1] || this.revenue[getMonth])*100
        this.sales=sale  
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
      type: 'line',
      data: {
        labels: this.month,
        datasets: [
          {
            label:"Doanh thu",
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            data: this.revenue,
          },
        ],
      },
    });
  }
  }
