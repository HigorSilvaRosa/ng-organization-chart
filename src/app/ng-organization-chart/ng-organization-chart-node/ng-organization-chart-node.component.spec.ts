/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgOrganizationChartNodeComponent } from './ng-organization-chart-node.component';

describe('NgOrganizationChartNodeComponent', () => {
  let component: NgOrganizationChartNodeComponent;
  let fixture: ComponentFixture<NgOrganizationChartNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOrganizationChartNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOrganizationChartNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
