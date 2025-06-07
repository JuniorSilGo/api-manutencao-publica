import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { EquipamentoService } from './equipamento.service';
import { Equipamento } from './equipamento.model';

@Controller('equipamentos')
export class EquipamentoController {
  constructor(private readonly service: EquipamentoService) {}

  @Get()
  async listar(): Promise<Equipamento[]> {
    return this.service.listar();
  }

  @Get(':id')
  async visualizar(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Equipamento | null> {
    return this.service.visualizar(id);
  }

  @Post()
  async criar(@Body() dados: Partial<Equipamento>): Promise<Equipamento> {
    return this.service.criar(dados);
  }

  @Put(':id')
  async atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: Equipamento,
  ): Promise<[number]> {
    return this.service.atualizar(id, dados);
  }

  @Patch(':id')
  async atualizarParcial(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: Partial<Equipamento>,
  ): Promise<[number]> {
    return this.service.atualizar(id, dados);
  }

  @Delete(':id')
  async deletar(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return this.service.deletar(id);
  }
}
