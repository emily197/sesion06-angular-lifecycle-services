import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  template: `<div>Segundos: {{ seconds }}</div>`
})
export class TimerComponent implements OnInit, OnDestroy {
  seconds = 0;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.seconds++;
    }, 1000);//1000
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    console.log('se llama???');
  }
}
