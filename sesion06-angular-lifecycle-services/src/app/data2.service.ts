import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//usa un servicio que esu n decoradoor injectble
//para se usad por otros componentes
@Injectable({
  providedIn: 'root'
})
export class Data2Service {
  private messageSubject = new BehaviorSubject<string>('Mensaje inicial');
  message$ = this.messageSubject.asObservable();// es un valor que se espera emitir y recibir (como una promesa)

  // al usar eventos pdemos emitr un valor
  // y que varios componentes lo reciban
  //ejm se actualiza el carrito de cmpras entonces el header lo recibe, el contenido de la aplicacion, etc

  //loe events globals a nivel del navegador
  //eventos comunes: onClick, onScroll, onResize, ..

  //emitimos un valor al event de comportamiento
  setMessage(newMessage: string) {
    //usamos next a este evento para enviar al evento
    // y qe el evento lo emita
    this.messageSubject.next(newMessage);
  }
}
