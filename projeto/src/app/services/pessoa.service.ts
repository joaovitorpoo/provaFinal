import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoas: Pessoa[] = [];

  constructor(private storage: Storage) { }

  async insertPessoa (pessoa:Pessoa) {
    await this.atualizarDados();
    pessoa.id = this.idOpen();
    if (this.pessoas == null) {
      this.pessoas = [ pessoa ];
      this.storage.set('pessoas', this.pessoas);
    } else {
      this.pessoas.push(pessoa);
      this.storage.set('pessoas', this.pessoas);
    }
    await this.atualizarDados();
    console.log(pessoa);
  }

  getPessoa(racaCor:string){
    let pessoasRacaCor: Pessoa[] = [];
    for (let index = 0; index < this.pessoas.length; index++) {
      if (this.pessoas[index].racaCor == racaCor) {
        pessoasRacaCor.push(this.pessoas[index]);
      }    
    }
    return pessoasRacaCor;
  }

  getPessoaId(id:number) {
    for (let index = 0; index < this.pessoas.length; index++) {
      if (this.pessoas[index].id == id) {
        return this.pessoas[index];
      }    
    }
    return null;
  }

  idOpen(){
    if (this.pessoas == null || this.pessoas.length == 0) {
      return 0;
    } else {
      return this.pessoas.length;
    }
  }

  async atualizarDados() {
    await this.storage.get('pessoas').then((value: Pessoa[]) => this.pessoas = value);
  }
}
