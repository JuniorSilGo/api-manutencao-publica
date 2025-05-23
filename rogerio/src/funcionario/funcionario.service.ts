import { Injectable } from '@nestjs/common';
import { FuncionarioRepository } from './funcionario.repository';
import { Funcionario } from './funcionario.entity';

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
    const status = await this.repository.getStatus(id);

    if (!status) {
      throw new Error('Funcionário não encontrado!');
    }
    if (status.ativo === 1) {
      throw new Error('Funcionário já está ativado!');
    }

    return this.repository.enable(id);
  }

  async desativar(id: number) {
    const status = await this.repository.getStatus(id);

    if (!status) {
      throw new Error('Funcionário não encontrado!');
    }
    if (status.ativo === 0) {
      throw new Error('Funcionário já está desativado!');
    }

    return this.repository.disable(id);
  }

  
}
