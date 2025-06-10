import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Relatorio } from './relatorio.model';
import { RelatorioEquipamento } from './relatorios-equipamentos.model';
import { Equipamento } from '../equipamento/equipamento.model';
import { RelatorioRepository } from './relatorio.repository';
import { RelatorioService } from './relatorio.service';
import { RelatorioController } from './relatorio.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Relatorio,
      RelatorioEquipamento,
      Equipamento,
    ]),
  ],
  controllers: [RelatorioController],
  providers: [RelatorioRepository, RelatorioService],
})
export class RelatorioModule {}
