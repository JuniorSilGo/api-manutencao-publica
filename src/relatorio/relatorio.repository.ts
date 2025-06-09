import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Relatorio } from './relatorio.model';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import { Equipamento } from '../equipamento/equipamento.model';

@Injectable()
export class RelatorioRepository {
  constructor(
    @InjectModel(Relatorio)
    private readonly relatorioModel: typeof Relatorio,
  ) {}

async create(dto: CreateRelatorioDto): Promise<Relatorio> {
  return this.relatorioModel.create(dto);
}

  async findAll(): Promise<Relatorio[]> {
    return this.relatorioModel.findAll({ include: [Equipamento] });
  }

  async findById(id: number): Promise<Relatorio | null> {
    return this.relatorioModel.findByPk(id, { include: [Equipamento] });
  }

  async delete(id: number): Promise<void> {
    const relatorio = await this.findById(id);
    if (relatorio) {
      await relatorio.destroy();
    }
  }

  async findByTipo(tipo: string): Promise<Relatorio[]> {
    return this.relatorioModel.findAll({
      where: { tipo },
      include: [Equipamento],
    });
  }

  async save(relatorio: Relatorio): Promise<Relatorio> {
    return relatorio.save();
  }
}
