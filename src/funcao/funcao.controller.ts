import {  Controller,Get,Post,Put,Patch,Delete,Param,Body,ParseIntPipe,UsePipes,ValidationPipe } from '@nestjs/common';
import { FuncaoService } from './funcao.service';
import { Funcao } from './funcao.model';
import { FuncaoDto } from './dto/funcao.dto';
import { FuncaoUpdateDto } from './dto/funcao-update.dto';
import { FuncionarioService } from '../funcionario/funcionario.service';
import { Funcionario } from '../funcionario/funcionario.model';
import { FuncaoComFuncionariosDto } from './dto/funcao-com-funcionarios.dto';
import { ApiTags, ApiOperation, ApiResponse,ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseGuards, BadRequestException } from '@nestjs/common';

@ApiTags('Função')
@ApiBearerAuth() // Swagger
@UseGuards(JwtAuthGuard)
@Controller('funcoes')
export class FuncaoController {
  constructor(private readonly service: FuncaoService,
              private readonly funcionarioService: FuncionarioService
          ) {}

  @Get()
  @ApiOperation({ summary: 'Lista todas as funções.' })
  async listar(): Promise<Funcao[]> {
    return this.service.listar();
  }

  @Post()
  @ApiOperation({ summary: 'Cria uma nova função.' })
  @UsePipes(new ValidationPipe())
  async criar(@Body() dados: FuncaoDto): Promise<Funcao> {
    return this.service.criar(dados);
  }

  @Get('listar/funcionarios')
  @ApiOperation({ summary: 'Lista todos os funcionários dentro de cada função.' })
  async listarTodasComFuncionarios(): Promise<FuncaoComFuncionariosDto[]> {
    return this.service.listarFuncoesComFuncionarios();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista uma função pelo ID.' })
  async visualizar(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Funcao | null> {
    return this.service.visualizar(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza uma função pelo ID.' })
  @UsePipes(new ValidationPipe())
  async atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: FuncaoUpdateDto,
  ): Promise<[number]> {
    return this.service.atualizar(id, dados);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta uma função pelo ID.' })
  async deletar(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return this.service.deletar(id);
  }

  @Patch(':id/ativar')
  @ApiOperation({ summary: 'Ativa uma função pelo ID.' })
  async ativar(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.service.ativar(id);
      return { message: 'Função ativada com sucesso' };
    } catch (error) {
      throw new BadRequestException(error.message || 'Erro ao ativar função');
    }
  }

  @Patch(':id/desativar')
  @ApiOperation({ summary: 'Desativa uma função pelo ID.' })
  async desativar(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.service.desativar(id);
      return { message: 'Função desativada com sucesso' };
    } catch (error) {
      throw new BadRequestException(error.message || 'Erro ao desativar função');
    }
  }

  @Get(':id/funcionarios')
  @ApiOperation({ summary: 'Lista todos os funcionários dentro de uma função pelo ID.' })
  async listarFuncionarios(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Funcionario[]> {
    return this.funcionarioService.listarPorFuncao(id);
  }

  @Get(':id/servicos')
  @ApiOperation({ summary: 'Lista todos os serviços atribuídos a uma função pelo ID.' })
  async listarServicos(@Param('id', ParseIntPipe) id: number) {
    return this.service.listarServicos(id);
  }
}
