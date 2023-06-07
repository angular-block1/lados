import { Component,  AfterViewInit, ViewChild } from '@angular/core';
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

  constructor() {}

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
            data: [12, 19, 3, 17, 28, 24,10,10,10,10,10,10],
          },
        ],
      },
    });
  }
  }
