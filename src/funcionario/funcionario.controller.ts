import {   Controller,Get,Post,Put,Delete,Param,Body,ParseIntPipe,UsePipes,ValidationPipe,Patch } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './funcionario.model';
import { FuncionarioDto } from './dto/funcionario.dto';
import { FuncionarioUpdateDto } from './dto/funcionario-update.dto';
import { AtualizarIdFuncaoDto } from './dto/funcionario-id-funcao.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Funcionário')
@Controller('funcionarios')
export class FuncionarioController {
  constructor(private readonly service: FuncionarioService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os funcionários.' })
  async listar(): Promise<Funcionario[]> {
    return this.service.listar();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista um funcionário pelo ID.' })
  async visualizar(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Funcionario | null> {
    return this.service.vizualisar(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo funcionário.' })
  @UsePipes(new ValidationPipe())
  async criar(@Body() dados: FuncionarioDto): Promise<Funcionario> {
    return this.service.criar(dados);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um funcionário pelo ID.' })
  @UsePipes(new ValidationPipe())
  async atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: FuncionarioUpdateDto,
  ): Promise<[number]> {
    return this.service.atualizar(id, dados as any);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um funcionário pelo ID.' })
  async deletar(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return this.service.deletar(id);
  }

  @Get(':id/ativar')
  @ApiOperation({ summary: 'Ativa um funcionário pelo ID.' })
  async ativar(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.service.ativar(id);
      return { message: 'Funcionário ativado com sucesso' };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Get(':id/desativar')
  @ApiOperation({ summary: 'Desativa um funcionário pelo ID.' })
  async desativar(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.service.desativar(id);
      return { message: 'Funcionário desativado com sucesso' };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Patch(':id/funcao')
  @ApiOperation({ summary: 'Atualiza o campo ID_FUNCAO de um funcionário pelo ID.' })
  async atualizarFuncao(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: AtualizarIdFuncaoDto,
  ) {
    return this.service.atualizarFuncao(id, dados.id_funcao);
  }
  
}
