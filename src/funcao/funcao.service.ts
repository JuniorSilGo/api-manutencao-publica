import { Injectable } from '@nestjs/common';
import { FuncaoRepository } from './funcao.repository';
import { Funcao } from './funcao.model';
import { FuncaoDto } from './dto/funcao.dto';
import { FuncaoUpdateDto } from './dto/funcao-update.dto';

@Injectable()
export class FuncaoService {
  constructor(private readonly repository: FuncaoRepository) {}

  async listar(): Promise<Funcao[]> {
    return this.repository.getAll();
  }

  async vizualisar(id: number): Promise<Funcao | null> {
    return this.repository.getOne(id);
  }

  async criar(dados: FuncaoDto): Promise<Funcao> {
    return this.repository.create(dados);
  }

  async atualizar(id: number, dados: FuncaoUpdateDto): Promise<[number]> {
    return this.repository.update(id, dados);
  }

  async deletar(id: number): Promise<number> {
    return this.repository.destroy(id);
  }

  async ativar(id: number) {
    const funcao = await this.repository.getOne(id);
    if (!funcao) throw new Error('Função não encontrada!');
    if (funcao.dataValues.ativo == 1)
      throw new Error('Função já está ativada!');
    return this.repository.enable(id);
  }

  async desativar(id: number) {
    const funcao = await this.repository.getOne(id);
    if (!funcao) throw new Error('Função não encontrada!');
    if (funcao.dataValues.ativo == 0)
      throw new Error('Função já está desativada!');
    return this.repository.disable(id);
  }
}
