import { Injectable } from '@nestjs/common';
import { FuncionarioRepository } from './funcionario.repository';
import { Funcionario } from './funcionario.model';
import { FuncaoRepository } from '../funcao/funcao.repository';

@Injectable()
export class FuncionarioService {
  constructor(private readonly repository: FuncionarioRepository
          ,private readonly funcaoRepository: FuncaoRepository) {}

  async listar(): Promise<Funcionario[]> {
    return this.repository.getAll();
  }

  async vizualisar(id: number): Promise<Funcionario | null> {
    return this.repository.getOne(id);
  }

  async criar(dados: Partial<Funcionario>): Promise<Funcionario> {
  const idfun = dados.id_funcao;

  if (idfun === undefined) {
    throw new Error('ID da função não informado');
  }

  const funcao = await this.funcaoRepository.getOne(idfun);

  if (!funcao) {
    throw new Error(`Função com ID ${idfun} não encontrada`);
  }

  return this.repository.create(dados);
}


  async atualizar(id: number, dados: Partial<Funcionario>): Promise<[number]> {
    return this.repository.update(id, dados);
  }

  async deletar(id: number): Promise<number> {
    return this.repository.destroy(id);
  }

  async ativar(id: number) {
    const funcionario = await this.repository.getOne(id);

    if (!funcionario) {
      throw new Error('Funcionário não encontrado!');
    }
    if (funcionario.dataValues.ativo == 1) {
      throw new Error('Funcionário já está ativado!');
    }

    console.log(funcionario);

    return this.repository.enable(id);
  }

  async desativar(id: number) {
    const funcionario = await this.repository.getOne(id);
    console.log(funcionario?.dataValues);

    if (!funcionario) {
      throw new Error('Funcionário não encontrado!');
    }
    if (funcionario.dataValues.ativo == 0) {
      throw new Error('Funcionário já está desativado!');
    }


    return this.repository.disable(id);
  }

  
}
