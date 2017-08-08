import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOrganizationChartComponent } from './ng-organization-chart.component';
import { NgOrganizationChartNodeComponent } from './ng-organization-chart-node/ng-organization-chart-node.component';
import { NgOrganizationChartListComponent } from './ng-organization-chart-list/ng-organization-chart-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgOrganizationChartComponent,
    NgOrganizationChartNodeComponent,
    NgOrganizationChartListComponent
  ],
  exports: [NgOrganizationChartComponent],
  entryComponents: [
    NgOrganizationChartNodeComponent,
    NgOrganizationChartListComponent
  ]
})
export class NgOrganizationChartModule { }