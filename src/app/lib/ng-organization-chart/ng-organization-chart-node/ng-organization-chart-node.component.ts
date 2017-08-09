import { NgOrganizationChartNodeModel } from './../ng-organization-chart-node-model';
import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ng-organization-chart-node',
  templateUrl: './ng-organization-chart-node.component.html',
  styleUrls: ['./ng-organization-chart-node.component.css']
})
export class NgOrganizationChartNodeComponent implements OnInit {

  @Input() node: NgOrganizationChartNodeModel
  @ViewChild("treeTarget", { read: ViewContainerRef }) private treeTarget;

  @Output() onClickNode: EventEmitter<NgOrganizationChartNodeModel> = new EventEmitter()

  private childrenClass: string = ""

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    /*for (let i in this.node.children) {
      let node: NgOrganizationChartNodeModel = this.node.children[i];
      let nodeComponent = this.componentFactoryResolver.resolveComponentFactory(NgOrganizationChartNodeComponent);
      let nodeComponentRef = this.treeTarget.createComponent(nodeComponent);
      nodeComponentRef.instance.node = node;
      nodeComponentRef.instance.onClickNode.subscribe(clickedNode => {
        this.onClickNode.emit(clickedNode)
      })
    }*/
  }

  changeChildrenDisplay() {
    if (this.childrenClass == "") {
      this.childrenClass = "vertical";
    } else {
      this.childrenClass = "";
    }
  }

  clickNode() {
    this.onClickNode.emit(this.node);
  }

}
