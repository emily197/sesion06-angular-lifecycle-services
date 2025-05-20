import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-random',
  standalone: true,
  template: `
    <div class="mb-4">
      <button type='button' (click)='random()' class="btn btn-primary">Generate User ID </button>
    </div>
    `
})

export class RandomComponent {
  @Input() pref:string;
  @Output() generateUserId: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.pref = "";
  }
  random() {
    if( this.pref !== "" ) {
      const uid =  `${this.pref}-${Math.floor(Math.random() * 1000)}`;
      this.generateUserId.emit(uid);
    }
    else {
      this.generateUserId.emit('No se ha ingresado el prefijo');
    }
  }
}
