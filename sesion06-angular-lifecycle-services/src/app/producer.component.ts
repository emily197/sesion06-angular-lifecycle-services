import { Component } from '@angular/core';
import { Data2Service } from './data2.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h4>Componente Productor</h4>
    <input [(ngModel)]="mensaje" placeholder="Nuevo mensaje" />
    <button (click)="enviar()">Enviar mensaje</button>
  `
})
export class ProducerComponent {
  mensaje = '';

  constructor(private dataService: Data2Service) {}

  enviar() {
    this.dataService.setMessage(this.mensaje);
    this.mensaje = '';
  }
}
