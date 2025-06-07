import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Equipamento } from './equipamento.model';

@Injectable()
export class EquipamentoRepository {
  constructor(
    @InjectModel(Equipamento)
    private readonly equipamentoModel: typeof Equipamento,
  ) {}

  async getAll(): Promise<Equipamento[]> {
    return this.equipamentoModel.findAll();
  }

  async getOne(id_equipamento: number): Promise<Equipamento | null> {
    return this.equipamentoModel.findByPk(id_equipamento);
  }

  async create(dados: Partial<Equipamento>): Promise<Equipamento> {
    return this.equipamentoModel.create(dados);
  }

  async update(
    id_equipamento: number,
    dados: Partial<Equipamento>,
  ): Promise<[number]> {
    return this.equipamentoModel.update(dados, { where: { id_equipamento } });
  }

  async destroy(id_equipamento: number): Promise<number> {
    return this.equipamentoModel.destroy({ where: { id_equipamento } });
  }
}
