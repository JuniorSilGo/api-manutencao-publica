import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Manutencao } from './manutencao.model';

@Injectable()
export class ManutencaoRepository {
  constructor(
    @InjectModel(Manutencao)
    private readonly ManutencaoModel: typeof Manutencao,
  ) {}

  async getAll(): Promise<Manutencao[]> {
    return this.ManutencaoModel.findAll();
  }
}
