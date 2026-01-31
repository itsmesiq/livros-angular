import { Component, signal } from '@angular/core';
import { LivroLista } from "./livro-lista/livro-lista";

@Component({
  selector: 'app-root',
  imports: [LivroLista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('livros-angular');
}
