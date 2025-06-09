import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Equipamento } from './equipamento.model';
import { Funcionario } from '../funcionario/funcionario.model';
import { Op } from 'sequelize';

@Injectable()
export class EquipamentoRepository {
  constructor(
    @InjectModel(Equipamento)
    private equipamentoModel: typeof Equipamento,
  ) {}

  findAllWithRelations() {
    return this.equipamentoModel.findAll({
      include: [{ model: Funcionario, as: 'responsavel' }],
    });
  }

  findByIdWithRelations(id: number) {
    return this.equipamentoModel.findByPk(id, {
      include: [{ model: Funcionario, as: 'responsavel' }],
    });
  }

  buscarPorTermo(termo: string) {
    return this.equipamentoModel.findAll({
      where: {
        [Op.or]: [
          { nome: { [Op.iLike]: `%${termo}%` } },
          { modelo: { [Op.iLike]: `%${termo}%` } },
          { numeroSerie: { [Op.iLike]: `%${termo}%` } },
        ],
      },
      include: [{ model: Funcionario, as: 'responsavel' }],
    });
  }
}
