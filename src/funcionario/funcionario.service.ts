import { Injectable } from '@nestjs/common';
import { FuncionarioRepository } from './funcionario.repository';
import { Funcionario } from './funcionario.model';
import { FuncaoRepository } from '../funcao/funcao.repository';
import { FuncionarioDto } from './dto/funcionario.dto';
import { FuncionarioUpdateDto } from './dto/funcionario-update.dto';
import { ServicoRepository } from '../servico/servico.repository'; 
import { Servico } from '../servico/servico.model'; 

@Injectable()
export class FuncionarioService {
  constructor(
    private readonly repository: FuncionarioRepository,
    private readonly funcaoRepository: FuncaoRepository,
    private readonly servicoRepository: ServicoRepository, //  crude junior
  ) {}

  async listar(): Promise<Funcionario[]> {
    return this.repository.getAll();
  }

  async vizualisar(id: number): Promise<Funcionario | null> {
    return this.repository.getOne(id);
  }

  async criar(dados: FuncionarioDto): Promise<Funcionario> {
    const funcao = await this.funcaoRepository.getOne(dados.id_funcao);
    if (!funcao) {
      throw new Error(`Função com ID ${dados.id_funcao} não encontrada`);
    }
    return this.repository.create(dados);
  }

  async atualizar(id: number, dados: FuncionarioUpdateDto): Promise<[number]> {
    return this.repository.update(id, dados as any);
  }

  async deletar(id: number): Promise<number> {
    return this.repository.destroy(id);
  }

  async ativar(id: number) {
    const funcionario = await this.repository.getOne(id);
    if (!funcionario) throw new Error('Funcionário não encontrado!');
    if (funcionario.dataValues.ativo == 1)
      throw new Error('Funcionário já está ativado!');
    return this.repository.enable(id);
  }

  async desativar(id: number) {
    const funcionario = await this.repository.getOne(id);
    if (!funcionario) throw new Error('Funcionário não encontrado!');
    if (funcionario.dataValues.ativo == 0)
      throw new Error('Funcionário já está desativado!');
    return this.repository.disable(id);
  }

  async listarPorFuncao(id_funcao: number): Promise<Funcionario[]> {
    return this.repository.getByFuncao(id_funcao);
  }

  async atualizarFuncao(
    id_funcionario: number,
    id_funcao: number,
  ): Promise<Funcionario> {
    const funcao = await this.funcaoRepository.getOne(id_funcao);
    if (!funcao) {
      throw new Error(`Função com ID ${id_funcao} não existe`);
    }

    await this.repository.update(id_funcionario, { id_funcao });

    const funcionarioAtualizado = await this.repository.getOne(id_funcionario);

    if (!funcionarioAtualizado) {
      throw new Error('Funcionário não encontrado após atualização');
    }

    return funcionarioAtualizado;
  }

  async listarServicos(id_funcionario: number): Promise<Servico[]> {
    return this.servicoRepository.listarPorFuncionario(id_funcionario);
  }
}
