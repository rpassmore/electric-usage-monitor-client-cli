import { ReadingsService } from './app.readings.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { NouisliderComponent } from 'ng2-nouislider';

@Component({
  selector: 'app-root',
  providers: [ReadingsService],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],    
})

export class AppComponent {
  title = 'Electricity Monitor';  
}
