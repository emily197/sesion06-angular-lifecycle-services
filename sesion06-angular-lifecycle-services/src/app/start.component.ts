import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RandomComponent } from './random.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [FormsModule, RandomComponent],
  template: `
  <h2 class="mt-4">Start Component</h2>
  <div class="container">
    <div class="mb-3">
      <label class="form-label">Nombre</label>
      <input [(ngModel)]="name" type="text" class="form-control" placeholder="Nombre">
    </div>
    <div class="mb-3">
      <label class="form-label">Prefixo</label>
      <input [(ngModel)]="prefix" type="text" class="form-control" placeholder="Prefijo">
    </div>
    <app-random
      [pref] = "prefix"
      (generateUserId)="onGenerateUserId($event)"
    ></app-random>
    <div class="alert alert-dark" role="alert">
      {{ name }} - UserID : {{ userId }}
    </div>
  </div>
  `
})
export class StartComponent implements OnInit, OnDestroy {
  name : string = "Angular";
  prefix: string = "";
  userId: string = "";

  private userIdSubscription?: Subscription;

  ngOnInit(): void {
    this.name = "Punky";
    console.log('Llamando al ngOnInit');
  }

  onGenerateUserId(uid: string): void {
    console.log('Usando la OnGenerarUserId', uid)
    this.userId = uid;
  }

  ngOnDestroy(): void {
    console.log('Llamando a ngOnDestroy');
      this.name = '';
  this.prefix = '';
  this.userId = '';
  console.log('[ngOnDestroy] Datos reseteados');
    /*if (this.userIdSubscription) {
      this.userIdSubscription.unsubscribe();
      console.log('[ngOnDestroy] Subscripción limpiada');
    } else {
      console.log('[ngOnDestroy] Sin suscripción que limpiar');
    }*/
  }
}
