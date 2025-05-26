import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Funcao } from './funcao.model';
import { FuncaoController } from './funcao.controller';
import { FuncaoService } from './funcao.service';
import { FuncaoRepository } from './funcao.repository';

@Module({
  imports: [SequelizeModule.forFeature([Funcao])],
  controllers: [FuncaoController],
  providers: [FuncaoService, FuncaoRepository],
  exports: [FuncaoRepository], // <- necessário para que outros módulos usem

})
export class FuncaoModule {}
