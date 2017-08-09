import { NgOrganizationChartNodeModel } from './../ng-organization-chart-node-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-organization-chart-list',
  templateUrl: './ng-organization-chart-list.component.html',
  styleUrls: ['./ng-organization-chart-list.component.css']
})
export class NgOrganizationChartListComponent implements OnInit {

  @Input() nodeList: Array<NgOrganizationChartNodeModel> =[];

  constructor() { }

  ngOnInit() {
  }

}
