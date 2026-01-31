import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[] = [
    {codigo: 1, codEditora: 1, titulo: 'Use a Cabeça: Java', resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (POO) e Java.', autores: ["Bert Bates", "Kathy Sierra"]},
    {codigo: 2, codEditora: 2, titulo: 'Java, como Programar', resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.', autores: ["Paul Deitel", "Harvey Deitel"]},
    {codigo: 3, codEditora: 3, titulo: 'Teste 3', resumo: 'Esse é o terceiro livro teste', autores: ["Autor 1", "Autor 2"]}
  ];

  obterLivros(){
    return this.livros;
  }

  incluir(livro: Livro) : void{
    let maiorCodigo = 0;
    for(let l of this.livros){
      if(l.codigo > maiorCodigo){
        maiorCodigo = l.codigo;
      }
    }

    livro.codigo = maiorCodigo +1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void{
    const index = this.livros.findIndex(i => i.codigo === codigo);

   if(index !== -1){
    this.livros.splice(index, 1);
   } 
  }
}
