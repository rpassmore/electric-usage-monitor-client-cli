import { ChartComponent } from '../chart/chart.component';
import { ReadingsService } from '../app.readings.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({  
  selector: 'app-historic-readings',
  templateUrl: './historic-readings.component.html',
  styleUrls: ['./historic-readings.component.scss']
})
export class HistoricReadingsComponent implements OnInit {

@ViewChild(ChartComponent)  
public elecChart: ChartComponent;  

  constructor(private _readingsService: ReadingsService) {    
  }

  public ngOnInit() {
    this.getHistoricReadings();
  }

  private hoursToMilli(hours : number) : number {
    return hours * 60 * 60 * 1000;
  }

  private getHistoricReadings() {
    let refDate = new Date();
    let end : Date = new Date();
    let start : Date = new Date(0);

    this._readingsService.getDailyReadings(start, end).subscribe(data => {
      this.elecChart.updateChart(data); 
    });
  }   
}