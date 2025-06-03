import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Funcionario } from './funcionario.model';
import { FuncionarioDto } from './dto/funcionario.dto';
import { FuncionarioUpdateDto } from './dto/funcionario-update.dto';

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

  async create(dados: FuncionarioDto): Promise<Funcionario> {
    return this.funcionarioModel.create(dados as any);
  }

  async update(
    id_funcionario: number,
    dados: FuncionarioUpdateDto,
  ): Promise<[number]> {
    return this.funcionarioModel.update(dados as any, {
      where: { id_funcionario },
    });
  }

  async destroy(id_funcionario: number): Promise<number> {
    return this.funcionarioModel.destroy({ where: { id_funcionario } });
  }

  async disable(id_funcionario: number): Promise<[number]> {
    return this.funcionarioModel.update({ ativo: 0 }, { where: { id_funcionario } });
  }

  async enable(id_funcionario: number): Promise<[number]> {
    return this.funcionarioModel.update({ ativo: 1 }, { where: { id_funcionario } });
  }

  async getByFuncao(id_funcao: number): Promise<Funcionario[]> {
    return this.funcionarioModel.findAll({
      where: { id_funcao },
    });
  }

}
