import { NgOrganizationChartNodeModel } from './ng-organization-chart-node-model';
import { NgOrganizationChartNodeComponent } from './ng-organization-chart-node/ng-organization-chart-node.component';
import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-organization-chart',
  templateUrl: './ng-organization-chart.component.html',
  styleUrls: ['./ng-organization-chart.component.css']
})
export class NgOrganizationChartComponent implements OnInit {

  @Input() data: Array<NgOrganizationChartNodeModel> = [];
  @Input() remoteData: boolean = false;
  @Output() onClickNode: EventEmitter<NgOrganizationChartNodeModel> = new EventEmitter()
  @Output() onDragNode: EventEmitter<any> = new EventEmitter()

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() { }

  onClickDeepNode(node) {
    this.onClickNode.emit(node);
  }

  onDragDeepNode(transfer) {
    this.onDragNode.emit(transfer)
  }

}
