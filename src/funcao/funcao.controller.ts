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
import { FuncaoService } from './funcao.service';
import { Funcao } from './funcao.model';

@Controller('funcaos')
export class FuncaoController {
  constructor(private readonly service: FuncaoService) {}

  @Get()
  async listar(): Promise<Funcao[]> {
    return this.service.listar();
  }

  @Get(':id')
  async visualizar(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Funcao | null> {
    return this.service.vizualisar(id);
  }

  @Post()
  async criar(@Body() dados: Partial<Funcao>): Promise<Funcao> {
    return this.service.criar(dados);
  }

  @Put(':id')
  async atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: Partial<Funcao>,
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
      return { message: 'Função ativada com sucesso' };
    } catch (error) {
      throw new Error('Erro ao ativar Função');
    }
  }

  @Get(':id/desativar')
  async desativar(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.service.desativar(id);
      return { message: 'Função desativada com sucesso' };
    } catch (error) {
      throw new Error('Erro ao desativar Função');
    }
  }
}
