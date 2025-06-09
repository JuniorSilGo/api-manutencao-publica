import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Local } from './local.model';
import { LocalService } from './local.service';
import { LocalController } from './local.controller';

@Module({
  imports: [SequelizeModule.forFeature([Local])],
  providers: [LocalService],
  controllers: [LocalController],
})
export class LocalModule {}