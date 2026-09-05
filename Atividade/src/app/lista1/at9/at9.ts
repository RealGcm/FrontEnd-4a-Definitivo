import { Component } from '@angular/core';

@Component({
  selector: 'app-at9',
  standalone: false,
  templateUrl: './at9.html',
  styleUrls: ['./at9.css']
})
export class At9Component {
  produto = 'Teclado Mecânico';
  estoque = 0;

  aumentar() {
    this.estoque++;
  }

  diminuir() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}