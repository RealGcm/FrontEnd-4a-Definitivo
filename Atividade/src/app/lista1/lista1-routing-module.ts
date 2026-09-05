import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { DesafioFinalComponent } from './desafio-final/desafio-final';

const routes: Routes = [
  { path: 'at1', component: At1Component },
  { path: 'at2', component: At2Component },
  { path: 'at3', component: At3Component },
  { path: 'at4', component: At4Component },
  { path: 'at5', component: At5Component },
  { path: 'at6', component: At6Component },
  { path: 'at7', component: At7Component },
  { path: 'at8', component: At8Component },
  { path: 'at9', component: At9Component },
  { path: 'at10', component: At10Component },
  { path: 'at11', component: At11Component },
  { path: 'desafio-final', component: DesafioFinalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lista1RoutingModule { }