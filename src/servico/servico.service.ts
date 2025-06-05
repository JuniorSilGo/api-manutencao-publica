import { Injectable } from '@nestjs/common';
import { ServicoRepository } from './servico.repository';
import { Servico } from './servico.model';

@Injectable()
export class ServicoService {
  constructor(private readonly repository: ServicoRepository) {}

  async listar(): Promise<Servico[]> {
    return this.repository.getAll();
  }

  async visualizar(id: number): Promise<Servico | null> {
    return this.repository.getOne(id);
  }

  async criar(dados: Partial<Servico>): Promise<Servico> {
    return this.repository.create(dados);
  }

  async atualizar(id: number, dados: Partial<Servico>): Promise<[number]> {
    return this.repository.update(id, dados);
  }

  async deletar(id: number): Promise<number> {
    return this.repository.destroy(id);
  }
}
