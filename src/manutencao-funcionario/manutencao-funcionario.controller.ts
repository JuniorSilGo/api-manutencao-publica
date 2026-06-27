import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ManutencaoFuncionarioService } from './manutencao-funcionario.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Manutenção-Funcionário')
@Controller('manutencoes-funcionarios')
export class ManutencaoFuncionarioController {
  constructor(private readonly service: ManutencaoFuncionarioService) {}

  @Post()
  @ApiOperation({ summary: 'Associar um funcionário a uma manutenção' })
  create(
    @Body() dto: { manutencaoId: number; funcionarioId: number },
  ) {
    return this.service.create(dto.manutencaoId, dto.funcionarioId);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as associações' })
  findAll() {
    return this.service.findAll();
  }

  @Get('manutencao/:manutencaoId')
  @ApiOperation({ summary: 'Listar funcionários de uma manutenção' })
  findByManutencao(@Param('manutencaoId', ParseIntPipe) manutencaoId: number) {
    return this.service.findByManutencao(manutencaoId);
  }

  @Get('funcionario/:funcionarioId')
  @ApiOperation({ summary: 'Listar manutenções de um funcionário' })
  findByFuncionario(@Param('funcionarioId', ParseIntPipe) funcionarioId: number) {
    return this.service.findByFuncionario(funcionarioId);
  }

  @Delete(':manutencaoId/:funcionarioId')
  @ApiOperation({ summary: 'Remover associação' })
  delete(
    @Param('manutencaoId', ParseIntPipe) manutencaoId: number,
    @Param('funcionarioId', ParseIntPipe) funcionarioId: number,
  ) {
    return this.service.delete(manutencaoId, funcionarioId);
  }
}
