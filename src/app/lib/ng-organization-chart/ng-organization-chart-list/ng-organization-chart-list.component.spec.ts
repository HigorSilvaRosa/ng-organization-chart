/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgOrganizationChartListComponent } from './ng-organization-chart-list.component';

describe('NgOrganizationChartListComponent', () => {
  let component: NgOrganizationChartListComponent;
  let fixture: ComponentFixture<NgOrganizationChartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOrganizationChartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOrganizationChartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
