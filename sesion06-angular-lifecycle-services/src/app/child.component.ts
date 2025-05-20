import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
  <div class="alert alert-primary mt-4" role="alert">
    <h4>Componente Hijo - Lucke</h4>
    <p>Mensaje recibido: {{ message }}</p>
    <button (click)="enviarRespuesta()" class="btn btn-primary">Enviar respuesta al padre</button>
  </div>
  `
})
export class ChildComponent {
  @Input() message: string = '';

  @Output() notify = new EventEmitter<string>();

  enviarRespuesta() {
    if (this.message === '') {
      this.notify.emit('No me enviaste nada padre');
    }
    else {
    this.notify.emit('¡Nooooooo! ¡Hola padre! Recibí tu mensaje.');
    }
  }
}
