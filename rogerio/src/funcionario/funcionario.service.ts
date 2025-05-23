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
}
