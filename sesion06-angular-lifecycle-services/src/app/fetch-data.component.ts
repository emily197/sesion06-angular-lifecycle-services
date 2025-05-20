import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
//decorador
@Component({
  //selector html
  selector: 'app-fetch-data',
  //funciona sin modulo
  standalone: true,
  imports:[CommonModule], // agregar en fetch-data
  template: `<div *ngIf="data">Datos: {{ data }}</div>`
})

export class FetchDataComponent implements OnInit, OnDestroy {

  data: any;
  private subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log('Solicitando datos..');
    this.subscription = this.dataService.getData().subscribe(result => {
      //se le asigna un atributo desde datService
      console.log('::getData subscription, obtenido ', result);
      this.data = result;
      console.log('::ahora obteniendo los datos', this.data);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
