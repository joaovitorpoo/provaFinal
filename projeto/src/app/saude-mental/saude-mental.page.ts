import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-saude-mental',
  templateUrl: './saude-mental.page.html',
  styleUrls: ['./saude-mental.page.scss'],
})
export class SaudeMentalPage implements OnInit {

  model = {} as Pessoa;
  id: number;
  racaCor: string;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
  }

  async save() {
    await this.pessoaService.insertPessoa(this.model);
  }

  async buscarPessoas() {
    let pessoas: Pessoa[] = [];
    await this.pessoaService.atualizarDados();
    pessoas = await this.pessoaService.getPessoa(this.racaCor);
    if (pessoas.length == 0) {
      console.log("Nao tem nenhuma pessoa com essa cor cadastrado");
    } else {
      console.log(pessoas);
    }
  }

  async buscarPessoaId() {
    let pessoa: Pessoa;
    await this.pessoaService.atualizarDados();
    pessoa = await this.pessoaService.getPessoaId(this.id);
    if (pessoa == null) {
      console.log("Nao tem nenhuma pessoa cadastrada com esse id");
    } else {
      console.log(pessoa);
    }
  }
}
