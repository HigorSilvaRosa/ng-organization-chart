import { NgOrganizationChartNodeModel } from './../ng-organization-chart-node-model';
import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ng-organization-chart-node',
  templateUrl: './ng-organization-chart-node.component.html',
  styleUrls: ['./ng-organization-chart-node.component.css']
})
export class NgOrganizationChartNodeComponent implements OnInit {

  @Input() node: NgOrganizationChartNodeModel
  @Output() onClickNode: EventEmitter<NgOrganizationChartNodeModel> = new EventEmitter()
  @Output() onDragNode: EventEmitter<any> = new EventEmitter()

  private childrenStyleClass: string = "horizontal"
  private isChildrenVisible: boolean = true;

  constructor() { }

  ngOnInit() { }

  clickNode() {
    this.onClickNode.emit(this.node);
  }

  onClickDeepNode(node) {
    this.onClickNode.emit(node);
  }

  changeChildrenStyleToVertical() {
    this.childrenStyleClass = "vertical"
  }

  changeChildrenStyleToHorizontal() {
    this.childrenStyleClass = "horizontal"
  }

  hideChildren() {
    this.isChildrenVisible = false;
  }

  showChildren() {
    this.isChildrenVisible = true;
  }

  dropNode(event) {
    let transfer = {
      node: event.dragData,
      destination: this.node
    }
    this.onDragNode.emit(transfer)
  }

  onDragDeepNode(transfer) {
    this.onDragNode.emit(transfer)
  }
}
