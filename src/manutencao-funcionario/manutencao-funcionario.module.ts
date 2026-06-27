import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ManutencaoFuncionario } from './manutencao-funcionario.model';
import { ManutencaoFuncionarioService } from './manutencao-funcionario.service';
import { ManutencaoFuncionarioController } from './manutencao-funcionario.controller';
import { Manutencao } from '../manutencao/manutencao.model';
import { Funcionario } from '../funcionario/funcionario.model';

@Module({
  imports: [SequelizeModule.forFeature([ManutencaoFuncionario, Manutencao, Funcionario])],
  providers: [ManutencaoFuncionarioService],
  controllers: [ManutencaoFuncionarioController],
  exports: [ManutencaoFuncionarioService],
})
export class ManutencaoFuncionarioModule {}
