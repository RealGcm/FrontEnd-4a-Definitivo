import { Component } from '@angular/core';

interface Tarefa{
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'media' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-ex13',
  standalone: false,
  templateUrl: './ex13.html',
  styleUrl: './ex13.css',
})
export class Ex13 {

  tarefas: Tarefa[] = [
    {id: 1, titulo: 'Fazer o almoço', responsavel: 'Felipe', prioridade: 'media', concluida: false},
    {id: 2, titulo: 'Fazer o Jantar', responsavel: 'Gabriel', prioridade: 'alta', concluida: true},
    {id: 3, titulo: 'Lavar o quintal', responsavel: 'Maria', prioridade: 'baixa', concluida: false},
    {id: 4, titulo: 'Lavar o carro', responsavel: 'Caio', prioridade: 'alta', concluida: true},
    {id: 5, titulo: 'Abastecer o carro', responsavel: 'João', prioridade: 'alta', concluida: false },
    {id: 6, titulo: 'Aspirar o sofá', responsavel: 'Marcos', prioridade: 'baixa', concluida: false },
  ];

  totalTarefas = this.tarefas.length;
  tarefasConcluidas = this.tarefas.filter(t => t.concluida).length;
  tarefasPendentes = this.tarefas.filter(t => !t.concluida).length;

  alternarConclusao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;

    this.tarefasConcluidas = this.tarefas.filter(t => t.concluida).length;
    this.tarefasPendentes = this.tarefas.filter(t => !t.concluida).length;
  }

  
}