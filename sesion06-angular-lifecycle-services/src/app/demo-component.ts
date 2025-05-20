import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  standalone: true,
  template: `<div>Demo Component</div>`
})
export class DemoComponent implements
  OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() data: any;

  constructor() {
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}



// {
//   path: 'demo',
//   loadComponent: () => import('./components/demo-component').then((m) => m.DemoComponent)
// }
