import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EquipamentoService } from './equipamento.service';
import { EquipamentoController } from './equipamento.controller';
import { Equipamento } from './equipamento.model';
import { Funcionario } from '../funcionario/funcionario.model';
import { EquipamentoRepository } from './equipamento.repository';

@Module({
  imports: [SequelizeModule.forFeature([Equipamento, Funcionario])],
  controllers: [EquipamentoController],
  providers: [EquipamentoService, EquipamentoRepository],
})
export class EquipamentoModule {}
