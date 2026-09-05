import { Component } from '@angular/core';

@Component({
  selector: 'app-at1',
  standalone: false,
  templateUrl: './at1.html',
  styleUrls: ['./at1.css']
})
export class At1Component {
  nome = 'Carlos';
  idade = 25;
  curso = 'Sistemas de Informação';
}