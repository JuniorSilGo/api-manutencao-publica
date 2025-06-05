import { Injectable } from '@nestjs/common';
import { FuncionarioRepository } from './funcionario.repository';
import { Funcionario } from './funcionario.model';

@Injectable()
export class FuncionarioService {
  constructor(private readonly repository: FuncionarioRepository) {}

  async listar(): Promise<Funcionario[]> {
    return this.repository.getAll();
  }

  async vizualisar(id: number): Promise<Funcionario | null> {
    return this.repository.getOne(id);
  }

  async criar(dados: Partial<Funcionario>): Promise<Funcionario> {
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
    if (funcionario.ativo == 1) {
      throw new Error('Funcionário já está ativado!');
    }

    console.log(funcionario);

    return this.repository.enable(id);
  }

  async desativar(id: number) {
    const funcionario = await this.repository.getOne(id);

    if (!funcionario) {
      throw new Error('Funcionário não encontrado!');
    }
    if (funcionario.ativo == 0) {
      throw new Error('Funcionário já está desativado!');
    }

    console.log(funcionario);

    return this.repository.disable(id);
  }
}
