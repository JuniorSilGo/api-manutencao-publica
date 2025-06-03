import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Funcao } from './funcao.model';
import { FuncaoDto } from './dto/funcao.dto';
import { FuncaoUpdateDto } from './dto/funcao-update.dto';

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

  async create(dados: FuncaoDto): Promise<Funcao> {
    return this.funcaoModel.create(dados as any);
  }

  async update(
    id_funcao: number,
    dados: FuncaoUpdateDto,
  ): Promise<[number]> {
    return this.funcaoModel.update(dados as any, { where: { id_funcao } });
  }

  async destroy(id_funcao: number): Promise<number> {
    return this.funcaoModel.destroy({ where: { id_funcao } });
  }

  async disable(id_funcao: number): Promise<[number]> {
    return this.funcaoModel.update({ ativo: 0 }, { where: { id_funcao } });
  }

  async enable(id_funcao: number): Promise<[number]> {
    return this.funcaoModel.update({ ativo: 1 }, { where: { id_funcao } });
  }

  async getAllWithFuncionarios(): Promise<Funcao[]> {
    return this.funcaoModel.findAll({
      include: {
        association: 'funcionarios',
        attributes: ['id_funcionario', 'nome'],
        where: { ativo: 1 },
        required: false,
      },
    });
  }

}
