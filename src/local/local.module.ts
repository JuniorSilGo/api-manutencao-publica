import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Local } from './local.model';
import { LocalService } from './local.service';
import { LocalController } from './local.controller';
import { Equipamento } from '../equipamento/equipamento.model';

@Module({
  imports: [SequelizeModule.forFeature([Local, Equipamento])],
  providers: [LocalService],
  controllers: [LocalController],
  exports: [LocalService],
})
export class LocalModule {}