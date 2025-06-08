import { Controller, Post, Get, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { LocalService } from './local.service';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';

@Controller('locais')
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  @Post()
  create(@Body() createLocalDto: CreateLocalDto) {
    return this.localService.create(createLocalDto);
  }

  @Get()
  findAll() {
    return this.localService.findAll();
  }

  @Get('ativos')
  findAtivos() {
    return this.localService.findAtivos();
  }

  @Get('inativos')
  findInativos() {
    return this.localService.findInativos();
  }

  @Get(':id_local')
  findOne(@Param('id_local') id_local: string) {
    return this.localService.findOne(+id_local);
  }

  // --- ENDPOINT COM RELACIONAMENTO ---
  @Get(':id_local/equipamentos')
  listarEquipamentos(@Param('id_local') id_local: string) {
    return this.localService.listarEquipamentos(+id_local);
  }

  @Post(':id_local/equipamentos')
  criarEquipamentoNoLocal(@Param('id_local') id_local: string, @Body() dadosEquipamento: any,) {
    return this.localService.criarEquipamentoNoLocal(+id_local, dadosEquipamento);
  }

  @Delete(':id_local/equipamentos/:id_equipamento')
  removerEquipamentoDeLocal(@Param('id_local') id_local: string, @Param('id_equipamento') id_equipamento: string,) {
    return this.localService.removerEquipamentoDeLocal(+id_local, +id_equipamento);
  }
  //Fim endpoints de relacionamento

  @Patch(':id_local')
  update(@Param('id_local') id_local: string, @Body() updateLocalDto: UpdateLocalDto) {
    return this.localService.update(+id_local, updateLocalDto);
  }

  @Delete(':id_local')
  remove(@Param('id_local') id_local: string) {
    return this.localService.remove(+id_local);
  }

  @Patch(':id_local/ativar')
  ativar(@Param('id_local') id_local: string) {
    return this.localService.ativar(+id_local);
  }

  @Patch(':id_local/inativar')
  inativar(@Param('id_local') id_local: string) {
    return this.localService.inativar(+id_local);
  }

  @Get('busca')
  findByNome(@Query('nome') nome: string) {
    return this.localService.findByNome(nome);
  }
}