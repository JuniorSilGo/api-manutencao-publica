import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { EquipamentoService } from './equipamento.service';
import { CreateEquipamentoDto } from './dto/create-equipamento.dto';
import { UpdateEquipamentoDto } from './dto/update-equipamento.dto';

@Controller('equipamentos')
export class EquipamentoController {
  constructor(private readonly equipamentoService: EquipamentoService) {}

  @Post()
  create(@Body() createEquipamentoDto: CreateEquipamentoDto) {
    return this.equipamentoService.create(createEquipamentoDto);
  }

  @Get()
  findAll() {
    return this.equipamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.equipamentoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEquipamentoDto: UpdateEquipamentoDto,
  ) {
    return this.equipamentoService.update(id, updateEquipamentoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.equipamentoService.remove(id);
  }

  @Patch(':id/ativar')
  toggleAtivo(@Param('id', ParseIntPipe) id: number) {
    return this.equipamentoService.toggleAtivo(id);
  }

  @Get('buscar/:termo')
  buscarPorTermo(@Param('termo') termo: string) {
    return this.equipamentoService.buscarPorTermo(termo);
  }

  @Get('com-falha')
  listarComFalha() {
    return this.equipamentoService.listarComFalha();
  }

  @Get('resumo')
  resumo() {
    return this.equipamentoService.gerarResumo();
  }
}
