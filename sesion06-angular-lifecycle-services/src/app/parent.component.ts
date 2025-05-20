import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule, CommonModule, ChildComponent],
  template: `
    <h3>Componente Padre - Dark Vader</h3>
    <input class="form-control" [(ngModel)]="parentMessage" placeholder="Mensaje para el hijo" />
    <app-child
      [message]="parentMessage"
      (notify)="onNotify($event)">
    </app-child>
    <p *ngIf="childResponse">Respuesta del hijo: {{ childResponse }}</p>
  `
})
export class ParentComponent {
  parentMessage = '';
  childResponse = '';

  onNotify(msg: string) {
    this.childResponse = msg;
  }
}

// <app-hijo (notificar)="manejarNotificacion($event)"></app-hijo>
