import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4',
  standalone: false,
  templateUrl: './ex4.html',
  styleUrl: './ex4.css',
})
export class Ex4 {
  nomeProduto = 'Mouse';
  estoque = 10;

  adicionar(): void {
    this.estoque++;
  }

  remover(): void {
    if(this.estoque > 0){
      this.estoque--;
    }
  }

}