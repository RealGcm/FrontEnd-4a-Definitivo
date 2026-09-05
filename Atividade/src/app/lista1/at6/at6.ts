import { Component } from '@angular/core';

@Component({
  selector: 'app-at6',
  standalone: false,
  templateUrl: './at6.html',
  styleUrls: ['./at6.css']
})
export class At6Component {
  quantidade = 0;

  incrementar() {
    this.quantidade++;
  }

  decrementar() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}