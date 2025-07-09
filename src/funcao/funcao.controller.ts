import {  Controller,Get,Post,Put,Delete,Param,Body,ParseIntPipe,UsePipes,ValidationPipe,Patch, Query} from '@nestjs/common';
import { FuncaoService } from './funcao.service';
import { Funcao } from './funcao.model';
import { FuncaoDto } from './dto/funcao.dto';
import { FuncaoUpdateDto } from './dto/funcao-update.dto';
import { FuncionarioService } from '../funcionario/funcionario.service';
import { Funcionario } from '../funcionario/funcionario.model';
import { FuncaoComFuncionariosDto } from './dto/funcao-com-funcionarios.dto';
import { ApiTags, ApiOperation, ApiResponse,ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@ApiTags('Função')
@ApiBearerAuth() 
@UseGuards(JwtAuthGuard)
@Controller('funcoes')
export class FuncaoController {
  constructor(private readonly service: FuncaoService,
              private readonly funcionarioService: FuncionarioService
          ) {}

  @Get()
  @ApiOperation({ summary: 'Lista todas as funções.' })
  async listar(
    @Query('offset') offset = '0',
    @Query('limit') limit = '10',
    ) {
      const parsedOffset = parseInt(offset);
      const parsedLimit = parseInt(limit);
      return this.service.listar(parsedOffset, parsedLimit);
    }

  @Get(':id')
  @ApiOperation({ summary: 'Lista uma função pelo ID.' })
  async visualizar(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Funcao | null> {
    return this.service.vizualisar(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria uma nova função.' })
  @UsePipes(new ValidationPipe())
  async criar(@Body() dados: FuncaoDto): Promise<Funcao> {
    return this.service.criar(dados);
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

  @Get(':id/ativar')
  @ApiOperation({ summary: 'Ativa uma função pelo ID.' })
  async ativar(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.service.ativar(id);
      return { message: 'Função ativada com sucesso' };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Get(':id/desativar')
  @ApiOperation({ summary: 'Desativa uma função pelo ID.' })
  async desativar(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.service.desativar(id);
      return { message: 'Função desativada com sucesso' };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Get('listar/funcionarios')
  @ApiOperation({ summary: 'Lista todos of funcionários dentro de cada função.' })
  async listarTodasComFuncionarios(): Promise<FuncaoComFuncionariosDto[]> {
    // console.log('ENTROU /funcoes/com-funcionarios')
    return this.service.listarFuncoesComFuncionarios();
  }

  @Get(':id/funcionarios')
  @ApiOperation({ summary: 'Lista todos of funcionários dentro de uma função pelo ID.' })
  async listarFuncionarios(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Funcionario[]> {
    // console.log('ENTROU  /funcoes/ID/funcionarios')
    return this.funcionarioService.listarPorFuncao(id);
  }

//   @Get('debug/teste')
//   async rotaTeste(): Promise<string> {
//     return 'rota achada';
//   }
}
