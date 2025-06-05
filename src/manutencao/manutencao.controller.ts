import { Controller, Get } from '@nestjs/common';
import { ManutencaoService } from './manutencao.service';
import { Manutencao } from './manutencao.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Manutenção')
@Controller('manutencao')
export class ManutencaoController {
  constructor(private readonly service: ManutencaoService) {}
  @ApiOperation({
    summary: 'Lista todas as manutenções cadastradas na base de dados.',
  })
  @Get()
  async listar(): Promise<Manutencao[]> {
    return this.service.listar();
  }
}
