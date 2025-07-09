import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Funcao } from './funcao.model';
import { FuncaoDto } from './dto/funcao.dto';
import { FuncaoUpdateDto } from './dto/funcao-update.dto';
import { Funcionario } from '../funcionario/funcionario.model';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class FuncaoRepository {
  constructor(
    @InjectModel(Funcao)
    private readonly funcaoModel: typeof Funcao,
    private readonly sequelize: Sequelize,
  ) {}

  async getAll(offset = 0, limit = 10): Promise<{ rows: Funcao[]; count: number }> {
    return this.funcaoModel.findAndCountAll({
      offset,
      limit,
      order: [['id_funcao', 'ASC']],
    });
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

    // async getAllWithFuncionarios(): Promise<Funcao[]> {
    //   return this.funcaoModel.findAll({
    //     include: [
    //       {
    //         association: 'funcionarios', // <- usa o alias definido no @HasMany
    //         attributes: ['id_funcionario', 'nome'],
    //         where: { ativo: 1 },
    //         required: false, // permite retornar função mesmo sem funcionário
    //       },
    //     ],
    //   });
    // }

    /* DESISTO DE TENTAR RESOLVER USANDO O SEQUELIZE KKKKKKKKKK VOU PRO SQL BRUTO MESMO
      JURO QUE EU TENTEI FAZER OS JOINS PELO SEQUELIZE MAS EU DESISTO
    */

  async getAllWithFuncionarios(): Promise<any[]> {
    const [results] = await this.sequelize.query(`
      SELECT f.id_funcao, 
          f.funcao, 
          f.setor,
          json_agg(
            json_build_object(
              'id', fu.id_funcionario,
              'nome', fu.nome
            )
          ) FILTER (WHERE fu.id_funcionario IS NOT NULL) AS funcionarios
      FROM funcoes f
        LEFT JOIN funcionarios fu 
          ON fu.id_funcao = f.id_funcao 
          AND fu.ativo = 1
      GROUP BY f.id_funcao
        , f.funcao
        , f.setor
      ORDER BY 1
    `);

    return results;
  } /* BEM MELHOR E FUNCIONANDO !!!!! */
}
