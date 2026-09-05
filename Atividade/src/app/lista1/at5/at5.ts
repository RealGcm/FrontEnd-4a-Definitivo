import { Component } from '@angular/core';

@Component({
  selector: 'app-at5',
  standalone: false,
  templateUrl: './at5.html',
  styleUrls: ['./at5.css']
})
export class At5Component {
  curtidas = 0;

  curtir() {
    this.curtidas++;
  }
}