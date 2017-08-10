import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { NgOrganizationChartComponent } from './ng-organization-chart.component';
import { NgOrganizationChartNodeComponent } from './ng-organization-chart-node/ng-organization-chart-node.component';
import { NgOrganizationChartListComponent } from './ng-organization-chart-list/ng-organization-chart-list.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2DragDropModule.forRoot(),
  ],
  declarations: [
    NgOrganizationChartComponent,
    NgOrganizationChartNodeComponent,
    NgOrganizationChartListComponent
  ],
  exports: [
    NgOrganizationChartComponent,
  ],
  entryComponents: [
    NgOrganizationChartNodeComponent,
    NgOrganizationChartListComponent
  ],
})
export class NgOrganizationChartModule { }