import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.html',
  styleUrl: './livro-dados.css',
})
export class LivroDados implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = "";
  public editoras: Array<Editora> = [];

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;
  private router: Router;

  constructor(servEditora: ControleEditoraService, servLivros: ControleLivrosService, router: Router){
    this.servEditora = servEditora;
    this.servLivros = servLivros;
    this.router = router;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}
