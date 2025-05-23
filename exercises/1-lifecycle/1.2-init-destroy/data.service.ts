import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(): Observable<string> {
    // Simula una llamada a API
    return of('Información cargada correctamente');
  }
}
