import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Equipamento } from './equipamento.model';
import { CreateEquipamentoDto } from './dto/create-equipamento.dto';
import { UpdateEquipamentoDto } from './dto/update-equipamento.dto';
import { Funcionario } from '../funcionario/funcionario.model';

@Injectable()
export class EquipamentoService {
  constructor(
    @InjectModel(Equipamento)
    private equipamentoModel: typeof Equipamento,
    @InjectModel(Funcionario)
    private funcionarioModel: typeof Funcionario,
  ) {}

  async findAll(): Promise<Equipamento[]> {
    return this.equipamentoModel.findAll({
      include: [{ model: Funcionario, as: 'responsavel' }],
    });
  }

  async findOne(id: number): Promise<Equipamento> {
    const equipamento = await this.equipamentoModel.findByPk(id, {
      include: [{ model: Funcionario, as: 'responsavel' }],
    });

    if (!equipamento) {
      throw new NotFoundException(`Equipamento com ID ${id} não encontrado`);
    }

    return equipamento;
  }

  async create(dto: CreateEquipamentoDto): Promise<Equipamento> {
  if (dto.id_responsavel) {
    const exists = await this.funcionarioModel.findByPk(dto.id_responsavel);
    if (!exists) {
      throw new BadRequestException(`Responsável com ID ${dto.id_responsavel} não encontrado`);
    }
  }

  // Mapeando apenas os campos necessários para o modelo
  const { nome, descricao, id_responsavel, ...rest } = dto;
  const data: any = { nome, descricao, ...rest };
  if (id_responsavel !== undefined) {
    data.id_responsavel = id_responsavel;
  }
  return this.equipamentoModel.create(data);
}

  async update(id: number, dto: UpdateEquipamentoDto): Promise<Equipamento> {
    const equipamento = await this.findOne(id);

    if (dto.id_responsavel) {
      const exists = await this.funcionarioModel.findByPk(dto.id_responsavel);
      if (!exists) {
        throw new BadRequestException(`Responsável com ID ${dto.id_responsavel} não encontrado`);
      }
    }

    await equipamento.update(dto);
    return equipamento;
  }

  async remove(id: number): Promise<void> {
    const equipamento = await this.findOne(id);
    await equipamento.destroy();
  }

  async toggleAtivo(id: number): Promise<Equipamento> {
    const equipamento = await this.findOne(id);
    equipamento.ativo = !equipamento.ativo;
    return equipamento.save();
  }
}
