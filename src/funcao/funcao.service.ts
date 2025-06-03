import { Injectable } from '@nestjs/common';
import { FuncaoRepository } from './funcao.repository';
import { Funcao } from './funcao.model';
import { FuncaoDto } from './dto/funcao.dto';
import { FuncaoUpdateDto } from './dto/funcao-update.dto';
import { FuncaoComFuncionariosDto, FuncionarioSimplesDto } from './dto/funcao-com-funcionarios.dto';

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

  async ativar(id: number) { //REGRA DE NEGOCIO: verifica se o cadastro já esta ativado, só ativa quando esta desativado 
    const funcao = await this.repository.getOne(id);
    if (!funcao) throw new Error('Função não encontrada!');
    if (funcao.dataValues.ativo == 1)
      throw new Error('Função já está ativada!');
    return this.repository.enable(id);
  }

  async desativar(id: number) { //REGRA DE NEGOCIO: verifica se o cadastro já esta desativado, só desativa quando esta ativado 
    const funcao = await this.repository.getOne(id);
    if (!funcao) throw new Error('Função não encontrada!');
    if (funcao.dataValues.ativo == 0)
      throw new Error('Função já está desativada!');
    return this.repository.disable(id);
  }

  async listarFuncoesComFuncionarios(): Promise<FuncaoComFuncionariosDto[]> {
    const funcoes = await this.repository.getAllWithFuncionarios(); // <- método certo

    return funcoes.map((f) => ({
      id_funcao: f.id_funcao,
      funcao: f.funcao ?? '',
      setor: f.setor ?? '',
      funcionarios: f.funcionarios?.map((func) => ({
        id: func.id_funcionario,
        nome: func.nome ?? '',
      })) ?? [],
    }));
  }

}
