import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ManutencaoFuncionario } from './manutencao-funcionario.model';
import { Manutencao } from '../manutencao/manutencao.model';
import { Funcionario } from '../funcionario/funcionario.model';

@Injectable()
export class ManutencaoFuncionarioService {
  constructor(
    @InjectModel(ManutencaoFuncionario)
    private manutencaoFuncionarioModel: typeof ManutencaoFuncionario,
  ) {}

  async create(manutencaoId: number, funcionarioId: number): Promise<ManutencaoFuncionario> {
    return this.manutencaoFuncionarioModel.create({
      manutencaoId,
      funcionarioId,
    });
  }

  async findAll(): Promise<ManutencaoFuncionario[]> {
    return this.manutencaoFuncionarioModel.findAll({
      include: [Manutencao, Funcionario],
    });
  }

  async findByManutencao(manutencaoId: number): Promise<Funcionario[]> {
    const registros = await this.manutencaoFuncionarioModel.findAll({
      where: { manutencaoId },
      include: [Funcionario],
    });
    return registros.map((r) => r.get('Funcionario') as unknown as Funcionario);
  }

  async findByFuncionario(funcionarioId: number): Promise<Manutencao[]> {
    const registros = await this.manutencaoFuncionarioModel.findAll({
      where: { funcionarioId },
      include: [Manutencao],
    });
    return registros.map((r) => r.get('Manutencao') as unknown as Manutencao);
  }

  async delete(manutencaoId: number, funcionarioId: number): Promise<number> {
    return this.manutencaoFuncionarioModel.destroy({
      where: { manutencaoId, funcionarioId },
    });
  }
}
