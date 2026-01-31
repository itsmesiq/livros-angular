import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Editora[] = [
    {codEditora: 1, nome: 'Pearson'},
    {codEditora: 2, nome: 'O’Reilly'},
    {codEditora: 3, nome: 'Addison-Wesley'}
  ];

  getEditoras(){
    return this.editoras;
  }

  getNomeEditora = (codEditora: number) => this.editoras.filter(e => e.codEditora === codEditora)[0]?.nome;
}
