import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { RelatorioService } from './relatorio.service';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('relatorios')
@Controller('relatorios')
export class RelatorioController {
  constructor(private readonly service: RelatorioService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo relatório' })
  create(@Body() dto: CreateRelatorioDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os relatórios' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar relatório por ID' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover relatório por ID' })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }

  @Get('tipo/:tipo')
  @ApiOperation({ summary: 'Buscar relatórios por tipo' })
  findByTipo(@Param('tipo') tipo: string) {
    return this.service.findByTipo(tipo);
  }

  @Post(':id/gerar')
  @ApiOperation({ summary: 'Gerar conteúdo do relatório' })
  gerar(@Param('id') id: string) {
    return this.service.gerar(+id);
  }

  @Post(':id/equipamentos')
  @ApiOperation({ summary: 'Associar equipamentos ao relatório' })
  addEquipamentos(
    @Param('id') id: string,
    @Body() equipamentoIds: number[],
  ) {
    return this.service.addEquipamentos(+id, equipamentoIds);
  }

  @Get(':id/equipamentos')
  @ApiOperation({ summary: 'Listar equipamentos associados ao relatório' })
  getEquipamentos(@Param('id') id: string) {
    return this.service.getEquipamentos(+id);
  }
}
