import { Component } from '@angular/core';

@Component({
  selector: 'app-at10',
  standalone: false,
  templateUrl: './at10.html',
  styleUrls: ['./at10.css']
})
export class At10Component {
  usuario = '';
  senha = '';
  mensagemBoasVindas = '';

  entrar() {
    this.mensagemBoasVindas = `Bem-vindo, ${this.usuario}!`;
  }
}