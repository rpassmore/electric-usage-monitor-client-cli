import { InputDecorator } from '@angular/core/src/metadata/directives';
import { Reading } from '../app.reading';
import { Observable } from 'rxjs/Rx';
import { ReadingsService } from '../app.readings.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-current-readings',
  templateUrl: './current-readings.component.html',
  styleUrls: ['./current-readings.component.scss']
})
export class CurrentReadingsComponent {
  public reading: Reading;  
  //public readings: Observable<Reading>;

  constructor(private _readingsService: ReadingsService) {
  }

  public ngOnInit() {
    setInterval(() => this.getCurrentReadings(), 5000);
  }

  private getCurrentReadings() {
    this._readingsService.getCurrentReadings().subscribe(data => this.reading = data);
    //this.readings = this._readingsService.getCurrentReadings();
  }

  public getPower() : Number {
    //return this.reading.power;    
    return 56;
  }
}




