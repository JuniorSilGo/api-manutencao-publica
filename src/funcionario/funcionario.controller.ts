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
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './funcionario.model';
import { FuncionarioDto } from './dto/funcionario.dto';
import { FuncionarioUpdateDto } from './dto/funcionario-update.dto';

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
  @UsePipes(new ValidationPipe())
  async criar(@Body() dados: FuncionarioDto): Promise<Funcionario> {
    return this.service.criar(dados);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: FuncionarioUpdateDto,
  ): Promise<[number]> {
    return this.service.atualizar(id, dados as any);
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
      throw new Error(error.message);
    }
  }

  @Get(':id/desativar')
  async desativar(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.service.desativar(id);
      return { message: 'Funcionário desativado com sucesso' };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
