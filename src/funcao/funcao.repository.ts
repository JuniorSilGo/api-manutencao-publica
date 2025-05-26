import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Funcao } from './funcao.model';

@Injectable()
export class FuncaoRepository {
  constructor(
    @InjectModel(Funcao)
    private readonly funcaoModel: typeof Funcao,
  ) {}

  async getAll(): Promise<Funcao[]> {
    return this.funcaoModel.findAll();
  }

  async getOne(id_funcao: number): Promise<Funcao | null> {
    return this.funcaoModel.findByPk(id_funcao);
  }

  async create(dados: Partial<Funcao>): Promise<Funcao> {
    return this.funcaoModel.create(dados);
  }

  async update(
    id_funcao: number,
    dados: Partial<Funcao>,
  ): Promise<[number]> {
    return this.funcaoModel.update(dados, { where: { id_funcao } });
  }

  async destroy(id_funcao: number): Promise<number> {
    return this.funcaoModel.destroy({ where: { id_funcao } });
  }

  async disable(id_funcao: number): Promise<[number]> {
    return this.funcaoModel.update( { ativo: 0 }, { where: { id_funcao } } );
  }

  async enable(id_funcao: number): Promise<[number]> {
    return this.funcaoModel.update( { ativo: 1 }, { where: { id_funcao } } );
  }
}
