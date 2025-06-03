import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FuncaoService } from './funcao.service';
import { Funcao } from './funcao.model';
import { FuncaoDto } from './dto/funcao.dto';
import { FuncaoUpdateDto } from './dto/funcao-update.dto';

@Controller('funcoes')
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
  @UsePipes(new ValidationPipe())
  async criar(@Body() dados: FuncaoDto): Promise<Funcao> {
    return this.service.criar(dados);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: FuncaoUpdateDto,
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
      throw new Error(error.message);
    }
  }

  @Get(':id/desativar')
  async desativar(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.service.desativar(id);
      return { message: 'Função desativada com sucesso' };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
