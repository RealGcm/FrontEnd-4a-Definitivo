import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrls: ['./desafio-final.css']
})
export class DesafioFinalComponent {
  nomeAluno = '';
  disciplinas = 1;
  mensagemMatricula = '';

  aumentar() {
    this.disciplinas++;
  }

  diminuir() {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  matricular() {
    this.mensagemMatricula = `Matrícula realizada para ${this.nomeAluno} em ${this.disciplinas} disciplina(s).`;
  }
}