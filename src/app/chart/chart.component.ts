import { Reading } from '../app.reading';
import { ReadingsService } from '../app.readings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elec-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {
  // lineChart 
  public lineChartData: Array<any> = [
    { data: [], label: 'Power' }    
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  
  constructor() {
  }

  public ngOnInit() {    
  }

  private hoursToMilli(hours : number) : number {
    return hours * 60 * 60 * 1000;
  }  

  public updateChart(data: Array<Reading>): void {
    let powerReadingsData: Array<number> = new Array(); 
      let dateReadingsData: Array<Date> = new Array();
            
      data.forEach((r) => {
        powerReadingsData.push(r.power);        
        dateReadingsData.push(r.date);
      });

      let _lineChartData: Array<any> = new Array();                    
      _lineChartData.push({ data: powerReadingsData, label: 'Power'});      
      this.lineChartData = _lineChartData;
      this.lineChartLabels = dateReadingsData; 
  } 

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }  


}
