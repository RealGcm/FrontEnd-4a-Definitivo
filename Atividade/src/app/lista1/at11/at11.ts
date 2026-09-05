import { Component } from '@angular/core';

@Component({
  selector: 'app-at11',
  standalone: false,
  templateUrl: './at11.html',
  styleUrls: ['./at11.css']
})
export class At11Component {
  produto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho() {
    this.mensagem = `Adicionado ${this.quantidade}x ${this.produto} ao carrinho.`;
  }
}