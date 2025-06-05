import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Servico } from './servico.model';

@Injectable()
export class ServicoRepository {
  constructor(
    @InjectModel(Servico)
    private readonly servicoModel: typeof Servico,
  ) {}

  async getAll(): Promise<Servico[]> {
    return this.servicoModel.findAll();
  }

  async getOne(id_funcionario: number): Promise<Servico | null> {
    return this.servicoModel.findByPk(id_funcionario);
  }

  async create(dados: Partial<Servico>): Promise<Servico> {
    return this.servicoModel.create(dados);
  }

  async update(id_servico: number, dados: Partial<Servico>): Promise<[number]> {
    return this.servicoModel.update(dados, { where: { id_servico } });
  }

  async destroy(id_servico: number): Promise<number> {
    return this.servicoModel.destroy({ where: { id_servico } });
  }
}
