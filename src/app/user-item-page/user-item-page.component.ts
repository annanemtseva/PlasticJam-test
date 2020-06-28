import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-user-item-page',
  templateUrl: './user-item-page.component.html',
  styleUrls: ['./user-item-page.component.scss']
})
export class UserItemPageComponent implements OnInit {
  Linechart = [];
  // data = [
  //   1, 4, 8, 3, 0, 8, 7, 5, 111, 45
  // ]

  constructor() { }

  ngOnInit() {

    this.Linechart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Now', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', ],
        datasets: [{
          label: 'clicks',
          data: [120, 190, 300, 500, 200, 0, 0, 300],
          backgroundColor: [
            'transparent',
          ],
          borderColor: [
            'rgba(58,128,186,1)',
          ],
          borderWidth: 4
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            spanGaps: false,
            gridLines: {
              display: false,
              drawOnChartArea: false,
              drawTicks: false
            },
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }



}
