# Cuestionario de preguntas
### 1. ¿En qué hook deberías suscribirte a un servicio de datos?
  En el `ngOnInit` ya que es el primero en levantar o inicializar un componente, es el ideal para suscribir un servicio como las de HTTP.
  ```
  ngOnInit() {
    this.userService.getUser().subscribe(...);
  }
  ```

### 2. ¿Cuál es la diferencia entre ngOnInit y ngOnChanges?
  - `ngOnInit`: Se ejecuta una sola vez al inicializar el componente. Es ideal para la carga de datos y hacer la configuración inicial de un componente.
  - `ngOnChanges`: Se emplea cada vez que cambia un `@Input()`. Ademas se activa antes del `ngOnInit` y tambien en cambios posteriores. Es decir reacciona a cambios en propiedades.


### 3. ¿Qué hook usarías para limpiar timers o suscripciones?
Emplearia el `ngOnDestroy` el cual se emplea para la limpiar:
- Suscripciones a Observables
- setInterval, setTimeout
- WebSocket, listeners, etc.
```
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
```

### 4. ¿Cuándo se ejecuta ngAfterViewInit?
Se ejecuta después de que Angular ha renderizado completamente la vista del componente, incluyendo elementos hijos y marcados con `@ViewChild`.\
Es útil para:
- Acceder al DOM de elementos de los hijos.
- IInicializar librerías que requieren el DOM (ej. jQuery plugins, gráficos, etc.)
```
@ViewChild('miElemento') el!: ElementRef;

ngAfterViewInit() {
  console.log(this.el.nativeElement); // Ya está disponible
}
```

### 5. ¿Por qué es importante implementar ngOnDestroy?
Es importante implementarlo por:
- Evitar fugas de memoria al dejar suscripciones activas.
- Limpiar tareas en segundo plano como WebSockets o setInterval.
- Liberar recursos.
- Mantener el ciclo de vida del componente limpio y controlado.
```
ngOnDestroy() {
  this.mySubscription.unsubscribe();
  console.log('Componente destruido y recursos liberados');
}
```
