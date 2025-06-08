import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Local } from './local.model';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { Equipamento } from '../equipamento/equipamento.model';

@Injectable()
export class LocalService {
  constructor(
    @InjectModel(Local)
    private localModel: typeof Local,
    @InjectModel(Equipamento)
    private equipamentoModel: typeof Equipamento,
  ) {}

  async create(dto: CreateLocalDto): Promise<Local> {
    return this.localModel.create(dto as any);
  }

  async findAll(): Promise<Local[]> {
    return this.localModel.findAll();
  }

  async findOne(id_local: number): Promise<Local | null> {
    return this.localModel.findOne({ where: { id_local } });
  }

  async update(id_local: number, dto: UpdateLocalDto): Promise<[number]> {
    return this.localModel.update(dto, { where: { id_local } });
  }

  async remove(id_local: number): Promise<number> {
    return this.localModel.destroy({ where: { id_local } });
  }

  async findAtivos(): Promise<Local[]> {
    return this.localModel.findAll({ where: { ativo: true } });
  }

  async findInativos(): Promise<Local[]> {
    return this.localModel.findAll({ where: { ativo: false } });
  }

  async ativar(id_local: number): Promise<[number]> {
    return this.localModel.update({ ativo: true }, { where: { id_local } });
  }

  async inativar(id_local: number): Promise<[number]> {
    return this.localModel.update({ ativo: false }, { where: { id_local } });
  }

  async findByNome(nome: string): Promise<Local[]> {
    return this.localModel.findAll({ where: { nome } });
  }

  // --- Endpoints do Relacionamento ---
  async listarEquipamentos(id_local: number): Promise<Equipamento[]> {
    return this.equipamentoModel.findAll({ where: { id_local } });
  }

  async criarEquipamentoNoLocal(id_local: number, dadosEquipamento: any) {
    return this.equipamentoModel.create({ ...dadosEquipamento, id_local });
  }

  async removerEquipamentoDeLocal(id_local: number, id_equipamento: number) {
    return this.equipamentoModel.destroy({ where: { id_equipamento, id_local } });
  }
}