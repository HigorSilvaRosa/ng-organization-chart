import { NgOrganizationChartModule } from './ng-organization-chart/ng-organization-chart.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgOrganizationChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
