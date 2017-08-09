# Let's organize everything!

This is a simple Angular 2/4 component that you can use to render organization charts.

## Demo

Check the demo [here](https://ng-organization-chart.firebaseapp.com/)!

## Features

 * Render hierarchical trees;
 * Show and hide node's children;
 * Drag and drop node movement;
 * Works with remote and local data;

## Usage exemple

### HTML

```html
	<ng-organization-chart [data]="data" (onClickNode)="clickNode($event)" (onDragNode)="dragNode($event)"></ng-organization-chart>
```
### Data
```json
[
   {
      id: "Boss",
      children: [
        { id: "Person#1", children: [] },
        { id: "Person#2", children: [] },
        { id: "Person#3", children: [] },
      ]
   }
]
```

I'm still working on it.
