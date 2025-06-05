import { Module } from '@nestjs/common';
import { ServicoController } from './servico.controller';
import { ServicoService } from './servico.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Servico } from './servico.model';
import { ServicoRepository } from './servico.repository';

@Module({
  imports: [SequelizeModule.forFeature([Servico])],
  controllers: [ServicoController],
  providers: [ServicoService, ServicoRepository],
})
export class ServicoModule {}
