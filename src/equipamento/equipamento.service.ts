import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Equipamento } from './equipamento.model';
import { CreateEquipamentoDto } from './dto/create-equipamento.dto';
import { UpdateEquipamentoDto } from './dto/update-equipamento.dto';
import { EquipamentoRepository } from './equipamento.repository';

@Injectable()
export class EquipamentoService {
  constructor(
    @InjectModel(Equipamento)
    private equipamentoModel: typeof Equipamento,
    private readonly equipamentoRepository: EquipamentoRepository,
  ) {}

  create(createEquipamentoDto: CreateEquipamentoDto) {
    return this.equipamentoModel.create({ ...createEquipamentoDto });
  }

  findAll() {
    return this.equipamentoRepository.findAllWithRelations();
  }

  async findOne(id: number) {
    const equipamento = await this.equipamentoRepository.findByIdWithRelations(id);
    if (!equipamento) {
      throw new NotFoundException('Equipamento não encontrado');
    }
    return equipamento;
  }

  async update(id: number, updateEquipamentoDto: UpdateEquipamentoDto) {
    const equipamento = await this.equipamentoModel.findByPk(id);
    if (!equipamento) {
      throw new NotFoundException('Equipamento não encontrado');
    }
    return equipamento.update(updateEquipamentoDto);
  }

  async remove(id: number) {
    const equipamento = await this.equipamentoModel.findByPk(id);
    if (!equipamento) {
      throw new NotFoundException('Equipamento não encontrado');
    }
    await equipamento.destroy();
    return { message: 'Equipamento removido com sucesso' };
  }

  async toggleAtivo(id: number) {
    const equipamento = await this.equipamentoModel.findByPk(id);
    if (!equipamento) {
      throw new NotFoundException('Equipamento não encontrado');
    }
    equipamento.ativo = !equipamento.ativo;
    await equipamento.save();
    return equipamento;
  }

  async buscarPorTermo(termo: string) {
    return this.equipamentoRepository.buscarPorTermo(termo);
  }

  async listarComFalha() {
    return this.equipamentoModel.findAll({ where: { falha: true } });
  }

  async gerarResumo() {
    const total = await this.equipamentoModel.count();
    const ativos = await this.equipamentoModel.count({ where: { ativo: true } });
    const inativos = total - ativos;
    const comFalha = await this.equipamentoModel.count({ where: { falha: true } });

    return {
      total,
      ativos,
      inativos,
      comFalha,
    };
  }
}
