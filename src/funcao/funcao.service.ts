import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { FuncaoRepository } from './funcao.repository';
import { Funcao } from './funcao.model';
import { FuncaoDto } from './dto/funcao.dto';
import { FuncaoUpdateDto } from './dto/funcao-update.dto';
import { FuncaoComFuncionariosDto, FuncionarioSimplesDto } from './dto/funcao-com-funcionarios.dto';
import { ServicoRepository } from '../servico/servico.repository';
import { Servico } from '../servico/servico.model';

@Injectable()
export class FuncaoService {
  constructor(
    private readonly repository: FuncaoRepository,
    private readonly servicoRepository: ServicoRepository
  ) {}

  async listar(): Promise<Funcao[]> {
    return this.repository.getAll();
  }

  async visualizar(id: number): Promise<Funcao | null> {
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
    if (!funcao) throw new NotFoundException('Função não encontrada');
    if (funcao.dataValues.ativo == 1)
      throw new BadRequestException('Função já está ativada');
    return this.repository.enable(id);
  }

  async desativar(id: number) {
    const funcao = await this.repository.getOne(id);
    if (!funcao) throw new NotFoundException('Função não encontrada');
    if (funcao.dataValues.ativo == 0)
      throw new BadRequestException('Função já está desativada');
    return this.repository.disable(id);
  }

  async listarFuncoesComFuncionarios(): Promise<FuncaoComFuncionariosDto[]> {
    const funcoes = await this.repository.getAllWithFuncionarios();

    return funcoes.map((f) => ({
      id_funcao: f.id_funcao,
      funcao: f.funcao ?? '',
      setor: f.setor ?? '',
      funcionarios: f.funcionarios?.map((func) => ({
        id: func.id_funcionario ?? 0,
        nome: func.nome ?? '',
      })) ?? [],
    }));
  }

  async listarServicos(id_funcao: number): Promise<Servico[]> {
    return this.servicoRepository.listarPorFuncao(id_funcao);
  }
}
