import { Injectable } from '@nestjs/common';
import { EquipamentoRepository } from './equipamento.repository';
import { Equipamento } from './equipamento.model';

@Injectable()
export class EquipamentoService {
  constructor(private readonly repository: EquipamentoRepository) {}

  async listar(): Promise<Equipamento[]> {
    return this.repository.getAll();
  }

  async visualizar(id: number): Promise<Equipamento | null> {
    return this.repository.getOne(id);
  }

  async criar(dados: Partial<Equipamento>): Promise<Equipamento> {
    return this.repository.create(dados);
  }

  async atualizar(id: number, dados: Partial<Equipamento>): Promise<[number]> {
    return this.repository.update(id, dados);
  }

  async deletar(id: number): Promise<number> {
    return this.repository.destroy(id);
  }
}
