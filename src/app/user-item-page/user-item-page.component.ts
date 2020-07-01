import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpService, User } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-item-page',
  templateUrl: './user-item-page.component.html',
  styleUrls: ['./user-item-page.component.scss']
})
export class UserItemPageComponent implements OnInit {

  response: User;
  userId: number;
  params: Params;
  ClickLineChart = Chart;
  ViewsLineChart = Chart;
  days = [];
  clicks = [];
  views = [];


  constructor(
    private http: HttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.params = params;
      this.userId = +(params.id);
      // console.log(this.userIdToString);
      // console.log('params userId', typeof this.userId);

    });


    this.http.getUser(this.userId).subscribe(response => {
      this.clicks = response.map(user => user.clicks);
      this.views = response.map(user => user.page_views);
      this.days = response.map(user => user.date);


      this.ClickLineChart.data.labels = this.days;
      this.ClickLineChart.data.datasets.forEach((dataset) => {
        dataset.data = this.clicks;
        dataset.label = 'clicks';
      });
      this.ClickLineChart.update();

      this.ViewsLineChart.data.labels = this.days;
      this.ViewsLineChart.data.datasets.forEach((dataset) => {
        dataset.data = this.views;
        dataset.label = 'views';
      });
      this.ViewsLineChart.update();
    });


    let configChart = {
      type: 'line',
      data: {
        datasets: [{
          // label: 'clicks',
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
    }

    this.ClickLineChart = new Chart('clickCanvas', configChart);

    this.ViewsLineChart = new Chart('viewsCanvas', configChart);

  }
}

