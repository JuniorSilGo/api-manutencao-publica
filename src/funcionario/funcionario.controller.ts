import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './funcionario.model';

@Controller('funcionarios')
export class FuncionarioController {
  constructor(private readonly service: FuncionarioService) {}

  @Get()
  async listar(): Promise<Funcionario[]> {
    return this.service.listar();
  }

  @Get(':id')
  async visualizar(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Funcionario | null> {
    return this.service.vizualisar(id);
  }

  @Post()
  async criar(@Body() dados: Partial<Funcionario>): Promise<Funcionario> {
    return this.service.criar(dados);
  }

  @Put(':id')
  async atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: Partial<Funcionario>,
  ): Promise<[number]> {
    return this.service.atualizar(id, dados);
  }

  @Delete(':id')
  async deletar(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return this.service.deletar(id);
  }

  @Get(':id/ativar')
  async ativar(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.service.ativar(id);
      return { message: 'Funcionário ativado com sucesso' };
    } catch (error) {
      throw new Error('Erro ao ativar funcionário');
    }
  }

  @Get(':id/desativar')
  async desativar(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.service.desativar(id);
      return { message: 'Funcionário desativado com sucesso' };
    } catch (error) {
      throw new Error('Erro ao desativar funcionário');
    }
  }
}
