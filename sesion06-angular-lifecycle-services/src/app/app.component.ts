import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo-component';
import { FetchDataComponent } from './fetch-data.component';
import { TimerComponent } from './timer.component';
import { ViewChildComponent } from './view-child.component';
import { ParentComponent } from './parent.component';
import { ProducerComponent } from './producer.component';
import { ConsumerComponent } from './consumer.component';
import { StartComponent } from './start.component';
@Component({
  selector: 'app-root',
  standalone: true,
  //importaciones de componentes
  imports: [RouterOutlet,
    FormsModule,
    CommonModule,
    DemoComponent,
    FetchDataComponent,
    TimerComponent,
    ViewChildComponent,
    ParentComponent,
    ProducerComponent,
    ConsumerComponent,
    StartComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'sesion06-angular-lifecycle-services';
  valor:string = '';
  tareas: string[] = [];
}
