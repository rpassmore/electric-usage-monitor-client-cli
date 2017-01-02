import { ChartComponent } from '../chart/chart.component';
import { ReadingsService } from '../app.readings.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({  
  selector: 'recent-readings',
  templateUrl: './recent-readings.component.html',
  styleUrls: ['./recent-readings.component.scss']
})
export class RecentReadingsComponent {
  public someRange: number[] = [0, 24];
  public sliderConfig: any = {
    tooltips: [true, true],
  };

  @ViewChild(ChartComponent)
  public elecChart: ChartComponent;

  constructor(private _readingsService: ReadingsService) {
  }

  public ngOnInit() {
    this.getRecentReadings();
  }

  private hoursToMilli(hours: number): number {
    return hours * 60 * 60 * 1000;
  }

  private getRecentReadings() {
    let refDate = new Date();
    let end: Date = new Date(refDate.valueOf() - this.hoursToMilli(this.someRange[0]));
    let start: Date = new Date(refDate.valueOf() - this.hoursToMilli(this.someRange[1]));

    this._readingsService.getRecentReadings(start, end).subscribe(data => {
      this.elecChart.updateChart(data);
    });
  }

  onChange(value: any) {
    this.getRecentReadings();
    console.log('Value changed to', value);
  }
}
