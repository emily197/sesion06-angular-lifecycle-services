import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: true,
  template: `
    <h3>Demo ViewChild y AfterViewInit</h3>
    <div class="row g-3">
      <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">Email</label>
        <input class="form-control" #inputRef type="text" placeholder="Escribe algo...">
      </div>
      <div class="col-auto">
        <button class="btn btn-primary mb-3" (click)="focusInput()">Enfocar input</button>
      </div>
    </div>
  `
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('inputRef') inputElement!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    // El input ya está disponible en el DOM
    this.inputElement.nativeElement.value = 'Texto inicial desde AfterViewInit';
  }

  focusInput() {
    this.inputElement.nativeElement.focus();
  }
}
