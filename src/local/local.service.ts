import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Local } from './local.model';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';

@Injectable()
export class LocalService {
  constructor(
    @InjectModel(Local)
    private localModel: typeof Local,
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

  async update(id: number, dto: UpdateLocalDto): Promise<[number]> {
    return this.localModel.update(dto, { where: { id } });
  }

  async remove(id: number): Promise<number> {
    return this.localModel.destroy({ where: { id } });
  }

  // Exemplos de extras para os seus 15 endpoints:
  async findAtivos(): Promise<Local[]> {
    return this.localModel.findAll({ where: { ativo: true } });
  }

  async findInativos(): Promise<Local[]> {
    return this.localModel.findAll({ where: { ativo: false } });
  }

  async ativar(id: number): Promise<[number]> {
    return this.localModel.update({ ativo: true }, { where: { id } });
  }

  async inativar(id: number): Promise<[number]> {
    return this.localModel.update({ ativo: false }, { where: { id } });
  }

  async findByNome(nome: string): Promise<Local[]> {
    return this.localModel.findAll({ where: { nome } });
  }
}