import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JustgageModule } from 'angular2-justgage';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { CurrentReadingsComponent } from './current-readings/current-readings.component';
import { HistoricReadingsComponent } from './historic-readings/historic-readings.component';
import { RecentReadingsComponent } from './recent-readings/recent-readings.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,    
    ChartComponent,
    CurrentReadingsComponent,
    HistoricReadingsComponent,
    RecentReadingsComponent,
    NavBarComponent,
  ],
  imports: [
    AppRoutingModule,   
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    NouisliderModule,
    JustgageModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
