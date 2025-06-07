import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Equipamento } from './equipamento.model';
import { EquipamentoController } from './equipamento.controller';
import { EquipamentoService } from './equipamento.service';
import { EquipamentoRepository } from './equipamento.repository';

@Module({
  imports: [SequelizeModule.forFeature([Equipamento])],
  controllers: [EquipamentoController],
  providers: [EquipamentoService, EquipamentoRepository],
})
export class EquipamentoModule {}
