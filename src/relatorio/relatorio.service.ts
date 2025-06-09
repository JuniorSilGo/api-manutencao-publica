import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RelatorioRepository } from './relatorio.repository';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Equipamento } from '../equipamento/equipamento.model';

@Injectable()
export class RelatorioService {
  constructor(
    private readonly repository: RelatorioRepository,

    @InjectModel(Equipamento)
    private readonly equipamentoModel: typeof Equipamento,
  ) {}

  create(dto: CreateRelatorioDto) {
    return this.repository.create(dto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    const relatorio = await this.repository.findById(id);
    if (!relatorio) throw new NotFoundException('Relatório não encontrado');
    return relatorio;
  }

  remove(id: number) {
    return this.repository.delete(id);
  }

  findByTipo(tipo: string) {
    return this.repository.findByTipo(tipo);
  }

  async gerar(id: number) {
    const relatorio = await this.findOne(id);
    relatorio.conteudo = {
      resumo: `Conteúdo gerado para o relatório ${relatorio.titulo}`,
      dataGeracao: new Date().toISOString(),
    };
    return this.repository.save(relatorio);
  }

  async addEquipamentos(relatorioId: number, equipamentoIds: number[]) {
    const relatorio = await this.findOne(relatorioId);
    const equipamentos = await this.equipamentoModel.findAll({
      where: { id: equipamentoIds },
    });
    await relatorio.$set('equipamentos', equipamentos);
    return relatorio;
  }

  async getEquipamentos(relatorioId: number) {
    const relatorio = await this.findOne(relatorioId);
    return relatorio.$get('equipamentos');
  }
}
