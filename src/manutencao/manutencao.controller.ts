import { Controller, Get } from '@nestjs/common';
import { ManutencaoService } from './manutencao.service';
import { Manutencao } from './manutencao.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
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
