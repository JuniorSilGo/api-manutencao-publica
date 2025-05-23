import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Funcionario } from './funcionario.model';

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

  async update(
    id_funcionario: number,
    dados: Partial<Funcionario>,
  ): Promise<[number]> {
    return this.funcionarioModel.update(dados, { where: { id_funcionario } });
  }

  async destroy(id_funcionario: number): Promise<number> {
    return this.funcionarioModel.destroy({ where: { id_funcionario } });
  }

  async disable(id_funcionario: number): Promise<[number]> {
    return this.funcionarioModel.update( { ativo: 0 }, { where: { id_funcionario } } );
  }

  async enable(id_funcionario: number): Promise<[number]> {
    return this.funcionarioModel.update( { ativo: 1 }, { where: { id_funcionario } } );
  }

  // async getStatus(id_funcionario: number): Promise<Funcionario | null> {
  //   const funcionario = await this.funcionarioModel.findByPk( id_funcionario );
  //   return funcionario;
  // }


}
