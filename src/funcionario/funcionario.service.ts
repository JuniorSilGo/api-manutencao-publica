import { Injectable } from '@nestjs/common';
import { FuncionarioRepository } from './funcionario.repository';
import { FuncionarioDto } from './dto/funcionario.dto';
import { FuncionarioUpdateDto } from './dto/funcionario-update.dto';

@Injectable()
export class FuncionarioService {
  constructor(private readonly repository: FuncionarioRepository) {}

  async listar(offset = 0, limit = 10) {
    return this.repository.getAll(offset, limit);
  }

  async vizualisar(id: number) {
    return this.repository.getOne(id);
  }

  async criar(dados: FuncionarioDto) {
    return this.repository.create(dados);
  }

  async atualizar(id: number, dados: FuncionarioUpdateDto) {
    return this.repository.update(id, dados);
  }

  async deletar(id: number) {
    return this.repository.destroy(id);
  }

  async desativar(id: number) {
    return this.repository.disable(id);
  }

  async ativar(id: number) {
    return this.repository.enable(id);
  }

  async atualizarFuncao(id: number, id_funcao: number) {
    return this.repository.update(id, { id_funcao });
  }

  async listarPorFuncao(id_funcao: number) {
    return this.repository.getByFuncao(id_funcao);
  }
}
