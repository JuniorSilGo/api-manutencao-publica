import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Funcionario } from './funcionario.entity';

@Injectable()
export class FuncionarioRepository {
  constructor(
    @InjectModel(Funcionario)
    private readonly funcionarioModel: typeof Funcionario,
  ) {}

  async getAll(): Promise<Funcionario[]> {
    return this.funcionarioModel.findAll();
  }

  async getOne(id_funcionario: number): Promise<Funcionario | null> {
    return this.funcionarioModel.findByPk(id_funcionario);
  }

  async create(dados: Partial<Funcionario>): Promise<Funcionario> {
    return this.funcionarioModel.create(dados);
  }

  async update(id_funcionario: number, dados: Partial<Funcionario>): Promise<[number]> {
    return this.funcionarioModel.update(dados, { where: { id_funcionario } });
  }

  async destroy(id_funcionario: number): Promise<number> {
    return this.funcionarioModel.destroy({ where: { id_funcionario } });
  }
}
