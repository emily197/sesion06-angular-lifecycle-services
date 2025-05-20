import { Component, OnInit } from '@angular/core';
import { Data2Service } from './data2.service';

@Component({
  selector: 'app-consumer',
  standalone: true,
  template: `
  <div class="alert alert-warning mt-4" role="alert">
    <h4>Componente Consumidor</h4>
    <p>Mensaje recibido: {{ mensaje }}</p>
    </div>
  `
})
export class ConsumerComponent implements OnInit {
  mensaje = '';

  constructor(private dataService: Data2Service) {}

  ngOnInit() {
    this.dataService.message$.subscribe(msg => {
      this.mensaje = msg;
    });
  }
}
