import { Module } from '@nestjs/common';
import { ManutencaoController } from './manutencao.controller';
import { ManutencaoService } from './manutencao.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Manutencao } from './manutencao.model';
import { ManutencaoRepository } from './manutencao.repository';

@Module({
  imports: [SequelizeModule.forFeature([Manutencao])],
  controllers: [ManutencaoController],
  providers: [ManutencaoService, ManutencaoRepository],
})
export class ManutencaoModule {}
