import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necessário para ngModel nas próximas atividades[cite: 1, 2]
import { Lista1RoutingModule } from './lista1-routing-module';
import { At1Component } from './at1/at1';
import { At2Component } from './at2/at2';
import { At3Component } from './at3/at3';
import { At4Component } from './at4/at4';
import { At5Component } from './at5/at5';
import { At6Component } from './at6/at6';
import { At7Component } from './at7/at7';
import { At8Component } from './at8/at8';
import { At9Component } from './at9/at9';
import { At10Component } from './at10/at10';
import { At11Component } from './at11/at11';
import { DesafioFinalComponent } from './desafio-final/desafio-final'; // Nome correto da classe

@NgModule({
  declarations: [
    At1Component,
    At2Component,
    At3Component,
    At4Component,
    At5Component,
    At6Component,
    At7Component,
    At8Component,
    At9Component,
    At10Component,
    At11Component,
    DesafioFinalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, //[cite: 1, 2]
    Lista1RoutingModule,
  ],
  exports: [
    At1Component, // Permite usar <app-at1> no app.html
    At2Component, // Permite usar <app-at2> no app.html
    At3Component,
    At4Component,
    At5Component,
    At6Component,
    At7Component,
    At8Component,
    At9Component,
    At10Component,
    At11Component,
    DesafioFinalComponent,
  ],
})
export class Lista1Module {}
