import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecentReadingsComponent } from './recent-readings/recent-readings.component';
import { CurrentReadingsComponent } from './current-readings/current-readings.component';
import { HistoricReadingsComponent } from './historic-readings/historic-readings.component';

const routes: Routes = [
  { path: '', redirectTo: '/current', pathMatch: 'full' },
  { path: 'current',  component: CurrentReadingsComponent },
  { path: 'recent', component: RecentReadingsComponent },
  { path: 'historic',     component: HistoricReadingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
