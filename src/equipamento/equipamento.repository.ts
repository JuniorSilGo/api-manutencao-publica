import { InjectModel } from '@nestjs/sequelize';
import { Equipamento } from './equipamento.model';
import { Funcionario } from '../funcionario/funcionario.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EquipamentoRepository {
  constructor(
    @InjectModel(Equipamento)
    private readonly equipamentoModel: typeof Equipamento,
  ) {}

  async create(data: Partial<Equipamento>): Promise<Equipamento> {
    return this.equipamentoModel.create(data as Equipamento);
  }

  async findAll(): Promise<Equipamento[]> {
    return this.equipamentoModel.findAll({
      include: [{ model: Funcionario, as: 'responsavel' }],
    });
  }

  async findById(id: number): Promise<Equipamento | null> {
    return this.equipamentoModel.findByPk(id, {
      include: [{ model: Funcionario, as: 'responsavel' }],
    });
  }

  async update(id: number, data: Partial<Equipamento>): Promise<void> {
    await this.equipamentoModel.update(data, { where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.equipamentoModel.destroy({ where: { id } });
  }
}
