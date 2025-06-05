import { Injectable } from '@nestjs/common';
import { Manutencao } from './manutencao.model';
import { ManutencaoRepository } from './manutencao.repository';

@Injectable()
export class ManutencaoService {
  constructor(private readonly repository: ManutencaoRepository) {}

  async listar(): Promise<Manutencao[]> {
    return this.repository.getAll();
  }
}
