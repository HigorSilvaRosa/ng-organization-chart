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
  @Output() onClickNode: EventEmitter<NgOrganizationChartNodeModel> = new EventEmitter()

  @ViewChild("treeTarget", { read: ViewContainerRef }) private treeTarget;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    /*for (let i in this.data) {
      let node: NgOrganizationChartNodeModel = this.data[i];
      let nodeComponent = this.componentFactoryResolver.resolveComponentFactory(NgOrganizationChartNodeComponent);
      let nodeComponentRef = this.treeTarget.createComponent(nodeComponent);
      nodeComponentRef.instance.node = node;
      nodeComponentRef.instance.onClickNode.subscribe(clickedNode => {
        this.onClickNode.emit(clickedNode)
      })
    }*/
  }

  private renderNode(node: NgOrganizationChartNodeModel) {
    let html = '<li>';
    html += '<a>' + node.id + '</a>';
    if (node.children.length > 0) {
      html += '<ul>';
      for (let i in node.children) {
        let childNode = node.children[i]
        html += this.renderNode(childNode)
      }
      html += '</ul>';
    }
    html += '</li>'
    return html
  }

  private renderTree() {
    let html = '<ul>';
    for (let i in this.data) {
      let node = this.data[i]
      html += this.renderNode(node)
    }
    html += '</ul>'
    return html
  }

}
